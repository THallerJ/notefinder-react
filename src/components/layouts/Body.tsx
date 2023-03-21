import Fretboard from '../fretboard/Fretboard';
import NoteButtons from '../note_buttons/NoteButtons';

const Body = () => {
  return (
    <div className="container z-0 mx-auto flex max-h-full flex-col space-y-16 p-2 pt-16">
      <Fretboard />
      <NoteButtons />
    </div>
  );
};

export default Body;
