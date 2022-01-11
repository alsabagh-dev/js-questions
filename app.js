// traversing the dom
const btns = document.querySelectorAll('.question-btn');

btns.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        const question = event.currentTarget.parentElement.parentElement;
        question.classList.toggle('show-text');
    })
});
