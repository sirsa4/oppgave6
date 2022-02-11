//todo list card

const Card = ({ card, setCard }) => {

//complete/delete todolist component
const remove = (id)=>{
  /* console.log(id); */
  //when complete button inside a todo card, new array is created which all array items from previous, but without the one whos button is clicked. Because condition inside filter is creating all items who id is not equal to the id of current component who complete button is clicked.
  const newCard = card.filter((item)=>item.id !== id);
  setCard(newCard);
}


  return (
    <>
      {card.map((item) => {
        const { title, content, complete, id } = item;
        return (
          <section className="card" key={id}>
            <h3>{title}</h3>
            <p>{content}</p>
            <div className="btn-container">
              {/* onClick event on button run filter method to remove component with id */}
              <button 
              onClick={()=>remove(id)}>{complete}
              </button>
            </div>

          </section>
        )
      })}

    </>
    /*  <section className="card">
       <h3>Todo title</h3>
       <p>This is todo content</p>
       <div className="btn-container">
         <button>Complete</button>
       </div>
 
     </section> */
  )
}

export default Card;