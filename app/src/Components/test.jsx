import React, { useState } from "react";
import "./test.css";

export default function Test() {
  const [hideLightbox, setHideLightbox] = useState(true);
  
  return (
    <>
      <button onClick={() => setHideLightbox(false)}>Show Lightbox</button>
      <div className={`lightbox ${hideLightbox ? "hide-lightbox" : ""}`} />
    </>
  );
}