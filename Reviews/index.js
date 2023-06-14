const Reviews = [
  {
    id: 1,
    img: "../images/Abhisek Tamang.jpg",
    name: "Abhishek Tammang",
    job: "Web Developer",
    info: "I am a passionate web developer with several years of experience. I specialize in front-end development using modern web technologies.",
  },
  {
    id: 2,
    img: "../images/girl.jpg",
    name: "Mariana",
    job: "Graphic Designer",
    info: "As a creative graphic designer, I bring ideas to life through stunning visuals. I have a keen eye for detail and a strong sense of aesthetics.",
  },
  {
    id: 3,
    img: "../images/chris evans.jpg",
    name: "Chris Evans",
    job: "Software Engineer",
    info: "I am a software engineer with expertise in building robust and scalable applications. I enjoy solving complex problems and collaborating with teams.",
  }
];


const job = document.getElementById('job');
const img = document.getElementById('image');
const name = document.getElementById('name');
const info = document.getElementById('info');
const surpriseBtn = document.getElementById('surprise-btn');

const preBtn = document.getElementById('pre-btn');
const nextBtn = document.getElementById('next-btn');

let currentItem = 0;
let item = '';
let random = '';

function fetch(){
  item = Reviews[currentItem];
  img.src = item.img;
  job.textContent = item.job;
  name.textContent = item.name;
  info.textContent = item.info;
}

window.addEventListener('DOMContentLoaded', function() {
  fetch();
})


nextBtn.addEventListener('click', function(){
  currentItem++;
  if (currentItem > Reviews.length -1){
    currentItem = 0;
  }
  fetch(currentItem);

});


preBtn.addEventListener('click', function(){
  currentItem--;
  if (currentItem < 0){
    currentItem = Reviews.length - 1;
  }
  fetch(currentItem);

});

surpriseBtn.addEventListener('click', function(){
  random = Math.floor(Math.random() * 3 );
  currentItem = random;
  fetch(currentItem);
});