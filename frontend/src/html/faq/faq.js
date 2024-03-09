class AccordeonItem {
    constructor({ questionBlock, answerBlock, angle }) {
        this.questionBlock = questionBlock
        this.answerBlock = answerBlock
        this.angle = angle
        this.isOpen = false
    }

    open() {
        if (!this.isOpen) {
            this.questionBlock.classList.add('main-gradient')
            this.answerBlock.classList.remove('hidden')
            this.angle.classList.add('-rotate-45')
            this.isOpen = true
        }
    }

    close() {
        if (this.isOpen) {
            this.questionBlock.classList.remove('main-gradient')
            this.answerBlock.classList.add('hidden')
            this.angle.classList.remove('-rotate-45')
            this.isOpen = false
        }
    }

    isCurrent() {
        return this.isOpen
    }
}

const accordeonQuestionBlocks = document.querySelectorAll('#accordeon div div:first-child')
const accordeonAnswerBlocks = document.querySelectorAll('#accordeon div div:last-child')
const angles = document.getElementsByClassName('fa-angle-left')
const accordeonItemsCount = accordeonQuestionBlocks.length

console.log(accordeonQuestionBlocks[0].classList)

let accordeonItems = []
for (let i = 0; i < accordeonItemsCount; i++) {
    // create array of accordeon items
    accordeonItems.push(new AccordeonItem({
        questionBlocks: accordeonQuestionBlocks[i],
        answerBlocks: accordeonAnswerBlocks[i],
        angle: angles[i]
    }))
}


function setCurrentItem(item) {
    for (let i = 0; i < accordeonItemsCount; i++) {
        accordeonItems[i].close()
    }
    if (accordeonItems[item].isCurrent()) {
        accordeonItems[item].close()
    }
    else {
        accordeonItems[item].open()
    }
}