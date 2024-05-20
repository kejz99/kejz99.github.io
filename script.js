const hamburger = document.querySelector(".hamburger");
const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");
const onetop = document.querySelector(".onetop1");

hamburger.addEventListener("click", () => {
    if (hamburger.classList.contains("isopened")) {
        hamburger.classList.remove("isopened");
        line1.classList.remove("line1new");
        line2.classList.remove("line2new");
        line3.classList.remove("line3new");
        onetop.classList.remove("onetop1new");
    } else {
        hamburger.classList.add("isopened");
        line1.classList.add("line1new");
        line2.classList.add("line2new");
        line3.classList.add("line3new");
        onetop.classList.add("onetop1new");
    };
});

const appear1 = document.querySelector("#one"); 
const cb1 = function(entries){
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('inview');
    }else{
      entry.target.classList.remove('inview');
    }
  });
}
const io1 = new IntersectionObserver(cb1);
io1.observe(appear1);

const appear2 = document.querySelector("#two"); 
const cb2 = function(entries){
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('inview');
    }else{
      entry.target.classList.remove('inview');
    }
  });
}
const io2 = new IntersectionObserver(cb2);
io2.observe(appear2);

const appear3 = document.querySelector("#three"); 
const cb3 = function(entries){
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('inview');
    }else{
      entry.target.classList.remove('inview');
    }
  });
}
const io3 = new IntersectionObserver(cb3);
io3.observe(appear3);

const appear4= document.querySelector("#four"); 
const cb4 = function(entries){
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('inview');
    }else{
      entry.target.classList.remove('inview');
    }
  });
}
const io4 = new IntersectionObserver(cb4);
io4.observe(appear4);

const appear5= document.querySelector("#five"); 
const cb5 = function(entries){
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('inview');
    }else{
      entry.target.classList.remove('inview');
    }
  });
}
const io5 = new IntersectionObserver(cb5);
io5.observe(appear5);

