const Search = ({value, handleSearch}) => {

    return (
        <>
            <div>find countries: <input value={value} onChange={handleSearch} /></div>
        </>
    )
}

export default Search