import tippy from 'tippy.js';

tippy('#button', {
    trigger: 'click',
    content: 'copiado!',
    placement: 'bottom'
});

const button = document.getElementById('button');
button.onclick = async () => {
    let linkText = document.querySelector('.server-address') as HTMLElement;
    await navigator.clipboard.writeText(linkText.innerText);
}
