(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{"9kvl":function(t,e,n){"use strict";var r=n("FfOG");n.d(e,"a",(function(){return r["b"]}));n("bCY9")},afA6:function(t,e,n){"use strict";n.r(e);var r=n("0Owb"),o=n("q1tI"),p=n.n(o),i=n("q3YX"),s=n("9og8"),a=n("WmNS"),u=n.n(a),c=n("rlch"),l="import React from 'react'\nimport KButton from '../Button'\nimport '../style'\n\nexport default ()=> <KButton type=\"success\">primary\u6309\u94ae</KButton>",m="import React from 'react'\nimport type { ReactFragment } from 'react'\nimport t from 'prop-types'\n\nexport interface ButtonProps {\n    /**\n     * @description Button \u7c7b\u578b\n     * @default 'primary'' \n     */\n    type?: 'primary' | 'success' | 'warning' |'error';\n    children?: ReactFragment\n}\n\nconst prefixCls = 'k';\n\nexport type ButtonTypes = Record<Required<ButtonProps>['type'], string>\n\nexport const types: ButtonTypes = {\n  primary: '#5352ED',\n  success: '#2ED573',\n  warning: '#FFA502',\n  error: '#FF4757',\n}\n\nconst Button: React.FC<ButtonProps> = ({ children, type = 'primary', ...rest}) => {\n    return <button className={`${prefixCls}-button-container`} style={{background: types[type]}} {...rest}>{children}</button>\n}\n\nButton.propTypes = {\n    type: t.oneOf(['primary', 'success', 'warning', 'error'])\n}\n\nexport default Button",d="import './index.less'",f="@root-prefix-cls: 'k';\n\n@prefix-cls: @root-prefix-cls + 'button';\n\n.@{prefix-cls} {\n    background: white;\n    padding: 10px;\n}",x="import React from 'react';\nimport PopupBox from '../PopupBox';\n\nexport default () => (\n<PopupBox />\n);",b="import React from 'react';\nimport { PopupBoxProps } from './popupBoxTypes';\n\nconst defaultProps = {\n\n};\n\nconst PopupBox: React.FC<PopupBoxProps> = userProps => {\n  const props = { ...defaultProps, ...userProps };\n\n  return <>PopupBox</>;\n};\n\nexport default PopupBox;",y={"button-basic":{component:Object(c["c"])({loader:function(){var t=Object(s["a"])(u.a.mark((function t(){return u.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n.e(3).then(n.bind(null,"tQyN"));case 2:return t.abrupt("return",t.sent.default);case 3:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:l},"Button.tsx":{import:"../Button",content:m},"style/index.ts":{import:"../style",content:d},"style/index.less":{import:"./index.less",content:f}},dependencies:{react:{version:"18.1.0"},"prop-types":{version:"15.8.1"}},identifier:"button-basic"}},"popup-box-basic":{component:Object(c["c"])({loader:function(){var t=Object(s["a"])(u.a.mark((function t(){return u.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n.e(3).then(n.bind(null,"WaIu"));case 2:return t.abrupt("return",t.sent.default);case 3:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:x},"PopupBox.tsx":{import:"../PopupBox",content:b}},dependencies:{react:{version:"18.1.0"}},identifier:"popup-box-basic"}}},h=n("x2v5"),B=n("KcUY"),g=n.n(B);e["default"]=t=>p.a.createElement(g.a,Object(r["a"])({},t,{config:i,demos:y,apis:h}))},q3YX:function(t){t.exports=JSON.parse('{"menus":{"en-US":{"*":[{"path":"/","title":"K-View-React","meta":{}}],"/contributing":[{"path":"/contributing","title":"\u8d21\u732e\u6307\u5357","meta":{}}],"/components":[{"title":"\u7ec4\u4ef6","path":"/components","children":[{"path":"/components/button","title":"Button"},{"path":"/components/popup-box","title":"PopupBox \u5f39\u7a97"}]}],"/guide":[{"path":"/guide","title":"\u4ecb\u7ecd","meta":{}},{"path":"/guide/quick-start","title":"quick start","meta":{}}]}},"locales":[{"name":"en-US","label":"English"}],"navs":{"en-US":[{"title":"\u4ecb\u7ecd","path":"/guide"},{"title":"\u7ec4\u4ef6","path":"/components"},{"title":"\u8d21\u732e","path":"/contributing"},{"title":"Github","path":"https://github.com/SoldierAb/k-view-react"}]},"title":"K-View-React","mode":"site","repository":{"url":"","branch":"master"},"theme":{},"exportStatic":{}}')},x2v5:function(t){t.exports=JSON.parse('{"Button":{"default":[{"identifier":"type","description":"Button \u7c7b\u578b","type":"\\"primary\\" | \\"success\\" | \\"warning\\" | \\"error\\"","default":"primary"}]},"PopupBox":{"default":[]}}')}}]);