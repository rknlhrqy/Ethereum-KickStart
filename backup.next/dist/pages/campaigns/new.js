'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _factory = require('../../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/kening/tutorial/ethereum/Ethereum-KickStart/pages/campaigns/new.js?entry';

/* "Link" is a React component that allows us to render
 * link tags into React components and navigate around
 * the application.
 * "Router" redirect people move from one page to another
 * page inside our app.
 */


var CampaignNew = function (_Component) {
  (0, _inherits3.default)(CampaignNew, _Component);

  function CampaignNew() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, CampaignNew);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CampaignNew.__proto__ || (0, _getPrototypeOf2.default)(CampaignNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      minimumContribution: '100',
      errorMessage: '',
      /* loading is used to control whether
       * to show the button spinning.
       */
      loading: false
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var accounts;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // Prevent Event from submitting itself.
                event.preventDefault();
                /* Set the button spinning on. And clear the
                 * error message caused by the previous action
                 * if there is any.
                 */
                _this.setState({ loading: true, errorMessage: '' });
                /* If there is any error happens in the following
                 * code. it will be caught. And the error message
                 * will be add to the state "errorMessage".
                 * It will be printed during render() call.
                 */
                _context.prev = 2;
                _context.next = 5;
                return _web2.default.eth.getAccounts();

              case 5:
                accounts = _context.sent;
                _context.next = 8;
                return _factory2.default.methods.createCampaign(_this.state.minimumContribution).send({
                  from: accounts[0]
                });

              case 8:

                /* Route to the base webpage "CampaignIndex".
                 */
                _routes.Router.pushRoute('/');
                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context['catch'](2);

                /* err.message has too long descriptions.
                 * Just pick up the first sentence.
                 */
                _this.setState({ errorMessage: _context.t0.message.split('\n')[0] });

              case 14:
                _this.setState({ loading: false });

              case 15:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[2, 11]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(CampaignNew, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, 'Create  a Campaign'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, 'Minimum Contribution'), _react2.default.createElement(_semanticUiReact.Input, {
        label: 'Wei',
        labelPosition: 'right',
        value: this.state.minimumContribution,
        onChange: function onChange(event) {
          _this3.setState({
            minimumContribution: event.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      })), _react2.default.createElement(_semanticUiReact.Message, {
        error: true,
        header: 'Oops!',
        content: this.state.errorMessage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: !!this.state.loading, __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }, 'Create!')));
    }
  }]);

  return CampaignNew;
}(_react.Component);

