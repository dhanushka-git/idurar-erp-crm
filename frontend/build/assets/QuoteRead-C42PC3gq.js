import{ar as n,as as m,a as p,ap as c,ah as e,ax as d}from"./index-Dl6LwJ4d.js";import{$ as E,E as l}from"./IdurarOs-DtUKoUhl.js";import"./index--ceyq7RT.js";import{s as f,E as a}from"./selectors-DVcOAGQ9.js";import{R as x}from"./ReadItem-BjRUF5gF.js";import{e as L}from"./actions-B85TnJ1M.js";import"./index-DSKn7ZrA.js";import"./ErpApp-DTobssxw.js";import"./DownOutlined-DZjzy1fX.js";import"./index-KrFx5yLV.js";import"./useMoney-8gZM29YX.js";import"./useMail-DWoaoJAa.js";import"./index-iK4G0uPO.js";import"./index-i2IQ6-Li.js";import"./CloseCircleOutlined-BEdo_8E4.js";import"./FilePdfOutlined-roDxNulN.js";function T({config:t}){const o=n(),{id:s}=m();p.useLayoutEffect(()=>{o(L.read({entity:t.entity,id:s}))},[s]);const{result:r,isSuccess:i,isLoading:u=!0}=c(f);return u?e.jsx(a,{children:e.jsx(d,{})}):e.jsx(a,{children:i?e.jsx(x,{config:t,selectedItem:r}):e.jsx(E,{entity:t.entity})})}function b(){const t=l(),o="quote",s={PANEL_TITLE:t("quote"),DATATABLE_TITLE:t("quote_list"),ADD_NEW_ENTITY:t("add_new_quote"),ENTITY_NAME:t("quote")},r={entity:o,...s};return e.jsx(T,{config:r})}export{b as default};