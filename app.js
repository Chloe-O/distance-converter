const KmInput = document.getElementById("KmInput");
const convertBtn = document.getElementById("convertBtn");

const displayKmInput = document.getElementById("displayKmInput");
const displayMileOutput = document.getElementById("displayMOutput");

const modal = document.getElementById("modal");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalText = document.getElementById("modalText");

function closeModal() {
  modal.style.display = "none";
}

function openModal() {
  modal.style.display = "flex";
  modalText.innerText =
    "You left the input field empty, enter a number to convert it to miles";
}

closeModalBtn.addEventListener("click", closeModal);
modal.addEventListener("click", closeModal);

function checkInputField() {
  if (KmInput.value.length === 0 || KmInput.value <= 0) {
    openModal;
  } else {
    console.log(KmInput.value);
  }
}

function kmToMiles(x) {
  let mileVal = (x / 1.609).toFixed(2);
  displayMileOutput.innerHTML = mileVal;
}

convertBtn.addEventListener("click", () => {
  checkInputField;
//   kmToMiles(KmInput.value);
//   displayKmInput.innerHTML = KmInput.value;
//   KmInput.value = "";
});
