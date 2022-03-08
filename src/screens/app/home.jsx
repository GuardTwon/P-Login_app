import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Dashboar from "./dashboard";

export default function Home() {
  // traigo el valor de loginuser
  let confirmacion = useNavigate();
  let log = localStorage.getItem("loginuser");
 
//  condicion para la ruta protejida y que se ejecuta cada que recargo la ruta con useEffect
  useEffect(() => {
    if (log == "false") {
      confirmacion("/");
    }
  
  }, []);
  // parso credenciales para obtener el valor del name
let vienbenido= localStorage.getItem("Credencials"); 
vienbenido = JSON.parse(vienbenido);

  return (
    <>
    <Dashboar/>    
    <h1>
      <p>Bien venid@ {vienbenido.name}</p>

    </h1>
    

    </>

  );
}
