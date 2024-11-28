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

function crezioneCarta (member){
  const {name , role , email ,img} = member
  const carta = `
  <div class="col-3 d-flex bg-black text-light m-3">
          <div id="image-box">
            <img class="" src="img/female1.png" alt="">
          </div>
          <div id="description">
            <h3 class="mt-5 m-3">Paola Caruso</h3>
            <h6 class="m-3">Deisgner</h6>
            <a class="m-3" href="#">prova@prova.it</a>
          </div>
        </div>
  `
  return carta;
}