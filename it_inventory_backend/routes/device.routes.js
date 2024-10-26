module.exports = (app) => {
    const devices = require("../controllers/device.controller.js");
    let router = require("express").Router();
  
    // Create a new Device
    router.post("/", devices.create);
  
    // Retrieve all Devices
    router.get("/", devices.findAll);
  
    // Update a Device with id
    router.put("/:id", devices.update);
  
    app.use("/api/devices", router);
  };
  