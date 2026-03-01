
let cardsSection = document.querySelector(".cards");
let cardloading = document.querySelector('.cards-section')

// get all data from json file
fetch("news.json")
  .then(res => res.json())
  .then(data => 
    data.articles.forEach(element => {
  
      cardsSection.innerHTML += `
      <div class="card">
        <img src="${element.image}" alt="${element.title}">
        <div class="content">
         <h3 class="title">${element.title}</h3>
        <p class="description">${element.description}</p>
        <p class="date"><span>Date :</span>${element.publishedAt}</p>
        <p class="source"><span>Source</span>:${element.source.name}</p>
        </div>
        <a href="${element.url}" target="_blank" class="btn">Read More</a>
      </div>
      `
    })).catch(err => 

      cardloading.innerHTML=`<div class="loading">
          <span class="loading-icon">loading... </span>
      
      </div>`
      
    );

    // button behavoir for scroll
    document.querySelector("footer .container button").addEventListener("click", function(){
      
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      
      })
    })
    // get current year
    let year = document.querySelector(".year")
    year.innerHTML=`${new Date().getFullYear()}`
    