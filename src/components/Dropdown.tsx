type DropdownProps = {
  button: React.ReactNode;
  content: React.ReactNode;
};

const Dropdown = ({ button, content }: DropdownProps) => {
  return (
    <div className="group relative inline-block text-left">
      {button}
      <div
        className="absolute left-0 z-10 mt-2 min-w-[5rem] bg-gray-700 p-4 opacity-0 
        shadow-lg ring-1 ring-inset ring-gray-900 transition-opacity duration-300 
        group-focus-within:opacity-100 group-hover:opacity-100"
      >
        {content}
      </div>
    </div>
  );
};

export default Dropdown;
