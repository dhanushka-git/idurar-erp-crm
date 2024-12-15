import{a as c,I as O,h as R,ar as _,aq as S,ap as g,ah as e,as as M,ax as B}from"./index-Dl6LwJ4d.js";import{B as l,O as k,a1 as F,M as W,W as y,V as E,Q as n,a2 as H,E as T}from"./IdurarOs-DtUKoUhl.js";import"./index--ceyq7RT.js";import{c as w,b as V,E as Y}from"./selectors-DVcOAGQ9.js";import{P as z}from"./index-DSKn7ZrA.js";import{e as f}from"./actions-B85TnJ1M.js";import{s as d}from"./index-KrFx5yLV.js";import{u as q}from"./useMoney-8gZM29YX.js";import"./ErpApp-DTobssxw.js";import{u as Q}from"./useMail-DWoaoJAa.js";import{S as u}from"./index-iK4G0uPO.js";import{D as m}from"./index-i2IQ6-Li.js";import{C as U}from"./CloseCircleOutlined-BEdo_8E4.js";import{F as G}from"./FilePdfOutlined-roDxNulN.js";import"./DownOutlined-DZjzy1fX.js";var J={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 912H144c-17.7 0-32-14.3-32-32V144c0-17.7 14.3-32 32-32h360c4.4 0 8 3.6 8 8v56c0 4.4-3.6 8-8 8H184v656h656V520c0-4.4 3.6-8 8-8h56c4.4 0 8 3.6 8 8v360c0 17.7-14.3 32-32 32zM770.87 199.13l-52.2-52.2a8.01 8.01 0 014.7-13.6l179.4-21c5.1-.6 9.5 3.7 8.9 8.9l-21 179.4c-.8 6.6-8.9 9.4-13.6 4.7l-52.4-52.4-256.2 256.2a8.03 8.03 0 01-11.3 0l-42.4-42.4a8.03 8.03 0 010-11.3l256.1-256.3z"}}]},name:"export",theme:"outlined"},K=function(i,s){return c.createElement(O,R({},i,{ref:s,icon:J}))};const X=c.forwardRef(K);function Z({config:r,selectedItem:i}){const s=T(),{entity:a,ENTITY_NAME:p}=r,v=_(),{moneyFormatter:o}=q(),{send:$,isLoading:I}=Q({entity:a}),x=S(),{result:h}=g(w),C={status:"",client:{name:"",email:"",phone:"",address:""},subTotal:0,taxTotal:0,taxRate:0,total:0,credit:0,number:0,year:0},[t,N]=c.useState(i??C),[j,P]=c.useState({});return c.useEffect(()=>{const b=new AbortController;if(h){const{invoice:A,_id:L,...D}=h;N({...D,...A,_id:L})}return()=>b.abort()},[h]),c.useEffect(()=>{t!=null&&t.client&&P(t.client)},[t]),e.jsxs(e.Fragment,{children:[e.jsx(z,{onBack:()=>{x(`/${a.toLowerCase()}`)},title:`${p} # ${t.number}/${t.year||""}`,ghost:!1,tags:e.jsx("span",{children:t.paymentStatus}),extra:[e.jsx(l,{onClick:()=>{x(`/${a.toLowerCase()}`)},icon:e.jsx(U,{}),children:s("Close")},`${d.generate()}`),e.jsx(l,{onClick:()=>{window.open(`${k}${a}/${a}-${t._id}.pdf`,"_blank")},icon:e.jsx(G,{}),children:s("Download PDF")},`${d.generate()}`),e.jsx(l,{loading:I,onClick:()=>{$(t._id)},icon:e.jsx(F,{}),children:s("Send by email")},`${d.generate()}`),e.jsx(l,{onClick:()=>{v(f.currentAction({actionType:"update",data:t})),x(`/${a.toLowerCase()}/update/${t._id}`)},type:"primary",icon:e.jsx(W,{}),children:s("Edit")},`${d.generate()}`)],style:{padding:"20px 0px"},children:e.jsxs(y,{children:[e.jsx(u,{title:"Status",value:t.status}),e.jsx(u,{title:s("Paid"),value:o({amount:t.amount,currency_code:t.currency}),style:{margin:"0 32px"}}),e.jsx(u,{title:s("SubTotal"),value:o({amount:t.subTotal,currency_code:t.currency}),style:{margin:"0 32px"}}),e.jsx(u,{title:s("Total"),value:o({amount:t.total,currency_code:t.currency}),style:{margin:"0 32px"}})]})}),e.jsx(E,{dashed:!0}),e.jsxs(m,{title:`${s("Client")} : ${t.client.name}`,children:[e.jsx(m.Item,{label:s("Address"),children:j.address}),e.jsx(m.Item,{label:s("email"),children:j.email}),e.jsx(m.Item,{label:s("Phone"),children:j.phone})]}),e.jsx(E,{}),e.jsxs(y,{children:[e.jsx(n,{sm:24,md:12,children:e.jsxs(H.Title,{level:5,children:[s("Payment Information")," :"]})}),e.jsx(n,{sm:24,md:12,style:{textAlign:"right"},children:e.jsx(l,{icon:e.jsx(X,{}),children:s("Show invoice")})})]}),e.jsx("div",{style:{width:"300px",float:"left",textAlign:"right",fontWeight:"700"},children:e.jsxs(y,{gutter:[12,-5],children:[e.jsx(n,{className:"gutter-row",span:12,children:e.jsxs("p",{children:[s("Paid")," :"]})}),e.jsx(n,{className:"gutter-row",span:12,children:e.jsx("p",{children:o({amount:t.amount,currency_code:t.currency})})}),e.jsx(n,{className:"gutter-row",span:12,children:e.jsxs("p",{children:[s("Total")," :"]})}),e.jsx(n,{className:"gutter-row",span:12,children:e.jsx("p",{children:o({amount:t.total,currency_code:t.currency})})}),e.jsx(n,{className:"gutter-row",span:12,children:e.jsxs("p",{children:[s("Total Paid")," :"]})}),e.jsx(n,{className:"gutter-row",span:12,children:e.jsx("p",{children:o({amount:t.credit,currency_code:t.currency})})}),e.jsx(n,{className:"gutter-row",span:12,children:e.jsxs("p",{children:[s("Total Remaining")," :"]})}),e.jsx(n,{className:"gutter-row",span:12,children:e.jsx("p",{children:o({amount:t.total-t.credit,currency_code:t.currency})})})]})})]})}function ee({config:r}){const i=_(),{id:s}=M();let a=g(V(s));c.useEffect(()=>{i(a?f.currentItem({data:a}):f.read({entity:r.entity,id:s}))},[a]);const{result:p}=g(w);return a=p,e.jsx(Y,{children:a?e.jsx(Z,{config:r,selectedItem:a}):e.jsx(B,{})})}function je(){const r=T(),i="payment",s={PANEL_TITLE:r("payment"),DATATABLE_TITLE:r("payment_list"),ADD_NEW_ENTITY:r("add_new_payment"),ENTITY_NAME:r("payment")},a={entity:i,...s};return e.jsx(ee,{config:a})}export{je as default};
