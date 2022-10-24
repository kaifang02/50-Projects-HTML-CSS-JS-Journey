const boxes = document.querySelectorAll('.box')


window.addEventListener('scroll', checkBoxes)

//Show boxes already on screen before needing to scroll to see rest
checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4
     //https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBottom) {
            box.classList.add('show')
        }else {
            box.classList.remove('show')
        }
    })
}

