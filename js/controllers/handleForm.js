
const frm = document.getElementById("contact-form");
const submitBtn = document.getElementById("form-submit");

submitBtn.addEventListener("click", () => {
  const mainModal = document.getElementById("main-modal");
  mainModal.classList.add("modal-on");
  anime({
    targets: mainModal.firstElementChild,
    scale: [0, 1],
    skew: ["30deg", "0deg"],
    duration: 100,
    easing: "easeInOutSine",
  });
  const info = new FormData(frm);
  console.log(info);
  fetch("https://portfolio-server.cyclic.app/msg", {
    method: "POST",
    body: info,
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Success:", data);
      if (data.message === "success") {
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
      }
    })
    .catch((err) => {
      console.error("Error:", err);
      alert("Error: something broke!!!");
      mainModal.classList.remove("modal-on");
    });
});
