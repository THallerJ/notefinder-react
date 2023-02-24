import Fretboard from "./Fretboard";
import NoteButtonPanel from "./NoteButtonPanel";
import store from "../redux/store";
import { Provider } from "react-redux";

function App() {
	return (
		<Provider store={store}>
			<div className="bg-gray-900 min-h-screen p-6">
				<div className="flex space-y-5 flex-col items-center">
					<h1 className="text-white text-5xl p-4">Notefinder</h1>
					<Fretboard />
					<div className="p-10">
						<NoteButtonPanel />
					</div>
				</div>
			</div>
		</Provider>
	);
}

export default App;
