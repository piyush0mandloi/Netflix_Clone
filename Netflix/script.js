let allq = document.querySelectorAll(".faqQuestions")
// console.log(allq);
allq.forEach((v,index)=>{
    console.log(v);
    v.addEventListener("click",()=>{
        v.nextElementSibling.classList.toggle("h-[auto]")
        v.nextElementSibling.classList.add("scale-y-100")
        v.nextElementSibling.classList.toggle("p-[20px]")
    })
})