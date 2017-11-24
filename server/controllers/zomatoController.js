const axios = require('axios')

class zomatoCtrl {
  static getAddress (req, res) {
    axios.get(`http://developers.zomato.com/api/v2.1/locations?query=${req.body.place_name}`,{
      headers : {
        'user-key' : req.headers.apikey
      }
    })
    .then(response => {
      let enId = response.data.location_suggestions[0].entity_id
      let enTy = response.data.location_suggestions[0].entity_type
      axios.get(`https://developers.zomato.com/api/v2.1/location_details?entity_id=${enId}&entity_type=${enTy}`,{
        headers : {
          'user-key' : req.headers.apikey
        }
      })
      .then(responseDetail => {
        console.log(responseDetail)
        let location = response.data
        let detailLocation = responseDetail.data
        res.send({location, detailLocation})
      })
      .catch(error => {
        res.send(error)
      })
    })
    .catch(error => {
      res.send(error)
    })
  }
}
 module.exports = zomatoCtrl