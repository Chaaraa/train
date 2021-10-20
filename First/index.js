let sumButton=document.getElementById('sumButton')
let button = document.getElementById('button')
let div = document.getElementById('div')
let visible=document.getElementById('visible')
let sum = 0
let arr = []
let utro1 = document.getElementById('utro1')
let utro2= document.getElementById('utro2')


utro1.addEventListener('click', Utro1)
utro2.addEventListener('click',Utro2)

function Utro1() {
    sum = 0
    for (let i = 1; i < 5; i++) {
        sum += arr[i]
        div.innerHTML = sum
    }
}

function Utro2(){
    sum = 1
        for (let i = 1; i < 5; i++) {
            sum *= arr[i]
            div.innerHTML = sum
        }
}

// button.addEventListener('click',Click)
//
// function Click(){
//     div.innerHTML=input1.value
// }
//
// visible.addEventListener('click',Visible)
//
// function Visible(){
//     if(div.style.display==='none'){
//         div.style.display='block'
//     }
//     else{
//         div.style.display='none'
//     }
// }

sumButton.addEventListener('click',Sum)
function Sum() {
    for (let i = 1; i < 5; i++) {
        let input = document.getElementById(`input${i}`)
        arr[i] = +input.value
        if(arr[i]%2===1){
            console.log(arr[i])
        }
    }
    console.log(arr)
    /*div.innerHTML = arr[]*/
}


