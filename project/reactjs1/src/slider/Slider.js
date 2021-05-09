import React,{useState,useEffect} from 'react'
import './style.css';
import styled from 'styled-components'
import people from './Data';
const welcome={display:'flex',justifyContent:'center'}
function Slider() {
    const [peoples,newpeople]=useState(people)
    const [index,newindex]=useState(0)
    return (
      <Section >
          <div>
        <H2>reviews</H2>
          </div>
          <div>
        {people.map((element,inde)=>{
            const {id,image,title,quote,name}=element;
            return(
                <div key={id}>
                    <img src={image} alt="welcome" />
                    <h4>{name}</h4>
                    <p>
                        <h1>{title}</h1>
                        {quote}
                    </p>

                </div>
            )
        })}
        <button>pre</button><br></br>
        <button>next</button>
          </div>
        </Section>
    )
}

export default Slider
const Section=styled.section`padding-top:20px;width:400px;height:500px;display:flex;justify-content:space-between;text-align:center;`
const H2=styled.h2`text-align:cennter;font-weight:bold;color:green;font-size:50px;`