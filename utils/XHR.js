export default function XHR(type, domain, data, callback) {

    let xhr = new XMLHttpRequest(),
        text = (type === 'meteo') ? data : new URLSearchParams(data).toString(),
        url = domain + text

    xhr.open('GET', url, true);
    xhr.onload = () => {

        let response = xhr.response

        if (isJson(response)) {

            let json = (type === 'meteo') ? JSON.parse(response.data).data : JSON.parse(response)
            callback(json)

        } else {

            console.log('Mauvais format de réception...')
        }
    }
    xhr.send();
}

function isJson(str) {

    try {

        let json = JSON.parse(str)
        return true

    } catch (e) {

        return false
    }
}