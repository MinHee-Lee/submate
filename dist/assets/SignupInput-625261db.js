import{f as me,k as J,y as B,am as K,an as pe,r as v,n as U,h as G,o as Z,J as h,ao as ge,a as xe,u as ye,j as s,F as H,T as ve,B as j,ap as he,C as Q,a2 as T,A as Y}from"./index-4150ac08.js";import{u as we,a as be}from"./index.esm-12a87df0.js";import{P as _e,t as Se,s as ee,b as je,I as Oe}from"./schema-e48c8251.js";import{E as $e,T as Ce,n as te,k as Pe,I as Ie,l as Le}from"./ThemeButton-b42e3378.js";const[Ee,Xe]=me("Grid component was not found in tree");var Ne=Object.defineProperty,M=Object.getOwnPropertySymbols,ke=Object.prototype.hasOwnProperty,Ge=Object.prototype.propertyIsEnumerable,W=(e,t,r)=>t in e?Ne(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Be=(e,t)=>{for(var r in t||(t={}))ke.call(t,r)&&W(e,r,t[r]);if(M)for(var r of M(t))Ge.call(t,r)&&W(e,r,t[r]);return e};const F=(e,t)=>e==="content"?"auto":e==="auto"?"0rem":e?`${100/(t/e)}%`:void 0,re=(e,t,r)=>r||e==="auto"||e==="content"?"unset":F(e,t),ne=(e,t)=>{if(e)return e==="auto"||t?1:0},se=(e,t)=>e===0?0:e?`${100/(t/e)}%`:void 0,oe=(e,t)=>typeof e<"u"?`calc(${B({size:e,sizes:t.spacing})} / 2)`:void 0;function Fe({sizes:e,offsets:t,orders:r,theme:n,columns:o,gutters:c,grow:l}){return K.reduce((i,a)=>(i[`@media (min-width: ${pe(n.breakpoints[a])})`]={order:r[a],flexBasis:F(e[a],o),padding:oe(c[a],n),flexShrink:0,width:e[a]==="content"?"auto":void 0,maxWidth:re(e[a],o,l),marginLeft:se(t[a],o),flexGrow:ne(e[a],l)},i),{})}var Te=J((e,{gutter:t,gutterXs:r,gutterSm:n,gutterMd:o,gutterLg:c,gutterXl:l,grow:i,offset:a,offsetXs:d,offsetSm:u,offsetMd:g,offsetLg:x,offsetXl:y,columns:p,span:f,xs:w,sm:b,md:_,lg:S,xl:P,order:I,orderXs:L,orderSm:E,orderMd:X,orderLg:N,orderXl:m})=>({col:Be({boxSizing:"border-box",flexGrow:ne(f,i),order:I,padding:oe(t,e),marginLeft:se(a,p),flexBasis:F(f,p),flexShrink:0,width:f==="content"?"auto":void 0,maxWidth:re(f,p,i)},Fe({sizes:{xs:w,sm:b,md:_,lg:S,xl:P},offsets:{xs:d,sm:u,md:g,lg:x,xl:y},orders:{xs:L,sm:E,md:X,lg:N,xl:m},gutters:{xs:r,sm:n,md:o,lg:c,xl:l},theme:e,columns:p,grow:i}))}));const Me=Te;var We=Object.defineProperty,O=Object.getOwnPropertySymbols,ae=Object.prototype.hasOwnProperty,ie=Object.prototype.propertyIsEnumerable,A=(e,t,r)=>t in e?We(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Ae=(e,t)=>{for(var r in t||(t={}))ae.call(t,r)&&A(e,r,t[r]);if(O)for(var r of O(t))ie.call(t,r)&&A(e,r,t[r]);return e},Re=(e,t)=>{var r={};for(var n in e)ae.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&O)for(var n of O(e))t.indexOf(n)<0&&ie.call(e,n)&&(r[n]=e[n]);return r};const Ve={};function De(e){return e==="auto"||e==="content"?!0:typeof e=="number"&&e>0&&e%1===0}const le=v.forwardRef((e,t)=>{const r=U("GridCol",Ve,e),{children:n,span:o,offset:c,offsetXs:l,offsetSm:i,offsetMd:a,offsetLg:d,offsetXl:u,xs:g,sm:x,md:y,lg:p,xl:f,order:w,orderXs:b,orderSm:_,orderMd:S,orderLg:P,orderXl:I,className:L,unstyled:E,variant:X}=r,N=Re(r,["children","span","offset","offsetXs","offsetSm","offsetMd","offsetLg","offsetXl","xs","sm","md","lg","xl","order","orderXs","orderSm","orderMd","orderLg","orderXl","className","unstyled","variant"]),m=Xe(),k=o||m.columns,{classes:ue,cx:fe}=Me({gutter:m.gutter,gutterXs:m.gutterXs,gutterSm:m.gutterSm,gutterMd:m.gutterMd,gutterLg:m.gutterLg,gutterXl:m.gutterXl,offset:c,offsetXs:l,offsetSm:i,offsetMd:a,offsetLg:d,offsetXl:u,xs:g,sm:x,md:y,lg:p,xl:f,order:w,orderXs:b,orderSm:_,orderMd:S,orderLg:P,orderXl:I,grow:m.grow,columns:m.columns,span:k},{unstyled:E,name:"Grid",variant:X});return!De(k)||k>m.columns?null:G.createElement(Z,Ae({className:fe(ue.col,L),ref:t},N),n)});le.displayName="@mantine/core/Col";var qe=Object.defineProperty,R=Object.getOwnPropertySymbols,ze=Object.prototype.hasOwnProperty,Je=Object.prototype.propertyIsEnumerable,V=(e,t,r)=>t in e?qe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Ke=(e,t)=>{for(var r in t||(t={}))ze.call(t,r)&&V(e,r,t[r]);if(R)for(var r of R(t))Je.call(t,r)&&V(e,r,t[r]);return e};function Ue(e,t){return K.reduce((r,n)=>(typeof e[n]<"u"&&(r[`@media (min-width: ${t.breakpoints[n]})`]={margin:`calc(-${B({size:e[n],sizes:t.spacing})} / 2)`}),r),{})}var Ze=J((e,{justify:t,align:r,gutter:n,gutterXs:o,gutterSm:c,gutterMd:l,gutterLg:i,gutterXl:a})=>({root:Ke({margin:`calc(-${B({size:n,sizes:e.spacing})} / 2)`,display:"flex",flexWrap:"wrap",justifyContent:t,alignItems:r},Ue({xs:o,sm:c,md:l,lg:i,xl:a},e))}));const He=Ze;var Qe=Object.defineProperty,$=Object.getOwnPropertySymbols,ce=Object.prototype.hasOwnProperty,de=Object.prototype.propertyIsEnumerable,D=(e,t,r)=>t in e?Qe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Ye=(e,t)=>{for(var r in t||(t={}))ce.call(t,r)&&D(e,r,t[r]);if($)for(var r of $(t))de.call(t,r)&&D(e,r,t[r]);return e},et=(e,t)=>{var r={};for(var n in e)ce.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&$)for(var n of $(e))t.indexOf(n)<0&&de.call(e,n)&&(r[n]=e[n]);return r};const tt={gutter:"md",justify:"flex-start",align:"stretch",columns:12},C=v.forwardRef((e,t)=>{const r=U("Grid",tt,e),{gutter:n,gutterXs:o,gutterSm:c,gutterMd:l,gutterLg:i,gutterXl:a,children:d,grow:u,justify:g,align:x,columns:y,className:p,unstyled:f,variant:w}=r,b=et(r,["gutter","gutterXs","gutterSm","gutterMd","gutterLg","gutterXl","children","grow","justify","align","columns","className","unstyled","variant"]),{classes:_,cx:S}=He({gutter:n,justify:g,align:x,gutterXs:o,gutterSm:c,gutterMd:l,gutterLg:i,gutterXl:a},{unstyled:f,name:"Grid",variant:w});return G.createElement(Ee,{value:{gutter:n,gutterXs:o,gutterSm:c,gutterMd:l,gutterLg:i,gutterXl:a,grow:u,columns:y}},G.createElement(Z,Ye({className:S(_.root,p),ref:t},b),d))});C.Col=le;C.displayName="@mantine/core/Grid";const rt=h.form`
  border: 1px solid ${({theme:e})=>e.colorScheme==="dark"?e.colors.gray[7]:e.colors.gray[2]};
  border-radius: 0.375rem;
`,q=h($e.Wrapper)`
  > label {
    font-weight: 300;
  }
`,yt=()=>{var l,i;const e=ge(),t=xe(ye),{register:r,handleSubmit:n,formState:{errors:o}}=we({resolver:Se(je)}),c=async a=>{try{const d=await he(a);t(d),e("/")}catch(d){const u=d.response&&d.response.status===401?d.response.data:void 0;ee(!1,"로그인",u)}};return s.jsxs(s.Fragment,{children:[s.jsx(Ce,{fz:24,fw:300,mb:20,align:"center",children:"Sign in to Submate"}),s.jsx(rt,{action:"/",onSubmit:n(c),method:"post",children:s.jsxs(H,{p:25,justify:"space-between",direction:"column",gap:20,children:[s.jsx(q,{label:"Email address",children:s.jsx(te,{...r("email"),error:(l=o==null?void 0:o.email)==null?void 0:l.message,autoComplete:"off"})}),s.jsxs(q,{label:"Password",pos:"relative",children:[s.jsx(ve,{span:!0,fz:"xs",color:"blue.6",pos:"absolute",right:0,top:5,justify:"center",underline:!0,align:"right",children:"Forgot password?"}),s.jsx(_e,{...r("password"),error:(i=o==null?void 0:o.password)==null?void 0:i.message})]}),s.jsx(j,{type:"submit",fw:300,children:"Sign in"})]})})]})},nt=h(C.Col)`
  text-align: center;
  align-items: center;
  justify-content: center;
  min-height: 7.5rem;
`,st=[{name:"appletvplus",id:350},{name:"disneyplus",id:337},{name:"netflix",id:8},{name:"primevideo",id:119},{name:"watcha",id:97},{name:"wavve",id:356},{name:"universeLogoBlack"},{name:"universeLogoBlack"},{name:"universeLogoBlack"}],vt=({email:e,setUserInput:t})=>{const[r,n]=v.useState(!1),[o,c]=v.useState([]),l=async()=>{try{Pe({email:e,newList:o}),localStorage.removeItem("user"),t(null)}catch{ee(!1,"구독서비스 선택")}};return s.jsxs(s.Fragment,{children:[s.jsx(z,{str:"Congratulation!🥳🎉",isLast:0}),s.jsx(z,{str:"What OTT Services are you subscribing to?",isLast:1,setAnimationCompleted:()=>{n(!0)}}),r&&s.jsxs(Q,{children:[s.jsx(C,{columns:3,m:25,justify:"center",children:st.map((i,a)=>s.jsx(nt,{span:1,display:"flex",children:s.jsx(at,{logo:i,idx:a,subscribedOtt:o,setSubscribedOtt:c})},a))}),s.jsxs(H,{justify:"flex-end",gap:5,children:[s.jsx(j,{component:T,w:90,to:"/signin",c:"white",fw:300,variant:"outline",onClick:l,children:"Skip"}),s.jsx(j,{component:T,w:90,to:"/signin",c:"white",fw:300,variant:"outline",onClick:l,children:"Submit"})]})]})]})},ot=h(j)`
  box-shadow: ${({selected:e})=>e&&"0px 0px 15px 10px rgba(79, 74, 216, 0.5)"};
  border-radius: 50%;
  padding: 0;
  height: 4.375rem;
`,at=({logo:{id:e,name:t},idx:r,subscribedOtt:n,setSubscribedOtt:o})=>{const[c,l]=v.useState(!1),i=()=>{const d=n.filter(u=>u.id!==e);o(d),l(!c)},a=()=>{const d=[...n,{id:e,price:"basic"}];o(d),l(!c)};return s.jsx(ot,{onClick:c?i:a,selected:c,variant:"none",type:"button",disabled:r>5,children:s.jsx(Ie,{width:70,id:e,src:`./assets/badges/${t}.svg`,alt:"button"})})},it=Y`
  from { width: 0 }
  to { width: 100% }
`,lt=Y`
 from {
    border-right-color: rgba(17, 17, 17, 0.9);
  }
  to {
    border-right-color: rgba(255, 255, 255, 0.8);
  }
`,ct=h.div`
  font-family: consolas;
  overflow: hidden;
  border-right: 2px solid none;
  white-space: nowrap;
  font-size: ${({fontSize:e})=>e==="small"?"1rem;":"1.2rem;"};
  width: 0;
  animation: ${it} 1.5s steps(20, end) forwards,
    ${lt} 900ms steps(20) ${({last:e})=>e&&"infinite;"};
  animation-delay: ${({last:e})=>e&&`calc(${e} * 1.5s);`};
`,z=({str:e,isLast:t,fontSize:r,setAnimationCompleted:n})=>s.jsx(ct,{last:t,fontSize:r,onAnimationEnd:n,children:e}),dt=h(te)`
  width: 100%;
  .mantine-TextInput-label {
    font-weight: 300;
    color: var(--mantine-color-cyan-4);
  }
`,ut=h(j)`
  font-weight: 300;
  align-self: flex-end;
`,ft=e=>e.toLowerCase().includes("password"),ht=({name:e,control:t,trigger:r,step:n,setStep:o})=>{const[c,l]=v.useState(!1),{field:{onChange:i},fieldState:{invalid:a,isDirty:d,error:u}}=be({name:e,control:t,defaultValue:{}}),g=v.useCallback(()=>{Le.debounce(()=>{r(e),e==="password"&&r("confirmPassword")},100)()},[e,r]),x=f=>{i(f),g()},y=f=>{f.keyCode===13&&f.preventDefault()},p=()=>{o(n+1),l(!0)};return s.jsx(s.Fragment,{children:s.jsxs(Q,{display:"flex",my:20,p:0,children:[s.jsx(dt,{onChange:x,onKeyDown:y,label:`Enter your ${e}`,autoComplete:"off",withAsterisk:!0,error:(u==null?void 0:u.message)!=="Required"&&(u==null?void 0:u.message),required:!1,type:ft(e)?"password":"text",icon:d&&a&&s.jsx(Oe,{size:16,strokeWidth:2})}),d&&!a&&s.jsx(ut,{type:"button",onClick:p,disabled:c,variant:"outline",color:"gray.5",children:"Continue"})]})})};export{yt as S,z as T,ht as a,vt as b};
