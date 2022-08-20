import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function AppBoot(){
    return (
        <React.StrictMode>
            <App />
        </React.StrictMode>
    )
}   

ReactDOM.render(<AppBoot/> ,document.getElementById('root'));
reportWebVitals();
