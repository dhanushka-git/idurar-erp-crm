import{ap as v,ah as e,a as r}from"./index-Dl6LwJ4d.js";import{d as f}from"./index-DSKn7ZrA.js";import{A as k}from"./index-CaDmTs0c.js";import{I as P,M as m}from"./index-9bw9fbzr.js";import{a as S}from"./ErpApp-DTobssxw.js";import"./useMoney-8gZM29YX.js";import{u as _}from"./useDate-Bb0hwROU.js";import{W as c,Q as s,_ as a,Y as O,V as y,B as w,E as Y}from"./IdurarOs-DtUKoUhl.js";import{c as x}from"./calculate-D1GpKAFQ.js";import{D as N,S as B}from"./index-6hbeLEwK.js";import{T as b}from"./index-ve_ztWp_.js";import{S as M}from"./index-DyHss8f1.js";import{P as I}from"./PlusOutlined-Cya6DlAB.js";function ae({subTotal:l=0,current:i=null}){const{last_invoice_number:t}=v(S);return t===void 0?e.jsx(e.Fragment,{}):e.jsx(Q,{subTotal:l,current:i})}function Q({subTotal:l=0,current:i=null}){const t=Y(),{dateFormat:p}=_(),{last_invoice_number:T}=v(S),[F,R]=r.useState(0),[u,j]=r.useState(0),[D,L]=r.useState(0),[A,V]=r.useState(()=>new Date().getFullYear()),[C,q]=r.useState(()=>T+1),E=n=>{j(n/100)};r.useEffect(()=>{if(i){const{taxRate:n=0,year:o,number:d}=i;j(n/100),V(o),q(d)}},[i]),r.useEffect(()=>{const n=x.add(x.multiply(l,u),l);L(Number.parseFloat(x.multiply(l,u))),R(Number.parseFloat(n))},[l,u]);const h=r.useRef(!1);return r.useEffect(()=>{h.current.click()},[]),e.jsxs(e.Fragment,{children:[e.jsxs(c,{gutter:[12,0],children:[e.jsx(s,{className:"gutter-row",span:8,children:e.jsx(a.Item,{name:"client",label:t("Client"),rules:[{required:!0}],children:e.jsx(k,{entity:"client",displayLabels:["name"],searchFields:"name",redirectLabel:"Add New Client",withRedirect:!0,urlToRedirect:"/customer"})})}),e.jsx(s,{className:"gutter-row",span:3,children:e.jsx(a.Item,{label:t("number"),name:"number",initialValue:C,rules:[{required:!0}],children:e.jsx(b,{min:1,style:{width:"100%"}})})}),e.jsx(s,{className:"gutter-row",span:3,children:e.jsx(a.Item,{label:t("year"),name:"year",initialValue:A,rules:[{required:!0}],children:e.jsx(b,{style:{width:"100%"}})})}),e.jsx(s,{className:"gutter-row",span:5,children:e.jsx(a.Item,{label:t("status"),name:"status",rules:[{required:!1}],initialValue:"draft",children:e.jsx(M,{options:[{value:"draft",label:t("Draft")},{value:"pending",label:t("Pending")},{value:"sent",label:t("Sent")}]})})}),e.jsx(s,{className:"gutter-row",span:8,children:e.jsx(a.Item,{name:"date",label:t("Date"),rules:[{required:!0,type:"object"}],initialValue:f(),children:e.jsx(N,{style:{width:"100%"},format:p})})}),e.jsx(s,{className:"gutter-row",span:6,children:e.jsx(a.Item,{name:"expiredDate",label:t("Expire Date"),rules:[{required:!0,type:"object"}],initialValue:f().add(30,"days"),children:e.jsx(N,{style:{width:"100%"},format:p})})}),e.jsx(s,{className:"gutter-row",span:10,children:e.jsx(a.Item,{label:t("Note"),name:"notes",children:e.jsx(O,{})})})]}),e.jsx(y,{dashed:!0}),e.jsxs(c,{gutter:[12,12],style:{position:"relative"},children:[e.jsx(s,{className:"gutter-row",span:5,children:e.jsx("p",{children:t("Item")})}),e.jsx(s,{className:"gutter-row",span:7,children:e.jsx("p",{children:t("Description")})}),e.jsxs(s,{className:"gutter-row",span:3,children:[e.jsx("p",{children:t("Quantity")})," "]}),e.jsx(s,{className:"gutter-row",span:4,children:e.jsx("p",{children:t("Price")})}),e.jsx(s,{className:"gutter-row",span:5,children:e.jsx("p",{children:t("Total")})})]}),e.jsx(a.List,{name:"items",children:(n,{add:o,remove:d})=>e.jsxs(e.Fragment,{children:[n.map(g=>e.jsx(P,{remove:d,field:g,current:i},g.key)),e.jsx(a.Item,{children:e.jsx(w,{type:"dashed",onClick:()=>o(),block:!0,icon:e.jsx(I,{}),ref:h,children:t("Add field")})})]})}),e.jsx(y,{dashed:!0}),e.jsxs("div",{style:{position:"relative",width:" 100%",float:"right"},children:[e.jsxs(c,{gutter:[12,-5],children:[e.jsx(s,{className:"gutter-row",span:5,children:e.jsx(a.Item,{children:e.jsx(w,{type:"primary",htmlType:"submit",icon:e.jsx(I,{}),block:!0,children:t("Save")})})}),e.jsx(s,{className:"gutter-row",span:4,offset:10,children:e.jsxs("p",{style:{paddingLeft:"12px",paddingTop:"5px",margin:0,textAlign:"right"},children:[t("Sub Total")," :"]})}),e.jsx(s,{className:"gutter-row",span:5,children:e.jsx(m,{readOnly:!0,value:l})})]}),e.jsxs(c,{gutter:[12,-5],children:[e.jsx(s,{className:"gutter-row",span:4,offset:15,children:e.jsx(a.Item,{name:"taxRate",rules:[{required:!0}],children:e.jsx(B,{value:u,onChange:E,entity:"taxes",outputValue:"taxValue",displayLabels:["taxName"],withRedirect:!0,urlToRedirect:"/taxes",redirectLabel:t("Add New Tax"),placeholder:t("Select Tax Value")})})}),e.jsx(s,{className:"gutter-row",span:5,children:e.jsx(m,{readOnly:!0,value:D})})]}),e.jsxs(c,{gutter:[12,-5],children:[e.jsx(s,{className:"gutter-row",span:4,offset:15,children:e.jsxs("p",{style:{paddingLeft:"12px",paddingTop:"5px",margin:0,textAlign:"right"},children:[t("Total")," :"]})}),e.jsx(s,{className:"gutter-row",span:5,children:e.jsx(m,{readOnly:!0,value:F})})]})]})]})}export{ae as I};