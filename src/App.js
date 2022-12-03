import "./app.css"
import Header from "./header/header"
import Section from "./section/section";
import { useState } from "react"
import europe from './section/images/europe.png'
import africa from './section/images/africa.png'
import america from './section/images/america.png'
import asia from './section/images/asia.png'
import oceania from './section/images/oceania.png'

function App() {
  const [search,setsearch]=useState("United kingdom")
  const URL = `https://restcountries.com/v3.1/name/${search}`
  function fetchdata(){
    fetch(URL)
    .then((res)=> res.json())
    .then((data)=>{
      console.log(data)
      setname(data[0].name.common)
      setflag(data[0].flags.png)
      setinfo(data[0].capital[0])
      setname2(data[0].altSpellings[0]) 
      const langkey= Object.keys(data[0].languages)
      setlang(data[0].languages[langkey])
      const curkey=Object.keys(data[0].currencies)
      setcur(data[0].currencies[curkey].name)  
      setpop(data[0].population)
      setregion(data[0].region)
    })
  }
  const [name,setname]=useState([])
  const [flag,setflag]=useState([])
  const [info,setinfo]=useState([])
  const [name2,setname2]=useState([])
  const [cur,setcur]=useState([])
  const [lang,setlang]=useState([])
  const [pop,setpop]=useState([])
  const [region,setregion]=useState([])
  const whichmap=()=>{
    if (region=="Europe"){
      return europe
    }
    if(region=="Africa"){
      return africa
    }
    if(region=="Asia"){
      return asia
    }
    if(region=="Americas"){
      return america
    }
    if(region=="Oceania"){
      return oceania
    }
  }
  return (
    <div className="background-image">
      <Header/>
      <main id="main">
        <div className="choose">
          <h1 className="title">Pick a country.</h1>
          <div className="inputdiv">
            <input type="text" placeholder="Which country?" className="search" onChange={(e)=> setsearch(e.target.value)}/>
            <a href="#section" className="link"><button className="searchbutton " onClick={fetchdata}>search</button></a>
          </div>
        </div>
      </main>
      <Section country={name} name2={name2} img={flag} info={info} cur={cur} lang={lang} pop={pop} map={whichmap()}/>
    </div> 
  );
}

export default App;
