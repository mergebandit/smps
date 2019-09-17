(window["webpackJsonpshipping-label-maker"]=window["webpackJsonpshipping-label-maker"]||[]).push([[0],{169:function(e,t,a){e.exports=a(352)},352:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(10),i=a.n(l),o=a(20),c=a(164),s=a(17),u=a(9),m=a(34),p=a(33);var d=function(e){return s.a.create({name:"normal_login"})(function(t){var a=t.form,l=Object(c.a)(t,["form"]),i=a.getFieldDecorator,d=a.validateFields,g=a.isFieldTouched,E=a.getFieldError,f=a.getFieldsError,h=Object(n.useState)(!1),b=Object(o.a)(h,2),v=b[0],y=b[1];if(Object(n.useEffect)(function(){d()},[d]),v)return r.a.createElement(e,l);var w,O=g("email")&&E("email"),S=g("password")&&E("password");return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Please Login to our Sooper Secure website..."),r.a.createElement(s.a,{onSubmit:function(){y(!0)},className:"login-form",style:{maxWidth:300,padding:24}},r.a.createElement(s.a.Item,{label:"Email",validateStatus:O?"error":"",help:O||""},i("email",{rules:[{required:!0,min:5,message:"Please input your email!"}]})(r.a.createElement(m.a,{prefix:r.a.createElement(u.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Email"}))),r.a.createElement(s.a.Item,{label:"Password",validateStatus:S?"error":"",help:S||""},i("password",{rules:[{required:!0,min:5,message:"Please input your Password!"}]})(r.a.createElement(m.a,{prefix:r.a.createElement(u.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Password"}))),r.a.createElement(s.a.Item,null,r.a.createElement(p.a,{type:"primary",disabled:(w=f(),Object.keys(w).some(function(e){return w[e]})),htmlType:"submit",className:"login-form-button",style:{width:"100%"}},"Log in"))))})},g=a(91),E=a(23),f=a(13);var h=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if("undefined"===typeof e)throw new Error("You must pass totalItems to the useCurrentIndex hook");var a=Object(n.useState)(0),r=Object(o.a)(a,2),l=r[0],i=r[1];return[l,function(){(t||0!==l)&&i(0===l?e-1:l-1)},function(){(t||l+1!==e)&&i(l===e-1?0:l+1)}]},b={prev:1,next:2,end:3};function v(e){var t=e.header,a=e.steps,n=e.wizardContext,l=e.onComplete,i=h(a.length),c=Object(o.a)(i,3),s=c[0],u=c[1],m=c[2],p=a[s];return r.a.createElement(r.a.Fragment,null,r.a.createElement(t,{progress:(s+1)/a.length*100}),r.a.createElement(p,{wizardContext:n,onAction:function(e){switch(e){case b.prev:u();break;case b.next:m();break;case b.end:l();break;default:throw new Error("Invalid Wizard Step")}}}))}var y=a(42),w=a(28),O=a(162),S=a(43);function j(){var e=Object(y.a)(["\n  margin-bottom: 40px;\n"]);return j=function(){return e},e}var x=w.a.Title,C=S.a.header(j());var P=function(e){var t=e.progress;return r.a.createElement(C,null,r.a.createElement(x,null,"Shipping Label Maker"),r.a.createElement(O.a,{percent:t,showInfo:!1}))},I=a(155),F={from:{name:"",street:"",city:"",state:"",zip:""},to:{name:"",street:"",city:"",state:"",zip:""},weight:0,shippingOption:1};function k(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function A(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?k(a,!0).forEach(function(t){Object(I.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):k(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var z=Object(n.createContext)(),T=z.Provider;z.Consumer;function D(e,t){switch(t.type){case"receiver":return A({},e,{to:t.payload});case"sender":return A({},e,{from:t.payload});case"weight":return A({},e,{weight:t.payload});case"shippingOption":return A({},e,{shippingOption:t.payload});default:throw new Error("Invalid action dispatched to shipping-info reducer")}}function V(e){var t=e.children,a=Object(n.useReducer)(D,F),l=Object(o.a)(a,2),i=l[0],c=l[1];return r.a.createElement(T,{value:{shippingInfo:i,setReceiver:function(e){return c({type:"receiver",payload:e})},setSender:function(e){return c({type:"sender",payload:e})},setWeight:function(e){return c({type:"weight",payload:e})},setShippingOption:function(e){return c({type:"shippingOption",payload:e})}}},t)}var W=a(118),q=a.n(W),L=a(156);function M(){var e=Object(y.a)(["\n  text-align: center;\n  && {\n    margin-bottom: 0;\n  }\n"]);return M=function(){return e},e}function N(){var e=Object(y.a)(["\n  font-size: 200px;\n  line-height: 1;\n  text-align: center;\n  border-right: 1px solid black;\n  margin-bottom: 0;\n"]);return N=function(){return e},e}function B(){var e=Object(y.a)(["\n  width: 8px;\n  display: inline-block;\n"]);return B=function(){return e},e}function R(){var e=Object(y.a)(["\n  border: 1px solid black;\n  padding: 10px;\n"]);return R=function(){return e},e}function G(){var e=Object(y.a)(["\n  min-height: 192px;\n"]);return G=function(){return e},e}var U=w.a.Title,Z=Object(S.a)(s.a)(G()),H=Object(S.a)(E.a)(R()),J=S.a.div(B()),Y=S.a.h6(N()),$=Object(S.a)(U)(M()),_=w.a.Title;function K(e){return Object.keys(e).some(function(t){return e[t]})}var Q=s.a.create({onValuesChange:function(){var e=Object(L.a)(q.a.mark(function e(t,a,n){var r,l,i,o;return q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.onValidate,l=t.onAddressChange,i=t.form,o=i.getFieldsError,e.next=4,o();case 4:e.sent,K(o())?r(!1):(l(n),r(!0));case 7:case"end":return e.stop()}},e)}));return function(t,a,n){return e.apply(this,arguments)}}()})(function(e){var t=e.form,a=e.title,l=(e.onFormChange,t.validateFields);Object(n.useEffect)(function(){l()},[l]);var i=t.getFieldDecorator,o=t.getFieldError,c=t.isFieldTouched,p=c("name")&&o("name"),d=c("street")&&o("street"),g=c("city")&&o("city"),h=c("state")&&o("state"),b=c("zip")&&o("zip"),v={labelCol:{md:24,lg:2},wrapperCol:{md:24,lg:22}};return r.a.createElement(r.a.Fragment,null,r.a.createElement(_,{level:2},a),r.a.createElement(Z,{"data-testid":"address-form"},r.a.createElement(s.a.Item,Object.assign({label:"Name",validateStatus:p?"error":"",help:p||""},v),i("name",{rules:[{required:!0,min:3,message:"Please input your name!"}]})(r.a.createElement(m.a,{prefix:r.a.createElement(u.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Name"}))),r.a.createElement(s.a.Item,Object.assign({label:"Street",validateStatus:d?"error":"",help:d||""},v),i("street",{rules:[{required:!0,min:3,message:"Please input your street!"}]})(r.a.createElement(m.a,{prefix:r.a.createElement(u.a,{type:"home",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Street"}))),r.a.createElement(E.a,null,r.a.createElement(f.a,{lg:10},r.a.createElement(s.a.Item,{label:"City",validateStatus:g?"error":"",help:g||"",labelCol:{md:24,lg:5},wrapperCol:{md:24,lg:17},style:{marginLeft:"-4px"}},i("city",{rules:[{required:!0,min:3,message:"Please input your city!"}]})(r.a.createElement(m.a,{prefix:r.a.createElement(u.a,{type:"home",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"City"})))),r.a.createElement(f.a,{lg:6},r.a.createElement(s.a.Item,{label:"State",validateStatus:h?"error":"",help:h||"",labelCol:{md:24,lg:7},wrapperCol:{md:24,lg:17}},i("state",{rules:[{required:!0,min:2,message:"Please input your state!"}]})(r.a.createElement(m.a,{prefix:r.a.createElement(u.a,{type:"home",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"State"})))),r.a.createElement(f.a,{lg:8},r.a.createElement(s.a.Item,{label:"Zip",validateStatus:b?"error":"",help:b||"",labelCol:{md:24,lg:7},wrapperCol:{md:24,lg:17}},i("zip",{rules:[{required:!0,message:"Please input your zip!"}]})(r.a.createElement(m.a,{prefix:r.a.createElement(u.a,{type:"code",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Zip"})))))))});function X(e){var t=e.onAction,a=e.isValid,n=e.isLastStep,l={type:n?"primary":"default",text:n?"Print Label":"Next",action:n?b.end:b.next},i=l.type,o=l.text,c=l.action;return r.a.createElement(E.a,{type:"flex",justify:"center"},r.a.createElement(p.a,{onClick:function(){return t(b.prev)}},"Prev"),r.a.createElement(J,null),r.a.createElement(p.a,{"data-testid":"next-button",type:i,disabled:!a,onClick:function(){return t(c)}},o))}function ee(e){var t=e.onAction,a=e.wizardContext,l=Object(n.useState)(!1),i=Object(o.a)(l,2),c=i[0],s=i[1],u=a.setReceiver;return r.a.createElement("div",{"data-testid":"receiver-address-wrapper"},r.a.createElement(Q,{title:"Enter the receiver's address:",onValidate:s,onAddressChange:function(e){u(e)}}),r.a.createElement(X,{onAction:t,isValid:c}))}function te(e){var t=e.onAction,a=e.wizardContext,l=Object(n.useState)(!1),i=Object(o.a)(l,2),c=i[0],s=i[1],u=a.setSender;return r.a.createElement("div",{"data-testid":"sender-address-wrapper"},r.a.createElement(Q,{title:"Enter the sender's address:",onValidate:s,onAddressChange:function(e){u(e)}}),r.a.createElement(X,{onAction:t,isValid:c}))}var ae=a(163),ne=w.a.Title;var re=s.a.create()(function(e){var t=e.form,a=e.onAction,l=e.wizardContext,i=t.validateFields;Object(n.useEffect)(function(){i()},[i]);var o=l.setWeight,c=t.getFieldDecorator,m=t.getFieldError,p=t.isFieldTouched,d=t.getFieldValue,g=p("weight")&&m("weight"),E=!m("weight")&&!!d("weight");return r.a.createElement(r.a.Fragment,null,r.a.createElement(ne,{level:2},"Enter the package weight:"),r.a.createElement(Z,{"data-testid":"shipping-weight-form"},r.a.createElement(s.a.Item,Object.assign({label:"Weight",validateStatus:g?"error":"",help:g||""},{labelCol:{span:2},wrapperCol:{span:22}}),c("weight",{rules:[{required:!0,type:"number",message:"Please input shipping weight!"}]})(r.a.createElement(ae.a,{prefix:r.a.createElement(u.a,{type:"dropbox",style:{color:"rgba(0,0,0,.25)"}}),min:0,placeholder:"Weight",onChange:o,style:{width:"100%"}})))),r.a.createElement(X,{onAction:a,isValid:E}))}),le=a(90),ie=w.a.Title,oe={ground:1,priority:2};var ce=s.a.create()(function(e){e.form;var t=e.onAction,a=e.wizardContext,l=Object(n.useState)(!1),i=Object(o.a)(l,2),c=i[0],u=i[1],m=a.setShippingOption;return r.a.createElement(r.a.Fragment,null,r.a.createElement(ie,{"data-testid":"shipping-option",level:2},"Select your shipping option:"),r.a.createElement(Z,{"data-testid":"shipping-option-form"},r.a.createElement(s.a.Item,Object.assign({label:"Shipping Option"},{labelCol:{span:4},wrapperCol:{span:12}}),r.a.createElement(le.a.Group,{onChange:function(e){u(!0),m(parseInt(e.target.value,10))}},r.a.createElement(le.a.Button,{value:oe.ground},"Ground"),r.a.createElement(le.a.Button,{value:oe.priority},"Priority")))),r.a.createElement(X,{onAction:t,isValid:c}))}),se=a(161),ue=a(53),me=a(160),pe=a(157),de=a.n(pe),ge=a(158),Ee=a.n(ge),fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"en-US",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"currency",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"USD";return new Intl.NumberFormat(e,{style:t,currency:a})},he=w.a.Title;function be(e){var t=e.onAction,a=e.wizardContext,l=Object(n.useState)(!0),i=Object(o.a)(l,2),c=i[0],s=i[1];Object(n.useEffect)(function(){setTimeout(function(){s(!1)},1e3)},[]);var m=a.shippingInfo,p=m.from,d=m.to,g=m.weight,E=m.shippingOption,h=fe().format(.4*g*(E===oe.ground?1:1.5)),b=fe().format(.4),v=(new Date).toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"}),y=Math.round(10*Math.random()),w={label:E===oe.ground?"Ground":"Priority",letter:E===oe.ground?"G":"P",multiplier:E===oe.ground?"1.0":"1.5"},O=JSON.stringify(m);return r.a.createElement("div",{"data-testid":"shipping-confirm"},r.a.createElement(ue.a,{column:1,bordered:!0,title:"Cost",style:{marginBottom:40}},r.a.createElement(ue.a.Item,{label:"Shipping Rate"},b),r.a.createElement(ue.a.Item,{label:"Shipping Option"},"x ",w.multiplier," (",w.label,")"),r.a.createElement(ue.a.Item,{label:"Weight"},"x ",g," (lbs)"),r.a.createElement(ue.a.Item,{label:"Total"},r.a.createElement("strong",{"data-testid":"shipping-cost"},h))),r.a.createElement(H,null,r.a.createElement(f.a,{lg:1},r.a.createElement(u.a,{type:"mail",style:{fontSize:24},theme:"twoTone"})),r.a.createElement(f.a,{lg:11},"Snail Mail Postage Service"),r.a.createElement(f.a,{lg:12},r.a.createElement(he,{level:4,style:{textAlign:"right",marginBottom:0,lineHeight:1}},"Clever Trademark Here \xae"))),r.a.createElement(H,null,r.a.createElement(f.a,{lg:6},r.a.createElement(Y,null,w.letter)),r.a.createElement(f.a,{lg:8,offset:2},r.a.createElement(he,{level:4},"US POSTAGE AND FEES PAID"),r.a.createElement("p",null,v),r.a.createElement("p",null,"Mailed From ZIP ",p.zip),r.a.createElement("p",null,g," lb ",w.label," Rate"),r.a.createElement("p",null,"Zone ",y)),r.a.createElement(f.a,{lg:8},r.a.createElement(de.a,{size:192,value:O}))),r.a.createElement(H,null,r.a.createElement($,{level:3},"SMPS ",w.label," Mail")),r.a.createElement(H,null,r.a.createElement(f.a,{lg:12},r.a.createElement("address",null,r.a.createElement("div",null,p.name),r.a.createElement("div",null,p.street),r.a.createElement("div",null,"".concat(p.city," ").concat(p.state,", ").concat(p.zip)))),r.a.createElement(f.a,{lg:12,offset:12},r.a.createElement(se.a,{title:"Recipient Address",loading:c},r.a.createElement("div",null,d.name),r.a.createElement("div",null,d.street),r.a.createElement("div",null,"".concat(d.city," ").concat(d.state,", ").concat(d.zip))))),r.a.createElement(H,null,r.a.createElement(f.a,{xs:24},r.a.createElement("div",{style:{textAlign:"center"}},"SMPS Tracking #")),r.a.createElement(f.a,{xs:24},r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(Ee.a,{value:"PublicisSapient FTW"})))),r.a.createElement(me.a,null),r.a.createElement(X,{onAction:t,isValid:!0,isLastStep:!0}))}var ve=g.a.Header,ye=g.a.Content,we=d(function(){var e=Object(n.useContext)(z),t=[te,ee,re,ce,be];return r.a.createElement(v,{wizardContext:e,header:P,steps:t,onComplete:function(){console.log("shippingInfo",e.shippingInfo)}})});var Oe=function(){return r.a.createElement(g.a,{style:{height:"100vh"}},r.a.createElement(ve,null),r.a.createElement(ye,{style:{marginBottom:40}},r.a.createElement(E.a,{style:{marginTop:40}},r.a.createElement(f.a,{span:14,offset:5},r.a.createElement(V,null,r.a.createElement(we,null))))))};a(351),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(Oe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[169,1,2]]]);
//# sourceMappingURL=main.f6c133be.chunk.js.map