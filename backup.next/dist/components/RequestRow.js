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

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _campaign = require('../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RequestRow = function (_Component) {
  (0, _inherits3.default)(RequestRow, _Component);

  function RequestRow() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RequestRow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestRow.__proto__ || (0, _getPrototypeOf2.default)(RequestRow)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      onApproveLoading: false,
      onFinalizeLoading: false,
      errorMessage: ''
    }, _this.onApprove = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var accounts, campaign;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.setState({
                onApproveLoading: true,
                errorMessage: ''
              });
              _context.next = 3;
              return _web2.default.eth.getAccounts();

            case 3:
              accounts = _context.sent;
              campaign = (0, _campaign2.default)(_this.props.address);
              _context.prev = 5;
              _context.next = 8;
              return campaign.methods.approveRequest(_this.props.id).send({
                from: accounts[0]
              });

            case 8:

              _routes.Router.pushRoute('/campaigns/${this.props.address}/requests');
              _context.next = 15;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context['catch'](5);

              _this.setState({ errorMessage: _context.t0.message.split('\n')[0] });
              console.log(_this.state.errorMessage);

            case 15:
              _this.setState({ onApproveLoading: false });

            case 16:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2, [[5, 11]]);
    })), _this.onFinalize = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      var accounts, campaign;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _this.setState({
                onFinalizeLoading: true,
                errorMessage: ''
              });
              _context2.next = 3;
              return _web2.default.eth.getAccounts();

            case 3:
              accounts = _context2.sent;
              campaign = (0, _campaign2.default)(_this.props.address);
              _context2.prev = 5;
              _context2.next = 8;
              return campaign.methods.finalizeRequest(_this.props.id).send({
                from: accounts[0]
              });

            case 8:

              _routes.Router.replaceRoute('/campaigns/${this.props.address}/requests');
              _context2.next = 15;
              break;

            case 11:
              _context2.prev = 11;
              _context2.t0 = _context2['catch'](5);

              _this.setState({ errorMessage: _context2.t0.message.split('\n')[0] });
              console.log(_this.state.errorMessage);

            case 15:
              _this.setState({ onFinalizeLoading: false });

            case 16:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2, [[5, 11]]);
    })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RequestRow, [{
    key: 'render',
    value: function render() {
      var Row = _semanticUiReact.Table.Row,
          Cell = _semanticUiReact.Table.Cell;
      var _props = this.props,
          id = _props.id,
          request = _props.request,
          approverCount = _props.approverCount;

      var readToFinalize = request.approvalCount > approverCount / 2;

      return _react2.default.createElement(Row, { disabled: request.complete, positive: readToFinalize && !request.complete }, _react2.default.createElement(Cell, null, id), _react2.default.createElement(Cell, null, request.description), _react2.default.createElement(Cell, null, _web2.default.utils.fromWei(request.value, 'ether')), _react2.default.createElement(Cell, null, request.recipient), _react2.default.createElement(Cell, null, request.approvalCount, '/', approverCount), _react2.default.createElement(Cell, null, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, {
        color: 'green',
        basic: true,
        onClick: this.onApprove,
        loading: this.state.onApproveLoading }, 'Approve')), _react2.default.createElement(Cell, null, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, {
        color: 'teal',
        basic: true,
        onClick: this.onFinalize,
        loading: this.state.onFinalizeLoading }, 'Finalize')), _react2.default.createElement(Cell, null, this.state.errorMessage));
    }
  }]);

  return RequestRow;
}(_react.Component);

exports.default = RequestRow;