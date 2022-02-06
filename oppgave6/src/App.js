
//import css
import './App.css';

//import components
import Nav from './components/Nav';
import Form from './components/Form';
import Card from './components/Card';



function App() {
  return (
    <div className="container">
      <Nav/>
      <main>
        <Form/>
        <article>
        <h2>My Todos</h2>
        <div className="art-container">
          <Card/>
          <Card/>
        </div>
        </article>
      </main>
    </div>
  );
}

export default App;
