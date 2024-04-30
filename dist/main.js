/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/canvas.ts":
/*!***********************!*\
  !*** ./src/canvas.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Canvas = /** @class */ (function () {\n    function Canvas(canvas, width, height) {\n        this.canvas = canvas;\n        this.width = width;\n        this.height = height;\n        canvas.width = width;\n        canvas.height = height;\n        this.context = canvas.getContext(\"2d\");\n    }\n    Canvas.prototype.getHtmlElement = function () {\n        return this.canvas;\n    };\n    Canvas.prototype.insertText = function (text, x, y, options) {\n        if (x === void 0) { x = this.width / 2; }\n        if (y === void 0) { y = this.height / 2; }\n        if (options === void 0) { options = {\n            fontSize: 50,\n            fontFamily: \"Arial\",\n            fontColor: \"white\",\n        }; }\n        this.context.save();\n        this.context.fillStyle = options.fontColor;\n        this.context.font = String(options.fontSize).concat(\"px\", \" \", options.fontFamily);\n        var measureText = this.context.measureText(text);\n        this.context.beginPath();\n        this.context.fillText(text, x - measureText.width / 2, y + measureText.actualBoundingBoxAscent);\n        this.context.closePath();\n        this.context.restore();\n        return measureText;\n    };\n    Canvas.prototype.clear = function () {\n        this.context.clearRect(0, 0, this.width, this.height);\n    };\n    Canvas.prototype.draw = function (drawer) {\n        drawer.draw(this.context);\n    };\n    return Canvas;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Canvas);\n\n\n//# sourceURL=webpack:///./src/canvas.ts?");

/***/ }),

/***/ "./src/controls/keyboard.ts":
/*!**********************************!*\
  !*** ./src/controls/keyboard.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar KeyboardControl = /** @class */ (function () {\n    function KeyboardControl(game) {\n        window.onkeydown = function (e) {\n            console.log(game.player.isJumping());\n            if (game.player.isJumping()) {\n                return;\n            }\n            if (e.key === \" \") {\n                game.player.jump();\n            }\n        };\n    }\n    return KeyboardControl;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KeyboardControl);\n\n\n//# sourceURL=webpack:///./src/controls/keyboard.ts?");

/***/ }),

/***/ "./src/drawers/cactus.ts":
/*!*******************************!*\
  !*** ./src/drawers/cactus.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar CactusDrawer = /** @class */ (function () {\n    function CactusDrawer(model) {\n        this.model = model;\n    }\n    CactusDrawer.prototype.draw = function (context) {\n        // CACTUSES.forEach((cactus: Cactus) => {\n        //   cactus.positionX =\n        //     cactus.positionX <= 0\n        //       ? (cactus.positionX = canvas.width + randomIntBetween(0, 1000))\n        //       : cactus.positionX - SPEED;\n        context.fillStyle = this.model.color;\n        context.beginPath();\n        context.fillRect(this.model.positionX, this.model.positionY, this.model.width, this.model.height);\n        context.fill();\n        context.closePath();\n        //   let dinoAteCactus =\n        //     DINO.positionX + DINO.width >= cactus.positionX &&\n        //     DINO.positionX + DINO.width < cactus.positionX + cactus.width &&\n        //     DINO.positionY + DINO.height >=\n        //       canvas.height - GROUND_HEIGHT - cactus.height;\n        //   let dinoSteppedOnCactus =\n        //     DINO.positionY + DINO.height >=\n        //       canvas.height - GROUND_HEIGHT - cactus.height &&\n        //     DINO.positionX + DINO.width >= cactus.positionX &&\n        //     DINO.positionX <= cactus.positionX + cactus.width;\n        //   if (dinoAteCactus || dinoSteppedOnCactus) {\n        //     GAME_OVER = true;\n        //   }\n        // });\n    };\n    return CactusDrawer;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CactusDrawer);\n\n\n//# sourceURL=webpack:///./src/drawers/cactus.ts?");

/***/ }),

/***/ "./src/drawers/dino.ts":
/*!*****************************!*\
  !*** ./src/drawers/dino.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar DinoDrawer = /** @class */ (function () {\n    function DinoDrawer(model) {\n        this.model = model;\n    }\n    DinoDrawer.prototype.draw = function (context) {\n        context.save();\n        // context.fillStyle = this.model.color;\n        context.beginPath();\n        context.rect(this.model.positionX, this.model.positionY, this.model.width, this.model.height);\n        context.closePath();\n        context.fill();\n        context.restore();\n    };\n    return DinoDrawer;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DinoDrawer);\n\n\n//# sourceURL=webpack:///./src/drawers/dino.ts?");

/***/ }),

/***/ "./src/drawers/ground.ts":
/*!*******************************!*\
  !*** ./src/drawers/ground.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar GroundDrawer = /** @class */ (function () {\n    function GroundDrawer(model) {\n        this.model = model;\n    }\n    GroundDrawer.prototype.draw = function (context) {\n        context.save();\n        context.strokeStyle = this.model.color;\n        context.beginPath();\n        context.fillRect(this.model.positionX, this.model.positionY, this.model.width, this.model.height);\n        // context.moveTo(0, canvas.height - this.model.height);\n        // context.lineTo(canvas.width, canvas.height - this.model.height);\n        context.stroke();\n        context.closePath();\n        context.restore();\n    };\n    return GroundDrawer;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GroundDrawer);\n\n\n//# sourceURL=webpack:///./src/drawers/ground.ts?");

/***/ }),

/***/ "./src/factories/cactus.ts":
/*!*********************************!*\
  !*** ./src/factories/cactus.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./src/utils.ts\");\n\nvar CactusFactory = /** @class */ (function () {\n    function CactusFactory(model, drawer) {\n        this.model = model;\n        this.drawer = drawer;\n    }\n    CactusFactory.prototype.create = function (count) {\n        var result = [];\n        for (var index = 0; index < count; index++) {\n            var model = Object.assign({}, this.model);\n            var drawer = Object.assign({}, this.drawer, { model: model });\n            Object.setPrototypeOf(model, Object.getPrototypeOf(this.model));\n            Object.setPrototypeOf(drawer, Object.getPrototypeOf(this.drawer));\n            model.positionX += index * 500 + _utils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].randomIntBetween(0, 3) * 500;\n            result.push({\n                model: model,\n                drawer: drawer,\n            });\n        }\n        return result;\n    };\n    return CactusFactory;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CactusFactory);\n\n\n//# sourceURL=webpack:///./src/factories/cactus.ts?");

/***/ }),

/***/ "./src/game-result.ts":
/*!****************************!*\
  !*** ./src/game-result.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _game_variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game-variables */ \"./src/game-variables.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\nvar GameResult = /** @class */ (function (_super) {\n    __extends(GameResult, _super);\n    function GameResult() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    GameResult.prototype.setGameOver = function (state) {\n        if (state === void 0) { state = true; }\n        this._isGameOver = state;\n    };\n    GameResult.prototype.isGameOver = function () {\n        return this._isGameOver;\n    };\n    return GameResult;\n}(_game_variables__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameResult);\n\n\n//# sourceURL=webpack:///./src/game-result.ts?");

/***/ }),

/***/ "./src/game-settings.ts":
/*!******************************!*\
  !*** ./src/game-settings.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// used outside runtime\nvar GameSettings = /** @class */ (function () {\n    function GameSettings() {\n    }\n    GameSettings.GROUND_HEIGHT = 100;\n    GameSettings.GROUND_COLOR = \"white\";\n    GameSettings.GLOBAL_GRAVITATIONAL_ACCELERATION = 0.5;\n    GameSettings.CANVAS_WIDTH = window.innerWidth;\n    GameSettings.CANVAS_HEIGHT = window.innerHeight;\n    GameSettings.PLAYER_JUMP_FORCES = 15;\n    GameSettings.PLAYER_RUNNING_SPEED = 6;\n    GameSettings.PLAYER_IMAGE_PATH = \"public/images/sprites/player.png\";\n    return GameSettings;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameSettings);\n\n\n//# sourceURL=webpack:///./src/game-settings.ts?");

/***/ }),

