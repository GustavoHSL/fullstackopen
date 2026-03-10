const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

      const Header = ({name}) => {     
        return (
            <h1>{name}</h1>
        )
    }

    const Content = ({content}) => {
        
        return (
            <>
            {content.map(part => 
                <p key={part.id}>
                    {part.name} {part.exercises}
                </p>
                )}
             </>
            
            
        )
    }

    const Total = ({course}) => {
        const total = course.parts.reduce((acumulador, itemAtual) => acumulador + itemAtual.exercises, 0)
        return (
           <b>Number of exercises {total}</b>
        )
    }

    const Course = ({course}) => {
    //console.log(course.name)
    const total = course.parts.reduce((s, p) => {
  console.log('what is happening', s, p)
  return s,p 
}) 
    
    return (
        <div>
        <Header name={course.name}></Header>
        <Content content={course.parts}></Content>
        <Total course={course}></Total>
        </div>
    )
  }



  return (
    
        <Course course={course} />
    
    
  )
}

export default App