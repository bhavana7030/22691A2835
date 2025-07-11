import React from 'react'

function logg(stack,level,pkg,message) {
 try{
    fetch("http://20.244.56.144/evaluation-service/logs",{
        method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stack,level,package:pkg,message})
    })
 }
 catch(err){
    console.err("log fail")

 }
}

export default logg