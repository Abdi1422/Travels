
import "./section.css"
import africa from './images/africa.png'


const Section = ({country,name2,img,info,cur,lang,pop,map})=>{
    return(
        <section id="section" className="section">
            <div className="text-wrapper">
                <h1 className="heading">{country}</h1>
                <div className="text">The capital of {country} also known as {name2} is {info} . The main currency used here is {cur} and the main language used by the residents is {lang} . The population of this country is {pop} . </div>
                <a href="#main" className="a"><button className="btn home">Home</button></a>
            </div>
            <div className="img-wrapper">
                <img className="img" src={img} ></img>
                <img className="img" src={map} ></img>
            </div>
        </section>
    )
}
export default Section;