import React, { useEffect, useRef, useState } from 'react'
import './style.scss'
import SectionHeader from '../SectionHeader'
import cn from "classnames";
import gsap from 'gsap'
import SplitText from "../../utils/Split3.min.js"
import useOnScreen from "../../hooks/useOnScreen"

const About = () => {
    const ref = useRef()
    
    const [reveal, setReveal] = useState(false);
    const onScreen = useOnScreen(ref);

    useEffect(() => {
        if (onScreen) setReveal(onScreen)
    }, [onScreen])

    useEffect(() => {
        if (reveal) {
            const split = new SplitText("#headline", {
            type: "lines",
            })
        
            gsap.to(split.lines, {
            duration: 1,
            y: -20,
            opacity: 1,
            stagger: 0.1,
            ease: "power2",
            })
        }
      }, [reveal])

    return (
        <section className={cn("about-section")} data-scroll-section>
            <SectionHeader title="Tentang" />
            <p ref={ref} id='headline' className={cn("about-section", {'is-reveal': reveal})}>
                Bunga adalah bagian dari tanaman yang umumnya berpenampilan 
                indah dan mengeluarkan aroma wangi. Bunga adalah salah satu organ tumbuhan 
                yang mempunyai fungsi biologis. Fungsi biologis bunga adalah untuk memicu proses 
                reproduksi pada tanaman, yaitu dengan cara mempertemukan serbuk sari dan putik.
            </p>
        </section>  
    )
}
export default About;