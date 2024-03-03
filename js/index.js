const loadCard = async() =>{
    const res = await fetch(' https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await res.json();
    const cards= data.posts;
    displayCard(cards);
    displayTitle(cards);
}


const displayCard = cards =>{

    cards.forEach(card => {

        //console.log(card);
         
        const cardContainer = document.getElementById('card-container');

        const showCard = document.createElement('div');
        showCard.classList=`card card-side mb-[16px] bg-[#F3F3F5] shadow-xl`;
        showCard.innerHTML=`<figure><div class="indicator">
        <span class="indicator-item badge badge-secondary mt-[30px] mr-[10px] ${card?.isActive===true? ' green':' red'}"></span> 
        <div class="grid w-[72px] h-[72px] mt-[30px] ml-[30px] bg-base-300 place-items-center ">  <img src="${card.image}" alt=""></div>
      </div></figure>
      <div class="card-body">

        <div class="flex flex-row mb-[16px] ">
          <h1 class="mr-[40px]">#<span>${card.category}</span></h1>
          <h1>Author:${card.author.name}</h1>
        </div>


        <h2 class="card-title mb-[16px]"> ${card.title}
        </h2>
        <p class="mb-[16px] text-[#12132D99]">${card.description}
        </p>
        <hr>
        <div class="card-actions justify-between">

          <div class="flex">
            <p class="mr-[10px]"><i class="fa-regular fa-message"></i></p>
            <h1>${card.comment_count}</h1>
          </div>

          <div class="flex">
            <p class="mr-[10px]"><i class="fa-regular fa-eye"></i></p>
            <h1>${card.view_count}</h1>
          </div>

          <div class="flex">
            <p class="mr-[10px]"><i class="fa-regular fa-clock"></i></p>
            <h1>${card.posted_time} Min</h1>
          </div>
          

          <button><i class="fa-regular fa-envelope text-center w-[40px] h-[40px] rounded-[50px] p-[8px] bg-[#10B981]" aria-hidden="true"></i></button>
        </div>
      
      </div>
    </div>`


     cardContainer.appendChild(showCard);
    });

}


const displayTitle = cards =>{
    console.log(cards)
    
}


loadCard();