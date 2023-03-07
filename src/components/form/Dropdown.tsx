type DropdownProps = {
  button: React.ReactNode;
  content: React.ReactNode;
  title?: string;
};

const Dropdown = ({ button, content, title }: DropdownProps) => {
  const renderTitle = () => {
    if (title) {
      return (
        <div>
          <span className="text-sm font-medium text-gray-300">{title}</span>
          <div className="mt-2 grow border-t border-gray-300 pb-3" />
        </div>
      );
    }

    return null;
  };

  return (
    <div className="group relative inline-block text-left">
      {button}
      <div
        className="absolute left-0 z-10 mt-2 min-w-[6rem] bg-gray-700 p-4 opacity-0 
        shadow-lg ring-1 ring-inset ring-gray-900 transition-opacity duration-300 
        group-focus-within:opacity-100 group-hover:opacity-100"
      >
        {renderTitle()}
        {content}
      </div>
    </div>
  );
};

export default Dropdown;
