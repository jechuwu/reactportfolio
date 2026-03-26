"use client"

import { useEffect, useRef, useState } from "react"
import { useLanguage } from "./language-provider"

interface TranslatedTextProps {
    translationKey: string;
    className?: string;
    as?: React.ElementType;
}

export function TranslatedText({ translationKey, className = "", as: Component = "span" }: TranslatedTextProps) {
    const { t, lang } = useLanguage()
    const isFirstRender = useRef(true)
    
    // Initialize state with the full text for SSR, then modify it in effect
    const [displayedHtml, setDisplayedHtml] = useState(() => t(translationKey))

    useEffect(() => {
        const fullText = t(translationKey)

        if (isFirstRender.current) {
            isFirstRender.current = false
            return
        }

        let i = 0
        let currentHtml = ''
        setDisplayedHtml(currentHtml)
        
        let typingTimeout: NodeJS.Timeout

        function type() {
            if (i < fullText.length) {
                if (fullText.substring(i, i + 4) === '<br>') {
                    currentHtml += '<br>'
                    i += 4
                } else if (fullText.substring(i, i + 5) === '<br/>') {
                    currentHtml += '<br/>'
                    i += 5
                } else if (fullText.substring(i, i + 6) === '<span ') {
                    let spanEnd = fullText.indexOf('</span>', i) + 7
                    if (spanEnd > 6) {
                        currentHtml += fullText.substring(i, spanEnd)
                        i = spanEnd
                    } else {
                        currentHtml += fullText.charAt(i)
                        i++
                    }
                } else if (fullText.charAt(i) === '<') {
                    let tagEnd = fullText.indexOf('>', i) + 1;
                    if (tagEnd > 0) {
                        currentHtml += fullText.substring(i, tagEnd);
                        i = tagEnd;
                    } else {
                        currentHtml += fullText.charAt(i)
                        i++
                    }
                } else {
                    currentHtml += fullText.charAt(i)
                    i++
                }
                
                setDisplayedHtml(currentHtml)
                typingTimeout = setTimeout(type, 10)
            }
        }
        
        type()

        return () => clearTimeout(typingTimeout)
    }, [lang, t, translationKey])

    return (
        <Component 
            className={className} 
            dangerouslySetInnerHTML={{ __html: displayedHtml }} 
        />
    )
}
