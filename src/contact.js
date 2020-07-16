import "./contactStyle.css"
import {createTags} from "./homepage"


let createMultipleTags = (num, tag) => {
    let tags = ""
    for (let i = 0; i < num; i++){
        tags += `<${tag}> </${tag}>`
    }
    return tags;
}




function initialPageLoad() {

    //elements 
    let container = createTags("div", "container")

    let header = createTags("div", "header")
    let home = createTags("div")
    let menu = createTags("div")
    let contact = createTags("div")

    let main = createTags("div", "main")
    let info = createTags("div", "info")
    let title = createTags("h1")
    
    let spans = document.querySelectorAll(".info > span")


    //text
    home.innerHTML = "Home";
    menu.innerHTML = "Menu"
    contact.innerHTML = "Contact"
    title.innerHTML = "Contact Me"
    info.innerHTML = createMultipleTags(4, "span")


    //append
    info.append(title)
    main.append(info)
    header.append(home, menu, contact)
    container.append(header, main)


    return container
}


export {initialPageLoad as initialPage}