//Note to self: Final Draft

document.querySelector('button').addEventListener('click', gotToGo)
function gotToGo (){
let zipCode = document.querySelector('input').value

fetch (`https://api.zippopotam.us/us/${zipCode}`)
.then (res => res.json ())
.then (data => {
    console.log(data);
    console.log(data.places);
    console.log(data.places[0]);
    console.log(data.places[0].state);
    console.log(data.places[0].latitude)
    console.log(data.places[0].longitude)
    document.querySelector('h2').innerText = data.places[0].state
    fetch (`https://www.refugerestrooms.org/api/v1/restrooms/by_location?lat=${data.places[0].latitude}&lng=${data.places[0].longitude}`)
    .then (res => res.json ())
    .then (data => {
        console.log(data);
        console.log(data[0]);
        console.log(data[0].name)
        console.log(data[0].street);
        document.querySelector('h3').innerText = data[0].name
        document.querySelector('h4').innerText = data[0].street

       
        
        
       
        
    })
    .catch (error => {
        console.log(`error ${error}`)
        
    })
    
   
    
    
   
    
})
.catch (error => {
    console.log(`error ${error}`)
    
})
}



//Note to self: Drafts

/*document.querySelector('button').addEventListener('click', populationSize)
function populationSize() {
    let zipCode = document.querySelector('input').value
    fetch (`https://data.usajobs.gov/api/codelist/${zipCode}`)
.then (res => res.json ())
.then (data => {
    console.log(data);
    console.log(data.CodeList);
    console.log(data.CodeList[0]);
    console.log(data.CodeList[0].ValidValue);
    console.log(data.CodeList[0].ValidValue[0]);
    console.log(data.CodeList[0].ValidValue[0].CountrySubdivision)
    //console.log(data.codeList[0]);
    //console.log(data.codeList[0].ValidValue);
    //console.log(data.data[0]);
    //console.log(data.data[0].Year);
   
    
})
.catch (error => {
    console.log(`error ${error}`)
    
})

}
/*Draft 1

function populationSize() {
    let zipCode = document.querySelector('input').value
    fetch(`http://ZiptasticAPI.com/${zipCode}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            console.log(data.city);
            console.log(data.state);
            console.log(data.country);
            document.querySelector('h2').innerText = data.state

            fetch(`https://datausa.io/api/data?drilldowns=${data.state}&measures=Population&year=latest`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    //console.log(data.data[0]);
                    //console.log(data.data[0]);
                    //console.log(data.data[0].Year);
                   // console.log(data.data[0].Population);
                    //document.querySelector('h3').innerText = data.data[0].Population
                   // document.querySelector('h4').innerText = data.data[0].Year


                })
                .catch(error => {
                    console.log(`error ${error}`)

                })
        })
        .catch(err => {
            console.log(`error ${err}`)

        })
}*/
//http://makeup-api.herokuapp.com/api/v1/products?product_category=bb_cc&product_type=foundation
//http://ZiptasticAPI.com/10977"*/
//https://datausa.io/api/data?drilldowns=State&measures=Population&year=latest

/*fetch ("https://countries-api-abhishek.vercel.app/countries")
.then (res => res.json ())
.then (data => {
    console.log(data);
    console.log(data.data);
    console.log(data.data[0]);
    console.log(data.data[0].name)
    //console.log(data.CodeList);
    //console.log(data.CodeList[0]);
    //console.log(data.CodeList[0].ValidValue);
    //console.log(data.CodeList[0].ValidValue[0]);
    //console.log(data.CodeList[0].ValidValue[0].CountrySubdivision)
    //console.log(data.codeList[0]);
    //console.log(data.codeList[0].ValidValue);
    //console.log(data.data[0]);
    //console.log(data.data[0].Year);
   
    
})
.catch (error => {
    console.log(`error ${error}`)
    
})*/

/*document.querySelector('button').addEventListener('click', timeToCelebrate)
function timeToCelebrate (){
let date = document.querySelector('input').value*/
/*fetch ("https://api.agify.io?name=michael")
.then (res => res.json ())
.then (data => {
    console.log(data);
  
    
   
    
})
.catch (error => {
    console.log(`error ${error}`)
    
})*/
//}
//this gives me back country code 
//"https://date.nager.at/api/v3/publicholidays/2025/AT"
//http://ip-api.com/json/24.48.0.1
//https://api.nationalize.io/?name=bock

/*fetch ("https://date.nager.at/api/v3/publicholidays/2025/AT")
.then (res => res.json ())
.then (data => {
    console.log(data);
    
   
    
})
.catch (error => {
    console.log(`error ${error}`)
    
})*/

/*fetch ("https://api.nationalize.io/?name=bock")
.then (res => res.json ())
.then (data => {
    console.log(data);
   
    
    
   
    
})
.catch (error => {
    console.log(`error ${error}`)
    
})*/

