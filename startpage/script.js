let currentTime = "";

function updateTimeAndDate() {
	const timeElement = document.getElementById("time");
	const dateElement = document.getElementById("date");

	const now = new Date();

	// Format time
	const hours = String(now.getHours()).padStart(2, '0');
	const minutes = String(now.getMinutes()).padStart(2, '0');
	const formattedTime = `${hours}:${minutes}`;

	// Format date
	const options = { weekday: 'long', month: 'long', day: 'numeric' };
	const formattedDate = now.toLocaleDateString('en-US', options);

	if (currentTime !== formattedTime) {
		timeElement.textContent = formattedTime;
		dateElement.textContent = formattedDate;
		currentTime = formattedTime;
	}
}

setInterval(updateTimeAndDate, 1000);
updateTimeAndDate();
