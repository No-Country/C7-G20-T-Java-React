import React from 'react';
import { Routes } from 'Routes';
import ThemeProvider from 'Theme/ThemeProvider';

const App = () => (
	<React.StrictMode>
		<ThemeProvider>
			<Routes />
		</ThemeProvider>
	</React.StrictMode>
);

export default App;
