import { useState } from 'react';
import { GuitarString } from '../../types/GuitarString';
import ToggleStringCheckbox from './components/ToggleStringCheckbox';

type ToggleStringContentProps = {
  id: string;
};

const ToggleStringContent = ({ id }: ToggleStringContentProps) => {
  type GuitarStrings = { guitarString: GuitarString; labelText?: string };
  const guitarStringsArray: GuitarStrings[] = [
    { guitarString: 'HIGH_E', labelText: 'High E' },
    { guitarString: 'B' },
    { guitarString: 'G' },
    { guitarString: 'D' },
    { guitarString: 'A' },
    { guitarString: 'LOW_E', labelText: 'Low E' },
  ];

  // toggledCount tracks the number of checkboxes that are toggled.
  // This allows us to ensure at least one checkbox is alway checked
  const [toggledCount, setToggledCount] = useState<number>(
    guitarStringsArray.length
  );

  const generateCheckboxes = (): React.ReactNode => {
    return guitarStringsArray.map((elem) => {
      return (
        <ToggleStringCheckbox
          id={id}
          key={`${elem.guitarString}StringCheckbox`}
          text={elem.labelText || elem.guitarString}
          guitarString={elem.guitarString}
          toggledCount={toggledCount}
          setToggledCount={setToggledCount}
        />
      );
    });
  };

  return <div className="flex flex-col space-y-2">{generateCheckboxes()}</div>;
};

export default ToggleStringContent;
