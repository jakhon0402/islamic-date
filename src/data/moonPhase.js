export const moonPhases = (phaseNum) => {
  let shadow = 0.1;
  if (phaseNum == 15) shadow = 0.6;
  else if (phaseNum == 16 || phaseNum == 14) shadow = 0.5;
  else if (phaseNum == 17 || phaseNum == 13) shadow = 0.4;
  else if (phaseNum == 18 || phaseNum == 12) shadow = 0.3;
  else if (phaseNum == 19 || phaseNum == 11) shadow = 0.2;

  return `bg-[url('./assets/${phaseNum}.png')] absolute bg-cover w-80 h-80 right-0 top-0 drop-shadow-[0_5px_55px_rgba(180,180,180,${shadow})] rotate-[25deg]`;
};

export const moonPhasesStyle = [
  "bg-[url('./assets/0.png')] absolute bg-cover w-80 h-80 right-0 top-0 drop-shadow-[0_5px_55px_rgba(180,180,180,0.1)] rotate-[25deg]",
  "bg-[url('./assets/1.png')] absolute bg-cover w-80 h-80 right-0 top-0 drop-shadow-[0_5px_55px_rgba(180,180,180,0.1)] rotate-[25deg]",
  "bg-[url('./assets/2.png')] absolute bg-cover w-80 h-80 right-0 top-0 drop-shadow-[0_5px_55px_rgba(180,180,180,0.1)] rotate-[25deg]",
  "bg-[url('./assets/3.png')] absolute bg-cover w-80 h-80 right-0 top-0 drop-shadow-[0_5px_55px_rgba(180,180,180,0.1)] rotate-[25deg]",
  "bg-[url('./assets/4.png')] absolute bg-cover w-80 h-80 right-0 top-0 drop-shadow-[0_5px_55px_rgba(180,180,180,0.1)] rotate-[25deg]",
  "bg-[url('./assets/5.png')] absolute bg-cover w-80 h-80 right-0 top-0 drop-shadow-[0_5px_55px_rgba(180,180,180,0.1)] rotate-[25deg]",
  "bg-[url('./assets/6.png')] absolute bg-cover w-80 h-80 right-0 top-0 drop-shadow-[0_5px_55px_rgba(180,180,180,0.1)] rotate-[25deg]",
  "bg-[url('./assets/7.png')] absolute bg-cover w-80 h-80 right-0 top-0 drop-shadow-[0_5px_55px_rgba(180,180,180,0.1)] rotate-[25deg]",
  "bg-[url('./assets/8.png')] absolute bg-cover w-80 h-80 right-0 top-0 drop-shadow-[0_5px_55px_rgba(180,180,180,0.1)] rotate-[25deg]",
  "bg-[url('./assets/9.png')] absolute bg-cover w-80 h-80 right-0 top-0 drop-shadow-[0_5px_55px_rgba(180,180,180,0.1)] rotate-[25deg]",
  "bg-[url('./assets/10.png')] absolute bg-cover w-80 h-80 right-0 top-0 drop-shadow-[0_5px_55px_rgba(180,180,180,0.1)] rotate-[25deg]",
  "bg-[url('./assets/11.png')] absolute bg-cover w-80 h-80 right-0 top-0 drop-shadow-[0_5px_55px_rgba(180,180,180,0.2)] rotate-[25deg]",
  "bg-[url('./assets/12.png')] absolute bg-cover w-80 h-80 right-0 top-0 drop-shadow-[0_5px_55px_rgba(180,180,180,0.3)] rotate-[25deg]",
  "bg-[url('./assets/13.png')] absolute bg-cover w-80 h-80 right-0 top-0 drop-shadow-[0_5px_55px_rgba(180,180,180,0.4)] rotate-[25deg]",
  "bg-[url('./assets/14.png')] absolute bg-cover w-80 h-80 right-0 top-0 drop-shadow-[0_5px_55px_rgba(180,180,180,0.5)] rotate-[25deg]",
  "bg-[url('./assets/15.png')] absolute bg-cover w-80 h-80 right-0 top-0 drop-shadow-[0_5px_55px_rgba(180,180,180,0.6)] rotate-[25deg]",
  "bg-[url('./assets/15.png')] absolute bg-cover w-80 h-80 right-0 top-0 drop-shadow-[0_5px_55px_rgba(180,180,180,0.5)] rotate-[25deg]",
  "bg-[url('./assets/17.png')] absolute bg-cover w-80 h-80 right-0 top-0 drop-shadow-[0_5px_55px_rgba(180,180,180,0.4)] rotate-[25deg]",
  "bg-[url('./assets/18.png')] absolute bg-cover w-80 h-80 right-0 top-0 drop-shadow-[0_5px_55px_rgba(180,180,180,0.3)] rotate-[25deg]",
  "bg-[url('./assets/19.png')] absolute bg-cover w-80 h-80 right-0 top-0 drop-shadow-[0_5px_55px_rgba(180,180,180,0.2)] rotate-[25deg]",
  "bg-[url('./assets/20.png')] absolute bg-cover w-80 h-80 right-0 top-0 drop-shadow-[0_5px_55px_rgba(180,180,180,0.1)] rotate-[25deg]",
  "bg-[url('./assets/21.png')] absolute bg-cover w-80 h-80 right-0 top-0 drop-shadow-[0_5px_55px_rgba(180,180,180,0.1)] rotate-[25deg]",
  "bg-[url('./assets/22.png')] absolute bg-cover w-80 h-80 right-0 top-0 drop-shadow-[0_5px_55px_rgba(180,180,180,0.1)] rotate-[25deg]",
  "bg-[url('./assets/23.png')] absolute bg-cover w-80 h-80 right-0 top-0 drop-shadow-[0_5px_55px_rgba(180,180,180,0.1)] rotate-[25deg]",
  "bg-[url('./assets/24.png')] absolute bg-cover w-80 h-80 right-0 top-0 drop-shadow-[0_5px_55px_rgba(180,180,180,0.1)] rotate-[25deg]",
  "bg-[url('./assets/25.png')] absolute bg-cover w-80 h-80 right-0 top-0 drop-shadow-[0_5px_55px_rgba(180,180,180,0.1)] rotate-[25deg]",
  "bg-[url('./assets/26.png')] absolute bg-cover w-80 h-80 right-0 top-0 drop-shadow-[0_5px_55px_rgba(180,180,180,0.1)] rotate-[25deg]",
  "bg-[url('./assets/27.png')] absolute bg-cover w-80 h-80 right-0 top-0 drop-shadow-[0_5px_55px_rgba(180,180,180,0.1)] rotate-[25deg]",
  "bg-[url('./assets/28.png')] absolute bg-cover w-80 h-80 right-0 top-0 drop-shadow-[0_5px_55px_rgba(180,180,180,0.1)] rotate-[25deg]",
  "bg-[url('./assets/29.png')] absolute bg-cover w-80 h-80 right-0 top-0 drop-shadow-[0_5px_55px_rgba(180,180,180,0.1)] rotate-[25deg]",
  "bg-[url('./assets/30.png')] absolute bg-cover w-80 h-80 right-0 top-0 drop-shadow-[0_5px_55px_rgba(180,180,180,0.1)] rotate-[25deg]",
];
