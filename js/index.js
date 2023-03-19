import {close,open}from "/js/side-nav.js"

close()
$(".nav-menu .accordion").click(function(){
    if($(".nav-menu").css("left") =="0px"){
    close();
}
else{
    open();} 
})

$(document).ready(function(){
$("#spinner2").fadeOut(300,function(){
    $(".loader").fadeOut(600)
}) 
$("body").css("overflow","visible")
$(".loader2").fadeOut(500)


})



let myData = document.getElementById("data")

async function getData(){
    let request = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
    let response = await request.json()
    displayItems(response.meals)
    console.log(response.meals);
}
function displayItems(list){
    let blackBox=""
    for(let i=0 ;i<list.length ;i++){
        blackBox+=`<div class="col-md-3  ">
        <div title4="${list[i].idMeal}" class="item position-relative rounded-2 overflow-hidden">
            <img  class ="w-100 " src="${list[i].strMealThumb}" alt="">
            <div class="layer p-2 p-2 position-absolute d-flex align-items-center">
                <h3 class=" ">${list[i].strMeal}</h3>
            </div>
        </div>
    </div>`
    }
    myData.innerHTML=blackBox
    

    for(let i=0 ;i< document.getElementsByClassName("item").length;i++){
        document.getElementsByClassName("item")[i].addEventListener("click",function(){
            getDetails(document.getElementsByClassName("item")[i].getAttribute("title4"))
        })
    }

}
getData()


let category = document.getElementById("categories")

async function categories(){
    close()
$(".loader2").fadeIn()

    let request = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    let response = await request.json()
     displayCategories(response.categories)
    console.log(response.categories);
$(".loader2").fadeOut(500)

}

function displayCategories(list){
    let blackBox=""
    for(let i=0 ;i<list.length ;i++){
        blackBox+=`<div class="col-md-3  ">
        <div title="${list[i].strCategory}" class="item position-relative rounded-2 overflow-hidden cursor-pointer">
            <img  class ="w-100 " src="${list[i].strCategoryThumb
            }" alt="">
            <div class="layer p-2 p-2 position-absolute text-center">
                <h3 >${list[i].strCategory
                }</h3>
                <p>${list[i].strCategoryDescription.split(" ").slice(0,19).join(" ")}</p>
            </div>
        </div>
    </div>`
    
    }
    myData.innerHTML=blackBox
    showSearch.innerHTML =""
    for(let i=0 ;i< document.getElementsByClassName("item").length;i++){
        document.getElementsByClassName("item")[i].addEventListener("click",function(){
            filterByCategory(document.getElementsByClassName("item")[i].getAttribute("title"))
        })
    }
}
category.addEventListener("click",function(){
    categories()
})

let area = document.getElementById("area")
async function getArea(){
    close()
$(".loader2").fadeIn(500)

    let request = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
    let response = await request.json()
     displayArea(response.meals)
    console.log(response.meals);
$(".loader2").fadeOut(500)

}

function displayArea(list){
    let blackBox=""
    for(let i=0 ;i<list.length ;i++){
        blackBox+=`<div class="col-md-3  ">
        <div title2 ="${list[i].strArea}" class="item  rounded-2 overflow-hidden text-center cursor-pointer">
        <i class="fa-solid fa-house-laptop fa-4x"></i>
                <h3 class=" ">${list[i].strArea}</h3>
            </div>
        </div>
    </div>`
    }
    myData.innerHTML=blackBox
    showSearch.innerHTML =""
    for(let i=0 ;i< document.getElementsByClassName("item").length;i++){
        document.getElementsByClassName("item")[i].addEventListener("click",function(){
            filterByArea(document.getElementsByClassName("item")[i].getAttribute("title2"))
        })
    }
}
area.addEventListener("click",function(){
    getArea()
})


