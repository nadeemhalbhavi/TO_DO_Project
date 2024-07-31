let addItem = document.getElementById("Add")
let taskCount = 1;


addItem.addEventListener("click",function(event){
    event.preventDefault()
    const userInput = document.getElementById("newTask").value;
    const addedTask = document.querySelector(".addedTask");
    const addedItem = document.createElement("li");
    addedItem.className = "addedItem";
    if(userInput==""){
        alert("Add some Task Please")
    }else{
        addedItem.textContent= `${taskCount}. ${userInput}`;

        const editBtn = document.createElement("button");
        editBtn.value = "Edit"
        editBtn.className = "editBtn"
        editBtn.innerHTML="Edit"

        const checkBox = document.createElement("button");
        checkBox.value = "Check";
        checkBox.className = "checkBtn"
        checkBox.innerHTML = "✅"
    
        
        const delBtn = document.createElement("button");
        delBtn.value = "delete"
        delBtn.className = "delBtn";
        delBtn.innerHTML = "delete"
        
        addedItem.appendChild(checkBox)
        addedItem.appendChild(editBtn)
        addedItem.appendChild(delBtn)
        addedTask.appendChild(addedItem)
        taskCount++;

        let clickCount = 0
        checkBox.addEventListener('click',function(eve){
            clickCount++
            if(clickCount % 2 ===0){
                addedItem.style.textDecoration = 'none'
            }else{
                addedItem.style.textDecoration = 'line-through'
            }
            
            
        })
    
        editBtn.addEventListener('click',function(event){
            event.preventDefault();
            addedTask.removeChild(event.target.parentElement)
            document.getElementById("newTask").value = userInput
            // const listItem = event.target.parentElement
            // const currentText = listItem.textContent.slice(3);
            // const editInput = document.createElement('input');
            // editInput.type = 'text';
            // editInput.value = currentText;
            // listItem.textContent = '';
            // listItem.appendChild(editInput);
            // editInput.addEventListener('blur', function(e) {
            //     const newText = e.target.value.trim(); // Get edited text and trim whitespace
            //     if (newText) {
            //       listItem.textContent = `${taskCount}. ${newText}`; // Update text with task number
            //     } else {
            //       // Handle empty input (optional: remove list item or reset to original text)
            //       listItem.textContent = currentText; // Reset to original text (example)
            //     }
            //   });
        })
    
        delBtn.addEventListener("click",function(event){
            addedTask.removeChild(event.target.parentElement)
            
            if(addedTask.children.length===0){
                taskCount = 1
            }
        })
    
        document.getElementById("newTask").value = ""
    }
    

})

    