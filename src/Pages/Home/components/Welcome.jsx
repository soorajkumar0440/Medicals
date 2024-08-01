import React from 'react'

const Welcome = () => {
    return (
        <div>
            <div className='welcome'>
                <div className='content'>
                    <h1>Welcome to Hsc</h1>
                    <p>Since its inception in 1973 Hospital Supply Corporation, has emerged as a leading organization marketing innovative<span> Electro medical,</span> Surgical disposable, and Pharmaceutical products.</p>
                    <p>Our core strength is our relentless quality of services for which we are preferred over others.</p>
                    <p>We deal with reputed multinational brands around the globe with some of the brands known as pioneers in the field.</p>
                    <button>read more</button>
                </div>
                <div className='image'>
                    <img src='./images/fifty.png' />
                </div>
            </div>
        </div>
    )
}

export default Welcome
