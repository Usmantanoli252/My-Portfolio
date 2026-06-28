let arrow=document.querySelector(".arrow")
 window.addEventListener("mousemove",(e)=>{
 arrow.style.left=e.clientX+"px"
 arrow.style.top=e.clientY+"px"
 })

let allProjects = document.querySelectorAll(".new-proj-head")

allProjects.forEach((project) => {

    let img = project.querySelector(".new-proj-img")

    project.addEventListener("mouseenter", () => {
        if(img){
            img.style.opacity = "1"
        }
    })

    project.addEventListener("mouseleave", () => {
        if(img){
            img.style.opacity = "0"
        }
    })

    project.addEventListener("mousemove", (e) => {

        if(img){

            let rotate = (e.clientX - window.innerWidth / 2) / 40

            img.style.left = e.clientX + 40 + "px"
            img.style.top = e.clientY + 20 + "px"

            img.style.transform = `
                translate(-50%, -50%)
                rotate(${rotate}deg)
            `
        }

    })

})
 let navbar=document.querySelector(".nav-bar")
 let navbaricons=document.querySelectorAll(".nav-bar-icons")
 let home=document.querySelector(".home")
 let about=document.querySelector(".about-me")
 let abilities=document.querySelector(".my-abilities")
 let work=document.querySelector(".my-work")
let contact=document.querySelector(".my-contact")

home.addEventListener("mouseenter",()=>{
    home.innerText="Home"
       gsap.to(home, {
        rotationX: 360,
        duration: 1
    })
})
home.addEventListener("mouseleave",()=>{
    home.innerText="Emoh"
       gsap.to(home, {
        rotationX: 0,
        duration: 1
    })
})

about.addEventListener("mouseenter",()=>{
    about.innerText="About me"
      
       gsap.to(about, {
        rotationX: 360,
        duration: 1
    })
})
about.addEventListener("mouseleave",()=>{
    about.innerText="me Tuoba"
      
       gsap.to(about, {
        rotationX: 0,
        duration: 1
    })
})

abilities.addEventListener("mouseenter",()=>{
    abilities.innerText="Abilities"
      
       gsap.to(abilities, {
        rotationX: 360,
        duration: 1
    })
})
abilities.addEventListener("mouseleave",()=>{
    abilities.innerText="seitilibA"
      
       gsap.to(abilities, {
        rotationX: 0,
        duration: 1
    })
})
work.addEventListener("mouseenter",()=>{
    work.innerText="Work"
      
       gsap.to(work, {
        rotationX: 360,
        duration: 1
    })
})
work.addEventListener("mouseleave",()=>{
    work.innerText="krow"
      
       gsap.to(work, {
        rotationX: 0,
        duration: 1
    })
})

contact.addEventListener("mouseenter",()=>{
    contact.innerText="Contact"
       gsap.to(contact, {
        rotationX: 360,
        duration: 1
    })
})
contact.addEventListener("mouseleave",()=>{
    contact.innerText="tcatnoc"
      gsap.to(contact, {
        rotationX: 0,
        duration: 1
    })
})
let contactbtn=document.querySelector(".contact-me")
let touch =document.querySelector(".touch")
contactbtn.addEventListener("click",()=>{
    touch.scrollIntoView()
})