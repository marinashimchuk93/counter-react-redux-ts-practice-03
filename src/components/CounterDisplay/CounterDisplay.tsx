import s from "./CounterDisplay.module.css";


type CounterDisplayProps = {
  count: number
  maxValue: number
  isSettingsChanged: boolean
  isError: boolean
};

export const CounterDisplay = (props: CounterDisplayProps) => {
  const {count, maxValue, isSettingsChanged, isError} = props

  const isMaxReached = count === maxValue && !isSettingsChanged

  const displayClassName = `${s.display} ${
    isError
      ? s.errorTextMsg
      : isMaxReached
        ? s.errorText
        : s.normalText
  } ${isSettingsChanged && !isError ? s.textMessage : ''}`

  const renderContent = () => {
    if (isError) return "Incorrect value!"
    if (isSettingsChanged) return "enter values and press 'set'"
    return count
  }

  return (
    <div className={displayClassName}>
      {renderContent()}
    </div>
  );
};