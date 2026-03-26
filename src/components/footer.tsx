"use client"
import { useLanguage } from "./language-provider"

export function Footer() {
    const { t } = useLanguage()
    return (
        <footer className="w-full py-16 bg-white dark:bg-[#121212] border-t border-black/5 dark:border-white/10 relative z-50 transition-colors duration-500">
            <div className="flex flex-col md:flex-row justify-between items-center px-16 max-w-[1600px] mx-auto">
                <div className="text-lg font-black tracking-tighter text-[#1b1c1b] dark:text-white font-headline mb-8 md:mb-0">
                    <div className="logo-container inline-block">
                        <span className="text-[#FF4F00] font-black">J</span>esus
                        <span className="text-[#FF4F00] ml-1 font-black">E</span>lisaleco
                    </div>
                </div>
                <div className="flex gap-10 mb-8 md:mb-0">
                    <a className="font-headline text-[10px] uppercase tracking-[0.2em] font-bold text-[#1b1c1b] dark:text-white opacity-40 hover:opacity-100 hover:text-[#FF4F00] dark:hover:text-[#FF4F00] transition-colors" href="#">Instagram</a>
                    <a className="font-headline text-[10px] uppercase tracking-[0.2em] font-bold text-[#1b1c1b] dark:text-white opacity-40 hover:opacity-100 hover:text-[#FF4F00] dark:hover:text-[#FF4F00] transition-colors" href="#">LinkedIn</a>
                    <a className="font-headline text-[10px] uppercase tracking-[0.2em] font-bold text-[#1b1c1b] dark:text-white opacity-40 hover:opacity-100 hover:text-[#FF4F00] dark:hover:text-[#FF4F00] transition-colors" href="#">Behance</a>
                </div>
                <p className="font-body text-[9px] uppercase tracking-widest opacity-30 font-medium dark:opacity-50 dark:text-white">
                    {t('footer_copy')}
                </p>
            </div>
        </footer>
    )
}
