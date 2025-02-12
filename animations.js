document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.contacts').onclick = () => {
        window.scrollTo(0, document.body.scrollHeight);
    }
});