import{aV as o,aW as S,aX as n,aY as c,aZ as p,a_ as r,a$ as u}from"./index-Dl6LwJ4d.js";import{H as s}from"./IdurarOs-DtUKoUhl.js";const f={resetState:(l={})=>async e=>{e({type:o})},resetAction:({actionType:l})=>async e=>{e({type:S,keyState:l,payload:null})},currentItem:({data:l})=>async e=>{e({type:n,payload:{...l}})},currentAction:({actionType:l,data:e})=>async a=>{a({type:c,keyState:l,payload:{...e}})},list:({entity:l,options:e={page:1,items:10}})=>async a=>{a({type:p,keyState:"list",payload:null});let t=await s.list({entity:l,options:e});if(t.success===!0){const y={items:t.result,pagination:{current:parseInt(t.pagination.page,10),pageSize:e==null?void 0:e.items,total:parseInt(t.pagination.count,10)}};a({type:r,keyState:"list",payload:y})}else a({type:u,keyState:"list",payload:null})},create:({entity:l,jsonData:e,withUpload:a=!1})=>async t=>{t({type:p,keyState:"create",payload:null});let y=null;a?y=await s.createAndUpload({entity:l,jsonData:e}):y=await s.create({entity:l,jsonData:e}),y.success===!0?(t({type:r,keyState:"create",payload:y.result}),t({type:n,payload:y.result})):t({type:u,keyState:"create",payload:null})},read:({entity:l,id:e})=>async a=>{a({type:p,keyState:"read",payload:null});let t=await s.read({entity:l,id:e});t.success===!0?(a({type:n,payload:t.result}),a({type:r,keyState:"read",payload:t.result})):a({type:u,keyState:"read",payload:null})},update:({entity:l,id:e,jsonData:a,withUpload:t=!1})=>async y=>{y({type:p,keyState:"update",payload:null});let d=null;t?d=await s.updateAndUpload({entity:l,id:e,jsonData:a}):d=await s.update({entity:l,id:e,jsonData:a}),d.success===!0?(y({type:r,keyState:"update",payload:d.result}),y({type:n,payload:d.result})):y({type:u,keyState:"update",payload:null})},delete:({entity:l,id:e})=>async a=>{a({type:S,keyState:"delete"}),a({type:p,keyState:"delete",payload:null});let t=await s.delete({entity:l,id:e});t.success===!0?a({type:r,keyState:"delete",payload:t.result}):a({type:u,keyState:"delete",payload:null})},search:({entity:l,options:e={}})=>async a=>{a({type:p,keyState:"search",payload:null});let t=await s.search({entity:l,options:e});t.success===!0?a({type:r,keyState:"search",payload:t.result}):a({type:u,keyState:"search",payload:null})}};export{f as c};
