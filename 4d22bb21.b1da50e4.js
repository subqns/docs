(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{176:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return b}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),u=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},y=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),y=r,b=s["".concat(o,".").concat(y)]||s[y]||d[y]||a;return n?i.a.createElement(b,c(c({ref:t},p),{},{components:n})):i.a.createElement(b,c({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=y;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<a;p++)o[p]=n[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},88:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),i=n(6),a=(n(0),n(176)),o={title:"Installation"},c={unversionedId:"ui-keyring/start/install",id:"ui-keyring/start/install",isDocsHomePage:!1,title:"Installation",description:"If you already use the @polkadot/api in your project (which is true in most cases), you don't need anything more than yarn add @polkadot/ui-keyring.",source:"@site/docs/ui-keyring/start/install.md",slug:"/ui-keyring/start/install",permalink:"/docs/ui-keyring/start/install",editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/ui-keyring/start/install.md",version:"current",sidebar:"reference",previous:{title:"Overview",permalink:"/docs/ui-keyring/start"},next:{title:"Initialization",permalink:"/docs/ui-keyring/start/init"}},l=[{value:"Initialization",id:"initialization",children:[]}],p={rightToc:l};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"If you already use the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/package/@polkadot/api"}),"@polkadot/api")," in your project (which is true in most cases), you don't need anything more than ",Object(a.b)("inlineCode",{parentName:"p"},"yarn add @polkadot/ui-keyring"),"."),Object(a.b)("p",null,"If however you use the ",Object(a.b)("inlineCode",{parentName:"p"},"ui-keyring")," independently (i.e. in an address generator, like the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/polkdot-js/ui"}),"examples")," you would need the ",Object(a.b)("inlineCode",{parentName:"p"},"keyring")," dependency as well, ",Object(a.b)("inlineCode",{parentName:"p"},"yarn add @polkadot/keyring @polkadot/ui-keyring"),". (In the first case the ",Object(a.b)("inlineCode",{parentName:"p"},"@polkadot/api")," already comes bundled with the base keyring, so no additional dependencies are needed)."),Object(a.b)("h2",{id:"initialization"},"Initialization"),Object(a.b)("p",null,"Now that we have it installed, let's start using the keyring with ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/ui-keyring/start/init"}),"initialization & loading"),"."))}u.isMDXComponent=!0}}]);