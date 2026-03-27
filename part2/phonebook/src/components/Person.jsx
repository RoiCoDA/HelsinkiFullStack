const Person = ({ id, name, number, filter, handleDeletion}) => {

   // console.log("From Person component: what's key? ",name, id)

    if (name.toLowerCase().includes(filter)) {
        return (
            <>
                <li>{name} {number}</li> 
                <button onClick={() => handleDeletion(name, id)}>delete</button>
            </>
    )
    }
}

export default Person