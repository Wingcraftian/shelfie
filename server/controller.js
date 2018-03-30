// const express = require("express");
// const axios = require("axios");
// const app = express();

module.exports = {
    create: (req,res,next) => {
        const dbInstance = rep.app.get('db');
        const {product_name, price, image_url} = req.body;

        dbInstance.create_product([product_name,price,image_url])
        .then( () =>res.status(200).send())
        .catch( () =>res.status(500).send());

    },
    getAll: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
    
        dbInstance.read_products()
          .then( products => res.status(200).send( products ) )
          .catch( () => res.status(500).send() );
    }
    
}