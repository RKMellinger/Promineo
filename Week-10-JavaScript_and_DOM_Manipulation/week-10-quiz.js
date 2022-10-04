let button = document.getElementById("p-button")

button.addEventListener('click', ()=>{
    let text = document.getElementById("p-input").value
    console.log(text.value)
    let p = document.createElement('p')
    p.innerText = text
    let d = document.getElementById("p-div")
    d.appendChild(p)
    document.getElementById("p-input").value = ""
} )