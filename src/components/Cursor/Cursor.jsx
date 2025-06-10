import React, { useState, useEffect, useRef } from "react";
import "./Cursor.css";

const Cursor = () => {
  const cursorRef = useRef(null);
  const requestRef = useRef();
  const [isPointer, setIsPointer] = useState(false);
  const posRef = useRef({ x: 0, y: 0 });

  const animate = () => {
    if (cursorRef.current) {
      cursorRef.current.style.left = `${posRef.current.x}px`;
      cursorRef.current.style.top = `${posRef.current.y}px`;
    }
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (!window.matchMedia("(pointer:fine)").matches) {
      // Skip cursor customization on devices without precise pointing
      return;
    }

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(requestRef.current);
      document.documentElement.style.cursor = "";
    };
  }, []);

  useEffect(() => {
    if (!window.matchMedia("(pointer:fine)").matches) {
      // Skip cursor customization on devices without precise pointing
      return;
    }

    const handleMouseMove = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY };

      const element = document.elementFromPoint(e.clientX, e.clientY);
      if (element && cursorRef.current) {
        // Check up the DOM tree for pointer cursor
        let el = element;
        let isPointerEl = false;
        while (el && el !== document.body) {
          const style = window.getComputedStyle(el);
          if (
            style.cursor ===
              'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="), auto' ||
            style.cursor ===
              'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYSURBVDhPY/j//z8D0UDUAMHEBQYA1/YE9/YaVgAAAABJRU5ErkJggg=="), auto' ||
            el.hasAttribute("data-cursor-pointer") ||
            style.cursor === "pointer"
          ) {
            console.log(el.hasAttribute("data-cursor-pointer"));
            isPointerEl = true;
            break;
          }
          el = el.parentElement;
        }
        setIsPointer(isPointerEl);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return window.matchMedia("(pointer:fine)").matches ? (
    <div ref={cursorRef} className={`cursor ${isPointer ? "pointer" : ""}`} />
  ) : null;
};

export default React.memo(Cursor);
