const btnToggle = document.querySelector('.toggle-btn');

btnToggle.addEventListener('click', () =>{
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
});