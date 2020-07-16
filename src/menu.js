import "./menuStyle.css";
import {createTags} from "./homepage"


let addDishes = (array, tag ) => {
    let text = ""
    for (let i = 0; i < array.length; i++){
        text += `<${tag}> ${array[i]} </${tag}>`
    }
    return text;
}


let test1 = addDishes(["a", "b"], "p")


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


    //arrays
    let appetList = ["Stir Fry Tofu", "Baked Tofu"]
    
    

    //text
    title.innerHTML = "Just Gastritis Things"
    appetizer.innerHTML = addDishes(appetList, "p")



    //append
   
    menu.append(title, appetizer, mainCourse, desserts)
    main.append(menu)
    container.append(header, main)



    return container
}

export {initialPageLoad as initialPage}