document.querySelector('#user-menu-button').addEventListener('click', (e) => {
    e.preventDefault()
    document.querySelector('#user-menu').classList.toggle('hidden')
})