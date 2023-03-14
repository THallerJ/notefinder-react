import Fretboard from '../fretboard/Fretboard';
import UserInput from '../user_input/UserInput';

const Body = () => {
  return (
    <div className="container mx-auto flex max-h-full flex-col space-y-8 p-2 md:space-y-16 md:pt-16">
      <Fretboard />
      <UserInput />
    </div>
  );
};

export default Body;
