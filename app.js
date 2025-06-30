const KmInput = document.getElementById("KmInput");
const convertBtn = document.getElementById("convertBtn");

const displayKmInput = document.getElementById("displayKmInput");
const displayMileOutput = document.getElementById("displayMOutput");

const modal = document.getElementById("modal");
const closeModalBtn = document.getElementById("closeModalBtn");

function closeModal() {
    modal.style.display = 'none';
}

closeModalBtn.addEventListener('click', closeModal);
modal.addEventListener('click', closeModal)

function checkInputField() {
  if (KmInput.value.length === 0 || KmInput.value <= 0) {
    console.log("You left the field empty, add a number to convert to miles");
  } else {
    console.log(KmInput.value);
  }
}

convertBtn.addEventListener("click", () => {
  checkInputField();
  kmToMiles(KmInput.value);
  KmInput.value = "";
});

const kmToMiles = (x) => {
    console.log(x * 1.609);

}
