import md5 from 'md5';
import React, { useRef, useState } from 'react'

function Hash() {
    let [string, setString]= useState('');
    let refvalue = useRef(null);

    const handle_submit=(v)=>{
        let md5_value = md5(v)
        console.log(md5_value);
        setString(md5_value);
    };


  return (
    <div><h1>Hash md5 Generator</h1>
        <input placeholder='enter string' ref={refvalue}></input>
        <button  onClick={()=>handle_submit(refvalue.current.value)} >Generate hash</button>
        <h2>Output : {string? string: <></>}</h2>
    </div>
  )
}

export default Hash