let ingeridient = document.getElementById("ingeridient")
async function getIngeridient(){
    close()
$(".loader2").fadeIn(500)

    let request = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
    let response = await request.json()
     displayIngeridient(response.meals.slice(0,20))
    console.log(response.meals);
$(".loader2").fadeOut(500)

}

function displayIngeridient(list){
    let blackBox=""
    for(let i=0 ;i<list.length ;i++){
        blackBox+=`<div class="col-md-3  ">
        <div title3 ="${list[i].strIngredient}" class="item  rounded-2 overflow-hidden text-center cursor-pointer">
        <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                <h3 class=" ">${list[i].strIngredient}</h3>
                <p>${list[i].strDescription.split(" ").slice(0,30).join(" ")}</p>
            </div>
        </div>
    </div>`
    }
    myData.innerHTML=blackBox
    showSearch.innerHTML =""
    for(let i=0 ;i< document.getElementsByClassName("item").length;i++){
        document.getElementsByClassName("item")[i].addEventListener("click",function(){
            filterByIngeridient(document.getElementsByClassName("item")[i].getAttribute("title3"))
        })
    }
}
ingeridient.addEventListener("click",function(){
    getIngeridient()
    
})



async function filterByCategory(category){
    close()
$(".loader2").fadeIn(500)

let request = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
let response = await request.json()
displayItems(response.meals)
console.log(response.meals);
$(".loader2").fadeOut(500)

}

async function filterByArea(area){
    close()
$(".loader2").fadeIn(500)

    let request = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
    let response = await request.json()
    displayItems(response.meals)
    console.log(response.meals);
$(".loader2").fadeOut(500)

    }

    async function filterByIngeridient(ingeridient){
        close()
$(".loader2").fadeIn(500)

        let request = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingeridient}`)
        let response = await request.json()
        displayItems(response.meals)
        console.log(response.meals);
$(".loader2").fadeOut(500)

        }


let details= document.getElementById("instructions")

async function getDetails(id){
    close()
$(".loader2").fadeIn(500)

    let request= await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    let response = await request.json()
    console.log(response.meals[0]);
    let meal=response.meals[0]
    displayDetails(meal)
$(".loader2").fadeOut(500)

}
function displayDetails(meal){

    let ingredientsList =``
    for (let i=1 ; i<= 20; i++){
        if(meal[`strIngredient${i}`]){
            ingredientsList += `<span class="btn btn-info my-2">${meal[`strMeasure${i}`]} ${meal[`strIngredient${i}`]}</span> `
    }
}
    let tagList = meal.strTags
    if (tagList){
        tagList = meal.strTags.split(",")
    }else{
        tagList = []
    }
    console.log(tagList);
    let tags =``
    for (let i=0 ; i< tagList.length; i++){
        
        
            tags +=`<span class="btn btn-light my-2" >${tagList[i]}</span> `
    
}
console.log(ingredientsList);
    let blackBox=` <div class="col-md-4">
    <img src="${meal.strMealThumb}" class="w-100 rounded-2" alt="mealDetails">
    <h2>${meal.strMeal}</h2>
    </div>
    <div class="col-md-8">
    <h3>Instructions</h3>
    <p>${meal.strInstructions}</p>
    <h4><span  class="fw-bold">Area :</span>${meal.strArea
    }</h4>
    <h4><span class="fw-bold"> Category :</span>${meal.strCategory}</h4>
    <h4>Recipes :</h4>
    <p> ${ingredientsList} </p>
    <h4>Tags :</h4>
    <p>${tags}</p>
    <p><a  class="btn btn-success my-2" href="${meal.strSource
    }" target="_blank">Source</a> <a class="btn btn-danger my-2" href="${meal.strYoutube

    }" target="_blank">Youtube</a></p>
    </div>`

    myData.innerHTML =blackBox
    showSearch.innerHTML =""
}


let searchLink =document.getElementById("search")
let showSearch =document.getElementById("show-search")
function search() {
    close()
    let blackBox =`<div class="container w-75">
        <div class="row">
            <div class="col-md-6 mb-2">
                <input class="form-control bg-transparent search text-white" type="text" placeholder="Search By Name">

            </div>
            <div class="col-md-6">
                <input class="form-control bg-transparent search-by-letter text-white" id="letter" type="text" placeholder="Search By First Letter">

            </div>
        </div>
    </div>`
    
showSearch.innerHTML =blackBox
myData.innerHTML =""
document.querySelector(".search").addEventListener("keyup",function (e){
searchByName(e.target.value)
})
document.querySelector(".search-by-letter").addEventListener("keyup",function (e){
    searchByName(e.target.value)
    })

    $('input#letter').attr('maxLength','1').keyup(limitMe);

function limitMe(e) {
    if (e.keyCode == 8) { return true; }
    return this.value.length < $(this).attr("maxLength");
}

}
searchLink.addEventListener("click",function(){
    search()
})


async function searchByName(token){
$(".loader2").fadeIn(500)

    let request = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${token}`)
    let response =await request.json()
    if(response.meals){
        displayItems(response.meals)
    }else{
        displayItems([])
    }
