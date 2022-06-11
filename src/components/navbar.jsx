import React from 'react'
import logo from '../assets/logo.png'

export default function Navbar() {
    return (
        <>
            <nav className="navbar" style={{ backgroundColor: "rgb(250, 240, 234)"}}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#" style={{ color: "rgb(101, 145, 101)" }}>
                        <img src={logo}
                            width="24"
                            height="24"
                            className="d-inline-block align-text-top mx-2"
                        />
                        ThirdWheel
                    </a>
                    <a href="" className="nav-item" style={{ color: "rgb(101, 145, 101)" }}>
                        Home
                    </a>
                    <a href="" className="nav-item" style={{ color: "rgb(101, 145, 101)" }}>
                        About Us
                    </a>
                    <a href="" className="nav-item" style={{ color: "rgb(101, 145, 101)" }}>
                        Hiring
                    </a>
                    <a href="" className="nav-item" style={{ color: "rgb(101, 145, 101)" }}>
                        Contact Us
                    </a>
                </div>
            </nav>
        </>
    )
}
