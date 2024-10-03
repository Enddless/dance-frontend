import{r as a}from"./react-38b596a0.js";import{i as p,g as U,r as O,j as y,A as L,p as j,s as S,m as T,a as w}from"./@remix-run-66572050.js";/**
 * React Router v6.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function R(){return R=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},R.apply(this,arguments)}const I=a.createContext(null),k=a.createContext(null),E=a.createContext(null),b=a.createContext(null),g=a.createContext({outlet:null,matches:[],isDataRoute:!1}),M=a.createContext(null);function ae(t,e){let{relative:r}=e===void 0?{}:e;x()||p(!1);let{basename:n,navigator:l}=a.useContext(E),{hash:o,pathname:s,search:u}=A(t,{relative:r}),i=s;return n!=="/"&&(i=s==="/"?n:y([n,s])),l.createHref({pathname:i,search:u,hash:o})}function x(){return a.useContext(b)!=null}function N(){return x()||p(!1),a.useContext(b).location}function J(t){a.useContext(E).static||a.useLayoutEffect(t)}function z(){let{isDataRoute:t}=a.useContext(g);return t?ee():_()}function _(){x()||p(!1);let t=a.useContext(I),{basename:e,navigator:r}=a.useContext(E),{matches:n}=a.useContext(g),{pathname:l}=N(),o=JSON.stringify(U(n).map(i=>i.pathnameBase)),s=a.useRef(!1);return J(()=>{s.current=!0}),a.useCallback(function(i,c){if(c===void 0&&(c={}),!s.current)return;if(typeof i=="number"){r.go(i);return}let d=O(i,JSON.parse(o),l,c.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:y([e,d.pathname])),(c.replace?r.replace:r.push)(d,c.state,c)},[e,r,o,l,t])}function A(t,e){let{relative:r}=e===void 0?{}:e,{matches:n}=a.useContext(g),{pathname:l}=N(),o=JSON.stringify(U(n).map(s=>s.pathnameBase));return a.useMemo(()=>O(t,JSON.parse(o),l,r==="path"),[t,o,l,r])}function V(t,e){return W(t,e)}function W(t,e,r){x()||p(!1);let{navigator:n}=a.useContext(E),{matches:l}=a.useContext(g),o=l[l.length-1],s=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let i=N(),c;if(e){var d;let f=typeof e=="string"?j(e):e;u==="/"||(d=f.pathname)!=null&&d.startsWith(u)||p(!1),c=f}else c=i;let v=c.pathname||"/",C=u==="/"?v:v.slice(u.length)||"/",m=T(t,{pathname:C}),h=X(m&&m.map(f=>Object.assign({},f,{params:Object.assign({},s,f.params),pathname:y([u,n.encodeLocation?n.encodeLocation(f.pathname).pathname:f.pathname]),pathnameBase:f.pathnameBase==="/"?u:y([u,n.encodeLocation?n.encodeLocation(f.pathnameBase).pathname:f.pathnameBase])})),l,r);return e&&h?a.createElement(b.Provider,{value:{location:R({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:L.Pop}},h):h}function q(){let t=H(),e=w(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),r=t instanceof Error?t.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return a.createElement(a.Fragment,null,a.createElement("h2",null,"Unexpected Application Error!"),a.createElement("h3",{style:{fontStyle:"italic"}},e),r?a.createElement("pre",{style:l},r):null,o)}const G=a.createElement(q,null);class K extends a.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,r){return r.location!==e.location||r.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||r.error,location:r.location,revalidation:e.revalidation||r.revalidation}}componentDidCatch(e,r){console.error("React Router caught the following error during render",e,r)}render(){return this.state.error?a.createElement(g.Provider,{value:this.props.routeContext},a.createElement(M.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Q(t){let{routeContext:e,match:r,children:n}=t,l=a.useContext(I);return l&&l.static&&l.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=r.route.id),a.createElement(g.Provider,{value:e},n)}function X(t,e,r){var n;if(e===void 0&&(e=[]),r===void 0&&(r=null),t==null){var l;if((l=r)!=null&&l.errors)t=r.matches;else return null}let o=t,s=(n=r)==null?void 0:n.errors;if(s!=null){let u=o.findIndex(i=>i.route.id&&(s==null?void 0:s[i.route.id]));u>=0||p(!1),o=o.slice(0,Math.min(o.length,u+1))}return o.reduceRight((u,i,c)=>{let d=i.route.id?s==null?void 0:s[i.route.id]:null,v=null;r&&(v=i.route.errorElement||G);let C=e.concat(o.slice(0,c+1)),m=()=>{let h;return d?h=v:i.route.Component?h=a.createElement(i.route.Component,null):i.route.element?h=i.route.element:h=u,a.createElement(Q,{match:i,routeContext:{outlet:u,matches:C,isDataRoute:r!=null},children:h})};return r&&(i.route.ErrorBoundary||i.route.errorElement||c===0)?a.createElement(K,{location:r.location,revalidation:r.revalidation,component:v,error:d,children:m(),routeContext:{outlet:null,matches:C,isDataRoute:!0}}):m()},null)}var D=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(D||{}),P=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(P||{});function Y(t){let e=a.useContext(I);return e||p(!1),e}function Z(t){let e=a.useContext(k);return e||p(!1),e}function $(t){let e=a.useContext(g);return e||p(!1),e}function F(t){let e=$(),r=e.matches[e.matches.length-1];return r.route.id||p(!1),r.route.id}function H(){var t;let e=a.useContext(M),r=Z(P.UseRouteError),n=F(P.UseRouteError);return e||((t=r.errors)==null?void 0:t[n])}function ee(){let{router:t}=Y(D.UseNavigateStable),e=F(P.UseNavigateStable),r=a.useRef(!1);return J(()=>{r.current=!0}),a.useCallback(function(l,o){o===void 0&&(o={}),r.current&&(typeof l=="number"?t.navigate(l):t.navigate(l,R({fromRouteId:e},o)))},[t,e])}function oe(t){let{to:e,replace:r,state:n,relative:l}=t;x()||p(!1);let{matches:o}=a.useContext(g),{pathname:s}=N(),u=z(),i=O(e,U(o).map(d=>d.pathnameBase),s,l==="path"),c=JSON.stringify(i);return a.useEffect(()=>u(JSON.parse(c),{replace:r,state:n,relative:l}),[u,c,l,r,n]),null}function te(t){p(!1)}function le(t){let{basename:e="/",children:r=null,location:n,navigationType:l=L.Pop,navigator:o,static:s=!1}=t;x()&&p(!1);let u=e.replace(/^\/*/,"/"),i=a.useMemo(()=>({basename:u,navigator:o,static:s}),[u,o,s]);typeof n=="string"&&(n=j(n));let{pathname:c="/",search:d="",hash:v="",state:C=null,key:m="default"}=n,h=a.useMemo(()=>{let f=S(c,u);return f==null?null:{location:{pathname:f,search:d,hash:v,state:C,key:m},navigationType:l}},[u,c,d,v,C,m,l]);return h==null?null:a.createElement(E.Provider,{value:i},a.createElement(b.Provider,{children:r,value:h}))}function ie(t){let{children:e,location:r}=t;return V(B(e),r)}new Promise(()=>{});function B(t,e){e===void 0&&(e=[]);let r=[];return a.Children.forEach(t,(n,l)=>{if(!a.isValidElement(n))return;let o=[...e,l];if(n.type===a.Fragment){r.push.apply(r,B(n.props.children,o));return}n.type!==te&&p(!1),!n.props.index||!n.props.children||p(!1);let s={id:n.props.id||o.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(s.children=B(n.props.children,o)),r.push(s)}),r}export{k as D,E as N,le as R,N as a,ae as b,I as c,z as d,oe as e,ie as f,te as g,A as u};
