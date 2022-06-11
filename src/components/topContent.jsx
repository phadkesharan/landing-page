import React from 'react'
import image from "../assets/image.png"
import cart from "../assets/cart.png"

export default function TopContent() {
    return (
        <div className="fs-1 px-5 text-center" style={{ height: "1000px", backgroundColor: "rgb(250, 240, 234)", color: "black"}}>
            <div>
                Our mission is to digitalise physical market and bridge the gap betweem physical and digital market
            </div>

            <div className="container my-4">
                <img src={image} alt="" />
            </div>

            <div>
                We Present to you ThirdWheel
            </div>

            <div className="container my-4">
                <img src={cart} alt=""  height="400px"/>
            </div>
        </div>
    )
}
