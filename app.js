//Giphy Party Maxime Valencik

//Functions

//Async function to request the gif on Giphy using a serchTerm
async function getGif(searchTerm){
    //get request with api_key and searchTerm as parameter (www.apigiphy.com for doc)
    const res = await axios.get(`http://api.giphy.com/v1/gifs/search?api_key=coxDFmkKcYghlmS9i890R0RXkv2N0m9O&q=${searchTerm}`);
    //the request return a list of 50 gif. Select one randomly
    let randomIndex = Math.floor(Math.random() * 50);
    //url to original image
    const gifImage = res.data.data[randomIndex].images.original.url;
    // add the selected gif to the dom
    const container = document.querySelector('#container');
    const image = document.createElement('img');//create image to append to the container in the dom
    image.setAttribute('src', gifImage);
    container.append(image);
}

function deleteImage(){
    const images = document.querySelectorAll('img');
    for (let image of images){
        image.parentNode.removeChild(image);
    }
}


// Add event listeners to Buttons

// link getGif function to add button search button
const searchButton = document.querySelector('#search_button');
searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    // Get input value from form
   const searchTerm = document.querySelector('#gif_term').value;
   // Call getGif function
   getGif(searchTerm);
   //reset form
   document.querySelector('form').reset();
});

// link delete function to delete button
const deleteButton = document.querySelector('#delete_button');
deleteButton.addEventListener('click', (e) => {
    e.preventDefault();
    deleteImage();
});