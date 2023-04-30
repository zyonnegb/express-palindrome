let check = document.querySelector('#check')
let clear = document.querySelector('#clear')
let outcome = document.querySelector('h2')

function getValue(){
    let inputValue = document.querySelector('#input').value
    fetch(`/api/${inputValue}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      outcome.innerText = data
    }); 
}

function deleteResult(){
  fetch('/delete', {
    method: 'PUT'
  })
  .then(response => response.json())
  .then((data) => {
    console.log(data);
    outcome.innerText = data
  }); 
}



check.addEventListener('click', getValue)
clear.addEventListener('click', deleteResult)
