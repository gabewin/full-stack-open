import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import PersonDisplay from './components/PersonDisplay'


const App = () => {
  const [persons, setPersons] = useState([
    { id:1, name: 'Arto Hellas', number:'040-1234567' },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    console.log('submit', event)

    if (persons.some(obj => obj.name === newName)){
        alert(`${newName} already exists in the phonebook`)

    } else {


    const personObject = {
      id: persons.length+1,
      name: newName,
      number: newNumber
    }
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
    }
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    console.log(event)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    console.log(event)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    console.log('testing with Arto', persons[0].name.includes('newFilter'))
    setNewFilter(event.target.value)
  }

  const peopleToShow = (newFilter === '') 
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={newFilter} handleEvent={handleFilterChange} /> 
      <h2>add a new</h2>
      <PersonForm 
        addPerson={addPerson} 
        newName={newName} 
        handleNameChange={handleNameChange} 
        newNumber={newNumber} 
        handleNumberChange={handleNumberChange} 
      />
      <h2>Numbers</h2>
      <PersonDisplay peopleToShow={peopleToShow} />
    </div>
  )
}

export default App