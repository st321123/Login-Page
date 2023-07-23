import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';

var re = createRoot(document.getElementById('root'));

re.render(<App />);