/***/ "./src/game-states.ts":
/*!****************************!*\
  !*** ./src/game-states.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _game_variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game-variables */ \"./src/game-variables.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\nvar GameStates = /** @class */ (function (_super) {\n    __extends(GameStates, _super);\n    function GameStates() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    GameStates.prototype.resetCurrentScores = function () {\n        this.setCurrentScores(0);\n    };\n    GameStates.prototype.setCurrentScores = function (total) {\n        this._currentScores = total;\n    };\n    GameStates.prototype.addCurrentScores = function (count) {\n        this._currentScores += count;\n        if (this._currentScores > this._highscores) {\n            this._highscores = this._currentScores;\n        }\n    };\n    GameStates.prototype.getCurrentScores = function () {\n        return this._currentScores;\n    };\n    GameStates.prototype.setHighscores = function (total) {\n        this._highscores = total;\n    };\n    GameStates.prototype.getHighscores = function () {\n        return this._highscores;\n    };\n    return GameStates;\n}(_game_variables__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameStates);\n\n\n//# sourceURL=webpack:///./src/game-states.ts?");

/***/ }),

/***/ "./src/game-variables.ts":
/*!*******************************!*\
  !*** ./src/game-variables.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// used when running the game (always change)\nvar GameVariables = /** @class */ (function () {\n    function GameVariables() {\n        this._isGameOver = false;\n        this._currentScores = 0;\n        this._highscores = 0;\n    }\n    return GameVariables;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameVariables);\n\n\n//# sourceURL=webpack:///./src/game-variables.ts?");

/***/ }),

