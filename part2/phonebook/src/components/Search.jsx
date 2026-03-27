const Search = ({value, handleFiltering}) => {
    return(
        <div>
        filter shown with: <input value={value} onChange={handleFiltering} />
      </div>
    )
}

export default Search