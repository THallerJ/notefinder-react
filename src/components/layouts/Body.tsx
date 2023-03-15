import Fretboard from '../fretboard/Fretboard';
import NoteButtons from '../note_buttons/NoteButtons';

const Body = () => {
  return (
    <div className="container mx-auto flex max-h-full flex-col space-y-8 p-2  pt-16 md:space-y-16">
      <Fretboard />
      <NoteButtons />
    </div>
  );
};

export default Body;
