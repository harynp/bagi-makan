const axios = require('axios')

class Zomato {
  static getLocation(req,res) {
    axios.get({
      baseURL: `https://developers.zomato.com/api/v2.1/search?`,
      timeout: 1000,
      headers: {'user-key': '35c92fe1e8886f047876df1702db4d26'}
    })
      .then(function (response) {
        console.log(response);
        // res.status(200).send(response)
      })
      .catch(function (error) {
        console.log(error);
        // res.status(500).send(error)
      });
  }

  // static getSearch () {
  //
  // }
}

module.exports = Zomato
