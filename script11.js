// script.js
document.getElementById('openModal').onclick = function() {
    document.getElementById('modal').style.display = "block";
}

document.getElementsByClassName('close')[0].onclick = function() {
    document.getElementById('modal').style.display = "none";
}

document.getElementById('addComputer').onclick = function() {
    const computerName = document.getElementById('computerName').value;
    if (computerName) {
        let computers = JSON.parse(localStorage.getItem('computers')) || [];
        computers.push(computerName);
        localStorage.setItem('computers', JSON.stringify(computers));
        document.getElementById('modal').style.display = "none";
        document.getElementById('computerName').value = '';
    }
}