exports.default = CampaignNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9uZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiQnV0dG9uIiwiSW5wdXQiLCJNZXNzYWdlIiwiTGF5b3V0IiwiZmFjdG9yeSIsIndlYjMiLCJSb3V0ZXIiLCJDYW1wYWlnbk5ldyIsInN0YXRlIiwibWluaW11bUNvbnRyaWJ1dGlvbiIsImVycm9yTWVzc2FnZSIsImxvYWRpbmciLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiY3JlYXRlQ2FtcGFpZ24iLCJzZW5kIiwiZnJvbSIsInB1c2hSb3V0ZSIsIm1lc3NhZ2UiLCJzcGxpdCIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTSxBQUFRLEFBQU87O0FBQzlCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFVOzs7O0FBUWpCLEFBQVMsQUFBVSxBQUFjOzs7Ozs7QUFOakM7Ozs7Ozs7O0ksQUFRTTs7Ozs7Ozs7Ozs7Ozs7O3NOLEFBQ0o7MkJBQVEsQUFDZSxBQUNyQjtvQkFGTSxBQUVRLEFBQ2Q7QUFHQTs7O2UsQUFOTSxBQU1HO0FBTkgsQUFDTixhLEFBUUY7MkZBQVcsaUJBQUEsQUFBTyxPQUFQO1lBQUE7c0VBQUE7b0JBQUE7NkNBQUE7bUJBQ1Q7QUFDQTtzQkFBQSxBQUFNLEFBQ047QUFJQTs7OztzQkFBQSxBQUFLLFNBQVMsRUFBQyxTQUFELEFBQVUsTUFBTSxjQUE5QixBQUFjLEFBQThCLEFBQzVDO0FBUlM7Ozs7O2dDQUFBO2dDQUFBO3VCQWNnQixjQUFBLEFBQUssSUFkckIsQUFjZ0IsQUFBUzs7bUJBQTFCO0FBZEMsb0NBQUE7Z0NBQUE7eUNBcUJELEFBQVEsUUFBUixBQUNILGVBQWUsTUFBQSxBQUFLLE1BRGpCLEFBQ3VCLHFCQUR2QixBQUVIO3dCQUNPLFNBeEJILEFBcUJELEFBRUUsQUFDRSxBQUFTO0FBRFgsQUFDSixpQkFIRTs7bUJBT047O0FBRUE7OytCQUFBLEFBQU8sVUE5QkEsQUE4QlAsQUFBaUI7Z0NBOUJWO0FBQUE7O21CQUFBO2dDQUFBO2dEQWdDUDs7QUFHQTs7O3NCQUFBLEFBQUssU0FBUyxFQUFDLGNBQWMsWUFBQSxBQUFJLFFBQUosQUFBWSxNQUFaLEFBQWtCLE1BbkN4QyxBQW1DUCxBQUFjLEFBQWUsQUFBd0I7O21CQUV2RDtzQkFBQSxBQUFLLFNBQVMsRUFBQyxTQXJDTixBQXFDVCxBQUFjLEFBQVU7O21CQXJDZjttQkFBQTtnQ0FBQTs7QUFBQTtpQ0FBQTtBOzs7Ozs7Ozs7OzZCQXdDRjttQkFDUDs7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFNRTtBQU5GO0FBQUEsT0FBQSxrQkFNRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FORixBQU1FLEFBZ0JBLHVDQUFBLEFBQUMsdUNBQUssVUFBWSxLQUFsQixBQUF1QixVQUFVLE9BQVMsQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUFqRCxBQUF1RDtvQkFBdkQ7c0JBQUEsQUFDRTtBQURGO3lCQUNHLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUdBLHlDQUFBLEFBQUM7ZUFBRCxBQUNVLEFBQ1I7dUJBRkYsQUFFa0IsQUFDaEI7ZUFBUyxLQUFBLEFBQUssTUFIaEIsQUFHc0IsQUFDcEI7a0JBQWEsa0JBQUEsQUFBQyxPQUFVLEFBQ3RCO2lCQUFBLEFBQUs7aUNBQ2tCLE1BQUEsQUFBTSxPQUQ3QixBQUFjLEFBQ3NCLEFBRXJDO0FBSGUsQUFDWjtBQU5OOztvQkFBQTtzQkFMSixBQUNFLEFBSUUsQUFjRjtBQWRFO0FBQ0UsMkJBYUosQUFBQztlQUFELEFBRUU7Z0JBRkYsQUFFVyxBQUNUO2lCQUFXLEtBQUEsQUFBSyxNQUhsQixBQUd3Qjs7b0JBSHhCO3NCQW5CRixBQW1CRSxBQVFBO0FBUkE7QUFDRSwwQkFPRixBQUFDLHlDQUFPLFNBQVIsTUFBZ0IsU0FBVyxDQUFDLENBQUMsS0FBQSxBQUFLLE1BQWxDLEFBQXdDO29CQUF4QztzQkFBQTtBQUFBO1NBbEROLEFBQ0UsQUFzQkUsQUEyQkUsQUFNUDs7Ozs7QUEzR3VCLEEsQUE4RzFCOztrQkFBQSxBQUFlIiwiZmlsZSI6Im5ldy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9rZW5pbmcvdHV0b3JpYWwvZXRoZXJldW0vRXRoZXJldW0tS2lja1N0YXJ0In0=