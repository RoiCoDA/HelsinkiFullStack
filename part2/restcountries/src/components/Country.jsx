const Country = ({name, handleFocus}) => {
    return (
        <li>
            <p>{name}</p>
            <button onClick={() => handleFocus(name)}>Show</button>
        </li>
    )
}

export default Country