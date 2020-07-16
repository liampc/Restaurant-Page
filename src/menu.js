import "./menuStyle.css";
import {createTags} from "./homepage"






function initialPageLoad(){
    
    //elements
    let container = createTags("div", "container")
    
    let header = createTags("div", "header")
    let main = createTags("div", "main-content")
    let title = createTags("h1")
    let menu = createTags("div", "main-menu")
    let appetizer = createTags("div", "appetizer")
    let mainCourse = createTags("div", "main-course")
    let desserts = createTags("div", "desserts")



    //text
    title.innerHTML = "Just Gastritis Things"


    //append
    main.append(title, menu, appetizer, mainCourse, desserts)
    container.append(header, main)



    return container
}

export {initialPageLoad as initialPage}