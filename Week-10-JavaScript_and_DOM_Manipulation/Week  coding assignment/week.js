let button = document.getElementById("btn")
let content = document.getElementById("content")

button.addEventListener('click', () => {
    if (content.innerHTML == "Goodbye."){
        content.innerHTML = 'Hello.';
    } else {
        content.innerHTML = "Goodbye."
    }
})

document.getElementById('remove').addEventListener('click', () => {
    let idToRemove = document.getElementById('remove-id').value;
    let elementToRemove = document.getElementById(idToRemove);
    elementToRemove.parentNode.removeChild(elementToRemove);
    document.getElementById('remove-id').value = '';
})

let id = 0;


document.getElementById('add').addEventListener('click', ()=>{
    var parent = document.getElementById('paragraphs');
    var newElement = document.createElement('p');
    newElement.innerHTML = document.getElementById('new-text').value;
    newElement.setAttribute("id", id++);
    parent.appendChild(newElement);
    document.getElementById('new-text').value = '';
})
console.log(id)



class Question { // Player descriptions
  constructor(question) {
      this.question = question

  }
}
let questions = ["What is the capital of Assyria?","What is the airspeed velocity of an unladen swallow?","Africian or European Swallow?","What is your quest?","How do you know she is a witch?","Should we go to Camelot?"]
let question1 = new Question(questions[Math.floor(Math.random()*questions.length)])

console.log(question1)