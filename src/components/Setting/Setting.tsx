import s from "./Setting.module.css";
import {Button} from "../Button/Button.tsx";
import {ChangeEvent} from "react";

type SettingProps = {
  maxValue: number;
  startValue: number;
  setMaxValue: (value: number) => void;
  setStartValue: (value: number) => void;
  onSet: () => void
  isSettingsChanged: boolean
  setIsSettingsChanged: (value: boolean) => void
  isError: boolean
};

export const Setting = (props: SettingProps) => {
  const {
    maxValue,
    startValue,
    setMaxValue,
    setStartValue,
    onSet,
    isSettingsChanged,
    setIsSettingsChanged, isError
  } = props;

  const changeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setMaxValue(Number(e.currentTarget.value));
    setIsSettingsChanged(true);
  };

  const changeStartHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setStartValue(Number(e.currentTarget.value));
    setIsSettingsChanged(true);
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
          onClick={onSet}
          disabled={!isSettingsChanged || isError}
        >
          set
        </Button>
      </div>
    </div>
  );
};