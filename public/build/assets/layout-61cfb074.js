import{j as a,r as l,c as w,a as ae,L as W,P as Z,D as A,O as R,Z as te,b as q,l as Ue,I as ze,R as Ze}from"./app-c8349e8e.js";import{R as ie,C as se,u as oe,a as ce,c as Q,T as xe,e as Ge,f as Je,E as Xe,i as le,b as ne,d as je,P as Ye,B as fe}from"./button.esm-0586fb81.js";import{d as qe,C as be,c as We}from"./index.esm-2df9f979.js";const Qe=()=>a.jsx("div",{className:"layout-footer"}),ke=l.createContext({}),et=({children:n})=>{const[e,t]=l.useState(""),i={activeMenu:e,setActiveMenu:t};return a.jsx(ke.Provider,{value:i,children:n})},Se=n=>{const e=route(route().current()),t="",{activeMenu:i,setActiveMenu:r}=l.useContext(ke),s=n.item,u=n.parentKey?n.parentKey+"-"+n.index:String(n.index),f=s.to&&e===s.to,b=i===u||i.startsWith(u+"-"),P=g=>{s.to&&s.to===g&&r(u)};l.useEffect(()=>{P(e)},[e,t]);const x=g=>{if(s.disabled){g.preventDefault();return}s.command&&s.command({originalEvent:g,item:s}),s.items?r(b?n.parentKey:u):r(u)},j=s.items&&s.visible!==!1&&a.jsx(qe,{timeout:{enter:1e3,exit:450},classNames:"layout-submenu",in:n.root?!0:b,children:a.jsx("ul",{children:s.items.map((g,c)=>a.jsx(Se,{item:g,index:c,className:g.badgeClass,parentKey:u},g.label))})},s.label);return a.jsxs("li",{className:w({"layout-root-menuitem":n.root,"active-menuitem":b}),children:[n.root&&s.visible!==!1&&a.jsx("div",{className:"layout-menuitem-root-text",children:s.label}),(!s.to||s.items)&&s.visible!==!1?a.jsxs("a",{href:s.url,onClick:g=>x(g),className:w(s.class,"p-ripple"),target:s.target,tabIndex:0,children:[a.jsx("i",{className:w("layout-menuitem-icon",s.icon)}),a.jsx("span",{className:"layout-menuitem-text",children:s.label}),s.items&&a.jsx("i",{className:"pi pi-fw pi-angle-down layout-submenu-toggler"}),a.jsx(ie,{})]}):null,s.to&&!s.items&&s.visible!==!1?a.jsxs(ae,{href:s.to,replace:s.replaceUrl,target:s.target,onClick:g=>x(g),className:w(s.class,"p-ripple",{"active-route":f}),tabIndex:0,children:[a.jsx("i",{className:w("layout-menuitem-icon",s.icon)}),a.jsx("span",{className:"layout-menuitem-text",children:s.label}),s.items&&a.jsx("i",{className:"pi pi-fw pi-angle-down layout-submenu-toggler"}),a.jsx(ie,{})]}):null,j]})},tt=()=>{l.useContext(W);const n=[{label:"Home",items:[{label:"Dashboard",icon:"pi pi-fw pi-home",to:route("dashboard")},{label:"Button",icon:"pi pi-fw pi-id-card",to:route("button")},{label:"Categorias",icon:"pi pi-fw pi-id-card",to:route("categories.index")}]}];return a.jsx(et,{children:a.jsx("ul",{className:"layout-menu",children:n.map((e,t)=>e!=null&&e.seperator?a.jsx("li",{className:"menu-separator"}):a.jsx(Se,{item:e,root:!0,index:t},e.label))})})},nt=()=>a.jsx(tt,{}),Ce=l.forwardRef((n,e)=>{const{layoutConfig:t,layoutState:i,onMenuToggle:r,showProfileSidebar:s}=l.useContext(W),u=l.useRef(null),f=l.useRef(null),b=l.useRef(null);return l.useImperativeHandle(e,()=>({menubutton:u.current,topbarmenu:f.current,topbarmenubutton:b.current})),a.jsxs("div",{className:"layout-topbar",children:[a.jsx("button",{ref:u,type:"button",className:"p-link layout-menu-button layout-topbar-button",onClick:r,children:a.jsx("i",{className:"pi pi-bars"})}),a.jsx("button",{ref:b,type:"button",className:"p-link layout-topbar-menu-button layout-topbar-button",onClick:s,children:a.jsx("i",{className:"pi pi-user"})}),a.jsxs("div",{ref:f,className:w("layout-topbar-menu",{"layout-topbar-menu-mobile-active":i.profileSidebarVisible}),children:[a.jsxs(ae,{href:route("profile.edit"),className:"p-link layout-topbar-button",children:[a.jsx("i",{className:"pi pi-user"}),a.jsx("span",{children:"Profile"})]}),a.jsxs(ae,{href:route("logout"),method:"post",as:"button",className:"p-link layout-topbar-button",children:[a.jsx("i",{className:"pi pi-lock"}),a.jsx("span",{children:"Logout"})]})]})]})});Ce.displayName="AppTopbar";function V(){return V=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},V.apply(this,arguments)}function K(n){"@babel/helpers - typeof";return K=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},K(n)}function rt(n,e){if(K(n)!=="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e||"default");if(K(i)!=="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function at(n){var e=rt(n,"string");return K(e)==="symbol"?e:String(e)}function it(n,e,t){return e=at(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var lt={root:function(e){var t=e.props,i=e.checked;return w("p-inputswitch p-component",{"p-highlight":i,"p-disabled":t.disabled,"p-invalid":t.invalid})},input:"p-inputswitch-input",slider:"p-inputswitch-slider"},J=se.extend({defaultProps:{__TYPE:"InputSwitch",autoFocus:!1,checked:!1,className:null,disabled:!1,falseValue:!1,id:null,inputId:null,inputRef:null,invalid:!1,name:null,onBlur:null,onChange:null,onFocus:null,style:null,tabIndex:null,tooltip:null,tooltipOptions:null,trueValue:!0,children:void 0},css:{classes:lt}});function ge(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function st(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?ge(Object(t),!0).forEach(function(i){it(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):ge(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}var Pe=l.memo(l.forwardRef(function(n,e){var t=oe(),i=l.useContext(Z),r=J.getProps(n,i),s=J.setMetaData({props:r}),u=s.ptm,f=s.cx,b=s.isUnstyled;ce(J.css.styles,b,{name:"inputswitch"});var P=l.useRef(null),x=l.useRef(r.inputRef),j=r.checked===r.trueValue,g=function(d){if(r.onChange){var S=j?r.falseValue:r.trueValue;r.onChange({originalEvent:d,value:S,stopPropagation:function(){d==null||d.stopPropagation()},preventDefault:function(){d==null||d.preventDefault()},target:{name:r.name,id:r.id,value:S}})}},c=function(d){var S;r==null||(S=r.onFocus)===null||S===void 0||S.call(r,d)},O=function(d){var S;r==null||(S=r.onBlur)===null||S===void 0||S.call(r,d)};l.useImperativeHandle(e,function(){return{props:r,focus:function(){return A.focus(x.current)},getElement:function(){return P.current},getInput:function(){return x.current}}}),l.useEffect(function(){R.combinedRefs(x,r.inputRef)},[x,r.inputRef]),Q(function(){r.autoFocus&&A.focus(x.current,r.autoFocus)});var E=R.isNotEmpty(r.tooltip),I=J.getOtherProps(r),o=R.reduceKeys(I,A.ARIA_PROPS),v=t({className:w(r.className,f("root",{checked:j})),style:r.style,role:"checkbox","aria-checked":j,"data-p-highlight":j,"data-p-disabled":r.disabled},I,u("root")),k=t(st({type:"checkbox",id:r.inputId,name:r.name,checked:j,onChange:g,onFocus:c,onBlur:O,disabled:r.disabled,role:"switch",tabIndex:r.tabIndex,"aria-checked":j,className:f("input")},o),u("input")),y=t({className:f("slider")},u("slider"));return l.createElement(l.Fragment,null,l.createElement("div",V({id:r.id,ref:P},v),l.createElement("input",V({ref:x},k)),l.createElement("span",y)),E&&l.createElement(xe,V({target:P,content:r.tooltip,pt:u("tooltip")},r.tooltipOptions)))}));Pe.displayName="InputSwitch";function H(){return H=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},H.apply(this,arguments)}function U(n){"@babel/helpers - typeof";return U=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},U(n)}function ot(n,e){if(U(n)!=="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e||"default");if(U(i)!=="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function ct(n){var e=ot(n,"string");return U(e)==="symbol"?e:String(e)}function ut(n,e,t){return e=ct(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var dt={root:function(e){var t=e.props,i=e.context;return w("p-radiobutton p-component",{"p-highlight":t.checked,"p-disabled":t.disabled,"p-invalid":t.invalid,"p-variant-filled":t.variant?t.variant==="filled":i&&i.inputStyle==="filled"})},box:"p-radiobutton-box",input:"p-radiobutton-input",icon:"p-radiobutton-icon"},X=se.extend({defaultProps:{__TYPE:"RadioButton",autoFocus:!1,checked:!1,className:null,disabled:!1,id:null,inputId:null,inputRef:null,invalid:!1,variant:null,name:null,onChange:null,onClick:null,required:!1,style:null,tabIndex:null,tooltip:null,tooltipOptions:null,value:null,children:void 0},css:{classes:dt}});function he(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function pt(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?he(Object(t),!0).forEach(function(i){ut(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):he(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}var $=l.memo(l.forwardRef(function(n,e){var t=oe(),i=l.useContext(Z),r=X.getProps(n,i),s=l.useRef(null),u=l.useRef(r.inputRef),f=X.setMetaData({props:r}),b=f.ptm,P=f.cx,x=f.isUnstyled;ce(X.css.styles,x,{name:"radiobutton"});var j=function(p){g(p)},g=function(p){if(!(r.disabled||r.readonly)&&r.onChange){var d=r.checked,S=p.target instanceof HTMLDivElement,N=p.target===u.current,D=N&&p.target.checked!==d,M=S&&(A.hasClass(s.current,"p-radiobutton-checked")===d?!d:!1),_=!d,ee={originalEvent:p,value:r.value,checked:_,stopPropagation:function(){p==null||p.stopPropagation()},preventDefault:function(){p==null||p.preventDefault()},target:{type:"radio",name:r.name,id:r.id,value:r.value,checked:_}};if(D||M){var T;if(r==null||(T=r.onChange)===null||T===void 0||T.call(r,ee),p.defaultPrevented)return;M&&(u.current.checked=_)}A.focus(u.current)}},c=function(p){var d;r==null||(d=r.onFocus)===null||d===void 0||d.call(r,p)},O=function(p){var d;r==null||(d=r.onBlur)===null||d===void 0||d.call(r,p)};l.useImperativeHandle(e,function(){return{props:r,select:j,focus:function(){return A.focus(u.current)},getElement:function(){return s.current},getInput:function(){return u.current}}}),l.useEffect(function(){u.current&&(u.current.checked=r.checked)},[r.checked]),l.useEffect(function(){R.combinedRefs(u,r.inputRef)},[u,r.inputRef]),Q(function(){r.autoFocus&&A.focus(u.current,r.autoFocus)});var E=R.isNotEmpty(r.tooltip),I=X.getOtherProps(r),o=t({id:r.id,className:w(r.className,P("root",{context:i})),style:r.style,"data-p-checked":r.checked},I,b("root"));delete o.input,delete o.box,delete o.icon;var v=function(){var p=R.reduceKeys(I,A.ARIA_PROPS),d=t(pt({id:r.inputId,type:"radio",name:r.name,defaultChecked:r.checked,onFocus:c,onBlur:O,onChange:g,disabled:r.disabled,readOnly:r.readonly,required:r.required,tabIndex:r.tabIndex,className:P("input")},p),n.input,b("input"));return l.createElement("input",H({ref:u},d))},k=function(){var p=t({className:P("box")},n.box,b("box")),d=t({className:P("icon")},n.icon,b("icon"));return l.createElement("div",p,l.createElement("div",d))};return l.createElement(l.Fragment,null,l.createElement("div",H({ref:s},o),v(),k()),E&&l.createElement(xe,H({target:s,content:r.tooltip,pt:b("tooltip")},r.tooltipOptions)))}));$.displayName="RadioButton";function L(){return L=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},L.apply(this,arguments)}function z(n){"@babel/helpers - typeof";return z=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},z(n)}function mt(n,e){if(z(n)!=="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e||"default");if(z(i)!=="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function ft(n){var e=mt(n,"string");return z(e)==="symbol"?e:String(e)}function bt(n,e,t){return e=ft(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function gt(n){if(Array.isArray(n))return n}function ht(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i,r,s,u,f=[],b=!0,P=!1;try{if(s=(t=t.call(n)).next,e===0){if(Object(t)!==t)return;b=!1}else for(;!(b=(i=s.call(t)).done)&&(f.push(i.value),f.length!==e);b=!0);}catch(x){P=!0,r=x}finally{try{if(!b&&t.return!=null&&(u=t.return(),Object(u)!==u))return}finally{if(P)throw r}}return f}}function ve(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function vt(n,e){if(n){if(typeof n=="string")return ve(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ve(n,e)}}function yt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function re(n,e){return gt(n)||ht(n,e)||vt(n,e)||yt()}var xt={closeButton:"p-sidebar-close p-sidebar-icon p-link",closeIcon:"p-sidebar-close-icon",mask:function(e){var t=e.props,i=e.maskVisibleState,r=["left","right","top","bottom"],s=r.find(function(u){return u===t.position});return w("p-sidebar-mask",s&&!t.fullScreen?"p-sidebar-".concat(s):"",{"p-component-overlay p-component-overlay-enter":t.modal,"p-sidebar-mask-scrollblocker":t.blockScroll,"p-sidebar-visible":i,"p-sidebar-full":t.fullScreen},t.maskClassName)},header:function(e){var t=e.props;return w("p-sidebar-header",{"p-sidebar-custom-header":t.header})},content:"p-sidebar-content",icons:"p-sidebar-icons",root:function(e){e.props;var t=e.context;return w("p-sidebar p-component",{"p-input-filled":t&&t.inputStyle==="filled"||q.inputStyle==="filled","p-ripple-disabled":t&&t.ripple===!1||q.ripple===!1})},transition:"p-sidebar"},jt=`
@layer primereact {
    .p-sidebar-mask {
        display: none;
        justify-content: center;
        align-items: center;
        pointer-events: none;
        background-color: transparent;
        transition-property: background-color;
    }
    
    .p-sidebar-visible {
        display: flex;
    }
    
    .p-sidebar-mask.p-component-overlay {
        pointer-events: auto;
    }
    
    .p-sidebar {
        display: flex;
        flex-direction: column;
        pointer-events: auto;
        transform: translate3d(0px, 0px, 0px);
        position: relative;
    }
    
    .p-sidebar-content {
        overflow-y: auto;
        flex-grow: 1;
    }
    
    .p-sidebar-header {
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
    
    .p-sidebar-custom-header {
        justify-content: space-between;
    }
    
    .p-sidebar-icons {
        display: flex;
        align-items: center;
        flex-shrink: 0;
    }
    
    .p-sidebar-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
    }
    
    .p-sidebar-full .p-sidebar {
        transition: none;
        transform: none;
        width: 100vw;
        height: 100vh;
        max-height: 100%;
        top: 0px;
        left: 0px;
    }
    
    /* Animation */
    /* Top, Bottom, Left and Right */
    .p-sidebar-top .p-sidebar-enter,
    .p-sidebar-top .p-sidebar-exit-active {
        transform: translate3d(0px, -100%, 0px);
    }
    
    .p-sidebar-bottom .p-sidebar-enter,
    .p-sidebar-bottom .p-sidebar-exit-active {
        transform: translate3d(0px, 100%, 0px);
    }
    
    .p-sidebar-left .p-sidebar-enter,
    .p-sidebar-left .p-sidebar-exit-active {
        transform: translate3d(-100%, 0px, 0px);
    }
    
    .p-sidebar-right .p-sidebar-enter,
    .p-sidebar-right .p-sidebar-exit-active {
        transform: translate3d(100%, 0px, 0px);
    }
    
    .p-sidebar-top .p-sidebar-enter-active,
    .p-sidebar-bottom .p-sidebar-enter-active,
    .p-sidebar-left .p-sidebar-enter-active,
    .p-sidebar-right .p-sidebar-enter-active {
        transform: translate3d(0px, 0px, 0px);
        transition: all 0.3s;
    }
    
    .p-sidebar-top .p-sidebar-enter-done,
    .p-sidebar-bottom .p-sidebar-enter-done,
    .p-sidebar-left .p-sidebar-enter-done,
    .p-sidebar-right .p-sidebar-enter-done {
        transform: none;
    }
    
    .p-sidebar-top .p-sidebar-exit-active,
    .p-sidebar-bottom .p-sidebar-exit-active,
    .p-sidebar-left .p-sidebar-exit-active,
    .p-sidebar-right .p-sidebar-exit-active {
        transition: all 0.3s;
    }
    
    /* Full */
    .p-sidebar-full .p-sidebar-enter {
        opacity: 0;
        transform: scale(0.5);
    }
    
    .p-sidebar-full .p-sidebar-enter-active {
        opacity: 1;
        transform: scale(1);
        transition: all 0.15s cubic-bezier(0, 0, 0.2, 1);
    }
    
    .p-sidebar-full .p-sidebar-enter-done {
        transform: none;
    }
    
    .p-sidebar-full .p-sidebar-exit-active {
        opacity: 0;
        transform: scale(0.5);
        transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    /* Size */
    .p-sidebar-left .p-sidebar {
        width: 20rem;
        height: 100%;
    }
    
    .p-sidebar-right .p-sidebar {
        width: 20rem;
        height: 100%;
    }
    
    .p-sidebar-top .p-sidebar {
        height: 10rem;
        width: 100%;
    }
    
    .p-sidebar-bottom .p-sidebar {
        height: 10rem;
        width: 100%;
    }
    
    .p-sidebar-left .p-sidebar-sm,
    .p-sidebar-right .p-sidebar-sm {
        width: 20rem;
    }
    
    .p-sidebar-left .p-sidebar-md,
    .p-sidebar-right .p-sidebar-md {
        width: 40rem;
    }
    
    .p-sidebar-left .p-sidebar-lg,
    .p-sidebar-right .p-sidebar-lg {
        width: 60rem;
    }
    
    .p-sidebar-top .p-sidebar-sm,
    .p-sidebar-bottom .p-sidebar-sm {
        height: 10rem;
    }
    
    .p-sidebar-top .p-sidebar-md,
    .p-sidebar-bottom .p-sidebar-md {
        height: 20rem;
    }
    
    .p-sidebar-top .p-sidebar-lg,
    .p-sidebar-bottom .p-sidebar-lg {
        height: 30rem;
    }
    
    .p-sidebar-left .p-sidebar-view,
    .p-sidebar-right .p-sidebar-view,
    .p-sidebar-top .p-sidebar-view,
    .p-sidebar-bottom .p-sidebar-view {
        width: 100%;
        height: 100%;
    }
    
    .p-sidebar-left .p-sidebar-content,
    .p-sidebar-right .p-sidebar-content,
    .p-sidebar-top .p-sidebar-content,
    .p-sidebar-bottom .p-sidebar-content {
        width: 100%;
        height: 100%;
    }
    
    @media screen and (max-width: 64em) {
        .p-sidebar-left .p-sidebar-lg,
        .p-sidebar-left .p-sidebar-md,
        .p-sidebar-right .p-sidebar-lg,
        .p-sidebar-right .p-sidebar-md {
            width: 20rem;
        }
    }        
}
`,kt={mask:function(e){var t=e.props;return{position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",justifyContent:t.position==="left"?"flex-start":t.position==="right"?"flex-end":"center",alignItems:t.position==="top"?"flex-start":t.position==="bottom"?"flex-end":"center"}}},Y=se.extend({defaultProps:{__TYPE:"Sidebar",appendTo:null,ariaCloseLabel:null,baseZIndex:0,blockScroll:!1,children:void 0,className:null,closeIcon:null,closeOnEscape:!0,content:null,dismissable:!0,fullScreen:!1,header:null,icons:null,id:null,maskClassName:null,maskStyle:null,modal:!0,onHide:null,onShow:null,position:"left",showCloseIcon:!0,style:null,transitionOptions:null,visible:!1},css:{classes:xt,styles:jt,inlineStyles:kt}});function ye(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function St(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?ye(Object(t),!0).forEach(function(i){bt(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):ye(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}var Oe=l.forwardRef(function(n,e){var t=oe(),i=l.useContext(Z),r=Y.getProps(n,i),s=l.useState(!1),u=re(s,2),f=u[0],b=u[1],P=l.useState(!1),x=re(P,2),j=x[0],g=x[1],c=Y.setMetaData({props:r,state:{containerVisible:f}}),O=c.ptm,E=c.cx,I=c.sx,o=c.isUnstyled;ce(Y.css.styles,o,{name:"sidebar"});var v=l.useRef(null),k=l.useRef(null),y=l.useRef(null),p=j&&r.closeOnEscape,d=Ge("sidebar",p);Je({callback:function(h){B(h)},when:p&&d,priority:[Xe.SIDEBAR,d]});var S=le({type:"click",listener:function(h){h.button===0&&_(h)&&B(h)}}),N=re(S,2),D=N[0],M=N[1],_=function(h){return v&&v.current&&!v.current.contains(h.target)},ee=function(){var h=document.activeElement,F=h&&v&&v.current.contains(h);!F&&r.showCloseIcon&&y.current&&y.current.focus()},T=function(h){r.dismissable&&r.modal&&k.current===h.target&&B(h)},B=function(h){r.onHide(),h.preventDefault()},Ee=function(){r.onShow&&r.onShow(),ee(),Ie()},we=function(){r.modal&&!o()&&A.addClass(k.current,"p-component-overlay-leave")},Ne=function(){te.clear(k.current),b(!1),ue()},Ie=function(){r.dismissable&&!r.modal&&D(),r.blockScroll&&A.blockBodyScroll()},ue=function(){M(),r.blockScroll&&A.unblockBodyScroll()};l.useImperativeHandle(e,function(){return{props:r,getElement:function(){return v.current},gteMask:function(){return k.current},getCloseIcon:function(){return y.current}}}),Q(function(){r.visible&&b(!0)}),ne(function(){r.visible&&!f&&b(!0),r.visible!==j&&f&&g(r.visible)},[r.visible]),ne(function(){f&&(te.set("modal",k.current,i&&i.autoZIndex||q.autoZIndex,r.baseZIndex||i&&i.zIndex.modal||q.zIndex.modal),g(!0))},[f]),ne(function(){j&&(M(),r.dismissable&&!r.modal&&D())},[r.dismissable,r.modal,j]),je(function(){ue(),k.current&&te.clear(k.current)});var Ae=function(){var h=r.ariaCloseLabel||Ue("close"),F=t({type:"button",ref:y,className:E("closeButton"),onClick:function(Ke){return B(Ke)},"aria-label":h},O("closeButton")),G=t({className:E("closeIcon")},O("closeIcon")),Ve=r.closeIcon||l.createElement(We,G),He=ze.getJSXIcon(Ve,St({},G),{props:r});return r.showCloseIcon?l.createElement("button",F,He,l.createElement(ie,null)):null},Re=function(){return r.header?R.getJSXElement(r.header,r):null},Me=function(){return r.icons?R.getJSXElement(r.icons,r):null},de=t({ref:k,style:I("mask"),className:E("mask",{maskVisibleState:f}),onMouseDown:function(h){return T(h)}},O("mask")),pe=t({id:r.id,className:w(r.className,E("root",{context:i})),style:r.style,role:"complementary"},Y.getOtherProps(r),O("root")),De=t({className:E("header")},O("header")),Be=t({className:E("content")},O("content")),Le=t({className:E("icons")},O("icons")),_e={enter:r.fullScreen?150:300,exit:r.fullScreen?150:300},me=t({classNames:E("transition"),in:j,timeout:_e,options:r.transitionOptions,unmountOnExit:!0,onEntered:Ee,onExiting:we,onExited:Ne},O("transition")),Te=function(){var h={closeIconRef:y,hide:B};return l.createElement("div",de,l.createElement(be,L({nodeRef:v},me),l.createElement("div",L({ref:v},pe),R.getJSXElement(n.content,h))))},Fe=function(){var h=Ae(),F=Me(),G=Re();return l.createElement("div",de,l.createElement(be,L({nodeRef:v},me),l.createElement("div",L({ref:v},pe),l.createElement("div",De,G,l.createElement("div",Le,F,h)),l.createElement("div",Be,r.children))))},$e=function(){var h=n!=null&&n.content?Te():Fe();return l.createElement(Ye,{element:h,appendTo:r.appendTo,visible:!0})};return f&&$e()});Oe.displayName="Sidebar";function m({onClick:n,img:e,imgAlt:t}){return a.jsx("div",{className:"col-3",children:a.jsx("button",{className:"p-link w-2rem h-2rem",onClick:n,children:a.jsx("img",{src:e,className:"w-2rem h-2rem",alt:t})})})}const Ct=n=>{const[e]=l.useState([12,13,14,15,16]),{layoutConfig:t,setLayoutConfig:i,layoutState:r,setLayoutState:s}=l.useContext(W),{setRipple:u,changeTheme:f}=l.useContext(Z),b=()=>{s(o=>({...o,configSidebarVisible:!0}))},P=()=>{s(o=>({...o,configSidebarVisible:!1}))},x=o=>{i(v=>({...v,inputStyle:o.value}))},j=o=>{u(o.value),i(v=>({...v,ripple:o.value}))},g=o=>{i(v=>({...v,menuMode:o.value}))},c=(o,v)=>{f==null||f(t.theme,o,"theme-css",()=>{i(k=>({...k,theme:o,colorScheme:v}))})},O=()=>{i(o=>({...o,scale:o.scale-1}))},E=()=>{i(o=>({...o,scale:o.scale+1}))},I=()=>{document.documentElement.style.fontSize=t.scale+"px"};return l.useEffect(()=>{I()},[t.scale]),a.jsxs(a.Fragment,{children:[a.jsx("button",{className:"layout-config-button config-link",type:"button",onClick:b,children:a.jsx("i",{className:"pi pi-cog"})}),a.jsxs(Oe,{visible:r.configSidebarVisible,onHide:P,position:"right",className:"layout-config-sidebar w-20rem",children:[!n.simple&&a.jsxs(a.Fragment,{children:[a.jsx("h5",{children:"Scale"}),a.jsxs("div",{className:"flex align-items-center",children:[a.jsx(fe,{icon:"pi pi-minus",type:"button",onClick:O,rounded:!0,text:!0,className:"w-2rem h-2rem mr-2",disabled:t.scale===e[0]}),a.jsx("div",{className:"flex gap-2 align-items-center",children:e.map(o=>a.jsx("i",{className:w("pi pi-circle-fill",{"text-primary-500":o===t.scale,"text-300":o!==t.scale})},o))}),a.jsx(fe,{icon:"pi pi-plus",type:"button",onClick:E,rounded:!0,text:!0,className:"w-2rem h-2rem ml-2",disabled:t.scale===e[e.length-1]})]}),a.jsx("h5",{children:"Menu Type"}),a.jsxs("div",{className:"flex",children:[a.jsxs("div",{className:"field-radiobutton flex-1",children:[a.jsx($,{name:"menuMode",value:"static",checked:t.menuMode==="static",onChange:o=>g(o),inputId:"mode1"}),a.jsx("label",{htmlFor:"mode1",children:"Static"})]}),a.jsxs("div",{className:"field-radiobutton flex-1",children:[a.jsx($,{name:"menuMode",value:"overlay",checked:t.menuMode==="overlay",onChange:o=>g(o),inputId:"mode2"}),a.jsx("label",{htmlFor:"mode2",children:"Overlay"})]})]}),a.jsx("h5",{children:"Input Style"}),a.jsxs("div",{className:"flex",children:[a.jsxs("div",{className:"field-radiobutton flex-1",children:[a.jsx($,{name:"inputStyle",value:"outlined",checked:t.inputStyle==="outlined",onChange:o=>x(o),inputId:"outlined_input"}),a.jsx("label",{htmlFor:"outlined_input",children:"Outlined"})]}),a.jsxs("div",{className:"field-radiobutton flex-1",children:[a.jsx($,{name:"inputStyle",value:"filled",checked:t.inputStyle==="filled",onChange:o=>x(o),inputId:"filled_input"}),a.jsx("label",{htmlFor:"filled_input",children:"Filled"})]})]}),a.jsx("h5",{children:"Ripple Effect"}),a.jsx(Pe,{checked:t.ripple,onChange:o=>j(o)})]}),a.jsx("h5",{children:"Bootstrap"}),a.jsxs("div",{className:"grid",children:[a.jsx(m,{img:"/images/layout/themes/bootstrap4-light-blue.svg",imgAlt:"Bootstrap Light Blue",onClick:()=>c("bootstrap4-light-blue","light")}),a.jsx(m,{img:"/images/layout/themes/bootstrap4-light-purple.svg",imgAlt:"Bootstrap Light Purple",onClick:()=>c("bootstrap4-light-purple","light")}),a.jsx(m,{img:"/images/layout/themes/bootstrap4-dark-blue.svg",imgAlt:"Bootstrap Dark Blue",onClick:()=>c("bootstrap4-dark-blue","dark")}),a.jsx(m,{img:"/images/layout/themes/bootstrap4-dark-purple.svg",imgAlt:"Bootstrap Dark Purple",onClick:()=>c("bootstrap4-dark-purple","dark")})]}),a.jsx("h5",{children:"Material Design"}),a.jsxs("div",{className:"grid",children:[a.jsx(m,{img:"/images/layout/themes/md-light-indigo.svg",imgAlt:"Material Light Indigo",onClick:()=>c("md-light-indigo","light")}),a.jsx(m,{img:"/images/layout/themes/md-light-deeppurple.svg",imgAlt:"Material Light DeepPurple",onClick:()=>c("md-light-deeppurple","light")}),a.jsx(m,{img:"/images/layout/themes/md-dark-indigo.svg",imgAlt:"Material Dark Indigo",onClick:()=>c("md-dark-indigo","dark")}),a.jsx(m,{img:"/images/layout/themes/md-dark-deeppurple.svg",imgAlt:"Material Dark DeepPurple",onClick:()=>c("md-dark-deeppurple","dark")})]}),a.jsx("h5",{children:"Material Design Compact"}),a.jsxs("div",{className:"grid",children:[a.jsx(m,{img:"/images/layout/themes/md-light-indigo.svg",imgAlt:"Material Light Indigo",onClick:()=>c("mdc-light-indigo","light")}),a.jsx(m,{img:"/images/layout/themes/md-light-deeppurple.svg",imgAlt:"Material Light Deep Purple",onClick:()=>c("mdc-light-deeppurple","light")}),a.jsx(m,{img:"/images/layout/themes/md-dark-indigo.svg",imgAlt:"Material Dark Indigo",onClick:()=>c("mdc-dark-indigo","dark")}),a.jsx(m,{img:"/images/layout/themes/md-dark-deeppurple.svg",imgAlt:"Material Dark Deep Purple",onClick:()=>c("mdc-dark-deeppurple","dark")})]}),a.jsx("h5",{children:"Tailwind"}),a.jsx("div",{className:"grid",children:a.jsx(m,{img:"/images/layout/themes/tailwind-light.png",imgAlt:"Tailwind Light",onClick:()=>c("tailwind-light","light")})}),a.jsx("h5",{children:"Fluent UI"}),a.jsx("div",{className:"grid",children:a.jsx(m,{img:"/images/layout/themes/fluent-light.png",imgAlt:"Fluent Light",onClick:()=>c("fluent-light","light")})}),a.jsx("h5",{children:"PrimeOne Design - 2022"}),a.jsxs("div",{className:"grid",children:[a.jsx(m,{img:"/images/layout/themes/lara-light-indigo.png",imgAlt:"Lara Light Indigo",onClick:()=>c("lara-light-indigo","light")}),a.jsx(m,{img:"/images/layout/themes/lara-light-blue.png",imgAlt:"Lara Light Blue",onClick:()=>c("lara-light-blue","light")}),a.jsx(m,{img:"/images/layout/themes/lara-light-purple.png",imgAlt:"Lara Light Purple",onClick:()=>c("lara-light-purple","light")}),a.jsx(m,{img:"/images/layout/themes/lara-light-teal.png",imgAlt:"Lara Light Teal",onClick:()=>c("lara-light-teal","light")}),a.jsx(m,{img:"/images/layout/themes/lara-dark-indigo.png",imgAlt:"Lara Dark Indigo",onClick:()=>c("lara-dark-indigo","dark")}),a.jsx(m,{img:"/images/layout/themes/lara-dark-blue.png",imgAlt:"Lara Dark Blue",onClick:()=>c("lara-dark-blue","dark")}),a.jsx(m,{img:"/images/layout/themes/lara-dark-purple.png",imgAlt:"Lara Dark Purple",onClick:()=>c("lara-dark-purple","dark")}),a.jsx(m,{img:"/images/layout/themes/lara-dark-teal.png",imgAlt:"Lara Dark Teal",onClick:()=>c("lara-dark-teal","dark")})]}),a.jsx("h5",{children:"PrimeOne Design - 2021"}),a.jsxs("div",{className:"grid",children:[a.jsx(m,{img:"/images/layout/themes/saga-blue.png",imgAlt:"Saga Blue",onClick:()=>c("saga-blue","light")}),a.jsx(m,{img:"/images/layout/themes/saga-green.png",imgAlt:"Saga Green",onClick:()=>c("saga-green","light")}),a.jsx(m,{img:"/images/layout/themes/saga-orange.png",imgAlt:"Saga Orange",onClick:()=>c("saga-orange","dark")}),a.jsx(m,{img:"/images/layout/themes/saga-purple.png",imgAlt:"Saga Purple",onClick:()=>c("saga-purple","light")}),a.jsx(m,{img:"/images/layout/themes/vela-blue.png",imgAlt:"Vela Blue",onClick:()=>c("vela-blue","dark")}),a.jsx(m,{img:"/images/layout/themes/vela-green.png",imgAlt:"Vela Green",onClick:()=>c("vela-green","dark")}),a.jsx(m,{img:"/images/layout/themes/vela-orange.png",imgAlt:"Vela Orange",onClick:()=>c("vela-orange","dark")}),a.jsx(m,{img:"/images/layout/themes/vela-purple.png",imgAlt:"Vela Purple",onClick:()=>c("vela-purple","dark")}),a.jsx(m,{img:"/images/layout/themes/arya-blue.png",imgAlt:"Arya Blue",onClick:()=>c("arya-blue","dark")}),a.jsx(m,{img:"/images/layout/themes/arya-green.png",imgAlt:"Arya Green",onClick:()=>c("arya-green","dark")}),a.jsx(m,{img:"/images/layout/themes/arya-orange.png",imgAlt:"Arya Orange",onClick:()=>c("arya-orange","dark")}),a.jsx(m,{img:"/images/layout/themes/arya-purple.png",imgAlt:"Arya Purple",onClick:()=>c("arya-purple","dark")})]})]})]})},Pt=({children:n})=>{const{layoutConfig:e,layoutState:t,setLayoutState:i}=l.useContext(W),{setRipple:r}=l.useContext(Z),s=l.useRef(null),u=l.useRef(null),[f,b]=le({type:"click",listener:o=>{var k,y,p,d,S,N;!((k=u.current)!=null&&k.isSameNode(o.target)||(y=u.current)!=null&&y.contains(o.target)||(d=(p=s.current)==null?void 0:p.menubutton)!=null&&d.isSameNode(o.target)||(N=(S=s.current)==null?void 0:S.menubutton)!=null&&N.contains(o.target))&&g()}}),P=route().current();l.useEffect(()=>{g(),c()},[P]);const[x,j]=le({type:"click",listener:o=>{var k,y,p,d,S,N,D,M;!((y=(k=s.current)==null?void 0:k.topbarmenu)!=null&&y.isSameNode(o.target)||(d=(p=s.current)==null?void 0:p.topbarmenu)!=null&&d.contains(o.target)||(N=(S=s.current)==null?void 0:S.topbarmenubutton)!=null&&N.isSameNode(o.target)||(M=(D=s.current)==null?void 0:D.topbarmenubutton)!=null&&M.contains(o.target))&&c()}}),g=()=>{i(o=>({...o,overlayMenuActive:!1,staticMenuMobileActive:!1,menuHoverActive:!1})),b(),E()},c=()=>{i(o=>({...o,profileSidebarVisible:!1})),j()},O=()=>{document.body.classList?document.body.classList.add("blocked-scroll"):document.body.className+=" blocked-scroll"},E=()=>{document.body.classList?document.body.classList.remove("blocked-scroll"):document.body.className=document.body.className.replace(new RegExp("(^|\\b)"+"blocked-scroll".split(" ").join("|")+"(\\b|$)","gi")," ")};Q(()=>{r(e.ripple)}),l.useEffect(()=>{(t.overlayMenuActive||t.staticMenuMobileActive)&&f(),t.staticMenuMobileActive&&O()},[t.overlayMenuActive,t.staticMenuMobileActive]),l.useEffect(()=>{t.profileSidebarVisible&&x()},[t.profileSidebarVisible]),je(()=>{b(),j()});const I=w("layout-wrapper",{"layout-overlay":e.menuMode==="overlay","layout-static":e.menuMode==="static","layout-static-inactive":t.staticMenuDesktopInactive&&e.menuMode==="static","layout-overlay-active":t.overlayMenuActive,"layout-mobile-active":t.staticMenuMobileActive,"p-input-filled":e.inputStyle==="filled","p-ripple-disabled":!e.ripple});return a.jsx(Ze.Fragment,{children:a.jsxs("div",{className:I,children:[a.jsx(Ce,{ref:s}),a.jsx("div",{ref:u,className:"layout-sidebar",children:a.jsx(nt,{})}),a.jsxs("div",{className:"layout-main-container",children:[a.jsx("div",{className:"layout-main",children:n}),a.jsx(Qe,{})]}),a.jsx(Ct,{}),a.jsx("div",{className:"layout-mask"})]})})},It=Pt;export{It as L};
