import React from 'react'

export default function Footer() {
    return (
        <div className="text-center" style={{ height: "auto", backgroundColor: "rgb(101, 145, 101)", color: "white" }}>
            <div className="container fs-1 py-3 px-5 fw-bold">
                ThirdWheel
            </div>

            <div className="container fs-3  py-3 px-8">
                We provide the best in the class e-commerce service, we always there for you <br />
                Let's get started
            </div>

            <div className="container fs-2 py-3 px-5 fw-bold">
                Connect with Us
            </div>

            <hr />
            <div className="container">
                <div className="row">
                    <div className="col">
                        Links
                        <ul className='list-group'>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Hiring</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div class="col">
                        Legals
                        <ul className='list-group'>
                            <li>7019504495</li>
                            <li>Address</li>
                        </ul>
                    </div>
                    <div class="col">
                        Legals
                        <ul className='list-group'>
                            <li>Terms of use</li>
                            <li>Privacy policy</li>
                            <li>Contact information</li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr />

            <div className="container text-align-center fs-6 fw-bold">
                @Copyright 2022 MISUI INDIA PVT LTD.
            </div>
        </div>
    )
}
