import Fretboard from '../fretboard/Fretboard';
import NoteButtonPanel from '../note_button/NoteButtonPanel';

const Body = () => {
  return (
    <div className="flex max-h-full flex-col items-center space-y-16 pt-12">
      <Fretboard />
      <NoteButtonPanel />
    </div>
  );
};

export default Body;
