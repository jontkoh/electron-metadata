const { ipcRenderer } = require('electron');

const submitListener = document
  .querySelector("form")
  .addEventListener("submit", (e) =>{
    e.preventDefault();

    const files = [...document.getElementById("filePicker").files];

    const filesFormatted = files.map(({name, path: pathName}) => ({
      name, pathName
    }))
    console.log(files)
    console.log(filesFormatted)

    //sending data to main process
    ipcRenderer.send("files", filesFormatted);
  })

  //metatdata from the main process
  ipcRenderer.on("metadata", (e, metadata) => {
    const pre = document.getElementById("data");

    pre.innerText = JSON.stringify(metadata, null, 2);
  })

  // error event from catch block in main process
  ipcRenderer.on("metadata:error", (e, error) => {
    console.error(error);
  })