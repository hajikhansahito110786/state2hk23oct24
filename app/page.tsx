"use client"
import Link from "next/link";
import Comp1 from "./component/page";
import { useState } from "react";


export default function Home() {
//let name="karem";
const [name,SetName]=useState("salam")
const [age,SetAge]=useState(40)

const changeName=()=>{
  //name="raheem"
  //name1="123";
  //console.log(name)
  SetName("Raheem")
  SetAge(56)
 // console.log(name)
}


  return (
    <div>

      <h1>
      Sir this is home page
        </h1>
        <br/>
        <h1>usestate  react hook </h1>
        <p>
        
{name} is {age}
<button onClick={changeName}>click button</button>

        </p>

<Comp1/>


<br/>

link for about page<Link href="/about">About...clickme</Link>

<br/>
 link for about All product page <Link href="/products">All Products...clickme</Link>
 <br/> 
    </div>
  );
}
