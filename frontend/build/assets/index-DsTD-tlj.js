import{ah as n}from"./index-Dl6LwJ4d.js";import{d as i}from"./index-DSKn7ZrA.js";import{E as m}from"./IdurarOs-DtUKoUhl.js";import{u as x}from"./useMoney-8gZM29YX.js";import{u as y}from"./useDate-Bb0hwROU.js";import"./index--ceyq7RT.js";import{E as f}from"./selectors-DVcOAGQ9.js";import{E}from"./index-CUrF-ms4.js";import{C as I}from"./ErpApp-DTobssxw.js";import"./DownOutlined-DZjzy1fX.js";import"./index-CaDmTs0c.js";import"./useDebounce-JlGN8CId.js";import"./index-DyHss8f1.js";import"./actions-B85TnJ1M.js";import"./index-KrFx5yLV.js";import"./Table-B7R6vhSD.js";import"./FilePdfOutlined-roDxNulN.js";import"./DeleteOutlined-j13DKby7.js";import"./ArrowLeftOutlined-D7o0Jhde.js";import"./helpers-xzdFsypT.js";import"./PlusOutlined-Cya6DlAB.js";import"./index-DAhtVAsE.js";import"./fade-ColcA16n.js";function T({config:t}){const r=m();return n.jsx(f,{children:n.jsx(E,{config:t,extra:[{label:r("Record Payment"),key:"recordPayment",icon:n.jsx(I,{})}]})})}function G(){const t=m(),{dateFormat:r}=y(),c="invoice",{moneyFormatter:o}=x(),d={entity:"client",displayLabels:["name"],searchFields:"name"},s=["number","client.name"],l=[{title:t("Number"),dataIndex:"number"},{title:t("Client"),dataIndex:["client","name"]},{title:t("Date"),dataIndex:"date",render:e=>i(e).format(r)},{title:t("expired Date"),dataIndex:"expiredDate",render:e=>i(e).format(r)},{title:t("Total"),dataIndex:"total",onCell:()=>({style:{textAlign:"right",whiteSpace:"nowrap",direction:"ltr"}}),render:(e,a)=>o({amount:e,currency_code:a.currency})},{title:t("paid"),dataIndex:"credit",onCell:()=>({style:{textAlign:"right",whiteSpace:"nowrap",direction:"ltr"}}),render:(e,a)=>o({amount:e,currency_code:a.currency})},{title:t("Status"),dataIndex:"status"},{title:t("Payment"),dataIndex:"paymentStatus"}],p={PANEL_TITLE:t("invoice"),DATATABLE_TITLE:t("invoice_list"),ADD_NEW_ENTITY:t("add_new_invoice"),ENTITY_NAME:t("invoice"),RECORD_ENTITY:t("record_payment")},u={...{entity:c,...p},dataTableColumns:l,searchConfig:d,deleteModalLabels:s};return n.jsx(T,{config:u})}export{G as default};