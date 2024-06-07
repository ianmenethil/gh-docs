// F:\ZenDocs\docusaurus-2\src\bootstrap.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './CoreLogic';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import './css/base.css';
import './css/components.css';
import './css/layout.css';

const theme = createTheme();
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<App />
		</ThemeProvider>
	</React.StrictMode>
);
