import React from 'react'

const Map = () => {
    return (
        <div>
            <div className='query'>
                <div className='form3'>
                    <div className='quary-heading'>
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
                    {/* <input type='text' placeholder='Message'></input> */}
                    <textarea type='text' placeholder='Message'></textarea>
                    <br />
                    <div className='bton'>
                        <button>submit</button>
                    </div>
                </div>
                <div className='map'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d231682.5382535559!2d67.064521!3d24.862495!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e99a2865495%3A0x984bb10c62eda87f!2sHospital%20Supply%20Corporation!5e0!3m2!1sen!2sus!4v1721332417237!5m2!1sen!2sus" width="600" height="450" ></iframe>
                </div>
            </div>
        </div>
    )
}

export default Map
