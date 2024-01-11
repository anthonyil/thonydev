(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[133],{3426:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/thony_animtogether/Frameworks/qb-core",function(){return r(7013)}])},7013:function(e,s,r){"use strict";r.r(s),r.d(s,{__toc:function(){return t}});var o=r(5893),n=r(2673),i=r(2643),l=r(9013);let t=[{depth:2,value:"Config.lua",id:"configlua"},{depth:3,value:"Pr\xe9-configura\xe7\xe3o",id:"pr\xe9-configura\xe7\xe3o"},{depth:3,value:"Fun\xe7\xe3o de Permiss\xe3o",id:"fun\xe7\xe3o-de-permiss\xe3o"},{depth:3,value:"Coletar o source do jogador",id:"coletar-o-source-do-jogador"}];function _createMdxContent(e){let s=Object.assign({h1:"h1",p:"p",strong:"strong",h2:"h2",h3:"h3",pre:"pre",code:"code",span:"span"},(0,i.a)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.h1,{children:"Configura\xe7\xe3o (Qb-core)"}),"\n",(0,o.jsxs)(s.p,{children:["Configura\xe7\xe3o dos sistemas do script para a framework ",(0,o.jsx)(s.strong,{children:"Qb-Core"}),"."]}),"\n",(0,o.jsx)(s.h2,{id:"configlua",children:"Config.lua"}),"\n",(0,o.jsxs)(l.Rg,{children:[(0,o.jsx)(s.h3,{id:"pr\xe9-configura\xe7\xe3o",children:"Pr\xe9-configura\xe7\xe3o"}),(0,o.jsx)(s.p,{children:"Adicione a fun\xe7\xe3o abaixo no topo do config.lua, para o acionamento das fun\xe7\xf5es Qb-Core."}),(0,o.jsx)(s.pre,{"data-language":"bash","data-theme":"default",children:(0,o.jsx)(s.code,{"data-language":"bash","data-theme":"default",children:(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"QBCore"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"exports["}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"qb-core"'}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"]:GetCoreObject"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]})})}),(0,o.jsx)(s.h3,{id:"fun\xe7\xe3o-de-permiss\xe3o",children:"Fun\xe7\xe3o de Permiss\xe3o"}),(0,o.jsx)(s.p,{children:'Substitua a fun\xe7\xe3o "Thony.PermissionFunction" pela fun\xe7\xe3o abaixo:'}),(0,o.jsx)(s.pre,{"data-language":"bash","data-theme":"default",children:(0,o.jsxs)(s.code,{"data-language":"bash","data-theme":"default",children:[(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Thony.PermissionFunction"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"function"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"source"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:",perm)"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"--Server-Side"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"hasPerm"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"QBCore.Functions.HasPermission"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"source"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"perm"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"hasPerm"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"then"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"true"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"false"})]}),"\n",(0,o.jsx)(s.span,{className:"line",children:(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"})})]})}),(0,o.jsx)(s.h3,{id:"coletar-o-source-do-jogador",children:"Coletar o source do jogador"}),(0,o.jsx)(s.p,{children:'Substitua a fun\xe7\xe3o "Thony.GetSourceFunction" pela fun\xe7\xe3o abaixo:'}),(0,o.jsx)(s.pre,{"data-language":"bash","data-theme":"default",children:(0,o.jsxs)(s.code,{"data-language":"bash","data-theme":"default",children:[(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Thony.GetSourceFunction"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"function"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"id"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"--Server-Side"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"source"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"QBCore.Functions.GetSource"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"id"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"source"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"then"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"source"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"false"})]}),"\n",(0,o.jsx)(s.span,{className:"line",children:(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"})})]})})]})]})}s.default=(0,n.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,i.a)(),e.components);return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/thony_animtogether/Frameworks/qb-core.mdx",route:"/thony_animtogether/Frameworks/qb-core",timestamp:1704953621e3,title:"Configura\xe7\xe3o (Qb-core)",headings:t},pageNextRoute:"/thony_animtogether/Frameworks/qb-core"})}},function(e){e.O(0,[673,774,888,179],function(){return e(e.s=3426)}),_N_E=e.O()}]);