import React, { useRef, useState } from 'react';
import sha1 from 'sha-1';


function Hash_Sha1() {
    
    let [string_sha, setString_sha]= useState('');
    let refvalue_sha = useRef(null);

    const handle_submit=(v)=>{
        
        let sha1_value = sha1(v);
        console.log(sha1_value);
        setString_sha(sha1_value);
    };

  return (
    <div><h1>Hash sha1 Generator</h1>
        <input placeholder='enter string' ref={refvalue_sha}></input>
        <button  onClick={()=>handle_submit(refvalue_sha.current.value)} >Generate hash</button>
        <h2>Output : {string_sha? string_sha: <></>}</h2>
    </div>
  )
}

export default Hash_Sha1