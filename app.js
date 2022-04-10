console.log("Let's get this party started!");
const form = document.querySelector('#search-form');
const div = document.querySelector('#div-1');
const input = document.querySelector('#search');
const button = document.querySelector('#remove-button');


async function getGiphy(q) {
    let res = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=nbakhK1WSpBAs4yJTMyw0CkMzDGsDWQk&q=${q}&limit=25&offset=0&rating=g&lang=en`, {params:{q: q } } );
    //console.log(res.data.data)
    const img = document.createElement('img');
    img.id = 'img';
    let gifArray = [];
    //let randomNum = Math.floor(Math.random() * 25)
    for(let gif of res.data.data) {
      //console.log(gif.images.downsized.url)
        let nextImg = gif.images.downsized.url;
        gifArray.push(nextImg)
        console.log(gifArray)
        };

   img.src = gifArray[Math.floor(Math.random() * 25)];
   div.append(img);

};




form.addEventListener('submit', function(e) {
    e.preventDefault();

   getGiphy(input.value);
   input.value = ''

});

button.addEventListener('click', function(){
    div.remove();
    
    
    //div.removeChild(img);
});

//getGiphy('dog');