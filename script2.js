
//now get the url again of the JSON placeholder, photos this time
const url = "https://jsonplaceholder.typicode.com/photos";

//then get an access to the container
const Container = document.getElementById("Grid");

//same procedure in the fetch as per the first script, but change the name "data" to "photos" as the photos itself will be fetched
function load(){
    fetch(url).then((response)=> {
        response.ok ? response.json()
        .then((photos)=> {

            //This phase does not require you to display image and a text, it may be an text only that users will select, but for the user, Miguel pogi, has decided to display both of the image and it's title

            //now declare first an variable that contains an empty value, in this case, we named it Str because it contains an HTML string
            let Str = '';

            //because we are only task to get 50 items, we will just set the condition to i < 50
            for (let i = 0; i < 50; i++){
                //then we crate this one, an html code that has the ff: Container for both the image and text, the image container and the text container
                //we used ${i} inside those tags as you can see to make it unique, because every loop that runs, that value of i increments by one
                /* 
                First run: IDContainer0
                Second run: IDContainer1
                Thirs run: IDContainer2... and so on
                */
                Str += 
                `<div class="Container" id="IDContainer${i}">
                    <div class="ImageContainer">
                        <img class="Image" id="Image${i}">
                    </div>
                    <div class="TitleContainer" id="TitleContainer">
                        <p class="Title" id="Title${i}">
                    </div>
                 </div>`; 
                 //repeating this code 50 times, we have now 50 containers
            }
            //don't forget to use innerHTML to input the code inside the "Grid"
            Container.innerHTML = Str;

            //getting the image:
            //as per the first loop, we'll set it to i < 50, 
            for (let i = 0; i < 50; i++){
                //we will crate first a flexible variable that will gain access to the 50 unique ID's, same concept as the first one, the i in the loop increments uniquely to we used "let" 
                let ImageID = "Image" + i;
                /*First run: Image0
                Second run: Image1
                Third run: Image2... and so on
                */
               //we will now get the ID of those container using the syntax below
                let ImageContainer = document.getElementById(ImageID);
                //now get the photos from the url using the syntax below
                let Photos = photos[i].url; 
                //please use the .src property as you will be inputting photos inside the img tag
                ImageContainer.src = Photos;
            }

            //this is to fetch the title, same as i < 50
            for(let i = 0; i < 50; i++) {
                //Getting the unique ID
                let TitleID = "Title" + i;
                let TitleContainer = document.getElementById(TitleID);
                //now fetching the title
                let PhotoTitle = photos[i].title;
                //then using "textContent" as you will inputting a text
                TitleContainer.textContent = PhotoTitle;
            }
        }):pass;
    });
}

load();

//now go back to read me
