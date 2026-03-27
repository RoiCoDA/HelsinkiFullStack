import Country from "./Country"

const DisplayBox = ({list, handleCountryFocus}) => {

    // console.log("List from dp: ", list);
    

    if ( list.length > 10 ) {
        return (
            <p> Too many countries, specify another filter </p>
        )
    }

    return (
        <ul>
            {list.map( item => <Country key={item} name={item} handleFocus={handleCountryFocus}/> )}
        </ul>
    )
}

export default DisplayBox