import React from 'react'

const Course = ({course}) => 

  <>
      <h1>{course.name}</h1>
      {course.parts.map(
        part => 
        <p key={part.id}>{part.name} {part.exercises}</p>
      )}
       
      <p>total of {course.parts.reduce((a,part) => a = a+part.exercises, 0)} exercises</p> 
  </>

export default Course