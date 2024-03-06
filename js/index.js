let titleCount = 0;

const loadCard = async () => {
    const spinner = document.getElementById('spinner');
    spinner.style.display = 'block';
    try {
        const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`);
        const data = await res.json();
        const cards = data.posts;
        displayCard(cards);
        console.log(cards);
    }
    finally {
        spinner.style.display = 'none';
    }
}

const displayCard = cards => {
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = "";

    cards.forEach(card => {
        const showCard = document.createElement('div');
        showCard.classList = `card card-side mb-[16px] bg-[#F3F3F5] shadow-xl`;
        const indicatorStyle = card.isActive ? 'background-color: #00cc00' : 'background-color:red'
        showCard.innerHTML = `
        <figure>
            <div class="indicator">
                    <span class="indicator-item badge badge-secondary mt-[30px] mr-[10px]" style="${indicatorStyle}"></span>
                <div class="grid w-[72px] h-[72px] mt-[30px] ml-[30px] bg-base-300 place-items-center ">  
                    <img src="${card.image}" alt="">
                </div>
            </div>
        </figure>

      <div class="card-body">

        <div class="flex flex-row mb-[16px] ">
          <h1 class="mr-[40px]">#<span>${card.category}</span></h1>
          <h1>Author:${card.author.name}</h1>
        </div>

        <h2 class="card-title mb-[16px]"> ${card.title}</h2>
        <p class="mb-[16px] text-[#12132D99]">${card.description}</p>

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

          <button onclick="displayCardTitle('${card.title}, ${card.view_count}')"><i class="fa-regular fa-envelope text-center w-[40px] h-[40px] rounded-[50px] p-[8px] bg-[#10B981]" aria-hidden="true"></i></button>

        </div>
      </div>
    </div>`
        cardContainer.appendChild(showCard);
    });

}

const displayCardTitle = (title, view_count ) => {
    const sidebar = document.getElementById('sidebar');
    const titleCountElement = document.getElementById('titleCount');

    const titleElement = document.createElement('h1');
    const p = document.createElement('p');
    titleCount++;
    titleElement.innerHTML = ` ${title}`;
    //p.innerText = `${view_count}`;
    
    sidebar.appendChild(titleElement);
    sidebar.appendChild(p);
    
    titleCountElement.innerHTML = ` ${titleCount}`;
}

const handleSearch = async () => {
    const spinner = document.getElementById('spinner');
    spinner.style.display = 'block';

  try{
        const categorySearch = document.getElementById('categorySearch').value.toLowerCase();
        const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`);
        const data = await res.json();
        const cards = data.posts;

        const filteredCards = cards.filter(card => card.category.toLowerCase().includes(categorySearch));

        displayCard(filteredCards);
    }
    finally {
        spinner.style.display = 'none';
    }
}

loadCard();






const loadingCard =async () =>{
  const res = await fetch ("https://openapi.programming-hero.com/api/retro-forum/latest-posts");
  const data = await res.json();
  console.log(data);
  showLastestCard(data);

}

const showLastestCard = data =>{
  const lastestCard = document.getElementById("latest-card");
  data.forEach(element => {
    const viewCard = document.createElement('div');

   
    viewCard.classList = `card card-compact w-[350px] bg-base-100 shadow-xl`;

    viewCard.innerHTML= ` <figure><img src="${element.cover_image}" class="h-[180px] w-[300px] pt-[30px]" alt="Shoes" /></figure>
  
    <div class="card-body">

      <div>

        <p class="ml-[10px]"><i class="fa-solid fa-calendar-days"></i> : ${element.author.posted_date? element.author.posted_date:'no date show' }</p>

      </div>



      <h2 class="text-lg  font-extrabold  ml-[10px]">${element.title}</h2>

      <p class="text-[#12132D99]">${element.description}</p>

     <div class="flex gap-[16px]">

      <div class="">

         <img src="${element.profile_image}" class="w-[44px] h-[44px] rounded-full border-slate-900 border-2    " alt="" srcset=""> 

  </div>

  <div>

    <h1>${element.author.name}</h1>

    <p>${element.author.designation?element.author.designation:'no designation define'}</p>`

    lastestCard.appendChild(viewCard);
    
  });
}

 loadingCard();