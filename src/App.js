import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is a basic Docker compose setup with a volume that watches for changes in
          the src folder.
        </p>
        <a
          className="App-link"
          href="https://docs.docker.com/storage/volumes/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Using Docker Volumes
        </a>
      </header>
    </div>
  )
}

export default App;
