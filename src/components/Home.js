import React from "react";
import { useNavigate } from 'react-router-dom';

export default function Home(props) {
    const history = useNavigate();
    const redirect = path => {
        history(path);
      };
      const soon= ()=>{
        alert("in development.")
      }
  return (
    <>


      <div className={`container  text-center text-${props.mode==="dark"?"light":"dark"} main`}>
        <h1 className="heading">Hi I'm </h1><h1 className="heading" id="rafa">Rafael</h1>
        <h2 >A Tech Enthusiast</h2>
        <button type="button" onClick={soon} className={`btn btn-${props.mode==="dark"?"dark":"light"} mt-5 my-2`}>
          Connect
        </button>
        <button type="button"  onClick={() => redirect('/about')}  className={`btn btn-${props.mode==="dark"?"dark":"light"} mt-1 my-3`}>
          About
        </button>
      </div>
      <div className="social">
        <a href="https://instagram.com"><i className="fa-brands fa-instagram"></i></a>
        <a href="https://instagram.com"><i className="fa-brands fa-discord"></i></a>
        <a href="https://instagram.com"><i className="fa-brands fa-twitter"></i></a>
    </div>
    </>
  );
}
