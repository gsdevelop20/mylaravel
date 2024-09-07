import{r as a,P as re,q as oe,j as o,s as ae,f as _}from"./app-b5ea4ee6.js";import{G as se}from"./GuestLayout-35feb2d2.js";import{I as T}from"./InputError-2c595a93.js";import{P as ce}from"./PrimaryButton-9bcb9ec5.js";import"./TextInput-4e6c0b0d.js";import{I as F}from"./inputtext.esm-1cb4f064.js";import{I as le,C as ie,u as ue,D as v,O as w,a as de,b as pe,m as g,c as fe,d as O,T as me}from"./button.esm-d3f95076.js";function P(){return P=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e])}return t},P.apply(this,arguments)}var L=a.memo(a.forwardRef(function(t,n){var r=le.getPTI(t);return a.createElement("svg",P({ref:n,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r),a.createElement("path",{d:"M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z",fill:"currentColor"}))}));L.displayName="CheckIcon";function y(){return y=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e])}return t},y.apply(this,arguments)}function x(t){"@babel/helpers - typeof";return x=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},x(t)}function he(t,n){if(x(t)!=="object"||t===null)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var e=r.call(t,n||"default");if(x(e)!=="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(t)}function be(t){var n=he(t,"string");return x(n)==="symbol"?n:String(n)}function ge(t,n,r){return n=be(n),n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}function ye(t){if(Array.isArray(t))return t}function xe(t,n){var r=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var e,l,m,i,f=[],d=!0,c=!1;try{if(m=(r=r.call(t)).next,n===0){if(Object(r)!==r)return;d=!1}else for(;!(d=(e=m.call(r)).done)&&(f.push(e.value),f.length!==n);d=!0);}catch(b){c=!0,l=b}finally{try{if(!d&&r.return!=null&&(i=r.return(),Object(i)!==i))return}finally{if(c)throw l}}return f}}function M(t,n){(n==null||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}function ve(t,n){if(t){if(typeof t=="string")return M(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return M(t,n)}}function je(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ke(t,n){return ye(t)||xe(t,n)||ve(t,n)||je()}var Ce={icon:"p-checkbox-icon p-c",input:function(n){var r=n.props,e=n.checked,l=n.focusedState;return O("p-checkbox-box",{"p-highlight":e,"p-disabled":r.disabled,"p-focus":l})},root:function(n){var r=n.props,e=n.checked,l=n.focusedState;return O("p-checkbox p-component",{"p-checkbox-checked":e,"p-checkbox-disabled":r.disabled,"p-checkbox-focused":l})}},we=`
.p-checkbox {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    vertical-align: bottom;
    position: relative;
}

.p-checkbox.p-checkbox-disabled {
    cursor: auto;
}

.p-checkbox-box {
    display: flex;
    justify-content: center;
    align-items: center;
}        
`,j=ie.extend({defaultProps:{__TYPE:"Checkbox",autoFocus:!1,checked:!1,className:null,disabled:!1,falseValue:!1,icon:null,id:null,inputId:null,inputRef:null,name:null,onChange:null,onClick:null,onContextMenu:null,onMouseDown:null,readOnly:!1,required:!1,style:null,tabIndex:null,tooltip:null,tooltipOptions:null,trueValue:!0,value:null,children:void 0},css:{classes:Ce,styles:we}});function A(t,n){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter(function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable})),r.push.apply(r,e)}return r}function B(t){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?A(Object(r),!0).forEach(function(e){ge(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var K=a.memo(a.forwardRef(function(t,n){var r=a.useContext(re),e=j.getProps(t,r),l=a.useState(!1),m=ke(l,2),i=m[0],f=m[1],d=j.setMetaData({props:e,state:{focused:i},context:{checked:e.checked===e.trueValue,disabled:e.disabled}}),c=d.ptm,b=d.cx,V=d.isUnstyled;ue(j.css.styles,V,{name:"checkbox",styled:!0});var k=a.useRef(null),p=a.useRef(e.inputRef),S=function(s){if(!(e.disabled||e.readOnly)&&(e.onChange||e.onClick)){var E=C(),Q=s.target instanceof HTMLDivElement||s.target instanceof HTMLSpanElement||s.target instanceof Object,ee=s.target===p.current,te=Q&&s.target.checked!==E;if(ee||te){var D=E?e.falseValue:e.trueValue,R={originalEvent:s,value:e.value,checked:D,stopPropagation:function(){s.stopPropagation()},preventDefault:function(){s.preventDefault()},target:{type:"checkbox",name:e.name,id:e.id,value:e.value,checked:D}};if(e.onClick&&e.onClick(R),s.defaultPrevented)return;e.onChange&&e.onChange(R)}v.focus(p.current),s.preventDefault()}},H=function(){f(!0)},U=function(){f(!1)},q=function(s){(s.code==="Space"||s.key===" ")&&S(s)},C=function(){return e.checked===e.trueValue};a.useImperativeHandle(n,function(){return{props:e,focus:function(){return v.focus(p.current)},getElement:function(){return k.current},getInput:function(){return p.current}}}),a.useEffect(function(){w.combinedRefs(p,e.inputRef)},[p,e.inputRef]),de(function(){p.current.checked=C()},[e.checked,e.trueValue]),pe(function(){e.autoFocus&&v.focus(p.current,e.autoFocus)});var h=C(),$=w.isNotEmpty(e.tooltip),I=j.getOtherProps(e),W=w.reduceKeys(I,v.ARIA_PROPS),N=g({className:b("icon")},c("icon")),G=h?e.icon||a.createElement(L,N):null,J=fe.getJSXIcon(G,B({},N),{props:e,checked:h}),X=g({id:e.id,className:O(e.className,b("root",{checked:h,focusedState:i})),style:e.style,onClick:function(s){return S(s)},onContextMenu:e.onContextMenu,onMouseDown:e.onMouseDown},I,c("root")),Y=g({className:"p-hidden-accessible"},c("hiddenInputWrapper")),Z=g(B({id:e.inputId,type:"checkbox",name:e.name,tabIndex:e.tabIndex,defaultChecked:h,onFocus:function(s){return H()},onBlur:function(s){return U()},onKeyDown:function(s){return q(s)},disabled:e.disabled,readOnly:e.readOnly,required:e.required},W),c("hiddenInput")),z=g({className:b("input",{checked:h,focusedState:i}),"data-p-highlight":h,"data-p-disabled":e.disabled,"data-p-focus":i},c("input"));return a.createElement(a.Fragment,null,a.createElement("div",y({ref:k},X),a.createElement("div",Y,a.createElement("input",y({ref:p},Z))),a.createElement("div",z,J)),$&&a.createElement(me,y({target:k,content:e.tooltip},e.tooltipOptions,{pt:c("tooltip")})))}));K.displayName="Checkbox";function Re({status:t,canResetPassword:n}){const{data:r,setData:e,post:l,processing:m,errors:i,reset:f}=oe({email:"",password:"",remember:!1});a.useEffect(()=>()=>{f("password")},[]);const d=c=>{c.preventDefault(),l(route("login"))};return o.jsxs(se,{children:[o.jsx(ae,{title:"Log in"}),t&&o.jsx("div",{className:"mb-4 font-medium text-sm text-green-600",children:t}),o.jsxs("div",{className:"flex align-items-center justify-content-center flex-column",children:[o.jsx("img",{src:"/images/logo/-dark.svg",alt:"hyper",height:50,className:"mb-3"}),o.jsxs("div",{className:"surface-card p-6 sm:p-4 shadow-2 border-round w-full lg:w-4",children:[o.jsxs("div",{className:"text-center mb-5",children:[o.jsx("div",{className:"text-900 text-3xl font-medium mb-3",children:"Welcome Back"}),o.jsx("span",{className:"text-600 font-medium line-height-3",children:"Don't have an account?"}),o.jsx(_,{href:route("register"),className:"font-medium no-underline ml-2 text-blue-500 cursor-pointer",children:"Create today!"})]}),o.jsx("form",{onSubmit:d,children:o.jsxs("div",{children:[o.jsxs("div",{className:"mb-3",children:[o.jsx("label",{htmlFor:"email",className:"block text-900 font-medium mb-2",children:"Email"}),o.jsx(F,{id:"email",type:"text",placeholder:"Email address",className:"w-full",value:r.email,onChange:c=>e("email",c.target.value)}),o.jsx(T,{message:i.email,className:""})]}),o.jsxs("div",{className:"mb-3",children:[o.jsx("label",{htmlFor:"password",className:"block text-900 font-medium mb-2",children:"Password"}),o.jsx(F,{id:"password",type:"password",placeholder:"Password",className:"w-full",value:r.password,onChange:c=>e("password",c.target.value)}),o.jsx(T,{message:i.password,className:""})]}),o.jsxs("div",{className:"flex align-items-center justify-content-between mb-6",children:[o.jsxs("div",{className:"flex align-items-center",children:[o.jsx(K,{inputId:"rememberme-login",onChange:c=>e("remember",c.target.checked),checked:r.remember,className:"mr-2"}),o.jsx("label",{htmlFor:"rememberme-login",children:"Remember me"})]}),n&&o.jsx(_,{href:route("password.request"),className:"font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer",children:"Forgot your password?"})]}),o.jsx(ce,{label:"Sign In",className:"w-full",disabled:m})]})})]})]})]})}export{Re as default};
