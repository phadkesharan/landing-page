import React from 'react'
import capture from '../assets/capture.PNG'

export default function BottomContent() {
    return (
        <div className="fs-1 text-center" style={{ height: "auto", backgroundColor: "rgb(250, 240, 234)", color: "black" }}>
            <div className='container'>
                Thirdwheel it.
            </div>

            <img src={capture} alt="" />
        </div>
    )
}
