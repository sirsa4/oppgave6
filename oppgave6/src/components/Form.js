//form component

//in parameter props are destructured for easier use in Form component.
const Form = ({ title, setTitle, content, setContent, card, setCard, setShowAdd, setShowError }) => {

    //onChange functions for input
    //title input state onChange
    const titleChange = (e) => {
        /* console.log(title); */
        //value of input is set title
        setTitle(e.target.value)
    }
    //content textarea onChange
    const contentChange = (e) => {
        setContent(e.target.value);
        /* console.log(content); */
    }

    //form submit function
    /* 
    this function gets values from title and content and adds the value to card array to create objects inside.
     */
    const submit = (e) => {
        e.preventDefault();

        //if statment to make sure both title and content inputs are not empty when submitting. This is to avoid having todolist card without title or content. Both have to have text content in inputs for card component to be rendered in DOM.
       if(title !== '' && content !== ''){
             //first create new card variabel for new objects
             //previous card state value is spread then second item in array is an object with title, content, complete and id keys. The value for title is title, from title input value. value for content is similar in being value from textarea state. Value of complete is string. Value of id is date to give each object unique id which can be used to give rendered card unique key.
             //this array is mapped in the Card component, also filtered when todolist is completed.
        const newCard = [...card, { title: title, content: content, complete: 'Complete', id: new Date().getTime().toString() }]

        //set newCard new card value
        setCard(newCard);

        //both input values are clear to empty string after submit so it easier to write again on them.
        setTitle('');
        setContent('');
        console.log(card);

        //add message setTimeout function - count down function
        //This is a setTimeout and then another setTimeout inside it. 
        //The first setTimeout sets showAdd to true so that is h2-tag with add message is rendered, but this runs only after 500millisecond after todolist is created.
        //the second setTimeout sets showAdd to false again so that h2-tag is removed, it happends after 1second is gone.
        setTimeout(()=>{
            setShowAdd(true);
            setTimeout(()=>{
                setShowAdd(false);
            },1000);
            
          },500);

       } else {
           /* console.log('try again'); */
           //Error when both title and content are submitted empty.
           setTimeout(()=>{
            setShowError(true);
            setTimeout(()=>{
                setShowError(false);
            },1000);
            
          },500);
       }

    }


    return (
        <section>
            <form onSubmit={submit}>
                <div className="title">
                    <label htmlFor="title">Title</label>
                    <br />
                    <input type="text" name="title" id="title"
                        onChange={titleChange}
                        value={title}
                    />
                </div>
                <div className="content">
                    <label htmlFor="content">Content</label>
                    <br />
                    <textarea name="content" id="content" cols="30" rows="10"
                        onChange={contentChange}
                        value={content}
                    ></textarea>
                </div>
                <div className="bigBtn-container">
                    <button type="submit" /* onClick={click} */>Add</button>
                </div>
            </form>
        </section>
    )
}

export default Form;