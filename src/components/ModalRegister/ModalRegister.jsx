import React from "react";
import styles from "./ModalRegister.module.css";
import { Link } from "react-router-dom";
const Modal = ({ estado, cambiarEstado }) => {

  const name = '';
  const email='';
  const pass='';

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(email);
  }

  return (
    <>
      {estado && (
        <div className={`${styles.PageOverlay} center`}>
          <div className={`${styles.ContenedorModal} center`}>
            <div className={`${styles.Encabezado} center`}>
              <h3>Register</h3>
            </div>
            <button className={`${styles.Boton} center`}onClick={() => cambiarEstado(false)} >
              <svg xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-x-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
            <div className={`${styles.FormContainer}`}>
              <form className={`${styles.LoginForm}`} onSubmit={handleSubmit}>
                <label htmlFor="name">name</label>
                <input defaultValue={name} type="name" placeholder="name" id="name" name="name"></input>
                <label htmlFor="email">email</label>
                <input defaultValue={email} type="email" placeholder="youremail@gmial.com" id="email" name="email"></input>
                <label htmlFor="password">Password</label>
                <input defaultValue={pass} type="password" placeholder="*******" id="password" name="password"></input>
                <button className={`${styles.BotonForm}`}type="submit">Log In</button>
              </form>
              <Link to ="/modal">
            <button className={`${styles.btnLink}`} >Register if you don't have an account</button>
            </Link>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
export default Modal;
