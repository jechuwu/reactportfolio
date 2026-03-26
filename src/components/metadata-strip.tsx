"use client"
import { useLanguage } from "./language-provider"
import { TranslatedText } from "./translated-text"

export function MetadataStrip() {
    return (
        <section className="bg-white dark:bg-[#121212] border-b border-black/5 dark:border-white/10 py-16 transition-colors duration-500">
            <div className="max-w-[1600px] mx-auto px-6 md:px-16">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        <TranslatedText translationKey="enfoque" className="font-body text-[9px] uppercase tracking-widest text-[#FF4F00] font-bold block mb-2" />
                        <TranslatedText as="h3" translationKey="di_title" className="font-headline text-lg font-semibold text-[#1b1c1b] dark:text-white" />
                    </div>
                    <div>
                        <TranslatedText translationKey="experiencia" className="font-body text-[9px] uppercase tracking-widest text-[#FF4F00] font-bold block mb-2" />
                        <h3 className="font-headline text-lg font-semibold text-[#1b1c1b] dark:text-white">8+ Años</h3>
                    </div>
                    <div>
                        <TranslatedText translationKey="reconocimiento" className="font-body text-[9px] uppercase tracking-widest text-[#FF4F00] font-bold block mb-2" />
                        <h3 className="font-headline text-lg font-semibold text-[#1b1c1b] dark:text-white">Red Dot Best 2023</h3>
                    </div>
                    <div>
                        <TranslatedText translationKey="base" className="font-body text-[9px] uppercase tracking-widest text-[#FF4F00] font-bold block mb-2" />
                        <TranslatedText as="h3" translationKey="location" className="font-headline text-lg font-semibold text-[#1b1c1b] dark:text-white" />
                    </div>
                </div>
            </div>
        </section>
    )
}
