function showComputers(brand) {
    const computers = document.querySelectorAll('.computer');
    computers.forEach(computer => {
        computer.style.display = 'none'; // Скрыть все дивы
    });

    // Показать выбранный див
    document.getElementById(brand).style.display = 'block';
}