/***/ "./src/game.ts":
/*!*********************!*\
  !*** ./src/game.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas */ \"./src/canvas.ts\");\n/* harmony import */ var _drawers_cactus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drawers/cactus */ \"./src/drawers/cactus.ts\");\n/* harmony import */ var _drawers_dino__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drawers/dino */ \"./src/drawers/dino.ts\");\n/* harmony import */ var _drawers_ground__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drawers/ground */ \"./src/drawers/ground.ts\");\n/* harmony import */ var _factories_cactus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./factories/cactus */ \"./src/factories/cactus.ts\");\n/* harmony import */ var _game_result__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game-result */ \"./src/game-result.ts\");\n/* harmony import */ var _game_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./game-settings */ \"./src/game-settings.ts\");\n/* harmony import */ var _game_states__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./game-states */ \"./src/game-states.ts\");\n/* harmony import */ var _models_cactus__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./models/cactus */ \"./src/models/cactus.ts\");\n/* harmony import */ var _models_dino__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./models/dino */ \"./src/models/dino.ts\");\n/* harmony import */ var _models_ground__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./models/ground */ \"./src/models/ground.ts\");\n\n\n\n\n\n\n\n\n\n\n\nvar Game = /** @class */ (function () {\n    function Game(canvas, width, height) {\n        var playerHeight = 100;\n        var playerWidth = 50;\n        var playerImage = new Image();\n        playerImage.src = _game_settings__WEBPACK_IMPORTED_MODULE_6__[\"default\"].PLAYER_IMAGE_PATH;\n        var cactusWidth = 20;\n        var cactusHeight = 100;\n        this.states = new _game_states__WEBPACK_IMPORTED_MODULE_7__[\"default\"]();\n        this.result = new _game_result__WEBPACK_IMPORTED_MODULE_5__[\"default\"]();\n        this.canvas = new _canvas__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas, width, height);\n        this.ground = new _models_ground__WEBPACK_IMPORTED_MODULE_10__[\"default\"](0, canvas.height - _game_settings__WEBPACK_IMPORTED_MODULE_6__[\"default\"].GROUND_HEIGHT, canvas.width, _game_settings__WEBPACK_IMPORTED_MODULE_6__[\"default\"].GROUND_HEIGHT, _game_settings__WEBPACK_IMPORTED_MODULE_6__[\"default\"].GROUND_COLOR);\n        this.groundDrawer = new _drawers_ground__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.ground);\n        var cactusModel = new _models_cactus__WEBPACK_IMPORTED_MODULE_8__[\"default\"](this.canvas.width / 2, this.canvas.height - this.ground.height - cactusHeight, cactusWidth, cactusHeight, \"white\");\n        var cactusDrawer = new _drawers_cactus__WEBPACK_IMPORTED_MODULE_1__[\"default\"](cactusModel);\n        this.player = new _models_dino__WEBPACK_IMPORTED_MODULE_9__[\"default\"](100, this.canvas.height - this.ground.height - playerHeight, playerWidth, playerHeight, playerImage);\n        this.playerDrawer = new _drawers_dino__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.player);\n        this.obstacles = new _factories_cactus__WEBPACK_IMPORTED_MODULE_4__[\"default\"](cactusModel, cactusDrawer).create(4);\n    }\n    Game.prototype.applyGravity = function (entity) {\n        entity.gravitationalAcceleration +=\n            _game_settings__WEBPACK_IMPORTED_MODULE_6__[\"default\"].GLOBAL_GRAVITATIONAL_ACCELERATION;\n        entity.positionY = Math.min(entity.positionY + entity.gravitationalAcceleration, this.canvas.height - this.ground.height - entity.height);\n        if (entity.positionY + entity.height >=\n            this.canvas.height - this.ground.height) {\n            entity.land();\n            return;\n        }\n    };\n    Game.prototype.play = function () {\n        var _this = this;\n        if (this.result.isGameOver()) {\n            this.canvas.insertText(\"Game Over\");\n            // window.cancelAnimationFrame(frameId);\n            return 0;\n        }\n        this.canvas.clear();\n        // drawScore();\n        this.applyGravity(this.player);\n        this.player.move();\n        for (var _i = 0, _a = this.obstacles; _i < _a.length; _i++) {\n            var obstacle = _a[_i];\n            obstacle.model.move();\n            this.canvas.draw(obstacle.drawer);\n        }\n        this.canvas.draw(this.playerDrawer);\n        this.canvas.draw(this.groundDrawer);\n        return window.requestAnimationFrame(function () { return _this.play(); });\n    };\n    return Game;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);\n\n\n//# sourceURL=webpack:///./src/game.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.ts\");\n/* harmony import */ var _game_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game-settings */ \"./src/game-settings.ts\");\n/* harmony import */ var _controls_keyboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controls/keyboard */ \"./src/controls/keyboard.ts\");\n\n\n\nvar canvas = document.querySelector(\"canvas\");\nif (!canvas.getContext(\"2d\")) {\n    throw new Error(\"your browser does not support this action\");\n}\nvar imageReady = {\n    dino: false,\n    cactus: false,\n};\nvar game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas, _game_settings__WEBPACK_IMPORTED_MODULE_1__[\"default\"].CANVAS_WIDTH, _game_settings__WEBPACK_IMPORTED_MODULE_1__[\"default\"].CANVAS_HEIGHT);\nnew _controls_keyboard__WEBPACK_IMPORTED_MODULE_2__[\"default\"](game);\nwindow.requestAnimationFrame(function () { return game.play(); });\n// function drawScore(increment: number = 1): void {\n//   SCORE += increment;\n//   let actualScore: number = Math.round(SCORE / 10);\n//   SCORE > HIGHSCORE && (HIGHSCORE = actualScore);\n//   let measureText = insertText(\"Score : \" + actualScore, undefined, 0);\n//   insertText(\n//     \"High Score : \" + HIGHSCORE,\n//     undefined,\n//     measureText.actualBoundingBoxAscent,\n//   );\n// }\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/models/cactus.ts":
