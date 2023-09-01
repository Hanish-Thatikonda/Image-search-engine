let btn= document.getElementById("btn");
let search= document.getElementById("search");
let second= document.getElementById("second");

btn.addEventListener("click", (e)=>{
    e.preventDefault();
    //looping through the div tag and removing all the img tags one by one until div is empty
    while(second.firstElementChild){
        second.removeChild(second.firstElementChild);
    }
    console.log(search.value);
   
        window.fetch(`https://pixabay.com/api/?key=38192665-2d3ab1349b930bd3f02761df2&q=${search.value}&image_type=photo`)
    .then((data)=>
        data.json()
    )
    .then((response)=> {
        let x= response.hits;
        console.log(x);
        for(let ele of response.hits){
          console.log(ele);
          let a = `<img  src="${ele.previewURL}"/>`
          console.log(a);
          second.innerHTML+=a
        }
    })
    
})





