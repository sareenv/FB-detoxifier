
const sendButton = document.getElementById('sendButton')
const phoneNumberInput = document.getElementById('phoneNumber')

sendButton.addEventListener('click', () => {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, tabs => {
        chrome.tabs.sendMessage(tabs[0].id, 'sendData')
    })
})
