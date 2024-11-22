import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Ensure this matches the filename and is correctly imported
import './index.css'; // Existing styles
import './styles.css'; // Import your custom styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
