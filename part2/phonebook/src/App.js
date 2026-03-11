import { useState } from 'react'

  const Filter = ({value, onChange}) => {

    return (
      <div>
        filter shown with:
          <input 
            value={value}
            onChange={onChange}/>
      </div>
    )
  }

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

  const Persons = ({personsToShow}) => {
    return (
      <div>
        <ul>
        {personsToShow.map(person =>
          <p key={person.id}>{person.name} {person.number}</p>
        )}
      </ul>
      </div>
    )
  }

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showFilter, setNewFilter] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length+1
    }

    if(persons.find(
      item => JSON.stringify(item) === JSON.stringify(personObject)
    )){
      window.alert(`${newName} is already added to phonebook`)
    }else{
      setPersons(persons.concat(personObject))
    }
    
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => { 
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => { 
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => { 
    setNewFilter(event.target.value)
  }

    const personsToShow = showFilter
    ? persons.filter(person => person.name.toLowerCase().includes(showFilter.toLowerCase()))
    : persons


  

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter value={showFilter} onChange={handleFilterChange} />  

      <h3>adda a new</h3>

      <PersonForm 
        onSubmit={addPerson} 
        newName={newName} 
        nameOnChange={handleNameChange}
        newNumber={newNumber}
        numberOnChange={handleNumberChange} 
      />

      <h3>Numbers</h3>

      <Persons personsToShow={personsToShow} />

    </div>
  )
}

export default App