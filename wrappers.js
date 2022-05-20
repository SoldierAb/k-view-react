(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"9kvl":function(t,e,n){"use strict";var r=n("FfOG");n.d(e,"a",(function(){return r["b"]}));n("bCY9")},afA6:function(t,e,n){"use strict";n.r(e);var r=n("0Owb"),o=n("q1tI"),s=n.n(o),i=n("q3YX"),a=n("9og8"),p=n("WmNS"),c=n.n(p),u=n("rlch"),l="import React from 'react'\nimport KButton from '../Button'\nimport '../style'\n\nexport default ()=> <KButton type=\"success\">primary\u6309\u94ae</KButton>",m="import React from 'react'\nimport type { ReactFragment } from 'react'\nimport t from 'prop-types'\n\nexport interface ButtonProps {\n    /**\n     * @description Button \u7c7b\u578b\n     * @default 'primary'' \n     */\n    type?: 'primary' | 'success' | 'warning' |'error';\n    children?: ReactFragment\n}\n\nconst prefixCls = 'k';\n\nexport type ButtonTypes = Record<Required<ButtonProps>['type'], string>\n\nconst types: ButtonTypes = {\n  primary: '#5352ED',\n  success: '#2ED573',\n  warning: '#FFA502',\n  error: '#FF4757',\n}\n\nconst Button: React.FC<ButtonProps> = ({ children, type = 'primary', ...rest}) => {\n    return <button className={`${prefixCls}-button-container`} style={{background: types[type]}} {...rest}>{children}</button>\n}\n\nButton.propTypes = {\n    type: t.oneOf(['primary', 'success', 'warning', 'error'])\n}\n\nexport default Button",d="import './index.less'",f="@root-prefix-cls: 'k';\n\n@prefix-cls: @root-prefix-cls + 'button';\n\n.@{prefix-cls} {\n    background: white;\n    padding: 10px;\n}",y={"button-basic":{component:Object(u["c"])({loader:function(){var t=Object(a["a"])(c.a.mark((function t(){return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n.e(3).then(n.bind(null,"tQyN"));case 2:return t.abrupt("return",t.sent.default);case 3:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:l},"Button.tsx":{import:"../Button",content:m},"style/index.ts":{import:"../style",content:d},"style/index.less":{import:"./index.less",content:f}},dependencies:{react:{version:"18.1.0"},"prop-types":{version:"15.8.1"}},identifier:"button-basic"}}},b=n("x2v5"),x=n("KcUY"),w=n.n(x);e["default"]=t=>s.a.createElement(w.a,Object(r["a"])({},t,{config:i,demos:y,apis:b}))},q3YX:function(t){t.exports=JSON.parse('{"menus":{"en-US":{"/button":[{"title":"\u53cd\u9988","meta":{"order":1,"__fallback":true},"children":[{"path":"/button","title":"Button","meta":{}}]}],"*":[{"path":"/","title":"K-View-React","meta":{}}]}},"locales":[{"name":"en-US","label":"English"}],"navs":{"en-US":[{"title":"\u7ec4\u4ef6","order":2,"path":"/button"}]},"title":"K-View-React","mode":"site","repository":{"url":"","branch":"master"},"theme":{},"exportStatic":{}}')},x2v5:function(t){t.exports=JSON.parse('{"Button":{"default":[{"identifier":"type","description":"Button \u7c7b\u578b","type":"\\"primary\\" | \\"success\\" | \\"warning\\" | \\"error\\"","default":"primary"}]}}')}}]);