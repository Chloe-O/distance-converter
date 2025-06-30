const KmInput = document.getElementById("KmInput");
const convertBtn = document.getElementById("convertBtn");

const modal = document.getElementById("modal");
const closeModalBtn = document.getElementById("closeModalBtn");

function closeModal() {
    modal.style.display = 'none';
}

closeModalBtn.addEventListener('click', closeModal);

convertBtn.addEventListener("click", () => {
  checkInputField();
  KmInput.value = "";
});

function checkInputField() {
  if (KmInput.value.length === 0 || KmInput.value <= 0) {
    console.log("You left the field empty, add a number to convert to miles");
  } else {
    console.log(KmInput.value);
  }
}


