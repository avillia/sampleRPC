const express = require('express');

const router = express.Router();

router.get(
    '/',
    (req, res) => {
        res.send({
        "jsonrpc": "2.0",
        "result": {
          "message": "Welcome to this sampleRPC API! Here I was just testing around this pretty new concept to me.",
          "samples": [
            {"jsonrpc": "2.0", "method": "primes", "params": {"count": 100}, "id": 1},
            {"jsonrpc": "2.0", "method": "fibonacci", "params": [50], "id": 2},
            {"jsonrpc": "2.0", "method": "nbonacci", "params": {"base": 4, "minuend": 10}, "id": 3},
          ]
        },
        "id": 1,
      });
});

module.exports = router;
