import{r as g}from"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";var k={exports:{}},R={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P=g,Y=Symbol.for("react.element"),X=Symbol.for("react.fragment"),C=Object.prototype.hasOwnProperty,V=P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,W={key:!0,ref:!0,__self:!0,__source:!0};function S(e,r,o){var t,a={},s=null,u=null;o!==void 0&&(s=""+o),r.key!==void 0&&(s=""+r.key),r.ref!==void 0&&(u=r.ref);for(t in r)C.call(r,t)&&!W.hasOwnProperty(t)&&(a[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps,r)a[t]===void 0&&(a[t]=r[t]);return{$$typeof:Y,type:e,key:s,ref:u,props:a,_owner:V.current}}R.Fragment=X;R.jsx=S;R.jsxs=S;k.exports=R;var D=k.exports;const F=D.Fragment,n=D.jsx,$=D.jsxs,U=({reverse:e,maxMouseRange:r,maxOrientationRange:o=r})=>{const t=g.useRef(null);return g.useEffect(()=>{const a=c=>Math.sin(Math.PI*c/180);let s;const u=({beta:c,gamma:l})=>{c===null||l===null||(s=requestAnimationFrame(()=>{if(!t.current)return;const m=o*(e?-1:1);window.screen.orientation.type.includes("landscape")?t.current.style.transform=`translateX(${a(c)*m}px) translateY(${a(l*2)*m}px)`:t.current.style.transform=`translateX(${a(l*2)*m}px) translateY(${a(c)*m}px)`}))},v=({clientX:c,clientY:l})=>{s=requestAnimationFrame(()=>{if(!t.current)return;const m=r*(e?-1:1),L=m/(window.innerWidth/2),b=m/(window.innerHeight/2),{top:q,left:A,width:B,height:I}=t.current.getBoundingClientRect();t.current.style.transform=`translateX(${L*(c-A-B/2)}px) translateY(${b*(l-q-I/2)}px)`})};return window.addEventListener("mousemove",v),window.addEventListener("deviceorientation",u),()=>{s&&cancelAnimationFrame(s),window.removeEventListener("mousemove",v),window.removeEventListener("deviceorientation",u)}},[e,r,o]),t},i=({reverse:e,children:r,maxMouseRange:o,maxOrientationRange:t})=>{const a=U({reverse:e,maxMouseRange:o,maxOrientationRange:t});return r({ref:a})};try{i.displayName="Drifting",i.__docgenInfo={description:"",displayName:"Drifting",props:{reverse:{defaultValue:null,description:"",name:"reverse",required:!1,type:{name:"boolean"}},maxMouseRange:{defaultValue:null,description:"",name:"maxMouseRange",required:!0,type:{name:"number"}},maxOrientationRange:{defaultValue:null,description:"",name:"maxOrientationRange",required:!1,type:{name:"number"}}}}}catch{}const h=g.forwardRef((e,r)=>n("div",{ref:r,className:"background"})),p=g.forwardRef(({text:e,className:r},o)=>n("div",{ref:o,className:"text-wrapper",children:n("h1",{className:r,children:e})})),z={title:"Drifting",component:({children:e})=>n("div",{className:"wrapper",children:e})},d={args:{children:n(i,{maxMouseRange:20,children:e=>n(h,{...e})})}},x={args:{children:$(F,{children:[n(i,{maxMouseRange:20,children:e=>n(h,{...e})}),n(i,{maxMouseRange:50,maxOrientationRange:20,reverse:!0,children:e=>n(p,{...e,text:"Drifting component",className:"title"})})]})}},f={args:{children:$(F,{children:[n(i,{maxMouseRange:15,maxOrientationRange:15,children:e=>n(h,{...e})}),n(i,{maxMouseRange:50,maxOrientationRange:20,reverse:!0,children:e=>n(p,{...e,text:"Drifting component",className:"title"})}),n(i,{maxMouseRange:70,maxOrientationRange:30,children:e=>n(p,{...e,text:"🛩",className:"emoji-1"})}),n(i,{maxMouseRange:100,maxOrientationRange:40,reverse:!0,children:e=>n(p,{...e,text:"🚀",className:"emoji-2"})}),n(i,{maxMouseRange:300,maxOrientationRange:80,children:e=>n(p,{...e,text:"🚚",className:"emoji-3"})}),n(i,{maxMouseRange:150,maxOrientationRange:60,reverse:!0,children:e=>n(p,{...e,text:"☁️",className:"emoji-4"})})]})}};var _,O,w;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    children: <Drifting maxMouseRange={20}>{props => <Background {...props} />}</Drifting>
  }
}`,...(w=(O=d.parameters)==null?void 0:O.docs)==null?void 0:w.source}}};var y,M,N;x.parameters={...x.parameters,docs:{...(y=x.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: <>
        <Drifting maxMouseRange={20}>{props => <Background {...props} />}</Drifting>

        <Drifting maxMouseRange={50} maxOrientationRange={20} reverse>
          {props => <Text {...props} text="Drifting component" className="title" />}
        </Drifting>
      </>
  }
}`,...(N=(M=x.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var E,j,T;f.parameters={...f.parameters,docs:{...(E=f.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    children: <>
        <Drifting maxMouseRange={15} maxOrientationRange={15}>
          {props => <Background {...props} />}
        </Drifting>

        <Drifting maxMouseRange={50} maxOrientationRange={20} reverse>
          {props => <Text {...props} text="Drifting component" className="title" />}
        </Drifting>

        <Drifting maxMouseRange={70} maxOrientationRange={30}>
          {props => <Text {...props} text="🛩" className="emoji-1" />}
        </Drifting>

        <Drifting maxMouseRange={100} maxOrientationRange={40} reverse>
          {props => <Text {...props} text="🚀" className="emoji-2" />}
        </Drifting>

        <Drifting maxMouseRange={300} maxOrientationRange={80}>
          {props => <Text {...props} text="🚚" className="emoji-3" />}
        </Drifting>

        <Drifting maxMouseRange={150} maxOrientationRange={60} reverse>
          {props => <Text {...props} text="☁️" className="emoji-4" />}
        </Drifting>
      </>
  }
}`,...(T=(j=f.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};export{f as AllInOne,d as Simple,x as WithText,z as default};
