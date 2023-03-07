import Checkbox from '../../form/Checkbox';

const ToggleStringContent = () => {
  return (
    <div className="flex flex-col space-y-2">
      <Checkbox text="High E" checked />
      <Checkbox text="B" checked />
      <Checkbox text="G" checked />
      <Checkbox text="D" checked />
      <Checkbox text="A" checked />
      <Checkbox text="Low E" checked />
    </div>
  );
};

export default ToggleStringContent;
