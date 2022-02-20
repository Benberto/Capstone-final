const express = require('express');
const router = express.Router();
const fetch = require('cross-fetch');

router.get('/:gamertag/:platform', async (req, res) => {
  try{
      const headers = {
          'x-rapidapi-host': 'call-of-duty-modern-warfare.p.rapidapi.com',
          'x-rapidapi-key': process.env.WARZONE_API_KEY
      }
      console.log('hit')
      const{platform, gamertag} = req.params;

      const responses = await fetch(`${process.env.WARZONE_API_URL}/${gamertag}/${platform}`,{
          headers
      });

      const data = await responses.json();

      if (data.errors && data.errors.length > 0){
          return res.status(404).json({
              message: 'Player Not Found'
          })
      }
      console.log(data)
      res.json(data);
  }catch(err){
      console.error(err);
      res.status(500).json({
          message:'Server Error'
      });
  }

});

module.exports = router;