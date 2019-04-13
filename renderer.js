// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

var request = new XMLHttpRequest()

request.open('GET', 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', true)
request.onload = function() {

      // Begin accessing JSON data here
      var data = JSON.parse(this.response)
      const h1 = document.createElement('h1')

      if (request.status >= 200 && request.status < 400) {
            h1.textContent = response.url
      } else {
            h1.textContent = "please"
      }
      request.send()
}
