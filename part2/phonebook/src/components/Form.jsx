// <Form submit={addName} name={newName} number={newNumber} nameChange={handleNameInputChange} numberChange={handleNumberInputChange} />

const Form = (props) => {

    return (
        <form onSubmit={props.submit}>
        <div>
          name: <input value={props.name} onChange={props.nameChange} />
        </div>
        <div>
          number: <input value={props.number} onChange={props.numberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default Form