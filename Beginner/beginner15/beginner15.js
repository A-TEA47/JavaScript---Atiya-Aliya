function showDateTime() {
    const currentDate = new Date();

    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
    };

    const dateTimeString = currentDate.toLocaleString('en-US', options);

    document.getElementById('result').innerText = `Current Date and Time: ${dateTimeString}`;
}
