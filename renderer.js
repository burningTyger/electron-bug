// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const fs = require('fs')

onload = () => {
  const webview = document.querySelector('webview')

  const loadstop = () => {
    console.log(webview)
    webview.printToPDF({}, (error, data) => {
      console.log(data, error)
      if (error) throw error
      fs.writeFile('output.pdf', data, error => {
        if (error) throw error
      })
    })
  }

  webview.addEventListener('did-stop-loading', loadstop)
}
