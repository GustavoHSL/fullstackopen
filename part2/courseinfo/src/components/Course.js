const Header = ({name}) => {     
    return (
        <h1>{name}</h1>
    )
}

const ContentHeader = ({name}) => {     
    return (
        <h2>{name}</h2>
    )
}

const Course = ({courses}) => {
    return (
        <>
        {courses.map(course => 
            <div key={course.id}>
            <ContentHeader name={course.name}/>
            <Content course={course}/>
            <Total course={course} />
            </div>
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

const Content = ({course}) => {

return (
    <div>
        {course.parts.map(part =>
        <p key={part.id}>
            {part.name} {part.exercises}
        </p>
        )}
    </div>
)
}

export default Course