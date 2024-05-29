document.getElementById('list').addEventListener('click', function () {
    document.getElementById('sidebar').classList.add('open');
});

document.getElementById('closebtn').addEventListener('click', function () {
    document.getElementById('sidebar').classList.remove('open');
});

document.addEventListener('click', function (event) {
    if (!document.getElementById('sidebar').contains(event.target) && event.target.id !== 'list') {
        document.getElementById('sidebar').classList.remove('open');
    }
});

