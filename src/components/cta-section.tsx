"use client"
import { TranslatedText } from "./translated-text"

export function CtaSection() {
    return (
        <section className="py-40 bg-[#1b1c1b] dark:bg-[#0a0a0a] text-white transition-colors duration-500" id="contact">
            <div className="max-w-[1600px] mx-auto px-6 md:px-16 text-center">
                <TranslatedText as="h2" translationKey="ctaTitle" className="font-headline text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-16 leading-[1.1]" />
                
                <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-16">
                    <a className="font-headline text-2xl md:text-3xl font-bold hover:text-[#FF4F00] transition-colors border-b-2 border-[#FF4F00]/30 pb-1" href="mailto:hola@jesuselisaleco.com">
                        hola@jesuselisaleco.com
                    </a>
                    <button className="bg-[#FF4F00] text-white px-14 py-6 font-headline font-bold text-xs tracking-widest uppercase hover:bg-white hover:text-[#1b1c1b] transition-all duration-300 shadow-xl hover:shadow-white/20">
                        <TranslatedText translationKey="startProject" />
                    </button>
                </div>
            </div>
        </section>
    )
}
