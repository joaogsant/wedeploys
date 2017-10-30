var list = document.querySelector('.list');


// Insert fetch data method below
WeDeploy
    .data('db-<projectID>.wedeploy.io')
    .orderBy('id', 'desc')
    .limit(5)
    .get('tasks')
    .then(function(response) {
        appendTasks(response);
    })
    .catch(function(error) {
        console.error(error);
    });
// Insert fetch data method above

function appendTasks(tasks) {
	var taskList = '';

	tasks.forEach(function(task) {
		taskList += `<input type="text" value="${task.name}" readonly>`;
	});

	list.innerHTML = taskList;
}