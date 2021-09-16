"use strict"
//import db from '/db.json' assert { type: "json" }
// console.table(db);
import db from '../../db.js'

const outputContainer = document.querySelector("#output-container")
const outputField = document.querySelector(".outputField")
const input = document.querySelector("#input")
const option = document.querySelector("select")
let optionValue = null
let allData = null

// console.table(db)
// console.table(allData.slice(0, 10))

const appendToHTML = (data) => {
  data = Object.values(data)

  const parent = document.createElement("tr")
  data.forEach((prop, i) => {
    const child = document.createElement("td")
    child.innerText = `${prop}`
    parent.append(child)
    outputField.append(parent)
  });
}

const loadData = (data) => {
  outputField.innerHTML = null

  for(let i = 0; i<data.length; i++){
    appendToHTML(data[i])
  }
}

const searchData = (searchValue, option) => {
  let arr = []
  searchValue = searchValue.toLowerCase()
  
  switch (option) {
    case "ID":
      arr = allData.filter((item) => item.id.toString().indexOf(searchValue) > -1)
      break
    case "First Name":
      arr = allData.filter((item) => item.first_name.toLowerCase().indexOf(searchValue) > -1)
      break
    case "Last Name":
      arr = allData.filter((item) => item.last_name.toLowerCase().indexOf(searchValue) > -1)
      break
    case "Email":
      arr = allData.filter((item) => item.email.toLowerCase().indexOf(searchValue) > -1)
      break
    case "Phone":
      arr = allData.filter((item) => item.email.toLowerCase().indexOf(searchValue) > -1)
      break
    case "City":
      arr = allData.filter((item) => item.city.toLowerCase().indexOf(searchValue) > -1)
      break
    case "Country":
      arr = allData.filter((item) => item.country.toLowerCase().indexOf(searchValue) > -1)
      break
    case "Skill":
      arr = allData.filter((item) => item.linked_skill.toLowerCase().indexOf(searchValue) > -1)
      break
    default:
      arr = [...allData]
      break;
  }

  const sortField = option === "ID" ? "id" : "other"
  loadData([...arr])
}

input.addEventListener("keyup", () => {
  searchData(input.value, optionValue)
})

option.addEventListener("change", () => {
  optionValue = option.value
  input.placeholder = `Searching by ${option.value}`
})

document.addEventListener("DOMContentLoaded", () => {
  optionValue = option.value
  input.placeholder = `Searching by ${option.value}`
  allData = [...db]
  loadData([...allData])
})
