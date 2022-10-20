const starsEl = document.querySelectorAll(".fa-star")
const emojisEl = document.querySelectorAll(".fa-regular")
const colorsArr = ["red", "orange", "gray", "lightgreen", "green"]

updateStar(0)

starsEl.forEach((starEl, index) => {
    starEl.addEventListener("click", () => {
        updateStar(index)
    })
})

function updateStar(index) {
    starsEl.forEach((starEl, idx) => {
        if (idx < index + 1) {
            starEl.classList.add("active")
        } else {
            starEl.classList.remove("active")
        }
    })

    emojisEl.forEach((emojiEl) => {
        emojiEl.style.transform = `translateX(-${index * 50}px)`
        emojiEl.style.color = colorsArr[index]
    })
}