document.getElementById("addButton").addEventListener('click',function(){
    const todoInput = document.getElementById("todo-Input")
    const todoinputText = todoInput.value.trim();

    if(todoinputText != ""){
        const todoList = document.getElementById("todoList");
        //listItem
        const todoItem = document.createElement("li");
        todoItem.textContent = todoinputText;
        //Delete Button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        // If user click on delete button will delete content
        deleteBtn.addEventListener("click", function(){
            todoList.removeChild(todoItem);
        });
        todoItem.append(deleteBtn);
        todoList.append(todoItem);

        //once added empty the input 
        todoInput.value = ""
    }
}
)