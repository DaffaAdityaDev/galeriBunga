import React, { useState, useEffect, useRef } from 'react'

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import CustomCursor from "../CustomCursor"
import Header from "../components/Header"
import Featured from "../components/Featured"
import About from "../components/About"
import Gallery from "../components/Gallery"

import "../styles/home.scss"
import useLocoScroll from '../hooks/useLocoScroll'

const Home = () => {
    const [preloader, setPreloader] = useState(true)
    const [timer, setTimer] = useState(3)

    useLocoScroll(!preloader)

    const id = useRef(null)

    const clear = () => {
        window.clearInterval(id.current)
        setPreloader(false)
    }

    useEffect(() => {
        id.current = window.setInterval(() => {
            setTimer(timer => timer - 1)
        }, 1000)
    }, [])

    useEffect(() => {
        if (timer === 0) {
            clear()
        }
    }, [timer])

    return (
        <>
            <CustomCursor />
            {preloader ? (
                <div className="loader-wrapper absolute">
                    <h1>galeri bunga</h1>
                    <h2>Jakarta</h2> 
                </div>
            ) : (
            <div className="main-container" id="main-container" data-scroll-container>
                <Navbar />
                <Header />
                <Featured />
                <About />
                <Gallery />
                <Footer />
            </div>
            )}
        </>
    )
}

export default Home;