let ImageArray = [
    "./Image/image1.webp"
    , "./Image/image2.jpg"
    , "./Image/image3.jpg"
    , "./Image/image4.jpg"
    , "./Image/image5.jpg"
    , "./Image/image6.png"
    , "./Image/image7.jpg"
    , "./Image/image8.jpg"
    , "./Image/image9.jpg"
    , "./Image/image10.jpg"
    , "./Image/image11.jpg"
    , "./Image/image12.jpg"
    , "./Image/image13.jpg"
    , "./Image/image14.jpg"
    , "./Image/image15.jpg"
    , "./Image/image16.png"
]

let slideImg = document.querySelector('.slide>div>img')
let prevBtn = document.querySelector('.slide>:first-child')
let nextBtn = document.querySelector('.slide>:last-child')
let startBtn = document.querySelector('#start-stop')

let i = 0;
let id;

let pagination = document.querySelector('.status-button')

ImageArray.forEach((ele, ind) => {
    let button = document.createElement('button')
    button.setAttribute('class', "pagBtn")
    pagination.append(button)
})

let pagBtn = document.querySelectorAll('.pagBtn')

const changePageBtn = (i) => {
if(i==0){
pagBtn[0].style.backgroundColor = "black"
}
    pagBtn.forEach((btn, index) => {
        if (i == index) {
            pagBtn[index].style.backgroundColor = "black";
            console.log("from change page", i)
        }
        else {
            pagBtn[index].style.backgroundColor = "white";
        }
    })

}

function slideShow() {
    changePageBtn(i)
    slideImg.src = ImageArray[i]
    if (i < ImageArray.length - 1) {
        i++
    }
    else {
        i = 0
    }
}

startBtn.addEventListener('click', () => {
    if (!id) {
        id = setInterval(() => {
            slideShow()
        }, 2000)
        startBtn.innerText = "Stop"
    }
    else {
        clearInterval(id)
        id = null
        startBtn.innerText = "Start"
    }
})



nextBtn.addEventListener('click', () => {
    clearInterval(id)
    id = null
    startBtn.innerText = "Start"
    changePageBtn(i)
    slideImg.src = ImageArray[i]
    // clearInterval(id)
    if (i < ImageArray.length - 1) {
        i++
    }
    else {
        i = 0
    }
})

prevBtn.addEventListener('click', () => {
    clearInterval(id)
    id = null
    startBtn.innerText = "Start"
    changePageBtn(i)
    slideImg.src = ImageArray[i]
    if (i > 0) {
        i--
    }
    else {
        i = ImageArray.length-1
    }
})

