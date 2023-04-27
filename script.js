// var swiper = new swiper(".slide-content", {
//     SlidesPerView: 3,
//     spacebetween: 30,
//     slidesPerGroup: 3,
//     loop: true,
//     loopFillGroupWithBlank: true, 
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
// });

function validateform(){
    let email = document.forms["form"]["femail"].value
    let name = document.forms["form"]["fname"].value
    let number = document.forms["form"]["fnumber"].value
    if(email == ""){
        document.getElementById("errormessage1").innerHTML = "Email must be filled out!"
        alert("Form submission failed")
        return false;
    }else if(!email.endsWith("@gmail.com")){
        document.getElementById("errormessage1").innerHTML = "Email must ends with @gmail.com!"
        return false;
    }
    if(name.length < 3){
        document.getElementById("errormessage2").innerHTML = "Name must be at least 3 characters"
        return false;
    }else if(name == ""){
        document.getElementById("errormessage2").innerHTML = "Name must be filled out!"
        return false;
    }
    
    if(!number.startsWith("08")){
        document.getElementById("errormessage3").innerHTML = "Phone Number must starts with 08!"
        return false;
    }else if(number == ""){
        document.getElementById("errormessage3").innerHTML = "Phone Number must be filled out!"
        return false;
    }
    
    else{
        alert("Form submission successfully")
    }
}

function printAll(){
    let email = document.getElementById("nameform").value
    let name = document.getElementById("emailform").value
    let number = document.getElementById("numberform").value
    console.log(email)
    console.log(name)
    console.log(number)
}

function printContact(){
    let email = document.getElementById("emailcontact").value
    let name = document.getElementById("namecontact").value
    let comment = document.getElementById("commentcontact").value
    if(name.length < 3){
        document.getElementById("errorcontact1").innerHTML = "Name must be at least 3 characters"
        return false;
    }else if(name == ""){
        document.getElementById("errorcontact1").innerHTML = "Name must be filled out!"
        return false;
    }

    if(email == ""){
        document.getElementById("errorcontact2").innerHTML = "Email must be filled out!"
        alert("Form submission failed")
        return false;
    }else if(!email.endsWith("@gmail.com")){
        document.getElementById("errorcontact2").innerHTML = "Email must ends with @gmail.com!"
        return false;
    }
    
    if(comment == ""){
        document.getElementById("errorcontact3").innerHTML = "Comment must be filled out!"
        return false;
    }
    
    else{
        alert("Form submission successfully")
        console.log(email)
        console.log(name)
        console.log(comment)
    }
}
