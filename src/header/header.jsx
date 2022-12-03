import "./header.css"

const Header =()=>{
   return(
     <header className="header" >
        <div className="wrapper">
            <div>
               <h1 className="travels">Travels</h1>   
            </div>
            <div className="btn-div">
               <a href="#main" ><button className="btn">Home</button></a>
               
            </div>
        </div>
     </header>
   )
}
export default Header;