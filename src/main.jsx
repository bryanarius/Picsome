import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter as Router} from "react-router-dom"
import {ContextProvider} from "./Context"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <ContextProvider>
        <Router>
            <App />
        </Router>
    </ContextProvider>
)
