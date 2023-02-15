const allProjDesc = document.getElementsByClassName("project-desc");
const allProjTech = document.getElementsByClassName("project-tech");
console.log(allProjDesc);

for (let i = 0; i < allProjDesc.length; i++) {
  const shareIcon = allProjTech[i].nextElementSibling;
  allProjDesc[i].addEventListener("click", (e) => {
    console.log(shareIcon);
    if(allProjTech[i].isVisible){
      console.log("here");
      anime({
        targets: [allProjTech[i],shareIcon],
        // translateX: -100,
        duration: 300,
        scale:[1,0],
        skew:["0deg","120deg"],
        easing: "easeInOutSine",
        complete: function (anim) {
          allProjTech[i].classList.add('hide');
          shareIcon.classList.add('hide');
        },
      });
      allProjTech[i].isVisible=false;
      return;
    }
    shareIcon.classList.remove('hide'); 
    shareIcon.classList.add('visible'); 
    allProjTech[i].classList.remove('hide');
    allProjTech[i].classList.add('visible');
    allProjTech[i].isVisible=true;
    anime({
      targets: [allProjTech[i],shareIcon],
      // translateX:100,
      scale:[0,1],
      skew:["120deg","0deg"],
      duration: 300,
      easing: "easeInOutSine",
    });
  });
}

const shareDivs = document.getElementsByClassName("project-share");
const main = document.getElementsByTagName("main");
for(let i=0;i<shareDivs.length;i++){
  const modal = shareDivs[i].nextElementSibling;
  const overlay = modal.firstElementChild;
  shareDivs[i].addEventListener('click',(e)=>{
    modal.classList.add("modal-on");
    anime({
      targets: modal.firstElementChild,
      scale: [0, 1],
      skew: ["30deg", "0deg"],
      duration: 100,
      easing: "easeInOutSine",
    });
  })
  overlay.addEventListener("click",(e)=>{
    anime({
      targets: modal.firstElementChild,
      scale: [1, 0],
      skew: ["0deg", "30deg"],
      duration: 100,
      easing: "easeInOutSine",
      complete: function(anim){
        modal.classList.remove("modal-on");
      }
    });
  })
}