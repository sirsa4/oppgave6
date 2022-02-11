//form component

const Form = ({ title, setTitle, content, setContent, card, setCard }) => {

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

        //first create new card variabel for new objects
        const newCard = [...card, { title: title, content: content, complete: 'Complete', id: new Date().getTime().toString() }]

        //set newCard new card value
        setCard(newCard);
        setTitle('');
        setContent('');
        console.log(card);

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