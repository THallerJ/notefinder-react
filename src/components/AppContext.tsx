import { createContext, useContext } from "react";

type AppContextProps = {
	children: React.ReactNode;
};

const AppContext: React.Context<null> = createContext(null);

export const AppContextProvider = (props: AppContextProps) => {
	const value = null;
	/**
	 * add logic for selecting enum of NoteType
	 * update note
	 */

	return (
		<AppContext.Provider value={value}>{props.children}</AppContext.Provider>
	);
};

export const useApp = () => useContext(AppContext);
