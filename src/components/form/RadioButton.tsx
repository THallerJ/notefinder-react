type RadioButtonProps = {
  text: string;
  checked?: boolean;
  name: string;
  onClick: React.MouseEventHandler<HTMLInputElement>;
};

const RadioButton = ({ text, checked, name, onClick }: RadioButtonProps) => {
  const id = `${text + name}Id`;
  return (
    <label htmlFor={id} className="flex items-center text-sm font-medium">
      <input
        type="radio"
        id={id}
        name={name}
        className="h-4 w-4 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 "
        defaultChecked={checked}
        onClick={onClick}
      />
      <span className="ml-3 tracking-wide text-gray-300">{text}</span>
    </label>
  );
};

export default RadioButton;
