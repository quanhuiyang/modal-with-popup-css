
const buttonOpen = document.getElementById("modalOpen");
const buttonClose = document.querySelector(".modalClose");
const modal = document.getElementById("modal");

buttonOpen.addEventListener("click", () => {
  //開啟對話框 解除none
  modal.style.display = "block";
});

buttonClose.addEventListener("click", () => {
  //關閉對話框 對話框呈現樣式改成none
  modal.style.display = "none";
});

//target取得物件：點選暗色背景時 對話框呈現樣式改成none
document.addEventListener("click", (e) => {
  // console.log(e.target);
  if (e.target == modal) {
    modal.style.display = "none";
  }
});