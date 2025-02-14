document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.upArrow').onclick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
});
