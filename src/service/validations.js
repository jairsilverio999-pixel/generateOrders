const REQUIRED_COLUMNS = ['ID', 'Descripcion', 'Stock', 'Precio', 'Nombre']  


export function validateProduct(product){
    const arrayErrors = []
    if(product === undefined || product.length === 0){
        return console.log(`No hay productos para validar`)
    }
    validateColumns(product, arrayErrors)
    console.log(arrayErrors)
}

function validateColumns(product, arrayErrors){
    let missingColumnsErrors = []
    let extraColumnsErrors = []
    const columnsProducts = Object.keys(product[0])
    
    columnsProducts.forEach( columnCP => { // validacion columnas no validas
        if (!REQUIRED_COLUMNS.includes(columnCP)) { 
            extraColumnsErrors.push(columnCP)
        }
    })

    REQUIRED_COLUMNS.forEach( columnRE => { // validacion columnas faltantes
        if (!columnsProducts.includes(columnRE)) {
            missingColumnsErrors.push(columnRE)
        }
    })

    if(extraColumnsErrors.length > 0){ // Si hay errores de columnas no validas, se agregan a "arrayErrors"
        arrayErrors.push(`Columnas no validas: ${extraColumnsErrors.join(', ')}`)
    }
    if(missingColumnsErrors.length > 0){ // Si hay errores de columnas faltantes, se agregan a "arrayErrors"
        arrayErrors.push(`Columnas faltantes: ${missingColumnsErrors.join(', ')}`)
    } else {
        console.log(`No se encontraron errores en las columnas`)
    }
}
// seguir con la validacion cuando no existe una columna en especial