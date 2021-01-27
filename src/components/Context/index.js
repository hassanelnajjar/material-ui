import { createContext, useState } from 'react';

const context = createContext();

export function ContextProvide({ children }) {
	const loggedUser = useState(true);
	return <context.Provider value={loggedUser}>{children}</context.Provider>;
}

export default context;
