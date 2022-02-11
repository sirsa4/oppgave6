//resources: practice 
/*
  * personal useState practice with other resouces included in App.js top as comment: https://github.com/sirsa4/lift-state/tree/main/lifting-state

  * remove/filter cards: https://www.youtube.com/watch?v=ly3m6mv5qvg&ab_channel=CodingAddict  Timestamp: 4:04:00 - Grocery-bud Add items
 */

//import css
import './App.css';

//import components
import Nav from './components/Nav';
import Form from './components/Form';
import Card from './components/Card';

//state
import { useState } from 'react';


function App() {

  //useState for the two input - title and content.
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  //state for card array object to create todo cards from value of inputs.
  const [card, setCard] = useState([]);

  return (
    <div className="container">
      <Nav />
      <main>
        <Form
          title={title}
          setTitle={setTitle}
          content={content}
          setContent={setContent}
          card={card}
          setCard={setCard}
        />
        <article>
          <h2>My Todos</h2>
          <div className="art-container">
            <Card
              card={card}
              setCard={setCard}
            />
          </div>
        </article>
      </main>
    </div>
  );
}

export default App;
