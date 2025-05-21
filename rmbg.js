const imageUpload = document.getElementById('imageUpload');
const originalImage = document.getElementById('originalImage');
const processedImage = document.getElementById('processedImage');
const downloadBtn = document.getElementById('downloadBtn');
const loader = document.getElementById('loader');
const dropArea = document.getElementById('dropArea');
// const darkModeToggle = document.getElementById('darkMode');
const darkModeBtn = document.getElementById('darkModeBtn');

// // 🌙 Toggle Dark Mode
// darkModeToggle.addEventListener('change', () => {
//   document.body.classList.toggle('dark');
// });

let isDark = false;

darkModeBtn.addEventListener('click', () => {
  isDark = !isDark;
  document.body.classList.toggle('dark', isDark);
  darkModeBtn.textContent = isDark ? '☀️ Disable Dark Mode' : '🌙 Enable Dark Mode';
});

// 📤 Upload Preview
imageUpload.addEventListener('change', function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (event) {
      originalImage.src = event.target.result;
      processedImage.src = "";
      downloadBtn.style.display = "none";
    };
    reader.readAsDataURL(file);
  }
});

// 🧲 Drag & Drop
['dragover', 'dragenter'].forEach(evt =>
  dropArea.addEventListener(evt, e => {
    e.preventDefault();
    dropArea.classList.add('highlight');
  })
);

['dragleave', 'drop'].forEach(evt =>
  dropArea.addEventListener(evt, e => {
    e.preventDefault();
    dropArea.classList.remove('highlight');
  })
);

dropArea.addEventListener('drop', e => {
  const file = e.dataTransfer.files[0];
  if (file) {
    imageUpload.files = e.dataTransfer.files;
    const reader = new FileReader();
    reader.onload = function (event) {
      originalImage.src = event.target.result;
      processedImage.src = "";
      downloadBtn.style.display = "none";
    };
    reader.readAsDataURL(file);
  }
});

// 🧠 Background Remover (uses remove.bg API - insert your API key)
function removeBackground() {
  const file = imageUpload.files[0];
  if (!file) {
    alert("Please upload an image first.");
    return;
  }

  loader.style.display = 'block';

  const formData = new FormData();
  formData.append("image_file", file);
  formData.append("size", "auto");

  fetch("https://api.remove.bg/v1.0/removebg", {
    method: "POST",
    headers: {
      "X-Api-Key": "tteEqiSmYHb2vFoD7pKVPAm7" // ⚠️ Replace with your actual API key
    },
    body: formData
  })
    .then(res => {
      if (!res.ok) throw new Error("Background removal failed");
      return res.blob();
    })
    .then(blob => {
      const url = URL.createObjectURL(blob);
      processedImage.src = url;
      downloadBtn.href = url;
      downloadBtn.style.display = "inline-block";
    })
    .catch(err => {
      alert("Error: " + err.message);
    })
    .finally(() => {
      loader.style.display = 'none';
    });
}
