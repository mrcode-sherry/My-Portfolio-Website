"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function TypingEffect() {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    typed.current = new Typed(el.current, {
      strings: [
        "MERN Stack Developer",
        "SEO Specialist.",
        "Graphic Designer.",
      ],
      typeSpeed: 70,
      backSpeed: 70,
      loop: true,
    });

    return () => {
      typed.current.destroy();
    };
  }, []);

  return <span ref={el}></span>;
}
