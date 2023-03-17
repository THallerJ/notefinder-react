type RadioButtonProps = {
  id: string;
  text: string;
  checked?: boolean;
  name: string;
  onClick: React.MouseEventHandler<HTMLInputElement>;
};

const RadioButton = ({
  id,
  text,
  checked,
  name,
  onClick,
}: RadioButtonProps) => {
  const radioId = `${id + text}radio`;
  return (
    <label htmlFor={radioId} className="flex items-center text-sm font-medium">
      <input
        type="radio"
        id={radioId}
        name={name}
        className="h-4 w-4"
        defaultChecked={checked}
        onClick={onClick}
      />
      <span className="ml-3 tracking-wide text-[#d1d1d1]">{text}</span>
    </label>
  );
};

export default RadioButton;
