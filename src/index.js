import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App'

const reactDOM = document.getElementById("root")

const root = createRoot(reactDOM)

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)


