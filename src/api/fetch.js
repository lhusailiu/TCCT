import {baseUrl} from './baseUrl'

export default async (url = '', data = {}, type = 'GET', methods = 'fetch') => {
    type = type.toUpperCase()
    url = baseUrl + url
    if (type === 'GET') {
      let dataStr = ''
      // Object.key(data).forEach((key) => {
      //   dataStr += key + '=' + data[key] + '&'
      // })
      for (let key in data) {
        dataStr += key + '=' + data[key] + '&'
      }
      if (dataStr !== '') {
        dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
    }
    if (window.fetch && methods === 'fetch') {
      let requestConfig = {
        crdentials: 'include',
        methods: type,
        headers: {
        }
      }
      if (type === 'POST') {
        Object.defineProperty(requestConfig, 'body', {
          value: JSON.stringify(data)
        })
      }
      try {
        const response = await fetch(url, requestConfig)
        const resJsonponse = await response.json()
        return resJsonponse
      } catch (error) {
        throw new Error(error)
      }
    } else {
      return new Promise((resolve, reject) => {
        let xhr
        if (window.XMLHttpRequest) {
          xhr = new XMLHttpRequest()
        }
        // } else {
        //   xhr = new ActiveXObject('Microsoft.XMLHTTP')
        // }
        let sendData = ''
        if (type === 'POST') {
          sendData = JSON.stringify(data)
        }
        xhr.open(url, type, true)
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
        xhr.send(sendData)
        xhr.onreadystatechange = () => {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              let obj = xhr.response
              if (typeof obj !== 'object') {
                obj = JSON.parse(obj)
              }
              resolve(obj)
            } else {
              reject(xhr)
            }
          }
        }
      })
    }
}
