
function toggleContent(el) {
    const desc = el.querySelector('.description');
    desc.style.display = desc.style.display === 'block' ? 'none' : 'block';
}

const accordions = document.querySelectorAll('.accordion-button');
accordions.forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});

function enlarge(img) {
    const win = window.open("", "Kép", "width=800,height=600");
    win.document.write('<img src="' + img.src + '" style="width:100%">');
}
