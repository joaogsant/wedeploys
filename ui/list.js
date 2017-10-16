var list = document.querySelector('.list');


// Insert fetch data method below

WeDeploy
    .data('db-takeaturn.wedeploy.io')
    .orderBy('id', 'desc')
    .limit(5)
    .get('tickets')
    .then(function(response) {
        appendTickets(response);
    })
    .catch(function(error) {
        console.error(error);
    });

// Insert fetch data method above

function appendTickets(tickets) {
	var ticketsList = '';

	tickets.forEach(function(task) {
		ticketsList += `<input type="text" value="${tickets.name}" readonly/>`;
	});

	list.innerHTML = ticketsList;
}
