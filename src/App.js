import 'bulma/css/bulma.min.css'
import Navbar from './components/Navbar'
import NotesHome from './views/NotesHome'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <NotesHome></NotesHome>
    </div>
  );
}

export default App;
