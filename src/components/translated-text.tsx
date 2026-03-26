"use client"

import React, { useEffect, useRef, useState } from "react"
import { useLanguage } from "./language-provider"

interface TranslatedTextProps {
    translationKey: string;
    className?: string;
    as?: React.ElementType;
}

/**
 * Parse a simple HTML string (only <br/> and <span class="...">...</span>) 
 * into React elements safely, avoiding dangerouslySetInnerHTML.
 */
function parseSimpleHtml(html: string): React.ReactNode[] {
    const nodes: React.ReactNode[] = []
    let remaining = html
    let key = 0

    while (remaining.length > 0) {
        // Match <br/> or <br>
        const brMatch = remaining.match(/^<br\s*\/?>/)
        if (brMatch) {
            nodes.push(<br key={key++} />)
            remaining = remaining.slice(brMatch[0].length)
            continue
        }

        // Match <span class="...">...</span>
        const spanMatch = remaining.match(/^<span\s+class="([^"]*)">([\s\S]*?)<\/span>/)
        if (spanMatch) {
            nodes.push(
                <span key={key++} className={spanMatch[1]}>
                    {spanMatch[2]}
                </span>
            )
            remaining = remaining.slice(spanMatch[0].length)
            continue
        }

        // Plain text until next tag
        const nextTag = remaining.indexOf('<')
        if (nextTag === -1) {
            nodes.push(remaining)
            break
        } else if (nextTag > 0) {
            nodes.push(remaining.slice(0, nextTag))
            remaining = remaining.slice(nextTag)
        } else {
            // Unknown tag — just output the character
            nodes.push(remaining.charAt(0))
            remaining = remaining.slice(1)
        }
    }

    return nodes
}

export function TranslatedText({ translationKey, className = "", as: Component = "span" }: TranslatedTextProps) {
    const { t, lang } = useLanguage()
    const isFirstRender = useRef(true)
    const fullText = t(translationKey)
    const hasHtml = typeof fullText === 'string' && /<[a-z][\s\S]*>/i.test(fullText)
    
    const [displayedText, setDisplayedText] = useState(() => fullText)

    useEffect(() => {
        const text = t(translationKey)

        if (isFirstRender.current) {
            isFirstRender.current = false
            setDisplayedText(text)
            return
        }

        // If the text contains HTML, just set it directly (no typewriter for HTML)
        if (/<[a-z][\s\S]*>/i.test(text)) {
            setDisplayedText(text)
            return
        }

        // Plain text typewriter effect
        let i = 0
        let current = ''
        setDisplayedText(current)
        
        let typingTimeout: NodeJS.Timeout

        function type() {
            if (i < text.length) {
                current += text.charAt(i)
                i++
                setDisplayedText(current)
                typingTimeout = setTimeout(type, 10)
            }
        }
        
        type()

        return () => clearTimeout(typingTimeout)
    }, [lang, t, translationKey])

    if (hasHtml) {
        return (
            <Component className={className}>
                {parseSimpleHtml(displayedText)}
            </Component>
        )
    }

    return (
        <Component className={className}>
            {displayedText}
        </Component>
    )
}
