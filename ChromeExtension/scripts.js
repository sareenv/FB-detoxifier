
const postData = []
let startDetecting = false

function detectPosts() {
    const posts = document.getElementsByTagName('p')
    for(post of posts) {
        if(postData.indexOf(post.innerText) < 0){
            postData.push(post.innerText)
        }
    }
}
  
window.addEventListener('scroll', (event) => {
    if(startDetecting === true) {
        detectPosts()
        gotMessage('sendData')
    }
})


detectPosts()
chrome.runtime.onMessage.addListener(gotMessage)

function processInformation(data) {
    const posts = document.getElementsByTagName('p')
    for(p of posts) {
        if(p.innerText == data.sentence) {
            console.log(data.analysis.analysis)
            if(data.analysis.analysis === 'Negative') {
                p.style.border = 'thick solid red'
            }else if(data.analysis.analysis === 'Neutral') {
                p.style.border = 'thick solid yellow'
            }
            else{
                p.style.border = 'thick solid green'
            }
            
        }
    }
}


function gotMessage(message) {
    if(message == 'sendData') {
        startDetecting = true
        const url = 'http://localhost:8080/checkProfanity'
        const data = JSON.stringify({'posts': postData})
        console.log(data)
        const request_config = {method: 'POST', body: data, headers: {'Accept': 'application/json', 'content-type': 'application/json'}}
        fetch(url, request_config)
        .then(
            response => response.json()
        ).then((response) => {
            for (r of response) {
                processInformation(r)
            }
        })
        .catch((error) => {
            console.log(error.message)
        })
    }
}
