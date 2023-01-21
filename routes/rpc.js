const express = require('express');
const { body, validationResult} = require('express-validator');

const fibonacci = require("../models/fibonacci")
const nbonacci = require("../models/nbonnaci.js");
const primes = require("../models/primes.js")

const router = express.Router();

const processErrors = (req, res, id) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(
            {
                jsonrpc: "2.0",
                errors: errors.array(),
                id: id,
            }
        );
    }
}

function sendNotification(res, methodName) {
    return res.status(201).json({jsonrpc: "2.0", method: methodName});
}

const modelMap = new Map();
modelMap.set("fibonacci", fibonacci);
modelMap.set("n-bonacci", nbonacci);

modelMap.set("primes", primes);

router.post(
    '/',
    body("jsonrpc").equals("2.0"),
    body("method").isIn([...modelMap.keys()]),
    body("params").isLength({"min": 1, "max":2}),
    body("id").isInt(),
    (req, res) => {
        let id = req.body.id;
        let methodName = req.body.method;
        let params = req.body.params;

        if (!id) sendNotification(methodName);

        processErrors(req, res, id);

        let method = modelMap.get(methodName);

        let base, count;
        if (Array.isArray(params)) {
            [base, count] = params;
        } else {
            base = params.base;
            count = params.count;
        }

        let result = method(count, base);

        res.status(200).json(
            {
                jsonrpc: 2.0,
                result: result,
                id: id
            }
        );
});

module.exports = router;
