import { Montserrat } from 'next/font/google'
import { useEffect, useState } from 'react'

import ProducItem from '@/components/ProductItem';
import Search from '@/components/Search';
import useCustomFetcher from '@/hooks/useCustomUseSWR';
import SearchResults from '@/components/SearchResults';

const monserrat = Montserrat({ subsets: ['latin'] }
)

export default function Home() {
  const [searchResult, setSearchResult] = useState<any>()
  // const {data, isLoading, error} = useCustomFetcher(`/api/search?q=`)


  // if (error) return <div>failed to load</div>
  // if (!searchResult) {
  //   setSearchResult(data)
  // } 

  // RUN TWICE
  // useEffect(()=> { 
  //   const handleSubmit = async () => {
  //       let response = await fetch(`/api/search?q=`)
  
  //       let data = await response.json()
  //       setSearchResult(data)
  //   }

  //   handleSubmit()
  // }, [])
  
  return (
    <div className={monserrat.className}>
      <Search results={setSearchResult} />
         {/* <div id="result-container" style={{ padding: '0 70px'}}>
        <p style={{textAlign: 'center', margin: '30px'}}>
          { searchResult?.body.hits.total.value > 0 ? `${searchResult?.body.hits.total.value} Résultats trouvés` : 'Aucun résultat trouvé' } 
        </p> */}
        <SearchResults searchResult={searchResult} setSearchResult={setSearchResult} />
      {/* </div> */}
      
    </div>
  )
}


