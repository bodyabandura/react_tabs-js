(this["webpackJsonpreact_tabs-js"]=this["webpackJsonpreact_tabs-js"]||[]).push([[0],{12:function(t,e,c){},14:function(t,e,c){"use strict";c.r(e);var a=c(4),n=c.n(a),s=c(3),i=c(1),b=(c(10),c(11),c(12),c(5)),o=c.n(b),d=c(0),l=function(t){var e=t.tabs,c=t.selectedTabId,a=t.tabContent,n=t.onTabSelected;return Object(d.jsxs)("div",{"data-cy":"TabsComponent",children:[Object(d.jsx)("div",{className:"tabs is-boxed",children:Object(d.jsx)("ul",{children:e.map((function(t){return Object(d.jsx)("li",{"data-cy":"Tab",className:o()({"is-active":t.title===c}),children:Object(d.jsxs)("a",{href:"#".concat(t.id),"data-cy":"TabLink",onClick:function(){return e=t.title,c=t.content,void n(e,c);var e,c},children:["",t.title,""]})},t.title)}))})}),Object(d.jsx)("div",{className:"block","data-cy":"TabContent",children:a})]})},r=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],j=function(){var t=Object(i.useState)("Tab 1"),e=Object(s.a)(t,2),c=e[0],a=e[1],n=Object(i.useState)("Some text 1"),b=Object(s.a)(n,2),o=b[0],j=b[1];return Object(d.jsxs)("div",{className:"section",children:[Object(d.jsxs)("h1",{className:"title",children:["Selected tab is","",c]}),Object(d.jsx)(l,{tabs:r,selectedTabId:c,tabContent:o,onTabSelected:function(t,e){a(t),j(e)}})]})};n.a.render(Object(d.jsx)(j,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.eb5ab397.chunk.js.map