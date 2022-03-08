import React, { useState } from "react";
import {useNavigate } from "react-router-dom"

export default function Register() {
  let redi1= useNavigate()
// valores de imputs
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [pasword, setpasword] = useState();
  function manejador() {
   
  //  indico que en storage guarde las credenciales en un jason que tranforma a string en name elaml, pasword
    localStorage.setItem(
      "Credencials",
      JSON.stringify({ name, email, pasword })
      
    );
    // redireccion a login
    redi1("/login")
  }
  
  return (
    <form onSubmit={manejador}>
      <>
        <div class="w-100 bg-info vh-100 ">
          <h1 class="text-center text-light p-4"> Register</h1>
          <div class="mx-auto mt-5 col-3 bg-bg-danger p-5 border border-1 border-dark bg-light">
            <p class="text-left text-info">UserName:</p>
            <input
            //  asigno su valor y cuando hay un evento  acsedo evento a target y a su valor y se guarda 
             value={name}
              onChange={(event) => setname(event.target.value)}
              class="w-100"
              type="text"
            />
            <p class="text-info">Email:</p>
            <input
              value={email}
              onChange={(event) => setemail(event.target.value)}
              type="email"
              class="w-100"
            />
            <p class="w-100">Password:</p>
            <input
              value={pasword}
              onChange={(event) => setpasword(event.target.value)}
              id="password"
              className="text-info"
              class="w-100"
              type="password"
            />
            <br />
            <br />
            <div class="d-flex justify-content-between">
              {/* <a class="text-info d-flex text-decoration-none" href="#">Remenber me </a> */}

              <a class="text-info d-flex text-decoration-none" href="">
                <p> </p>
              </a>
            </div>

            <button type="submit" class="btn btn-primary bg-info">
              Register
            </button>
          </div>
        </div>
      </>
    </form>
  );
}
