(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[6],{245:function(n,e,t){n.exports=t.p+"static/media/validation-error.71832570.svg"},250:function(n,e,t){"use strict";function r(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var a=t(2),o=t(0),c=t.n(o),i=t(3),u=t(6),l=t(245),p=t.n(l);function s(){var n=Object(a.a)(["\n  position: relative;\n  width: 100%;\n  text-align: center;\n  border-radius: 4px;\n\n  &::before {\n    content: '","';\n    display: ",";\n    position: absolute;\n    padding: 5px 10px;\n    top: 50%;\n    left: ",";\n    opacity: ",";\n    width: 200px;\n    transform: translate(-100%, -50%);\n    border-radius: 2px;\n    background-color: ",";\n    box-shadow: 0 0 0 1px ",", 0 1px 10px rgba(0, 0, 0, .35);\n    color: ",";\n    transition: opacity 0.3s ease-in-out;\n  }\n\n  &::after {\n    content: '';\n    display: ",";\n    position: absolute;\n    top: 50%;\n    right: 10px;\n    width: 20px;\n    height: 20px;\n    transform: translateY(-50%);\n    background: url(",") center no-repeat;\n    background-size: cover;\n  }\n"]);return s=function(){return n},n}function d(){var n=Object(a.a)(["\n  padding: 9px;\n  padding-right: 30px;\n  border-radius: 4px;\n  border: 1px solid ",";\n  background-color: ",";\n"]);return d=function(){return n},n}var h=i.b.input(d(),(function(n){return n.hasError?u.a.errorBorder:u.a.border}),u.a.light),b=i.b.div(s(),(function(n){return n.error}),(function(n){return n.error?"block":"none"}),(function(n){return n.active?"-20px":"-9999px"}),(function(n){return n.active?"1":"0"}),u.a.error,u.a.errorShadow,u.a.light,(function(n){return n.hasError?"block":"none"}),p.a);e.a=function(n){var e=n.meta,t=n.input,a=r(n,["meta","input"]),o=e.error,i=e.active,u=e.visited,l=e.submitFailed,p=o&&!i&&(u||l);return c.a.createElement(b,{error:o,active:i,hasError:p},c.a.createElement(h,Object.assign({},a,t,{hasError:p})))}},327:function(n,e,t){"use strict";t.r(e);var r=t(37),a=t(38),o=t(40),c=t(39),i=t(41),u=t(0),l=t.n(u),p=t(16),s=t(2),d=t(3),h=t(69),b=t(6),f=(t(78),t(127)),g=t(128),m=t(250);function x(){var n=Object(s.a)(["\n  margin-left: 5px;\n  background-color: transparent;\n  text-align: left;\n  color: ",";\n"]);return x=function(){return n},n}function v(){var n=Object(s.a)(["\n  width: 20px;\n  height: 20px;\n  border-radius: 4px;\n  border: 1px solid ",";\n  background-color: ",";\n  text-align: center;\n\n  &::before {\n    content: '\u2714';\n    display: ",";\n    line-height: 20px;\n    color: ",";\n  }\n"]);return v=function(){return n},n}function y(){var n=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  user-select: none;\n"]);return y=function(){return n},n}var O=d.b.div(y()),j=d.b.label(v(),b.a.border,b.a.gray,(function(n){return n.checked?"inline":"none"}),b.a.secondary),E=d.b.label(x(),b.a.textTwo),k=function(n){var e="toggle_".concat(Math.random().toString().replace(/0\./,""));return l.a.createElement(O,null,l.a.createElement("input",Object.assign({},n.input,{id:e,type:"checkbox",hidden:!0})),l.a.createElement(j,{onMouseDown:n.input.onFocus,onMouseUp:n.input.onBlur,htmlFor:e,checked:n.input.checked}),l.a.createElement(E,{onMouseDown:n.input.onFocus,onMouseUp:n.input.onBlur,htmlFor:e},n.placeholder))},w=t(36);function F(){var n=Object(s.a)(["\n  color: ",";\n  font-size: 20px;\n"]);return F=function(){return n},n}function C(){var n=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 200px;\n  height: 100px;\n  margin: 10px 0 20px;\n  display: flex;\n  background: "," url(",") center no-repeat;\n  background-size: cover;\n  cursor: pointer;\n  pointer-events: ",";\n  user-select: none;\n"]);return C=function(){return n},n}var I=d.b.div(C(),b.a.gray,(function(n){return n.captcha}),(function(n){return n.isFetchingCaptchaInProgress?"none":"auto"})),P=d.b.span(F(),b.a.textThree),M=function(n){return l.a.createElement(I,{captcha:n.captcha,onClick:n.getCaptcha,isFetchingCaptchaInProgress:n.isFetchingCaptchaInProgress},n.captcha||n.isFetchingCaptchaInProgress?void 0:l.a.createElement(P,null,"click me"),n.isFetchingCaptchaInProgress?l.a.createElement(w.a,null):void 0)},S=function(n){if(!n)return"\u042d\u0442\u043e \u043f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f!"},A=function(n){return function(e){if(String(e).length>n)return"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e ".concat(n," \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432")}};function D(){var n=Object(s.a)(["\n  margin-top: 15px;\n  padding: 10px;\n  width: 100%;\n  border: none;\n  border-radius: 4px;\n  background-color: ",";\n  font-weight: 600;\n  color: ",";\n"]);return D=function(){return n},n}function z(){var n=Object(s.a)(["\n  align-self: flex-start;\n  padding: 4px 0 10px;\n"]);return z=function(){return n},n}function B(){var n=Object(s.a)(["\n  margin-bottom: 6px;\n  width: 100%;\n"]);return B=function(){return n},n}function U(){var n=Object(s.a)(["\n  background-color: ",";\n  width: 100%;\n"]);return U=function(){return n},n}function J(){var n=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 270px;\n"]);return J=function(){return n},n}var T=d.b.form(J()),V=Object(d.b)(m.a)(U(),b.a.gray),Y=d.b.div(B()),_=d.b.div(z()),q=d.b.button(D(),b.a.secondary,b.a.light),G=A(6),H=A(30),K=Object(g.a)({form:"login"})((function(n){return l.a.createElement(T,{onSubmit:n.handleSubmit,autoComplete:"true",noValidate:!0},l.a.createElement(Y,null,l.a.createElement(f.a,{name:"email",component:V,type:"email",placeholder:"Email",validate:[S,H]})),l.a.createElement(Y,null,l.a.createElement(f.a,{name:"password",component:V,type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",validate:[S,H]})),l.a.createElement(_,null,l.a.createElement(f.a,{name:"rememberMe",component:k,type:"checkbox",placeholder:"\u0417\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c \u043c\u0435\u043d\u044f"})),n.captcha?l.a.createElement(l.a.Fragment,null,l.a.createElement(M,{captcha:n.captcha,getCaptcha:n.getCaptcha,isFetchingCaptchaInProgress:n.isFetchingCaptchaInProgress}),l.a.createElement(f.a,{name:"captcha",component:V,type:"text",placeholder:"\u041a\u0430\u043f\u0442\u0447\u0430",validate:n.captcha?[S,G]:[G]})):void 0,l.a.createElement(q,{type:"submit"},"\u0412\u043e\u0439\u0442\u0438"))}));function L(){var n=Object(s.a)(["\n  margin-bottom: 12px;\n  width: 175px;\n"]);return L=function(){return n},n}function N(){var n=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 0 auto;\n  padding: 40px 0;\n  width: 350px;\n  border: 1px solid ",";\n  background-color: ",";\n"]);return N=function(){return n},n}function Q(){var n=Object(s.a)(["\n  padding: 20px 0;\n"]);return Q=function(){return n},n}function R(){var n=Object(s.a)([""]);return R=function(){return n},n}var W=d.b.main(R()),X=Object(d.b)(h.a)(Q()),Z=d.b.div(N(),b.a.border,b.a.light),$=(d.b.div(L()),function(n){return l.a.createElement(W,null,l.a.createElement(X,null,l.a.createElement(Z,null,l.a.createElement(K,n))))}),nn=t(44),en=t(26),tn=function(n){function e(){var n,t;Object(r.a)(this,e);for(var a=arguments.length,i=new Array(a),u=0;u<a;u++)i[u]=arguments[u];return(t=Object(o.a)(this,(n=Object(c.a)(e)).call.apply(n,[this].concat(i)))).login=function(n){var e=n.email,r=n.password,a=n.rememberMe,o=n.captcha;t.props.login(e,r,a,o)},t}return Object(i.a)(e,n),Object(a.a)(e,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){return this.props.isFetching?l.a.createElement(w.a,null):this.props.isAuth?l.a.createElement(en.a,{to:"/"}):l.a.createElement($,Object.assign({},this.props,{onSubmit:this.login}))}}]),e}(l.a.Component);e.default=Object(p.b)((function(n){return{userId:n.auth.userId,email:n.auth.email,login:n.auth.login,isFetching:n.auth.isFetching,isAuth:n.auth.isAuth,captcha:n.auth.captcha,isFetchingCaptchaInProgress:n.auth.isFetchingCaptchaInProgress}}),{login:nn.d,getCaptcha:nn.c})(tn)}}]);
//# sourceMappingURL=6.9e78942f.chunk.js.map