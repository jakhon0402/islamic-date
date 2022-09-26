import React from "react";

export default function Button({ children, ...props }) {
  return (
    <button
      onClick={props.onClick}
      className="w-[40px] h-[40px] text-xl rounded-lg border-[0.5px] border-[rgb(20,83,45,0.5)] bg-[rgb(20,83,45,0.1)] drop-shadow-[0_5px_25px_rgba(0,0,0,0.5)]"
    >
      {children}
    </button>
  );
}
