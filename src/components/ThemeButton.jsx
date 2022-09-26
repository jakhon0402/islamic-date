import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeButton({ ...props }) {
  const themesStyle = [
    {
      selected:
        "w-[40px] h-[40px] text-xl rounded-full border-[3px] border-green-500 bg-gradient-to-b from-[#222] via-[#333] to-[#222] drop-shadow-[0_5px_25px_rgba(0,0,0,0.5)]",
      unSelected:
        "w-[40px] h-[40px] text-xl rounded-full border-[3px] border-neutral-200 bg-gradient-to-b from-[#222] via-[#333] to-[#222] drop-shadow-[0_5px_25px_rgba(0,0,0,0.5)]",
    },
    {
      selected:
        "w-[40px] h-[40px] text-xl rounded-full border-[3px] border-green-500 bg-[url('./assets/night.svg')] bg-cover drop-shadow-[0_5px_25px_rgba(0,0,0,0.5)]",
      unSelected:
        "w-[40px] h-[40px] text-xl rounded-full border-[3px] border-neutral-200 bg-[url('./assets/night.svg')] bg-cover drop-shadow-[0_5px_25px_rgba(0,0,0,0.5)]",
    },
    {
      selected:
        "w-[40px] h-[40px] text-xl rounded-full border-[3px] border-green-500 bg-[url('./assets/cosmos.svg')] bg-cover drop-shadow-[0_5px_25px_rgba(0,0,0,0.5)]",
      unSelected:
        "w-[40px] h-[40px] text-xl rounded-full border-[3px] border-neutral-200 bg-[url('./assets/cosmos.svg')] bg-cover drop-shadow-[0_5px_25px_rgba(0,0,0,0.5)]",
    },
  ];

  return (
    <AnimatePresence>
      <motion.button
        key={props.theme}
        onClick={props.onClick}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{
          delay: props.theme == 0 ? 0.1 : props.theme == 1 ? 0.05 : 0,
        }}
        className={
          props.isSelected
            ? themesStyle[props.theme].selected
            : themesStyle[props.theme].unSelected
        }
      />
    </AnimatePresence>
  );
}
