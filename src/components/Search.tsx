import { useState } from "react";
import Filter from "./Filter";
import { handleChange } from "../utils/handleInputChange";

// Search component 
const Search = ({results}: any) => {
    const [query, setQuery] = useState("")
  
    const handleSubmit =  async (e: { preventDefault: () => void }) => {
        e.preventDefault()
        let response = await fetch(`/api/search?q=${query}`)
        let result = await response.json()

        results(result)
        setQuery('')
    }

    return (
    <form className="search" onSubmit={handleSubmit}>
      <div id='input-container'>
        <div className='label'>Recherche</div>
        <input type="text" 
          name='input'
          placeholder='Recherchez un produit, fournisseur, etc...'
          value={query}
          onChange={(e) => handleChange(e, setQuery)} 
        />       
      </div>
      <Filter title='Prix min' prices={[5, 10, 15, 20, 25, 30]} />
      <Filter title='Prix max' prices={[30, 10, 15, 20, 25]} />
      <input type="submit" value="Rechercher" />        
   </form>)
  }

  export default Search