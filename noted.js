// 1.query <div><p>
const firstDiv = document.getElementsByTagName("div")[1]
const a = firstDiv.children

Array.from(a).forEach((p) => {
    console.log(p)
})

const firstDivV2 = document.querySelectorAll("div")
console.log(firstDivV2)

Array.from(firstDivV2[1].children).forEach((p) => {
    console.log(p)
})


const divElementByClass = document.querySelector("div.faculty")
console.log(divElementByClass)

const divElementById = document.querySelector("div#div-faculty")
console.log(divElementById)


Array.from(divElementById.children).forEach((p) => {
    console.log(p)
})

//2. query p under div class faculty id div faculty
const childFaculty = document.querySelectorAll("div#div-faculty>p")
console.log(childFaculty)
childFaculty.forEach((element) => {
    console.log(element)
})


// 3.
const coursesElement = document.getElementById("courses")
console.log(coursesElement)

// 4. query element class with class = lecture
const lecturerElement = document.getElementsByClassName("lecturer")
console.log(lecturerElement)
Array.from(lecturerElement).forEach((p) => {
    console.log(p)
})

// 5. query all button
const number5 = document.getElementsByTagName("button")
console.log(number5)

// 6.query li element uder ul id = courses
const number6 = document.querySelectorAll("ul#courses>li")
console.log(number6)


// 7.query first li element under ul
const number7 = document.querySelector("ul#courses>li")
console.log(number7)
