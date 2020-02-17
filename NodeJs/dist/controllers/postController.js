"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var postRepository_1 = __importDefault(require("../repositories/postRepository"));
exports.postController = express_1.Router();
var checkToken = function (req, res, next) {
    var token = req.headers['authorization'];
    jsonwebtoken_1.default.verify(token, 'super-key-super-secret', function (err, data) {
        if (err) {
            res.status(400).json({ err: err });
        }
        else {
            next();
        }
    });
};
//Crear Post
exports.postController.post('/', checkToken, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, auth, save;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.body.author.id;
                auth = postRepository_1.default.findById(id);
                if (!auth) return [3 /*break*/, 2];
                return [4 /*yield*/, postRepository_1.default.savePost(req.body)];
            case 1:
                save = _a.sent();
                if (save) {
                    res.status(200).json({ save: save });
                }
                else {
                    res.status(404).json({ message: 'Error Creating new Post' });
                }
                return [3 /*break*/, 3];
            case 2:
                res.status(404).json({ message: 'Author NOT FOUND' });
                _a.label = 3;
            case 3: return [2 /*return*/];
        }
    });
}); });
//Obtener Post
exports.postController.get('/:id', checkToken, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, post;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                return [4 /*yield*/, postRepository_1.default.findById(id)];
            case 1:
                post = _a.sent();
                if (id) {
                    res.status(200).json({ post: post });
                }
                else {
                    res.status(404).json({ message: 'Author NOT FOUND' });
                }
                return [2 /*return*/];
        }
    });
}); });
//Borrar Post
exports.postController.delete('/:id', checkToken, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, post, del;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                return [4 /*yield*/, postRepository_1.default.findById(id)];
            case 1:
                post = _a.sent();
                if (!post) return [3 /*break*/, 3];
                return [4 /*yield*/, postRepository_1.default.removePost(req.body.id)];
            case 2:
                del = _a.sent();
                res.status(200).json({ del: del });
                return [3 /*break*/, 4];
            case 3:
                res.status(404).json({ message: 'Post NOT DELETED' });
                _a.label = 4;
            case 4: return [2 /*return*/];
        }
    });
}); });
//Modificar Post
exports.postController.patch('/:id', checkToken, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, post, mod;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                return [4 /*yield*/, postRepository_1.default.findById(id)
                    //console.log(post)
                ];
            case 1:
                post = _a.sent();
                if (!post) return [3 /*break*/, 3];
                return [4 /*yield*/, postRepository_1.default.modifyPost(id, req.body)
                    //console.log(mod)
                ];
            case 2:
                mod = _a.sent();
                //console.log(mod)
                if (mod) {
                    res.status(200).json({ message: 'Post Modifyed' });
                }
                else
                    res.status(200).json({ message: 'Post NOT MODIFYED' });
                return [3 /*break*/, 4];
            case 3:
                res.status(404).json({ message: 'Post NOT FOUND' });
                _a.label = 4;
            case 4: return [2 /*return*/];
        }
    });
}); });
//Crear comentario
exports.postController.post('/:id/comment', checkToken, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, post, com;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                return [4 /*yield*/, postRepository_1.default.findById(id)];
            case 1:
                post = (_a.sent());
                //Se obtiene todo el post y se castea con una interfaz
                if (post) {
                    com = req.body.comments;
                    //Accedo a los comentarios
                    post.comments.push(com);
                    //Concatena al post el comentario
                    post.totalComments = post.totalComments + 1;
                    //Incrementa el total
                    post.save();
                    res.status(200).json({ post: post });
                }
                else {
                    res.status(404).json({ message: 'Post NOT FOUND' });
                }
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=postController.js.map