import {createContext, useState} from "react";

export const Context = createContext();

const GeneralProvider = ({children}) => {
	const [data, setData] = useState([]);

	const passInfoToContext = (e) => {
		setData(e);
	};
	return (
		<Context.Provider value={{data, passInfoToContext}}>
			{children}
		</Context.Provider>
	);
};
export default GeneralProvider;
