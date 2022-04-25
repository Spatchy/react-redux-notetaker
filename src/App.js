import 'bulma/css/bulma.min.css' // Quickly use Bulma with no customisations
import './assets/fontawesome/solid.min.css'
import './assets/fontawesome/fontawesome.min.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'


import Navbar from './components/Navbar'
import NotesHome from './views/NotesHome'
import Login from './views/Login'
import Signup from './views/Signup'

function App() {
  return (
    <Router>
      <Provider store={store}>
        <div className="App">
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element = {<NotesHome />} />
            <Route path="/login" element = {<Login />} />
            <Route path="/signup" element = {<Signup />} />
          </Routes>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
