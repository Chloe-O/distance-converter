const KmInput = document.getElementById("KmInput");
const convertBtn = document.getElementById("convertBtn");

const distanceConverter = document.getElementById("distanceConverter");

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
