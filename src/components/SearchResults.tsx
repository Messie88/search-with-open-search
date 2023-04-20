import useCustomFetcher from "@/hooks/useCustomUseSWR"
import ProducItem from "./ProductItem"


const SearchResults = ({searchResult, setSearchResult}: any) => {
  const {data, isLoading, error} = useCustomFetcher(`/api/search?q=`)

  if (error) return <div>failed to load</div>
  if (!searchResult) {
    setSearchResult(data)
  } 

    return <div id="result-container" style={{ padding: '0 70px'}}>
        
        {isLoading ? <p>LOADING..</p> : 
        <>
        <p style={{textAlign: 'center', margin: '30px'}}>
        { searchResult?.body.hits.total.value > 0 ? `${searchResult?.body.hits.total.value} Résultats trouvés` : 'Aucun résultat trouvé' } 
        </p>
        {searchResult?.body.hits.hits.map((item: any) => (
           <div key={item._id}>
            <ProducItem dataSoucre={item._source} />
          </div>))}
        </>
        }
      </div>
}

export default SearchResults