type DropdownProps = {
  button: React.ReactNode;
  content: React.ReactNode;
  left?: boolean;
  right?: boolean;
};

const Dropdown = ({ button, content, left, right }: DropdownProps) => {
  return (
    <div className="relative inline-block text-left">
      <div className="peer">{button}</div>
      <div
        className={`absolute z-50 mt-2 min-w-[6rem] bg-gray-700 p-4 opacity-0 
        shadow-lg ring-1 ring-inset ring-gray-900 transition-opacity duration-300 
        peer-focus-within:opacity-100 peer-hover:opacity-100 
        ${right && 'right-0'} ${left && 'left-0'}${
          !left && !right && 'left-1/2 -translate-x-1/2'
        }`}
      >
        {content}
      </div>
    </div>
  );
};

export default Dropdown;
