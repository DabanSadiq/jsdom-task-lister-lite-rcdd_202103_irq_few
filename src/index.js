document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById('create-task-form')
  const ul = document.getElementById('tasks');
  form.addEventListener('submit',addItem)

  function addItem(e){

  e.preventDefault()
  const li =  document.createElement('li')
  li.innerHTML = input.value
  }
});
