document.addEventListener('DOMContentLoaded', function() {
    const deleteButton = document.querySelector('.udalit');
    
    if (deleteButton) {
        deleteButton.addEventListener('click', function() {
            const korzina = document.getElementById('korzina');
            if (korzina) {
                confirm('Ochirishga rozimisiz')
                korzina.style.display = 'none';
            }
        });
    }
});
