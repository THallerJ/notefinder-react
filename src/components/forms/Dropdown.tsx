type DropdownProps = {
  button: React.ReactNode;
  content: React.ReactNode;
  left?: boolean;
  right?: boolean;
};

const Dropdown = ({ button, content, left, right }: DropdownProps) => {
  return (
    <div className="group relative inline-block">
      {button}
      <div
        className={`absolute z-10 mt-0 min-w-[6rem] scale-0 bg-[#3c3c3c]
          p-4 shadow-lg ring-1 ring-inset ring-black duration-150 
          ease-in-out group-focus-within:scale-100 group-hover:scale-100
          ${right && 'right-0 origin-top-right'} 
          ${left && 'left-0 origin-top-left'} 
          ${!left && !right && 'left-1/2 origin-top -translate-x-1/2'}`}
      >
        {content}
      </div>
    </div>
  );
};

export default Dropdown;
