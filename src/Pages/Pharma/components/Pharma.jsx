import React, { useState } from 'react';

const Pharma = () => {
    const [showMedicine, setshowMedicine] = useState(true);

    const handleMedicineClick = () => {
        setshowMedicine(!showMedicine);
    };

    const [showVaccine, setshowVaccine] = useState(false);

    const handleVaccineClick = () => {
        setshowVaccine(!showVaccine);
    };
    return (
        <div>
            <div className='pharma-heading'>
                <h1>Pharmaceuticals</h1>
            </div>
            <div className='pharmaceuticals'>
                <div className='pharma'>
                    <div className='list'>
                        <ul>
                            <li onClick={handleMedicineClick}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
                            </svg>
                                Medicine</li>
                            {showMedicine && (
                                <div className='medicine'>
                                    <div className='item'>
                                        <img src='./images/MEDICAINE.png' />
                                        <div className='content'>
                                            <p>medicine</p>
                                            <button>read more</button>
                                        </div>
                                    </div>
                                    <div className='item'>
                                        <img src='./images/PINE.png' />
                                        <div className='content'>
                                            <p>pine inj</p>
                                            <button>read more</button>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <li onClick={handleVaccineClick}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                                Vaccine</li>
                            {showVaccine && (
                                <div className='vaccine'>
                                    <div className='item'>
                                        <img src='./images/12.jpg' />
                                        <div className='content'>
                                            <p>Amvax B</p>
                                            <button>read more</button>
                                        </div>
                                    </div>
                                    <div className='item'>
                                        <img src='./images/typbar.jpg' />
                                        <div className='content'>
                                            <p>typbar</p>
                                            <button>read more</button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </ul>
                    </div>
                    <div className='request-form'>
                        <div className='request-heading'>
                            <h1>REQUEST AN APPOINTMENT</h1>
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
        </div>
    )
}

export default Pharma;
