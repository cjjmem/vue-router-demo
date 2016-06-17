import { host} from '../config/main'

$.extend({
  get: function(url,data){
    return new Promise((resolve, reject) => {
      $.ajax({
        type: 'get',
        url: host.api + url,
        success:(e) => {
          resolve(e)
        },
        error:(e) => {
          reject(e)
        }
      })
    })
  },
  post: function(url,data){
    return new Promise((resolve, reject) => {

      $.ajax({
        type: 'post',
        url: host.api + url,
        data: JSON.stringify(data),
        contentType: 'application/json',
        processData: false,
        success: (e) => {
          resolve(e)
        },
        error: (e) => {
          reject(e)
        }
      })
    })
  }
})
