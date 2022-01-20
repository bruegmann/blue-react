"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Utilities = require("./Utilities.js");

var _Utilities2 = _interopRequireDefault(_Utilities);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function collapseSection(element) {
    /* Source of these functions: https://css-tricks.com/using-css-transitions-auto-dimensions/ */
    var sectionHeight = element.scrollHeight;
    var elementTransition = element.style.transition;
    element.style.transition = '';

    requestAnimationFrame(function () {
        element.style.height = sectionHeight + 'px';
        element.style.transition = elementTransition;
        requestAnimationFrame(function () {
            element.style.height = 84 + 'px';
        });
    });
    element.setAttribute('data-collapsed', 'true');
}

function expandSection(element) {
    var sectionHeight = element.scrollHeight;
    element.style.height = sectionHeight + 'px';

    var fun = function fun(e) {
        element.removeEventListener('transitionend', fun);
        element.style.height = null;
    };
    element.addEventListener('transitionend', fun);
    element.setAttribute('data-collapsed', 'false');
}

/**
 * The new actions menu, better optimized for mobile devices.<br>
 * <strong>Important:</strong> If you use <code>&lt;Actions /&gt;</code> on a page, make sure also to set <strong>hasActions</strong> prop from
 * <strong>Page</strong> component to <code>true</code>.
 */

var Actions = function (_React$Component) {
    _inherits(Actions, _React$Component);

    function Actions(props) {
        _classCallCheck(this, Actions);

        var _this = _possibleConstructorReturn(this, (Actions.__proto__ || Object.getPrototypeOf(Actions)).call(this, props));

        _this.state = {
            open: props.open
        };

        _this.id = "Actions-" + _Utilities2.default.guid();

        _this.toggle = _this.toggle.bind(_this);
        return _this;
    }

    _createClass(Actions, [{
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps) {
            if (prevProps.open !== this.props.open) {
                this.setState({ open: this.props.open });
            }
        }
    }, {
        key: "toggle",
        value: function toggle() {
            var open = !this.state.open;
            var element = document.getElementById(this.id);

            // expandSection(element);

            this.setState({ open: open }, function () {
                if (open) {
                    expandSection(element);
                } else {
                    collapseSection(element);
                }
            });

            if (this.props.onToggle) {
                this.props.onToggle(open);
            }
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                {
                    id: this.id,
                    className: "blue-actions " + this.props.className + " " + (this.state.open ? "open" : "closed") + (" break-" + this.props.break)
                },
                _react2.default.createElement("div", { className: "blue-actions-indicator d-" + this.props.break + "-none", onClick: this.toggle }),
                _react2.default.createElement(
                    "div",
                    { className: "blue-actions-controls" },
                    this.props.children
                ),
                _react2.default.createElement(
                    "div",
                    { className: "blue-actions-featured d-" + this.props.break + "-none" },
                    _react2.default.createElement(
                        "div",
                        { className: "fluent-btn" },
                        _react2.default.createElement("div", { className: "fluent-btn-ball" }),
                        this.props.featured
                    )
                )
            );
        }
    }], [{
        key: "defaultProps",
        get: function get() {
            return {
                className: "",
                open: false,
                break: "md"
            };
        }
    }]);

    return Actions;
}(_react2.default.Component);

Actions.propTypes = {
    /**
     * Content that will appear on the menu when it's expanded.
     */
    children: _propTypes2.default.any,

    /**
     * Extends the <code>className</code> of <code>.blue-actions</code>.
     */
    className: _propTypes2.default.string,

    /**
     * Content that will appear when the menu is shrunken.
     */
    featured: _propTypes2.default.any,
    open: _propTypes2.default.bool,

    /**
     * Will fire when the state of <code>open</code> will change inside of the component.<br>
     * <strong>Example:</strong> <code>onToggle={open => this.setState({ open })}</code>
     */
    onToggle: _propTypes2.default.func,

    /**
     * <code>sm</code>, <code>md</code>, <code>lg</code> or <code>xl</code>
     */
    break: _propTypes2.default.string
};

exports.default = Actions;