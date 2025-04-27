async function getTasks() {
    const url = "https://jsonplaceholder.typicode.com/todos";

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(response.statusText);

        const tasks = await response.json();

        const app = document.querySelector('#app');
        app.innerHTML = ''; // Clear previous content
        app.classList.add('flex', 'flex-col', 'items-center', 'gap-2', 'py-4');

        tasks.forEach(function(task) {
            const taskElem = document.createElement('p');
            taskElem.classList.add('cursor-pointer', 'bg-white', 'p-2', 'rounded', 'shadow', 'w-1/2', 'hover:bg-gray-100');
            
            // Function to update the text
            function updateText() {
                taskElem.textContent = `${task.title} - ${task.completed ? 'Completed' : 'Not Completed'}`;
            }

            updateText();

            // Toggle completed status on click
            taskElem.addEventListener('click', function() {
                task.completed = !task.completed;
                updateText();
            });

            app.appendChild(taskElem);
        });
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
}

getTasks();
