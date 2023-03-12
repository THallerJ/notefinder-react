import Fretboard from '../fretboard/Fretboard';
import UserInput from '../user_input/UserInput';

const Body = () => {
  return (
    <div className="container mx-auto flex max-h-full flex-col  space-y-16  pt-12">
      <Fretboard />
      <UserInput />
    </div>
  );
};

export default Body;
