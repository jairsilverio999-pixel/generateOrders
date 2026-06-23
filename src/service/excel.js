
/*
export function fileLoad(file){
    console.log('fileLoad ejecutado')
    
    readerFile.addEventListener('load', (e) => {
        const data = e.target.result
        const workbook = XLSX.read(data, {type:'array'})
        const sheetNames = workbook.SheetNames[0]
        const sheet = workbook.Sheets[sheetNames]
        XLSX.utils.sheet_to_json(sheet)
        console.log(data)
        console.log(workbook)
        console.log(workbook.SheetNames[0])
        console.log(workbook.Sheets)
        console.log(XLSX.utils)
        console.log(XLSX.utils.sheet_to_json(sheetNames))
        console.log(XLSX.utils.sheet_to_json(sheet))
        console.log('load ejecutado')
    })
    readerFile.readAsArrayBuffer(file)
}
*/
/*
FileReader es asincrono, asi que primero creamos donde va a llegar el archivo leido y despues leemos el archivo,
osea, primero tener la caja (funcion) donde vamos a colocar el producto (archivo leido)
*/
// FileReader solo entrega eventos, asi que convertimos esos eventos en promesas
function eventToPromiseFileReader(file) {
    return new Promise((resolve, reject) => { // se crea promesa
        const fileReader = new FileReader() // para leer el archivo
        fileReader.onload = (e) => { // llamamos al evento load y resolve le damos el archivo leido
            resolve(e.target.result)
        }
        fileReader.onerror = (e) => { // llamamos en caso de haber un error
            reject(fileReader.error)
            console.log('Hubo un erorr papu')
        }
        fileReader.readAsArrayBuffer(file) // inicia la lectura del archivo
    })
}


export async function fileLoad(file) {
    const data = await eventToPromiseFileReader(file)
    const workbook = XLSX.read(data, {type:'array'})
    const sheetNames = workbook.SheetNames[0]
    const sheet = workbook.Sheets[sheetNames]
    const objFile = XLSX.utils.sheet_to_json(sheet)
    return objFile
}