$(".loader2").fadeOut(500)
    
    
}






function contact() {
    close()
    let blackBox =`<section class="py-5">
    <div class="container w-75 text-center">
        <div class="row gy-5">
            <div class="col-md-6">
                <input  id="name-rgx" type="text" class="validate1 form-control text-black" placeholder="Enter Your Name">
                <p class="alert alert-danger mt-2 d-none" id ="alert1">Enter valid Name</p>
            </div>
            <div class="col-md-6">
                <input id="email-rgx" type="email" class="validate2 form-control text-black" placeholder="Enter Your Email">
                <p class="alert alert-danger mt-2 d-none" id="alert2">Email not valid *exemple@yyy.zzz</p>
            </div>
            <div class="col-md-6">
                <input id="phone-rgx" type="tel" class="validate3 form-control text-black" placeholder="Enter Your Phone">
                <p class="alert alert-danger mt-2 d-none" id="alert3">Enter valid Phone Number</p>
            </div>
            <div class="col-md-6">
                <input id="age-rgx" type="number" class="validate4 form-control text-black" placeholder="Enter Your Age">
                <p class="alert alert-danger mt-2 d-none" id="alert4">Enter valid age</p>
            </div>
            <div class="col-md-6">
                <input id="password-rgx" type="password" class="validate5 validate1 form-control text-black" placeholder="Enter Your Password">
                <p class="alert alert-danger mt-2 d-none" id="alert5">Minimum eight characters must include at least one letter and on number</p>
                </div>
            <div class="col-md-6">
                <input id="repassword-rgx" type="password" class="validate6 form-control text-black" placeholder="re-Enter Your Password">
                <p class="alert alert-danger mt-2 d-none" id="alert6">Enter valid repassword</p>
                </div>
            
        </div>
        <button class=" btn btn-outline-danger my-3" id="submit">Submit</button>
    </div>
</section>`
    
myData.innerHTML =blackBox
showSearch.innerHTML =""
$('button#submit').attr('disabled', '')
document.querySelector(".validate1").addEventListener("keyup",function (){
    validate()
    })
    document.querySelector(".validate2").addEventListener("keyup",function (){
        validate()
        })
        document.querySelector(".validate3").addEventListener("keyup",function (){
            validate()
            })
            document.querySelector(".validate4").addEventListener("keyup",function (){
                validate()
                })
                document.querySelector(".validate5").addEventListener("keyup",function (){
                    validate()
                    })
                    document.querySelector(".validate6").addEventListener("keyup",function (){
                        validate()
                        })
    
}
let contactLink =document.getElementById("contact")
contactLink.addEventListener("click",function(){
    contact()
})
function validateName(){
    return /^[ a-zA-Z\-\']+$/.test(document.getElementById("name-rgx").value)
}
function validateEmail(){
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(document.getElementById("email-rgx").value)
}
function validatePhone() {
    return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(document.getElementById("phone-rgx").value)
}
function validateAge() {
    return /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/.test(document.getElementById("age-rgx").value)
}
function validatePassword(){
    return /^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/.test(document.getElementById("password-rgx").value)
}

function validateRePassword(){
    return document.getElementById("password-rgx").value == document.getElementById("repassword-rgx").value
}
function validate(){
    document.getElementById("name-rgx").addEventListener("keyup",function(){
        if(validateName()){
            document.getElementById("alert1").classList.replace("d-block","d-none")
            document.getElementById("name-rgx").classList.add("is-valid")
            document.getElementById("name-rgx").classList.remove("is-invalid")


        }else{
            document.getElementById("alert1").classList.replace("d-none","d-block")
            document.getElementById("name-rgx").classList.add("is-invalid")
            document.getElementById("name-rgx").classList.remove("is-valid")


    
        }
    })
    document.getElementById("email-rgx").addEventListener("keyup",function(){
        if(validateEmail()){
            document.getElementById("alert2").classList.replace("d-block","d-none")
            document.getElementById("email-rgx").classList.add("is-valid")
            document.getElementById("email-rgx").classList.remove("is-invalid")

        }else{
            document.getElementById("alert2").classList.replace("d-none","d-block")
            document.getElementById("email-rgx").classList.add("is-invalid")
            document.getElementById("email-rgx").classList.remove("is-valid")


    
        }
    })
    document.getElementById("phone-rgx").addEventListener("keyup",function(){
        if(validatePhone()){
            document.getElementById("alert3").classList.replace("d-block","d-none")
            document.getElementById("phone-rgx").classList.add("is-valid")
            document.getElementById("phone-rgx").classList.remove("is-invalid")

        }else{
            document.getElementById("alert3").classList.replace("d-none","d-block")
            document.getElementById("phone-rgx").classList.add("is-invalid")
            document.getElementById("phone-rgx").classList.remove("is-valid")


    
        }
    })
    document.getElementById("age-rgx").addEventListener("keyup",function(){
        if(validateAge()){
            document.getElementById("alert4").classList.replace("d-block","d-none")
            document.getElementById("age-rgx").classList.add("is-valid")
            document.getElementById("age-rgx").classList.remove("is-invalid")

        }else{
            document.getElementById("alert4").classList.replace("d-none","d-block")
            document.getElementById("age-rgx").classList.add("is-invalid")
            document.getElementById("age-rgx").classList.remove("is-valid")


    
        }
    })
    document.getElementById("password-rgx").addEventListener("keyup",function(){
        if(validatePassword()){
            document.getElementById("alert5").classList.replace("d-block","d-none")
            document.getElementById("password-rgx").classList.add("is-valid")
            document.getElementById("password-rgx").classList.remove("is-invalid")

        }else{
            document.getElementById("alert5").classList.replace("d-none","d-block")
            document.getElementById("password-rgx").classList.add("is-invalid")
            document.getElementById("password-rgx").classList.remove("is-valid")


    
        }
    })
    document.getElementById("repassword-rgx").addEventListener("keyup",function(){
        if(validateRePassword()){
            document.getElementById("alert6").classList.replace("d-block","d-none")
            document.getElementById("repassword-rgx").classList.add("is-valid")
            document.getElementById("repassword-rgx").classList.remove("is-invalid")

        }else if(!validateRePassword()|| (document.getElementById("password-rgx").value ==" ") ){
            document.getElementById("alert6").classList.replace("d-none","d-block")
            document.getElementById("repassword-rgx").classList.add("is-invalid")
            document.getElementById("repassword-rgx").classList.remove("is-valid")


    
        }
    })
    
    
   
   
    
if(validateName()&& validateEmail()&& validatePhone() && validateAge() && validatePassword() && validateRePassword()){
    
    document.getElementById("submit").removeAttribute("disabled")
    console.log("hi");
} else{
    $('button#submit').attr('disabled', '')
}

}








