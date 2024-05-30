
const listBtn = document.getElementById('list');
const basketBtn = document.getElementById('basket');
const closeBtns = document.querySelectorAll('.closebtn');
const sidebarMenu = document.getElementById('sidebar-menu');
const sidebarBasket = document.getElementById('sidebar-basket');
const overlay = document.getElementById('overlay');


function openSidebar(sidebar) {
    closeAllSidebars();
    sidebar.classList.add('open');
    sidebar.classList.remove('hidden');
    overlay.classList.add('open');
    overlay.classList.remove('hidden');
}
function closeAllSidebars() {
    document.querySelectorAll('.sidebar').forEach(sidebar => {
        sidebar.classList.remove('open');
        sidebar.classList.add('hidden');
    });
    overlay.classList.remove('open');
    overlay.classList.add('hidden');
}

listBtn.addEventListener('click', () => openSidebar(sidebarMenu));
basketBtn.addEventListener('click', () => openSidebar(sidebarBasket));


closeBtns.forEach(btn => {
    btn.addEventListener('click', closeAllSidebars);
});


overlay.addEventListener('click', closeAllSidebars);





