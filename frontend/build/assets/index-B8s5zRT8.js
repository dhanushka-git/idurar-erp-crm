import{ah as a}from"./index-Dl6LwJ4d.js";import{d as u}from"./index-DSKn7ZrA.js";import{E as c}from"./IdurarOs-DtUKoUhl.js";import"./index--ceyq7RT.js";import{E as y}from"./selectors-DVcOAGQ9.js";import{E as f}from"./index-CUrF-ms4.js";import{u as x}from"./useMoney-8gZM29YX.js";import{u as E}from"./useDate-Bb0hwROU.js";import"./ErpApp-DTobssxw.js";import"./DownOutlined-DZjzy1fX.js";import"./index-CaDmTs0c.js";import"./useDebounce-JlGN8CId.js";import"./index-DyHss8f1.js";import"./actions-B85TnJ1M.js";import"./index-KrFx5yLV.js";import"./Table-B7R6vhSD.js";import"./FilePdfOutlined-roDxNulN.js";import"./DeleteOutlined-j13DKby7.js";import"./ArrowLeftOutlined-D7o0Jhde.js";import"./helpers-xzdFsypT.js";import"./PlusOutlined-Cya6DlAB.js";import"./index-DAhtVAsE.js";import"./fade-ColcA16n.js";function b({config:t}){return a.jsx(y,{children:a.jsx(f,{config:t})})}function z(){const t=c(),{dateFormat:r}=E(),{moneyFormatter:n}=x(),o={entity:"client",displayLabels:["number"],searchFields:"number",outputValue:"_id"},i=["number"],m=[{title:t("Number"),dataIndex:"number"},{title:t("Client"),dataIndex:["client","name"]},{title:t("Amount"),dataIndex:"amount",onCell:()=>({style:{textAlign:"right",whiteSpace:"nowrap",direction:"ltr"}}),render:(e,l)=>n({amount:e,currency_code:l.currency})},{title:t("Date"),dataIndex:"date",render:e=>u(e).format(r)},{title:t("Number"),dataIndex:["invoice","number"]},{title:t("year"),dataIndex:["invoice","year"]},{title:t("Payment Mode"),dataIndex:["paymentMode","name"]}],s="payment",d={PANEL_TITLE:t("payment"),DATATABLE_TITLE:t("payment_list"),ADD_NEW_ENTITY:t("add_new_payment"),ENTITY_NAME:t("payment")},p={...{entity:s,...d},disableAdd:!0,dataTableColumns:m,searchConfig:o,deleteModalLabels:i};return a.jsx(b,{config:p})}export{z as default};
