/*
let tbody = document.querySelector("tbody");
let department = document.getElementById("filter-department");
let gender = document.getElementById(" filter- Gender");
let salary = document.getElementById("sort-salary");

let pre = document.querySelector(".pre");
let next = document.querySelector(".next");
let current = document.querySelector(".current");
let currentPage = 1;

let url = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=${currentPage}&limit=10`;
// let Data = [];
async function fetchData(url) {
  try {
    let res = await fetch(url);
    let data = await res.json();
    showData(data.data);
    // Data = data.data;
  } catch (error) {
    console.log(error);
  }
}
fetchData(url);
// console.log("currnpege",currentPage);

function showData(arr) {
  tbody.innerHTML = null;
  arr.forEach((ele, i) => {
    let Row = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.innerText = ele.id;
    let td2 = document.createElement("td");
    td2.innerText = ele.name;
    let td3 = document.createElement("td");
    td3.innerText = ele.department;
    let td4 = document.createElement("td");
    td4.innerText = ele.salary;
    let td5 = document.createElement("td");
    td5.innerText = ele.gender;

    Row.append(td1, td2, td5, td3, td4);
    tbody.append(Row);
  });
}

department.addEventListener("change", () => {
  let value = department.value;
  console.log(value);
  let url = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?filterBy=department&filterValue=${value}`;
  fetchData(url);
});

// gender.addEventListener("change", () => {
//   let value = gender.value;
//   console.log(value);
//   let url = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?gender=${value}`;
//   fetchData(url);
// });

salary.addEventListener("change", () => {
  let value = salary.value;
  // console.log(value);
  if (value == "asc") {
    let abc = Data.sort((a, b) => {
      return a.salary - b.salary;
    });
    showData(abc);
  } else if (value == "desc") {
    let abc = Data.sort((a, b) => {
      return b.salary - a.salary;
    });
    showData(abc);
  }
});

*/

// -------------------------------------------------------------------------- `New Version of this Code with some Changes by **AJMAT Ali** ` -----------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  let tbody = document.querySelector("tbody");
  let department = document.getElementById("filter-department");
  let gender = document.getElementById("filter-gender");
  let salary = document.getElementById("sort-salary");

  let pre = document.querySelector(".pre");
  let next = document.querySelector(".next");
  let current = document.querySelector(".current");
  let currentPage = 1;
  const pageSize = 10; // Number of items per page

  // Initial fetch
  fetchData(getUrl(currentPage));

  function getUrl(page) {
    const selectedDepartment = department.value;
    const selectedGender = gender.value;
    const order = salary.value === "asc" ? "asc" : "desc";

    let url = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=${page}&limit=${pageSize}`;

    if (selectedDepartment) {
      url += `&filterBy=department&filterValue=${selectedDepartment}`;
    }

    if (selectedGender) {
      url += `&filterBy=gender&filterValue=${selectedGender}`;
    }

    if (salary.value) {
      url += `&sort=salary&order=${order}`;
    }

    return url;
  }

  async function fetchData(url) {
    try {
      let res = await fetch(url);
      let data = await res.json();
      showData(data.data);
      updatePagination(currentPage, data.totalPages);
    } catch (error) {
      console.log(error);
    }
  }

  function showData(arr) {
    tbody.innerHTML = null;
    arr.forEach((ele, i) => {
      let Row = document.createElement("tr");
      let td1 = document.createElement("td");
      td1.innerText = ele.id;
      let td2 = document.createElement("td");
      td2.innerText = ele.name;
      let td3 = document.createElement("td");
      td3.innerText = ele.department;
      let td4 = document.createElement("td");
      td4.innerText = ele.salary;
      let td5 = document.createElement("td");
      td5.innerText = ele.gender;
      Row.append(td1, td2, td5, td3, td4);
      tbody.append(Row);
    });
  }

  function updatePagination(currentPage, totalPages) {
    current.innerText = currentPage;
    pre.disabled = currentPage === 1;
    next.disabled = currentPage === totalPages;
  }

  pre.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      fetchData(getUrl(currentPage));
    }
  });

  next.addEventListener("click", () => {
    currentPage++;
    fetchData(getUrl(currentPage));
  });

  department.addEventListener("change", () => {
    fetchData(getUrl(currentPage));
  });

  gender.addEventListener("change", () => {
    fetchData(getUrl(currentPage));
  });

  salary.addEventListener("change", () => {
    fetchData(getUrl(currentPage));
  });
});
