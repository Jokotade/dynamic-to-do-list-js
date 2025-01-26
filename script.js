// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        // Get the task text from the input field
        const taskText = taskInput.value.trim();

        // Check if the task text is not empty
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create a new list item (li) element
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a remove button for the task
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        // Add an event listener to the remove button to remove the task
        removeButton.onclick = () => {
            taskList.removeChild(li);
        };

        // Append the remove button to the list item
        li.appendChild(removeButton);

        // Append the list item to the task list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = "";
    }

    // Add event listener to the add button
    addButton.addEventListener('click', addTask);

    // Add event listener to the input field for the 'Enter' key
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Optionally, invoke addTask on DOMContentLoaded if needed
    giaddTask();
});