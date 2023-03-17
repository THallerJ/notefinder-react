type CheckboxProps = {
  id: string;
  text: string;
  defaultChecked?: boolean;
  checked?: boolean;
  onChange: () => void;
};

const Checkbox = ({
  id,
  text,
  defaultChecked,
  onChange: onClick,
  checked,
}: CheckboxProps) => {
  const checkboxId = `${id + text}checkbox`;
  return (
    <label
      htmlFor={checkboxId}
      className="flex items-center text-sm font-medium"
    >
      <input
        type="checkbox"
        id={checkboxId}
        className="h-4 w-4 rounded-3xl"
        defaultChecked={defaultChecked}
        checked={checked}
        onChange={onClick}
      />
      <span className="ml-3 tracking-wide text-[#d1d1d1]">{text}</span>
    </label>
  );
};

export default Checkbox;
