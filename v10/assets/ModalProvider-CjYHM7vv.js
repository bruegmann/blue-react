import{r as t,f as L,j as e}from"./index-B2fEoEY4.js";import{g as C}from"./shared-BYxliqJQ.js";function A({modalContent:c,modalTitle:E,modalIcon:M,unSetModalContent:m,onSubmit:r,defaultInput:n,type:d,inputType:y="text",switchPrimaryBtn:N=!1,acceptBtnText:l,cancelBtnText:f}){const x=t.useRef(null),[P,S]=t.useState(n||""),v=()=>{m(),r&&r(null)},h=()=>{m(),r&&r(!1)},g=s=>{s.preventDefault(),r&&r(P||!0)},u={maxWidth:"10rem"},k=()=>{const s=x.current;s.removeEventListener("shown.bs.modal",k);const a=s.querySelector(".btn-primary, .form-control");a&&a.focus()};return t.useEffect(()=>{S(n||"")},[n]),t.useEffect(()=>{const s=x.current;let a=L.getInstance(s);a?(c!==void 0?a.show():a.hide(),s.addEventListener("shown.bs.modal",k)):(a=new L(s),a.hide(),s.addEventListener("hidden.bs.modal",()=>{v()}))},[c]),e.jsx("div",{className:"modal",ref:x,tabIndex:-1,children:e.jsx("div",{className:"modal-dialog",children:e.jsx("div",{className:"modal-content",children:e.jsxs("form",{onSubmit:g,children:[e.jsxs("div",{className:"modal-header align-items-center",children:[M!==void 0&&e.jsx("div",{className:"me-2",children:M}),e.jsx("h5",{className:"modal-title",children:E||C("Message")}),e.jsx("button",{type:"button",className:"btn-close",onClick:v})]}),e.jsxs("div",{className:"modal-body",style:{whiteSpace:"pre-wrap"},children:[c,d==="ask"&&e.jsx("input",{type:y,className:"form-control mt-1",value:P,onChange:({target:s})=>S(s.value),autoFocus:!0})]}),e.jsxs("div",{className:"modal-footer",children:[e.jsx("button",{type:"submit",className:`btn ${N?"btn-outline-primary":"btn-primary"} d-block w-100`,style:u,children:d==="verify"?l||C("Yes"):l||"OK"}),(d==="ask"||d==="verify")&&(d==="verify"?e.jsx("button",{type:"button",className:`btn ${N?"btn-primary":"btn-outline-primary"} d-block w-100`,style:u,onClick:h,children:f||C("No")}):e.jsx("button",{type:"button",className:"btn btn-outline-primary d-block w-100",style:u,onClick:v,children:f||C("Cancel")}))]})]})})})})}const R=t.createContext({ask:void 0,tell:void 0,verify:void 0}),Y=({children:c,...E})=>{const[M,m]=t.useState("tell"),[r,n]=t.useState(),[d,y]=t.useState(),[N,l]=t.useState(),[f,x]=t.useState(),[P,S]=t.useState(),[v,h]=t.useState(!1),[g,u]=t.useState(),[k,s]=t.useState(),a=t.useCallback(()=>{n(void 0)},[n]),[$,I]=t.useState(),D=(p,i)=>new Promise(b=>{if(m("ask"),n(p),i){const{title:o,icon:w,inputType:j,switchPrimaryBtn:B,acceptBtnText:T,cancelBtnText:q}=i;y(o),l(w),S(j),h(B),u(T),s(q)}x(""),I(()=>o=>{b(o),n(void 0),x(void 0)})}),F=(p,i)=>new Promise(b=>{if(m("tell"),n(p),i){const{title:o,icon:w,switchPrimaryBtn:j,acceptBtnText:B,cancelBtnText:T}=i;y(o),l(w),h(j),u(B),s(T)}I(()=>o=>{b(!!o),n(void 0)})}),O=(p,i)=>new Promise(b=>{if(m("verify"),n(p),i){const{title:o,icon:w,switchPrimaryBtn:j,acceptBtnText:B,cancelBtnText:T}=i;y(o),l(w),h(j),u(B),s(T)}I(()=>o=>{b(!!o),n(void 0)})});return e.jsxs(R.Provider,{value:{ask:D,tell:F,verify:O},...E,children:[c,e.jsx(A,{modalContent:r,modalTitle:d,modalIcon:N,unSetModalContent:a,onSubmit:$,defaultInput:f,type:M,inputType:P,switchPrimaryBtn:v,acceptBtnText:g,cancelBtnText:k})]})},z=()=>{const c=t.useContext(R);if(c===void 0)throw new Error("useModal must be used within a ModalProvider");return c};export{Y as M,z as u};
