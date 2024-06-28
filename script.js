// Placeholder for task ID
let taskId = 0;

// Function to add a task
function addTask() {
    const taskText = prompt("Enter task description:");
    if (taskText) {
        const taskDiv = document.createElement("div");
        taskDiv.className = "task";
        taskDiv.id = `task-${taskId}`;
        taskDiv.innerHTML = `
            <p>${taskText}</p>
            <button onclick="removeTask(${taskId})">Remove</button>
        `;
        document.getElementById("tasks").appendChild(taskDiv);
        taskId++;
    }
}

// Function to remove a task
function removeTask(id) {
    const taskDiv = document.getElementById(`task-${id}`);
    taskDiv.parentNode.removeChild(taskDiv);
}

// Function to send a message
function sendMessage(event) {
    if (event.key === 'Enter') {
        const messageText = document.getElementById("chat-input").value;
        if (messageText.trim()) {
            const messageDiv = document.createElement("div");
            messageDiv.className = "message";
            messageDiv.textContent = messageText;
            document.getElementById("chat-box").appendChild(messageDiv);
            document.getElementById("chat-input").value = "";
            // Scroll to the bottom
            document.getElementById("chat-box").scrollTop = document.getElementById("chat-box").scrollHeight;
        }
    }
}

// Function to upload a file
function uploadFile() {
    const fileInput = document.getElementById("file-input");
    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const fileDiv = document.createElement("div");
        fileDiv.className = "file";
        fileDiv.textContent = file.name;
        document.getElementById("file-list").appendChild(fileDiv);
        fileInput.value = "";
    }
}
