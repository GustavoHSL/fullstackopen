
  const PersonForm = ({onSubmit, newName, nameOnChange, newNumber, numberOnChange}) => {
    return (
        <form onSubmit={onSubmit}>
          <div>
            name: 
            <input 
            value={newName}
            onChange={nameOnChange}/>
          </div>
          <div>number: 
            <input value={newNumber}
            onChange={numberOnChange}/>
          </div>
          <div>
            <button type="submit">add</button>
          </div>
      </form>
    )
  }

  export default PersonForm