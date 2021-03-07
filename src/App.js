import React,{ useEffect, useState,useContext,createContext } from 'react';
import './App.css';
import Navbar from './components/navbar';
//import Navbar from './components/navhar';
//import axios from 'axios';
import './css/style.css';
/*import {BrowserRouter as Router,Link,Route} from "react-router-dom";
const uyeler=[
  {id:1,adi:"Musa",soyadi:"Balki",yas:22},
  {id:2,adi:"Ali",soyadi:"Demir",yas:28}
];*/

const secim = {
  light:{
    color:"black",background:"white"
  },
  dark:{
    color:"white",background:"black"
  },
}
export const ThemeContext=createContext(secim.dark);
function App() {
  /*const [durum,setDurum] = useState(true);
  const [api,setApi] = useState([]);
  useEffect(()=>{
    axios.get("https://restcountries.eu/rest/v2/all")
    .then(response=>setApi(response.data))
    .catch(error=>console.log(error))
  },[])

  function degistir(){
    setDurum(false);
  }
*/
const [theme,setTheme] = useState(secim.dark);
  const toggleTheme = () =>{
    if(theme===secim.dark)
    {
      setTheme(secim.light)
    }
    else{
      setTheme(secim.dark)
    }
  }
  return (
    <div className="App" style={{"margin":"16px"}}>
      <button onClick={toggleTheme}>Değiştir</button>
      <ThemeContext.Provider value={theme}>
        <Navbar>

        </Navbar>
      </ThemeContext.Provider>
      {/*<Navbar/>
      <form>
        <input type="text" onChange={(e)=>console.log(e.target.value)}/>
        <LoginButton isLoggedIn={true}></LoginButton>
      </form>
      <button onClick={degistir}>Tıkla</button>
      <h1>Üyeler</h1>
      {/*{uyeler.map(uye=><Uyeler key={uye.id} user={uye}></Uyeler>)}
      {durum===true ? "dogru":"yanlis"}*/}
      {/*<Router>
        <Route path="/" exact> 
        {api.map(city=>{
            return <div style={{"border":"1px solid black","marginTop":"30px","padding":"10px"}} key={city.numericCode}><Link to={`/country/1`}>{city.name}</Link>  </div>
          })}
        
        </Route>
        <Route path="/country/:code" render={(renderProps)=>{ 
          const country= api.find(country=>country.alpha3Code === renderProps.match.params.code)
          return <Countrys {...renderProps} country={country}/>}} />
        </Router>*/}
    </div>
  );
}
/*
const Countrys= props=>{
  return <div>Ülke bilgileri</div>
}
function LoginButton(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <div>Giriş Yap</div>
  }
  else{
    return <div>Kayıt Ol</div>
  }
  
}

function Uyeler(props){
  return <p key={props.user.yas}>{props.user.yas}</p>
}
*/
export default App;
/*    <p key={uye.yas}>Yaş: {uye.yas}</p> */