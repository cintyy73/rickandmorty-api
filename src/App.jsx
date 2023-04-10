import { Spinner, VStack } from "@chakra-ui/react"
import Header from "./components/Header/Header"
import List from "./components/List/List"
import Page from "./components/Page/Page"
import { useEffect, useState } from "react"

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const[characters, setCharacters] = useState([])
  const [status, setStatus] = useState('')
  const [gender, setGender] = useState('')
  const [valueName, setValueName] = useState('')
  const [name, setName] = useState('')
  const [page, setPage] = useState (1)
  const [totalPages, setTotalPages]= useState(1)
 

 useEffect(() =>{
  fetch(`https://rickandmortyapi.com/api/character?page=${page}&${name}&${gender}&${status}`)
  .then((res) => res.json())
  .then((data) => {setCharacters(data.results)
    setTotalPages(data.info.pages)
    
})
 
  setIsLoading(false)
  console.log(page)
},[status, gender, name, page]);

  return (
   <VStack color='white' background='purple.200'>
      <Header valueName={valueName} setName={setName} setValueName={setValueName} status={status} setStatus={setStatus} gender={gender} setGender={setGender}/>
      {isLoading&&<Spinner />}  
      {!isLoading&& <List characters={characters}/>}
    <Page totalPages={totalPages} page={page} setPage={setPage}/>
   </VStack>
  )
}

export default App
