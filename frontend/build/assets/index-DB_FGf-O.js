import{ah as e}from"./index-Dl6LwJ4d.js";import{_ as d,Y as s,Z as r,C as i,E as c}from"./IdurarOs-DtUKoUhl.js";import{C as f}from"./CrudModule-DJlzCxzo.js";import{S as l}from"./index-B4sz1LF7.js";import"./actions-DM-fyJT1.js";import"./index--ceyq7RT.js";import"./index-DSKn7ZrA.js";import"./ErpApp-DTobssxw.js";import"./DownOutlined-DZjzy1fX.js";import"./helpers-xzdFsypT.js";import"./index-DAhtVAsE.js";import"./fade-ColcA16n.js";import"./index-KrFx5yLV.js";import"./color-CnuJOIlI.js";import"./index-Hr_Nahbw.js";import"./useMoney-8gZM29YX.js";import"./useDate-Bb0hwROU.js";import"./useDebounce-JlGN8CId.js";import"./index-DyHss8f1.js";import"./ArrowLeftOutlined-D7o0Jhde.js";import"./Table-B7R6vhSD.js";import"./DeleteOutlined-j13DKby7.js";import"./PlusOutlined-Cya6DlAB.js";function m({isUpdateForm:t=!1}){const n=c();return e.jsxs(e.Fragment,{children:[e.jsx(d.Item,{label:n("Payment Mode"),name:"name",rules:[{required:!0}],children:e.jsx(s,{})}),e.jsx(d.Item,{label:n("Description"),name:"description",rules:[{required:!0}],children:e.jsx(s,{})}),e.jsx(d.Item,{label:n("enabled"),name:"enabled",style:{display:"inline-block",width:"calc(50%)",paddingRight:"5px"},valuePropName:"checked",initialValue:!0,children:e.jsx(l,{checkedChildren:e.jsx(r,{}),unCheckedChildren:e.jsx(i,{})})}),e.jsx(d.Item,{label:n("Default Mode"),name:"isDefault",style:{display:"inline-block",width:"calc(50%)",paddingLeft:"5px"},valuePropName:"checked",children:e.jsx(l,{checkedChildren:e.jsx(r,{}),unCheckedChildren:e.jsx(i,{})})})]})}function B(){const t=c(),n="paymentMode",p={displayLabels:["name"],searchFields:"name",outputValue:"_id"},u=["name"],x=[{title:t("Payment Mode"),dataIndex:"name"},{title:t("Description"),dataIndex:"description"},{title:t("Default"),dataIndex:"isDefault"},{title:t("enabled"),dataIndex:"enabled"}],h=[{title:t("Payment Mode"),dataIndex:"name"},{title:t("Description"),dataIndex:"description"},{title:t("Default"),dataIndex:"isDefault",key:"isDefault",onCell:(o,a)=>({props:{style:{width:"60px"}}}),render:(o,a)=>e.jsx(l,{checked:a.isDefault,checkedChildren:e.jsx(r,{}),unCheckedChildren:e.jsx(i,{})})},{title:t("enabled"),dataIndex:"enabled",key:"enabled",onCell:(o,a)=>({props:{style:{width:"60px"}}}),render:(o,a)=>e.jsx(l,{checked:a.enabled,checkedChildren:e.jsx(r,{}),unCheckedChildren:e.jsx(i,{})})}],j={PANEL_TITLE:t("payment_mode"),DATATABLE_TITLE:t("payment_mode_list"),ADD_NEW_ENTITY:t("add_new_payment_mode"),ENTITY_NAME:t("payment_mode")},C={...{entity:n,...j},readColumns:x,dataTableColumns:h,searchConfig:p,deleteModalLabels:u};return e.jsx(f,{createForm:e.jsx(m,{}),updateForm:e.jsx(m,{isUpdateForm:!0}),config:C})}export{B as default};