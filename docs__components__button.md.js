(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"+pnj":function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),l=n("dEAq"),c={"zh-CN":{name:"\u5c5e\u6027\u540d",description:"\u63cf\u8ff0",type:"\u7c7b\u578b",default:"\u9ed8\u8ba4\u503c",required:"(\u5fc5\u9009)"},"en-US":{name:"Name",description:"Description",type:"Type",default:"Default",required:"(required)"}};t["a"]=function(e){var t=e.identifier,n=e.export,i=Object(l["useApiData"])(t),o=Object(a["useContext"])(l["context"]),u=o.locale,m=/^zh|cn$/i.test(u)?c["zh-CN"]:c["en-US"];return r.a.createElement(r.a.Fragment,null,i&&r.a.createElement("table",{style:{marginTop:24}},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,m.name),r.a.createElement("th",null,m.description),r.a.createElement("th",null,m.type),r.a.createElement("th",null,m.default))),r.a.createElement("tbody",null,i[n].map((function(e){return r.a.createElement("tr",{key:e.identifier},r.a.createElement("td",null,e.identifier),r.a.createElement("td",null,e.description||"--"),r.a.createElement("td",null,r.a.createElement("code",null,e.type)),r.a.createElement("td",null,r.a.createElement("code",null,e.default||e.required&&m.required||"--")))})))))}},"9kvl":function(e,t,n){"use strict";var a=n("FfOG");n.d(t,"a",(function(){return a["b"]}));n("bCY9")},iXDw:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),l=n("dEAq"),c=n("+pnj"),i=n("Zxc8"),o=r.a.memo((e=>{var t=e.demos,n=t["button-basic"].component;return r.a.createElement(r.a.Fragment,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"button"},r.a.createElement(l["AnchorLink"],{to:"#button","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"Button"),r.a.createElement("p",null,"\u57fa\u7840\u6309\u94ae"),r.a.createElement("h2",{id:"\u4ee3\u7801\u6f14\u793a"},r.a.createElement(l["AnchorLink"],{to:"#\u4ee3\u7801\u6f14\u793a","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a"),r.a.createElement("h3",{id:"\u57fa\u672c\u7528\u6cd5"},r.a.createElement(l["AnchorLink"],{to:"#\u57fa\u672c\u7528\u6cd5","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u672c\u7528\u6cd5")),r.a.createElement(i["default"],t["button-basic"].previewerProps,r.a.createElement(n,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("h2",{id:"api"},r.a.createElement(l["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"API"),r.a.createElement(c["a"],{src:"../../src/button/Button.tsx",identifier:"Button",export:"default"}))))}));t["default"]=e=>{var t=r.a.useContext(l["context"]),n=t.demos;return r.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&l["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.a.createElement(o,{demos:n})}}}]);