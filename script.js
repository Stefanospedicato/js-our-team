const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];


function creazioneCarta(member){
  const {name , role , email ,img} = member;
  const carta = `
  <div class="col-3 mt-5 offset-1 d-flex">
      <div id="image-box">
          <img class="" src="${img}" alt="{${name}}">
      </div>
      <div class="flex-grow" id="description">
          <h3 class="mt-5 m-3">${name}</h3>
          <h6 class="m-3">${role}</h6>
          <a class="m-3" href="#">${email}</a>
      </div>
  </div>
  `
  return carta;
}

const row = document.querySelector('.row');

function myTeam(array) {
  let carte = '';
  for(let member of teamMembers){
    carte += creazioneCarta(member);
  }
  row.innerHTML = carte
}

myTeam(teamMembers);