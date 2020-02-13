"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var commentsShcema = new mongoose_1.default.Schema({
    _id: {
        type: String
    },
    comment: {
        type: String
    },
    author: {
        id: {
            type: String
        },
        email: {
            type: String
        },
        password: {
            type: String
        }
    },
    date: {
        type: String
    }
});
var Comment = mongoose_1.default.model('Comments', commentsShcema);
exports.default = Comment;
//# sourceMappingURL=comment.js.map