import "./menuStyle.css";
import {createTags} from "./homepage"


let addDishes = (array, tag, titleTag ) => {
    let text = ""

    text += `<${titleTag}> ${array[0]} </${titleTag}>`
    for (let i = 1; i < array.length; i++){
        text += `<${tag}> ${array[i]} </${tag}>`
    }
    return text;
}



function initialPageLoad(){
    
    //elements
    let container = createTags("div", "container")
    
    //divs
   

    let main = createTags("div", "main-content")
    let title = createTags("h1")
    let mainMenu = createTags("div", "main-menu")
    let appetizer = createTags("div", "appetizer")
    let mainCourse = createTags("div", "main-course")
    let desserts = createTags("div", "desserts")
    let bland = createTags("div", "bland")
    let flavor = createTags("div", "flavor")
    let dairy = createTags("div", "dairy")
    let drinks = createTags("div", "drinks")


    //arrays
    const appetList = ["Forced Vegan's Food","Stir Fry Tofu", "Baked Tofu", "Silken Tofu", "Just Tofu"]
    const blandList = ["Bland Selection","OatMeal", "Basic White Bread"];
    const flavorList = ["Flavourless Dishes","Ramen Noodles without Powder", "Spaghetti without Tomato and Cheese", "Pizza Crust"]
    const dairyList = ["!Dairy Desserts","Serbet", "Ice cubes"]
    const drinksList = ["Not Coffee Drinks","Ginger Tea", "Wheatgrass Smoothie"]
    
    //text
    title.innerHTML = "Just Gastritis Things"
    appetizer.innerHTML = addDishes(appetList, "p", "h2")
    bland.innerHTML = addDishes(blandList, "p", "h2");
    flavor.innerHTML = addDishes(flavorList, "p", "h2");
    dairy.innerHTML = addDishes(dairyList, "p", "h2");
    drinks.innerHTML = addDishes(drinksList, "p", "h2")

  


    //append
    desserts.append(dairy, drinks)
    mainCourse.append(bland, flavor)
    mainMenu.append(appetizer, mainCourse, desserts)
    main.append(title,mainMenu)
    container.append(main)



    return container
}

export {initialPageLoad as menuPage}