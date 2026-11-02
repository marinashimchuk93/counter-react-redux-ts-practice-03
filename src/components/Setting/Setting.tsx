import s from "./Setting.module.css";
import {Button} from "../Button/Button.tsx";
import {ChangeEvent} from "react";
import {
  setIsSettingsChangedAC, setMaxValueAC,
  setSettingsAC, setStartValueAC
} from "../../model/counter-reducer.ts";
import {useAppDispatch} from "../../common/hooks/useAppDispatch.ts";
import {useAppSelector} from "../../common/hooks/useAppSelector.ts";

export const Setting = () => {
  const maxValue = useAppSelector(state => state.counter.maxValue)
  const startValue = useAppSelector(state => state.counter.startValue)
  const isSettingsChanged = useAppSelector(state => state.counter.isSettingsChanged)

  const dispatch = useAppDispatch()

  const isError = startValue < 0 || maxValue <= startValue

  const onSetHandler = () => {
    if (!isError) {
      dispatch(setSettingsAC())
    }
  }

  const changeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setMaxValueAC(Number(e.target.value)));
    dispatch(setIsSettingsChangedAC(true));
  };

  const changeStartHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setStartValueAC(Number(e.target.value)));
    dispatch(setIsSettingsChangedAC(true));
  };

  return (
    <div className={s.container}>
      <div className={s.inputsWrapper}>
        <div className={s.inputBlock}>
          <span>max value:</span>
          <input
            type={"number"}
            value={maxValue}
            onChange={changeMaxHandler}
            className={isError ? s.errorInput : ''}
          />
        </div>
        <div className={s.inputBlock}>
          <span>start value:</span>
          <input
            type={"number"}
            value={startValue}
            onChange={changeStartHandler}
            className={isError ? s.errorInput : ''}
          />
        </div>
      </div>

      <div className={s.buttonWrapper}>
        <Button
          onClick={onSetHandler}
          disabled={!isSettingsChanged || isError}
        >
          set
        </Button>
      </div>
    </div>
  );
};