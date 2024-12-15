import{a as i,I,h as L,ar as O,aq as P,ap as k,ah as e}from"./index-Dl6LwJ4d.js";import{P as D}from"./index-DSKn7ZrA.js";import{B as d,O as B,a1 as F,M,W as j,V as g,Q as r,E as V}from"./IdurarOs-DtUKoUhl.js";import{e as $}from"./actions-B85TnJ1M.js";import{s as u}from"./index-KrFx5yLV.js";import{c as W}from"./selectors-DVcOAGQ9.js";import{u as C}from"./useMoney-8gZM29YX.js";import"./ErpApp-DTobssxw.js";import{u as q}from"./useMail-DWoaoJAa.js";import{S as h}from"./index-iK4G0uPO.js";import{D as p}from"./index-i2IQ6-Li.js";import{C as H}from"./CloseCircleOutlined-BEdo_8E4.js";import{F as z}from"./FilePdfOutlined-roDxNulN.js";var Q={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M136 552h63.6c4.4 0 8-3.6 8-8V288.7h528.6v72.6c0 1.9.6 3.7 1.8 5.2a8.3 8.3 0 0011.7 1.4L893 255.4c4.3-5 3.6-10.3 0-13.2L749.7 129.8a8.22 8.22 0 00-5.2-1.8c-4.6 0-8.4 3.8-8.4 8.4V209H199.7c-39.5 0-71.7 32.2-71.7 71.8V544c0 4.4 3.6 8 8 8zm752-80h-63.6c-4.4 0-8 3.6-8 8v255.3H287.8v-72.6c0-1.9-.6-3.7-1.8-5.2a8.3 8.3 0 00-11.7-1.4L131 768.6c-4.3 5-3.6 10.3 0 13.2l143.3 112.4c1.5 1.2 3.3 1.8 5.2 1.8 4.6 0 8.4-3.8 8.4-8.4V815h536.6c39.5 0 71.7-32.2 71.7-71.8V480c-.2-4.4-3.8-8-8.2-8z"}}]},name:"retweet",theme:"outlined"},U=function(c,s){return i.createElement(I,L({},c,{ref:s,icon:Q}))};const Y=i.forwardRef(U),G=({item:n,currentErp:c})=>{const{moneyFormatter:s}=C();return e.jsxs(j,{gutter:[12,0],children:[e.jsxs(r,{className:"gutter-row",span:11,children:[e.jsx("p",{style:{marginBottom:5},children:e.jsx("strong",{children:n.itemName})}),e.jsx("p",{children:n.description})]}),e.jsx(r,{className:"gutter-row",span:4,children:e.jsx("p",{style:{textAlign:"right"},children:s({amount:n.price,currency_code:c.currency})})}),e.jsx(r,{className:"gutter-row",span:4,children:e.jsx("p",{style:{textAlign:"right"},children:n.quantity})}),e.jsx(r,{className:"gutter-row",span:5,children:e.jsx("p",{style:{textAlign:"right",fontWeight:"700"},children:s({amount:n.total,currency_code:c.currency})})}),e.jsx(g,{dashed:!0,style:{marginTop:0,marginBottom:15}})]},n._id)};function oe({config:n,selectedItem:c}){const s=V(),{entity:a,ENTITY_NAME:T}=n,N=O(),y=P(),{moneyFormatter:l}=C(),{send:S,isLoading:b}=q({entity:a}),{result:x}=k(W),_={status:"",client:{name:"",email:"",phone:"",address:""},subTotal:0,taxTotal:0,taxRate:0,total:0,credit:0,number:0,year:0},[R,f]=i.useState([]),[t,w]=i.useState(c??_),[v,A]=i.useState({});return i.useEffect(()=>{if(x){const{items:o,invoice:m,...E}=x;o?(f(o),w(x)):m.items&&(f(m.items),w({...m.items,...E,...m}))}return()=>{f([]),w(_)}},[x]),i.useEffect(()=>{t!=null&&t.client&&A(t.client)},[t]),e.jsxs(e.Fragment,{children:[e.jsx(D,{onBack:()=>{y(`/${a.toLowerCase()}`)},title:`${T} # ${t.number}/${t.year||""}`,ghost:!1,tags:[e.jsx("span",{children:t.status&&s(t.status)},"status"),t.paymentStatus&&e.jsx("span",{children:t.paymentStatus&&s(t.paymentStatus)},"paymentStatus")],extra:[e.jsx(d,{onClick:()=>{y(`/${a.toLowerCase()}`)},icon:e.jsx(H,{}),children:s("Close")},`${u.generate()}`),e.jsx(d,{onClick:()=>{window.open(`${B}${a}/${a}-${t._id}.pdf`,"_blank")},icon:e.jsx(z,{}),children:s("Download PDF")},`${u.generate()}`),e.jsx(d,{loading:b,onClick:()=>{S(t._id)},icon:e.jsx(F,{}),children:s("Send by Email")},`${u.generate()}`),e.jsx(d,{onClick:()=>{N($.convert({entity:a,id:t._id}))},icon:e.jsx(Y,{}),style:{display:a==="quote"?"inline-block":"none"},children:s("Convert to Invoice")},`${u.generate()}`),e.jsx(d,{onClick:()=>{N($.currentAction({actionType:"update",data:t})),y(`/${a.toLowerCase()}/update/${t._id}`)},type:"primary",icon:e.jsx(M,{}),children:s("Edit")},`${u.generate()}`)],style:{padding:"20px 0px"},children:e.jsxs(j,{children:[e.jsx(h,{title:"Status",value:t.status}),e.jsx(h,{title:s("SubTotal"),value:l({amount:t.subTotal,currency_code:t.currency}),style:{margin:"0 32px"}}),e.jsx(h,{title:s("Total"),value:l({amount:t.total,currency_code:t.currency}),style:{margin:"0 32px"}}),e.jsx(h,{title:s("Paid"),value:l({amount:t.credit,currency_code:t.currency}),style:{margin:"0 32px"}})]})}),e.jsx(g,{dashed:!0}),e.jsxs(p,{title:`Client : ${t.client.name}`,children:[e.jsx(p.Item,{label:s("Address"),children:v.address}),e.jsx(p.Item,{label:s("email"),children:v.email}),e.jsx(p.Item,{label:s("Phone"),children:v.phone})]}),e.jsx(g,{}),e.jsxs(j,{gutter:[12,0],children:[e.jsx(r,{className:"gutter-row",span:11,children:e.jsx("p",{children:e.jsx("strong",{children:s("Product")})})}),e.jsx(r,{className:"gutter-row",span:4,children:e.jsx("p",{style:{textAlign:"right"},children:e.jsx("strong",{children:s("Price")})})}),e.jsx(r,{className:"gutter-row",span:4,children:e.jsx("p",{style:{textAlign:"right"},children:e.jsx("strong",{children:s("Quantity")})})}),e.jsx(r,{className:"gutter-row",span:5,children:e.jsx("p",{style:{textAlign:"right"},children:e.jsx("strong",{children:s("Total")})})}),e.jsx(g,{})]}),R.map(o=>e.jsx(G,{item:o,currentErp:t},o._id)),e.jsx("div",{style:{width:"300px",float:"right",textAlign:"right",fontWeight:"700"},children:e.jsxs(j,{gutter:[12,-5],children:[e.jsx(r,{className:"gutter-row",span:12,children:e.jsxs("p",{children:[s("Sub Total")," :"]})}),e.jsx(r,{className:"gutter-row",span:12,children:e.jsx("p",{children:l({amount:t.subTotal,currency_code:t.currency})})}),e.jsx(r,{className:"gutter-row",span:12,children:e.jsxs("p",{children:[s("Tax Total")," (",t.taxRate," %) :"]})}),e.jsx(r,{className:"gutter-row",span:12,children:e.jsx("p",{children:l({amount:t.taxTotal,currency_code:t.currency})})}),e.jsx(r,{className:"gutter-row",span:12,children:e.jsxs("p",{children:[s("Total")," :"]})}),e.jsx(r,{className:"gutter-row",span:12,children:e.jsx("p",{children:l({amount:t.total,currency_code:t.currency})})})]})})]})}export{oe as R};
