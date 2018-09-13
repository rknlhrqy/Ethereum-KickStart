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

var _factory = require('../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/kening/tutorial/ethereum/Ethereum-KickStart/pages/index.js?entry';


var CampaignInstance = function (_Component) {
  (0, _inherits3.default)(CampaignInstance, _Component);

  function CampaignInstance() {
    (0, _classCallCheck3.default)(this, CampaignInstance);

    return (0, _possibleConstructorReturn3.default)(this, (CampaignInstance.__proto__ || (0, _getPrototypeOf2.default)(CampaignInstance)).apply(this, arguments));
  }

  (0, _createClass3.default)(CampaignInstance, [{
    key: 'renderCampaigns',
    value: function renderCampaigns() {
      var items = this.props.campaigns.map(function (address) {
        // fluid is to extend the card to the other
        // side of the screen.
        return {
          header: address,
          /* Get the route at the run-time
             It is "`". It is not"'"
           */
          description: _react2.default.createElement(_routes.Link, { route: '/campaigns/' + address, __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            }
          }, _react2.default.createElement('a', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            }
          }, 'View Campaign')),
          fluid: true
        };
      });
      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      // print out the address of the first campaign
      // got by calling function getInitialProps().
      //return <div>{this.props.campaigns[0]}</div>

      // Note: Semantic CSS is included by calling
      // <link ......  />
      // Without it, Semantic CSS is not working.
      //
      // Call Semantic-ui-react and semantic-ui-css to create
      // the stylish cards
      // "primary" makes the button in Blue color.
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, 'Open Campaigns'), _react2.default.createElement(_routes.Link, { route: '/campaigns/new', __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        floated: 'right',
        content: 'Create Campaign',
        icon: 'add circle',
        labelPosition: 'left',
        primary: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }))), this.renderCampaigns()));
    }
  }], [{
    key: 'getInitialProps',

    // Note: Next.js server does not process
    // the function componentDidMount().
    /*
    async componentDidMount() {
      const campaigns = await factory.methods.getDeployedCampaigns().call();
      console.log(campaigns);
    }
    */

    // static member function of class CampaignInstance.
    // Call it using: CampaignInstance.getInitialProps().
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var campaigns;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _factory2.default.methods.getDeployedCampaigns().call();

              case 2:
                campaigns = _context.sent;

                console.log(campaigns);
                //return {campaigns: campaigns};
                //ES6 syntex
                return _context.abrupt('return', { campaigns: campaigns });

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return CampaignInstance;
}(_react.Component);

exports.default = CampaignInstance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsIkJ1dHRvbiIsImZhY3RvcnkiLCJMYXlvdXQiLCJMaW5rIiwiQ2FtcGFpZ25JbnN0YW5jZSIsIml0ZW1zIiwicHJvcHMiLCJjYW1wYWlnbnMiLCJtYXAiLCJoZWFkZXIiLCJhZGRyZXNzIiwiZGVzY3JpcHRpb24iLCJmbHVpZCIsInJlbmRlckNhbXBhaWducyIsIm1ldGhvZHMiLCJnZXREZXBsb3llZENhbXBhaWducyIsImNhbGwiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTTs7QUFDZixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVMsQUFBWTs7Ozs7OztJQUVmLEE7Ozs7Ozs7Ozs7O3NDQW9CZSxBQUNqQjtVQUFNLGFBQVEsQUFBSyxNQUFMLEFBQVcsVUFBWCxBQUFxQixJQUFJLG1CQUFXLEFBQ2hEO0FBQ0E7QUFDQTs7a0JBQU8sQUFDRyxBQUNSO0FBR0E7Ozt1Q0FDRSxBQUFDLDhCQUFLLHVCQUFOLEFBQTZCO3dCQUE3QjswQkFBQSxBQUNFO0FBREY7V0FBQSxrQkFDRSxjQUFBOzt3QkFBQTswQkFBQTtBQUFBO0FBQUEsYUFQQyxBQU1ILEFBQ0UsQUFHSjtpQkFWRixBQUFPLEFBVUUsQUFFVjtBQVpRLEFBQ0w7QUFKSixBQUFjLEFBZ0JkLE9BaEJjOzJDQWdCUCxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQXFCO29CQUFyQjtzQkFBUCxBQUFPLEFBQ1I7QUFEUTtPQUFBOzs7OzZCQUlDLEFBQ1I7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQU1FO0FBTkY7QUFBQSx5QkFNRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FORixBQU1FLEFBQ0EsbUNBQUEsQUFBQyw4QkFBSyxPQUFOLEFBQWM7b0JBQWQ7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUM7aUJBQUQsQUFDWSxBQUNWO2lCQUZGLEFBRVksQUFDVjtjQUhGLEFBR1MsQUFDUDt1QkFKRixBQUlrQixBQUNoQjtpQkFMRjs7b0JBQUE7c0JBVE4sQUFPRSxBQUNFLEFBQ0UsQUFTSDtBQVRHO0FBQ0UsaUJBWlosQUFDRSxBQUNFLEFBa0JHLEFBQUssQUFHYjs7O1NBM0VEOztBQUNBO0FBQ0E7QUFPQTs7Ozs7OztBQUNBOzs7Ozs7Ozs7O3VCQUUwQixrQkFBQSxBQUFRLFFBQVIsQUFBZ0IsdUJBQWhCLEFBQXVDLEE7O21CQUF6RDtBLHFDQUNOOzt3QkFBQSxBQUFRLElBQVIsQUFBWSxBQUNaO0FBQ0E7O2lEQUNPLEVBQUMsV0FBRCxBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBakJvQixBLEFBK0UvQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9rZW5pbmcvdHV0b3JpYWwvZXRoZXJldW0vRXRoZXJldW0tS2lja1N0YXJ0In0=