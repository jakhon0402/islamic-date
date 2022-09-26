import "./index.css";
import { Moon } from "lunarphase-js";
import "hijri-date";
import { months } from "./data/month";
import { weeks } from "./data/week";
import { moonPhasesStyle } from "./data/moonPhase";
import {
  PauseIcon,
  XMarkIcon,
  PlayIcon,
  StopIcon,
} from "@heroicons/react/24/outline";
import hijriDate from "hijri-date";
import Week from "./components/Week";
import { useEffect, useState } from "react";
import Day from "./components/Day";
import Button from "./components/Button";
import ControlButton from "./components/ControlButton";
import ThemeButton from "./components/ThemeButton";
import Signature from "./components/Signature";
import { tasbeh } from "./data/tasbeh";

import { motion, useAnimation } from "framer-motion";

function App() {
  const today = new HijriDate();
  const todayGregorian = today.toGregorian();
  const [calendarDays, setCalendarDays] = useState([]);
  const [showCalendar, setShowCalendar] = useState(false);

  const [isPlay, setIsPlay] = useState(false);

  const [repDisabled, setRepDisabled] = useState(false);

  const [count, setCount] = useState(0);
  const [sec, setSec] = useState(localStorage.getItem("sec"));
  const [rep, setRep] = useState(localStorage.getItem("rep"));
  const [key, setKey] = useState(0);

  const [timer, setTimer] = useState();

  const control = useAnimation();

  const [showTasbeh, setShowTasbeh] = useState(false);
  const [showThemes, setShowThemes] = useState(false);

  const [selectTheme1, setSelectTheme1] = useState(
    parseInt(localStorage.getItem("theme1")) == 1 ? true : false
  );
  const [selectTheme2, setSelectTheme2] = useState(
    parseInt(localStorage.getItem("theme2")) == 1 ? true : false
  );
  const [selectTheme3, setSelectTheme3] = useState(
    parseInt(localStorage.getItem("theme3")) == 1 ? true : false
  );

  const [showAll, setShowAll] = useState(
    parseInt(localStorage.getItem("showAll")) == 1 ? true : false
  );

  const moonPhaseNumber = Math.floor(30 * Moon.lunarAgePercent(new Date()));

  useEffect(() => {
    if (localStorage.getItem("sec") == null) {
      localStorage.setItem("sec", 1);
    }
    if (localStorage.getItem("rep") == null) {
      localStorage.setItem("rep", 33);
    }
    if (localStorage.getItem("theme2") == null) {
      localStorage.setItem("theme2", 1);
    }
    if (localStorage.getItem("theme1") == null) {
      localStorage.setItem("theme1", 0);
    }
    if (localStorage.getItem("theme3") == null) {
      localStorage.setItem("theme3", 0);
    }
    if (localStorage.getItem("showAll") == null) {
      localStorage.setItem("showAll", 1);
    }
  }, []);

  const setCalendar = () => {
    const days = [];
    const currMonth = today.month;
    const currYear = today.year;
    let daysCount = 28 - (6 - todayGregorian.getDay());
    let currMonthDays = daysCount - today.date;
    if (currMonthDays > 0) {
      let lastMonth = currMonth == 11 ? 1 : currMonth - 1;
      let lastMonthYear = currMonth == 11 ? currYear - 1 : currYear;
      let lastMonthDate =
        new HijriDate(lastMonthYear, lastMonth, 30).getDay() ==
        new HijriDate(currYear, currMonth, 1).getDay()
          ? 29
          : 30;
      console.log(lastMonthDate);
      console.log(daysCount);
      console.log(currMonthDays);
      for (let i = lastMonthDate - currMonthDays + 1; i <= lastMonthDate; i++) {
        days.push({
          gregDate: new HijriDate(lastMonthYear, lastMonth, i).toGregorian(),
          date: new HijriDate(lastMonthYear, lastMonth, i),
        });
      }
      for (let i = 1; i <= today.date; i++) {
        days.push({
          gregDate: new HijriDate(currYear, currMonth, i).toGregorian(),
          date: new HijriDate(currYear, currMonth, i),
        });
      }
    } else {
      for (let i = today.date - daysCount + 1; i <= today.date; i++) {
        days.push({
          gregDate: new HijriDate(currYear, currMonth, i).toGregorian(),
          date: new HijriDate(currYear, currMonth, i),
        });
      }
    }
    setCalendarDays(days);
  };
  useEffect(() => {
    setCalendar();
  }, []);

  const play = () => {
    setIsPlay(true);
    const subTimer = setInterval(() => {
      let repeat = parseInt(localStorage.getItem("rep"));
      setRepDisabled(true);

      setCount((prev) => {
        control.start({ opacity: [0, 1] });

        if (prev == repeat * 3 + 1) {
          setKey(0);
          return 0;
        } else if (prev + 1 <= repeat) {
          setKey(1);
        } else if (prev + 1 <= repeat * 2) {
          setKey(2);
        } else if (prev + 1 <= repeat * 3) {
          setKey(3);
        } else {
          setKey(4);
          endPlay(subTimer);
        }
        return prev + 1;
      });
    }, parseFloat(sec) * 1000);
    setTimer(subTimer);
  };

  const endPlay = (subTimer) => {
    setRepDisabled(false);

    setIsPlay(false);
    clearInterval(subTimer);
    setTimer(null);
  };

  const pause = () => {
    console.log(count);
    setIsPlay(false);
    clearInterval(timer);
    setTimer(null);
  };
  const changeSec = () => {
    let secound = parseFloat(localStorage.getItem("sec"));
    secound = secound == 1 ? 2 : secound == 2 ? 0.5 : 1;
    setSec(secound);
    localStorage.setItem("sec", secound);
  };

  const changeRep = () => {
    let repeat = parseInt(localStorage.getItem("rep"));
    repeat = repeat == 33 ? 11 : 33;
    setRep(repeat);
    localStorage.setItem("rep", repeat);
    setCount(0);
  };

  const stop = () => {
    setKey(0);
    setCount(0);
    setIsPlay(false);
    clearInterval(timer);
    setTimer(null);
    setRepDisabled(false);
  };

  return (
    <div className="fixed w-screen h-screen realtive">
      <div className="flex w-screen h-screen  justify-center items-center">
        <div
          className={
            selectTheme1 && selectTheme2
              ? "absolute -z-10 w-screen h-screen bg-[url('./assets/sky_night.svg')] grayscale bg-cover"
              : selectTheme1 && selectTheme3
              ? "absolute -z-10 w-screen h-screen bg-[url('./assets/sky_stars.svg')] grayscale bg-cover"
              : selectTheme1
              ? "absolute -z-10 w-screen h-screen bg-gradient-to-b from-[#111] via-[#222] to-[#111] grayscale bg-cover"
              : selectTheme2
              ? "absolute -z-10 w-screen h-screen bg-[url('./assets/sky_night.svg')] bg-cover"
              : "absolute -z-10 w-screen h-screen bg-[url('./assets/sky_stars.svg')] bg-cover"
          }
        ></div>
        <div className="w-screen h-screen fixed">
          {showAll ? (
            <div className=" sm:opacity-0 md:opacity-100 absolute top-3 left-3 w-[340px] h-[130px] rounded-lg border-[0.5px] border-[rgb(20,83,45,0.5)]  bg-green-500/5 backdrop-blur-md drop-shadow-[0_5px_25px_rgba(0,0,0,0.5)]">
              <div className="absolute w-full h-full border-[0.5px] border-[rgb(20,83,45,0.5)]  rounded-lg ">
                <div className="flex flex-col justify-start items-start w-full h-full p-5 px-8 opacity-100 gap-1">
                  <h1 className="text-white font-bold text-[18px]">
                    {(new Date().getDay() == 5 ? "🕌" : "") +
                      "Today " +
                      Moon.lunarPhaseEmoji()}
                  </h1>
                  <div className="flex flex-row justify-between items-center w-full">
                    <h1 className="font-thin text-green-100">
                      {today.date + " " + months[today.month - 1].name}
                    </h1>
                    <h1 className="font-light text-green-400">
                      {months[today.month - 1].arabic}
                    </h1>
                  </div>
                  <div className="flex flex-row justify-between items-center w-full">
                    <h1 className="font-bold text-green-100 text-[14px]">
                      {weeks[new Date().getDay()].name +
                        " (" +
                        weeks[new Date().getDay()].english +
                        ")"}
                    </h1>
                    <h1 className="font-light text-green-400 text-[14px]">
                      {weeks[new Date().getDay()].arabic}
                    </h1>

                    {/* <CalendarIcon className="h-6 w-6 text-blue-500"/> */}
                  </div>
                </div>
              </div>
            </div>
          ) : null}
          {showAll ? (
            <div className="absolute bottom-5 right-5 w-[100px] h-[50px] ">
              <div className="flex justify-around items-center w-full h-full ">
                <Button
                  onClick={() => {
                    setShowTasbeh(!showTasbeh);
                    stop();
                  }}
                >
                  📿
                </Button>
                <Button onClick={() => setShowCalendar(!showCalendar)}>
                  🗓
                </Button>
              </div>
            </div>
          ) : null}
          <div className="absolute top-5 right-5 w-[50px] ">
            <div className="flex flex-col justify-around items-center w-full h-full gap-2">
              <Button
                onClick={() => {
                  localStorage.setItem("showAll", !showAll ? 1 : 0);
                  setShowAll(!showAll);
                  setShowCalendar(false);
                  setShowTasbeh(false);
                }}
              >
                {showAll ? "🌑" : "🌕"}
              </Button>
              {showAll ? (
                <Button onClick={() => setShowThemes(!showThemes)}>🖌</Button>
              ) : null}
              {showThemes && showAll ? (
                <ThemeButton
                  onClick={() => {
                    setSelectTheme1((prev) => {
                      if (!selectTheme2 && !selectTheme3) {
                        localStorage.setItem("theme1", 1);
                        return true;
                      }
                      localStorage.setItem("theme1", !prev ? 1 : 0);
                      return !prev;
                    });
                  }}
                  isSelected={selectTheme1}
                  theme={0}
                />
              ) : null}
              {showThemes && showAll ? (
                <ThemeButton
                  onClick={() => {
                    setSelectTheme2((prev) => {
                      if (prev) {
                        setSelectTheme1(true);
                        localStorage.setItem("theme1", 1);
                      }
                      localStorage.setItem("theme2", !prev ? 1 : 0);
                      return !prev;
                    });
                    if (selectTheme3) {
                      localStorage.setItem("theme3", !selectTheme3 ? 1 : 0);
                      setSelectTheme3(!selectTheme3);
                    }
                  }}
                  isSelected={selectTheme2}
                  theme={1}
                />
              ) : null}
              {showThemes && showAll ? (
                <ThemeButton
                  onClick={() => {
                    setSelectTheme3((prev) => {
                      if (prev) {
                        setSelectTheme1(true);
                        localStorage.setItem("theme1", 1);
                      }
                      localStorage.setItem("theme3", !prev ? 1 : 0);
                      return !prev;
                    });
                    if (selectTheme2) {
                      setSelectTheme2(!selectTheme2);
                      localStorage.setItem("theme2", !selectTheme2 ? 1 : 0);
                    }
                  }}
                  isSelected={selectTheme3}
                  theme={2}
                />
              ) : null}
            </div>
          </div>
          {showCalendar ? (
            <div
              className="absolute bottom-[70px] right-5 w-[300px] h-[300px] rounded-lg border-[0.5px] border-[rgb(20,83,45,0.5)] bg-green-700/10 backdrop-blur-md drop-shadow-[0_5px_25px_rgba(0,0,0,0.5)]"
              onMouseLeave={() => setShowCalendar(false)}
            >
              <div className="absolute w-full h-full border-[0.5px] border-[rgb(20,83,45,0.5)] rounded-lg ">
                <div className="flex flex-col justify-start items-start w-full h-full p-5 px-2 opacity-100 gap-3">
                  <div className="flex flex-row justify-between items-center w-full px-8">
                    <h1 className="font-bold text-green-100">
                      {months[today.month - 1].name}
                    </h1>
                    <h1 className="font-black text-green-400">{today.year}</h1>
                  </div>
                  <div className="grid grid-cols-7 justify-between items-center w-full border-[1px] border-[rgb(20,83,45,0.9)] bg-[rgb(20,83,45,0.3)] py-1 rounded-lg">
                    {weeks.map((week, index) => {
                      return (
                        <Week
                          english={week.english.slice(0, 3)}
                          arabic={week.arabic}
                          day={index}
                          key={index}
                        />
                      );
                    })}
                  </div>

                  <div className="grid grid-cols-7 justify-between gap-1 items-center w-full">
                    {calendarDays.map((day, index) => {
                      return (
                        <Day
                          day={day}
                          key={index}
                          isLast={index + 1 == calendarDays.length}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
        <div className=" sm:opacity-0 md:opacity-100 flex flex-col justify-center sm:w-[40%] md:w-[80%] lg:w-[50%] h-[95%] rounded gap-1 p-2 ">
          <div className="flex justify-center items-end basis-[70%]">
            <div className="z-10 w-[410px] h-[400px] mt-5">
              <div className="relative w-full h-full">
                <div className="absolute bottom-[-5%] left-0 w-40">
                  <h1 className="font-black text-[128px] text-white text-right">
                    {today.date.toString().length == 1
                      ? "0" + today.date
                      : today.date}
                  </h1>
                </div>

                <div className="absolute w-40 h-40 bg-black top-[40%] left-[20%] blur-xl rounded-full opacity-80"></div>
                <div className={moonPhasesStyle[moonPhaseNumber]}></div>
              </div>
            </div>
          </div>
          <div
            className={
              showTasbeh
                ? "flex flex-col justify-center items-center basis-[25%]  gap-2"
                : "flex flex-col justify-start items-center basis-[25%]  gap-2"
            }
          >
            {!showTasbeh ? (
              <div className="flex flex-row justify-around items-center w-full">
                <h1 className="font-thin font-sans text-[32px] text-white ">
                  {months[today.month - 1].name}
                </h1>
                <h1 className="font-light text-[32px] text-green-500 ">
                  {months[today.month - 1].arabic}
                </h1>
              </div>
            ) : null}
            {showTasbeh && showAll ? (
              <div className="flex flex-col justify-start items-center w-full h-full py-5">
                <div className="flex flex-row justify-around items-center w-full h-[70%] px-8 gap-8 bg-[rgb(1,39,12)]/60 backdrop-blur-sm border-green-700 border-[0.3px] rounded-2xl shadow-xl">
                  <motion.h1
                    animate={control}
                    className={
                      key == 4
                        ? "font-bold font-sans text-[14px] text-white "
                        : "font-bold font-sans text-[28px] text-white "
                    }
                  >
                    {tasbeh[key].name}
                  </motion.h1>
                  <motion.h1
                    animate={control}
                    className={
                      key == 4
                        ? "text-[14px] text-green-400 "
                        : "text-[28px] text-green-400 "
                    }
                  >
                    {tasbeh[key].arabic}
                  </motion.h1>
                  <button
                    onClick={() => {
                      setShowTasbeh(false);
                      stop();
                      console.log(selectTheme);
                    }}
                    className="m-[5px] absolute w-[25px] h-[25px] top-0 right-0"
                  >
                    <XMarkIcon className="m-auto w-[60%] h-[60%] stroke-green-100 stroke-2 fill-transparent" />
                  </button>
                </div>
                <div className="flex justify-between px-2 items-center w-[50%] h-[45px] bg-gradient-to-r from-[#272727] to-[#222] rounded-b-xl border-[0.3px] border-neutral-500 border-t-0">
                  <div className="flex flex-row gap-[5px]">
                    <ControlButton onClick={isPlay ? pause : play}>
                      {isPlay ? (
                        <PauseIcon className="w-[60%] h-[60%] stroke-neutral-400 stroke-2 fill-transparent" />
                      ) : (
                        <PlayIcon className="w-[60%] h-[60%] stroke-neutral-400 stroke-2 fill-transparent" />
                      )}
                    </ControlButton>
                    <ControlButton onClick={stop}>
                      <StopIcon className="w-[60%] h-[60%] stroke-neutral-400 stroke-2 fill-transparent" />
                    </ControlButton>
                  </div>
                  <div className="relative h-[60px] w-[60px] bg-gradient-to-t from-green-300 via-white to-[#fff] rounded-full shadow-2xl border-b-[2px] border-b-white">
                    <h1 className="w-full h-full flex justify-center items-center text-2xl text-green-700 font-black">
                      {count}
                    </h1>
                  </div>
                  <div className="flex flex-row gap-[5px]">
                    <ControlButton disabled={repDisabled} onClick={changeSec}>
                      <h1 className="w-full h-full flex justify-center items-center text-[12px] font-bold">
                        {sec + "s"}
                      </h1>
                    </ControlButton>
                    <ControlButton disabled={repDisabled} onClick={changeRep}>
                      <h1 className="w-full h-full flex justify-center items-center text-sm  font-bold ">
                        {rep}
                      </h1>
                    </ControlButton>
                  </div>
                </div>
              </div>
            ) : null}
          </div>

          <div className="basis-[5%]"></div>
        </div>
      </div>
      <Signature>developed by</Signature>
    </div>
  );
}

export default App;
