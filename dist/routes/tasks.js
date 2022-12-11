"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _tasks = require("../controllers/tasks");
var router = (0, _express.Router)();

//users routes
/**
 * @swagger
 * tags: 
 *      name: Users
 *      description: Users routes
 */

/**
 * @swagger
 * /users:
 *  get:
 *      summary: Get all users
 *      tags: [Users]
 */
router.get("/users/", _tasks.getUsers);

/**
 * @swagger
 * /users/:id:
 *  get:
 *      summary: Get a user by id
 *      tags: [Users]
 */
router.get("/users/:id", _tasks.getUser);

/**
 * @swagger
 * /users:
 *  post:
 *      summary: Create a user
 *      tags: [Users]
 */
router.post("/users", _tasks.createUser);

/**
 * @swagger
 * /users/:id:
 *  put:
 *      summary: Update a user by id
 *      tags: [Users]
 */
router.put("/users/:id", _tasks.updateUser);

/**
 * @swagger
 * /users/id:
 *  delete:
 *      summary: Delete a task by id
 *      tags: [Users]
 */
router["delete"]("/users/:id", _tasks.deleteUser);

//sensors routes

//actuators routes
var _default = router;
exports["default"] = _default;