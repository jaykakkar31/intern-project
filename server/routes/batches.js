const express = require("express");
const { createBatch } = require("../controllers/batches");

const batchesRouter = express.Router();

batchesRouter.post("/", createBatch);

module.exports = batchesRouter;
