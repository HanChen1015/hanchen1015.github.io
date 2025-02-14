document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.upArrow').onclick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
});

function copyFunction() {

    var copyText = document.getElementById("email");

    var range = document.createRange();

    range.selectNode(copyText);

    window.getSelection().addRange(range);

    document.execCommand("copy");

    alert("Email has been copied to clipboard");
}