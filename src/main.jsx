import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css"
import Root from './router/index.jsx'
createRoot(document.getElementById('root')).render(
 <Root/>
)
