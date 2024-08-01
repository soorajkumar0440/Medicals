import React from 'react'

const Product = () => {
    return (
        <div>
            <div className='triangle-shape'>
            </div>
            <div className='heading'>
                <h1>FEATURED PRODUCTS</h1>
            </div>
            <div className='product'>
                <div className='item'>
                    <img src='./images/Teg-6s.png' />
                    <div className='content'>
                        <h3>TEG 6S</h3>
                        <p>The new standard hemostasis management</p>
                    </div>
                    <div className='bton'>
                        <button>More</button>
                    </div>
                </div>
                <div className='item'>
                    <img src='./images/DBB-EXA-ES.png' />
                    <div className='content'>
                        <h3>DBB-EXA ES</h3>
                        <p>Enhancing treatment quality</p>
                    </div>
                    <div className='bton'>
                        <button>More</button>
                    </div>
                </div>
                <div className='item'>
                    <img src='./images/mcs-1.png' />
                    <div className='content'>
                        <h3>MCS+</h3>
                        <p>MULTI COMPONENT SYSTEM</p>
                    </div>
                    <div className='bton'>
                        <button>More</button>
                    </div>
                </div>
                <div className='item'>
                    <img src='./images/CRRT.png' />
                    <div className='content'>
                        <h3>CRRT MACHINE</h3>
                        <p>Automated Total Fluid</p>
                    </div>
                    <div className='bton'>
                        <button>More</button>
                    </div>
                </div>
                <div className='item'>
                    <img src='./images/Air-600-1.png' />
                    <div className='content'>
                        <h3>AIRPRO-600</h3>
                        <p>AIRPRO-600</p>
                    </div>
                    <div className='bton'>
                        <button>More</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Product
