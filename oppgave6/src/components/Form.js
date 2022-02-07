import Card from "./Card";
import { useState } from "react";


//form component
const Form = ({title,content, rdy})=>{
    //title input state
    const [input,inputValue] = useState('');
    //textarea state
    
    const [text,textValue] = useState('');
    
    if(input !== ''){
        console.log('yes');
    }
    
    //onChange event functions
    const inputChange =(e)=>{
        const inputt = e.target.value;
        inputValue(inputt)
    }
    const textChange =(e)=>{
        const textt = e.target.value;
      
        textValue(textt)
    }

    //click event function
const submit = (e)=>{
    e.preventDefault();
    //Empty array to form submits
    //title input
   /*  let titl = []; */
    //content textarea
  /*   let tex = []; */

    //pushing to array
    /* titl.push(input)
    tex.push(text) */
    /* console.log(titl); */
    title(input);
    content(text);
    inputValue('')
    textValue('')
    rdy(true);
    /* setTimeout(()=>{
        rdy(false)
    },1000); */
}
const falsee =()=>{
    rdy(false);
}
   
    return(
        <section>
                <form onSubmit={submit}>
                <div className="title">
                <label htmlFor="title">Title</label>
                <br/>
                <input type="text" name="title" id="title" value={input} onChange={inputChange}/>  
            </div>
            <div className="content">
                        <label htmlFor="content">Content</label>
                        <br/>
                        <textarea name="content" id="content" cols="30" rows="10" value={text} onChange={textChange}></textarea>
                    </div>
                    <div className="bigBtn-container">
                        <button /* onClick={click} */>Add</button>
                    </div>
                </form>
            </section>
    )
}

export default Form;