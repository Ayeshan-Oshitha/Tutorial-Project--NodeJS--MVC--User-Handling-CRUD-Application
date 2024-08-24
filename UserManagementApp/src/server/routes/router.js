const express = require('express');
const route = express.Router();

const services = require('../services/render');

/**
 * @description RootRoute
 * @method GET
 */
route.get('/', services.homeRoutes)

/**
 * @description add users
 * @method GET/add-user
 */
route.get('/add_user', services.add_user)

/**
 * @description for update user
 * @method GET/update-user
 */
route.get('/update_user', services.update_user)

module.exports = route