/*!******************************!*\
  !*** ./src/models/cactus.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _game_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game-settings */ \"./src/game-settings.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ \"./src/utils.ts\");\n\n\nvar Cactus = /** @class */ (function () {\n    function Cactus(positionX, positionY, width, height, color, gravitationalAcceleration) {\n        if (gravitationalAcceleration === void 0) { gravitationalAcceleration = 0; }\n        this.positionX = positionX;\n        this.positionY = positionY;\n        this.width = width;\n        this.height = height;\n        this.color = color;\n        this.gravitationalAcceleration = gravitationalAcceleration;\n    }\n    Cactus.prototype.move = function () {\n        this.positionX -= _game_settings__WEBPACK_IMPORTED_MODULE_0__[\"default\"].PLAYER_RUNNING_SPEED;\n        if (this.positionX <= -1000) {\n            this.moveToScene();\n        }\n    };\n    Cactus.prototype.moveToScene = function () {\n        this.positionX =\n            _game_settings__WEBPACK_IMPORTED_MODULE_0__[\"default\"].CANVAS_WIDTH + 500 + _utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].randomIntBetween(0, 3) * 500;\n    };\n    return Cactus;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cactus);\n\n\n//# sourceURL=webpack:///./src/models/cactus.ts?");

/***/ }),

