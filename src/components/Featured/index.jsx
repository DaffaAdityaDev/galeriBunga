import React from 'react'
import './style.scss'
import photos from '../../data'
const Featured = () => {
    
    return (
        <section className='featured-section' data-scroll-section>
            <div className='featured-row-layout'>
                <h6>Hijau</h6>
                <img src={photos[0]} data-scroll/>
            </div>
            <div className='featured-column-layout'>
                <h6>ramah</h6>
                <img src={photos[1]} data-scroll/>
            </div>
        </section>
    )
}

export default Featured;