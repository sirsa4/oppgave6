//todo list card

const Card = ({ card, setCard }) => {




  return (
    <>
      {card.map((item) => {
        const { title, content, complete, id } = item;
        return (
          <section className="card" key={id}>
            <h3>{title}</h3>
            <p>{content}</p>
            <div className="btn-container">
              <button>{complete}</button>
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