import logo from './logo.svg';
import './App.css';
import ThemeContext from './ThemeContext';
import Header from './Header';
import ThemeChanger from './ThemeChanger';
function App() {
  
  return (
    <div className="App">

      <ThemeContext>
      <Header/>
      <ThemeChanger/>
      </ThemeContext>
    
    </div>
  );
}

export default App;
