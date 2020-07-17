import "./hpStyle.css";


let createTags = (tag, className) => {
    let element = document.createElement(tag)
    element.classList.add(className || null)
    return element;
}


function addHeader() {
    let header = createTags("div", "header");

    let home = createTags("div", "home")
    let menu = createTags("div", "menu")
    let contact = createTags("div", "contact")

    home.innerHTML = "Home";
    menu.innerHTML = "Menu"
    contact.innerHTML = "Contact"


    header.append(home,menu, contact)

    return header
}

function initialPageLoad(){

    //elements 
    let container = createTags("div", "container")
    let main = createTags("div", "main")

   
    let emptyDiv = createTags("div")

    let restoName = createTags("h1")
    let quote = createTags("h2")


    //text
    restoName.innerHTML = "EAT WELL"
    quote.innerHTML = "A restaurant that caters to your needs"

    
    //append
    emptyDiv.append(restoName,quote)
    main.append(emptyDiv)
    container.append(main)


    //return 
    return container

}

export {initialPageLoad as homePage, createTags, addHeader} 