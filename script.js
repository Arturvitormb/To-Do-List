var addTodo = document.querySelector('button[id=add]');
var todoTextInput = document.querySelector('input[type=text][id=newTodo]');
var ul = document.querySelector('ul[id=todoList]');

addTodo.onclick = function() {
    if (todoTextInput.value.length != 0) {
     var li = document.createElement('li');

     var checkbox = document.createElement('input');
     checkbox.type = 'checkbox';

     var label = document.createElement('label');

     var deleteButton = document.createElement('button');
     deleteButton.classList.add('delete');

     label.innerHTML = todoTextInput.value;
     deleteButton.innerHTML = 'Delete'; 
     todoTextInput.value = null;

     ul.appendChild(li);
     li.appendChild(checkbox);
     li.appendChild(label);
     li.appendChild(deleteButton);

     checkbox.onchange = function() {
        if (checkbox.checked) {
            label.classList.add("checked");
        }
        else {
            label.classList.remove("checked");
        }
     }

     deleteButton.onclick = function() {
        ul.removeChild(li);
     };


    }
     

}