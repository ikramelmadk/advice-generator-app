const btn = document.querySelector('.btn')
const text = document.querySelector('.text')
const id = document.querySelector('.id')

btn.addEventListener('click', getAdvice)

const url = 'https://api.adviceslip.com/advice'

function getAdvice(){
    fetch(url)
    .then(function(res){
        res.json()
        .then(function(data){
            console.log(data)
            id.innerHTML = `Advice #${data.slip.id}`
            text.innerHTML = `"${data.slip.advice}"`
        })
    })
    .catch(function(err){
        console.error('Error')
    })
}

getAdvice();