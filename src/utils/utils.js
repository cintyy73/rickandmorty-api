export const isStatusColor = (status) =>{
    let colorStatus = 'black'
    if(status==='Dead'){
        colorStatus = 'red'
    }
    if(status==='Alive'){
        colorStatus='green'
    }
    return colorStatus
}
export const isColorGender = ( gender ) =>{
    
    let colorGender = 'yellow.100'
   
    if (gender==='Male') {
       colorGender ='blue.100' 
    }
    if (gender==='Female') {
        colorGender = 'pink.100' 
    }
     if (gender==='Genderless') {
        colorGender = 'orange.100' 
    } 
   
    return colorGender
}

export const buttonPrev = (page, setDisablePrev) =>{
    if(page===1){
        setDisablePrev(true)
    }else(false)
}
export const buttonNext = (page, setDisableNext) =>{
    if(page===420){
        setDisableNext(true)
    }else(false)
}