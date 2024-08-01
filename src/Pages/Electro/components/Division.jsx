import React, { useState } from 'react';

const Division = () => {
    const [showDiagnostics, setShowDiagnostics] = useState(false);

    const handleDiagnosticsClick = () => {
        setShowDiagnostics(!showDiagnostics);
    };
    const [showGynecology, setShowGynecology] = useState(false);

    const handleGynecologyClick = () => {
        setShowGynecology(!showGynecology);
    };
    const [showHematology, setShowHematology] = useState(false);
    const handleHematologyClick = () => {
        setShowHematology(!showHematology);
    };
    const [showICUCritical, setShowICUCritical] = useState(false);
    const handleICUCriticalClick = () => {
        setShowICUCritical(!showICUCritical);
    };

    const [showUrology, setShowUrology] = useState(false);
    const handleUrologyClick = () => {
        setShowUrology(!showUrology);
    };


    return (
        <div>
            <div className='electro'>
                <div className='divison'>
                    <div className='division-heading'>
                        <h1>ELECTRO MEDICAL DIVISIONS</h1>
                        <hr />
                    </div>
                    <div className='list'>
                        <ul>
                            <li onClick={handleDiagnosticsClick}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                                Diagnostics</li>
                            {showDiagnostics && (
                                <div className='diagnostics'>
                                    <div className='item'>
                                        <img src='./images/Abbott.png' alt='Abbott' />
                                        <div className='content'>
                                            <p>ABBOTT I-STAT</p>
                                            <button>Read More</button>
                                        </div>
                                    </div>
                                    <div className='item'>
                                        <img src='./images/capture.png' alt='Capture' />
                                        <div className='content'>
                                            <p>ABBOTT I-STAT</p>
                                            <button>Read More</button>
                                        </div>
                                    </div>
                                    <div className='item'>
                                        <img src='./images/echo.png' alt='Echo' />
                                        <div className='content'>
                                            <p>ABBOTT I-STAT</p>
                                            <button>Read More</button>
                                        </div>
                                    </div>
                                    <div className='item'>
                                        <img src='./images/Hemo.png' alt='Hemo' />
                                        <div className='content'>
                                            <p>ABBOTT I-STAT</p>
                                            <button>Read More</button>
                                        </div>
                                    </div>
                                    <div className='item'>
                                        <img src='./images/Lifo.jpg' alt='Lifo' />
                                        <div className='content'>
                                            <p>ABBOTT I-STAT</p>
                                            <button>Read More</button>
                                        </div>
                                    </div>
                                    <div className='item'>
                                        <img src='./images/Lifo2.jpg' alt='Lifo2' />
                                        <div className='content'>
                                            <p>ABBOTT I-STAT</p>
                                            <button>Read More</button>
                                        </div>
                                    </div>
                                    <div className='item'>
                                        <img src='./images/MN.png' alt='MN' />
                                        <div className='content'>
                                            <p>ABBOTT I-STAT</p>
                                            <button>Read More</button>
                                        </div>
                                    </div>
                                    <div className='item'>
                                        <img src='./images/NEO.png' alt='NEO' />
                                        <div className='content'>
                                            <p>ABBOTT I-STAT</p>
                                            <button>Read More</button>
                                        </div>
                                    </div>
                                    <div className='item'>
                                        <img src='./images/Anti.png' alt='Anti' />
                                        <div className='content'>
                                            <p>ABBOTT I-STAT</p>
                                            <button>Read More</button>
                                        </div>
                                    </div>
                                    <div className='item'>
                                        <img src='./images/TEG.png' alt='TEG' />
                                        <div className='content'>
                                            <p>ABBOTT I-STAT</p>
                                            <button>Read More</button>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <li onClick={handleGynecologyClick}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>Gynecology</li>
                            {showGynecology && (
                                <div className='gynecology'>
                                    <div className='item'>
                                        <img src='./images/Kiwi.png' />
                                        <div className='content'>
                                            <p>ABBOTT I-STAT</p>
                                            <button>Read More</button>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <li onClick={handleHematologyClick}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>Hematology</li>
                            {showHematology && (
                                <div className='hematology'>
                                    <div className='item'>
                                        <img src='./images/Cell.png' />
                                        <div className='content'>
                                            <p>ABBOTT I-STAT</p>
                                            <button>Read More</button>
                                        </div>
                                    </div>
                                    <div className='item'>
                                        <img src='./images/Blood.png' />
                                        <div className='content'>
                                            <p>ABBOTT I-STAT</p>
                                            <button>Read More</button>
                                        </div>
                                    </div>
                                    <div className='item'>
                                        <img src='./images/System.png' />
                                        <div className='content'>
                                            <p>ABBOTT I-STAT</p>
                                            <button>Read More</button>
                                        </div>
                                    </div>
                                    <div className='item'>
                                        <img src='./images/MSC.png' />
                                        <div className='content'>
                                            <p>ABBOTT I-STAT</p>
                                            <button>Read More</button>
                                        </div>
                                    </div>
                                    <div className='item'>
                                        <img src='./images/TEG.png' />
                                        <div className='content'>
                                            <p>ABBOTT I-STAT</p>
                                            <button>Read More</button>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <li onClick={handleICUCriticalClick}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>ICU/Critical Care</li>
                            {showICUCritical && (
                                <div className='icu'>
                                    <div className='item'>
                                        <img src='./images/Abbott.png' />
                                        <div className='content'>
                                            <p>ABBOTT I-STAT</p>
                                            <button>Read More</button>
                                        </div>
                                    </div>
                                    <div className='item'>
                                        <img src='./images/Cell.png' />
                                        <div className='content'>
                                            <p>ABBOTT I-STAT</p>
                                            <button>Read More</button>
                                        </div>
                                    </div>
                                    <div className='item'>
                                        <img src='./images/MSC.png' />
                                        <div className='content'>
                                            <p>ABBOTT I-STAT</p>
                                            <button>Read More</button>
                                        </div>
                                    </div>
                                    <div className='item'>
                                        <img src='./images/Hemo.png' />
                                        <div className='content'>
                                            <p>ABBOTT I-STAT</p>
                                            <button>Read More</button>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <li onClick={handleUrologyClick}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>Urology</li>
                            {showUrology && (
                                <div className='urology'>
                                    <div className='item'>
                                        <img src='./images/Dornier.jpg' />
                                        <div className='content'>
                                            <p>ABBOTT I-STAT</p>
                                            <button>Read More</button>
                                        </div>
                                    </div>
                                    <div className='item'>
                                        <img src='./images/Delta.jpg' />
                                        <div className='content'>
                                            <p>ABBOTT I-STAT</p>
                                            <button>Read More</button>
                                        </div>
                                    </div>
                                    <div className='item'>
                                        <img src='./images/Holmium.png' />
                                        <div className='content'>
                                            <p>ABBOTT I-STAT</p>
                                            <button>Read More</button>
                                        </div>
                                    </div>
                                    <div className='item'>
                                        <img src='./images/Intracorporea.png' />
                                        <div className='content'>
                                            <p>ABBOTT I-STAT</p>
                                            <button>Read More</button>
                                        </div>
                                    </div>
                                    <div className='item'>
                                        <img src='./images/Lithobox.png' />
                                        <div className='content'>
                                            <p>ABBOTT I-STAT</p>
                                            <button>Read More</button>
                                        </div>
                                    </div>
                                    <div className='item'>
                                        <img src='./images/Lithobox.jpg' />
                                        <div className='content'>
                                            <p>ABBOTT I-STAT</p>
                                            <button>Read More</button>
                                        </div>
                                    </div>
                                    <div className='item'>
                                        <img src='./images/Urodynamic.png' />
                                        <div className='content'>
                                            <p>ABBOTT I-STAT</p>
                                            <button>Read More</button>
                                        </div>
                                    </div>
                                    <div className='item'>
                                        <img src='./images/Uroflow.png' />
                                        <div className='content'>
                                            <p>ABBOTT I-STAT</p>
                                            <button>Read More</button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </ul>
                    </div>
                </div>
                <div className='request-form'>
                    <div className='request-heading'>
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
        </div >
    );
};

export default Division;
