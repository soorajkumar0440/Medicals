import React from 'react'
import "./Footer.css"
const Footer = () => {
    return (
        <div>
            <div className='triangle'>
            </div>
            <div className='footer'>
                <div className='business'>
                    <p>Our Business</p>
                    <div className='content'>
                        <a href="/electro"><p>MEDICAL EQUIPMENTS</p></a>
                        <a href="/distribution"><p>DISTRIBUTION</p></a>
                        <p>WATER TREATMENT SOLUTION</p>
                    </div>
                </div>
                <div className='products'>
                    <p>Our Products</p>
                    <div className='content'>
                        <a href="/electro"><p>ELECTRO MEDICAL DIVISION</p></a>
                        <a href="/pharma"><p>PHARMACEUTICALS</p></a>
                        <a href="/surgical"><p>SURGICAL DISPOSABLES</p></a>
                        <p>REGENTEC</p>
                    </div>
                </div>
                <div className='contact'>
                    <p>Contact Information</p>
                    <div className='content'>
                        <div className='phone'>
                            <div className='icon'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                </svg>
                            </div>
                            <a href="https://contacts.google.com/"><p>(92 21) 34303170-72 | 03002034472</p></a>
                        </div>
                        <div className='email'>
                            <div className='icon'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                </svg>
                            </div>
                            <a href="https://mail.google.com/"><p>hsc@hsc.com.pk</p></a>
                        </div>
                        <div className='link'>
                            <div className='icon'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                                </svg>
                            </div>
                            <a href="https://pk.linkedin.com/"><p>www.hsc.com.pk</p></a>
                        </div>
                        <div className='address'>
                            <div className='icon'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>
                            </div>
                            <a href="https://www.google.com/maps/place/HSC/@24.8055468,67.0175702,12z/data=!4m10!1m2!2m1!1shsc!3m6!1s0x3eb33b73c4b58b39:0xe9c14a9969d53363!8m2!3d24.8227798!4d67.1648682!15sCgNoc2OSAQ5yZXBhaXJfc2VydmljZeABAA!16s%2Fg%2F11mbq2r2fh?entry=ttu" target='blank'><p>46-E/2 Block VI, P.E.C.H.S, Karachi.</p></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='copyright'>
                <div className='content'>
                    <div className='copy'>
                        <p>Copyright &copy;2024 all rights reserved</p>
                    </div>
                    <div className='designed'>
                        <p>Designed by<span>Hospital Supply Corporation</span></p>
                    </div>
                </div>
            </div>
            <div className='whatapps'>
                <div className='content'>
                    <p>Need Help? Chat with us</p>
                </div>
                <div className='icon'>
                    <a href="https://www.whatsapp.com/">
                        <img src='./images/wt1.png' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer
