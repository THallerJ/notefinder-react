import Checkbox from '../Checkbox';

const ToggleStringContent = () => {
  return (
    <div className="flex flex-col space-y-2">
      <Checkbox text="High E" />
      <Checkbox text="B" />
      <Checkbox text="G" />
      <Checkbox text="D" />
      <Checkbox text="A" />
      <Checkbox text="Low E" />
    </div>
  );
};

export default ToggleStringContent;
