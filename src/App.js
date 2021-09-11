import './App.css';
import Footer from './components/Footer';
import Main from './components/Main';
import Nav from './components/Nav';

function App() {
  return (
    <>
    <Nav/>
    <div className="container">
      <Main/>
    </div>
    <Footer/>
    </>
  );
}

export default App;
