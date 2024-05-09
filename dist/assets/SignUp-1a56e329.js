import{j as t,F as x,B as h,a2 as m,C as f,r as b,al as v,J as n,A as k}from"./index-4150ac08.js";import{T as l,a as c,b as F}from"./SignupInput-625261db.js";import{I}from"./ThemeButton-b42e3378.js";import{u as U}from"./index.esm-12a87df0.js";import{t as L,s as g,a as A}from"./schema-e48c8251.js";const B=()=>t.jsxs(x,{justify:"space-between",align:"center",mx:30,w:"full",children:[t.jsx(h,{component:m,to:"/",w:80,h:80,variant:"none",children:t.jsx(I,{src:"./assets/logos/universeLogoWhite.svg",alt:"home button"})}),t.jsxs(f,{m:0,p:0,children:["Already have an account?",t.jsx(m,{to:"/signin",children:" Sign in→"})]})]}),u="회원가입",C=({setUserInput:o})=>{const[s,e]=b.useState(0),{handleSubmit:i,trigger:r,control:p,formState:{isValid:j}}=U({resolver:L(A)}),y=async S=>{try{const{email:a,name:d}=await v(S),w=`${d}님의 서브메이트 가입을 축하드립니다.`;g(!0,u,w),o(a)}catch(a){const d=a.response&&a.response.status===409?a.response.data:void 0;g(!1,u,d)}};return t.jsxs(t.Fragment,{children:[t.jsx(l,{str:"Welcome to Submate!",isLast:0}),t.jsx(l,{str:"Let's begin the adventure🚀👾",isLast:1,setAnimationCompleted:()=>{e(s+1)}}),t.jsxs("form",{onSubmit:i(y),children:[s>0&&t.jsx(c,{name:"email",control:p,step:s,trigger:r,setStep:e}),s>1&&t.jsx(c,{name:"password",control:p,step:s,trigger:r,setStep:e}),s>2&&t.jsx(c,{name:"confirmPassword",control:p,step:s,trigger:r,setStep:e}),s>3&&t.jsx(h,{type:"submit",disabled:!j,fullWidth:!0,children:"Sign Up"})]})]})},z=n.div`
  background-color: #02050d;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  z-index: -1;
`,W=k`
  0% {
    transform: scale(1, 1);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100%{
    transform: scale(1.7, 1.7) rotate(7deg);
    opacity: 0;
  }
`,E=n.div`
  background-image: radial-gradient(2.2px 2.2px at 50px 200px, #eee, rgba(0, 0, 0, 0)),
    radial-gradient(3px 3px at 40px 70px, #fff, rgba(0, 0, 0, 0)),
    radial-gradient(3px 4px at 120px 40px, #ddd, rgba(0, 0, 0, 0));
  background-repeat: repeat;
  animation: ${W} 9s infinite;
  background-position: 10% 90%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  background-size: 270px 500px;

  :nth-of-type(1) {
    background-position: 10% 90%;
    animation-delay: 0s;
  }
  :nth-of-type(2) {
    background-position: 20% 50%;
    animation-delay: 1.5s;
  }
  :nth-of-type(3) {
    background-position: 40% -80%;
    animation-delay: 3s;
  }
  :nth-of-type(4) {
    background-position: -20% -30%;
    animation-delay: 5s;
  }
  :nth-of-type(5) {
    background-position: 50% 20%;
    animation-delay: 7s;
  }
`,G=n.img`
  opacity: 0.7;
  transform: translate(-21%, -25%);
  overflow: hidden !important;
  width: 185%;
  height: 200%;
`,N=n(f)`
  border: 1px solid var(--mantine-color-dark-4);
  border-radius: 6px;
`,J=()=>{const[o,s]=b.useState(null);return t.jsxs(t.Fragment,{children:[t.jsxs(z,{children:[[...Array(5)].map((e,i)=>t.jsx(E,{},i)),t.jsx(G,{src:"https://github.githubassets.com/images/modules/site/home/hero-glow.svg",alt:"Glowing universe"})]}),t.jsx(B,{}),t.jsx(x,{mih:600,h:"80vh",m:"auto",justify:"center",direction:"column",wrap:"wrap",align:"center",children:t.jsx(N,{c:"gray.1",w:550,p:20,children:o?t.jsx(F,{email:o,setUserInput:s}):t.jsx(C,{setUserInput:s})})})]})};export{J as default};
