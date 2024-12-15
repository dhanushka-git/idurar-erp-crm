import{aq as L,ar as N,ap as I,a,ah as e,as as A,ax as F}from"./index-Dl6LwJ4d.js";import{_ as g,a0 as S,B as T,E as _,W as b,Q as E,V as P}from"./IdurarOs-DtUKoUhl.js";import"./index--ceyq7RT.js";import{a as R,b as $,c as w,E as D}from"./selectors-DVcOAGQ9.js";import{e as p}from"./actions-B85TnJ1M.js";import{P as B}from"./index-DSKn7ZrA.js";import{s as v}from"./index-KrFx5yLV.js";import{u as M}from"./useMoney-8gZM29YX.js";import"./ErpApp-DTobssxw.js";import{P as Y,F as k}from"./PaymentForm-P9tA5tVU.js";import{c as C}from"./calculate-D1GpKAFQ.js";import{D as m}from"./index-i2IQ6-Li.js";import{C as O}from"./CloseCircleOutlined-BEdo_8E4.js";import"./DownOutlined-DZjzy1fX.js";import"./index-6hbeLEwK.js";import"./index-DyHss8f1.js";import"./useFetch-Bz16v0fv.js";import"./color-CnuJOIlI.js";import"./index-Hr_Nahbw.js";import"./useDate-Bb0hwROU.js";import"./index-ve_ztWp_.js";function W({config:o}){const n=L(),s=_();let{entity:r}=o;const c=N(),{isLoading:d,isSuccess:u,current:i}=I(R),[h]=g.useForm(),[t,f]=a.useState(0);a.useEffect(()=>{if(i){const{credit:l,total:x,discount:y}=i;f(C.sub(C.sub(x,y),l))}},[i]),a.useEffect(()=>{u&&(h.resetFields(),c(p.resetAction({actionType:"recordPayment"})),c(p.list({entity:r})),n(`/${r}/`))},[u]);const j=l=>{if(i){const{_id:x}=i,y=i.client&&i.client._id;l={...l,invoice:x,client:y}}c(p.recordPayment({entity:"payment",jsonData:l}))};return e.jsx(S,{isLoading:d,children:e.jsxs(g,{form:h,layout:"vertical",onFinish:j,children:[e.jsx(Y,{maxAmount:t}),e.jsx(g.Item,{children:e.jsx(T,{type:"primary",htmlType:"submit",children:s("Record Payment")})})]})})}function q({config:o,currentItem:n}){const s=_(),{entity:r,ENTITY_NAME:c}=o,d=M(),u=L(),[i,h]=a.useState([]),[t,f]=a.useState(n),[j,l]=a.useState({});return a.useEffect(()=>{t!=null&&t.client&&l(t.client)},[t]),a.useEffect(()=>{const x=new AbortController;if(n){const{items:y}=n;h(y),f(n)}return()=>x.abort()},[n]),e.jsxs(e.Fragment,{children:[e.jsx(b,{gutter:[12,12],children:e.jsxs(E,{className:"gutter-row",xs:{span:24},sm:{span:24},md:{span:24},lg:{span:20,push:2},children:[e.jsx(B,{onBack:()=>u(`/${r.toLowerCase()}`),title:`Record Payment for ${c} # ${t.number}/${t.year||""}`,ghost:!1,tags:e.jsx("span",{children:t.paymentStatus&&s(t.paymentStatus)}),extra:[e.jsx(T,{onClick:()=>{u(`/${r.toLowerCase()}`)},icon:e.jsx(O,{}),children:s("Cancel")},`${v.generate()}`),e.jsx(T,{onClick:()=>u(`/invoice/read/${t._id}`),icon:e.jsx(k,{}),children:s("Show Invoice")},`${v.generate()}`)],style:{padding:"20px 0px"}}),e.jsx(P,{dashed:!0})]})}),e.jsxs(b,{gutter:[12,12],children:[e.jsxs(E,{className:"gutter-row",xs:{span:24,order:2},sm:{span:24,order:2},md:{span:10,order:2,push:2},lg:{span:10,order:2,push:4},children:[e.jsx("div",{className:"space50"}),e.jsxs(m,{title:`${s("Client")}  : ${t.client.name}`,column:1,children:[e.jsx(m.Item,{label:s("email"),children:j.email}),e.jsx(m.Item,{label:s("phone"),children:j.phone}),e.jsx(P,{dashed:!0}),e.jsx(m.Item,{label:s("payment status"),children:e.jsx("span",{children:t.paymentStatus&&s(t.paymentStatus)})}),e.jsx(m.Item,{label:s("sub total"),children:d.moneyFormatter({amount:t.subTotal,currency_code:t.currency})}),e.jsx(m.Item,{label:s("total"),children:d.moneyFormatter({amount:t.total,currency_code:t.currency})}),e.jsx(m.Item,{label:s("discount"),children:d.moneyFormatter({amount:t.discount,currency_code:t.currency})}),e.jsx(m.Item,{label:s("Paid"),children:d.moneyFormatter({amount:t.credit,currency_code:t.currency})})]})]}),e.jsx(E,{className:"gutter-row",xs:{span:24,order:1},sm:{span:24,order:1},md:{span:12,order:1},lg:{span:10,order:1,push:2},children:e.jsx(W,{config:o})})]})]})}function H({config:o}){const n=N(),{id:s}=A();let r=I($(s));a.useEffect(()=>{n(r?p.currentItem({data:r}):p.read({entity:o.entity,id:s}))},[r,s]);const{result:c}=I(w);return r=c,a.useEffect(()=>{n(p.currentAction({actionType:"recordPayment",data:r}))},[r]),e.jsx(D,{children:r?e.jsx(q,{config:o,currentItem:c}):e.jsx(F,{})})}function ue(){const o="invoice",n=_(),s={PANEL_TITLE:n("invoice"),DATATABLE_TITLE:n("invoice_list"),ADD_NEW_ENTITY:n("add_new_invoice"),ENTITY_NAME:n("invoice"),RECORD_ENTITY:n("record_payment")},r={entity:o,...s};return e.jsx(H,{config:r})}export{ue as default};