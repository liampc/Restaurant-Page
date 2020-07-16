import "./contactStyle.css"
import {createTags} from "./homepage"


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



    //text
    home.innerHTML = "Home";
    menu.innerHTML = "Menu"
    contact.innerHTML = "Contact"
    title.innerHTML = "Contact Me"


    //append
    info.append(title)
    main.append(info)
    header.append(home, menu, contact)
    container.append(header, main)


    return container
}


export {initialPageLoad as initialPage}