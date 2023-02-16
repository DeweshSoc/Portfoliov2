
const form = document.getElementById("contact-form");
const submitBtn = document.getElementById("form-submit");

submitBtn.addEventListener("click", () => {
  const mainModal = document.getElementById("main-modal");
  const overlay = mainModal.firstElementChild;
  mainModal.classList.add("modal-on");
  anime({
    targets: mainModal.firstElementChild,
    scale: [0, 1],
    skew: ["30deg", "0deg"],
    duration: 100,
    easing: "easeInOutSine",
  });
  const info = new FormData(form);
  console.log(info);
  fetch("https://sleepy-gold-bass.cyclic.app/msg", {
    method: "POST",
    body: info,
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Success:", data);
      if(data.message==="success"){
        alert("Message sent");
        anime({
          targets: mainModal.firstElementChild,
          scale: [1, 0],
          skew: ["0deg", "30deg"],
          duration: 100,
          easing: "easeInOutSine",
          complete: function (anim) {
            mainModal.classList.remove("modal-on");
          },
        });
        // window.location.href = "https://deweshsoc.github.io/Portfoliov2/";
      }
    })
    .catch((err) => {
      console.error("Error:", err);
    });
});
