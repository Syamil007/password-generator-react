import React, { useState } from 'react'
import { Password_handle } from './pass_2';

function Pass() {


    let [state,setState]= useState({
        generatedpassword: '',
        passwordlength: 20,
        symbols: false,
        numbers: false,
        lower: false,
        upper: false
    });

    let updateInput=(event)=>{
        setState({
            ...state,
            [event.target.name]: event.target.value
        });
    };

    let updateCheckBox=(event)=>{
        setState({
            ...state,
            [event.target.name]: event.target.checked
        });
    };

    let handlepassword=(event)=>{
        event.preventDefault();
        let objectPasswordd = Password_handle.getpasswordObject(state);
        let finalPass= Password_handle.generatePass(objectPasswordd, state.passwordlength);
        console.log(finalPass);
        setState({...state,generatedpassword: finalPass});
        
    };

    


  return (
    <div><h1>Password generator</h1>
        {/* <pre>{JSON.stringify(state)}</pre> */}
        <div className='box'>
            <div className='row'>
              <div className='col-md4'>
                <div className='card shadow'>
                    <div className='card header'>
                            <p className='h4'></p>
                    </div>

                    <div className='card body'>
                    <form onSubmit={handlepassword}>
                        <div>
                           <div>
                             <span>Password </span>
                                <input  name='generatedpassword' onChange={updateInput} value={state.generatedpassword} type="text" placeholder='generate password'></input>
                            <span><i></i></span>
                            
                            </div>
                        </div>

                        <div>

                            <div>
                                <input required={true} name="passwordlength" onChange={updateInput} value={state.passwordlength} type='number' placeholder='password length'></input>
                                <span>password length</span>
                            </div>
                        </div>
                        <div>
                            <div>
                                <span>
                                    <input name="symbols" onChange={updateCheckBox} type="checkbox" ></input>
                                </span>
                                <input  disabled={true} type="text" placeholder='Symbols' />
                            </div>
                        </div>
                        <div>
                            <div>
                                <span>
                                    <input name='numbers' onChange={updateCheckBox} type="checkbox" ></input>
                                </span>
                                <input  disabled={true} type="text" placeholder='numbers' />
                            </div>
                        </div>
                        <div>
                            <div>
                                <span>
                                    <input  name='lower' onChange={updateCheckBox} type="checkbox" ></input>
                                </span>
                                <input   disabled={true}  type="text" placeholder='lowercase alphabets' />
                            </div>
                        </div>
                        <div>
                            <div>
                                <span>
                                    <input name='upper' onChange={updateCheckBox} type="checkbox" ></input>
                                </span>
                                <input   disabled={true}  type="text" placeholder='uppercase alphabets' />
                            </div>
                        </div>
                        <div>
                            <input type="submit"  value= "Generate" ></input>
                        </div>
                    </form>
                    </div>

                </div>
              </div>  
            </div>
        </div>

    </div>
  )
}

export default Pass