
const card=document.querySelector('.card');
const prev=document.querySelector('.prev');
const next=document.querySelector('.next');

const content = [
    {
        name: 'Tanya Sinclair',
        speciality: 'UX Engineer',
        info: '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”',
        src: './images/tanya.jpg'
    },
    {
        name: 'John Tarkpor',
        speciality: 'Junior Front-end Developer',
       info: '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”',
        src: './images/john.jpg'
    }
]

let i=0;

const slider=()=>{
  
    card.innerHTML=`
           <img class="card-img" src="${content[i].src}" alt="card-img">

         <div class="card-content">
           <img class="quotes" src="./images/pattern-quotes.svg" alt="pattern-quotes">
            <p class="info">${content[i].info}</p>
            <div>
              <strong>${content[i].name}</strong>
              <p> ${content[i].speciality}
              </p>
            </div>
        </div>
         
`;
  if (i==0){i++}else{i--};
};
slider();
next.addEventListener('click', slider);
prev.addEventListener('click', slider)
