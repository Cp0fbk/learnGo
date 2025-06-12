function callAPI() {
    fetch("/api/hello")
        .then(res => res.text())
        .then(data => {
            document.getElementById("output").innerText = data;
        });
}
