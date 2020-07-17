import * as homepage from "./homepage"
import * as menu from "./menu"
import * as contact from "./contact"


const content = document.querySelector("#content")

content.append(homepage.addHeader())

content.append(homepage.initialPage())





let tabs = document.querySelectorAll(".header > *")

tabs.forEach(tab => {
    tab.addEventListener("click", (e) => {
        let nodes = content.childNodes
        let tab = e.target
        
        nodes.forEach(node => {
            if (node.className == "container"){
                node.remove()
            }
        })

        if (tab.className == "contact"){
            content.append(contact.initialPage())
        }
        else if (tab.className == "menu"){
            content.append(menu.initialPage())
        }
        else if (tab.className == "home"){
            content.append(homepage.initialPage())
        }        
    })
})