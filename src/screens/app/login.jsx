import { useNavigate, Link } from "react-router-dom";
import React, { useState } from "react";
import Dashboar from "./dashboard";
export default function Login() {
  let redi2 = useNavigate();
  const [name, getname] = useState();
  const [email, getemail] = useState();
  const [pasword, getpasword] = useState();
  function redireccion() {
    // en store acsedo al item  cedrenciales
    let credencial = localStorage.getItem("Credencials");
    // tranformo mis credenciales en un json
    credencial = JSON.parse(credencial);
    //  igualo mis credenciales y redirecciono a mi home
    if (
      credencial.email === email &&
      credencial.name === name &&
      credencial.pasword === pasword
    ) {
      localStorage.setItem("loginuser", "true");
      redi2("/home");
    } else {
      // si es incorecto manda alerta
      alert("Usuario o contaseña incorrecta");
    }
  }

  return (
    <>
      <Dashboar />
      <form onSubmit={redireccion}>
        <div class="w-100 bg-info vh-100 ">
          <h1 class="text-center text-light p-4"> Login Form</h1>
          <div class="mx-auto mt-5 col-3 bg-bg-danger p-5 border border-1 border-dark bg-light">
            <h2 class="text-center text-info">Login</h2>
            <p class="text-left text-info">UserName:</p>
            <input
              // asigno su valor  cuando hay un evento a taregt y a su valor para compararlo
              value={name}
              onChange={(event) => getname(event.target.value)}
              class="w-100"
              type="text"
              name="text"
            />
            <p class="text-info">Email:</p>
            <input
              value={email}
              onChange={(event) => getemail(event.target.value)}
              type="email"
              class="w-100"
            ></input>
            <p className="text-info">Password:</p>
            <input
              value={pasword}
              onChange={(event) => getpasword(event.target.value)}
              class="w-100"
              type="password"
              name="Password"
            />
            <br />
            <br />
            <div class="d-flex justify-content-between">
              {/* <a class="text-info d-flex text-decoration-none" href="#">Remenber me </a> */}
              <Link
                to="/register"
                class="text-info d-flex text-decoration-none"
              >
                <p> Register here</p>
              </Link>
            </div>

            <button type="submit" class="btn btn-primary bg-info">
              submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
