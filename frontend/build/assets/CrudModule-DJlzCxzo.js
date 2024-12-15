import{ag as w,ar as N,ap as R,a as A,ah as e}from"./index-Dl6LwJ4d.js";import{c as h}from"./actions-DM-fyJT1.js";import{a as B,C as te}from"./index--ceyq7RT.js";import{_,a0 as Q,B as L,E as K,D as $,Z as ne,C as oe,W as Y,Q as I,an as re,J as se,M as X,Y as ce,L as ue}from"./IdurarOs-DtUKoUhl.js";import{d as P,P as me}from"./index-DSKn7ZrA.js";import{v as ee,R as de}from"./helpers-xzdFsypT.js";import{M as be}from"./index-DAhtVAsE.js";import{s as W}from"./index-KrFx5yLV.js";import{c as Ae}from"./color-CnuJOIlI.js";import{S as pe}from"./index-B4sz1LF7.js";import{T as M}from"./index-Hr_Nahbw.js";import{u as ve}from"./useMoney-8gZM29YX.js";import{m as he,D as xe,E as fe,n as ge}from"./ErpApp-DTobssxw.js";import{u as ae}from"./useDate-Bb0hwROU.js";import{u as Ze}from"./useDebounce-JlGN8CId.js";import{S as q,E as Se}from"./index-DyHss8f1.js";import{A as Ce}from"./ArrowLeftOutlined-D7o0Jhde.js";import{F as je}from"./Table-B7R6vhSD.js";import{D as le}from"./DeleteOutlined-j13DKby7.js";import{P as Ee}from"./PlusOutlined-Cya6DlAB.js";function Be(){return he()}const ye={useBreakpoint:Be},G=i=>i.crud,ie=w([G],i=>i.current),Te=w([G],i=>i.list),Me=w([G],i=>i.create),Ie=w([G],i=>i.update);w([G],i=>i.read);const De=w([G],i=>i.delete),ke=w([G],i=>i.search);function Le({config:i,formElements:a,withUpload:s=!1}){let{entity:r}=i;const c=N(),{isLoading:t,isSuccess:l}=R(Me),{crudContextAction:u}=B(),{panel:v,collapsedBox:x,readBox:f}=u,[d]=_.useForm(),n=K(),o=b=>{b.file&&s&&(b.file=b.file[0].originFileObj),c(h.create({entity:r,jsonData:b,withUpload:s}))};return A.useEffect(()=>{l&&(f.open(),x.open(),v.open(),d.resetFields(),c(h.resetAction({actionType:"create"})),c(h.list({entity:r})))},[l]),e.jsx(Q,{isLoading:t,children:e.jsxs(_,{form:d,layout:"vertical",onFinish:o,children:[a,e.jsx(_.Item,{children:e.jsx(L,{type:"primary",htmlType:"submit",children:n("Submit")})})]})})}function Pe({config:i,formElements:a,withUpload:s=!1}){let{entity:r}=i;const c=K(),t=N(),{current:l,isLoading:u,isSuccess:v}=R(Ie),{state:x,crudContextAction:f}=B(),{panel:d,collapsedBox:n,readBox:o}=f,b=()=>{o.open()},[Z]=_.useForm(),S=m=>{const D=l._id;m.file&&s&&(m.file=m.file[0].originFileObj),t(h.update({entity:r,id:D,jsonData:m,withUpload:s}))};A.useEffect(()=>{if(l){let m={...l};m.birthday&&(m={...m,birthday:P(m.birthday).format("YYYY-MM-DDTHH:mm:ss.SSSZ")}),m.date&&(m={...m,date:P(m.date).format("YYYY-MM-DDTHH:mm:ss.SSSZ")}),m.expiredDate&&(m={...m,expiredDate:P(m.expiredDate).format("YYYY-MM-DDTHH:mm:ss.SSSZ")}),m.created&&(m={...m,created:P(m.created).format("YYYY-MM-DDTHH:mm:ss.SSSZ")}),m.updated&&(m={...m,updated:P(m.updated).format("YYYY-MM-DDTHH:mm:ss.SSSZ")}),Z.resetFields(),Z.setFieldsValue(m)}},[l]),A.useEffect(()=>{v&&(o.open(),n.open(),d.open(),Z.resetFields(),t(h.resetAction({actionType:"update"})),t(h.list({entity:r})))},[v]);const{isEditBoxOpen:g}=x,j=g?{display:"block",opacity:1}:{display:"none",opacity:0};return e.jsx("div",{style:j,children:e.jsx(Q,{isLoading:u,children:e.jsxs(_,{form:Z,layout:"vertical",onFinish:S,children:[a,e.jsx(_.Item,{style:{display:"inline-block",paddingRight:"5px"},children:e.jsx(L,{type:"primary",htmlType:"submit",children:c("Save")})}),e.jsx(_.Item,{style:{display:"inline-block",paddingLeft:"5px"},children:e.jsx(L,{onClick:b,children:c("Cancel")})})]})})})}function _e({config:i}){const a=K();let{entity:s,deleteModalLabels:r,deleteMessage:c=a("are_you_sure_you_want_to_delete"),modalTitle:t=a("delete_confirmation")}=i;const l=N(),{current:u,isLoading:v,isSuccess:x}=R(De),{state:f,crudContextAction:d}=B(),{appContextAction:n}=$(),{panel:o,readBox:b}=d,{navMenu:Z}=n,{isModalOpen:S}=f,{modal:g}=d,[j,m]=A.useState("");A.useEffect(()=>{if(x&&(console.log("🚀 ~ useEffect ~ DeleteModal isSuccess:",x),g.close(),l(h.list({entity:s}))),u){let T=r.map(F=>ee(u,F)).join(" ");m(T)}},[x,u]);const D=()=>{const T=u._id;l(h.delete({entity:s,id:T})),b.close(),g.close(),o.close(),Z.collapse()},y=()=>{v||g.close()};return e.jsx(be,{title:t,open:S,onOk:D,onCancel:y,confirmLoading:v,children:e.jsxs("p",{children:[c,j]})})}const we=[{label:"Afghanistan",value:"AF",timeZone:["Asia/Kabul"]},{label:"Albania",value:"AL",timeZone:["Europe/Tirane"]},{label:"Algeria",value:"DZ",timeZone:["Africa/Algiers"]},{label:"Andorra",value:"AD"},{label:"Angola",value:"AO"},{label:"Anguilla",value:"AI"},{label:"Argentina",value:"AR",timeZone:["America/Argentina/Buenos_Aires","America/Argentina/Cordoba","America/Argentina/Salta","America/Argentina/Jujuy","America/Argentina/Tucuman","America/Argentina/Catamarca","America/Argentina/La_Rioja","America/Argentina/San_Juan","America/Argentina/Mendoza","America/Argentina/San_Luis","America/Argentina/Rio_Gallegos","America/Argentina/Ushuaia"]},{label:"Armenia",value:"AM",timeZone:["Asia/Yerevan"]},{label:"Aruba",value:"AW"},{label:"Australia",value:"AU",timeZone:["Australia/Lord_Howe","Antarctica/Macquarie","Australia/Hobart","Australia/Currie","Australia/Melbourne","Australia/Sydney","Australia/Broken_Hill","Australia/Brisbane","Australia/Lindeman","Australia/Adelaide","Australia/Darwin","Australia/Perth","Australia/Eucla"]},{label:"Austria",value:"AT",timeZone:["Europe/Vienna"]},{label:"Azerbaijan",value:"AZ",timeZone:["Asia/Baku"]},{label:"Bahamas",value:"BS"},{label:"Bahrain",value:"BH",timeZone:["Asia/Bahrain"]},{label:"Bangladesh",value:"BD",timeZone:["Asia/Dhaka"]},{label:"Barbados",value:"BB"},{label:"Belarus",value:"BY",timeZone:["Europe/Minsk"]},{label:"Belgium",value:"BE",timeZone:["Europe/Brussels"]},{label:"Belize",value:"BZ",timeZone:["America/Belize"]},{label:"Benin",value:"BJ"},{label:"Bermuda",value:"BM"},{label:"Bhutan",value:"BT",timeZone:["Asia/Thimphu"]},{label:"Bolivia",value:"BO",timeZone:["America/La_Paz"]},{label:"Bosnia and Herzegovina",value:"BA",timeZone:["Europe/Sarajevo"]},{label:"Botswana",value:"BW",timeZone:["Africa/Gaborone"]},{label:"Brazil",value:"BR",timeZone:["America/Noronha","America/Belem","America/Fortaleza","America/Recife","America/Araguaina","America/Maceio","America/Bahia","America/Sao_Paulo","America/Campo_Grande","America/Cuiaba","America/Santarem","America/Porto_Velho","America/Boa_Vista","America/Manaus","America/Eirunepe","America/Rio_Branco"]},{label:"Brunei Darussalam",value:"BN",timeZone:["Asia/Brunei"]},{label:"Bulgaria",value:"BG",timeZone:["Europe/Sofia"]},{label:"Burkina Faso",value:"BF"},{label:"Burundi",value:"BI"},{label:"Cabo Verde",value:"CV"},{label:"Cambodia",value:"KH",timeZone:["Asia/Phnom_Penh"]},{label:"Cameroon",value:"CM",timeZone:["Africa/Douala"]},{label:"Canada",value:"CA",timeZone:["America/St_Johns","America/Halifax","America/Glace_Bay","America/Moncton","America/Goose_Bay","America/Blanc-Sablon","America/Toronto","America/Nipigon","America/Thunder_Bay","America/Iqaluit","America/Pangnirtung","America/Atikokan","America/Winnipeg","America/Rainy_River","America/Resolute","America/Rankin_Inlet","America/Regina","America/Swift_Current","America/Edmonton","America/Cambridge_Bay","America/Yellowknife","America/Inuvik","America/Creston","America/Dawson_Creek","America/Fort_Nelson","America/Vancouver","America/Whitehorse","America/Dawson"]},{label:"Central African Republic",value:"CF"},{label:"Chad",value:"TD"},{label:"Chile",value:"CL",timeZone:["America/Santiago","Pacific/Easter"]},{label:"China",value:"CN",timeZone:["Asia/Shanghai","Asia/Urumqi"]},{label:"Colombia",value:"CO",timeZone:["America/Bogota"]},{label:"Comoros",value:"KM"},{label:"Congo",value:"CD",timeZone:["Africa/Kinshasa","Africa/Lubumbashi"]},{label:"Congo",value:"CG"},{label:"Costa Rica",value:"CR",timeZone:["America/Costa_Rica"]},{label:"Croatia",value:"HR",timeZone:["Europe/Zagreb"]},{label:"Cuba",value:"CU",timeZone:["America/Havana"]},{label:"Cyprus",value:"CY"},{label:"Czechia",value:"CZ",timeZone:["Europe/Prague"]},{label:"Cote d Ivoire",value:"CI",timeZone:["Africa/Abidjan"]},{label:"Denmark",value:"DK",timeZone:["Europe/Copenhagen"]},{label:"Djibouti",value:"DJ",timeZone:["Africa/Djibouti"]},{label:"Dominica",value:"DM"},{label:"Dominican Republic",value:"DO",timeZone:["America/Santo_Domingo"]},{label:"Ecuador",value:"EC",timeZone:["America/Guayaquil","Pacific/Galapagos"]},{label:"Egypt",value:"EG",timeZone:["Africa/Cairo"]},{label:"El Salvador",value:"SV",timeZone:["America/El_Salvador"]},{label:"Eritrea",value:"ER",timeZone:["Africa/Asmara"]},{label:"Estonia",value:"EE",timeZone:["Europe/Tallinn"]},{label:"Eswatini",value:"SZ"},{label:"Ethiopia",value:"ET",timeZone:["Africa/Addis_Ababa"]},{label:"Fiji",value:"FJ"},{label:"Finland",value:"FI",timeZone:["Europe/Helsinki"]},{label:"France",value:"FR",timeZone:["Europe/Paris"]},{label:"Gabon",value:"GA"},{label:"Gambia",value:"GM"},{label:"Georgia",value:"GE",timeZone:["Asia/Tbilisi"]},{label:"Germany",value:"DE",timeZone:["Europe/Berlin","Europe/Busingen"]},{label:"Ghana",value:"GH"},{label:"Gibraltar",value:"GI"},{label:"Greece",value:"GR",timeZone:["Europe/Athens"]},{label:"Greenland",value:"GL",timeZone:["America/Godthab","America/Danmarkshavn","America/Scoresbysund","America/Thule"]},{label:"Guadeloupe",value:"GP"},{label:"Guam",value:"GU"},{label:"Guatemala",value:"GT",timeZone:["America/Guatemala"]},{label:"Guernsey",value:"GG"},{label:"Guinea",value:"GN"},{label:"Guinea-Bissau",value:"GW"},{label:"Guyana",value:"GY"},{label:"Haiti",value:"HT",timeZone:["America/Port-au-Prince"]},{label:"Honduras",value:"HN",timeZone:["America/Tegucigalpa"]},{label:"Hong Kong",value:"HK",timeZone:["Asia/Hong_Kong"]},{label:"Hungary",value:"HU",timeZone:["Europe/Budapest"]},{label:"Iceland",value:"IS",timeZone:["Atlantic/Reykjavik"]},{value:"IN",label:"India",timeZone:["Asia/Kolkata"]},{value:"ID",label:"Indonesia",timeZone:["Asia/Jakarta","Asia/Pontianak","Asia/Makassar","Asia/Jayapura"]},{value:"IR",label:"Iran",timeZone:["Asia/Tehran"]},{value:"IQ",label:"Iraq",timeZone:["Asia/Baghdad"]},{value:"IE",label:"Ireland",timeZone:["Europe/Dublin"]},{value:"IL",label:"Israel",timeZone:["Asia/Jerusalem"]},{value:"IT",label:"Italy",timeZone:["Europe/Rome"]},{value:"JM",label:"Jamaica",timeZone:["America/Jamaica"]},{value:"JP",label:"Japan",timeZone:["Asia/Tokyo"]},{value:"JO",label:"Jordan",timeZone:["Asia/Amman"]},{value:"KZ",label:"Kazakhstan",timeZone:["Asia/Almaty","Asia/Qyzylorda","Asia/Aqtobe","Asia/Aqtau","Asia/Oral"]},{value:"KE",label:"Kenya",timeZone:["Africa/Nairobi"]},{value:"KP",label:"Korea"},{value:"KR",label:"Korea",timeZone:["Asia/Seoul"]},{value:"KW",label:"Kuwait",timeZone:["Asia/Kuwait"]},{value:"KG",label:"Kyrgyzstan",timeZone:["Asia/Bishkek"]},{value:"LV",label:"Latvia",timeZone:["Europe/Riga"]},{value:"LB",label:"Lebanon",timeZone:["Asia/Beirut"]},{value:"LS",label:"Lesotho"},{value:"LR",label:"Liberia"},{value:"LY",label:"Libya",timeZone:["Africa/Tripoli"]},{value:"LI",label:"Liechtenstein",timeZone:["Europe/Vaduz"]},{value:"LT",label:"Lithuania",timeZone:["Europe/Vilnius"]},{value:"LU",label:"Luxembourg",timeZone:["Europe/Luxembourg"]},{value:"MG",label:"Madagascar"},{value:"MW",label:"Malawi"},{value:"MY",label:"Malaysia",timeZone:["Asia/Kuala_Lumpur","Asia/Kuching"]},{value:"MV",label:"Maldives",timeZone:["Indian/Maldives"]},{value:"ML",label:"Mali",timeZone:["Africa/Bamako"]},{value:"MT",label:"Malta",timeZone:["Europe/Malta"]},{value:"MQ",label:"Martinique"},{value:"MR",label:"Mauritania"},{value:"MU",label:"Mauritius"},{value:"MX",label:"Mexico",timeZone:["America/Mexico_City","America/Cancun","America/Merida","America/Monterrey","America/Matamoros","America/Mazatlan","America/Chihuahua","America/Ojinaga","America/Hermosillo","America/Tijuana","America/Bahia_Banderas"]},{value:"MD",label:"Moldova",timeZone:["Europe/Chisinau"]},{value:"MC",label:"Monaco",timeZone:["Europe/Monaco"]},{value:"MN",label:"Mongolia",timeZone:["Asia/Ulaanbaatar","Asia/Hovd","Asia/Choibalsan"]},{value:"ME",label:"Montenegro",timeZone:["Europe/Podgorica"]},{value:"MS",label:"Montserrat"},{value:"MA",label:"Morocco",timeZone:["Africa/Casablanca"]},{value:"MZ",label:"Mozambique"},{value:"MM",label:"Myanmar",timeZone:["Asia/Rangoon"]},{value:"NA",label:"Namibia"},{value:"NP",label:"Nepal",timeZone:["Asia/Kathmandu"]},{value:"NL",label:"Netherlands",timeZone:["Europe/Amsterdam"]},{value:"NC",label:"New Caledonia"},{value:"NZ",label:"New Zealand",timeZone:["Pacific/Auckland","Pacific/Chatham"]},{value:"NI",label:"Nicaragua",timeZone:["America/Managua"]},{value:"NE",label:"Niger"},{value:"NG",label:"Nigeria",timeZone:["Africa/Lagos"]},{value:"NO",label:"Norway",timeZone:["Europe/Oslo"]},{value:"OM",label:"Oman",timeZone:["Asia/Muscat"]},{value:"PK",label:"Pakistan",timeZone:["Asia/Karachi"]},{value:"PS",label:"Palestine"},{value:"PA",label:"Panama",timeZone:["America/Panama"]},{value:"PG",label:"Papua New Guinea"},{value:"PY",label:"Paraguay",timeZone:["America/Asuncion"]},{value:"PE",label:"Peru",timeZone:["America/Lima"]},{value:"PH",label:"Philippines",timeZone:["Asia/Manila"]},{value:"PL",label:"Poland",timeZone:["Europe/Warsaw"]},{value:"PT",label:"Portugal",timeZone:["Europe/Lisbon","Atlantic/Madeira","Atlantic/Azores"]},{value:"PR",label:"Puerto Rico",timeZone:["America/Puerto_Rico"]},{value:"QA",label:"Qatar",timeZone:["Asia/Qatar"]},{value:"MK",label:"Macedonia",timeZone:["Europe/Skopje"]},{value:"RO",label:"Romania",timeZone:["Europe/Bucharest"]},{value:"RU",label:"Russia",timeZone:["Europe/Kaliningrad","Europe/Moscow","Europe/Simferopol","Europe/Volgograd","Europe/Astrakhan","Europe/Samara","Europe/Ulyanovsk","Asia/Yekaterinburg","Asia/Omsk","Asia/Novosibirsk","Asia/Barnaul","Asia/Novokuznetsk","Asia/Krasnoyarsk","Asia/Irkutsk","Asia/Chita","Asia/Yakutsk","Asia/Khandyga","Asia/Vladivostok","Asia/Ust-Nera","Asia/Magadan","Asia/Sakhalin","Asia/Srednekolymsk","Asia/Kamchatka","Asia/Anadyr"]},{value:"RW",label:"Rwanda",timeZone:["Africa/Kigali"]},{value:"RE",label:"Réunion",timeZone:["Indian/Reunion"]},{value:"SA",label:"Saudi Arabia",timeZone:["Asia/Riyadh"]},{value:"SN",label:"Senegal",timeZone:["Africa/Dakar"]},{value:"RS",label:"Serbia",timeZone:["Europe/Belgrade"]},{value:"SG",label:"Singapore",timeZone:["Asia/Singapore"]},{value:"SK",label:"Slovakia",timeZone:["Europe/Bratislava"]},{value:"SI",label:"Slovenia",timeZone:["Europe/Ljubljana"]},{value:"SO",label:"Somalia",timeZone:["Africa/Mogadishu"]},{value:"ZA",label:"South Africa",timeZone:["Africa/Johannesburg"]},{value:"SS",label:"South Sudan"},{value:"ES",label:"Spain",timeZone:["Europe/Madrid","Africa/Ceuta","Atlantic/Canary"]},{value:"LK",label:"Sri Lanka",timeZone:["Asia/Colombo"]},{value:"SD",label:"Sudan"},{value:"SR",label:"Suriname"},{value:"SE",label:"Sweden",timeZone:["Europe/Stockholm"]},{value:"CH",label:"Switzerland",timeZone:["Europe/Zurich"]},{value:"SY",label:"Syria",timeZone:["Asia/Damascus"]},{value:"TW",label:"Taiwan",timeZone:["Asia/Taipei"]},{value:"TJ",label:"Tajikistan",timeZone:["Asia/Dushanbe"]},{value:"TZ",label:"Tanzania"},{value:"TH",label:"Thailand",timeZone:["Asia/Bangkok"]},{value:"TL",label:"Timor-Leste"},{value:"TG",label:"Togo"},{value:"TO",label:"Tonga"},{value:"TN",label:"Tunisia",timeZone:["Africa/Tunis"]},{value:"TR",label:"Turkey",timeZone:["Europe/Istanbul"]},{value:"TM",label:"Turkmenistan",timeZone:["Asia/Ashgabat"]},{value:"UG",label:"Uganda"},{value:"UA",label:"Ukraine",timeZone:["Europe/Kiev","Europe/Uzhgorod","Europe/Zaporozhye"]},{value:"AE",label:"United Arab Emirates",timeZone:["Asia/Dubai"]},{value:"GB",label:"United Kingdom",timeZone:["Europe/London"]},{value:"US",label:"United States",timeZone:["America/New_York","America/Detroit","America/Kentucky/Louisville","America/Kentucky/Monticello","America/Indiana/Indianapolis","America/Indiana/Vincennes","America/Indiana/Winamac","America/Indiana/Marengo","America/Indiana/Petersburg","America/Indiana/Vevay","America/Chicago","America/Indiana/Tell_City","America/Indiana/Knox","America/Menominee","America/North_Dakota/Center","America/North_Dakota/New_Salem","America/North_Dakota/Beulah","America/Denver","America/Boise","America/Phoenix","America/Los_Angeles","America/Anchorage","America/Juneau","America/Sitka","America/Metlakatla","America/Yakutat","America/Nome","America/Adak","Pacific/Honolulu"]},{value:"UY",label:"Uruguay",timeZone:["America/Montevideo"]},{value:"UZ",label:"Uzbekistan",timeZone:["Asia/Samarkand","Asia/Tashkent"]},{value:"VE",label:"Venezuela",timeZone:["America/Caracas"]},{value:"VN",label:"Vietnam",timeZone:["Asia/Ho_Chi_Minh"]},{value:"YE",label:"Yemen",timeZone:["Asia/Aden"]},{value:"ZM",label:"Zambia"},{value:"ZW",label:"Zimbabwe",timeZone:["Africa/Harare"]}],Ne=({fields:i,translate:a})=>{let s=[];return Object.keys(i).forEach(r=>{let c=i[r];s.push({title:c.label?c.label:r,dataIndex:c.dataIndex?c.dataIndex.join("."):r,isDate:c.type==="date"})}),s};function Re({fields:i,translate:a,moneyFormatter:s,dateFormat:r}){let c=[];return Object.keys(i).forEach(t=>{let l=i[t];const u=l.dataIndex?l.dataIndex:[t],v={boolean:{title:l.label?a(l.label):a(t),dataIndex:u,onCell:()=>({props:{style:{width:"60px"}}}),render:(d,n)=>e.jsx(pe,{checked:n[t],checkedChildren:e.jsx(ne,{}),unCheckedChildren:e.jsx(oe,{})})},date:{title:l.label?a(l.label):a(t),dataIndex:u,render:(d,n)=>{const o=P(n[t]).format(r);return e.jsx(M,{bordered:!1,color:l.color,children:o})}},currency:{title:l.label?a(l.label):a(t),dataIndex:u,onCell:()=>({style:{textAlign:"right",whiteSpace:"nowrap"}}),render:(d,n)=>s({amount:n[t],currency_code:n.currency})},async:{title:l.label?a(l.label):a(t),dataIndex:u,render:(d,n)=>{var o;return e.jsx(M,{bordered:!1,color:l.color||((o=n[t])==null?void 0:o.color)||n.color,children:d})}},color:{title:l.label?a(l.label):a(t),dataIndex:u,render:(d,n)=>{var o;return e.jsx(M,{bordered:!1,color:d,children:(o=Ae.find(b=>b.value===d))==null?void 0:o.label})}},stringWithColor:{title:l.label?a(l.label):a(t),dataIndex:u,render:(d,n)=>e.jsx(M,{bordered:!1,color:n.color||l.color,children:d})},tag:{title:l.label?a(l.label):a(t),dataIndex:u,render:(d,n)=>e.jsx(M,{bordered:!1,color:l.color,children:n[t]&&n[t]})},selectWithFeedback:{title:l.label?a(l.label):a(t),dataIndex:u,render:(d,n)=>{if(l.renderAsTag){const o=l.options.find(b=>b.value===n[t]);return e.jsx(M,{bordered:!1,color:o==null?void 0:o.color,children:n[t]&&a(n[t])})}else return n[t]&&a(n[t])}},select:{title:l.label?a(l.label):a(t),dataIndex:u,render:(d,n)=>{if(l.renderAsTag){const o=l.options.find(b=>b.value===n[t]);return e.jsx(M,{bordered:!1,color:o==null?void 0:o.color,children:n[t]&&n[t]})}else return n[t]&&n[t]}},selectWithTranslation:{title:l.label?a(l.label):a(t),dataIndex:u,render:(d,n)=>{if(l.renderAsTag){const o=l.options.find(b=>b.value===n[t]);return e.jsx(M,{bordered:!1,color:o==null?void 0:o.color,children:n[t]&&a(n[t])})}else return n[t]&&a(n[t])}},array:{title:l.label?a(l.label):a(t),dataIndex:u,render:(d,n)=>n[t].map(o=>e.jsx(M,{bordered:!1,color:l.colors[o],children:o},`${W.generate()}`))},country:{title:l.label?a(l.label):a(t),dataIndex:u,render:(d,n)=>{const o=we.find(b=>b.value===n[t]);return e.jsxs(M,{bordered:!1,color:l.color||void 0,children:[(o==null?void 0:o.icon)&&(o==null?void 0:o.icon)+" ",(o==null?void 0:o.label)&&a(o.label)]})}}},x={title:l.label?a(l.label):a(t),dataIndex:u},f=l.type;l.disableForTable||(Object.keys(v).includes(f)?c.push(v[f]):c.push(x))}),c}function Ge({config:i}){const{dateFormat:a}=ae();let{readColumns:s,fields:r}=i;const c=K(),{result:t}=R(ie),{state:l}=B(),{isReadBoxOpen:u}=l,[v,x]=A.useState([]);r&&(s=[...Ne({fields:r,translate:c})]),A.useEffect(()=>{const n=[];s.map(o=>{const b=o.dataIndex,Z=o.title,S=o.isDate||!1;let g=ee(t,b);g=S?P(g).format(a):g,n.push({propsKey:b,label:Z,value:g})}),x(n)},[t]);const f=u?{display:"block",opacity:1}:{display:"none",opacity:0},d=v.map(n=>e.jsxs(Y,{gutter:12,children:[e.jsx(I,{className:"gutter-row",span:8,children:e.jsx("p",{children:n.label})}),e.jsx(I,{className:"gutter-row",span:2,children:e.jsx("p",{children:" : "})}),e.jsx(I,{className:"gutter-row",span:14,children:e.jsx("p",{children:n.value})})]},n.propsKey));return e.jsx("div",{style:f,children:d})}function Ke({config:i,onRerender:a}){let{entity:s,searchConfig:r}=i;const{displayLabels:c,searchFields:t,outputValue:l="_id"}=r,u=N(),{crudContextAction:v}=B(),{panel:x,collapsedBox:f,readBox:d}=v,{result:n,isLoading:o,isSuccess:b}=R(ke),[Z,S]=A.useState([]),[g,j]=A.useState(void 0),m=A.useRef(!1),[D,y]=A.useState(!1),[T,F]=A.useState(""),[H,U]=A.useState(""),[,V]=Ze(()=>{U(T)},500,[T]),E=C=>c.map(p=>C[p]).join(" ");A.useEffect(()=>{if(H!=""){const C={q:H,fields:t};u(h.search({entity:s,options:C}))}return()=>{V()}},[H]);const z=C=>{C&&C!=""&&(m.current=!0,y(!0),S([]),j(void 0),F(C))},J=C=>{const p=n.find(k=>k[l]===C);u(h.currentItem({data:p})),x.open(),f.open(),d.open(),a()};return A.useEffect(()=>{m.current&&(b?S(n):(y(!1),j(void 0),S([])))},[b,n]),e.jsx(q,{loading:o,showSearch:!0,allowClear:!0,placeholder:e.jsx(re,{style:{float:"right",padding:"8px 0"}}),defaultActiveFirstOption:!1,filterOption:!1,notFoundContent:D?"... Searching":e.jsx(Se,{}),value:g,onSearch:z,style:{width:"100%"},onSelect:J,children:Z.map(C=>e.jsx(q.Option,{value:C[l],children:E(C)},C[l]))})}function Fe({config:i}){const[a,s]=A.useState([0]),r=()=>{s([a+1])};return a.map(c=>e.jsx(Ke,{config:i,onRerender:r},c))}function He({config:i}){const{crudContextAction:a}=B(),{collapsedBox:s,panel:r}=a,{ADD_NEW_ENTITY:c}=i,t=()=>{r.open(),s.close()};return e.jsx(L,{onClick:t,type:"primary",children:c})}function Oe({config:i,extra:a=[]}){let{entity:s,dataTableColumns:r,DATATABLE_TITLE:c,fields:t,searchConfig:l}=i;const{crudContextAction:u}=B(),{panel:v,collapsedBox:x,modal:f,readBox:d,editBox:n,advancedBox:o}=u,b=K(),{moneyFormatter:Z}=ve(),{dateFormat:S}=ae(),g=[{label:b("Show"),key:"read",icon:e.jsx(se,{})},{label:b("Edit"),key:"edit",icon:e.jsx(X,{})},...a,{type:"divider"},{label:b("Delete"),key:"delete",icon:e.jsx(le,{})}],j=p=>{E(h.currentItem({data:p})),v.open(),x.open(),d.open()};function m(p){E(h.currentItem({data:p})),E(h.currentAction({actionType:"update",data:p})),n.open(),v.open(),x.open()}function D(p){E(h.currentAction({actionType:"delete",data:p})),f.open()}function y(p){E(h.currentItem({data:p})),E(h.currentAction({actionType:"update",data:p})),o.open(),v.open(),x.open()}let T=[];t?T=[...Re({fields:t,translate:b,moneyFormatter:Z,dateFormat:S})]:T=[...r],r=[...T,{title:"",key:"action",fixed:"right",render:(p,k)=>e.jsx(xe,{menu:{items:g,onClick:({key:O})=>{switch(O){case"read":j(k);break;case"edit":m(k);break;case"delete":D(k);break;case"updatePassword":y(k);break}}},trigger:["click"],children:e.jsx(fe,{style:{cursor:"pointer",fontSize:"24px"},onClick:O=>O.preventDefault()})})}];const{result:F,isLoading:H}=R(Te),{pagination:U,items:V}=F,E=N(),z=A.useCallback(p=>{const k={page:p.current||1,items:p.pageSize||10};E(h.list({entity:s,options:k}))},[]),J=p=>{const O={q:p.target.value,fields:(l==null?void 0:l.searchFields)||""};E(h.list({entity:s,options:O}))},C=()=>{E(h.list({entity:s}))};return A.useEffect(()=>{const p=new AbortController;return C(),()=>{p.abort()}},[]),e.jsxs(e.Fragment,{children:[e.jsx(me,{onBack:()=>window.history.back(),backIcon:e.jsx(Ce,{}),title:c,ghost:!1,extra:[e.jsx(ce,{onChange:J,placeholder:b("search"),allowClear:!0},"searchFilterDataTable}"),e.jsx(L,{onClick:z,icon:e.jsx(de,{}),children:b("Refresh")},`${W.generate()}`),e.jsx(He,{config:i},`${W.generate()}`)],style:{padding:"20px 0px"}}),e.jsx(je,{columns:r,rowKey:p=>p._id,dataSource:V,pagination:U,loading:H,onChange:z,scroll:{x:!0}})]})}function Ye({children:i}){return e.jsx(te,{children:i})}const ze=({onChange:i,title:a})=>e.jsx("div",{className:"collapseBoxHeader",onClick:i,children:a}),Ue=({isOpen:i,children:a})=>{const s=i?{display:"block",opacity:1}:{display:"none",opacity:0};return e.jsx("div",{className:"TopCollapseBox",children:e.jsx("div",{style:s,children:e.jsx(Y,{children:e.jsxs(I,{span:24,children:[" ",a]})})})})},Ve=({isOpen:i,children:a})=>{const s=i?{display:"none",opacity:0}:{display:"block",opacity:1};return e.jsx("div",{className:"BottomCollapseBox",children:e.jsx("div",{style:s,children:e.jsx(Y,{children:e.jsxs(I,{span:24,children:[" ",a]})})})})};function Je({topContent:i,bottomContent:a,buttonTitle:s,isCollapsed:r,onCollapse:c}){const t=r?"collapsed":"";return e.jsxs(e.Fragment,{children:[e.jsx(Ue,{isOpen:r,children:i}),e.jsxs("div",{className:"collapseBox "+t,children:[e.jsx(ze,{title:s,onChange:c}),e.jsx("div",{className:"whiteBg"}),e.jsx(Ve,{isOpen:r,children:a})]})]})}const{useBreakpoint:We}=ye;function qe({config:i,topContent:a,bottomContent:s,fixHeaderPanel:r}){We();const{ADD_NEW_ENTITY:c}=i,{state:t,crudContextAction:l}=B(),{isPanelClose:u,isBoxCollapsed:v}=t,{panel:x,collapsedBox:f}=l,[d,n]=A.useState(u),[o,b]=A.useState("-1px"),[Z,S]=A.useState(0),[g,j]=A.useState("20px");A.useEffect(()=>{let y=[];return u?(S(0),j("20px"),y=setTimeout(()=>{b("-1px"),n(u)},200)):(n(u),b(0),y=setTimeout(()=>{S(1),j(0)},200)),()=>clearTimeout(y)},[u]);const m=()=>{x.collapse()},D=()=>{f.collapse()};return e.jsx(ge,{title:i.PANEL_TITLE,placement:"right",onClose:m,open:!u,width:450,children:e.jsxs("div",{className:"sidePanelContent",style:{opacity:Z,paddingTop:g},children:[r,e.jsx(Je,{buttonTitle:c,isCollapsed:v,onCollapse:D,topContent:a,bottomContent:s})]})})}const{Content:Qe}=ue,$e=({children:i})=>{const{state:a,crudContextAction:s}=B();$();const{isPanelClose:r}=a,[c,t]=A.useState(r);return A.useEffect(()=>{let l=[];return r?l=setTimeout(()=>{t(r)},200):t(r),()=>clearTimeout(l)},[r]),e.jsx(Qe,{className:"whiteBox shadow layoutPadding",style:{margin:"30px auto",width:"100%",maxWidth:"100%",flex:"none"},children:i})};function Xe({children:i,config:a,sidePanelTopContent:s,sidePanelBottomContent:r,fixHeaderPanel:c}){return e.jsx(e.Fragment,{children:e.jsxs(Ye,{children:[e.jsx(qe,{config:a,topContent:s,bottomContent:r,fixHeaderPanel:c}),e.jsxs($e,{children:[" ",i]})]})})}function ea({config:i,formElements:a,withUpload:s}){const r=K(),{crudContextAction:c,state:t}=B(),{deleteModalLabels:l}=i,{modal:u,editBox:v}=c,{isReadBoxOpen:x,isEditBoxOpen:f}=t,{result:d}=R(ie),n=N(),[o,b]=A.useState("");A.useEffect(()=>{if(d){const j=l.map(m=>d[m]).join(" ");b(j)}},[d]);const Z=()=>{n(h.currentAction({actionType:"delete",data:d})),u.open()},S=()=>{n(h.currentAction({actionType:"update",data:d})),v.open()},g=x||f?{opacity:1}:{opacity:0};return e.jsxs(e.Fragment,{children:[e.jsxs(Y,{style:g,gutter:24,children:[e.jsx(I,{span:10,children:e.jsx("p",{style:{marginBottom:"10px"},children:o})}),e.jsxs(I,{span:14,children:[e.jsx(L,{onClick:Z,type:"text",icon:e.jsx(le,{}),size:"small",style:{float:"right",marginLeft:"5px",marginTop:"10px"},children:r("remove")}),e.jsx(L,{onClick:S,type:"text",icon:e.jsx(X,{}),size:"small",style:{float:"right",marginLeft:"0px",marginTop:"10px"},children:r("edit")})]}),e.jsx(I,{span:24,children:e.jsx("div",{className:"line"})}),e.jsx("div",{className:"space10"})]}),e.jsx(Ge,{config:i}),e.jsx(Pe,{config:i,formElements:a,withUpload:s})]})}function aa({config:i}){const{crudContextAction:a}=B(),{collapsedBox:s}=a,r=()=>{s.close()};return e.jsxs(Y,{gutter:8,children:[e.jsx(I,{className:"gutter-row",span:21,children:e.jsx(Fe,{config:i})}),e.jsx(I,{className:"gutter-row",span:3,children:e.jsx(L,{onClick:r,block:!0,icon:e.jsx(Ee,{})})})]})}function Sa({config:i,createForm:a,updateForm:s,withUpload:r=!1}){const c=N();return A.useLayoutEffect(()=>{c(h.resetState())},[]),e.jsxs(Xe,{config:i,fixHeaderPanel:e.jsx(aa,{config:i}),sidePanelBottomContent:e.jsx(Le,{config:i,formElements:a,withUpload:r}),sidePanelTopContent:e.jsx(ea,{config:i,formElements:s,withUpload:r}),children:[e.jsx(Oe,{config:i}),e.jsx(_e,{config:i})]})}export{Sa as C,we as c};
