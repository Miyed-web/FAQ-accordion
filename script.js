const content_title= document.querySelectorAll(".content .title");


content_title.forEach(title=>{
   title.addEventListener("click", ()=>{
      console.log(title)
      title.parentElement.classList.toggle("hide")
      
   })
})