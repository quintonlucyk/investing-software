(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{109:function(e,t,a){},110:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(17),i=a.n(s),l=(a(68),a(18)),c=a.n(l),o=a(22),p=a(7),u=a(8),m=a(11),h=a(9),f=a(10),N=a(119),b=a(116),E=a(113),d=a(122),A=a(117),v=a(121),F=a(120),O=a(118),g=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return null==this.props.profile?null:void 0!==this.props.profile.Error?n.a.createElement(n.a.Fragment,null,n.a.createElement("p",null,"Shoots. Looks like something went wrong. Here is the error we got:"),n.a.createElement("p",null,this.props.profile.Error)):n.a.createElement(n.a.Fragment,null,n.a.createElement("ul",null,n.a.createElement("li",null,"Company Name: ",this.props.profile.profile.companyName),n.a.createElement("li",null,"Price: $",this.props.profile.profile.price),n.a.createElement("li",null,"Changes (%): $",this.props.profile.profile.changes," ",this.props.profile.profile.changesPercentage),n.a.createElement("li",null,"Exchange: ",this.props.profile.profile.exchange),n.a.createElement("li",null,"Industry: ",this.props.profile.profile.industry)))}}]),t}(n.a.Component),y=a(115),j=a(114),w=a(15),x=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){for(var e=0,t=0,a=0,r=0;r<10;++r)if(r===this.props.metrics.metrics.length)r<1&&(a="NA",e="NA",t="NA"),r<5?(e="NA",t="NA"):e="NA";else if(this.props.metrics.metrics[r]&&this.props.metrics.metrics[r].ROIC&&""!==this.props.metrics.metrics[r].ROIC){var s=100*parseFloat(this.props.metrics.metrics[r].ROIC);if(r<1)e+=s,t+=s,a=Number.parseFloat(s).toFixed(2)+" %";else if(r<5)e+=s,t+=s;else{if(!(r<10))break;e+=s}}else r<1&&(a="NA",e="NA",t="NA"),r<5?(e="NA",t="NA"):e="NA";return e="NA"===e?"NA":Number.parseFloat(e/10).toFixed(2)+" %",t="NA"===t?"NA":Number.parseFloat(t/5).toFixed(2)+" %",n.a.createElement("tr",null,n.a.createElement("td",null,"ROIC",n.a.createElement(E.a,{className:"m-2 d-inline"},n.a.createElement(d.a,{placement:"right",overlay:n.a.createElement(j.a,null,"(Return on invested capital)")},n.a.createElement(w.a,{icon:"question-circle"})))),n.a.createElement("td",null,a),n.a.createElement("td",null,t),n.a.createElement("td",null,e))}}]),t}(n.a.Component),C=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){for(var e=0,t=0,a=0,r=0;r<9;++r)if(r===this.props.balance.financials.length-1)r<1&&(a="NA",e="NA",t="NA"),r<5?(e="NA",t="NA"):e="NA";else if(this.props.balance.financials[r]&&this.props.balance.financials[r+1]&&this.props.balance.financials[r]["Total shareholders equity"]&&this.props.balance.financials[r+1]["Total shareholders equity"]&&""!==this.props.balance.financials[r]["Total shareholders equity"]&&""!==this.props.balance.financials[r+1]["Total shareholders equity"]){var s=100*(parseFloat(this.props.balance.financials[r]["Total shareholders equity"])/parseFloat(this.props.balance.financials[r+1]["Total shareholders equity"])-1);if(r<1)e+=s,t+=s,a=Number.parseFloat(s).toFixed(2)+" %";else if(r<5)e+=s,t+=s;else{if(!(r<9))break;e+=s}}else r<1&&(a="NA",e="NA",t="NA"),r<5?(e="NA",t="NA"):e="NA";return e="NA"===e?"NA":Number.parseFloat(e/9).toFixed(2)+" %",t="NA"===t?"NA":Number.parseFloat(t/5).toFixed(2)+" %",n.a.createElement("tr",null,n.a.createElement("td",null,"\u0394 Equity",n.a.createElement(E.a,{className:"m-2 d-inline"},n.a.createElement(d.a,{placement:"right",overlay:n.a.createElement(j.a,null,"(Change in shareholders' equity)")},n.a.createElement(w.a,{icon:"question-circle"})))),n.a.createElement("td",null,a),n.a.createElement("td",null,t),n.a.createElement("td",null,e))}}]),t}(n.a.Component),k=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){for(var e=0,t=0,a=0,r=0;r<9;++r)if(r===this.props.income.financials.length-1)r<1&&(a="NA",e="NA",t="NA"),r<5?(e="NA",t="NA"):e="NA";else if(this.props.income.financials[r]&&this.props.income.financials[r+1]&&this.props.income.financials[r].EPS&&this.props.income.financials[r+1].EPS&&""!==this.props.income.financials[r].EPS&&""!==this.props.income.financials[r+1].EPS){var s=100*(parseFloat(this.props.income.financials[r].EPS)/parseFloat(this.props.income.financials[r+1].EPS)-1);if(r<1)e+=s,t+=s,a=Number.parseFloat(s).toFixed(2)+" %";else if(r<5)e+=s,t+=s;else{if(!(r<9))break;e+=s}}else r<1&&(a="NA",e="NA",t="NA"),r<5?(e="NA",t="NA"):e="NA";return e="NA"===e?"NA":Number.parseFloat(e/9).toFixed(2)+" %",t="NA"===t?"NA":Number.parseFloat(t/5).toFixed(2)+" %",n.a.createElement("tr",null,n.a.createElement("td",null,"\u0394 EPS",n.a.createElement(E.a,{className:"m-2 d-inline"},n.a.createElement(d.a,{placement:"right",overlay:n.a.createElement(j.a,null,"(Change in earnings per share)")},n.a.createElement(w.a,{icon:"question-circle"})))),n.a.createElement("td",null,a),n.a.createElement("td",null,t),n.a.createElement("td",null,e))}}]),t}(n.a.Component),q=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){for(var e=0,t=0,a=0,r=0;r<10;++r)if(r===this.props.income.financials.length)r<1&&(a="NA",e="NA",t="NA"),r<5?(e="NA",t="NA"):e="NA";else if(this.props.income.financials[r]&&this.props.income.financials[r]["Revenue Growth"]&&""!==this.props.income.financials[r]["Revenue Growth"]){var s=100*parseFloat(this.props.income.financials[r]["Revenue Growth"]);if(r<1)e+=s,t+=s,a=Number.parseFloat(s).toFixed(2)+" %";else if(r<5)e+=s,t+=s;else{if(!(r<10))break;e+=s}}else r<1&&(a="NA",e="NA",t="NA"),r<5?(e="NA",t="NA"):e="NA";return e="NA"===e?"NA":Number.parseFloat(e/10).toFixed(2)+" %",t="NA"===t?"NA":Number.parseFloat(t/5).toFixed(2)+" %",n.a.createElement("tr",null,n.a.createElement("td",null,"\u0394 Revenue",n.a.createElement(E.a,{className:"m-2 d-inline"},n.a.createElement(d.a,{placement:"right",overlay:n.a.createElement(j.a,null,"(Change in revenue)")},n.a.createElement(w.a,{icon:"question-circle"})))),n.a.createElement("td",null,a),n.a.createElement("td",null,t),n.a.createElement("td",null,e))}}]),t}(n.a.Component),R=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){for(var e=0,t=0,a=0,r=0;r<9;++r)if(r===this.props.cash.financials.length-1)r<1&&(a="NA",e="NA",t="NA"),r<5?(e="NA",t="NA"):e="NA";else if(this.props.cash.financials[r]&&this.props.cash.financials[r+1]&&this.props.cash.financials[r]["Free Cash Flow"]&&this.props.cash.financials[r+1]["Free Cash Flow"]&&""!==this.props.cash.financials[r]["Free Cash Flow"]&&""!==this.props.cash.financials[r+1]["Free Cash Flow"]){var s=100*(parseFloat(this.props.cash.financials[r]["Free Cash Flow"])/parseFloat(this.props.cash.financials[r+1]["Free Cash Flow"])-1);if(r<1)e+=s,t+=s,a=Number.parseFloat(s).toFixed(2)+" %";else if(r<5)e+=s,t+=s;else{if(!(r<9))break;e+=s}}else r<1&&(a="NA",e="NA",t="NA"),r<5?(e="NA",t="NA"):e="NA";return e="NA"===e?"NA":Number.parseFloat(e/9).toFixed(2)+" %",t="NA"===t?"NA":Number.parseFloat(t/5).toFixed(2)+" %",n.a.createElement("tr",null,n.a.createElement("td",null,"\u0394 Free Cash",n.a.createElement(E.a,{className:"m-2 d-inline"},n.a.createElement(d.a,{placement:"right",overlay:n.a.createElement(j.a,null,"(Change in free cash flow)")},n.a.createElement(w.a,{icon:"question-circle"})))),n.a.createElement("td",null,a),n.a.createElement("td",null,t),n.a.createElement("td",null,e))}}]),t}(n.a.Component),S=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){for(var e=0,t=0,a=0,r=0;r<9;++r)if(r===this.props.cash.financials.length-1)r<1&&(a="NA",e="NA",t="NA"),r<5?(e="NA",t="NA"):e="NA";else if(this.props.cash.financials[r]&&this.props.cash.financials[r+1]&&this.props.cash.financials[r]["Operating Cash Flow"]&&this.props.cash.financials[r+1]["Operating Cash Flow"]&&""!==this.props.cash.financials[r]["Operating Cash Flow"]&&""!==this.props.cash.financials[r+1]["Operating Cash Flow"]){var s=100*(parseFloat(this.props.cash.financials[r]["Operating Cash Flow"])/parseFloat(this.props.cash.financials[r+1]["Operating Cash Flow"])-1);if(r<1)e+=s,t+=s,a=Number.parseFloat(s).toFixed(2)+" %";else if(r<5)e+=s,t+=s;else{if(!(r<9))break;e+=s}}else r<1&&(a="NA",e="NA",t="NA"),r<5?(e="NA",t="NA"):e="NA";return e="NA"===e?"NA":Number.parseFloat(e/9).toFixed(2)+" %",t="NA"===t?"NA":Number.parseFloat(t/5).toFixed(2)+" %",n.a.createElement("tr",null,n.a.createElement("td",null,"\u0394 Operating Cash",n.a.createElement(E.a,{className:"m-2 d-inline"},n.a.createElement(d.a,{placement:"right",overlay:n.a.createElement(j.a,null,"(Change in operating cash flow)")},n.a.createElement(w.a,{icon:"question-circle"})))),n.a.createElement("td",null,a),n.a.createElement("td",null,t),n.a.createElement("td",null,e))}}]),t}(n.a.Component),P=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){for(var e=0,t=0,a=0,r=0;r<10;++r)if(r===this.props.metrics.metrics.length)r<1&&(a="NA",e="NA",t="NA"),r<5?(e="NA",t="NA"):e="NA";else if(this.props.metrics.metrics[r]&&this.props.metrics.metrics[r]&&""!==this.props.metrics.metrics[r]["PE ratio"]){var s=parseFloat(this.props.metrics.metrics[r]["PE ratio"]);if(r<1)e+=s,t+=s,a=Number.parseFloat(s).toFixed(2);else if(r<5)e+=s,t+=s;else{if(!(r<10))break;e+=s}}else r<1&&(a="NA",e="NA",t="NA"),r<5?(e="NA",t="NA"):e="NA";return e="NA"===e?"NA":Number.parseFloat(e/10).toFixed(2),t="NA"===t?"NA":Number.parseFloat(t/5).toFixed(2),n.a.createElement("tr",null,n.a.createElement("td",null,"PE Ratio",n.a.createElement(E.a,{className:"m-2 d-inline"},n.a.createElement(d.a,{placement:"right",overlay:n.a.createElement(j.a,null,"(Ratio of the share price to the earnings per share)")},n.a.createElement(w.a,{icon:"question-circle"})))),n.a.createElement("td",null,a),n.a.createElement("td",null,t),n.a.createElement("td",null,e))}}]),t}(n.a.Component),G=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return null==this.props.metrics?null:void 0===this.props.metrics.Error&&void 0===this.props.balance.Error&&void 0===this.props.income.Error&&void 0===this.props.cash.Error?n.a.createElement(y.a,{striped:!0,bordered:!0,hover:!0},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null),n.a.createElement("th",null,"One Year"),n.a.createElement("th",null,"Five Year Average"),n.a.createElement("th",null,"Ten Year Average"))),n.a.createElement("tbody",null,n.a.createElement(x,{metrics:this.props.metrics}),n.a.createElement(C,{balance:this.props.balance}),n.a.createElement(k,{income:this.props.income}),n.a.createElement(q,{income:this.props.income}),n.a.createElement(R,{cash:this.props.cash}),n.a.createElement(S,{cash:this.props.cash}),n.a.createElement(P,{metrics:this.props.metrics}))):null}}]),t}(n.a.Component),T=a(49),I=a.n(T),$=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){if(null==this.props.metrics)return null;if(void 0===this.props.metrics.Error&&void 0===this.props.balance.Error&&void 0===this.props.income.Error&&void 0===this.props.cash.Error&&this.props.metrics.metrics[0]&&""!==this.props.metrics.metrics[0]["Graham Number"]&&"0.0"!==this.props.metrics.metrics[0]["Graham Number"]){console.log(this.props.profile),console.log(this.props.metrics),console.log(this.props.balance),console.log(this.props.income),console.log(this.props.cash);var e=parseFloat(this.props.profile.profile.price),t=parseFloat(this.props.metrics.metrics[0]["Graham Number"]);return e<t?n.a.createElement(I.a,{variant:"success"},"Graham Number: $",Number.parseFloat(t).toFixed(2)):n.a.createElement(I.a,{variant:"secondary"},"Graham Number: $",Number.parseFloat(t).toFixed(2))}return console.log(this.props.profile),console.log(this.props.metrics),console.log(this.props.balance),console.log(this.props.income),console.log(this.props.cash),null}}]),t}(n.a.Component),Y=function(){var e=Object(o.a)(c.a.mark(function e(t){var a,r;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://financialmodelingprep.com/api/v3/company/profile/".concat(t));case 3:return a=e.sent,e.next=6,a.json();case 6:return r=e.sent,e.abrupt("return",r);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",{error:e.t0});case 13:case"end":return e.stop()}},e,null,[[0,10]])}));return function(t){return e.apply(this,arguments)}}(),K=function(){var e=Object(o.a)(c.a.mark(function e(t){var a,r;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://financialmodelingprep.com/api/v3/company-key-metrics/".concat(t));case 3:return a=e.sent,e.next=6,a.json();case 6:return r=e.sent,e.abrupt("return",r);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",{error:e.t0});case 13:case"end":return e.stop()}},e,null,[[0,10]])}));return function(t){return e.apply(this,arguments)}}(),W=function(){var e=Object(o.a)(c.a.mark(function e(t){var a,r;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://financialmodelingprep.com/api/v3/financials/balance-sheet-statement/".concat(t));case 3:return a=e.sent,e.next=6,a.json();case 6:return r=e.sent,e.abrupt("return",r);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",{error:e.t0});case 13:case"end":return e.stop()}},e,null,[[0,10]])}));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(o.a)(c.a.mark(function e(t){var a,r;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://financialmodelingprep.com/api/v3/financials/income-statement/".concat(t));case 3:return a=e.sent,e.next=6,a.json();case 6:return r=e.sent,e.abrupt("return",r);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",{error:e.t0});case 13:case"end":return e.stop()}},e,null,[[0,10]])}));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(o.a)(c.a.mark(function e(t){var a,r;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://financialmodelingprep.com/api/v3/financials/cash-flow-statement/".concat(t));case 3:return a=e.sent,e.next=6,a.json();case 6:return r=e.sent,e.abrupt("return",r);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",{error:e.t0});case 13:case"end":return e.stop()}},e,null,[[0,10]])}));return function(t){return e.apply(this,arguments)}}(),L=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).search=function(){var e=Object(o.a)(c.a.mark(function e(t){var r,n,s,i,l,o;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),""===a.symbolRef.current.value){e.next=22;break}return r=a.symbolRef.current.value.toUpperCase(),a.setState({error:!1,loading:!0,profile:null,metrics:null,balance:null,income:null,cash:null}),e.next=6,Y(r);case 6:return n=e.sent,e.next=9,K(r);case 9:return s=e.sent,e.next=12,W(r);case 12:return i=e.sent,e.next=15,B(r);case 15:return l=e.sent,e.next=18,J(r);case 18:o=e.sent,a.setState({loading:!1,profile:n,metrics:s,balance:i,income:l,cash:o}),e.next=23;break;case 22:a.setState({error:!0,loading:!1,profile:null,metrics:null,balance:null,income:null,cash:null});case 23:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.symbolRef=n.a.createRef(),a.state={error:!1,loading:!1,profile:null,metrics:null,balance:null,income:null,cash:null},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"App container"},n.a.createElement("div",{className:"row justify-content-center m-4"},n.a.createElement(N.a,{inline:!0,onSubmit:this.search},n.a.createElement(N.a.Group,null,n.a.createElement(N.a.Label,{className:"m-2"},"Stock Symbol"),n.a.createElement(N.a.Control,{className:"m-2",type:"text",ref:this.symbolRef,placeholder:"(e.g. 'aapl')"})),n.a.createElement(b.a,{variant:"primary",className:"m-2",type:"submit"},"Submit"),n.a.createElement(E.a,{className:"m-2"},n.a.createElement(d.a,{placement:"right",overlay:n.a.createElement(A.a,{id:"popover-basic",title:"What is this all about?"},"Good things come to those who wait.",n.a.createElement("span",{role:"img","aria-label":"Smiley face"},"\ud83d\ude0a"))},n.a.createElement(w.a,{icon:"question-circle"}))))),n.a.createElement("div",{className:"row justify-content-center m-4"},this.state.error&&n.a.createElement(v.a,{variant:"danger"},n.a.createElement("p",{className:"m-0"},"You need to enter a stock symbol to search for.")),this.state.loading&&n.a.createElement(w.a,{className:"fa-spin",size:"lg",icon:"spinner"}),this.state.metrics&&n.a.createElement(F.a,{defaultActiveKey:"quinton",className:"w-100"},n.a.createElement(O.a,{eventKey:"quinton",title:"Quinton"},n.a.createElement("div",{className:"row justify-content-center"},n.a.createElement(g,{profile:this.state.profile}),n.a.createElement(G,{metrics:this.state.metrics,balance:this.state.balance,income:this.state.income,cash:this.state.cash}),n.a.createElement($,{profile:this.state.profile,metrics:this.state.metrics,balance:this.state.balance,income:this.state.income,cash:this.state.cash}))),n.a.createElement(O.a,{eventKey:"ellen",title:"Ellen"}))))}}]),t}(n.a.Component),z=(a(109),a(33)),D=a(50);z.b.add(D.b,D.a);var H=function(){return n.a.createElement(L,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},63:function(e,t,a){e.exports=a(110)},68:function(e,t,a){}},[[63,1,2]]]);
//# sourceMappingURL=main.304114fa.chunk.js.map