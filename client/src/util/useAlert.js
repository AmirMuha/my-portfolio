"use strict";
exports.__esModule = true;
exports.useAlert = void 0;
var react_1 = require("react");
var useAlert = function () {
    var _a = (0, react_1.useState)(false), isOpen = _a[0], setIsOpen = _a[1];
    var _b = (0, react_1.useState)(""), message = _b[0], setMessage = _b[1];
    var _c = (0, react_1.useState)(""), title = _c[0], setTitle = _c[1];
    var setAlert = function (obj) {
        if (obj.isOpen !== undefined) {
            setIsOpen(obj.isOpen);
        }
        if (obj.title) {
            setTitle(obj.title);
        }
        if (obj.message) {
            setMessage(obj.message);
        }
    };
    return {
        isOpen: isOpen,
        message: message,
        title: title,
        setAlert: setAlert
    };
};
exports.useAlert = useAlert;
