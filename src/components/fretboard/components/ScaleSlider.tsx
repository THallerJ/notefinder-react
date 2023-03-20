type ScaleSliderProps = {
  setScale: React.Dispatch<React.SetStateAction<string>>;
};

const ScaleSlider = ({ setScale }: ScaleSliderProps) => {
  return (
    <input
      step={10}
      id="scaleslider"
      min="10"
      max="100"
      defaultValue="100"
      type="range"
      className="hidden h-1 w-4/12 cursor-pointer appearance-none bg-gray-700 
        opacity-50 hover:h-2 hover:opacity-100 md:inline-block 
        [&::-webkit-slider-thumb]:h-1 [&::-webkit-slider-thumb]:w-5 
        [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full 
        [&::-webkit-slider-thumb]:bg-blue-500 hover:[&::-webkit-slider-thumb]:h-5"
      onChange={(e) => setScale(e.target.value)}
    />
  );
};

export default ScaleSlider;
