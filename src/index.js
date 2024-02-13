import ReactDOM from 'react-dom/client';
import App from './components/app/App';

import 'bootstrap/dist/css/bootstrap-reboot.min.css'
import 'bootstrap/dist/css/bootstrap.css'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <Context.Provider value={{store}}>
        <App />
    // </Context.Provider>
);