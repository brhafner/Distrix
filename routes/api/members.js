const express = require("express");
const router = express.Router();
const fetch = require('node-fetch');

router.get("/test", (req, res) => res.json({
    msg: "This is the members route"
}));


router.get("/info", (request, response) => {
    queryString = `http://whoismyrepresentative.com/getall_reps_byname.php?name=${request.body.rep}&output=json`
    fetch(queryString)
        .then(
            (response) => response.text(),
            (error) => console.log(error))
        .then(
            (body) => {
                let results = JSON.parse(body)
                response.send(results)
            },
            (error) => console.log(error));
});

router.get("/cainfo", (request, response) => {
        fetch(`https://whoismyrepresentative.com/getall_reps_bystate.php?state=CA&output=json`)
        // .then((apiObj) => response.send(apiObj))
        //     .catch((error) => console.log(error))
        .then(
            (response) => response.text(),
            (error) => console.log(error))
        .then(
            (body) => {
                let results = JSON.parse(body)
                response.send(results)
            },
            (error) => console.log(error));
});

module.exports = router;
