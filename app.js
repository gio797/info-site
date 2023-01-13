const showMore = document.getElementById('more')
const cardsMore = document.querySelectorAll('.card-more')


showMore.addEventListener('click', () => {
    cardsMore.forEach((card) => {
        card.style.display = 'block'
    })
})