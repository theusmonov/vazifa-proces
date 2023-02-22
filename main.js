let airport = false

let vaqt = new Date().getHours();

if(vaqt >= 7){
    airport = true
}else if(vaqt >= 23){
    airport = false
}



let order = (time,work) => {
    return new Promise((res,rej) =>{
        if(airport){
            setTimeout(() => {
                res(work())
            },time)
        }else{
            rej(console.log('error'))
        }
    })
}


const airways = document.getElementById('airways')
const taxi = document.querySelector('.taxi')
const kirish = document.querySelector('.kirish')
const register = document.querySelector('.register')
const kutmoq = document.querySelector('.kutmoq')
const chiqmoq = document.querySelector('.chiqmoq')
const tushmoq = document.querySelector('.tushmoq')


const benz = document.getElementById('benz')
const kuzip = document.querySelector('.kuzip')
const kraska =document.querySelector('.kraska')
const detal1 = document.querySelector('.detal1')
const detal2 = document.querySelector('.detal2')
const tayyor = document.querySelector('.tayyor')



airways.addEventListener('click',() => {
    order(1000,() => taxi.classList.add('activtaxi'))
    .then(() => {
        return order(1000, () => kirish.classList.add('activkirish'))
    })
    .then(() => {
        return order(1000, () => register.classList.add('activregister'))
    })
    .then(() => {
        return order(1000, () => kutmoq.classList.add('activkutmoq'))
    })
    .then(() => {
        return order(1000, () => chiqmoq.classList.add('activchiqmoq'))
    })
    .then(() => {
        return order(1000, () => tushmoq.classList.add('activtushmoq'))
    })
})


benz.addEventListener('click', () => {
    order(1000,() => kuzip.classList.add('activkuzip'))
    .then(() => {
        return order(1000, () => kraska.classList.add('activkraska'))
    })
    .then(() => {
        return order(1000, () => detal1.classList.add('activdetal1'))
    })
    .then(() => {
        return order(1000, () => detal2.classList.add('activdetal2'))
    })
    .then(() => {
        return order(1000, () => tayyor.classList.add('activtayyor'))
    })
})



