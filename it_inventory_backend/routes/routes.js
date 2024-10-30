// // routes.js
// const express = require('express');
// const router = express.Router();

// const deputyController = require('../controllers/deputyController');
// const directorateController = require('../controllers/directorateController');
// const departmentController = require('../controllers/departmentController');
// const employeeController = require('../controllers/employeeController');
// const categoryController = require('../controllers/Category');
// const deviceTypeController = require('../controllers/deviceTypeController');
// const deviceSpecificationsController = require('../controllers/deviceSpecificationsController');
// const productController = require('../controllers/productController');
// const stockController = require('../controllers/stockController');
// const employeeDeviceController = require('../controllers/employeeDeviceController');

// // Deputy routes
// // Deputy routes
// router.post('/deputies', deputyController.create);
// router.get('/deputies', deputyController.findAll);
// router.get('/deputies/:id', deputyController.findOne);
// router.put('/deputies/:id', deputyController.update);
// router.delete('/deputies/:id', deputyController.delete);

// // Directorate routes
// router.post('/api/directorates', directorateController.create);
// router.get('/api/directorates', directorateController.findAll);
// router.get('/api/directorates/:id', directorateController.findOne);
// router.put('/api/directorates/:id', directorateController.update);
// router.delete('/api/directorates/:id', directorateController.delete);

// // Department routes
// router.post('/api/departments', departmentController.create);
// router.get('/api/departments', departmentController.findAll);
// router.get('/api/departments/:id', departmentController.findOne);
// router.put('/api/departments/:id', departmentController.update);
// router.delete('/api/departments/:id', departmentController.delete);

// // Employee routes
// router.post('/api/employees', employeeController.create);
// router.get('/api/employees', employeeController.findAll);
// router.get('/api/employees/:id', employeeController.findOne);
// router.put('/api/employees/:id', employeeController.update);
// router.delete('/api/employees/:id', employeeController.delete);

// // Category routes
// router.post('/api/categories', categoryController.create);
// router.get('/api/categories', categoryController.findAll);
// router.get('/api/categories/:id', categoryController.findOne);
// router.put('/api/categories/:id', categoryController.update);
// router.delete('/api/categories/:id', categoryController.delete);

// // DeviceType routes
// router.post('/api/device-types', deviceTypeController.create);
// router.get('/api/device-types', deviceTypeController.findAll);
// router.get('/api/device-types/:id', deviceTypeController.findOne);
// router.put('/api/device-types/:id', deviceTypeController.update);
// router.delete('/api/device-types/:id', deviceTypeController.delete);

// // DeviceSpecifications routes
// router.post('/api/device-specs', deviceSpecificationsController.create);
// router.get('/api/device-specs', deviceSpecificationsController.findAll);
// router.get('/api/device-specs/:id', deviceSpecificationsController.findOne);
// router.put('/api/device-specs/:id', deviceSpecificationsController.update);
// router.delete('/api/device-specs/:id', deviceSpecificationsController.delete);

// // Product routes
// router.post('/api/products', productController.create);
// router.get('/api/products', productController.findAll);
// router.get('/api/products/:id', productController.findOne);
// router.put('/api/products/:id', productController.update);
// router.delete('/api/products/:id', productController.delete);

// // Stock routes
// router.post('/api/stocks', stockController.create);
// router.get('/api/stocks', stockController.findAll);
// router.get('/api/stocks/:id', stockController.findOne);
// router.put('/api/stocks/:id', stockController.update);
// router.delete('/api/stocks/:id', stockController.delete);

// // Employee_Device routes
// router.post('/api/employee-devices', employeeDeviceController.create);
// router.get('/api/employee-devices', employeeDeviceController.findAll);
// router.get('/api/employee-devices/:id', employeeDeviceController.findOne);
// router.put('/api/employee-devices/:id', employeeDeviceController.update);
// router.delete('/api/employee-devices/:id', employeeDeviceController.delete);

// module.exports = router;





// routes.js
const express = require('express');
const router = express.Router();
const deputyController = require('../controllers/deputyController');

router.post('/deputies', deputyController.create); // No `/api` prefix here
router.get('/deputies', deputyController.findAll);

module.exports = router;
