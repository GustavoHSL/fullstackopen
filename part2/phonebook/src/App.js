import { useState, useEffect} from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Person from './components/Person'
import personsService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showFilter, setNewFilter] = useState('')

  useEffect(() => {
    personsService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      //id: persons.length+1
    }
    const existingPerson = persons.find(item => item.name === newName)

    if(existingPerson){
      if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
        personsService.update(existingPerson.id, personObject).then(returnedPerson => {
        setPersons(persons.map(p => p.id !== existingPerson.id ? p : returnedPerson))
          setNewName('')
        setNewNumber('')
        })
      //window.alert(`${newName} is already added to phonebook`)
        }
    }else{
      personsService
        .create(personObject)
        .then(returnedPersons => {
            setPersons(persons.concat(returnedPersons))
            setNewName('')
            setNewNumber('')
      })
    }
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

  const deletePerson = (person) => {
    if(window.confirm(`Delete ${person.name} ?`)){
      personsService.remove(person.id).then(() => {
        setPersons(persons.filter(p => p.id !== person.id))
      })
    }
    
  }
  
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

        {personsToShow.map(person => 
          <Person key={person.id} person={person} deleteP={() => deletePerson(person)}/>
        )}
 

    </div>
  )
}

export default App