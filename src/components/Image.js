import React from 'react'
import image from './image/image.png';
import '../App.css';

export default function Image() {
    return (
        <div>
             <img className="image" src={image} alt="COVID-19" />
        </div>
    )
}
