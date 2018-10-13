let link = document.getElementById('deleteLink');


link.addEventListener('click', (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/cars/2', { method: "DELETE" })
        .then(msg => {
            document.write(msg);
            console.log(msg["<resolved>"]);
            console.log(msg.text());
        });
});