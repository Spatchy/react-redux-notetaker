import 'bulma/css/bulma.min.css' // Quickly use Bulma with no customisations
import './assets/fontawesome/solid.min.css'
import './assets/fontawesome/fontawesome.min.css'

import Navbar from './components/Navbar'
//import NotesHome from './views/NotesHome'
//import Landing from './views/Landing'
import Signup from './views/Signup'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      {/* <NotesHome></NotesHome> */}
      {/* <Landing></Landing> */}
      <Signup></Signup>
    </div>
  );
}

export default App;
