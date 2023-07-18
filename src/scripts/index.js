/* Desenvolva sua lógica aqui */
let zeroCont = 0


function verifyArray(){
    insertedValues.forEach(obj => {
        creatvalues(obj)
    })
}
verifyArray()

function creatvalues(obj){
    const listUl= document.querySelector('.list__value')

    const listLi = document.createElement('li')
    listUl.appendChild(listLi)
    listLi.classList.add('type__value')
    listLi.dataset.id = obj.id

    const textP = document.createElement('p')
    listLi.appendChild(textP)
    textP.classList.add('price')
    textP.innerHTML = `R$ ${obj.value.toFixed(2)}`

    const divInformation =  document.createElement('div')
    listLi.appendChild(divInformation)
    divInformation.classList.add('double')

    const typeH3 =  document.createElement('h3')
    divInformation.appendChild(typeH3)
    typeH3.classList.add('type')
    typeH3.innerHTML = valuesCategory[obj.categoryID]

    const buttonType = document.createElement('button')
    divInformation.appendChild(buttonType)
    buttonType.classList.add('delete')
    buttonType.addEventListener('click', ()=>{
        listLi.remove()
        removeArray(obj.id)
        valueFilter(insertedValues)
        hidden()
    })
    
    const img = document.createElement('i')
    buttonType.appendChild(img)
    img.classList.add('fa-solid')
    img.classList.add('fa-trash')
    plusCont(obj)
}

function removeArray(id){
    const index = insertedValues.findIndex(obj => obj.id === id)
    insertedValues.splice(index,1)
    console.log(insertedValues)
}


function selectClass(){
    const all = document.querySelector('.all__finance')
    const entrace = document.querySelector('.entrace__finance')
    const exit = document.querySelector('.exit__finance')

    all.addEventListener('click', ()=>{
        all.classList.add('active')
        entrace.classList.remove('active')
        exit.classList.remove('active')
    })

    entrace.addEventListener('click', ()=>{
        all.classList.remove('active')
        entrace.classList.add('active')
        exit.classList.remove('active')
    })

    exit.addEventListener('click', ()=>{
        all.classList.remove('active')
        entrace.classList.remove('active')
        exit.classList.add('active')
    })

}
selectClass()



function valueFilter(arr){
    zeroCont = 0
    const total = document.querySelector('.total__cont')
    arr.forEach(obj => {
        zeroCont += obj.value 
    })
    total.innerHTML = `R$ ${zeroCont.toFixed(2)}`
}

function hidden(){
    const divNewColaboraitor = document.querySelector('.div__register')
    const listUl = document.querySelector('.list__value')
    const values =  document.querySelector('.values')

    if(listUl.childElementCount >= 1){
        divNewColaboraitor.classList.add('hidden')
        values.classList.remove('hidden')
    }else{
        divNewColaboraitor.classList.remove('hidden')
        values.classList.add('hidden')
    }
}
hidden()


function plusCont(obj){
    const totalValue = document.querySelector('.total__cont')

    zeroCont += obj.value
    totalValue.innerHTML = `R$ ${zeroCont.toFixed(2)}`
}

function filterAll(){
    let button = document.querySelector('.all__finance')
    button.addEventListener('click', ()=>{
        const allfilters = insertedValues
        valueFilter(allfilters)
        allfilters.forEach(obj => {
            const itemID = obj.id
            const item = document.querySelector(`[data-id = '${itemID}']`)
            item.classList.remove('hidden')
        })
    })
}
filterAll()

function filterEntrace(){
    let button = document.querySelector('.entrace__finance')
    button.addEventListener('click', ()=>{
        const entraceFilter = insertedValues.filter(obj => obj.categoryID === 0)
        const exitFilter = insertedValues.filter(obj => obj.categoryID === 1)
        valueFilter(entraceFilter)
        entraceFilter.forEach(obj => {
            const itemID = obj.id
            const item = document.querySelector(`[data-id = '${itemID}']`)
            item.classList.remove('hidden')
        })
        exitFilter.forEach(obj => {
            const itemID = obj.id
            const item = document.querySelector(`[data-id = '${itemID}']`)
            item.classList.add('hidden')
        })
    })
}
filterEntrace()

function filterExit(){
    let button = document.querySelector('.exit__finance')
    button.addEventListener('click', ()=>{
        const entraceFilter = insertedValues.filter(obj => obj.categoryID === 0)
        const exitFilter = insertedValues.filter(obj => obj.categoryID === 1)
        valueFilter(exitFilter)
        entraceFilter.forEach(obj => {
            const itemID = obj.id
            const item = document.querySelector(`[data-id = '${itemID}']`)
            item.classList.add('hidden')
        })
        exitFilter.forEach(obj => {
            const itemID = obj.id
            const item = document.querySelector(`[data-id = '${itemID}']`)
            item.classList.remove('hidden')
        })
    })
}
filterExit()