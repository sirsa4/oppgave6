
//import css
import './App.css';

//import components
import Nav from './components/Nav';
import Form from './components/Form';
import Card from './components/Card';

//state
import {useState} from 'react';


function App() {
//form states
const [title,setTitle]=useState('');
const [content,setContent]=useState('');

//card state
const [card,setCard]=useState([]);
const [ready,setReady]=useState(false);

const isReady = false;

const header = title;
const text = content;

/* console.log(header);
console.log(text); */
const id = Math.floor(Math.random() * 10000);

/*   console.log(header);
console.log(content); */
const obj = {
  head: header,
    body: text,
    id: id
}

/* if(title !== "<empty string>"){
  console.log('yes');
} else {
  console.log('no');
}
 */



/* iterate() */

/* workplz.push(obj) */
/* console.log(workplz); */

/*  console.log(head, body);
console.log(array[0], array[1]); */

//this works
/* const newArray = workplz.map((x)=>{
 const {head, body, id} = x;
 console.log(head,body,id);
 return <Card key={id} title={head} content={body}/>
}) */
/* const newArray = obj.map((x)=>{
 const {head, body} = x;
 return <section><h3>{head}</h3><p>{body}</p><div><button>Complete</button></div></section>
}) */

  return (
    <div className="container">
      <Nav/>
      <main>
        <Form title={setTitle} content={setContent} rdy ={setReady} />
        <article>
        <h2>My Todos</h2>
        <div className="art-container">
        {/*   {workplz ? newArray : '' }  */}
        <Card/>
        </div>
        </article>
      </main>
    </div>
  );
}

export default App;
