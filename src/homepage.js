import "./hpStyle.css";


let createTags = (tag, className) => {
    let element = document.createElement(tag)
    element.classList.add(className || )
    return element;
}


function initialPageLoad(){

    //elements 
    let container = createTags("div", "container")
    let header = createTags("div", "header")
    let main = createTags("div", "main")

    let home = createTags("div")
    let menu = createTags("div")
    let contact = createTags("div")
    let emptyDiv = createTags("div")

    let restoName = createTags("h1")
    let quote = createTags("h2")


    //text
    home.innerHTML = "Home";
    menu.innerHTML = "Menu"
    contact.innerHTML = "Contact"

    restoName.innerHTML = "EAT WELL"
    quote.innerHTML = "A restaurant that caters to your needs"

    
    //append
    emptyDiv.append(restoName,quote)
    main.append(emptyDiv)
    header.append(home,menu,contact)
    container.append(header, main)


    //return 
    return container

}

export {initialPageLoad as initialpage, createTags} 