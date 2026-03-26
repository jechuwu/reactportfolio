"use client"
import { useState } from "react"
import { useLanguage } from "./language-provider"
import Link from "next/link"
import { TranslatedText } from "./translated-text"

const projects = [
    {
        id: 'lumix',
        title: 'Lumix Pro X',
        categoryKey: 'ind_cat1',
        categoryDefault: 'Ingeniería Óptica & CMF',
        shortName: 'Lumix',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHNZPftCCF_h_NCNzJh75HCnxG_lz8HEygVl_BSe7c8BOqzt83bvnNEk_Q8h3Kq8Byj4kGsG3XhioHAzlWlWZvW5ztFzIuJOH_G3UHvy_ohVmp991R75ecADG5h0cPMBPGNqyn-QiDCHUr6MRHMGsL-PWaodl0C8ZsE6ruzx5JBk44kdF6n4zsq6xhsVuKi20GTT4D1W_a-AQFJ6uTx0DQx9X6hAhI8uYhbpwN2zF0L7XURRapC4klDNyQ-UZLrGX-fSUUdwNIYwI',
        link: '/projects/lumix'
    },
    {
        id: 'puriform', // Replaced Chronos with Puriform per user request
        title: 'PuriForm',
        categoryKey: 'ind_cat2',
        categoryDefault: 'Diseño Conceptual',
        shortName: 'Puri',
        img: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/38de92213297753.67439bf6e51c8.jpg', // Placeholder behance link format. If broken, will fix in iteration.
        link: '/projects/puriform'
    },
    {
        id: 'aural',
        title: 'Aural One',
        categoryKey: 'ind_cat3',
        categoryDefault: 'Ergonomía Acústica',
        shortName: 'Aural',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFtYMOq4W3a1IsSfsWKUCJoYMgjmsSzkl_Zx_dEJLE3zJsU85SE1TicjzWk-k8fE5aDcL9RoL7B53bKUUhqweeVeljRhmFJYRrULrFNrYj-zExb0Ox3kcRhT097ujaIbJeLw2GiCPwSDOv6WiNq3h_cWbqHPzkpIsF-FTjdtwHJU1PxmgmLxm8THo2uc5KKXV1e-LGlJ1u_ZaKOwZHdiSqPOmKXdsDOkTulpe1aDMNOFFMl1g1t27XceKwEBRy3YQWhWc5yYIw8y0',
        link: '#'
    },
    {
        id: 'lux',
        title: 'Lux Desk',
        categoryKey: 'ind_cat4',
        categoryDefault: 'Sistemas de Iluminación',
        shortName: 'Lux',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2CflIX5mUyf8zYf_grlKcCsoHZH4jnc8Ti4Q2_59-JnP27PTEWZCbXfbIB0xrketLg55HLHGcgy4U-yWiNPCHU8YN9ty5laVcyfsS-6Cr0GQ-SM1PWfZM1ObasoVnP0IzoNv5tKqSDM1u7DCOHLc3TpTYhlSfik_pO2J9xLdLPG4P2hxj2Sm6rJtn17hqXO31uQKr5sE2DjKtw8svyZylCEgew6sh1lISwjtN90tc-jHz0I2Wi3HC7Oij56lTW9eGb0dn8ATSAcs',
        link: '#'
    },
    {
        id: 'aero',
        title: 'Aero Lounge',
        categoryKey: 'ind_cat5',
        categoryDefault: 'Mobiliario de Autor',
        shortName: 'Aero',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhVpjPwN56OqI15EpTsxaI58AqKcPd2szKmTdZXrpOfpJ7cJ-hsg1NzTvSi6wbYlZxhlFiV_lJshrZ4k9KrHK_A_5Kh4L-vO2U738gipjpXKnRXTKjZOGNuuPzXa5TApUK2IZyJCOWxV-RtlzR3Rp2hC6fUVmUCAvq7q1mEWi5v6PfBOYEOQCnIv6f_mJkclk1oFfJ5ufHZVU90NwSfVGIH-uD_1MNilquc_VH31aQdBjqVHN0qxN1kDWm9RqZT71bNvQ-v_4EtOw',
        link: '#'
    }
]

export function ProjectsGallery() {
    const { t } = useLanguage()
    const [activeId, setActiveId] = useState('lumix')

    return (
        <section className="py-24 bg-white dark:bg-[#121212] transition-colors duration-500" id="projects">
            <div className="max-w-[1600px] mx-auto px-6 md:px-16">
                <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-4">
                    <div>
                        <TranslatedText translationKey="selectedWorks" className="font-body text-[10px] tracking-[0.3em] uppercase text-[#FF4F00] mb-3 block font-bold" />
                        <TranslatedText as="h2" translationKey="portfolioTitle" className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-[#1b1c1b] dark:text-white" />
                    </div>
                    <TranslatedText as="a" translationKey="archive" className="font-headline text-xs font-bold uppercase tracking-widest border-b border-[#1b1c1b] dark:border-white pb-1 hover:text-[#FF4F00] hover:border-[#FF4F00] dark:hover:text-[#FF4F00] dark:hover:border-[#FF4F00] transition-colors text-[#1b1c1b] dark:text-white" />
                </div>
                <div className="flex flex-col md:flex-row gap-4 h-[600px] w-full" id="projects-gallery">
                    {projects.map((project) => {
                        const isActive = activeId === project.id;
                        return (
                            <Link 
                                href={project.link} 
                                key={project.id}
                                onMouseEnter={() => setActiveId(project.id)}
                                onFocus={() => setActiveId(project.id)}
                                className={`relative rounded-2xl overflow-hidden cursor-pointer group transition-all duration-[600ms] ${isActive ? 'flex-[6] md:flex-[5]' : 'flex-[1] md:flex-[1]'}`}
                                style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                            >
                                <img 
                                    alt={project.title}
                                    className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ${isActive ? 'scale-105 grayscale-0' : 'grayscale'}`}
                                    src={project.img} 
                                />
                                <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                                </div>
                                <div className={`absolute bottom-0 left-0 p-8 text-white w-full transition-opacity duration-500 delay-100 mb-0 whitespace-nowrap overflow-hidden ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                                    <h4 className="font-headline text-3xl font-bold mb-2">{project.title}</h4>
                                    <TranslatedText as="p" translationKey={project.categoryKey} className="font-body text-white/70 text-xs uppercase tracking-wider" />
                                </div>
                                <div className={`absolute inset-0 flex items-end justify-center pb-8 transition-opacity duration-300 ${isActive ? 'opacity-0' : 'opacity-100'}`}>
                                    <h4 className="font-headline text-white/50 font-bold tracking-widest uppercase [writing-mode:vertical-lr] rotate-180 mix-blend-difference">
                                        {project.shortName}
                                    </h4>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
