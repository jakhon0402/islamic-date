import React from "react";
import "../index.css";

export default function ({ ...props }) {
  return (
    <div className="flex flex-col justify-center items-center ">
      <h1
        className={
          props.day != 5
            ? "text-white text-[12px]"
            : "text-green-500 text-[12px]"
        }
      >
        {props.arabic}
      </h1>
      <h1
        className={
          props.day != 5
            ? "text-white text-[12px] font-bold"
            : "text-green-500 text-[12px] font-bold"
        }
      >
        {props.english}
      </h1>
    </div>
  );
}
