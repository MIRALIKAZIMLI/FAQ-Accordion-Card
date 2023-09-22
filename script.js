const textBox = document.querySelectorAll(".text-box");
const questionText = document.querySelectorAll(".question-text")
const parentDropText = document.querySelectorAll("drop-text")

questionText.forEach((question) => {
    question.addEventListener("click", ()=>{ 
        textBox.forEach((textBoxlar)=>{

            

            const active = textBoxlar.firstElementChild.firstElementChild.classList.contains("active");
            const hidden =textBoxlar.lastElementChild.classList.contains("hidden");
            const rotate = textBoxlar.firstElementChild.lastElementChild.classList.contains("rotate");
            if (!hidden || active || rotate) {
                textBoxlar.lastElementChild.classList.add("hidden");
                textBoxlar.firstElementChild.firstElementChild.classList.remove("active")
                textBoxlar.firstElementChild.lastElementChild.classList.remove("rotate");
            }


        })
        const dropText =question.parentElement.lastElementChild;
        const pText = question.parentElement.firstElementChild.firstElementChild;
        const dropImage = question.parentElement.firstElementChild.lastElementChild;
        dropImage.classList.add("rotate")
        dropText.classList.remove("hidden");
        pText.classList.add("active")
    })
})

