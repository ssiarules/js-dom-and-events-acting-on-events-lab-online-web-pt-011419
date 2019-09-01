function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}
preventRefreshOnSubmit()

function retrieveEmployeeInformation(){
  return document.querySelector('input').value
}

function addNewElementAsLi(){
  let list = document.createElement('li')

  list.innerHTML = retrieveEmployeeInformation()

  return document.querySelector('.employee-list').appendChild(list);

}
