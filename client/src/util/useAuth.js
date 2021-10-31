"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.useAuth = void 0;
var client_1 = require("@apollo/client");
var react_1 = require("react");
var isBrowswer = !!window;
var AUTH = "authorization";
var client = new client_1.ApolloClient({
    uri: window.__SERVER_API__ + "/graphql",
    credentials: "include",
    cache: new client_1.InMemoryCache()
});
var useAuth = function () {
    var _a = (0, react_1.useState)(null), error = _a[0], setError = _a[1];
    var _b = (0, react_1.useState)(null), data = _b[0], setData = _b[1];
    (0, react_1.useEffect)(function () {
        client
            .query({
            query: (0, client_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n          query GetAdmin {\n            getAdmin {\n              email\n            }\n          }\n        "], ["\n          query GetAdmin {\n            getAdmin {\n              email\n            }\n          }\n        "])))
        })
            .then(function (res) {
            setData(res.data);
            setError(null);
        })["catch"](function (e) {
            setError(e.message);
            setData(null);
        });
    });
    return {
        error: error || undefined,
        data: data || undefined
    };
};
exports.useAuth = useAuth;
var templateObject_1;
