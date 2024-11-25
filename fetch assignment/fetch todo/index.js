let container = document.getElementById("container");
let button = document.getElementById("button").addEventListener("click",handleClick)
function handleClick(){
    function getData(URL) {
        fetch(URL)
          .then((res) => {
            return res.json();
          })
          .then(function (Data) {
            console.log(Data);
            showData(Data);
          });
      }
      
      function showData(arr) {
        arr.forEach((element) => {
          let div = document.createElement("div");
          div.id = "box";
      
          let h1 = document.createElement("h1");
          h1.innerText = element.title;
          let check=document.createElement("input")
          check.type="checkbox"
          h1.append(check)

          div.append(h1);
          container.append(div);
        });
      }


      getData("https://jsonplaceholder.typicode.com/todos");

}








