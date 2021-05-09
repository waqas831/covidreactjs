import React,{useState} from 'react'
import styled from 'styled-components'
function Welcome() {
    var msg;
    const [counter,updatedcounter]=useState(0)
    const increament=()=>{
        updatedcounter(counter+1)
    }
    const decreament=()=>{
        updatedcounter(counter-1)
        if(counter<=0){
            updatedcounter(counter)
             msg='nagetive numbers cannot allowed in my counter game'
        }
    }
    return (
        <div>
            <Heading>welcome in reactjs components</Heading>
            <Button onClick={increament}>increament</Button><br></br>
            <Div>
                <h1>your counter no is={counter}</h1>
                <h1>{msg}</h1>
            </Div>
            <Button  onClick={decreament}>decreament</Button><br></br>
            
        </div>
    )
}

export default Welcome

const Heading=styled.h1`
font-size:25px;font-weight:bold;font-family:sans-serif;
`
const Button=styled.button`
cursor:pointer;font-size:25px;color:red;border:2px solid green;border-radius:2%;padding:10px;margin:72px;
`
const Div=styled.div`
font-size:25px;color:green;font-style:italic;
`