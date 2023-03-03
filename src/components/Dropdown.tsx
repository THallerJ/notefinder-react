type DropdownProps = {
  button: React.ReactNode;
  content: React.ReactNode;
};

const Dropdown = ({ button, content }: DropdownProps) => {
  return (
    <div className="group relative inline-block text-left">
      {button}
      <div
        className="absolute left-0 z-10 mt-2 min-w-[5rem] bg-white px-4 py-2 opacity-0 shadow-lg 
          ring-1 ring-inset ring-gray-300 transition-opacity delay-150 group-hover:opacity-100 group-focus:opacity-100"
      >
        {content}
      </div>
    </div>
  );
};

export default Dropdown;
