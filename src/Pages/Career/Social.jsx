import React from 'react'

const social = () => {
    return (
        <div>
            <div className='social-hero'>
                <img src='./images/social.png' />
            </div>
            <div className='work'>
                <div className='word-heading'>
                    <hr />
                    <h1>WANT TO WORK IN HSC</h1>
                    <hr />
                </div>
                <div className='content'>
                    <p>Join our dynamic team at <span>Hospital Supply Corporation</span>! We’re seeking passionate individuals eager to make an impact. Explore exciting opportunities to grow and thrive in a collaborative environment that values innovation and diversity. Check out our <span>current openings</span> and be part of a company dedicated to fostering talent and driving success. Apply now and take the next step toward a rewarding career with us!</p>
                </div>
                <div className='form2'>
                    <input type="text" placeholder='Full Name' /><br />
                    <input type="text" placeholder='Email' /><br />
                    <input type="text" placeholder='Applied For' /><br />
                    <select id='Department' name='Department'>
                        <option value='Department'>Department</option>
                        <option value='Department'>Accounts</option>
                        <option value='Department'>Electro Medical</option>
                        <option value='Department'>HR</option>
                        <option value='Department'>Pharma</option>
                        <option value='Department'>Marketing</option>
                        <option value='Department'>Sales</option>
                    </select><br />
                    <textarea type='text' placeholder='Cover Letter'></textarea><br />
                    <input type="file" id="myfile" name="myfile" /><br />
                    <button>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default social