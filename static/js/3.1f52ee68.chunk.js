(this.webpackJsonpbarca=this.webpackJsonpbarca||[]).push([[3],{293:function(e,a,s){e.exports={dialogs:"Dialogs_dialogs__1PyX_",dialogItems:"Dialogs_dialogItems__-rInY",dialog:"Dialogs_dialog__33goN",messages:"Dialogs_messages__3bInW",active:"Dialogs_active__1kI3h"}},294:function(e,a,s){"use strict";s.r(a);var i=s(12),t=s(8),n=s(120),c=s(108),o=s(0),d=s(1),l=s.n(d),g=s(93),r=s(131),j=s(41),b=s(25),m=s(13),u=s(293),O=s.n(u),h=function(e){return Object(o.jsx)("div",{className:O.a.dialog,children:Object(o.jsxs)(m.b,{to:"/Dialogs/"+e.id,activeClassName:O.a.active,children:[" ",e.name," "]})})},x=function(e){return Object(o.jsx)("div",{className:O.a.message,children:e.message})},_=Object(j.a)(20),f=l.a.memo((function(e){return Object(o.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(o.jsx)("div",{children:Object(o.jsx)(g.a,{component:b.b,placeholder:"your text",name:"newMessageBody",validate:[j.b,_]})}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{children:"Add Message"})})]})})),v=Object(r.a)({form:"dialogNewMessageForm"})(f),D=function(e){var a=e.DialogsPage.Dialogs.map((function(e){return Object(o.jsx)(h,{id:e.id,name:e.name},e.id)})),s=e.DialogsPage.Messages.map((function(e){return Object(o.jsx)(x,{message:e.message},e.id)}));return Object(o.jsxs)("div",{className:O.a.dialogs,children:[Object(o.jsx)("div",{className:O.a.dialogItems,children:a}),Object(o.jsxs)("div",{className:O.a.messages,children:[s,Object(o.jsx)(v,{onSubmit:function(a){e.addMessage(a.newMessageBody)}})]})]})};a.default=Object(t.d)(Object(i.b)((function(e){return{DialogsPage:e.DialogsPage}}),(function(e){return{addMessage:function(a){e(Object(c.a)(a))}}})),n.a)(D)}}]);
//# sourceMappingURL=3.1f52ee68.chunk.js.map