import{a as s,aq as X,ah as r}from"./index-Dl6LwJ4d.js";import{X as _,E as $,H as z}from"./IdurarOs-DtUKoUhl.js";import{u as B}from"./useDebounce-JlGN8CId.js";import{S as l,E as F}from"./index-DyHss8f1.js";function M({entity:x,displayLabels:E,searchFields:b,outputValue:a="_id",redirectLabel:O="Add New",withRedirect:u=!1,urlToRedirect:j="/",value:t,onChange:c}){const f=$(),h={value:"redirectURL",label:`+ ${f(O)}`},[y,d]=s.useState([]),[A,C]=s.useState(void 0),n=s.useRef(!0),v=s.useRef(!1),[L,o]=s.useState(!1),[S,R]=s.useState(""),[m,q]=s.useState(""),N=X(),U=e=>{n.current=!1,c&&e&&c(e[a]||e),e==="redirectURL"&&u&&N(j)},[,D]=B(()=>{q(S)},500,[S]),T=async e=>await z.search({entity:x,options:e});let{onFetch:k,result:p,isSuccess:g,isLoading:w}=_();const H=e=>E.map(i=>e[i]).join(" ");s.useEffect(()=>{const i=T({q:m,fields:b});return k(i),()=>{D()}},[m]);const W=e=>{v.current=!0,o(!0),R(e)};return s.useEffect(()=>{g?d(p):o(!1)},[g,p]),s.useEffect(()=>{t&&n.current&&(d([t]),C(t[a]||t),c(t[a]||t),n.current=!1)},[t]),r.jsxs(l,{loading:w,showSearch:!0,allowClear:!0,placeholder:f("Search"),defaultActiveFirstOption:!1,filterOption:!1,notFoundContent:L?"... Searching":r.jsx(F,{}),value:A,onSearch:W,onClear:()=>{o(!1)},onChange:U,style:{minWidth:"220px"},children:[y.map(e=>r.jsx(l.Option,{value:e[a]||e,children:H(e)},e[a]||e)),u&&r.jsx(l.Option,{value:h.value,children:h.label})]})}export{M as A};