let cont=document.querySelector(".cont")
async function dataFetch() {
    let data=await fetch(`http://127.0.0.1:3000/di/`)
    let resp=await data.text();
    let div=document.createElement("div");
    div.innerHTML=resp
    console.log(div);
    let anchor_tags = div.getElementsByTagName("a")
    let a = Array.from(anchor_tags)
    console.log(a);
    for (const floder of a) {
        if(floder.href.includes("/di")){
            let dynamicfloder = floder.href.split("/").slice(-2)[0]
         let data= await fetch(`http://127.0.0.1:3000/di/${dynamicfloder}/info.json`)
         let resp=await data.json()
         cont.innerHTML+=`<div class="cont user-card">
    <div class="card" style="width: 18rem;">
        <img src="../di/${dynamicfloder}/cover.jpg" class="card-img-top" alt="...">
        <div class="card-body ">
          <h5 class="card-title">${resp.Ti}</h5>
          <p class="card-text">${resp.info}</p>
          <p class="card-text bold">${resp.best1}</p>
          <div class="d-grid gap-2 col-12 mx-auto "> <a href="#" class="btn btn-outline-success">more info</a></div>
        </div>
      </div>
</div>`
         console.log(resp);

        }
    }

}
dataFetch()
let input=document.getElementsByTagName("input")[0]
input.addEventListener("input",(e)=>{
  let cards= document.querySelectorAll(".user-card")
  let searchitem=e.target.value.toLowerCase()
  cards.forEach((value)=>{
      let username = value.querySelector(".card-title").textContent.toLowerCase()
      console.log(value)
      if(username.includes(searchitem)){
          value.style.display = "block"
      }
      else{
          value.style.display = "none"
      }
  })
  })