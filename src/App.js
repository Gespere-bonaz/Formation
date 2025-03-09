import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from './routes/AppRoutes';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
        <AppRoutes />
    </Router>
  );
}

export default App;
