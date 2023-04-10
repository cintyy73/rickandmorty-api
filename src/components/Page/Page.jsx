import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { HStack, Button,} from '@chakra-ui/react'
import React from 'react'
//import { buttonNext, buttonPrev } from '../../utils/utils'

const Page = ({totalPages,setPage, page}) => {
  console.log(totalPages)
  //const [disableNext, setDisableNext] = useState(false)
  //const [disablePrev, setDisablePrev] = useState(false)
  return (
  <HStack >
  <Button onClick={()=>{ 
    setPage((prev)=>prev-1)
   // buttonPrev(page, setDisablePrev)
    }}
    isDisabled={page===1?true:false} 
    leftIcon={<ChevronLeftIcon/>} colorScheme='purple' variant='solid'> 
    Prev
  </Button>
  <Button onClick={()=>{
    setPage((prev)=>prev+1)
    
    //buttonNext(page, setDisableNext)
  }}
    isDisabled={page===totalPages?true:false} 
    rightIcon={<ChevronRightIcon />} colorScheme='purple' variant='solid'>
    Next
  </Button>
</HStack>
  )
}

export default Page
