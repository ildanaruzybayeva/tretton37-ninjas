import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div>
      <header>
        <nav>
          <h1 className="title">_the fellowship of the tretton37</h1>
          <img
            src="https://uploads-ssl.webflow.com/5dd7a459b9c85c38867d8866/5dd7d825be2670c99e30442d__tretton37_logo_green.png"
            className="logo"
            alt="csgo-icon"
            onClick={()=> window.location.reload()}
          />
        </nav>
      </header>
    </div>
  );
}