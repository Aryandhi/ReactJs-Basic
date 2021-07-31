import React from 'react'
import '../Search/SearchComp.css'
import ListDoctorpage from '../../pages/ListDoctorPage'
const SearchComp = () => {
  return (
    <div>
      <form className="form">
        <label>Search By Region : </label>
        <input type="search"></input>
      </form>
      <a href={ListDoctorpage}>
      <button type="submit">Submit</button>
      </a>
      
    </div>
  )
}

export default SearchComp;