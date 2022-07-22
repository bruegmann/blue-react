"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Router;
exports.useMatch = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useMatch = function useMatch() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _Object$assign = Object.assign({
    decodeParams: true
  }, options),
      decodeParams = _Object$assign.decodeParams;

  var getMatch = function getMatch() {
    var match = window.location.hash.replace("#", "").split("/").filter(function (n) {
      return n !== "";
    });

    if (decodeParams === true) {
      match = match.map(function (n) {
        return decodeURIComponent(n);
      });
    }

    return match;
  };

  var _useState = (0, _react.useState)(getMatch),
      _useState2 = _slicedToArray(_useState, 2),
      match = _useState2[0],
      setMatch = _useState2[1];

  var hashChangeHandler = (0, _react.useCallback)(function () {
    setMatch(getMatch());
  }, []);
  (0, _react.useEffect)(function () {
    window.addEventListener("hashchange", hashChangeHandler);
    return function () {
      window.removeEventListener("hashchange", hashChangeHandler);
    };
  }, []);
  return match;
};

exports.useMatch = useMatch;

/**
 * A relatively simple Router System based on hash URLs. If you need something more advanced, you should use
 * something like [React Router](https://github.com/remix-run/react-router#readme) or [Wouter](https://github.com/molefrog/wouter#readme).
 *
 * ## `useMatch` hook
 * Use the hook inside of a React Functional Component to get easy access to hash params. The function returns an array of current params.
 * ### Example
 * ```javascript
 * const [routeName, param2] = useMatch()
 *
 * useEffect(() => {
 *     console.log("Do something with " + param2)
 * }, [param2])
 * ```
 * The function returns an array of current hash params.
 *
 * ### Options
 * You can pass options like this: `useMatch({ decodeParams: false })`
 * * `decodeParams` - Run `decodeURIComponent` for each param value. - Default: `true`
 */
function Router(_ref) {
  var _ref$defaultRouteName = _ref.defaultRouteName,
      defaultRouteName = _ref$defaultRouteName === void 0 ? "home" : _ref$defaultRouteName,
      routes = _ref.routes;
  var match = useMatch();

  var _useState3 = (0, _react.useState)([match]),
      _useState4 = _slicedToArray(_useState3, 2),
      history = _useState4[0],
      setHistory = _useState4[1];

  var _history = _slicedToArray(history[history.length - 1], 1),
      activeRouteName = _history[0];

  (0, _react.useEffect)(function () {
    if (match.length > 0) {
      setHistory([].concat(_toConsumableArray(history), [match]));
    } else {
      setHistory([].concat(_toConsumableArray(history), [[defaultRouteName]]));
    }
  }, [match]);
  (0, _react.useEffect)(function () {
    console.log(activeRouteName);
  }, [activeRouteName]);
  return /*#__PURE__*/_react.default.createElement("div", null, routes.map(function (route) {
    return history.map(function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 1),
          pageName = _ref3[0];

      return pageName;
    }).includes(route.name) && /*#__PURE__*/_react.default.createElement("div", {
      key: route.name,
      className: "router-page " + (activeRouteName === route.name ? "active" : "")
    }, route.component);
  }));
}