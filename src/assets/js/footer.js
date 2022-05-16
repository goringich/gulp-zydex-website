const className1 = ".footer-scroll"
const classR1 = "form-init"
const idN1 = "footer"
const text1 = "СВЯЗАТЬСЯ"
const href1 = "contact.html"

const className2 = ".portfolio-scroll"
const classR2 = "pack-init"
const idN2 = "portfolio"
const text2 = "portfolio"
const href2 = "portfolio.html"

const className3 = ".pack-scroll"
const classR3 = "check-pack-init"
const text3 = "посмотреть пакеты услуг"
const idN3 = "pack"
const href3 = "#package"

const className4 = ".contact-scroll"
const classR4 = "form-init"
const idN4 = "contact"
const text4 = "СВЯЗАТЬСЯ"
const href4 = "#"

function scroll(text, className, classR, href, idN){
  const row = document.querySelectorAll(className)

  for (let m = 0; m < row.length; m++){
    for (let i = 0; i < 5; i++){
      const itemScroll = document.createElement("li");
      let itemScrollLength = document.querySelectorAll(`${className} li`)
      let idName = idN + itemScrollLength.length

      itemScroll.insertAdjacentHTML("afterbegin", `
        <a href="${href}" class="${classR} footer__scroll">${text}</a>
        <a href="${href}" class="${classR}--back footer__scroll">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <defs>
                    <pattern id="${idName}" patternUnits="userSpaceOnUse" height="100%" width="100%" >
                        <image xlink:href="/assets/images/Rectangle 46.jpg"/> 
                    </pattern> 
                </defs> 
                <text fill="url(#${idName})">
                  ${text}
                </text>
            </svg>
        </a>
      `)
      
      row[m].appendChild(itemScroll)
    }
  }
}

scroll(text1, className1, classR1, href1, idN1)
scroll(text2, className2, classR2, href2, idN2)
scroll(text3, className3, classR3, href3, idN3)
scroll(text4, className4, classR4, href4, idN4)