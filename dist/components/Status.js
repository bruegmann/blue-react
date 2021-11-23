"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Status;

var _react = _interopRequireDefault(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Status(_ref) {
  var alert = _ref.alert,
      onUnsetAlert = _ref.onUnsetAlert,
      _ref$successIcon = _ref.successIcon,
      successIcon = _ref$successIcon === void 0 ? "✔" : _ref$successIcon,
      _ref$infoIcon = _ref.infoIcon,
      infoIcon = _ref$infoIcon === void 0 ? "ℹ️" : _ref$infoIcon,
      _ref$warningIcon = _ref.warningIcon,
      warningIcon = _ref$warningIcon === void 0 ? "⚠️" : _ref$warningIcon,
      _ref$dangerIcon = _ref.dangerIcon,
      dangerIcon = _ref$dangerIcon === void 0 ? "❌" : _ref$dangerIcon,
      _ref$status = _ref.status,
      status = _ref$status === void 0 ? null : _ref$status;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx.default)("blue-status-circle blue-loading blue-status-loading", {
      "d-block": status === "loading" || alert && alert.status === "loading"
    })
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "spinner-bounce-circle"
  }, /*#__PURE__*/_react.default.createElement("div", null), /*#__PURE__*/_react.default.createElement("div", null))), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx.default)("blue-status-circle blue-status-success", {
      "d-flex": status === "success" || alert && alert.status === "success"
    })
  }, successIcon), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx.default)("blue-status-circle blue-status-info", {
      "d-flex": status === "info" || alert && alert.status === "info"
    })
  }, infoIcon), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx.default)("blue-status-circle blue-status-warning", {
      "d-flex": status === "warning" || alert && alert.status === "warning"
    })
  }, warningIcon), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx.default)("blue-status-circle blue-status-danger", {
      "d-flex": status === "danger" || alert && alert.status === "danger"
    })
  }, dangerIcon), /*#__PURE__*/_react.default.createElement("div", {
    className: "blue-status-alert alert"
  }, /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "btn-close float-end mb-1",
    "aria-label": "Close"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "alert-body"
  })), alert && /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx.default)("blue-status-alert alert d-block", alert.alertClassName, alert.status && "alert-".concat(alert.status))
  }, /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "btn-close float-end mb-1 d-inline-block",
    "aria-label": "Close",
    onClick: onUnsetAlert
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "alert-body"
  }, alert.title && /*#__PURE__*/_react.default.createElement("h2", null, alert.title), alert.detailText && /*#__PURE__*/_react.default.createElement("span", null, alert.detailText))));
}