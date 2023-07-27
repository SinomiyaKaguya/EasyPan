import{u as se,b as oe}from"./vue-router-3dc4a115.js";import{_ as te}from"./index-e72c2635.js";import{j as ae,r,ag as c,aq as ne,o as a,c as d,a as s,Q as le,F as P,V as f,U as v,O as m,P as I,u as M,T as O,S as y,bh as ie,bf as re}from"./@vue-7298a6f3.js";import"./element-plus-201f3318.js";import"./APlayer-9c029590.js";import"./lodash-es-36eb724a.js";import"./@vueuse-896144d5.js";import"./@element-plus-925c7e21.js";import"./@popperjs-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-a3f9ef92.js";import"./async-validator-10c6301d.js";import"./memoize-one-297ddbcb.js";import"./escape-html-a32e42c6.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-cd867356.js";import"./vue-cookies-10167fa5.js";import"./@highlightjs-4835b618.js";import"./highlight.js-c8ccfcef.js";import"./axios-4a70c6fc.js";import"./docx-preview-21a0c8be.js";import"./jszip-3fdcc0a1.js";import"./xlsx-04f2268f.js";import"./vue-pdf-embed-fff5335f.js";import"./vue-84fbd428.js";import"./dplayer-1b2f7e63.js";import"./vue-clipboard3-adec9f65.js";import"./clipboard-de925a1a.js";const w=S=>(ie("data-v-0d51ea1b"),S=S(),re(),S),ce={class:"share"},de=w(()=>s("span",{class:"iconfont icon-pan"},null,-1)),pe=w(()=>s("span",{class:"name"},"报雪云盘",-1)),ue=[de,pe],he={class:"share-body"},_e={key:0,class:"loading"},fe={class:"share-panel"},ve={class:"share-user-info"},me={class:"avatar"},ye={class:"share-info"},Se={class:"user-info"},ge={class:"nick-name"},ke={class:"share-time"},Ie={class:"file-name"},we={class:"share-op-btn"},be=w(()=>s("span",{class:"iconfont icon-cancel"},null,-1)),Ce=w(()=>s("span",{class:"iconfont icon-import"},null,-1)),Fe={class:"file-list"},Te=["onMouseenter","onMouseleave"],Ne=["title"],Re=["onClick"],xe={class:"op"},De=["onClick"],Pe=["onClick"],Me={key:0},Oe={__name:"Share",setup(S){const{proxy:n}=ae(),u=se(),b=oe(),p={getShareLoginInfo:"/showShare/getShareLoginInfo",loadFileList:"/showShare/loadFileList",createDownloadUrl:"/showShare/createDownloadUrl",download:"/api/showShare/download",cancelShare:"/share/cancelShare",saveShare:"/showShare/saveShare"},i=b.params.shareId,l=r({});(async()=>{let e=await n.Request({url:p.getShareLoginInfo,showLoading:!1,params:{shareId:i}});if(e){if(e.data==null){u.push("/shareCheck/"+i);return}l.value=e.data}})();const U=[{label:"文件名",prop:"fileName",scopedSlots:"fileName"},{label:"修改时间",prop:"lastUpdateTime",width:200},{label:"大小",prop:"fileSize",scopedSlots:"fileSize",width:200}],h=r({}),z={extHeight:80,selectType:"checkbox"},C=async()=>{let e={pageNo:h.value.pageNo,pageSize:h.value.pageSize,shareId:i,filePid:N.value.fileId},t=await n.Request({url:p.loadFileList,params:e});t&&(h.value=t.data)},L=e=>{h.value.list.forEach(t=>{t.showOp=!1}),e.showOp=!0},V=e=>{e.showOp=!1},_=r([]),q=e=>{_.value=[],e.forEach(t=>{_.value.push(t.fileId)})},N=r({fileId:0}),j=e=>{const{curFolder:t}=e;N.value=t,C()},R=r(),x=r(),$=e=>{if(e.folderType==1){x.value.openFolder(e);return}e.shareId=i,R.value.showPreview(e,2)},B=async e=>{let t=await n.Request({url:p.createDownloadUrl+"/"+i+"/"+e});t&&(window.location.href=p.download+"/"+t.data)},g=r(),F=[],A=()=>{if(_.value.length!=0){if(!n.VueCookies.get("userInfo")){u.push("/login?redirectUrl="+b.path);return}F.values=_.value,g.value.showFolderDialog()}},E=e=>{if(!n.VueCookies.get("userInfo")){u.push("/login?redirectUrl="+b.path);return}F.values=[e.fileId],g.value.showFolderDialog()},H=async e=>{await n.Request({url:p.saveShare,params:{shareId:i,shareFileIds:F.values.join(","),myFolderId:e}})&&(C(),n.Message.success("保存成功"),g.value.close())},Q=()=>{n.Confirm("你确定要取消分享吗？",async()=>{await n.Request({url:p.cancelShare,params:{shareIds:i}})&&(n.Message.success("取消分享成功"),u.push("/"))})},G=()=>{u.push("/")};return(e,t)=>{const J=c("Avatar"),D=c("el-button"),K=c("Navigation"),T=c("icon"),W=c("Table"),X=c("FolderSelect"),Y=c("Preview"),Z=ne("loading");return a(),d("div",ce,[s("div",{class:"header"},[s("div",{class:"header-content"},[s("div",{class:"logo",onClick:G},ue)])]),s("div",he,[Object.keys(l.value).length==0?le((a(),d("div",_e,null,512)),[[Z,Object.keys(l.value).length==0]]):(a(),d(P,{key:1},[s("div",fe,[s("div",ve,[s("div",me,[f(J,{userId:l.value.userId,avatar:l.value.avatar,width:50},null,8,["userId","avatar"])]),s("div",ye,[s("div",Se,[s("span",ge,v(l.value.nickName),1),s("span",ke,"分享于 "+v(l.value.shareTime),1)]),s("div",Ie,"分享文件："+v(l.value.fileName),1)])]),s("div",we,[l.value.currentUser?(a(),m(D,{key:0,type:"primary",onClick:Q},{default:I(()=>[be,O("取消分享")]),_:1})):(a(),m(D,{key:1,type:"primary",disabled:_.value.length==0,onClick:A},{default:I(()=>[Ce,O("保存到我的网盘")]),_:1},8,["disabled"]))])]),f(K,{ref_key:"navigationRef",ref:x,onNavChange:j,shareId:M(i)},null,8,["shareId"]),s("div",Fe,[f(W,{columns:U,showPagination:!0,dataSource:h.value,fetch:C,initFetch:!1,options:z,showPageSize:!1,onRowSelected:q},{fileName:I(({index:ee,row:o})=>[s("div",{class:"file-item",onMouseenter:k=>L(o),onMouseleave:k=>V(o)},[(o.fileType==3||o.fileType==1)&&o.status!==0?(a(),m(T,{key:0,cover:o.fileCover},null,8,["cover"])):(a(),d(P,{key:1},[o.folderType==0?(a(),m(T,{key:0,fileType:o.fileType},null,8,["fileType"])):y("",!0),o.folderType==1?(a(),m(T,{key:1,fileType:0})):y("",!0)],64)),s("span",{class:"file-name",title:o.fileName},[s("span",{onClick:k=>$(o)},v(o.fileName),9,Re)],8,Ne),s("span",xe,[o.folderType==0?(a(),d("span",{key:0,class:"iconfont icon-download",onClick:k=>B(o.fileId)},"下载",8,De)):y("",!0),o.showOp&&!l.value.currentUser?(a(),d("span",{key:1,class:"iconfont icon-import",onClick:k=>E(o)},"保存到我的网盘",8,Pe)):y("",!0)])],40,Te)]),fileSize:I(({index:ee,row:o})=>[o.fileSize?(a(),d("span",Me,v(M(n).Utils.size2Str(o.fileSize)),1)):y("",!0)]),_:1},8,["dataSource"])])],64)),f(X,{ref_key:"folderSelectRef",ref:g,onFolderSelect:H},null,512),f(Y,{ref_key:"previewRef",ref:R},null,512)])])}}},ds=te(Oe,[["__scopeId","data-v-0d51ea1b"]]);export{ds as default};
