import { useState, useEffect } from 'react'
import Person from './components/Person'
import Search from './components/Search'
import Form from './components/Form'
import personService from './services/persons'
import Notification from './components/Notification'

function App() {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('Enter a name...')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState(null)


  // polling persons
  useEffect(() => {
    personService.getAll()
    .then( persons => {
      setPersons(persons)
    })
  }, [])
  
  // input change ( name )
  const handleNameInputChange = (e) => {
    setNewName(e.target.value)
  }

  // input change ( number )
  const handleNumberInputChange = (e) => {
    setNewNumber(e.target.value)
  }

  // console.log("Filtering by: ", filter);

  // input change ( filter ), talks with Search component
  const handleFiltering = (e) => {
    if ( e.target.value.length === 0 ) {
      setFilter('')
    }
    else{
      const filterString = e.target.value
      setFilter(filterString)
    }
  }

  // handles deletion button click, talks with Person component
  const handleDeletion = (name, id) => {
    console.log("Trying to delete ",name, id)
    if (confirm(`Delete ${name}?`)) {
      personService.deletePerson(id).then(response => {
      setPersons(persons.filter(p => p.id !== response.id))
      setMessage(`${name} was successfully deleted`)
      setTimeout(() => {
        setMessage(null)
      }, 5000)
    })
    .catch(error => {setMessage(`${name} can't be found in the database`)
        setTimeout(()=> {
          setMessage(null)
        }, 5000)
      })
    }
  }


  // handles pressing add, talks with Form component post submission.
  const addName = (e) => {
    e.preventDefault()
    const newPerson = { name: newName, number: newNumber, id: persons.length + 1 }

    // console.log("This is the name and number: ", newPerson.name, newPerson.number)

    // does the number already exist in the phonebook?
    if (checkIfNumberExists(newNumber)) 
    {
      setMessage(`number ${newNumber} already exists`)
      setTimeout(() => {
        setMessage(null)
      }, 5000)
      return
    }
    
    // duplicate number - are we trying to replace the number?
    if (checkIfNameExists(newName) && newNumber !== "") 
    {
      if (confirm(`Number already exists for ${newName}. Would you like to change their number to ${newNumber}?`))
      {
        // if we want to change the number, we grab the person and change their number
        const filterForPerson = persons.filter(n => n.name === newName)
        const person = filterForPerson[0]
        const changedPerson = { ...person, number: newNumber}
        
        console.log("Attempting to change number for", newName, "With number", newNumber); 

        // updating with changed person, and updating persons state with the changed version of the person
        personService.update(changedPerson.id, changedPerson).then( response => {
          setPersons(persons.map(person => person.id === changedPerson.id ? response : person ))
          setMessage(`number was successfully changed for ${changedPerson.name}`)
          setTimeout(() => {
            setMessage(null)}, 5000)
          setNewName('')
          setNewNumber('')
          return
        }).catch(error => {
          setMessage(`information for ${changedPerson.name} was already removed from the server`)
          setTimeout(() => { setMessage(null)}, 5000)
        })
        
      }
    }
    // can't have an empty input
    else if ( newName === "" || newNumber === "") {
      setMessage(`name or number can't be nothing`)
      setTimeout(() => {
        setMessage(null)
      }, 5000)
      return
    }
    // if all is clear, creating a new person
    else 
    {
      personService.create(newPerson).then(response => {
        setPersons(persons.concat(response))
        setNewName('')
        setNewNumber('')
      })
      .catch( error => console.log(error))
    } 
  }

  // checks if name exists
  const checkIfNameExists = (nameToCheck) => {
    const names = persons.filter( item => item.name === nameToCheck )
    return ( names.length > 0)
  }

  // checks if number exists
  const checkIfNumberExists = (numberToCheck) => {
    const numbers = persons.filter( item => item.number === numberToCheck )
    return ( numbers.length > 0 )
  }

  // console.log("App works?");
  
  return (
    <div>
      {/* <div>debug name: {newName}</div>
      <div>debug number: {newNumber}</div> */}
      <Notification message={message} />
      <h2>Phonebook</h2>
      <Search value={filter} handleFiltering={handleFiltering} />
      <h2>Add a new entry</h2>
      <Form submit={addName} name={newName} number={newNumber} nameChange={handleNameInputChange} numberChange={handleNumberInputChange} />
      <h2>Numbers</h2>
      <ul>
        {persons.map(item => <Person id={item.id} name={item.name} number={item.number} filter={filter} handleDeletion={handleDeletion} />)}
      </ul>
    </div>
  )
}


export default App
