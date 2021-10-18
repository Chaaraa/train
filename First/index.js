let sumButton=document.getElementById('sumButton')
let button = document.getElementById('button')
let div = document.getElementById('div')
let visible=document.getElementById('visible')
let sum = 0

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
        sum += +input.value
        div.innerHTML = sum
    }
}
