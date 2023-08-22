const namaInput = document.getElementById("namaInput");
const dateInput = document.getElementById("dateInput");
const emailInput = document.getElementById("emailInput");
const institutInput = document.getElementById("institutInput");
const optionsInput = document.getElementById("optionsInput");
const passwordInput = document.getElementById("passwordInput");

namaInput.addEventListener("keyup", (event) => {
  if (event.key == "Enter") {
    dateInput.focus();
  }
});

dateInput.addEventListener("keyup", (event) => {
  if (event.key == "Enter") {
    emailInput.focus();
  }
});

emailInput.addEventListener("keyup", (event) => {
  if (event.key == "Enter") {
    passwordInput.focus();
  }
});

passwordInput.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    institutInput.focus();
  }
});

institutInput.addEventListener("keyup", (event) => {
  if (event.key == "Enter") {
    optionsInput.focus();
  }
});

// clear form
function clearForm() {
  document.getElementById("namaInput").value = "";
  document.getElementById("dateInput").value = "";
  document.getElementById("emailInput").value = "";
  document.getElementById("passwordInput").value = "";
  document.getElementById("institutInput").value = "Pilih Kampus";
  document.getElementById("gambar").value = "";

  // Clear checkboxes
  const checkboxes = document.querySelectorAll(
    ".input.keterangan .option input[type='checkbox']"
  );
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });
}

function getImgValue() {
  const gambarInput = document.getElementById("gambar");

  // Check if a file has been selected
  if (gambarInput.files.length > 0) {
    let file = gambarInput.files[0];

    // Check if the selected file is an image (with the extension ".jpg")
    if (file.name.toLowerCase().endsWith(".jpg")) {
      const imgValue = file.name;
      console.log(imgValue);
      return imgValue; // Return the image file name
    } else {
      console.log("File yang diunggah bukan gambar berformat JPG!");
    }
  } else {
    console.log("Pilih sebuah file terlebih dahulu !");
  }

  return null; // Return null if no valid image is selected
}

// // buat kode random // generate random code
// function generateRandomStringWithNumbers(length) {
//   if (length <= 0) {
//     throw new Error("Panjang harus lebih besar dari nol.");
//   }

//   let randomString = "";
//   const characters =
//     "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

//   for (let i = 0; i < length; i++) {
//     const randomIndex = Math.floor(Math.random() * characters.length);
//     randomString += characters[randomIndex];
//   }
//   return randomString;
// }

function generateRandomStringWithNumbers(length) {
  if (length <= 0) {
    throw new Error("Ada kesalahan !");
  }

  let randomString = "";
  const characters =
    "aabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  // looping
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters[randomIndex];
  }
  return randomString;
}

// Contoh penggunaan fungsi untuk menghasilkan string acak dengan panjang 8 (huruf dan angka).
let randomString = generateRandomStringWithNumbers(8);
//submit clear
function submitClear() {
  const namaInput = document.getElementById("namaInput").value;
  const dateInput = document.getElementById("dateInput").value;
  const emailInput = document.getElementById("emailInput").value;

  const institutInput = document.getElementById("institutInput").value;

  const namaDisplay = document.getElementById("namaDisplay");
  const dateDisplay = document.getElementById("lahirDisplay");
  const emailDisplay = document.getElementById("emailDisplay");
  const institutDisplay = document.getElementById("institutDisplay");
  const gambarDisplay = document.querySelector(
    ".result .hasil-identitas .identitas-foto .foto img"
  );
  const kodeDisplay = document.getElementById("kodeDisplay");
  const resultNama = document.getElementById("result-name");

  namaDisplay.textContent = namaInput;
  dateDisplay.textContent = dateInput;
  emailDisplay.textContent = emailInput;
  institutDisplay.textContent = institutInput;
  resultNama.textContent = namaInput;
  getImgValue(); // Get and log the image name
  gambarDisplay.src = getImgValue() + ".jpg"; // Update the path to the image

  // kode random
  kodeDisplay.textContent = randomString;

  // Display the previously hidden section
  const buka = document.getElementById("buka");
  buka.style.display = "block";
}
