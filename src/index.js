import * as homepage from "./homepage"
import * as menu from "./menu"
import * as contact from "./contact"


const content = document.querySelector("#content")

content.append(homepage.addHeader())

//content.append(homepage.initialPage())

//content.append(menu.initialPage())

content.append(contact.initialPage())

let tabs = document.querySelectorAll(".header > *")

tabs.forEach(tab => {
    tab.addEventListener("click", (e) => {
        let nodes = content.childNodes
        
        nodes.forEach(node => {
            if (node.className == "container"){
                node.remove()
            }
        })

    })
})