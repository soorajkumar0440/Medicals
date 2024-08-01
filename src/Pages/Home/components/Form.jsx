import React from 'react'

const Form = () => {
    return (
        <div>
            <div className='square'>
            </div>
            <div className='science'>
                <div className='content'>
                    <h1>SCIENCE & SERVICE FOR BETTER HEALTH</h1>
                    <p>Call Now (92 21) 34303170</p>
                    <h3>FOR MORE QUERIES</h3>
                </div>
                <div className='form'>
                    <select id='country' name='country'>
                        <option value=''>Choose Product</option>
                        <option value=''>Pharma</option>
                        <option value=''>Regentec</option>
                        <option value=''>Electro Medical division</option>
                        <option value=''>Surgical disposable</option>
                        <option value=''>Water treatment system</option>
                    </select>
                    <input type='text' placeholder='Full Name'></input><br />
                    <input type='text' placeholder='Email'></input><br />
                    <input type='text' placeholder='Phone Number'></input><br />
                    <input type='text' placeholder='Subject'></input><br />
                    {/* <input type='text' placeholder='Message'></input> */}
                    <textarea type='text' placeholder='Message'></textarea>
                    <br />
                    <div className='bton'>
                        <button>submit</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Form
