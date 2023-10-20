const formRefs = document.querySelectorAll('.calc__form');

formRefs.forEach((ref) => {
    ref.addEventListener('click', (event) => {
        event.target.classList = ''
    })
})
