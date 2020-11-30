(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{161:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),o=(a(0),a(164)),i={title:"Installation"},c={unversionedId:"api-contract/start/install",id:"api-contract/start/install",isDocsHomePage:!1,title:"Installation",description:"The @polkadot/api-contract packages is to be used alongside the @polkadot/api package. With that in-mind we can install from npm, so we are not going to waste too much time with the bare basics, just install the API & contracts extensions via",source:"@site/docs/api-contract/start/install.md",slug:"/api-contract/start/install",permalink:"/docs/api-contract/start/install",editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/api-contract/start/install.md",version:"current",sidebar:"reference",previous:{title:"Overview",permalink:"/docs/api-contract/start"},next:{title:"Basics",permalink:"/docs/api-contract/start/basics"}},s=[{value:"Notes on use",id:"notes-on-use",children:[]},{value:"Basic interfaces",id:"basic-interfaces",children:[]}],l={rightToc:s};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"@polkadot/api-contract")," packages is to be used alongside the ",Object(o.b)("inlineCode",{parentName:"p"},"@polkadot/api")," package. With that in-mind we can install ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.npmjs.com/package/@polkadot/api-contract"}),"from npm"),", so we are not going to waste too much time with the bare basics, just install the API & contracts extensions via"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"yarn add @polkadot/api @polkadot/api-contract")),Object(o.b)("p",null,"Generally you would want to keep the versions of the 2 in lock-step, which mean that if you upgrade one or the other, ensure that the versions continue to match."),Object(o.b)("h2",{id:"notes-on-use"},"Notes on use"),Object(o.b)("p",null,"Be aware that Substrate chains are different, which means that some chains will not have the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/substrate"}),"Substrate contracts palette")," installed. For instance relay chains such as Polkadot does not have this functionality, however may have parachains that do."),Object(o.b)("p",null,"Additionally the contracts palette and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/paritytech/ink"}),"ink!")," are still evolving. With the upgrade from ink! v2 to v3 the ABI structure has changed completely. As of the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/polkadot-js/api/releases/tag/v2.2.1"}),"polkadot-js API v2.2.1")," only ink! v3.0-rc1 and later is supported. If you are using an earlier version, this guide will not be useful since the wrapper interfaces have changed in a major may to support the new formats."),Object(o.b)("p",null,"For development purposes it generally is preferred to use a local development network, that way you can swap and purge contracts while developing."),Object(o.b)("h2",{id:"basic-interfaces"},"Basic interfaces"),Object(o.b)("p",null,"So we have it installed, you have a development chain running (see the ink! examples for that) and we can jump into actual real-world usage. But before we do, let's take a brief tour through the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api-contract/start/basics"}),"base classes and interfaces")," before we get into using them."))}p.isMDXComponent=!0},164:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return b}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(a),h=n,b=u["".concat(i,".").concat(h)]||u[h]||d[h]||o;return a?r.a.createElement(b,c(c({ref:t},l),{},{components:a})):r.a.createElement(b,c({ref:t},l))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"}}]);