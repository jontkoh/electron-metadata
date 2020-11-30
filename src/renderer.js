const submitListener = document
  .querySelector("form")
  .addEventListener("submit", (e) =>{
    e.preventDefault();

    const files = document.getElementById("filePicker").files;
    console.log(files);
  })