//Get the URl from JSON place holders
const url = "https://jsonplaceholder.typicode.com/users";

//ATTENTION TO DETAIL

//please get the access to the form by using the syntax below as it will be the key to access the whole forms, directly accessing the button will not work
const form = document.getElementById('myForm');

//Then through the 'form' , use query selector as it is a query, then input the button, now you will gain access to the forms
const button = form.querySelector('button')

//create a function, function name is up to you JUST PLEASE CALL THE FUNCTION, don't be like me :>
function load(){
    //add an event listener and then set it to click, that will invoke the rest of the code
    button.addEventListener("click", function(e){
        //indicate the prevent default for blocking the browser from refreshing immediately
        e.preventDefault();
        //now use fetch to access the URL, follow along the template, and mind you, there are 2 ways to do that thing, the other one is at bottom, please see to it
        fetch(url).then((response)=>{
            response.ok ? response.json()
            .then((data)=> {

                //We will use loop since we will be comparing the user input to all names one by one AND the whole json file usernames is an array
                for (let i = 0; i < data.length; i++){
                    //now get the user input by accessing the input type text with an ID "username", do it inside or outside the loop, it doesn't matter, but don't put it outside the function or the fetch
                    const name = document.getElementById("username");
                    //now we got the whole input, we just got to get the specific input, by using .value 
                    const nameValue = name.value;
                    //now we have nameValue as our container that container the user input, and now use ifElse to compare the user input to all usernames
                    if (nameValue == data[i].username){
                        //please see the syntax, we used data[i].username as it is necessary to access specifically the usernames from the JSONPlaceholders
                        console.log("user found");
                        //Then use this window location to change the location of the page to another webpage, which is to index2.html in my file, see my file for instructions
                        setTimeout(()=> {
                            window.location.href = "index2.html"
                        }, 500);
                        break;
                    } else {
                        console.log("name is not found")
                    }
                }
            }):pass
        })
    });
}

load();

/*
fetch(url).then((response)=>{
    if (response.ok) {
        response.json()
        .then((data)=>{
            [rest of the code]
        }):pass
    } else {
        content.textContent = "You are not connected to the internet"
    }
});
*/