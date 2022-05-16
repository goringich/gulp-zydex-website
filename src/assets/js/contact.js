export default function Contact(){
  console.log("Hello world");

  document.documentElement.style.height = "100vh"
  document.documentElement.style.overflow = "hidden"
  document.body.style.height = "100%"
  
  $(".btn__ok__okey").click((e) => {
    $(e.target).toggleClass('clicked');
  })

  let triggerContact = document.querySelectorAll(".contact__title, .form-init--back, .form-init")
  let contact__page = document.querySelector(".contact__page")
  const active = "active"
  const notactive = "notactive"
  const cpc = contact__page.classList

  triggerContact.forEach((item) => {
    item.addEventListener("click", function(){
      if (cpc.contains(active) && !cpc.contains(notactive)){
        cpc.remove(active)
        cpc.add(notactive)
      } else{
        cpc.add(active)
        cpc.remove(notactive)
      }
    })
  })
}