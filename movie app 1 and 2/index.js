
let container=document.getElementById("container");

 async function Movie(){

     let searchMovie=document.getElementById("searchMovie").value

    try{
        let res =await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=5803d9e8&t=${searchMovie}`);

        let data=await res.json();


        append(data)
        console.log(data)

    }catch(err){

        var image=document.createElement("img");
        image.src="https://thumbs.gfycat.com/BewitchedShamefulDobermanpinscher-size_restricted.gif"
        console.log("err:",err)
    }
 }

 function append(data){

    container.innerHTML=null

    let div=document.createElement("div");

    let img=document.createElement("img");
    img.src=data.Poster;

    let title=document.createElement("p");
    title.innerText="Released date "+":"+data.Title;

    
    let date=document.createElement("p");
    date.innerText="Released date "+":"+data.Released;

    let genre = document.createElement("p");
    genre.innerText = "Genre "+" : "+data.Genre;

    let Language = document.createElement("p");
    Language.innerText= "Language "+" : "+data.Language;

    let Writer = document.createElement("p");
    Writer.innerText= "Writer "+" : "+data.Writer;


    let ratings = document.createElement("p")
    ratings.innerText = "imdb Rating "+" : "+data.imdbRating;

    let Actors = document.createElement("p")
    Actors.innerText = "Actors "+" : "+ data.Actors

    let Runtime = document.createElement("p")
    Runtime.innerText = "Runtime "+" : "+ data.Runtime;

    div.append(img, title ,ratings ,genre, Runtime, date, Language, Actors , Writer);
    container.append(div)
 }