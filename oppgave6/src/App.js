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

  
  //All states are now located here in App component as it is easier manipulate them across children components, Form, Card. This is changing from how i initially started with states being all over the place in components. It didnt go so well, specially with states having random names. 

  //useState for the two input - title and content. 
  
  //This is state for input with label 'title' in Form component
  const [title, setTitle] = useState('');
  
  //This is state for textarea with label 'content' also inside Form component. Sent as prop to Form component and controlls state of title input value.
  const [content, setContent] = useState('');

   //state for card array object to create todo cards. This state stores arrray created from the title input and content textarea. 
   const [card, setCard] = useState([]);

  //add/delete todolist h2-tags conditional rendering flags
  //this state is for showing added message. sent as prop to Form component and used inside setTimeout function inside submit function. Also sent as prop to Form component to controll textarea value
  const [showAdd, setShowAdd] = useState(false);
  
  //this state is for showing deleted message
  //It is sent as prop to Card component and is updated inside setTimeout too inside remove() which filters new array.
  const [showDelete, setShowDelete] = useState(false);

 

  return (
    <div className="container">
      <Nav />
      <main>
        {/* conditional rendering. first one for example runs showAdd is true and showDelete is false. This is to avoid both being able to run at same time. */}
        {showAdd && !showDelete ? <h2 className='add'>Todo list added!</h2> : null}
        {showDelete && !showAdd ? <h2 className='delete'>Todo list deleted!</h2> : null}
        <Form
          title={title}
          setTitle={setTitle}
          content={content}
          setContent={setContent}
          card={card}
          setCard={setCard}
          setShowAdd={setShowAdd}
        />
        <article>
          <h2>My Todos</h2>
          <div className="art-container">
            <Card
              card={card}
              setCard={setCard}
              setShowDelete={setShowDelete}
            />
          </div>
        </article>
      </main>
    </div>
  );
}

export default App;
