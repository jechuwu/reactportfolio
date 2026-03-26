"use client"
import { useLanguage } from "./language-provider"
import { TranslatedText } from "./translated-text"

export function Capabilities() {
    const { t, lang } = useLanguage() // keep t for array values mapping if needed, but we can also handle arrays differently. Wait, arrays are `list1[0]`.

    return (
        <section className="py-32 bg-[#fafafa] dark:bg-[#181818] transition-colors duration-500" id="services">
            <div className="max-w-[1600px] mx-auto px-6 md:px-16">
                <div className="text-center mb-24">
                    <TranslatedText translationKey="especialidad" className="font-body text-[10px] tracking-[0.3em] uppercase text-[#FF4F00] mb-4 block font-bold" />
                    <TranslatedText as="h2" translationKey="capacidades" className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-[#1b1c1b] dark:text-white" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Capability 1 */}
                    <div className="bg-white dark:bg-[#1f1f1f] p-12 border border-black/5 dark:border-white/5 hover:shadow-2xl dark:hover:shadow-white/5 transition-all duration-500 rounded-xl group hover:-translate-y-2">
                        <span className="material-symbols-outlined text-3xl text-[#FF4F00] mb-8 font-light">architecture</span>
                        <TranslatedText as="h3" translationKey="di_conceptual" className="font-headline text-xl font-bold mb-6 text-[#1b1c1b] dark:text-white" />
                        <TranslatedText as="p" translationKey="di_desc" className="font-body text-[#1b1c1b]/60 dark:text-white/60 text-sm leading-relaxed mb-8 min-h-[60px]" />
                        <ul className="space-y-3 opacity-60">
                            {[0, 1, 2].map((i) => (
                                <li key={`${lang}-${i}`} className="flex items-center gap-3 text-xs font-semibold text-[#1b1c1b] dark:text-white">
                                    <span className="w-1 h-1 rounded-full bg-[#FF4F00]"></span>
                                    <TranslatedText translationKey={`list1[${i}]`} />
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Capability 2 */}
                    <div className="bg-white dark:bg-[#1f1f1f] p-12 border border-black/5 dark:border-white/5 hover:shadow-2xl dark:hover:shadow-white/5 transition-all duration-500 rounded-xl group hover:-translate-y-2">
                        <span className="material-symbols-outlined text-3xl text-[#FF4F00] mb-8 font-light">precision_manufacturing</span>
                        <TranslatedText as="h3" translationKey="cmf_title" className="font-headline text-xl font-bold mb-6 text-[#1b1c1b] dark:text-white" />
                        <TranslatedText as="p" translationKey="cmf_desc" className="font-body text-[#1b1c1b]/60 dark:text-white/60 text-sm leading-relaxed mb-8 min-h-[60px]" />
                        <ul className="space-y-3 opacity-60">
                            {[0, 1, 2].map((i) => (
                                <li key={`${lang}-${i}`} className="flex items-center gap-3 text-xs font-semibold text-[#1b1c1b] dark:text-white">
                                    <span className="w-1 h-1 rounded-full bg-[#FF4F00]"></span>
                                    <TranslatedText translationKey={`list2[${i}]`} />
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Capability 3 */}
                    <div className="bg-white dark:bg-[#1f1f1f] p-12 border border-black/5 dark:border-white/5 hover:shadow-2xl dark:hover:shadow-white/5 transition-all duration-500 rounded-xl group hover:-translate-y-2">
                        <span className="material-symbols-outlined text-3xl text-[#FF4F00] mb-8 font-light">view_in_ar</span>
                        <TranslatedText as="h3" translationKey="digital_title" className="font-headline text-xl font-bold mb-6 text-[#1b1c1b] dark:text-white" />
                        <TranslatedText as="p" translationKey="digital_desc" className="font-body text-[#1b1c1b]/60 dark:text-white/60 text-sm leading-relaxed mb-8 min-h-[60px]" />
                        <ul className="space-y-3 opacity-60">
                            {[0, 1, 2].map((i) => (
                                <li key={`${lang}-${i}`} className="flex items-center gap-3 text-xs font-semibold text-[#1b1c1b] dark:text-white">
                                    <span className="w-1 h-1 rounded-full bg-[#FF4F00]"></span>
                                    <TranslatedText translationKey={`list3[${i}]`} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
