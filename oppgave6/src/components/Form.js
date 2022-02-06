//form component

const Form = ()=>{
    return(
        <section>
                <form>
                <div class="title">
                <label for="title">Title</label>
                <br/>
                <input type="text" name="title" id="title"/>  
            </div>
            <div class="content">
                        <label for="content">Content</label>
                        <br/>
                        <textarea name="content" id="content" cols="30" rows="10"></textarea>
                    </div>
                    <div class="bigBtn-container">
                        <button>Add</button>
                    </div>
                </form>
            </section>
    )
}

export default Form;