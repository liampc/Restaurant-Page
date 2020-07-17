import "./contactStyle.css"
import {createTags} from "./homepage"



let myInfo = {
    Phone: "1-800-909-FAKE",
    Email: "EatWellorElse@gmail.com",
    Address: "88 Somewhere Over the Rainbow"
}


let render = (obj) => {
        let text =  `
        <h1> Contact Us </h1>
        <span> Phone: ${obj.Phone} </span>
        <span> Email: ${obj.Email} </span>
        <span> Address: ${obj.Address}  </span>
        `

    return text;
}

function initialPageLoad() {

    //elements 
    let container = createTags("div", "container")

    let main = createTags("div", "main")
    let info = createTags("div", "info")
   


    //text
    info.innerHTML = render(myInfo);


    //append
    main.append(info)
    container.append(main)


    return container
}


export {initialPageLoad as contactPage}