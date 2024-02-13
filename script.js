const go = document.querySelector('.go');
const no = document.querySelector('.no');
const question = document.querySelector('.question');
const body = document.querySelector('.body');
const chika = document.querySelector('.chika');

go.addEventListener('click', () => {
    question.innerHTML = 'Yiii >.<';
    chika.src = 'gifs/chika-yes.gif';

});

no.addEventListener('mouseover', () =>{
    const i = Math.floor(Math.random() * 500) + 1;

    const j = Math.floor(Math.random() * 500) + 1;

    no.style.left = i + 'px';
    no.style.top = j + 'px';
});

no.addEventListener('click', () => {
    const i = Math.floor(Math.random() * 500) + 1;

    const j = Math.floor(Math.random() * 500) + 1;

    no.style.left = i + 'px';
    no.style.top = j + 'px';
})