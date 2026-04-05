  const Person = ({person, deleteP}) => {
    return (
      <li>
        {person.name} {person.number}
        <button onClick={deleteP}>delete</button>
      </li>
    )
  }

  export default Person