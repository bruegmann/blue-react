"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Utilities = _interopRequireDefault(require("./Utilities"));

var _MenuItem = _interopRequireDefault(require("./MenuItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * Eine Suchleiste, die zur Seitenleiste hinzugefügt werden kann.
 */
var Search = /*#__PURE__*/function (_React$Component) {
  _inherits(Search, _React$Component);

  var _super = _createSuper(Search);

  function Search() {
    var _this;

    _classCallCheck(this, Search);

    _this = _super.call(this);
    _this.state = {
      value: "",
      focus: false
    };
    _this.SearchControlId = "blue-app-search-control-" + _Utilities.default.guid();
    return _this;
  }

  _createClass(Search, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.value !== this.props.value) {
        this.setState({
          value: this.props.value
        });
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

      return /*#__PURE__*/_react.default.createElement("form", {
        className: "blue-app-search " + (this.props.body ? "blue-app-search-body " : "") + (this.state.focus ? "focus " : "") + this.props.className,
        onSubmit: function onSubmit(event) {
          event.preventDefault();

          _this2.toggleSidebar();

          _this2.props.onSubmit(event);
        }
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "blue-app-search-input-group input-group"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "input-group-prepend",
        onClick: function onClick() {
          return document.getElementById(_this2.SearchControlId).focus();
        }
      }, /*#__PURE__*/_react.default.createElement("span", {
        className: "input-group-text"
      }, this.props.icon)), /*#__PURE__*/_react.default.createElement("input", {
        type: "search",
        value: this.state.value,
        onChange: function onChange(event) {
          _this2.setState({
            value: event.target.value
          });

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
          return _this2.setState({
            focus: true
          });
        },
        onBlur: function onBlur() {
          return _this2.setState({
            focus: false
          });
        }
      }), this.props.reset && this.state.value.length > 0 && /*#__PURE__*/_react.default.createElement("div", {
        className: "input-group-btn"
      }, /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        className: "blue-app-search-reset-btn btn btn-link btn-lg",
        onClick: function onClick() {
          _this2.setState({
            value: ""
          }, function () {
            document.getElementById(_this2.SearchControlId).focus();
          });

          _this2.props.onChange({
            target: {
              value: ""
            }
          });
        }
      }, /*#__PURE__*/_react.default.createElement("span", {
        className: "bi-navigate_cross"
      })))), this.props.sidebar && /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
        href: "#",
        className: "blue-app-search-btn",
        icon: this.props.icon,
        onClick: function onClick(event) {
          event.preventDefault();

          _this2.toggleSidebar();

          setTimeout(function () {
            document.querySelector(".blue-app-search-control").select();
          }, 200);
        }
      }));
    }
  }], [{
    key: "defaultProps",
    get: function get() {
      return {
        autoFocus: false,
        body: false,
        className: "",
        icon: /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("svg", {
          width: "1em",
          height: "1em",
          viewBox: "0 0 16 16",
          className: "bi bi-search mt-n1",
          fill: "currentColor",
          xmlns: "http://www.w3.org/2000/svg"
        }, /*#__PURE__*/_react.default.createElement("path", {
          fillRule: "evenodd",
          d: "M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
        }), /*#__PURE__*/_react.default.createElement("path", {
          fillRule: "evenodd",
          d: "M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
        }))),
        onChange: function onChange(event) {},
        onSubmit: function onSubmit(event) {},
        placeholder: "",
        reset: false,
        sidebar: false,
        value: ""
      };
    }
  }]);

  return Search;
}(_react.default.Component);

