"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Utilities = require("./Utilities");

var _Utilities2 = _interopRequireDefault(_Utilities);

var _MenuItem = require("./MenuItem");

var _MenuItem2 = _interopRequireDefault(_MenuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Eine Suchleiste, die zur Seitenleiste hinzugefügt werden kann.
 */
var Search = function (_React$Component) {
    _inherits(Search, _React$Component);

    function Search() {
        _classCallCheck(this, Search);

        var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this));

        _this.state = {
            value: "",
            focus: false
        };

        _this.SearchControlId = "blue-app-search-control-" + _Utilities2.default.guid();
        return _this;
    }

    _createClass(Search, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            this.setState({ value: this.props.value });
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps) {
            if (prevProps.value !== this.props.value) {
                this.componentWillMount();
            }
        }
    }, {
        key: "toggleSidebar",
        value: function toggleSidebar() {
            if (this.props.sidebar) {
                document.dispatchEvent(window.toggleSidebarEvent);
            }
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                "form",
                {
                    className: "blue-app-search " + (this.props.body ? "blue-app-search-body " : "") + (this.state.focus ? "focus" : ""),
                    onSubmit: function onSubmit(event) {
                        event.preventDefault();
                        _this2.toggleSidebar();
                        _this2.props.onSubmit(event);
                    }
                },
                _react2.default.createElement(
                    "div",
                    { className: "blue-app-search-input-group input-group" },
                    _react2.default.createElement(
                        "div",
                        {
                            className: "input-group-prepend",
                            onClick: function onClick() {
                                return document.getElementById(_this2.SearchControlId).focus();
                            }
                        },
                        _react2.default.createElement(
                            "span",
                            { className: "input-group-text" },
                            _react2.default.createElement("span", { className: "bi-magnifying_glass" })
                        )
                    ),
                    _react2.default.createElement("input", {
                        type: "search",
                        value: this.state.value,
                        onChange: function onChange(event) {
                            _this2.setState({ value: event.target.value });
                            _this2.props.onChange(event);
                        },
                        id: this.SearchControlId,
                        className: "blue-app-search-control form-control default input-lg",
                        placeholder: this.props.placeholder,
                        autoFocus: this.props.autoFocus,
                        style: {
                            zIndex: this.props.body ? "0" : ""
                        },
                        onFocus: function onFocus() {
                            return _this2.setState({ focus: true });
                        },
                        onBlur: function onBlur() {
                            return _this2.setState({ focus: false });
                        }
                    }),
                    this.props.reset && this.state.value.length > 0 && _react2.default.createElement(
                        "div",
                        { className: "input-group-btn" },
                        _react2.default.createElement(
                            "button",
                            {
                                type: "button",
                                className: "blue-app-search-reset-btn btn btn-link btn-lg",
                                onClick: function onClick() {
                                    _this2.setState({ value: "" }, function () {
                                        document.getElementById(_this2.SearchControlId).focus();
                                    });
                                    _this2.props.onChange({
                                        target: {
                                            value: ""
                                        }
                                    });
                                }
                            },
                            _react2.default.createElement("span", { className: "bi-navigate_cross" })
                        )
                    )
                ),
                this.props.sidebar && _react2.default.createElement(_MenuItem2.default, {
                    href: "javascript:void(0)",
                    className: "blue-app-search-btn",
                    icon: "bi-magnifying_glass blue-app-search-btn-icon",
                    onClick: function onClick() {
                        _this2.toggleSidebar();
                        setTimeout(function () {
                            document.querySelector(".blue-app-search-control").select();
                        }, 200);
                    }
                })
            );
        }
    }], [{
        key: "defaultProps",
        get: function get() {
            return {
                sidebar: false,
                body: false,
                reset: false,
                value: "",
                onChange: function onChange(event) {},
                onSubmit: function onSubmit(event) {},
                placeholder: "",
                autoFocus: false
            };
        }
    }]);

    return Search;
}(_react2.default.Component);

Search.propTypes = {
    /**
     * Wird Komponente in der Sidebar genutzt?
     */
    sidebar: _propTypes2.default.bool,

    /**
     * Wird Komponente im Body genutzt?
     */
    body: _propTypes2.default.bool,

    /**
     * Erlaube Zurücksetzen?
     */
    reset: _propTypes2.default.bool,

    value: _propTypes2.default.string,
    onChange: _propTypes2.default.func,
    onSubmit: _propTypes2.default.func,
    placeholder: _propTypes2.default.string,
    autoFocus: _propTypes2.default.bool
};

exports.default = Search;