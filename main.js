// const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather?q=Andijon,UZ&units=metric&appid=a9d86a9dc54f8caf39ac424735ffc2e6'
// const p = document.querySelector('p')
// const btn = document.getElementById('btn')
// btn.addEventListener('click', ()=> {
//     fetch(BASE_URL)
//         .then((res) => res.json())
//         .then((data) => console.log(data))
// })

const inp = document.getElementById('inp')
const galos = document.getElementById('galos')
const file = document.getElementById('file')
const btn = document.getElementById('btn')
const img = document.getElementById('pic')
const color = document.getElementById('color')
inp.addEventListener('input', (e) => {
    document.body.style.backgroundColor = e.target.value
})          
btn.addEventListener('click', () => {
    let utterance = new SpeechSynthesisUtterance(galos.value)
    speechSynthesis.speak(utterance)
    console.log(color.value);
    document.body.style.backgroundColor = color.value
});
file.addEventListener('change', () => {
    pic.src = URL.createObjectURL(file.files[0])
})
