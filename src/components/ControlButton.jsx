import React from "react";

export default function ControlButton({ children, ...props }) {
  return (
    <button
      disabled={props.disabled}
      onClick={props.onClick}
      className="relative h-[30px] w-[30px] flex justify-center items-center disabled:bg-[#111] text-neutral-400 disabled:text-[#444] bg-[#444] rounded-full border-[0.8px] border-[#444]  shadow-lg"
    >
      {children}
    </button>
  );
}
