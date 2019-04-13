// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

var request = new XMLHttpRequest()

request.open('GET', 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', true)
request.onload = function() {

      // Begin accessing JSON data here
      var data = JSON.parse(this.response)

      if (request.status >= 200 && request.status < 400) {
            const app = document.getElementById('root')

            const aBox  = document.createElement('div')
            
            const title  = document.createElement('h1')
            title.textContent = data.title

            const logo  = document.createElement('img')
            logo.src    = data.url
            logo.height = 250
            logo.width  = 250

            aBox.appendChild(title)
            aBox.appendChild(logo)
            app.appendChild(aBox)
      } else {
             console.log('error')
      }
}
request.send()
