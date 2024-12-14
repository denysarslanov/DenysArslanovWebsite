const buttonsCollection = document.getElementsByClassName('skills__btn')

const getActiveItem = (itemClass, itemTag) => {
    const r = document.getElementsByClassName(itemClass)
    const arr = [].filter.call(
        r,
        (i) => i.nodeName === itemTag,
    );

    return arr[0]
}

const buttons = [].filter.call(
    buttonsCollection,
    (btn) => btn.nodeName === "BUTTON",
);

buttons.forEach((btn, index) => {
    btn.onclick = () => {
        getActiveItem('skillActive', "DIV").classList.remove('skillActive')

        const tech = document.getElementById(`tech${index}`)
        const btn = document.getElementById(`skillsBtn${index}`)

        getActiveItem('skillBtnActive', "BUTTON").classList.remove('skillBtnActive')

        btn.classList.add('skillBtnActive')
        tech.classList.toggle('skillActive')
    }
})

const mainPhoto = document.getElementById('mainPhoto')
const main = document.getElementById('main')

const availibleSpread = 40

main.addEventListener('mousemove', function(event) {

    const screenWidth = window.innerWidth
    const screenHeight = window.innerHeight

    if (screenWidth <= 800) {
        mainPhoto.style.backgroundPosition = 'center center'
        return false
    }

    const x = event.clientX;
    const y = event.clientY;

    const percentX = screenWidth / availibleSpread
    const percentY = screenHeight / availibleSpread

    let positionX = x / percentX
    positionX += 80

    let positionY = y / percentX
    positionY += 80

    let h = mainPhoto.style.backgroundPosition

    mainPhoto.style.backgroundPosition = `${positionX}% ${positionY}%`
});