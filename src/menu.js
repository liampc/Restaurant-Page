import "./menuStyle.css";
import {createTags} from "./homepage"


let addDishes = (array, tag ) => {
    let text = ""
    for (let i = 0; i < array.length; i++){
        text += `<${tag}> ${array[i]} </${tag}>`
    }
    return text;
}


let addEmptyTags = (num, tag) => {
    let tags = ""
    for (let i = 0; i < num; i++){
        tags += `<${tag}></${tag}>`
    }
    return tags;
}



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
    const appetList = ["Stir Fry Tofu", "Baked Tofu", "Silken Tofu", "Just"]
    const blandList = ["OatMeal", "Basic White Bread"];
    const flavorList = ["Ramen noodles without powder", "Spaghetti without tomato and cheese", "Pizza crust"]
    const dessertsList = ["Serbet", "Ice cubes"]
    

    //text
    title.innerHTML = "Just Gastritis Things"
    appetizer.innerHTML = addDishes(appetList, "p")
    desserts.innerHTML = addDishes(dessertsList, "p")
    mainCourse.innerHTML = addEmptyTags(2, "div")


    //append
    menu.append(appetizer, mainCourse, desserts)
    main.append(title,menu)
    container.append(header, main)



    return container
}

export {initialPageLoad as initialPage}