const inputDoc = document.getElementById('inputDoc')
const buttonSubmit = document.getElementById('buttonSubmit')

buttonSubmit.addEventListener('click', function(){
    console.log(inputDoc.files)
    console.log(inputDoc.files[0])
    console.log(inputDoc.files[0].name)
    console.log(XLSX)
})
