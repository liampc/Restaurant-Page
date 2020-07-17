import {homePage,addHeader} from "./homepage"
import {menuPage} from "./menu"
import {contactPage} from "./contact"


const content = document.querySelector("#content")

content.append(addHeader())

content.append(homePage())





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
            content.append(contactPage())
        }
        else if (tab.className == "menu"){
            content.append(menuPage())
        }
        else if (tab.className == "home"){
            content.append(homePage())
        }        
    })
})