import {Counter} from "./components/Counter/Counter.tsx";
import {Setting} from "./components/Setting/Setting.tsx";
import "./App.css"
import {useEffect, useState} from "react";


export const App = () => {
  const [maxValue, setMaxValue] = useState<number>(() =>
    Number(localStorage.getItem("counterMaxValue")) || 5
  )
  const [startValue, setStartValue] = useState<number>(() =>
    Number(localStorage.getItem("counterStartValue")) || 0
  )
  const [count, setCount] = useState<number>(() =>
    Number(localStorage.getItem("counterValue")) || 0
  )

  useEffect(() => {
    localStorage.setItem("counterValue", String(count))
  }, [count])

  const [isSettingsChanged, setIsSettingsChanged] = useState<boolean>(false)

  const isError = startValue < 0 || maxValue <= startValue

  const setSettingsHandler = () => {
    if (!isError) {
      localStorage.setItem("counterMaxValue", String(maxValue))
      localStorage.setItem("counterStartValue", String(startValue))
      setCount(startValue)
      setIsSettingsChanged(false)
    }
  }


  return (
    <div className={"app"}>
      <Setting
        maxValue={maxValue}
        startValue={startValue}
        setMaxValue={setMaxValue}
        setStartValue={setStartValue}
        onSet={setSettingsHandler}
        isSettingsChanged={isSettingsChanged}
        setIsSettingsChanged={setIsSettingsChanged}
        isError={isError}
      />
      <Counter
        count={count}
        setCount={setCount}
        maxValue={maxValue}
        startValue={startValue}
        isSettingsChanged={isSettingsChanged}
        isError={isError}
      />
    </div>
  );
};