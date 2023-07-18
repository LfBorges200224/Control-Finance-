/* Desenvolva sua lógica aqui */
function openModal(){
    const dialog = document.querySelector('dialog')
    const button = document.querySelector('.button__header')
    const buttonGray = document.querySelector('.button__register')

    button.addEventListener('click', ()=>{
        dialog.showModal()
        closeModal()
    })

    buttonGray.addEventListener('click', ()=>{
        dialog.showModal()
        closeModal()
    })

}
openModal()

function closeModal(){
    const closeButton = document.querySelector('.exit__head')
    const cancelButton = document.querySelector('.option__cancel')
    const dialog = document.querySelector('dialog')

    closeButton.addEventListener('click',()=>{
        dialog.close()
        
    })

    cancelButton.addEventListener('click', ()=>{
        dialog.close()
        
    })
}

function validationInput(){
    const input = document.querySelector('.sett__value > input')
    return input.value !== ''
}

function chooseClass(){
    const enter = document.querySelector('.entrace__choose')
    const exit = document.querySelector('.exit__choose')

    enter.addEventListener('click', ()=>{
        enter.classList.add('active')
        exit.classList.remove('active')
        
    })

    exit.addEventListener('click', ()=>{
        exit.classList.add('active')
        enter.classList.remove('active')
    })
}
chooseClass()

function pressButton(){
    const enter = document.querySelector('.entrace__choose')
    const exit = document.querySelector('.exit__choose')
    const select = enter.classList.contains('active') || exit.classList.contains('active')

    return select
}

function newValue(){
    const insertValue =  document.querySelector('.option__value')
    const input = document.querySelector('.sett__value > input')
    const enter = document.querySelector('.entrace__choose')
    const exit = document.querySelector('.exit__choose')
    const dialog = document.querySelector('dialog')

    insertValue.addEventListener('click', ()=>{
        if(validationInput()&&pressButton()){
            const inputValue = input.value
            let buttonValue;
            if(enter.classList.contains('active')){
                buttonValue = 0
            }else{
                buttonValue = 1
            }
            let obj = {
                id:  insertedValues.length + 1,
                value: parseFloat(inputValue),
                categoryID: buttonValue,
            }
            insertedValues.push(obj)
            dialog.close()
            creatvalues(obj)
            hidden()
        }
    })
}   
newValue()

