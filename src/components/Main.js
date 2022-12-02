import React from "react";

export default function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar sticky-top navbar-expand-lg navbar-${
          props.mode === "light" ? "light" : "dark"
        } bg-${props.mode === "light" ? "light" : "dark"}`}
      >
        <div className="container-fluid">
          <a
            className="navbar-brand"
            href="/home"
            style={{ fontFamily: "monospace" }}
          >
            Rafa
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#aboutsection" className="nav-link">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#worksection">
                  Work
                </a>
              </li>
              <i
                className={`fa-regular fa-moon `}
                style={
                  props.mode === "light"
                    ? { color: "black" }
                    : { color: "white" }
                }
                onClick={props.toggleMode}
              ></i>
            </ul>
          </div>
        </div>
      </nav>
      <div id="home" className="box">
        <div
          className={`container  text-center text-${
            props.mode === "dark" ? "light" : "dark"
          } `}
        >
          <div className="main">
            <h1 className="heading">Hi I'm </h1>
            <h1 className="heading" id="rafa">
              Rafael
            </h1>
            <h2>A Tech Enthusiast</h2>
          </div>
          <a
            href="https://www.discordapp.com/users/1047008741301690429/"
            target="_blank"
            rel="noreferrer"
          >
            <button
              type="button"
              className={`btn btn-${
                props.mode === "dark" ? "dark" : "light"
              } mt-5 my-2`}
            >
              Discord
            </button>
          </a>
          <a target="_blank" rel="noreferrer"href="https://discord.gg/dE7V8ekbpq">
          <button
            type="button"
            className={`btn btn-${
              props.mode === "dark" ? "dark" : "light"
            } mt-1 my-3`}
          >
            Server
          </button>
          </a>
        </div>
        <div className="social">
          <a href="https://instagram.com">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://instagram.com">
            <i className="fa-brands fa-discord"></i>
          </a>
          <a href="https://instagram.com">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </div>
      </div>
      <div className="box" id="aboutsection">
        <div
          className={`about text-${
            props.mode === "light" ? "dark" : "light"
          } about` } style={
            props.mode === "light"
              ? {
                  background:
                    "radial-gradient(circle, rgba(37,84,209,1) 0%, rgba(255,255,255,1) 100%)",
                }
              : {
                  background:
                    "radial-gradient(circle, rgba(37,84,209,1) 0%, rgba(0,0,0,1) 100%)",
                }
          }
        >
          <h1 className="heading text-primary">About</h1>
          <div className="intro">
            <div className="paragraphs">
              <span>
                Hi, I'm Rafael but you can call me "Rafa" I like to describe
                myself as a technology enthusiast? If that's even a thing... I
                think it is right?
              </span>
              <span>
                I am a human just like you, have feelings, thoughts, happy
                moments, and sad ones too? But you know? Let's put that off to
                the side... Welcome to my website!
              </span>
              <span>
                The Internet can be a scary place sometimes, So I started
                learning about Cyber-Security as a hobby nothing more I also
                enjoy learning about new technologies in general, which is also
                a part of my learning character and could gain experience from
                it.
              </span>
              <span>
                I like to consider myself an extrovert and always looking for
                new people to talk to. Working with diverse people motivates me
                to grow more and learn new things. Apart from that, You can find
                me listening to music, a lot of it actually! According to
                Spotify-Recaps as of 2022 I spend 52,086 minutes of it. That's
                more than 92% of other listeners in the United States!
                Anyways... apart from that you can see me studying, learning new
                things, hanging out with friends, simply living life
              </span>
              <span>
                Random: I love music, listening to music is truly amazing and
                sets the perfect mood for everything and this is why I created
                my own playlist:
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="box" id="worksection">
        <div
          className={`work text-${props.mode === "light" ? "dark" : "light"}`}
          style={
            props.mode === "light"
              ? {
                  background:
                    "radial-gradient(circle, rgba(37,84,209,1) 0%, rgba(255,255,255,1) 100%)",
                }
              : {
                  background:
                    "radial-gradient(circle, rgba(37,84,209,1) 0%, rgba(0,0,0,1) 100%)",
                }
          }
        >
          <h1 className="heading text-primary">Work</h1>
          <div className="container workinfo">
            <h2>
              A Self Taught Cyber-Security, Developer, Programmer, Made a couple
              random games? Student etc...
            </h2>
            <span>
              I believe in building successful projects which contribute to
              society and making a positive impact on the world in some way or
              another.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
