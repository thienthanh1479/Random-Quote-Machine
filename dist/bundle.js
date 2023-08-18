!function(){"use strict";var t,e={246:function(t,e,r){var n=r(294),o=r(745),a=r(861);function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function c(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==i(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===i(o)?o:String(o)),n)}var o}function u(t,e){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},u(t,e)}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function f(t){return f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},f(t)}var s=[],m=0,p=Math.floor(16777215*Math.random()).toString(16),d=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&u(t,e)}(b,t);var e,r,o,d,h=(o=b,d=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=f(o);if(d){var r=f(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===i(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return l(t)}(this,t)});function b(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,b),(e=h.call(this,t)).state={id:0,quote:"",author:"",color:p},e.handleClick=e.handleClick.bind(l(e)),e}return e=b,(r=[{key:"componentDidMount",value:function(){var t=this;a.Z.get("https://dummyjson.com/quotes").then((function(e){s=e.data.quotes,console.log(s),t.setState({id:m,quote:s[m].quote,author:s[m].author,color:p})})).catch((function(t){return console.log(t)}))}},{key:"handleClick",value:function(){var t=this;m=function e(r){return r!==t.state.id?r:e(Math.floor(Math.random()*s.length))}(Math.floor(Math.random()*s.length)),p=Math.floor(16777215*Math.random()).toString(16),this.setState({id:m,quote:s[m].quote,author:s[m].author,color:p})}},{key:"render",value:function(){return n.createElement("div",{style:{color:"#"+this.state.color}},n.createElement("p",{id:"text",className:"quote text-center"},n.createElement("i",{className:"fa-solid fa-quote-left"})," ",this.state.quote," ",n.createElement("i",{className:"fa-solid fa-quote-right"})),n.createElement("p",{id:"author",className:"author text-end"},"- ",this.state.author," -"),n.createElement("div",{className:"row buttons"},n.createElement("div",{className:"col-8 text-left left"},n.createElement("a",{href:"https://twitter.com/intent/tweet",target:"_blank",id:"tweet-quote",className:"btn btn-primary"},n.createElement("i",{className:"fa-brands fa-twitter"})),n.createElement("a",{className:"btn btn-primary"},n.createElement("i",{className:"fa-brands fa-tumblr"}))),n.createElement("div",{className:"col-4 text-end"},n.createElement("button",{id:"new-quote",className:"btn btn-primary",onClick:this.handleClick},"New quote"))))}}])&&c(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),b}(n.Component);r(138),(0,o.s)(document.getElementById("quote-box")).render(n.createElement(d,null))}},r={};function n(t){var o=r[t];if(void 0!==o)return o.exports;var a=r[t]={exports:{}};return e[t](a,a.exports,n),a.exports}n.m=e,t=[],n.O=function(e,r,o,a){if(!r){var i=1/0;for(f=0;f<t.length;f++){r=t[f][0],o=t[f][1],a=t[f][2];for(var c=!0,u=0;u<r.length;u++)(!1&a||i>=a)&&Object.keys(n.O).every((function(t){return n.O[t](r[u])}))?r.splice(u--,1):(c=!1,a<i&&(i=a));if(c){t.splice(f--,1);var l=o();void 0!==l&&(e=l)}}return e}a=a||0;for(var f=t.length;f>0&&t[f-1][2]>a;f--)t[f]=t[f-1];t[f]=[r,o,a]},n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},function(){var t={296:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,a,i=r[0],c=r[1],u=r[2],l=0;if(i.some((function(e){return 0!==t[e]}))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(u)var f=u(n)}for(e&&e(r);l<i.length;l++)a=i[l],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(f)},r=self.webpackChunkrandom_quote_machine=self.webpackChunkrandom_quote_machine||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var o=n.O(void 0,[736],(function(){return n(246)}));o=n.O(o)}();
//# sourceMappingURL=bundle.js.map