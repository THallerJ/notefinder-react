import { useState } from 'react';
import { GuitarString } from '../../types/GuitarString';
import ToggleStringCheckbox from './components/ToggleStringCheckbox';
import SettingTitle from './components/SettingTitle';

type ToggleStringContentProps = {
  id: string;
  showTitle?: boolean;
};

const ToggleStringsSetting = ({ id, showTitle }: ToggleStringContentProps) => {
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

  const renderCheckboxes = (): React.ReactNode => {
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

  const renderTitle = () => {
    if (showTitle) {
      return <SettingTitle>Toggle Strings</SettingTitle>;
    }

    return null;
  };

  return (
    <div className="flex flex-col space-y-2">
      {renderTitle()}
      {renderCheckboxes()}
    </div>
  );
};

export default ToggleStringsSetting;
