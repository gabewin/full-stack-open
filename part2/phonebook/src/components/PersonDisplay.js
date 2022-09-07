import Person from "./Person"

const PersonDisplay = ({ peopleToShow }) => {
    return (
        <ul>
        {console.log(peopleToShow)}
            {peopleToShow.map(person => 
          <Person key={person.id} person={person} />
        )}
      </ul>
    )
  }
  
  export default PersonDisplay