Search.propTypes = {
  autoFocus: _propTypes.default.bool,

  /**
   * Wird Komponente im Body genutzt?
   */
  body: _propTypes.default.bool,
  className: _propTypes.default.string,
  icon: _propTypes.default.any,
  onChange: _propTypes.default.func,
  onSubmit: _propTypes.default.func,
  placeholder: _propTypes.default.string,

  /**
   * Erlaube Zurücksetzen?
   */
  reset: _propTypes.default.bool,

  /**
   * Wird Komponente in der Sidebar genutzt?
   */
  sidebar: _propTypes.default.bool,
  value: _propTypes.default.string
};
var _default = Search;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1NlYXJjaC5qcyJdLCJuYW1lcyI6WyJTZWFyY2giLCJzdGF0ZSIsInZhbHVlIiwiZm9jdXMiLCJTZWFyY2hDb250cm9sSWQiLCJVdGlsaXRpZXMiLCJndWlkIiwicHJldlByb3BzIiwicHJvcHMiLCJzZXRTdGF0ZSIsInNpZGViYXIiLCJkb2N1bWVudCIsImRpc3BhdGNoRXZlbnQiLCJ3aW5kb3ciLCJ0b2dnbGVTaWRlYmFyRXZlbnQiLCJib2R5IiwiY2xhc3NOYW1lIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInRvZ2dsZVNpZGViYXIiLCJvblN1Ym1pdCIsImdldEVsZW1lbnRCeUlkIiwiaWNvbiIsInRhcmdldCIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJhdXRvRm9jdXMiLCJ6SW5kZXgiLCJyZXNldCIsImxlbmd0aCIsInNldFRpbWVvdXQiLCJxdWVyeVNlbGVjdG9yIiwic2VsZWN0IiwiUmVhY3QiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJib29sIiwic3RyaW5nIiwiYW55IiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtJQUNNQSxNOzs7OztBQUNGLG9CQUFjO0FBQUE7O0FBQUE7O0FBQ1Y7QUFFQSxVQUFLQyxLQUFMLEdBQWE7QUFDVEMsTUFBQUEsS0FBSyxFQUFFLEVBREU7QUFFVEMsTUFBQUEsS0FBSyxFQUFFO0FBRkUsS0FBYjtBQUtBLFVBQUtDLGVBQUwsR0FBdUIsNkJBQTZCQyxtQkFBVUMsSUFBVixFQUFwRDtBQVJVO0FBU2I7Ozs7V0FvQkQsNEJBQW1CQyxTQUFuQixFQUE4QjtBQUMxQixVQUFJQSxTQUFTLENBQUNMLEtBQVYsS0FBb0IsS0FBS00sS0FBTCxDQUFXTixLQUFuQyxFQUEwQztBQUN0QyxhQUFLTyxRQUFMLENBQWM7QUFBRVAsVUFBQUEs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USxFQUFDLFNBQWY7QUFBeUIsVUFBQSxDQUFDLEVBQUM7QUFBM0IsVUFGUSxDQUFOLENBSkg7QUFRSEUsUUFBQUEsUUFBUSxFQUFFLGtCQUFDUCxLQUFELEVBQVcsQ0FBRyxDQVJyQjtBQVNIRyxRQUFBQSxRQUFRLEVBQUUsa0JBQUNILEtBQUQsRUFBVyxDQUFHLENBVHJCO0FBVUhRLFFBQUFBLFdBQVcsRUFBRSxFQVZWO0FBV0hHLFFBQUFBLEtBQUssRUFBRSxLQVhKO0FBWUhsQixRQUFBQSxPQUFPLEVBQUUsS0FaTjtBQWFIUixRQUFBQSxLQUFLLEVBQUU7QUFiSixPQUFQO0FBZUg7Ozs7RUE1QmdCK0IsZUFBTUMsUzs7QUFpSTNCbEMsTUFBTSxDQUFDbUMsU0FBUCxHQUFtQjtBQUNmVCxFQUFBQSxTQUFTLEVBQUVVLG1CQUFVQyxJQUROOztBQUdmO0FBQ0o7QUFDQTtBQUNJdEIsRUFBQUEsSUFBSSxFQUFFcUIsbUJBQVVDLElBTkQ7QUFRZnJCLEVBQUFBLFNBQVMsRUFBRW9CLG1CQUFVRSxNQVJOO0FBU2ZoQixFQUFBQSxJQUFJLEVBQUVjLG1CQUFVRyxHQVREO0FBVWZmLEVBQUFBLFFBQVEsRUFBRVksbUJBQVVJLElBVkw7QUFXZnBCLEVBQUFBLFFBQVEsRUFBRWdCLG1CQUFVSSxJQVhMO0FBWWZmLEVBQUFBLFdBQVcsRUFBRVcsbUJBQVVFLE1BWlI7O0FBY2Y7QUFDSjtBQUNBO0FBQ0lWLEVBQUFBLEtBQUssRUFBRVEsbUJBQVVDLElBakJGOztBQW1CZjtBQUNKO0FBQ0E7QUFDSTNCLEVBQUFBLE9BQU8sRUFBRTBCLG1CQUFVQyxJQXRCSjtBQXdCZm5DLEVBQUFBLEtBQUssRUFBRWtDLG1CQUFVRTtBQXhCRixDQUFuQjtlQTJCZXRDLE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuXHJcbmltcG9ydCBVdGlsaXRpZXMgZnJvbSBcIi4vVXRpbGl0aWVzXCI7XHJcbmltcG9ydCBNZW51SXRlbSBmcm9tIFwiLi9NZW51SXRlbVwiO1xyXG5cclxuLyoqXHJcbiAqIEVpbmUgU3VjaGxlaXN0ZSwgZGllIHp1ciBTZWl0ZW5sZWlzdGUgaGluenVnZWbDvGd0IHdlcmRlbiBrYW5uLlxyXG4gKi9cclxuY2xhc3MgU2VhcmNoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgICBmb2N1czogZmFsc2VcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLlNlYXJjaENvbnRyb2xJZCA9IFwiYmx1ZS1hcHAtc2VhcmNoLWNvbnRyb2wtXCIgKyBVdGlsaXRpZXMuZ3VpZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgZGVmYXVsdFByb3BzKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGF1dG9Gb2N1czogZmFsc2UsXHJcbiAgICAgICAgICAgIGJvZHk6IGZhbHNlLFxyXG4gICAgICAgICAgICBjbGFzc05hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgIGljb246IDxzcGFuPjxzdmcgd2lkdGg9XCIxZW1cIiBoZWlnaHQ9XCIxZW1cIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgY2xhc3NOYW1lPVwiYmkgYmktc2VhcmNoIG10LW4xXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTAuNDQyIDEwLjQ0MmExIDEgMCAwIDEgMS40MTUgMGwzLjg1IDMuODVhMSAxIDAgMCAxLTEuNDE0IDEuNDE1bC0zLjg1LTMuODVhMSAxIDAgMCAxIDAtMS40MTV6XCIgLz5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGQ9XCJNNi41IDEyYTUuNSA1LjUgMCAxIDAgMC0xMSA1LjUgNS41IDAgMCAwIDAgMTF6TTEzIDYuNWE2LjUgNi41IDAgMSAxLTEzIDAgNi41IDYuNSAwIDAgMSAxMyAwelwiIC8+XHJcbiAgICAgICAgICAgIDwvc3ZnPjwvc3Bhbj4sXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlOiAoZXZlbnQpID0+IHsgfSxcclxuICAgICAgICAgICAgb25TdWJtaXQ6IChldmVudCkgPT4geyB9LFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJcIixcclxuICAgICAgICAgICAgcmVzZXQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBzaWRlYmFyOiBmYWxzZSxcclxuICAgICAgICAgICAgdmFsdWU6IFwiXCJcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcclxuICAgICAgICBpZiAocHJldlByb3BzLnZhbHVlICE9PSB0aGlzLnByb3BzLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogdGhpcy5wcm9wcy52YWx1ZSB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlU2lkZWJhcigpIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zaWRlYmFyKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQod2luZG93LnRvZ2dsZVNpZGViYXJFdmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Zm9ybVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICBcImJsdWUtYXBwLXNlYXJjaCBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMucHJvcHMuYm9keSA/IFwiYmx1ZS1hcHAtc2VhcmNoLWJvZHkgXCIgOiBcIlwiKSArXHJcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMuc3RhdGUuZm9jdXMgPyBcImZvY3VzIFwiIDogXCJcIikgK1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY2xhc3NOYW1lXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBvblN1Ym1pdD17ZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVTaWRlYmFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vblN1Ym1pdChldmVudCk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsdWUtYXBwLXNlYXJjaC1pbnB1dC1ncm91cCBpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuU2VhcmNoQ29udHJvbElkKS5mb2N1cygpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuaWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiBldmVudC50YXJnZXQudmFsdWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGV2ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e3RoaXMuU2VhcmNoQ29udHJvbElkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibHVlLWFwcC1zZWFyY2gtY29udHJvbCBmb3JtLWNvbnRyb2wgZGVmYXVsdCBpbnB1dC1sZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0aGlzLnByb3BzLnBsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvRm9jdXM9e3RoaXMucHJvcHMuYXV0b0ZvY3VzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgekluZGV4OiAodGhpcy5wcm9wcy5ib2R5ID8gXCIwXCIgOiBcIlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkZvY3VzPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgZm9jdXM6IHRydWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGZvY3VzOiBmYWxzZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5yZXNldCAmJiB0aGlzLnN0YXRlLnZhbHVlLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1idG5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibHVlLWFwcC1zZWFyY2gtcmVzZXQtYnRuIGJ0biBidG4tbGluayBidG4tbGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiBcIlwiIH0sICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuU2VhcmNoQ29udHJvbElkKS5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJpLW5hdmlnYXRlX2Nyb3NzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2lkZWJhciAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsdWUtYXBwLXNlYXJjaC1idG5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uPXt0aGlzLnByb3BzLmljb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlU2lkZWJhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ibHVlLWFwcC1zZWFyY2gtY29udHJvbFwiKS5zZWxlY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDIwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5TZWFyY2gucHJvcFR5cGVzID0ge1xyXG4gICAgYXV0b0ZvY3VzOiBQcm9wVHlwZXMuYm9vbCxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFdpcmQgS29tcG9uZW50ZSBpbSBCb2R5IGdlbnV0enQ/XHJcbiAgICAgKi9cclxuICAgIGJvZHk6IFByb3BUeXBlcy5ib29sLFxyXG5cclxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGljb246IFByb3BUeXBlcy5hbnksXHJcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBvblN1Ym1pdDogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEVybGF1YmUgWnVyw7xja3NldHplbj9cclxuICAgICAqL1xyXG4gICAgcmVzZXQ6IFByb3BUeXBlcy5ib29sLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogV2lyZCBLb21wb25lbnRlIGluIGRlciBTaWRlYmFyIGdlbnV0enQ/XHJcbiAgICAgKi9cclxuICAgIHNpZGViYXI6IFByb3BUeXBlcy5ib29sLFxyXG5cclxuICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2g7Il19