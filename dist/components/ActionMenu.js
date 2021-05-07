"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Utilities = _interopRequireDefault(require("./Utilities.js"));

var _MenuItem = _interopRequireDefault(require("./MenuItem.js"));

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
 * <span class="badge badge-info">Info</span> You can also use <strong>Actions</strong> instead.<br>
 * The Action Menu on the top right of a page. You can place Actions here which are in context of the current page.
 */
var ActionMenu = /*#__PURE__*/function (_React$Component) {
  _inherits(ActionMenu, _React$Component);

  var _super = _createSuper(ActionMenu);

  function ActionMenu() {
    var _this;

    _classCallCheck(this, ActionMenu);

    _this = _super.call(this);
    _this.state = {
      actionsToggledIn: null
    };
    return _this;
  }

  _createClass(ActionMenu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.initToggleStatus();

      document.querySelector(".blue-app-wrapper").onclick = function (event) {
        _this2.toggleActions();
      };

      document.querySelectorAll(".blue-app-actions-menu .nav-link").forEach(function (link) {
        link.addEventListener("click", function () {
          if (_this2.state.actionsToggledIn) {
            _this2.toggleActions();
          }
        });
      });
    }
  }, {
    key: "toggleActions",
    value: function toggleActions() {
      _Utilities.default.toggleActions();

      this.initToggleStatus();
    }
  }, {
    key: "initToggleStatus",
    value: function initToggleStatus() {
      this.setState({
        actionsToggledIn: _Utilities.default.hasClass(document.querySelector(".blue-app-actions"), "open")
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return /*#__PURE__*/_react.default.createElement("ul", {
        className: "blue-app-actions-menu nav navbar-nav navbar-right fluent-btn"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "fluent-btn-ball"
      }), !this.state.actionsToggledIn && !this.props.hideToggleAction ? /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
        className: "blue-app-actions-menu-toggle",
        onClick: function onClick() {
          return _this3.toggleActions();
        },
        icon: this.props.toggleIcon,
        "aria-label": "Toggle menu"
      }) : "", this.props.children);
    }
  }], [{
    key: "defaultProps",
    get: function get() {
      return {
        hideToggleAction: false,
        toggleIcon: "bi-iconmonstr-menu-7"
      };
    }
  }]);

  return ActionMenu;
}(_react.default.Component);