/***/ "./src/models/dino.ts":
/*!****************************!*\
  !*** ./src/models/dino.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _game_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game-settings */ \"./src/game-settings.ts\");\n\nvar Dino = /** @class */ (function () {\n    function Dino(positionX, positionY, width, height, image, gravitationalAcceleration) {\n        if (gravitationalAcceleration === void 0) { gravitationalAcceleration = 0; }\n        this.positionX = positionX;\n        this.positionY = positionY;\n        this.width = width;\n        this.height = height;\n        this.image = image;\n        this.gravitationalAcceleration = gravitationalAcceleration;\n        this._isJumping = false;\n        image.width = width;\n        image.height = height;\n        // Object.assign(this, player);\n        // this.positionY = canvas.height - GROUND_HEIGHT - this.height;\n        // this.positionX = 100;\n    }\n    Dino.prototype.isJumping = function () {\n        return this._isJumping;\n    };\n    Dino.prototype.jump = function () {\n        this._isJumping = true;\n        this.gravitationalAcceleration = -_game_settings__WEBPACK_IMPORTED_MODULE_0__[\"default\"].PLAYER_JUMP_FORCES;\n    };\n    Dino.prototype.move = function () {\n        // it supposed to not moving\n    };\n    Dino.prototype.land = function () {\n        this._isJumping = false;\n        this.gravitationalAcceleration = 0;\n    };\n    return Dino;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dino);\n\n\n//# sourceURL=webpack:///./src/models/dino.ts?");

/***/ }),

/***/ "./src/models/ground.ts":
/*!******************************!*\
  !*** ./src/models/ground.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Ground = /** @class */ (function () {\n    function Ground(positionX, positionY, width, height, color, gravitationalAcceleration) {\n        if (gravitationalAcceleration === void 0) { gravitationalAcceleration = 0; }\n        this.positionX = positionX;\n        this.positionY = positionY;\n        this.width = width;\n        this.height = height;\n        this.color = color;\n        this.gravitationalAcceleration = gravitationalAcceleration;\n    }\n    return Ground;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ground);\n\n\n//# sourceURL=webpack:///./src/models/ground.ts?");

/***/ }),

/***/ "./src/types.ts":
/*!**********************!*\
  !*** ./src/types.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\n\n\n//# sourceURL=webpack:///./src/types.ts?");

/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Utils = /** @class */ (function () {\n    function Utils() {\n    }\n    Utils.randomIntBetween = function (min, max) {\n        return Math.floor(Math.random() * (max - min) + min);\n    };\n    return Utils;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Utils);\n\n\n//# sourceURL=webpack:///./src/utils.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/canvas.ts");
/******/ 	__webpack_require__("./src/controls/keyboard.ts");
/******/ 	__webpack_require__("./src/drawers/cactus.ts");
/******/ 	__webpack_require__("./src/drawers/dino.ts");
/******/ 	__webpack_require__("./src/drawers/ground.ts");
/******/ 	__webpack_require__("./src/factories/cactus.ts");
/******/ 	__webpack_require__("./src/game-result.ts");
/******/ 	__webpack_require__("./src/game-settings.ts");
/******/ 	__webpack_require__("./src/game-states.ts");
/******/ 	__webpack_require__("./src/game-variables.ts");
/******/ 	__webpack_require__("./src/game.ts");
/******/ 	__webpack_require__("./src/index.ts");
/******/ 	__webpack_require__("./src/models/cactus.ts");
/******/ 	__webpack_require__("./src/models/dino.ts");
/******/ 	__webpack_require__("./src/models/ground.ts");
/******/ 	__webpack_require__("./src/types.ts");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/utils.ts");
/******/ 	
/******/ })()
;