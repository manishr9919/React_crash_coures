let container = document.getElementById("container");
let selectP=document.getElementById("select")
 
function FetchData(url) {
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((Data) => {
      console.log(Data);
      showData(Data);
    });
}

function showData(res) {
  container.innerHTML= null

    let arr =res.data;
  arr.forEach((element,i) => {
    let cards = document.createElement("div");
    cards.id=" cards"

    let country = document.createElement("p");
    country.innerText = "country : " +element.country
    country.id="country"

    let id=document.createElement("p")
    id.innerText=  "id : " + element.id
    id.id="id"
    let Rank=document.createElement("p")
    Rank.innerText="Rank :"+element.Rank
    Rank.id="Rank"
    let population=document.createElement("p")
    population.innerText="population :"+element.population
    population.id="population";


    cards.append(country,id,Rank,population);
    container.append(cards);
  });
}

selectP.addEventListener("change",(e)=>{
  let value = selectP.value
  console.log(value)
  let url= `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?sort=population&order=desc`;
  console.log(url)
  FetchData(url)
  



})



FetchData("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries");
