import React, { useRef, useState } from 'react';
import sha256 from 'sha256';

function Hash_sha256() {


    let [string_sha256, setString_sha256]= useState('');
        let refvalue_sha256 = useRef(null);

    const handle_submit=(v)=>{
        
        let sha1_value256 = sha256(v);
        console.log(sha1_value256);
        setString_sha256(sha1_value256);
    };

  return (
    <div><h1>Hash sha256 Generator</h1>
        <input placeholder='enter string' ref={refvalue_sha256}></input>
        <button  onClick={()=>handle_submit(refvalue_sha256.current.value)} >Generate hash</button>
        <h2>Output : {string_sha256? string_sha256: <></>}</h2>
    </div>
  )
}

export default Hash_sha256