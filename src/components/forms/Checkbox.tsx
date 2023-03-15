type CheckboxProps = {
  text: string;
  defaultChecked?: boolean;
  checked?: boolean;
  onChange: () => void;
};

const Checkbox = ({
  text,
  defaultChecked,
  onChange: onClick,
  checked,
}: CheckboxProps) => {
  const id = `${text}id`;
  return (
    <label htmlFor={id} className="flex items-center text-sm font-medium">
      <input
        type="checkbox"
        id={id}
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
