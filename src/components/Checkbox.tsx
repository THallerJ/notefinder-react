type CheckboxProps = {
  text: string;
};

const Checkbox = ({ text }: CheckboxProps) => {
  const id = `${text}id`;
  return (
    <label htmlFor={id} className="flex items-center text-sm font-medium">
      <input type="checkbox" id={id} className="h-4 w-4 rounded-3xl" />
      <span className="ml-3 tracking-wide text-gray-300">{text}</span>
    </label>
  );
};

export default Checkbox;
