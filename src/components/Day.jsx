import React from "react";
import { Moon } from "lunarphase-js";

export default function Day({ ...props }) {
  return (
    <>
      <div
        className={
          props.isLast
            ? "flex flex-col justify-around px-2 py-1 items-center bg-green-400/20 h-[40px] rounded"
            : props.day.date.day == 5
            ? "flex flex-col justify-around px-2 py-1 items-center bg-green-900/20 h-[40px] rounded"
            : "flex flex-col justify-around px-2 py-1 items-center bg-[rgb(0,0,0,0.13)] h-[40px] rounded"
        }
      >
        <h1 className="text-white text-[14px]">
          {Moon.lunarPhaseEmoji(props.day.gregDate)}
        </h1>
        <h1 className="text-white text-[12px] font-bold">
          {props.day.date.getDate()}
        </h1>
      </div>
    </>
  );
}
