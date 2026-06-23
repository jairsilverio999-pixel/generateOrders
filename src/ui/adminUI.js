import { fileLoad } from "../service/excel.js";

const inputDoc = document.getElementById('inputDoc')
const buttonSubmit = document.getElementById('buttonSubmit')

buttonSubmit.addEventListener('click', async function(){
    if(!inputDoc.files[0]){
        alert('Please select a file')
        return
    }
    const file = inputDoc.files[0]
    console.log(file)
    try {
        const products = await fileLoad(file)
        console.log(products)
    } catch (error) {
        console.log(error)
    }
    
})