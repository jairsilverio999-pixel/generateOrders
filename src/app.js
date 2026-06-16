//const e = require("express")

const inputDoc = document.getElementById('inputDoc')
const buttonSubmit = document.getElementById('buttonSubmit')
const readerFile = new FileReader()

buttonSubmit.addEventListener('click', function(){
    const file = inputDoc.files[0]
    const data = readerFile.readAsArrayBuffer(file)
    console.log(inputDoc.file)
    console.log(file)
    console.log(file.name)
    console.log(XLSX)
    console.log(data)
})

readerFile.addEventListener('load', (e) => {
    const data = e.target.result
    console.log(data)
})


/*
disculpa

 */