import{j as a,r as s,c as w,a as ae,L as W,q as Ue,P as Z,D as A,O as R,Z as te,b as Y,i as ze,I as Ze,R as Ge}from"./app-62d1208b.js";import{R as ie,C as le,u as oe,a as ce,c as Q,T as xe,e as qe,f as Je,E as Xe,i as se,b as ne,d as je,P as Ye,B as fe}from"./button.esm-da7590ee.js";import{d as We,C as be,c as Qe}from"./index.esm-f19b01fe.js";const et=()=>a.jsx("div",{className:"layout-footer"}),ke=s.createContext({}),tt=({children:n})=>{const[t,e]=s.useState(""),i={activeMenu:t,setActiveMenu:e};return a.jsx(ke.Provider,{value:i,children:n})},Se=n=>{const t=route(route().current()),e="",{activeMenu:i,setActiveMenu:r}=s.useContext(ke),l=n.item,u=n.parentKey?n.parentKey+"-"+n.index:String(n.index),f=l.to&&t===l.to,b=i===u||i.startsWith(u+"-"),P=g=>{l.to&&l.to===g&&r(u)};s.useEffect(()=>{P(t)},[t,e]);const x=g=>{if(l.disabled){g.preventDefault();return}l.command&&l.command({originalEvent:g,item:l}),l.items?r(b?n.parentKey:u):r(u)},j=l.items&&l.visible!==!1&&a.jsx(We,{timeout:{enter:1e3,exit:450},classNames:"layout-submenu",in:n.root?!0:b,children:a.jsx("ul",{children:l.items.map((g,c)=>a.jsx(Se,{item:g,index:c,className:g.badgeClass,parentKey:u},g.label))})},l.label);return a.jsxs("li",{className:w({"layout-root-menuitem":n.root,"active-menuitem":b}),children:[n.root&&l.visible!==!1&&a.jsx("div",{className:"layout-menuitem-root-text",children:l.label}),(!l.to||l.items)&&l.visible!==!1?a.jsxs("a",{href:l.url,onClick:g=>x(g),className:w(l.class,"p-ripple"),target:l.target,tabIndex:0,children:[a.jsx("i",{className:w("layout-menuitem-icon",l.icon)}),a.jsx("span",{className:"layout-menuitem-text",children:l.label}),l.items&&a.jsx("i",{className:"pi pi-fw pi-angle-down layout-submenu-toggler"}),a.jsx(ie,{})]}):null,l.to&&!l.items&&l.visible!==!1?a.jsxs(ae,{href:l.to,replace:l.replaceUrl,target:l.target,onClick:g=>x(g),className:w(l.class,"p-ripple",{"active-route":f}),tabIndex:0,children:[a.jsx("i",{className:w("layout-menuitem-icon",l.icon)}),a.jsx("span",{className:"layout-menuitem-text",children:l.label}),l.items&&a.jsx("i",{className:"pi pi-fw pi-angle-down layout-submenu-toggler"}),a.jsx(ie,{})]}):null,j]})},nt=()=>{s.useContext(W);const n=Ue().props.auth.role,t=[{label:"Home",items:[{label:"Dashboard",icon:"pi pi-fw pi-home",to:route("dashboard")},{label:"Produtos",icon:"pi pi-fw pi-box",to:route("products.index")},...n==="admin"?[{label:"Categorias",icon:"pi pi-fw pi-list",to:route("categories.index")}]:[]]}];return a.jsx(tt,{children:a.jsx("ul",{className:"layout-menu",children:t.map((e,i)=>e!=null&&e.seperator?a.jsx("li",{className:"menu-separator"}):a.jsx(Se,{item:e,root:!0,index:i},e.label))})})},rt=()=>a.jsx(nt,{}),Ce=s.forwardRef((n,t)=>{const{layoutConfig:e,layoutState:i,onMenuToggle:r,showProfileSidebar:l}=s.useContext(W),u=s.useRef(null),f=s.useRef(null),b=s.useRef(null);return s.useImperativeHandle(t,()=>({menubutton:u.current,topbarmenu:f.current,topbarmenubutton:b.current})),a.jsxs("div",{className:"layout-topbar",children:[a.jsx("button",{ref:u,type:"button",className:"p-link layout-menu-button layout-topbar-button",onClick:r,children:a.jsx("i",{className:"pi pi-bars"})}),a.jsx("button",{ref:b,type:"button",className:"p-link layout-topbar-menu-button layout-topbar-button",onClick:l,children:a.jsx("i",{className:"pi pi-user"})}),a.jsxs("div",{ref:f,className:w("layout-topbar-menu",{"layout-topbar-menu-mobile-active":i.profileSidebarVisible}),children:[a.jsxs(ae,{href:route("profile.edit"),className:"p-link layout-topbar-button",children:[a.jsx("i",{className:"pi pi-user"}),a.jsx("span",{children:"Profile"})]}),a.jsxs(ae,{href:route("logout"),method:"post",as:"button",className:"p-link layout-topbar-button",children:[a.jsx("i",{className:"pi pi-lock"}),a.jsx("span",{children:"Logout"})]})]})]})});Ce.displayName="AppTopbar";function V(){return V=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i])}return n},V.apply(this,arguments)}function K(n){"@babel/helpers - typeof";return K=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},K(n)}function at(n,t){if(K(n)!=="object"||n===null)return n;var e=n[Symbol.toPrimitive];if(e!==void 0){var i=e.call(n,t||"default");if(K(i)!=="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(n)}function it(n){var t=at(n,"string");return K(t)==="symbol"?t:String(t)}function st(n,t,e){return t=it(t),t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}var lt={root:function(t){var e=t.props,i=t.checked;return w("p-inputswitch p-component",{"p-highlight":i,"p-disabled":e.disabled,"p-invalid":e.invalid})},input:"p-inputswitch-input",slider:"p-inputswitch-slider"},q=le.extend({defaultProps:{__TYPE:"InputSwitch",autoFocus:!1,checked:!1,className:null,disabled:!1,falseValue:!1,id:null,inputId:null,inputRef:null,invalid:!1,name:null,onBlur:null,onChange:null,onFocus:null,style:null,tabIndex:null,tooltip:null,tooltipOptions:null,trueValue:!0,children:void 0},css:{classes:lt}});function ge(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);t&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),e.push.apply(e,i)}return e}function ot(n){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?ge(Object(e),!0).forEach(function(i){st(n,i,e[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):ge(Object(e)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(e,i))})}return n}var Pe=s.memo(s.forwardRef(function(n,t){var e=oe(),i=s.useContext(Z),r=q.getProps(n,i),l=q.setMetaData({props:r}),u=l.ptm,f=l.cx,b=l.isUnstyled;ce(q.css.styles,b,{name:"inputswitch"});var P=s.useRef(null),x=s.useRef(r.inputRef),j=r.checked===r.trueValue,g=function(p){if(r.onChange){var S=j?r.falseValue:r.trueValue;r.onChange({originalEvent:p,value:S,stopPropagation:function(){p==null||p.stopPropagation()},preventDefault:function(){p==null||p.preventDefault()},target:{name:r.name,id:r.id,value:S}})}},c=function(p){var S;r==null||(S=r.onFocus)===null||S===void 0||S.call(r,p)},O=function(p){var S;r==null||(S=r.onBlur)===null||S===void 0||S.call(r,p)};s.useImperativeHandle(t,function(){return{props:r,focus:function(){return A.focus(x.current)},getElement:function(){return P.current},getInput:function(){return x.current}}}),s.useEffect(function(){R.combinedRefs(x,r.inputRef)},[x,r.inputRef]),Q(function(){r.autoFocus&&A.focus(x.current,r.autoFocus)});var E=R.isNotEmpty(r.tooltip),I=q.getOtherProps(r),o=R.reduceKeys(I,A.ARIA_PROPS),v=e({className:w(r.className,f("root",{checked:j})),style:r.style,role:"checkbox","aria-checked":j,"data-p-highlight":j,"data-p-disabled":r.disabled},I,u("root")),k=e(ot({type:"checkbox",id:r.inputId,name:r.name,checked:j,onChange:g,onFocus:c,onBlur:O,disabled:r.disabled,role:"switch",tabIndex:r.tabIndex,"aria-checked":j,className:f("input")},o),u("input")),y=e({className:f("slider")},u("slider"));return s.createElement(s.Fragment,null,s.createElement("div",V({id:r.id,ref:P},v),s.createElement("input",V({ref:x},k)),s.createElement("span",y)),E&&s.createElement(xe,V({target:P,content:r.tooltip,pt:u("tooltip")},r.tooltipOptions)))}));Pe.displayName="InputSwitch";function H(){return H=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i])}return n},H.apply(this,arguments)}function U(n){"@babel/helpers - typeof";return U=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},U(n)}function ct(n,t){if(U(n)!=="object"||n===null)return n;var e=n[Symbol.toPrimitive];if(e!==void 0){var i=e.call(n,t||"default");if(U(i)!=="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(n)}function ut(n){var t=ct(n,"string");return U(t)==="symbol"?t:String(t)}function pt(n,t,e){return t=ut(t),t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}var dt={root:function(t){var e=t.props,i=t.context;return w("p-radiobutton p-component",{"p-highlight":e.checked,"p-disabled":e.disabled,"p-invalid":e.invalid,"p-variant-filled":e.variant?e.variant==="filled":i&&i.inputStyle==="filled"})},box:"p-radiobutton-box",input:"p-radiobutton-input",icon:"p-radiobutton-icon"},J=le.extend({defaultProps:{__TYPE:"RadioButton",autoFocus:!1,checked:!1,className:null,disabled:!1,id:null,inputId:null,inputRef:null,invalid:!1,variant:null,name:null,onChange:null,onClick:null,required:!1,style:null,tabIndex:null,tooltip:null,tooltipOptions:null,value:null,children:void 0},css:{classes:dt}});function he(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);t&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),e.push.apply(e,i)}return e}function mt(n){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?he(Object(e),!0).forEach(function(i){pt(n,i,e[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):he(Object(e)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(e,i))})}return n}var $=s.memo(s.forwardRef(function(n,t){var e=oe(),i=s.useContext(Z),r=J.getProps(n,i),l=s.useRef(null),u=s.useRef(r.inputRef),f=J.setMetaData({props:r}),b=f.ptm,P=f.cx,x=f.isUnstyled;ce(J.css.styles,x,{name:"radiobutton"});var j=function(d){g(d)},g=function(d){if(!(r.disabled||r.readonly)&&r.onChange){var p=r.checked,S=d.target instanceof HTMLDivElement,N=d.target===u.current,D=N&&d.target.checked!==p,M=S&&(A.hasClass(l.current,"p-radiobutton-checked")===p?!p:!1),_=!p,ee={originalEvent:d,value:r.value,checked:_,stopPropagation:function(){d==null||d.stopPropagation()},preventDefault:function(){d==null||d.preventDefault()},target:{type:"radio",name:r.name,id:r.id,value:r.value,checked:_}};if(D||M){var T;if(r==null||(T=r.onChange)===null||T===void 0||T.call(r,ee),d.defaultPrevented)return;M&&(u.current.checked=_)}A.focus(u.current)}},c=function(d){var p;r==null||(p=r.onFocus)===null||p===void 0||p.call(r,d)},O=function(d){var p;r==null||(p=r.onBlur)===null||p===void 0||p.call(r,d)};s.useImperativeHandle(t,function(){return{props:r,select:j,focus:function(){return A.focus(u.current)},getElement:function(){return l.current},getInput:function(){return u.current}}}),s.useEffect(function(){u.current&&(u.current.checked=r.checked)},[r.checked]),s.useEffect(function(){R.combinedRefs(u,r.inputRef)},[u,r.inputRef]),Q(function(){r.autoFocus&&A.focus(u.current,r.autoFocus)});var E=R.isNotEmpty(r.tooltip),I=J.getOtherProps(r),o=e({id:r.id,className:w(r.className,P("root",{context:i})),style:r.style,"data-p-checked":r.checked},I,b("root"));delete o.input,delete o.box,delete o.icon;var v=function(){var d=R.reduceKeys(I,A.ARIA_PROPS),p=e(mt({id:r.inputId,type:"radio",name:r.name,defaultChecked:r.checked,onFocus:c,onBlur:O,onChange:g,disabled:r.disabled,readOnly:r.readonly,required:r.required,tabIndex:r.tabIndex,className:P("input")},d),n.input,b("input"));return s.createElement("input",H({ref:u},p))},k=function(){var d=e({className:P("box")},n.box,b("box")),p=e({className:P("icon")},n.icon,b("icon"));return s.createElement("div",d,s.createElement("div",p))};return s.createElement(s.Fragment,null,s.createElement("div",H({ref:l},o),v(),k()),E&&s.createElement(xe,H({target:l,content:r.tooltip,pt:b("tooltip")},r.tooltipOptions)))}));$.displayName="RadioButton";function L(){return L=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i])}return n},L.apply(this,arguments)}function z(n){"@babel/helpers - typeof";return z=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},z(n)}function ft(n,t){if(z(n)!=="object"||n===null)return n;var e=n[Symbol.toPrimitive];if(e!==void 0){var i=e.call(n,t||"default");if(z(i)!=="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(n)}function bt(n){var t=ft(n,"string");return z(t)==="symbol"?t:String(t)}function gt(n,t,e){return t=bt(t),t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function ht(n){if(Array.isArray(n))return n}function vt(n,t){var e=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(e!=null){var i,r,l,u,f=[],b=!0,P=!1;try{if(l=(e=e.call(n)).next,t===0){if(Object(e)!==e)return;b=!1}else for(;!(b=(i=l.call(e)).done)&&(f.push(i.value),f.length!==t);b=!0);}catch(x){P=!0,r=x}finally{try{if(!b&&e.return!=null&&(u=e.return(),Object(u)!==u))return}finally{if(P)throw r}}return f}}function ve(n,t){(t==null||t>n.length)&&(t=n.length);for(var e=0,i=new Array(t);e<t;e++)i[e]=n[e];return i}function yt(n,t){if(n){if(typeof n=="string")return ve(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);if(e==="Object"&&n.constructor&&(e=n.constructor.name),e==="Map"||e==="Set")return Array.from(n);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return ve(n,t)}}function xt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function re(n,t){return ht(n)||vt(n,t)||yt(n,t)||xt()}var jt={closeButton:"p-sidebar-close p-sidebar-icon p-link",closeIcon:"p-sidebar-close-icon",mask:function(t){var e=t.props,i=t.maskVisibleState,r=["left","right","top","bottom"],l=r.find(function(u){return u===e.position});return w("p-sidebar-mask",l&&!e.fullScreen?"p-sidebar-".concat(l):"",{"p-component-overlay p-component-overlay-enter":e.modal,"p-sidebar-mask-scrollblocker":e.blockScroll,"p-sidebar-visible":i,"p-sidebar-full":e.fullScreen},e.maskClassName)},header:function(t){var e=t.props;return w("p-sidebar-header",{"p-sidebar-custom-header":e.header})},content:"p-sidebar-content",icons:"p-sidebar-icons",root:function(t){t.props;var e=t.context;return w("p-sidebar p-component",{"p-input-filled":e&&e.inputStyle==="filled"||Y.inputStyle==="filled","p-ripple-disabled":e&&e.ripple===!1||Y.ripple===!1})},transition:"p-sidebar"},kt=`
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
`,St={mask:function(t){var e=t.props;return{position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",justifyContent:e.position==="left"?"flex-start":e.position==="right"?"flex-end":"center",alignItems:e.position==="top"?"flex-start":e.position==="bottom"?"flex-end":"center"}}},X=le.extend({defaultProps:{__TYPE:"Sidebar",appendTo:null,ariaCloseLabel:null,baseZIndex:0,blockScroll:!1,children:void 0,className:null,closeIcon:null,closeOnEscape:!0,content:null,dismissable:!0,fullScreen:!1,header:null,icons:null,id:null,maskClassName:null,maskStyle:null,modal:!0,onHide:null,onShow:null,position:"left",showCloseIcon:!0,style:null,transitionOptions:null,visible:!1},css:{classes:jt,styles:kt,inlineStyles:St}});function ye(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);t&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),e.push.apply(e,i)}return e}function Ct(n){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?ye(Object(e),!0).forEach(function(i){gt(n,i,e[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):ye(Object(e)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(e,i))})}return n}var Oe=s.forwardRef(function(n,t){var e=oe(),i=s.useContext(Z),r=X.getProps(n,i),l=s.useState(!1),u=re(l,2),f=u[0],b=u[1],P=s.useState(!1),x=re(P,2),j=x[0],g=x[1],c=X.setMetaData({props:r,state:{containerVisible:f}}),O=c.ptm,E=c.cx,I=c.sx,o=c.isUnstyled;ce(X.css.styles,o,{name:"sidebar"});var v=s.useRef(null),k=s.useRef(null),y=s.useRef(null),d=j&&r.closeOnEscape,p=qe("sidebar",d);Je({callback:function(h){B(h)},when:d&&p,priority:[Xe.SIDEBAR,p]});var S=se({type:"click",listener:function(h){h.button===0&&_(h)&&B(h)}}),N=re(S,2),D=N[0],M=N[1],_=function(h){return v&&v.current&&!v.current.contains(h.target)},ee=function(){var h=document.activeElement,F=h&&v&&v.current.contains(h);!F&&r.showCloseIcon&&y.current&&y.current.focus()},T=function(h){r.dismissable&&r.modal&&k.current===h.target&&B(h)},B=function(h){r.onHide(),h.preventDefault()},Ee=function(){r.onShow&&r.onShow(),ee(),Ie()},we=function(){r.modal&&!o()&&A.addClass(k.current,"p-component-overlay-leave")},Ne=function(){te.clear(k.current),b(!1),ue()},Ie=function(){r.dismissable&&!r.modal&&D(),r.blockScroll&&A.blockBodyScroll()},ue=function(){M(),r.blockScroll&&A.unblockBodyScroll()};s.useImperativeHandle(t,function(){return{props:r,getElement:function(){return v.current},gteMask:function(){return k.current},getCloseIcon:function(){return y.current}}}),Q(function(){r.visible&&b(!0)}),ne(function(){r.visible&&!f&&b(!0),r.visible!==j&&f&&g(r.visible)},[r.visible]),ne(function(){f&&(te.set("modal",k.current,i&&i.autoZIndex||Y.autoZIndex,r.baseZIndex||i&&i.zIndex.modal||Y.zIndex.modal),g(!0))},[f]),ne(function(){j&&(M(),r.dismissable&&!r.modal&&D())},[r.dismissable,r.modal,j]),je(function(){ue(),k.current&&te.clear(k.current)});var Ae=function(){var h=r.ariaCloseLabel||ze("close"),F=e({type:"button",ref:y,className:E("closeButton"),onClick:function(Ke){return B(Ke)},"aria-label":h},O("closeButton")),G=e({className:E("closeIcon")},O("closeIcon")),Ve=r.closeIcon||s.createElement(Qe,G),He=Ze.getJSXIcon(Ve,Ct({},G),{props:r});return r.showCloseIcon?s.createElement("button",F,He,s.createElement(ie,null)):null},Re=function(){return r.header?R.getJSXElement(r.header,r):null},Me=function(){return r.icons?R.getJSXElement(r.icons,r):null},pe=e({ref:k,style:I("mask"),className:E("mask",{maskVisibleState:f}),onMouseDown:function(h){return T(h)}},O("mask")),de=e({id:r.id,className:w(r.className,E("root",{context:i})),style:r.style,role:"complementary"},X.getOtherProps(r),O("root")),De=e({className:E("header")},O("header")),Be=e({className:E("content")},O("content")),Le=e({className:E("icons")},O("icons")),_e={enter:r.fullScreen?150:300,exit:r.fullScreen?150:300},me=e({classNames:E("transition"),in:j,timeout:_e,options:r.transitionOptions,unmountOnExit:!0,onEntered:Ee,onExiting:we,onExited:Ne},O("transition")),Te=function(){var h={closeIconRef:y,hide:B};return s.createElement("div",pe,s.createElement(be,L({nodeRef:v},me),s.createElement("div",L({ref:v},de),R.getJSXElement(n.content,h))))},Fe=function(){var h=Ae(),F=Me(),G=Re();return s.createElement("div",pe,s.createElement(be,L({nodeRef:v},me),s.createElement("div",L({ref:v},de),s.createElement("div",De,G,s.createElement("div",Le,F,h)),s.createElement("div",Be,r.children))))},$e=function(){var h=n!=null&&n.content?Te():Fe();return s.createElement(Ye,{element:h,appendTo:r.appendTo,visible:!0})};return f&&$e()});Oe.displayName="Sidebar";function m({onClick:n,img:t,imgAlt:e}){return a.jsx("div",{className:"col-3",children:a.jsx("button",{className:"p-link w-2rem h-2rem",onClick:n,children:a.jsx("img",{src:t,className:"w-2rem h-2rem",alt:e})})})}const Pt=n=>{const[t]=s.useState([12,13,14,15,16]),{layoutConfig:e,setLayoutConfig:i,layoutState:r,setLayoutState:l}=s.useContext(W),{setRipple:u,changeTheme:f}=s.useContext(Z),b=()=>{l(o=>({...o,configSidebarVisible:!0}))},P=()=>{l(o=>({...o,configSidebarVisible:!1}))},x=o=>{i(v=>({...v,inputStyle:o.value}))},j=o=>{u(o.value),i(v=>({...v,ripple:o.value}))},g=o=>{i(v=>({...v,menuMode:o.value}))},c=(o,v)=>{f==null||f(e.theme,o,"theme-css",()=>{i(k=>({...k,theme:o,colorScheme:v}))})},O=()=>{i(o=>({...o,scale:o.scale-1}))},E=()=>{i(o=>({...o,scale:o.scale+1}))},I=()=>{document.documentElement.style.fontSize=e.scale+"px"};return s.useEffect(()=>{I()},[e.scale]),a.jsxs(a.Fragment,{children:[a.jsx("button",{className:"layout-config-button config-link",type:"button",onClick:b,children:a.jsx("i",{className:"pi pi-cog"})}),a.jsxs(Oe,{visible:r.configSidebarVisible,onHide:P,position:"right",className:"layout-config-sidebar w-20rem",children:[!n.simple&&a.jsxs(a.Fragment,{children:[a.jsx("h5",{children:"Scale"}),a.jsxs("div",{className:"flex align-items-center",children:[a.jsx(fe,{icon:"pi pi-minus",type:"button",onClick:O,rounded:!0,text:!0,className:"w-2rem h-2rem mr-2",disabled:e.scale===t[0]}),a.jsx("div",{className:"flex gap-2 align-items-center",children:t.map(o=>a.jsx("i",{className:w("pi pi-circle-fill",{"text-primary-500":o===e.scale,"text-300":o!==e.scale})},o))}),a.jsx(fe,{icon:"pi pi-plus",type:"button",onClick:E,rounded:!0,text:!0,className:"w-2rem h-2rem ml-2",disabled:e.scale===t[t.length-1]})]}),a.jsx("h5",{children:"Menu Type"}),a.jsxs("div",{className:"flex",children:[a.jsxs("div",{className:"field-radiobutton flex-1",children:[a.jsx($,{name:"menuMode",value:"static",checked:e.menuMode==="static",onChange:o=>g(o),inputId:"mode1"}),a.jsx("label",{htmlFor:"mode1",children:"Static"})]}),a.jsxs("div",{className:"field-radiobutton flex-1",children:[a.jsx($,{name:"menuMode",value:"overlay",checked:e.menuMode==="overlay",onChange:o=>g(o),inputId:"mode2"}),a.jsx("label",{htmlFor:"mode2",children:"Overlay"})]})]}),a.jsx("h5",{children:"Input Style"}),a.jsxs("div",{className:"flex",children:[a.jsxs("div",{className:"field-radiobutton flex-1",children:[a.jsx($,{name:"inputStyle",value:"outlined",checked:e.inputStyle==="outlined",onChange:o=>x(o),inputId:"outlined_input"}),a.jsx("label",{htmlFor:"outlined_input",children:"Outlined"})]}),a.jsxs("div",{className:"field-radiobutton flex-1",children:[a.jsx($,{name:"inputStyle",value:"filled",checked:e.inputStyle==="filled",onChange:o=>x(o),inputId:"filled_input"}),a.jsx("label",{htmlFor:"filled_input",children:"Filled"})]})]}),a.jsx("h5",{children:"Ripple Effect"}),a.jsx(Pe,{checked:e.ripple,onChange:o=>j(o)})]}),a.jsx("h5",{children:"Bootstrap"}),a.jsxs("div",{className:"grid",children:[a.jsx(m,{img:"/images/layout/themes/bootstrap4-light-blue.svg",imgAlt:"Bootstrap Light Blue",onClick:()=>c("bootstrap4-light-blue","light")}),a.jsx(m,{img:"/images/layout/themes/bootstrap4-light-purple.svg",imgAlt:"Bootstrap Light Purple",onClick:()=>c("bootstrap4-light-purple","light")}),a.jsx(m,{img:"/images/layout/themes/bootstrap4-dark-blue.svg",imgAlt:"Bootstrap Dark Blue",onClick:()=>c("bootstrap4-dark-blue","dark")}),a.jsx(m,{img:"/images/layout/themes/bootstrap4-dark-purple.svg",imgAlt:"Bootstrap Dark Purple",onClick:()=>c("bootstrap4-dark-purple","dark")})]}),a.jsx("h5",{children:"Material Design"}),a.jsxs("div",{className:"grid",children:[a.jsx(m,{img:"/images/layout/themes/md-light-indigo.svg",imgAlt:"Material Light Indigo",onClick:()=>c("md-light-indigo","light")}),a.jsx(m,{img:"/images/layout/themes/md-light-deeppurple.svg",imgAlt:"Material Light DeepPurple",onClick:()=>c("md-light-deeppurple","light")}),a.jsx(m,{img:"/images/layout/themes/md-dark-indigo.svg",imgAlt:"Material Dark Indigo",onClick:()=>c("md-dark-indigo","dark")}),a.jsx(m,{img:"/images/layout/themes/md-dark-deeppurple.svg",imgAlt:"Material Dark DeepPurple",onClick:()=>c("md-dark-deeppurple","dark")})]}),a.jsx("h5",{children:"Material Design Compact"}),a.jsxs("div",{className:"grid",children:[a.jsx(m,{img:"/images/layout/themes/md-light-indigo.svg",imgAlt:"Material Light Indigo",onClick:()=>c("mdc-light-indigo","light")}),a.jsx(m,{img:"/images/layout/themes/md-light-deeppurple.svg",imgAlt:"Material Light Deep Purple",onClick:()=>c("mdc-light-deeppurple","light")}),a.jsx(m,{img:"/images/layout/themes/md-dark-indigo.svg",imgAlt:"Material Dark Indigo",onClick:()=>c("mdc-dark-indigo","dark")}),a.jsx(m,{img:"/images/layout/themes/md-dark-deeppurple.svg",imgAlt:"Material Dark Deep Purple",onClick:()=>c("mdc-dark-deeppurple","dark")})]}),a.jsx("h5",{children:"Tailwind"}),a.jsx("div",{className:"grid",children:a.jsx(m,{img:"/images/layout/themes/tailwind-light.png",imgAlt:"Tailwind Light",onClick:()=>c("tailwind-light","light")})}),a.jsx("h5",{children:"Fluent UI"}),a.jsx("div",{className:"grid",children:a.jsx(m,{img:"/images/layout/themes/fluent-light.png",imgAlt:"Fluent Light",onClick:()=>c("fluent-light","light")})}),a.jsx("h5",{children:"PrimeOne Design - 2022"}),a.jsxs("div",{className:"grid",children:[a.jsx(m,{img:"/images/layout/themes/lara-light-indigo.png",imgAlt:"Lara Light Indigo",onClick:()=>c("lara-light-indigo","light")}),a.jsx(m,{img:"/images/layout/themes/lara-light-blue.png",imgAlt:"Lara Light Blue",onClick:()=>c("lara-light-blue","light")}),a.jsx(m,{img:"/images/layout/themes/lara-light-purple.png",imgAlt:"Lara Light Purple",onClick:()=>c("lara-light-purple","light")}),a.jsx(m,{img:"/images/layout/themes/lara-light-teal.png",imgAlt:"Lara Light Teal",onClick:()=>c("lara-light-teal","light")}),a.jsx(m,{img:"/images/layout/themes/lara-dark-indigo.png",imgAlt:"Lara Dark Indigo",onClick:()=>c("lara-dark-indigo","dark")}),a.jsx(m,{img:"/images/layout/themes/lara-dark-blue.png",imgAlt:"Lara Dark Blue",onClick:()=>c("lara-dark-blue","dark")}),a.jsx(m,{img:"/images/layout/themes/lara-dark-purple.png",imgAlt:"Lara Dark Purple",onClick:()=>c("lara-dark-purple","dark")}),a.jsx(m,{img:"/images/layout/themes/lara-dark-teal.png",imgAlt:"Lara Dark Teal",onClick:()=>c("lara-dark-teal","dark")})]}),a.jsx("h5",{children:"PrimeOne Design - 2021"}),a.jsxs("div",{className:"grid",children:[a.jsx(m,{img:"/images/layout/themes/saga-blue.png",imgAlt:"Saga Blue",onClick:()=>c("saga-blue","light")}),a.jsx(m,{img:"/images/layout/themes/saga-green.png",imgAlt:"Saga Green",onClick:()=>c("saga-green","light")}),a.jsx(m,{img:"/images/layout/themes/saga-orange.png",imgAlt:"Saga Orange",onClick:()=>c("saga-orange","dark")}),a.jsx(m,{img:"/images/layout/themes/saga-purple.png",imgAlt:"Saga Purple",onClick:()=>c("saga-purple","light")}),a.jsx(m,{img:"/images/layout/themes/vela-blue.png",imgAlt:"Vela Blue",onClick:()=>c("vela-blue","dark")}),a.jsx(m,{img:"/images/layout/themes/vela-green.png",imgAlt:"Vela Green",onClick:()=>c("vela-green","dark")}),a.jsx(m,{img:"/images/layout/themes/vela-orange.png",imgAlt:"Vela Orange",onClick:()=>c("vela-orange","dark")}),a.jsx(m,{img:"/images/layout/themes/vela-purple.png",imgAlt:"Vela Purple",onClick:()=>c("vela-purple","dark")}),a.jsx(m,{img:"/images/layout/themes/arya-blue.png",imgAlt:"Arya Blue",onClick:()=>c("arya-blue","dark")}),a.jsx(m,{img:"/images/layout/themes/arya-green.png",imgAlt:"Arya Green",onClick:()=>c("arya-green","dark")}),a.jsx(m,{img:"/images/layout/themes/arya-orange.png",imgAlt:"Arya Orange",onClick:()=>c("arya-orange","dark")}),a.jsx(m,{img:"/images/layout/themes/arya-purple.png",imgAlt:"Arya Purple",onClick:()=>c("arya-purple","dark")})]})]})]})},Ot=({children:n})=>{const{layoutConfig:t,layoutState:e,setLayoutState:i}=s.useContext(W),{setRipple:r}=s.useContext(Z),l=s.useRef(null),u=s.useRef(null),[f,b]=se({type:"click",listener:o=>{var k,y,d,p,S,N;!((k=u.current)!=null&&k.isSameNode(o.target)||(y=u.current)!=null&&y.contains(o.target)||(p=(d=l.current)==null?void 0:d.menubutton)!=null&&p.isSameNode(o.target)||(N=(S=l.current)==null?void 0:S.menubutton)!=null&&N.contains(o.target))&&g()}}),P=route().current();s.useEffect(()=>{g(),c()},[P]);const[x,j]=se({type:"click",listener:o=>{var k,y,d,p,S,N,D,M;!((y=(k=l.current)==null?void 0:k.topbarmenu)!=null&&y.isSameNode(o.target)||(p=(d=l.current)==null?void 0:d.topbarmenu)!=null&&p.contains(o.target)||(N=(S=l.current)==null?void 0:S.topbarmenubutton)!=null&&N.isSameNode(o.target)||(M=(D=l.current)==null?void 0:D.topbarmenubutton)!=null&&M.contains(o.target))&&c()}}),g=()=>{i(o=>({...o,overlayMenuActive:!1,staticMenuMobileActive:!1,menuHoverActive:!1})),b(),E()},c=()=>{i(o=>({...o,profileSidebarVisible:!1})),j()},O=()=>{document.body.classList?document.body.classList.add("blocked-scroll"):document.body.className+=" blocked-scroll"},E=()=>{document.body.classList?document.body.classList.remove("blocked-scroll"):document.body.className=document.body.className.replace(new RegExp("(^|\\b)"+"blocked-scroll".split(" ").join("|")+"(\\b|$)","gi")," ")};Q(()=>{r(t.ripple)}),s.useEffect(()=>{(e.overlayMenuActive||e.staticMenuMobileActive)&&f(),e.staticMenuMobileActive&&O()},[e.overlayMenuActive,e.staticMenuMobileActive]),s.useEffect(()=>{e.profileSidebarVisible&&x()},[e.profileSidebarVisible]),je(()=>{b(),j()});const I=w("layout-wrapper",{"layout-overlay":t.menuMode==="overlay","layout-static":t.menuMode==="static","layout-static-inactive":e.staticMenuDesktopInactive&&t.menuMode==="static","layout-overlay-active":e.overlayMenuActive,"layout-mobile-active":e.staticMenuMobileActive,"p-input-filled":t.inputStyle==="filled","p-ripple-disabled":!t.ripple});return a.jsx(Ge.Fragment,{children:a.jsxs("div",{className:I,children:[a.jsx(Ce,{ref:l}),a.jsx("div",{ref:u,className:"layout-sidebar",children:a.jsx(rt,{})}),a.jsxs("div",{className:"layout-main-container",children:[a.jsx("div",{className:"layout-main",children:n}),a.jsx(et,{})]}),a.jsx(Pt,{}),a.jsx("div",{className:"layout-mask"})]})})},At=Ot;export{At as L};