ActionMenu.propTypes = {
  /**
   * Hides the three points in mobile view.
   * Can be useful when you use multiple ActionMenus, but don't want all of them have the toggle button.
   */
  hideToggleAction: _propTypes.default.bool,

  /**
   * Icon component for the toggle icon.
   */
  toggleIcon: _propTypes.default.any
};
var _default = ActionMenu;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0FjdGlvbk1lbnUuanMiXSwibmFtZXMiOlsiQWN0aW9uTWVudSIsInN0YXRlIiwiYWN0aW9uc1RvZ2dsZWRJbiIsImluaXRUb2dnbGVTdGF0dXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJvbmNsaWNrIiwiZXZlbnQiLCJ0b2dnbGVBY3Rpb25zIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJsaW5rIiwiYWRkRXZlbnRMaXN0ZW5lciIsIlV0aWxpdGllcyIsInNldFN0YXRlIiwiaGFzQ2xhc3MiLCJwcm9wcyIsImhpZGVUb2dnbGVBY3Rpb24iLCJ0b2dnbGVJY29uIiwiY2hpbGRyZW4iLCJSZWFjdCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImJvb2wiLCJhbnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtJQUNNQSxVOzs7OztBQUNGLHdCQUFjO0FBQUE7O0FBQUE7O0FBQ1Y7QUFFQSxVQUFLQyxLQUFMLEdBQWE7QUFDVEMsTUFBQUEsZ0JBQWdCLEVBQUU7QUFEVCxLQUFiO0FBSFU7QUFNYjs7OztXQVNELDZCQUFvQjtBQUFBOztBQUNoQixXQUFLQyxnQkFBTDs7QUFFQUMsTUFBQUEsUUFBUSxDQUFDQyxhQUFULENBQXVCLG1CQUF2QixFQUE0Q0MsT0FBNUMsR0FBc0QsVUFBQ0MsS0FBRCxFQUFXO0FBQzdELFFBQUEsTUFBSSxDQUFDQyxhQUFMO0FBQ0gsT0FGRDs7QUFJQUosTUFBQUEsUUFBUSxDQUFDSyxnQkFBVCxDQUEwQixrQ0FBMUIsRUFBOERDLE9BQTlELENBQXNFLFVBQUFDLElBQUksRUFBSTtBQUMxRUEsUUFBQUEsSUFBSSxDQUFDQyxnQkFBTCxDQUFzQixPQUF0QixFQUErQixZQUFNO0FBQ2pDLGNBQUksTUFBSSxDQUFDWCxLQUFMLENBQVdDLGdCQUFmLEVBQWlDO0FBQzdCLFlBQUEsTUFBSSxDQUFDTSxhQUFMO0FBQ0g7QUFDSixTQUpEO0FBS0gsT0FORDtBQU9IOzs7V0FFRCx5QkFBZ0I7QUFDWksseUJBQVVMLGFBQVY7O0FBQ0EsV0FBS0wsZ0JBQUw7QUFDSDs7O1dBRUQsNEJBQW1CO0FBQ2YsV0FBS1csUUFBTCxDQUFjO0FBQ1ZaLFFBQUFBLGdCQUFnQixFQUFFVyxtQkFBVUUsUUFBVixDQUFtQlgsUUFBUSxDQUFDQyxhQUFULENBQXVCLG1CQUF2QixDQUFuQixFQUFnRSxNQUFoRTtBQURSLE9BQWQ7QUFHSDs7O1dBRUQsa0JBQVM7QUFBQTs7QUFDTCwwQkFDSTtBQUFJLFFBQUEsU0FBUyxFQUFDO0FBQWQsc0JBQ0k7QUFBSyxRQUFBLFNBQVMsRUFBQztBQUFmLFFBREosRUFHSyxDQUFDLEtBQUtKLEtBQUwsQ0FBV0MsZ0JBQVosSUFBZ0MsQ0FBQyxLQUFLYyxLQUFMLENBQVdDLGdCQUE1QyxnQkFDRyw2QkFBQyxpQkFBRDtBQUNJLFFBQUEsU0FBUyxFQUFDLDhCQURkO0FBRUksUUFBQSxPQUFPLEVBQUU7QUFBQSxpQkFBTSxNQUFJLENBQUNULGFBQUwsRUFBTjtBQUFBLFNBRmI7QUFHSSxRQUFBLElBQUksRUFBRSxLQUFLUSxLQUFMLENBQVdFLFVBSHJCO0FBSUksc0JBQVc7QUFKZixRQURILEdBT0ssRUFWVixFQWFLLEtBQUtGLEtBQUwsQ0FBV0csUUFiaEIsQ0FESjtBQWlCSDs7O1NBcERELGVBQTBCO0FBQ3RCLGFBQU87QUFDSEYsUUFBQUEsZ0JBQWdCLEVBQUUsS0FEZjtBQUVIQyxRQUFBQSxVQUFVLEVBQUU7QUFGVCxPQUFQO0FBSUg7Ozs7RUFkb0JFLGVBQU1DLFM7O0FBZ0UvQnJCLFVBQVUsQ0FBQ3NCLFNBQVgsR0FBdUI7QUFDbkI7QUFDSjtBQUNBO0FBQ0E7QUFDSUwsRUFBQUEsZ0JBQWdCLEVBQUVNLG1CQUFVQyxJQUxUOztBQU9uQjtBQUNKO0FBQ0E7QUFDSU4sRUFBQUEsVUFBVSxFQUFFSyxtQkFBVUU7QUFWSCxDQUF2QjtlQWFlekIsVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5cclxuaW1wb3J0IFV0aWxpdGllcyBmcm9tIFwiLi9VdGlsaXRpZXMuanNcIjtcclxuaW1wb3J0IE1lbnVJdGVtIGZyb20gXCIuL01lbnVJdGVtLmpzXCI7XHJcblxyXG4vKipcclxuICogPHNwYW4gY2xhc3M9XCJiYWRnZSBiYWRnZS1pbmZvXCI+SW5mbzwvc3Bhbj4gWW91IGNhbiBhbHNvIHVzZSA8c3Ryb25nPkFjdGlvbnM8L3N0cm9uZz4gaW5zdGVhZC48YnI+XHJcbiAqIFRoZSBBY3Rpb24gTWVudSBvbiB0aGUgdG9wIHJpZ2h0IG9mIGEgcGFnZS4gWW91IGNhbiBwbGFjZSBBY3Rpb25zIGhlcmUgd2hpY2ggYXJlIGluIGNvbnRleHQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cclxuICovXHJcbmNsYXNzIEFjdGlvbk1lbnUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgYWN0aW9uc1RvZ2dsZWRJbjogbnVsbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IGRlZmF1bHRQcm9wcygpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBoaWRlVG9nZ2xlQWN0aW9uOiBmYWxzZSxcclxuICAgICAgICAgICAgdG9nZ2xlSWNvbjogXCJiaS1pY29ubW9uc3RyLW1lbnUtN1wiXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLmluaXRUb2dnbGVTdGF0dXMoKTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ibHVlLWFwcC13cmFwcGVyXCIpLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy50b2dnbGVBY3Rpb25zKCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ibHVlLWFwcC1hY3Rpb25zLW1lbnUgLm5hdi1saW5rXCIpLmZvckVhY2gobGluayA9PiB7XHJcbiAgICAgICAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmFjdGlvbnNUb2dnbGVkSW4pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUFjdGlvbnMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlQWN0aW9ucygpIHtcclxuICAgICAgICBVdGlsaXRpZXMudG9nZ2xlQWN0aW9ucygpO1xyXG4gICAgICAgIHRoaXMuaW5pdFRvZ2dsZVN0YXR1cygpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRUb2dnbGVTdGF0dXMoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGFjdGlvbnNUb2dnbGVkSW46IFV0aWxpdGllcy5oYXNDbGFzcyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJsdWUtYXBwLWFjdGlvbnNcIiksIFwib3BlblwiKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYmx1ZS1hcHAtYWN0aW9ucy1tZW51IG5hdiBuYXZiYXItbmF2IG5hdmJhci1yaWdodCBmbHVlbnQtYnRuXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsdWVudC1idG4tYmFsbFwiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgeyF0aGlzLnN0YXRlLmFjdGlvbnNUb2dnbGVkSW4gJiYgIXRoaXMucHJvcHMuaGlkZVRvZ2dsZUFjdGlvbiA/XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsdWUtYXBwLWFjdGlvbnMtbWVudS10b2dnbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnRvZ2dsZUFjdGlvbnMoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17dGhpcy5wcm9wcy50b2dnbGVJY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiVG9nZ2xlIG1lbnVcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuQWN0aW9uTWVudS5wcm9wVHlwZXMgPSB7XHJcbiAgICAvKipcclxuICAgICAqIEhpZGVzIHRoZSB0aHJlZSBwb2ludHMgaW4gbW9iaWxlIHZpZXcuXHJcbiAgICAgKiBDYW4gYmUgdXNlZnVsIHdoZW4geW91IHVzZSBtdWx0aXBsZSBBY3Rpb25NZW51cywgYnV0IGRvbid0IHdhbnQgYWxsIG9mIHRoZW0gaGF2ZSB0aGUgdG9nZ2xlIGJ1dHRvbi5cclxuICAgICAqL1xyXG4gICAgaGlkZVRvZ2dsZUFjdGlvbjogUHJvcFR5cGVzLmJvb2wsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJY29uIGNvbXBvbmVudCBmb3IgdGhlIHRvZ2dsZSBpY29uLlxyXG4gICAgICovXHJcbiAgICB0b2dnbGVJY29uOiBQcm9wVHlwZXMuYW55XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBY3Rpb25NZW51OyJdfQ==