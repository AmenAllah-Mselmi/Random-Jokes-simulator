let url="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,political,explicit";
let p=document.getElementById("p");
let btn=document.querySelector("button");
btn.addEventListener("click",()=>{
    console.log("reussite");
    fetch(url)
    .then((result)=>{
        let MyData =result.json();
        console.log(MyData);
        return MyData;
    })
    .then((res)=>{
       if(res.joke===undefined){
        p.innerHTML=res.setup;
       }
       else{
        p.innerHTML=res.joke;
       }
    })
})