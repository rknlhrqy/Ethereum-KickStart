
          window.__NEXT_REGISTER_PAGE('/campaigns/requests', function() {
            var comp = module.exports=webpackJsonp([7],{851:function(e,t,a){e.exports=a(852)},852:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(45),l=r(n),u=a(86),s=r(u),o=a(48),d=r(o),c=a(22),i=r(c),p=a(4),f=r(p),m=a(5),v=r(m),h=a(6),g=r(h),E=a(7),b=r(E),q=a(0),y=r(q),C=a(53),_=a(111),A=r(_),k=a(853),x=r(k),R=a(64),M=a(119),w=r(M),L=function(e){function t(){return(0,f.default)(this,t),(0,g.default)(this,(t.__proto__||(0,i.default)(t)).apply(this,arguments))}return(0,b.default)(t,e),(0,v.default)(t,[{key:"renderRow",value:function(){var e=this;return this.props.requests.map(function(t,a){return y.default.createElement(x.default,{key:a,id:a,request:t,address:e.props.address,approverCount:e.props.approverCount})})}},{key:"render",value:function(){var e=(C.Table.Header,C.Table.Row),t=C.Table.HeaderCell;C.Table.Body;return y.default.createElement(A.default,null,y.default.createElement("h3",null,"Request List"),y.default.createElement(R.Link,{route:"/campaigns/"+this.props.address+"/requests/new"},y.default.createElement("a",null,y.default.createElement(C.Button,{primary:!0,floated:"right",style:{marginBottom:10}},"Add Request"))),y.default.createElement(C.Table,null,y.default.createElement(C.Table.Header,null,y.default.createElement(e,null,y.default.createElement(t,null,"ID"),y.default.createElement(t,null,"Description"),y.default.createElement(t,null,"Amount (Ether)"),y.default.createElement(t,null,"Recipient"),y.default.createElement(t,null,"Approval"),y.default.createElement(t,null,"Approve"),y.default.createElement(t,null,"Finalize"),y.default.createElement(t,null,"Message"))),y.default.createElement(C.Table.Body,null,this.renderRow())),y.default.createElement("div",null," Found ",this.props.requestCount," requests"))}}],[{key:"getInitialProps",value:function(){function e(e){return t.apply(this,arguments)}var t=(0,d.default)(l.default.mark(function e(t){var a,r,n,u,o;return l.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.query.address,r=(0,w.default)(a),e.next=4,r.methods.approverCount().call();case 4:return n=e.sent,e.next=7,r.methods.getRequestCount().call();case 7:return u=e.sent,e.next=10,s.default.all(Array(parseInt(u)).fill().map(function(e,t){return r.methods.requests(t).call()}));case 10:return o=e.sent,console.log(o),e.abrupt("return",{address:a,requests:o,requestCount:u,approverCount:n});case 13:case"end":return e.stop()}},e,this)}));return e}()}]),t}(q.Component);t.default=L},853:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(45),l=r(n),u=a(48),s=r(u),o=a(22),d=r(o),c=a(4),i=r(c),p=a(5),f=r(p),m=a(6),v=r(m),h=a(7),g=r(h),E=a(0),b=r(E),q=a(53),y=a(65),C=r(y),_=a(119),A=r(_),k=a(64),x=function(e){function t(){var e,a,r,n,u=this;(0,i.default)(this,t);for(var o=arguments.length,c=Array(o),p=0;p<o;p++)c[p]=arguments[p];return a=r=(0,v.default)(this,(e=t.__proto__||(0,d.default)(t)).call.apply(e,[this].concat(c))),r.state={onApproveLoading:!1,onFinalizeLoading:!1,errorMessage:""},r.onApprove=(0,s.default)(l.default.mark(function e(){var t,a;return l.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r.setState({onApproveLoading:!0,errorMessage:""}),e.next=3,C.default.eth.getAccounts();case 3:return t=e.sent,a=(0,A.default)(r.props.address),e.prev=5,e.next=8,a.methods.approveRequest(r.props.id).send({from:t[0]});case 8:k.Router.pushRoute("/campaigns/${this.props.address}/requests"),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(5),r.setState({errorMessage:e.t0.message.split("\n")[0]}),console.log(r.state.errorMessage);case 15:r.setState({onApproveLoading:!1});case 16:case"end":return e.stop()}},e,u,[[5,11]])})),r.onFinalize=(0,s.default)(l.default.mark(function e(){var t,a;return l.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r.setState({onFinalizeLoading:!0,errorMessage:""}),e.next=3,C.default.eth.getAccounts();case 3:return t=e.sent,a=(0,A.default)(r.props.address),e.prev=5,e.next=8,a.methods.finalizeRequest(r.props.id).send({from:t[0]});case 8:k.Router.replaceRoute("/campaigns/${this.props.address}/requests"),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(5),r.setState({errorMessage:e.t0.message.split("\n")[0]}),console.log(r.state.errorMessage);case 15:r.setState({onFinalizeLoading:!1});case 16:case"end":return e.stop()}},e,u,[[5,11]])})),n=a,(0,v.default)(r,n)}return(0,g.default)(t,e),(0,f.default)(t,[{key:"render",value:function(){var e=q.Table.Row,t=q.Table.Cell,a=this.props,r=a.id,n=a.request,l=a.approverCount,u=n.approvalCount>l/2;return b.default.createElement(e,{disabled:n.complete,positive:u&&!n.complete},b.default.createElement(t,null,r),b.default.createElement(t,null,n.description),b.default.createElement(t,null,C.default.utils.fromWei(n.value,"ether")),b.default.createElement(t,null,n.recipient),b.default.createElement(t,null,n.approvalCount,"/",l),b.default.createElement(t,null,n.complete?null:b.default.createElement(q.Button,{color:"green",basic:!0,onClick:this.onApprove,loading:this.state.onApproveLoading},"Approve")),b.default.createElement(t,null,n.complete?null:b.default.createElement(q.Button,{color:"teal",basic:!0,onClick:this.onFinalize,loading:this.state.onFinalizeLoading},"Finalize")),b.default.createElement(t,null,this.state.errorMessage))}}]),t}(E.Component);t.default=x}},[851]);
            return { page: comp.default }
          })
        