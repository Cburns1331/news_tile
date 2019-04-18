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

            const container = document.createElement('div')
            container.setAttribute('class', 'container')

            app.appendChild(container); 

            const card  = document.createElement('div')
            card.setAttribute('class', 'card');

            const aText  = document.createElement('div')
            aText.textContent = data.title
            aText.class = 'card-text'

            const logo  = document.createElement('img')
            logo.src    = data.url
            logo.height = 250
            logo.width  = 250
            logo.class  = 'img'

            container.appendChild(card);
            //card.appendChild(aText);
            card.appendChild(logo);


      } else {
             console.log('error')
      }
}
request.send()
