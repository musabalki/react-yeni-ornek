import React, { useContext } from "react";
import {ThemeContext} from "../App";

const Navbar = () =>{
    const theme=useContext(ThemeContext);
    console.log(theme);
    return <div>
        <nav className="navbar">
            <ul>
                <li>
                    Anasayfa
                </li>
                <li>
    Ürünler
                </li>
                <li>
    İletişimm
                </li>
            </ul>
        </nav>
        <div style={{background:theme.background,color:theme.color,padding:"15px"}}>
        What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
    </div>;
}

export default Navbar;