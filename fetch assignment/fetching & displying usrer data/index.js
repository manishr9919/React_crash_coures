let container = document.getElementById("container");
let button = document.getElementById("button").addEventListener("click", () => {
  async function FetchData(url) {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data.data);
    showData(data.data);
  }

  function showData(arr) {
    arr.forEach((element) => {
      let div = document.createElement("div");
      

      let name = document.createElement("p");
      name.innerText = "Name : " +"  " + element.first_name + " " + element.last_name;
      let email = document.createElement("p");
      email.innerText = "Email :" +"  "  + element.email;
      let avatar = document.createElement("img");
      avatar.id="image"
      avatar.src = element.avatar;

      div.append(name, email,avatar);
      container.append(div);
    });
  }
  FetchData("https://reqres.in/api/users");
});
