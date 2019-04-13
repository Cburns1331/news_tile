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
            
            const aBox  = document.createElement('div')
            aBox.class  = 'card'
            aBox.style  = 'width: 18rem;' 

            const aCol  = document.createElement('div')
            aBox.class  = 'col-sm-6'

            const aCardBody  = document.createElement('div')
            aBox.class  = 'card-body'

            const title  = document.createElement('text')
            title.textContent = data.title
            title.class = "text"

            const logo  = document.createElement('img')
            logo.src    = data.url
            logo.height = 250
            logo.width  = 250
            logo.class  = 'card-img-top'

            aCol.appendChild(title)
            app.appendChild(container)
            container.appendChild(text)
            container.appendChild(card-img-top)
            aBox.appendChild(aCardBody)
            aBox.appendChild(logo)
            aCol.appendChild(aBox)
            app.appendChild(aCol)
      } else {
             console.log('error')
      }
}
request.send()
