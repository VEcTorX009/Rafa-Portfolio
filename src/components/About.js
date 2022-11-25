import React from "react";

export default function About(props) {
  return (
    <div
      className="about text-light"
      style={props.mode==="dark"?{background: `linear-gradient(black 50%, blue 90%)`}:{background: `linear-gradient(white 1%, blue 80%)`}}
    >
      <h1 className="heading text-primary">About</h1>
      <div className="container intro">
        <div className="paragraphs">
          <span>
            Hi, I'm Rafa. I am very interested in technology specifically
            Cyber-Security
          </span>
          <span>
            I have coded Bots, Games, and Websites and hoping to expand on this
            list soon!
          </span>
          <span>
            Well, Not just websites, But I enjoy learning about new technologies
            in general, which is also a part of my learning character.
          </span>
          <span>
            I love meeting new people especially if they share the same goals
            and interests as me, I currently code and learn about Cyber-Security
            as a hobby nothing more. Although? If in a future I can use the
            information I have learned for something special like a project, or
            curtain goal I would be totally up for it!
          </span>
          <span>
            Random: I love music, listening to music is truly amazing and sets
            the perfect mood for everything and this is why I created my own
            playlist:
          </span>
        </div>
      </div>
    </div>
  );
}
