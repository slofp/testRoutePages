var zt=Object.defineProperty;var Tt=(t,e,n)=>e in t?zt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var X=(t,e,n)=>(Tt(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function b(){}const It=t=>t;function Yt(t,e){for(const n in e)t[n]=e[n];return t}function kt(t){return t()}function ht(){return Object.create(null)}function Y(t){t.forEach(kt)}function ot(t){return typeof t=="function"}function Q(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Kt(t){return Object.keys(t).length===0}function Vt(t,e,n,s){if(t){const r=xt(t,e,n,s);return t[0](r)}}function xt(t,e,n,s){return t[1]&&s?Yt(n.ctx.slice(),t[1](s(e))):n.ctx}function Wt(t,e,n,s){if(t[2]&&s){const r=t[2](s(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const i=[],o=Math.max(e.dirty.length,r.length);for(let a=0;a<o;a+=1)i[a]=e.dirty[a]|r[a];return i}return e.dirty|r}return e.dirty}function Dt(t,e,n,s,r,i){if(r){const o=xt(e,n,s,i);t.p(o,r)}}function Ut(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let s=0;s<n;s++)e[s]=-1;return e}return-1}function mt(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}const St=typeof window<"u";let Bt=St?()=>window.performance.now():()=>Date.now(),at=St?t=>requestAnimationFrame(t):b;const j=new Set;function Ot(t){j.forEach(e=>{e.c(t)||(j.delete(e),e.f())}),j.size!==0&&at(Ot)}function Qt(t){let e;return j.size===0&&at(Ot),{promise:new Promise(n=>{j.add(e={c:t,f:n})}),abort(){j.delete(e)}}}function m(t,e){t.appendChild(e)}function Et(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Zt(t){const e=$("style");return e.textContent="/* empty */",Gt(Et(t),e),e.sheet}function Gt(t,e){return m(t.head||t,e),e.sheet}function F(t,e,n){t.insertBefore(e,n||null)}function x(t){t.parentNode&&t.parentNode.removeChild(t)}function $(t){return document.createElement(t)}function M(t){return document.createTextNode(t)}function S(){return M(" ")}function Jt(){return M("")}function Xt(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function H(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function te(t){return Array.from(t.childNodes)}function ee(t,e){e=""+e,t.data!==e&&(t.data=e)}function ne(t,e,{bubbles:n=!1,cancelable:s=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:s})}const W=new Map;let D=0;function re(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function se(t,e){const n={stylesheet:Zt(e),rules:{}};return W.set(t,n),n}function ie(t,e,n,s,r,i,o,a=0){const l=16.666/s;let c=`{
`;for(let _=0;_<=1;_+=l){const g=e+(n-e)*i(_);c+=_*100+`%{${o(g,1-g)}}
`}const d=c+`100% {${o(n,1-n)}}
}`,f=`__svelte_${re(d)}_${a}`,h=Et(t),{stylesheet:p,rules:u}=W.get(h)||se(h,t);u[f]||(u[f]=!0,p.insertRule(`@keyframes ${f} ${d}`,p.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${f} ${s}ms linear ${r}ms 1 both`,D+=1,f}function pt(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?i=>i.indexOf(e)<0:i=>i.indexOf("__svelte")===-1),r=n.length-s.length;r&&(t.style.animation=s.join(", "),D-=r,D||oe())}function oe(){at(()=>{D||(W.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&x(e)}),W.clear())})}let I;function P(t){I=t}function Z(){if(!I)throw new Error("Function called outside component initialization");return I}function ae(t){Z().$$.on_mount.push(t)}function ce(t,e){return Z().$$.context.set(t,e),e}function ct(t){return Z().$$.context.get(t)}function le(t){return Z().$$.context.has(t)}const A=[],gt=[];let L=[];const _t=[],Rt=Promise.resolve();let rt=!1;function Ct(){rt||(rt=!0,Rt.then(At))}function ue(){return Ct(),Rt}function N(t){L.push(t)}const tt=new Set;let R=0;function At(){if(R!==0)return;const t=I;do{try{for(;R<A.length;){const e=A[R];R++,P(e),fe(e.$$)}}catch(e){throw A.length=0,R=0,e}for(P(null),A.length=0,R=0;gt.length;)gt.pop()();for(let e=0;e<L.length;e+=1){const n=L[e];tt.has(n)||(tt.add(n),n())}L.length=0}while(A.length);for(;_t.length;)_t.pop()();rt=!1,tt.clear(),P(t)}function fe(t){if(t.fragment!==null){t.update(),Y(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(N)}}function de(t){const e=[],n=[];L.forEach(s=>t.indexOf(s)===-1?e.push(s):n.push(s)),n.forEach(s=>s()),L=e}let q;function he(){return q||(q=Promise.resolve(),q.then(()=>{q=null})),q}function bt(t,e,n){t.dispatchEvent(ne(`${e?"intro":"outro"}${n}`))}const K=new Set;let O;function me(){O={r:0,c:[],p:O}}function pe(){O.r||Y(O.c),O=O.p}function k(t,e){t&&t.i&&(K.delete(t),t.i(e))}function E(t,e,n,s){if(t&&t.o){if(K.has(t))return;K.add(t),O.c.push(()=>{K.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}const ge={duration:0};function Ht(t,e,n){const s={direction:"in"};let r=e(t,n,s),i=!1,o,a,l=0;function c(){o&&pt(t,o)}function d(){const{delay:h=0,duration:p=300,easing:u=It,tick:y=b,css:_}=r||ge;_&&(o=ie(t,0,1,p,h,u,_,l++)),y(0,1);const g=Bt()+h,G=g+p;a&&a.abort(),i=!0,N(()=>bt(t,!0,"start")),a=Qt(J=>{if(i){if(J>=G)return y(1,0),bt(t,!0,"end"),c(),i=!1;if(J>=g){const dt=u((J-g)/p);y(dt,1-dt)}}return i})}let f=!1;return{start(){f||(f=!0,pt(t),ot(r)?(r=r(s),he().then(d)):d())},invalidate(){f=!1},end(){i&&(c(),i=!1)}}}function V(t){t&&t.c()}function z(t,e,n){const{fragment:s,after_update:r}=t.$$;s&&s.m(e,n),N(()=>{const i=t.$$.on_mount.map(kt).filter(ot);t.$$.on_destroy?t.$$.on_destroy.push(...i):Y(i),t.$$.on_mount=[]}),r.forEach(N)}function T(t,e){const n=t.$$;n.fragment!==null&&(de(n.after_update),Y(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function _e(t,e){t.$$.dirty[0]===-1&&(A.push(t),Ct(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function lt(t,e,n,s,r,i,o=null,a=[-1]){const l=I;P(t);const c=t.$$={fragment:null,ctx:[],props:i,update:b,not_equal:r,bound:ht(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:ht(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(c.root);let d=!1;if(c.ctx=n?n(t,e.props||{},(f,h,...p)=>{const u=p.length?p[0]:h;return c.ctx&&r(c.ctx[f],c.ctx[f]=u)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](u),d&&_e(t,f)),h}):[],c.update(),d=!0,Y(c.before_update),c.fragment=s?s(c.ctx):!1,e.target){if(e.hydrate){const f=te(e.target);c.fragment&&c.fragment.l(f),f.forEach(x)}else c.fragment&&c.fragment.c();e.intro&&k(t.$$.fragment),z(t,e.target,e.anchor),At()}P(l)}class ut{constructor(){X(this,"$$");X(this,"$$set")}$destroy(){T(this,1),this.$destroy=b}$on(e,n){if(!ot(n))return b;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}$set(e){this.$$set&&!Kt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const be="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(be);const ye="/testRoutePages/assets/svelte-a39f39b7.svg",$e="/testRoutePages/vite.svg";function we(t){let e,n,s,r,i;return{c(){e=$("button"),n=M("count is "),s=M(t[0])},m(o,a){F(o,e,a),m(e,n),m(e,s),r||(i=Xt(e,"click",t[1]),r=!0)},p(o,[a]){a&1&&ee(s,o[0])},i:b,o:b,d(o){o&&x(e),r=!1,i()}}}function ve(t,e,n){let s=0;return[s,()=>{n(0,s+=1)}]}class ke extends ut{constructor(e){super(),lt(this,e,ve,we,Q,{})}}const C=[];function jt(t,e=b){let n;const s=new Set;function r(a){if(Q(t,a)&&(t=a,n)){const l=!C.length;for(const c of s)c[1](),C.push(c,t);if(l){for(let c=0;c<C.length;c+=2)C[c][0](C[c+1]);C.length=0}}}function i(a){r(a(t))}function o(a,l=b){const c=[a,l];return s.add(c),s.size===1&&(n=e(r,i)||b),a(t),()=>{s.delete(c),s.size===0&&n&&(n(),n=null)}}return{set:r,update:i,subscribe:o}}function st(t,e=!1){return t=t.slice(t.startsWith("/#")?2:0,t.endsWith("/*")?-2:void 0),t.startsWith("/")||(t="/"+t),t==="/"&&(t=""),e&&!t.endsWith("/")&&(t+="/"),t}function xe(t,e){t=st(t,!0),e=st(e,!0);let n=[],s={},r=!0,i=t.split("/").map(a=>a.startsWith(":")?(n.push(a.slice(1)),"([^\\/]+)"):a).join("\\/"),o=e.match(new RegExp(`^${i}$`));return o||(r=!1,o=e.match(new RegExp(`^${i}`))),o?(n.forEach((a,l)=>s[a]=o[l+1]),{exact:r,params:s,part:o[0].slice(0,-1)}):null}function Lt(t,e,n){if(n==="")return t;if(n[0]==="/")return n;let s=o=>o.split("/").filter(a=>a!==""),r=s(t);return"/"+(e?s(e):[]).map((o,a)=>r[a]).join("/")+"/"+n}function yt(t,e,n,s){let r=[e,"data-"+e].reduce((i,o)=>{let a=t.getAttribute(o);return n&&t.removeAttribute(o),a===null?i:a},!1);return!s&&r===""?!0:r||s||!1}function Se(t){let e=t.split("&").map(n=>n.split("=")).reduce((n,s)=>{let r=s[0];if(!r)return n;let i=s.length>1?s[s.length-1]:!0;return typeof i=="string"&&i.includes(",")&&(i=i.split(",")),n[r]===void 0?n[r]=[i]:n[r].push(i),n},{});return Object.entries(e).reduce((n,s)=>(n[s[0]]=s[1].length>1?s[1]:s[1][0],n),{})}function Oe(t){return Object.entries(t).map(([e,n])=>n?n===!0?e:`${e}=${Array.isArray(n)?n.join(","):n}`:null).filter(e=>e).join("&")}function $t(t,e){return t?e+t:""}function Mt(t){throw new Error("[Tinro] "+t)}var v={HISTORY:1,HASH:2,MEMORY:3,OFF:4,run(t,e,n,s){return t===this.HISTORY?e&&e():t===this.HASH?n&&n():s&&s()},getDefault(){return!window||window.location.pathname==="srcdoc"?this.MEMORY:this.HISTORY}},ft,Nt,Ft,U="",w=Ee();function Ee(){let t=v.getDefault(),e,n=o=>window.onhashchange=window.onpopstate=ft=null,s=o=>e&&e(et(t)),r=o=>{o&&(t=o),n(),t!==v.OFF&&v.run(t,a=>window.onpopstate=s,a=>window.onhashchange=s)&&s()},i=o=>{let a=Object.assign(et(t),o);return a.path+$t(Oe(a.query),"?")+$t(a.hash,"#")};return{mode:r,get:o=>et(t),go(o,a){Re(t,o,a),s()},start(o){e=o,r()},stop(){e=null,r(v.OFF)},set(o){this.go(i(o),!o.path)},methods(){return Ce(this)},base:o=>U=o}}function Re(t,e,n){!n&&(Nt=Ft);let s=r=>history[`${n?"replace":"push"}State`]({},"",r);v.run(t,r=>s(U+e),r=>s(`#${e}`),r=>ft=e)}function et(t){let e=window.location,n=v.run(t,r=>(U?e.pathname.replace(U,""):e.pathname)+e.search+e.hash,r=>String(e.hash.slice(1)||"/"),r=>ft||"/"),s=n.match(/^([^?#]+)(?:\?([^#]+))?(?:\#(.+))?$/);return Ft=n,{url:n,from:Nt,path:s[1]||"",query:Se(s[2]||""),hash:s[3]||""}}function Ce(t){let e=()=>t.get().query,n=o=>t.set({query:o}),s=o=>n(o(e())),r=()=>t.get().hash,i=o=>t.set({hash:o});return{hash:{get:r,set:i,clear:()=>i("")},query:{replace:n,clear:()=>n(""),get(o){return o?e()[o]:e()},set(o,a){s(l=>(l[o]=a,l))},delete(o){s(a=>(a[o]&&delete a[o],a))}}}}var it=Ae();function Ae(){let{subscribe:t}=jt(w.get(),e=>{w.start(e);let n=He(w.go);return()=>{w.stop(),n()}});return{subscribe:t,goto:w.go,params:je,meta:Ne,useHashNavigation:e=>w.mode(e?v.HASH:v.HISTORY),mode:{hash:()=>w.mode(v.HASH),history:()=>w.mode(v.HISTORY),memory:()=>w.mode(v.MEMORY)},base:w.base,location:w.methods()}}function He(t){let e=n=>{let s=n.target.closest("a[href]"),r=s&&yt(s,"target",!1,"_self"),i=s&&yt(s,"tinro-ignore"),o=n.ctrlKey||n.metaKey||n.altKey||n.shiftKey;if(r=="_self"&&!i&&!o&&s){let a=s.getAttribute("href").replace(/^\/#/,"");/^\/\/|^#|^[a-zA-Z]+:/.test(a)||(n.preventDefault(),t(a.startsWith("/")?a:s.href.replace(window.location.origin,"")))}};return addEventListener("click",e),()=>removeEventListener("click",e)}function je(){return ct("tinro").meta.params}var B="tinro",Le=qt({pattern:"",matched:!0});function Me(t){let e=ct(B)||Le;(e.exact||e.fallback)&&Mt(`${t.fallback?"<Route fallback>":`<Route path="${t.path}">`}  can't be inside ${e.fallback?"<Route fallback>":`<Route path="${e.path||"/"}"> with exact path`}`);let n=t.fallback?"fallbacks":"childs",s=jt({}),r=qt({fallback:t.fallback,parent:e,update(i){r.exact=!i.path.endsWith("/*"),r.pattern=st(`${r.parent.pattern||""}${i.path}`),r.redirect=i.redirect,r.firstmatch=i.firstmatch,r.breadcrumb=i.breadcrumb,r.match()},register:()=>(r.parent[n].add(r),async()=>{r.parent[n].delete(r),r.parent.activeChilds.delete(r),r.router.un&&r.router.un(),r.parent.match()}),show:()=>{t.onShow(),!r.fallback&&r.parent.activeChilds.add(r)},hide:()=>{t.onHide(),r.parent.activeChilds.delete(r)},match:async()=>{r.matched=!1;let{path:i,url:o,from:a,query:l}=r.router.location,c=xe(r.pattern,i);if(!r.fallback&&c&&r.redirect&&(!r.exact||r.exact&&c.exact)){let d=Lt(i,r.parent.pattern,r.redirect);return it.goto(d,!0)}r.meta=c&&{from:a,url:o,query:l,match:c.part,pattern:r.pattern,breadcrumbs:r.parent.meta&&r.parent.meta.breadcrumbs.slice()||[],params:c.params,subscribe:s.subscribe},r.breadcrumb&&r.meta&&r.meta.breadcrumbs.push({name:r.breadcrumb,path:c.part}),s.set(r.meta),c&&!r.fallback&&(!r.exact||r.exact&&c.exact)&&(!r.parent.firstmatch||!r.parent.matched)?(t.onMeta(r.meta),r.parent.matched=!0,r.show()):r.hide(),c&&r.showFallbacks()}});return ce(B,r),ae(()=>r.register()),r}function Ne(){return le(B)?ct(B).meta:Mt("meta() function must be run inside any `<Route>` child component only")}function qt(t){let e={router:{},exact:!1,pattern:null,meta:null,parent:null,fallback:!1,redirect:!1,firstmatch:!1,breadcrumb:null,matched:!1,childs:new Set,activeChilds:new Set,fallbacks:new Set,async showFallbacks(){if(!this.fallback&&(await ue(),this.childs.size>0&&this.activeChilds.size==0||this.childs.size==0&&this.fallbacks.size>0)){let n=this;for(;n.fallbacks.size==0;)if(n=n.parent,!n)return;n&&n.fallbacks.forEach(s=>{if(s.redirect){let r=Lt("/",s.parent.pattern,s.redirect);it.goto(r,!0)}else s.show()})}},start(){this.router.un||(this.router.un=it.subscribe(n=>{this.router.location=n,this.pattern!==null&&this.match()}))},match(){this.showFallbacks()}};return Object.assign(e,t),e.start(),e}const Fe=t=>({params:t&2,meta:t&4}),wt=t=>({params:t[1],meta:t[2]});function vt(t){let e;const n=t[9].default,s=Vt(n,t,t[8],wt);return{c(){s&&s.c()},m(r,i){s&&s.m(r,i),e=!0},p(r,i){s&&s.p&&(!e||i&262)&&Dt(s,n,r,r[8],e?Wt(n,r[8],i,Fe):Ut(r[8]),wt)},i(r){e||(k(s,r),e=!0)},o(r){E(s,r),e=!1},d(r){s&&s.d(r)}}}function qe(t){let e,n,s=t[0]&&vt(t);return{c(){s&&s.c(),e=Jt()},m(r,i){s&&s.m(r,i),F(r,e,i),n=!0},p(r,[i]){r[0]?s?(s.p(r,i),i&1&&k(s,1)):(s=vt(r),s.c(),k(s,1),s.m(e.parentNode,e)):s&&(me(),E(s,1,1,()=>{s=null}),pe())},i(r){n||(k(s),n=!0)},o(r){E(s),n=!1},d(r){r&&x(e),s&&s.d(r)}}}function Pe(t,e,n){let{$$slots:s={},$$scope:r}=e,{path:i="/*"}=e,{fallback:o=!1}=e,{redirect:a=!1}=e,{firstmatch:l=!1}=e,{breadcrumb:c=null}=e,d=!1,f={},h={};const p=Me({fallback:o,onShow(){n(0,d=!0)},onHide(){n(0,d=!1)},onMeta(u){n(2,h=u),n(1,f=h.params)}});return t.$$set=u=>{"path"in u&&n(3,i=u.path),"fallback"in u&&n(4,o=u.fallback),"redirect"in u&&n(5,a=u.redirect),"firstmatch"in u&&n(6,l=u.firstmatch),"breadcrumb"in u&&n(7,c=u.breadcrumb),"$$scope"in u&&n(8,r=u.$$scope)},t.$$.update=()=>{t.$$.dirty&232&&p.update({path:i,redirect:a,firstmatch:l,breadcrumb:c})},[d,f,h,i,o,a,l,c,r,s]}class nt extends ut{constructor(e){super(),lt(this,e,Pe,qe,Q,{path:3,fallback:4,redirect:5,firstmatch:6,breadcrumb:7})}}function ze(t){const e=t-1;return e*e*e+1}function Pt(t,{delay:e=0,duration:n=400,easing:s=ze,x:r=0,y:i=0,opacity:o=0}={}){const a=getComputedStyle(t),l=+a.opacity,c=a.transform==="none"?"":a.transform,d=l*(1-o),[f,h]=mt(r),[p,u]=mt(i);return{delay:e,duration:n,easing:s,css:(y,_)=>`
			transform: ${c} translate(${(1-y)*f}${h}, ${(1-y)*p}${u});
			opacity: ${l-d*_}`}}function Te(t){let e,n,s,r,i,o,a,l,c,d,f,h,p,u,y,_;return a=new ke({}),{c(){e=$("div"),n=$("div"),n.innerHTML=`<a href="https://vitejs.dev" target="_blank" rel="noreferrer"><img src="${$e}" class="logo svelte-1rtig6w" alt="Vite Logo"/></a> <a href="https://svelte.dev" target="_blank" rel="noreferrer"><img src="${ye}" class="logo svelte svelte-1rtig6w" alt="Svelte Logo"/></a>`,s=S(),r=$("h1"),r.textContent="Vite + Svelte",i=S(),o=$("div"),V(a.$$.fragment),l=S(),c=$("a"),d=M("/aaa に移動"),f=S(),h=$("p"),h.innerHTML='Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">SvelteKit</a>, the official Svelte app framework powered by Vite!',p=S(),u=$("p"),u.textContent="Click on the Vite and Svelte logos to learn more",H(c,"class","route-btn"),H(c,"href",`${t[0]}/aaa`),H(o,"class","card"),H(u,"class","read-the-docs svelte-1rtig6w")},m(g,G){F(g,e,G),m(e,n),m(e,s),m(e,r),m(e,i),m(e,o),z(a,o,null),m(o,l),m(o,c),m(c,d),m(e,f),m(e,h),m(e,p),m(e,u),_=!0},p:b,i(g){_||(k(a.$$.fragment,g),g&&(y||N(()=>{y=Ht(e,Pt,{x:200}),y.start()})),_=!0)},o(g){E(a.$$.fragment,g),_=!1},d(g){g&&x(e),T(a)}}}function Ie(t){let e,n,s,r;return{c(){e=$("div"),n=$("a"),s=M("/ に移動"),H(n,"class","route-btn"),H(n,"href",t[0])},m(i,o){F(i,e,o),m(e,n),m(n,s)},p:b,i(i){i&&(r||N(()=>{r=Ht(e,Pt,{x:200}),r.start()}))},o:b,d(i){i&&x(e)}}}function Ye(t){let e;return{c(){e=$("p"),e.textContent="No site"},m(n,s){F(n,e,s)},p:b,d(n){n&&x(e)}}}function Ke(t){let e,n,s,r,i,o,a;return n=new nt({props:{path:t[0],$$slots:{default:[Te]},$$scope:{ctx:t}}}),r=new nt({props:{path:`${t[0]}/aaa`,$$slots:{default:[Ie]},$$scope:{ctx:t}}}),o=new nt({props:{fallback:!0,$$slots:{default:[Ye]},$$scope:{ctx:t}}}),{c(){e=$("main"),V(n.$$.fragment),s=S(),V(r.$$.fragment),i=S(),V(o.$$.fragment)},m(l,c){F(l,e,c),z(n,e,null),m(e,s),z(r,e,null),m(e,i),z(o,e,null),a=!0},p(l,[c]){const d={};c&2&&(d.$$scope={dirty:c,ctx:l}),n.$set(d);const f={};c&2&&(f.$$scope={dirty:c,ctx:l}),r.$set(f);const h={};c&2&&(h.$$scope={dirty:c,ctx:l}),o.$set(h)},i(l){a||(k(n.$$.fragment,l),k(r.$$.fragment,l),k(o.$$.fragment,l),a=!0)},o(l){E(n.$$.fragment,l),E(r.$$.fragment,l),E(o.$$.fragment,l),a=!1},d(l){l&&x(e),T(n),T(r),T(o)}}}function Ve(t){return["/testRoutePages"]}class We extends ut{constructor(e){super(),lt(this,e,Ve,Ke,Q,{})}}new We({target:document.getElementById("app")});
