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
    "The input field is empty, enter a number to convert it to miles";
}

closeModalBtn.addEventListener("click", closeModal);
modal.addEventListener("click", closeModal);

function kmToMiles(x) {
  let mileVal = (x / 1.609).toFixed(2);
  displayMileOutput.innerHTML = mileVal;
}

convertBtn.addEventListener("click", () => {
  if (KmInput.value.length === 0 || KmInput.value <= 0) {
    openModal();
  } else {
    kmToMiles(KmInput.value);
    displayKmInput.innerHTML = KmInput.value;
    KmInput.value = "";
  }
});
