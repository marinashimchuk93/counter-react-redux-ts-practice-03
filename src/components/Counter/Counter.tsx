import s from "./Counter.module.css"
import {Button} from "../Button/Button.tsx";
import {CounterDisplay} from "../CounterDisplay/CounterDisplay.tsx";
import {useAppSelector} from "../../common/hooks/useAppSelector.ts";
import {useAppDispatch} from "../../common/hooks/useAppDispatch.ts";
import {setCountAC} from "../../model/counter-reducer.ts";

export const Counter = () => {
  const count = useAppSelector((state) => state.counter.count);
  const maxValue = useAppSelector((state) => state.counter.maxValue);
  const startValue = useAppSelector((state) => state.counter.startValue);
  const isSettingsChanged = useAppSelector((state) => state.counter.isSettingsChanged);

  const dispatch = useAppDispatch()

  const isError = startValue < 0 || maxValue <= startValue;

  const onIncrement = () => {
    if (count < maxValue) {
      dispatch(setCountAC(count + 1));
    }
  };

  const onReset = () => {
    dispatch(setCountAC(startValue));
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