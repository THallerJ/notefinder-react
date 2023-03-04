const ToggleStringButton = () => {
  return (
    <button
      type="button"
      className="inline-flex gap-x-2 rounded-md border-gray-700 bg-black px-3 py-2 text-sm
      font-semibold text-white shadow-sm focus:ring-1 focus:ring-gray-700"
    >
      <svg
        className="-mr-1 h-5 w-5 text-gray-400"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
          clipRule="evenodd"
        />
      </svg>
      Toggle Strings
    </button>
  );
};

export default ToggleStringButton;
