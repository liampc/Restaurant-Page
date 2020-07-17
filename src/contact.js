import "./contactStyle.css"
import {createTags} from "./homepage"



let myInfo = {
    name: "Kathlia Carlos",
    github: "https://github.com/liampc",
    twitter: "https://twitter.com/lia_mpcarlos"
}


let render = (obj) => {
        let text =  `
        <h1> Contact Me </h1>
        <span> ${obj.name} </span>
        <a href="${obj.github}" target="_blank"> Github </a>
        <a href="${obj.twitter}" target="_blank"> Twitter </a>
        `

    return text;
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
   


    //text
    home.innerHTML = "Home";
    menu.innerHTML = "Menu"
    contact.innerHTML = "Contact"
    info.innerHTML = render(myInfo);


    //append
    main.append(info)
    header.append(home, menu, contact)
    container.append(header, main)


    return container
}


export {initialPageLoad as initialPage}