import React from 'react'

const Disposables = () => {
    return (
        <div>
            <div className='disposable-heading'>
                <h1>SURGICAL DISPOSABLES</h1>
            </div>
            <div className='surgical'>
                <div className='disposable'>
                    <div className='surgical-heading'>
                        <h1>surgical range</h1>
                        <hr />
                    </div>
                    <div className='surgical-image'>
                        <div className='item'>
                            <img src='./images/INFUSION.png' />
                            <div className='content'>
                                <p>disposable syring</p>
                                <button>read more</button>
                            </div>
                        </div>
                        <div className='item'>
                            <img src='./images/YMS-Insulin.jpg' />
                            <div className='content'>
                                <p>disposable syring</p>
                                <button>read more</button>
                            </div>
                        </div>
                        <div className='item'>
                            <img src='./images/SCALP.png' />
                            <div className='content'>
                                <p>disposable syring</p>
                                <button>read more</button>
                            </div>
                        </div>
                        <div className='item'>
                            <img src='./images/INFUSION-SET.png' />
                            <div className='content'>
                                <p>disposable syring</p>
                                <button>read more</button>
                            </div>
                        </div>
                        <div className='item'>
                            <img src='./images/VINYL.png' />
                            <div className='content'>
                                <p>disposable syring</p>
                                <button>read more</button>
                            </div>
                        </div>
                        <div className='item'>
                            <img src='./images/syring.png' />
                            <div className='content'>
                                <p>disposable syring</p>
                                <button>read more</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='request-appointment'>
                    <div className='appointment-heading'>
                        <h1>FOR ANY QUERY</h1>
                        <hr />
                    </div>
                    <select id='country' name='country'>
                        <option value=''>Choose Product</option>
                        <option value=''>Pharma</option>
                        <option value=''>Regentec</option>
                        <option value=''>Electro Medical division</option>
                        <option value=''>Surgical disposable</option>
                        <option value=''>Water treatment system</option>
                    </select><br />
                    <input type='text' placeholder='Full Name'></input><br />
                    <input type='text' placeholder='Email'></input><br />
                    <input type='text' placeholder='Phone Number'></input><br />
                    <input type='text' placeholder='Subject'></input><br />
                    <textarea type='text' placeholder='Message'></textarea>
                    <br />
                    <div className='bton'>
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Disposables
