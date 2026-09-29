import s from "./Counter.module.css"
import {Button} from "../Button/Button.tsx";
import {CounterDisplay} from "../CounterDisplay/CounterDisplay.tsx";

type CounterProps = {
  count: number
  setCount: (value: number) => void
  maxValue: number
  startValue: number
  isSettingsChanged: boolean
  isError: boolean
}

export const Counter = (props: CounterProps) => {
  const {
    count,
    maxValue,
    startValue,
    setCount,
    isSettingsChanged,
    isError
  } = props

  const onIncrement = () => {
    if (count < maxValue) {
      setCount(count + 1);
    }
  };

  const onReset = () => {
    setCount(startValue);
  };

  const onIncrementDisabled = count === maxValue || isSettingsChanged || isError
  const isResetDisabled = count === startValue || isSettingsChanged || isError

  return (
    <div className={s.container}>
      <CounterDisplay
        count={count}
        maxValue={maxValue}
        isSettingsChanged={isSettingsChanged}
        isError={isError}
      />
      <div className={s.buttonWrapper}>
        <Button
          onClick={onIncrement}
          disabled={onIncrementDisabled}
        >
          inc
        </Button>
        <Button
          onClick={onReset}
          disabled={isResetDisabled}
        >
          reset
        </Button>
      </div>
    </div>
  );
};