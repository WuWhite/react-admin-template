(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"/aUa":function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.GlobalHeader=void 0,a("Pwec");var l=n(a("CtXQ")),u=n(a("2Taf")),r=n(a("vZ4D")),c=n(a("l4Ni")),i=n(a("ujKo")),o=n(a("MhPg"));a("Znn+");var d=n(a("ZTPi")),f=n(a("q1tI")),s=a("Y2fQ"),m=n(a("Bkgc"));a("4ak/");var p=d.default.TabPane,v=function(e){function t(){var e;return(0,u.default)(this,t),e=(0,c.default)(this,(0,i.default)(t).apply(this,arguments)),e.handleTabClick=function(t){var a=e.props,n=a.tabList,l=a.onTabClick;n.forEach(function(e){e.id===t&&l&&l(e)})},e.handleTabEdit=function(t,a){var n=e.props.onTabRemove;"remove"===a&&n&&n(t)},e}return(0,o.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){var e=this.props,t=e.prefixCls,a=e.onMenuClick,n=e.currentUser,u=e.tabList;return f.default.createElement("div",{className:t},u&&f.default.createElement(d.default,{defaultActiveKey:"1",tabPosition:"top",type:1===u.length?"card":"editable-card",hideAdd:!0,onTabClick:this.handleTabClick,onEdit:this.handleTabEdit},u.map(function(e){return f.default.createElement(p,{tab:f.default.createElement("span",null,e.menuData.icon&&f.default.createElement(l.default,{type:e.menuData.icon}),f.default.createElement(s.FormattedMessage,{id:e.menuData.locale})),key:e.id})})),f.default.createElement(m.default,{prefixCls:t,onMenuClick:a,currentUser:n}))}}]),t}(f.default.Component);t.GlobalHeader=v,v.defaultProps={prefixCls:"global-header"}},"1A6D":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a("P56V"),l=n.HeaderDropdown;t.default=l},"3PSz":function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("Pwec");var l=n(a("CtXQ")),u=a("LeJ0"),r=u.SETTING_DEFAULT_CONFIG.iconFontUrl,c=l.default.createFromIconfontCN({scriptUrl:r});t.default=c},"4ak/":function(e,t,a){},"5aYj":function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.GlobalFooter=void 0;var l=n(a("eHn4")),u=n(a("q1tI")),r=n(a("TSYQ"));a("fpAY");var c=function(e){var t=e.prefixCls,a=e.className,n=e.style,c=e.links,i=e.copyright;return u.default.createElement("div",{className:(0,r.default)(a,(0,l.default)({},"".concat(t),!0)),style:n},c&&u.default.createElement("div",{className:"".concat(t,"__links")},c.map(function(e){return u.default.createElement("a",{key:e.key,title:e.key,target:e.blankTarget?"_blank":"_self",href:e.href},e.title)})),i&&u.default.createElement("div",{className:"".concat(t,"__copyright")},i))};t.GlobalFooter=c,c.defaultProps={prefixCls:"global-footer"}},"8uky":function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("B9cy");var l=n(a("Ol7k")),u=n(a("q1tI")),r=n(a("xjoZ")),c=n(a("UOvj")),i=l.default.Footer,o=function(){return u.default.createElement(i,{style:{padding:0}},u.default.createElement(r.default,{copyright:u.default.createElement(c.default,null)}))},d=o;t.default=d},"8wGe":function(e,t,a){"use strict";var n=a("tAuX"),l=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=l(a("2Taf")),r=l(a("vZ4D")),c=l(a("l4Ni")),i=l(a("ujKo")),o=l(a("MhPg"));a("B9cy");var d=l(a("Ol7k")),f=n(a("mrSG")),s=l(a("q1tI")),m=l(a("usdK")),p=a("MuoO"),v=l(a("gmT9"));a("aQoR");var g=d.default.Header,M=function(e){function t(){var e;return(0,u.default)(this,t),e=(0,c.default)(this,(0,i.default)(t).apply(this,arguments)),e.handleMenuClick=function(t){e.props.dispatch;"account-center"!==t||m.default.push("/account/center")},e.handleTabClick=function(e){var t=e.location;m.default.push(t.pathname)},e.handleTabRemove=function(t){var a=e.props.dispatch;a({type:"global/fetchRemoveTab",payload:t})},e}return(0,o.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){return s.default.createElement(g,{style:{padding:0}},s.default.createElement(v.default,Object.assign({onMenuClick:this.handleMenuClick,onTabClick:this.handleTabClick,onTabRemove:this.handleTabRemove},this.props)))}}]),t}(s.default.Component);M=f.__decorate([(0,p.connect)(function(e){var t=e.user;return{currentUser:t.currentUser}})],M);var y=(0,p.connect)(function(e){var t=e.global;return{tabList:t.tabList}})(M);t.default=y},"9rrR":function(e,t,a){},Bkgc:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("T2oS");var l=n(a("W9HT"));a("Telt");var u=n(a("Tckk")),r=n(a("eHn4"));a("Pwec");var c=n(a("CtXQ"));a("lUTK");var i=n(a("BvKs")),o=n(a("2Taf")),d=n(a("vZ4D")),f=n(a("l4Ni")),s=n(a("ujKo")),m=n(a("MhPg")),p=n(a("q1tI")),v=n(a("TSYQ")),g=a("Y2fQ"),M=n(a("1A6D")),y=n(a("tRwZ")),h=function(e){function t(){var e;return(0,o.default)(this,t),e=(0,f.default)(this,(0,s.default)(t).apply(this,arguments)),e.handleMenuClick=function(t){var a=t.key,n=e.props.onMenuClick;n&&n(a)},e}return(0,m.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){var e,t=this.props,a=t.prefixCls,n=t.currentUser,o=void 0===n?{}:n,d=p.default.createElement(i.default,{className:"".concat(a,"__menu"),selectedKeys:[],onClick:this.handleMenuClick},p.default.createElement(i.default.Item,{key:"account-center"},p.default.createElement(c.default,{type:"user"}),p.default.createElement(g.FormattedMessage,{id:"menu.account.center",defaultMessage:"account center"})),p.default.createElement(i.default.Item,{key:"account-settings"},p.default.createElement(c.default,{type:"setting"}),p.default.createElement(g.FormattedMessage,{id:"menu.account.settings",defaultMessage:"account settings"})),p.default.createElement(i.default.Divider,null),p.default.createElement(i.default.Item,{key:"logout"},p.default.createElement(c.default,{type:"logout"}),p.default.createElement(g.FormattedMessage,{id:"menu.account.logout",defaultMessage:"logout"})));return p.default.createElement("div",{className:"".concat(a,"__right")},p.default.createElement(y.default,{className:"".concat(a,"__action")}),o.name?p.default.createElement(M.default,{overlay:d},p.default.createElement("span",{className:(0,v.default)((e={},(0,r.default)(e,"".concat(a,"__action"),!0),(0,r.default)(e,"".concat(a,"__account"),!0),e))},p.default.createElement(u.default,{size:"small",src:o.avatar,alt:"avatar"}),p.default.createElement("span",null,o.name))):p.default.createElement(l.default,{size:"small",style:{marginLeft:8,marginRight:8}}))}}]),t}(p.default.Component),E=h;t.default=E},CizF:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a("eHn4")),u=n(a("gWZ8")),r=n(a("2Taf")),c=n(a("vZ4D")),i=n(a("l4Ni")),o=n(a("ujKo")),d=n(a("MhPg"));a("B9cy");var f=n(a("Ol7k")),s=n(a("q1tI")),m=n(a("mOP9")),p=n(a("TSYQ")),v=n(a("wcm/")),g=n(a("i1Aq")),M=a("EIXR"),y=a("LeJ0");a("9rrR");var h=f.default.Sider,E=y.APP_DEFAULT_CONFIG.title,b=!0,N=function(e){function t(){var e;return(0,r.default)(this,t),e=(0,i.default)(this,(0,o.default)(t).apply(this,arguments)),e.state={openKeys:(0,M.getDefaultCollapsedSubMenus)(e.props)},e.isMainMenu=function(t){var a=e.props.menuData;return a.some(function(e){return!!t&&(e.key===t||e.path===t)})},e.handleOpenChange=function(t){var a=t.filter(function(t){return e.isMainMenu(t)}).length>1;e.setState({openKeys:a?[t.pop()]:(0,u.default)(t)})},e}return(0,d.default)(t,e),(0,c.default)(t,[{key:"componentDidMount",value:function(){b=!1}},{key:"render",value:function(){var e,t=this.props,a=t.prefixCls,n=t.collapsed,u=t.onCollapse,r=t.theme,c=t.fixedSide,i=t.logo,o=(t.isMobile,this.state.openKeys),d=n?{}:{openKeys:o};return s.default.createElement(h,{collapsible:!0,trigger:null,collapsed:n,breakpoint:"lg",onCollapse:function(e){b&&u(e)},width:275,theme:r,className:(0,p.default)(a,(e={},(0,l.default)(e,"".concat(a,"__fixed"),c),(0,l.default)(e,"".concat(a,"__light"),"light"===r),e))},s.default.createElement("div",{className:"".concat(a,"__logo")},s.default.createElement(m.default,{to:"/"},s.default.createElement("img",{src:i,alt:"logo"}),s.default.createElement("h1",null,E))),s.default.createElement(s.default.Suspense,{fallback:s.default.createElement(v.default,null)},s.default.createElement(g.default,Object.assign({},this.props,{mode:"inline",onOpenChange:this.handleOpenChange,style:{padding:"16px 0",width:"100%"}},d))))}}]),t}(s.default.Component);N.defaultProps={prefixCls:"side-menu",flatMenuKeys:[],onCollapse:function(){},isMobile:!1,openKeys:[],collapsed:!1,menuData:[],onOpenChange:function(){}};var I=N;t.default=I},CsvX:function(e,t,a){},EIXR:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.getDefaultCollapsedSubMenus=t.getMenuMatches=t.getFlatMenuKeys=t.getIcon=void 0;var l=n(a("gWZ8"));a("Pwec");var u=n(a("CtXQ")),r=n(a("q1tI")),c=n(a("bALw")),i=n(a("3PSz")),o=a("IavW"),d=a("c+yx"),f=function(e){return"string"===typeof e?(0,d.isUrl)(e)?r.default.createElement(u.default,{component:function(){return r.default.createElement("img",{src:e,alt:"icon",className:"side-menu__icon"})}}):e.startsWith("icon-")?r.default.createElement(i.default,{type:e}):r.default.createElement(u.default,{type:e}):e};t.getIcon=f;var s=function e(t){var a=[];return t.forEach(function(t){a.push(t.path),t.children&&(a=a.concat(e(t.children)))}),a};t.getFlatMenuKeys=s;var m=function(e,t){return e.filter(function(e){return!!e&&(0,c.default)(e).test(t)})};t.getMenuMatches=m;var p=function(e){var t=e.location.pathname,a=e.flatMenuKeys;return(0,o.urlToList)(t).map(function(e){return m(a,e)[0]}).filter(function(e){return e}).reduce(function(e,t){return[].concat((0,l.default)(e),[t])},["/"])};t.getDefaultCollapsedSubMenus=p},HHCq:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.moGetPageTitle=t.moGetTitle=t.matchParamsPath=void 0;var l=n(a("Y+p1")),u=n(a("Wwog")),r=n(a("bALw")),c=a("Y2fQ"),i=a("LeJ0"),o=i.APP_DEFAULT_CONFIG.title,d=i.SETTING_DEFAULT_CONFIG.menu,f=function(e,t){var a=Object.keys(t).find(function(t){return(0,r.default)(t).test(e)});return t[a]};t.matchParamsPath=f;var s=function(e,t){var a=f(e,t);if(!a)return o;var n=d.disableLocal?a.name:(0,c.formatMessage)({id:a.locale||a.name,defaultMessage:a.name});return"".concat(n," \xb7 ").concat(o)},m=function(e,t){var a=f(e,t);if(!a)return o;var n=d.disableLocal?a.name:(0,c.formatMessage)({id:a.locale||a.name,defaultMessage:a.name});return"".concat(n)},p=(0,u.default)(m,l.default);t.moGetTitle=p;var v=(0,u.default)(s,l.default);t.moGetPageTitle=v},IRRO:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.SelectLang=void 0,a("Pwec");var l=n(a("CtXQ")),u=n(a("eHn4"));a("lUTK");var r=n(a("BvKs")),c=n(a("q1tI")),i=n(a("TSYQ")),o=a("Y2fQ"),d=n(a("1A6D"));a("q/j5");var f={"zh-CN":{label:"\u7b80\u4f53\u4e2d\u6587",icon:"\ud83c\udde8\ud83c\uddf3"},"en-US":{label:"English",icon:"\ud83c\uddec\ud83c\udde7"}},s=function(e){var t=e.className,a=e.prefixCls,n=(0,o.getLocale)(),s=function(e){var t=e.key;(0,o.setLocale)(t)},m=c.default.createElement(r.default,{className:"".concat(a,"__menu"),selectedKeys:[n],onClick:s},Object.keys(f).map(function(e){var t=f[e];return c.default.createElement(r.default.Item,{key:e},c.default.createElement("span",{role:"img","aria-label":t.label},t.icon)," ",t.label)}));return c.default.createElement(d.default,{overlay:m,placement:"bottomRight"},c.default.createElement("span",{className:(0,i.default)(t,(0,u.default)({},"".concat(a,"__dropdown"),!0))},c.default.createElement(l.default,{type:"global",title:(0,o.formatMessage)({id:"navBar.lang"})})))};t.SelectLang=s,s.defaultProps={prefixCls:"select-lang"}},P56V:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.HeaderDropdown=void 0,a("qVdP");var l=n(a("jsC+")),u=n(a("Y/ft")),r=n(a("q1tI")),c=n(a("TSYQ"));a("CsvX");var i=function(e){var t=e.prefixCls,a=e.overlayClassName,n=(0,u.default)(e,["prefixCls","overlayClassName"]);return r.default.createElement(l.default,Object.assign({overlayClassName:(0,c.default)(t,a)},n))};t.HeaderDropdown=i,i.defaultProps={prefixCls:"header-dropdown"}},QBzw:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a("q1tI"),l=(0,n.createContext)({});t.default=l},TOiX:function(e,t,a){},UOvj:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("Pwec");var l=n(a("CtXQ")),u=n(a("q1tI")),r=a("LeJ0"),c=r.APP_DEFAULT_CONFIG.companyName,i=function(){return u.default.createElement("div",null,"Copyright ",u.default.createElement(l.default,{type:"copyright"})," 2019",c,"\u6280\u672f\u90e8\u51fa\u54c1")},o=i;t.default=o},aQoR:function(e,t,a){},"c+yx":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isUrl=l,t.isPromise=u,t.urlRegexp=void 0;var n=/(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;function l(e){return n.test(e)}function u(e){return!!e&&"function"===typeof e.then}t.urlRegexp=n},fpAY:function(e,t,a){},gmT9:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a("/aUa"),l=n.GlobalHeader;t.default=l},hFYC:function(e,t,a){"use strict";var n=a("tAuX"),l=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ISideMenuProps",{enumerable:!0,get:function(){return c.ISideMenuProps}}),Object.defineProperty(t,"IMenu",{enumerable:!0,get:function(){return o.IMenu}}),t.default=void 0;var u=l(a("qIgq")),r=n(a("q1tI")),c=n(a("CizF")),i=a("EIXR"),o=a("i1Aq"),d=function(e){var t=e.menuData,a=(0,i.getFlatMenuKeys)(t),n=(0,r.useState)(!0),l=(0,u.default)(n,2),o=l[0],d=l[1],f=function(e){d(e)};return r.default.createElement("div",{onMouseEnter:function(){f(!1)},onMouseLeave:function(){f(!0)}},r.default.createElement(c.default,Object.assign({},e,{flatMenuKeys:a,collapsed:o})))},f=r.default.memo(d);t.default=f},i1Aq:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a("gWZ8")),u=n(a("2Taf")),r=n(a("vZ4D")),c=n(a("l4Ni")),i=n(a("ujKo")),o=n(a("MhPg"));a("lUTK");var d=n(a("BvKs")),f=n(a("q1tI")),s=n(a("mOP9")),m=a("IavW"),p=a("EIXR"),v=d.default.SubMenu,g=function(e){function t(){var e;return(0,u.default)(this,t),e=(0,c.default)(this,(0,i.default)(t).apply(this,arguments)),e.getNavMenuItems=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t.filter(function(e){return e.name&&!e.hideInMenu}).map(function(t){return e.getSubMenuOrItem(t)}).filter(function(e){return e})},e.getSubMenuOrItem=function(t){return Array.isArray(t.children)&&!t.hideChildrenInMenu&&t.children.some(function(e){return!!e.name})?f.default.createElement(v,{title:t.icon?f.default.createElement("span",null,(0,p.getIcon)(t.icon),f.default.createElement("span",null,t.name)):t.name,key:t.path},e.getNavMenuItems(t.children)):f.default.createElement(d.default.Item,{key:t.path},e.getMenuItemPath(t))},e.getMenuItemPath=function(t){var a=e.props,n=a.location,l=a.isMobile,u=a.onCollapse,r=t.name,c=e.conversionPath(t.path),i=(0,p.getIcon)(t.icon),o=t.target;return/^https?:\/\//.test(c)?f.default.createElement("a",{href:c,target:o},i,f.default.createElement("span",null,r)):f.default.createElement(s.default,{to:c,target:o,replace:c===n.pathname,onClick:l?function(){return u(!0)}:void 0},i,f.default.createElement("span",null,r))},e.conversionPath=function(e){return e&&0===e.indexOf("http")?e:"/".concat(e||"").replace(/\/+/g,"/")},e.getSelectedMenuKeys=function(t){var a=e.props.flatMenuKeys;return(0,m.urlToList)(t).map(function(e){return(0,p.getMenuMatches)(a,e).pop()}).filter(function(e){return e})},e}return(0,o.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){var e=this.props,t=e.className,a=e.style,n=e.mode,u=e.theme,r=e.openKeys,c=e.menuData,i=e.collapsed,o=e.onOpenChange,s=e.location,m=this.getSelectedMenuKeys(s.pathname);!m.length&&r&&(m=[r[r.length-1]]);var p={};return r&&!i&&(p={openKeys:0===r.length?(0,l.default)(m):r}),f.default.createElement(d.default,Object.assign({style:a,mode:n,theme:u,className:t,onOpenChange:o,selectedKeys:m},p),this.getNavMenuItems(c))}}]),t}(f.default.Component);g.defaultProps={flatMenuKeys:[],onCollapse:function(){},isMobile:!1,openKeys:[],collapsed:!1,menuData:[],onOpenChange:function(){}};var M=g;t.default=M},mxmt:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTU0NjA1NTA0Mjc2IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjY2MDIiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjM2LjIgMTEuMUgyNjkuOGwtNjYuNCAxMTMuM2gzNjYuNHpNNjcwLjggNDE5LjJoLTM2LjljLTYuNCAwLTExLjctNS4xLTExLjctMTEuNXM1LjQtMTEuNSAxMS43LTExLjVoMzYuOWM2LjQgMCAxMS41IDUuMSAxMS41IDExLjVoMTMuOWMwLTE0LjItMTEuNS0yNS40LTI1LjQtMjUuNGgtMzYuOWMtMTQuMiAwLTI1LjQgMTEuNS0yNS40IDI1LjQgMCA2LjEgMi40IDEyLjIgNi42IDE2LjkgNC45IDUuNCAxMS41IDguMyAxOC44IDguM2gzNi45YzYuNCAwIDExLjUgNS40IDExLjUgMTEuNSAwIDYuNC01LjEgMTEuNy0xMS41IDExLjdoLTM2LjljLTYuNCAwLTExLjctNS40LTExLjctMTEuN2gtMTMuOWMwIDE0LjIgMTEuNSAyNS40IDI1LjQgMjUuNGgzNi45YzE0LjIgMCAyNS40LTExLjUgMjUuNC0yNS40IDAtNi4xLTIuNC0xMi4yLTYuNi0xNi45LTQuNi01LjMtMTEuMi04LjMtMTguNi04LjN6IiBmaWxsPSIjNDA5RUZGIiBwLWlkPSI2NjAzIj48L3BhdGg+PHBhdGggZD0iTTYxOS4yIDM2OS40TDgyNi4zIDExLjFINjgzLjdMNDc3IDM2OS40ek00MTEuNyA0ODIuN0wyNTkuNCA3NDYuNmwtMTQuMyAyNC4xLTAuNyAyNDcuMyAzMDkuNC01MzUuM3oiIGZpbGw9IiM0MDlFRkYiIHAtaWQ9IjY2MDQiPjwvcGF0aD48cGF0aCBkPSJNNDEwLjUgMzk1LjhsLTEzLjktMTMuOUgzMjIuNGwxMy44IDEzLjloMjMuMlY0NzBoMTR2LTc0LjJIMzg2eiIgZmlsbD0iIzQwOUVGRiIgcC1pZD0iNjYwNSI+PC9wYXRoPjxwYXRoIGQ9Ik01MTAuNSA0MzIuOXYtNTFsLTEzLjkgMTIuOHYyNC40aC01OS41di0zNy4ybC0xMy45IDEyLjhWNDcwaDEzLjl2LTM3LjFoNTkuNVY0NzBoMTMuOXYtMzcuMXpNNTU1LjkgMzk0Ljh2NzUuNGgxMy45VjM4MiIgZmlsbD0iIzQwOUVGRiIgcC1pZD0iNjYwNiI+PC9wYXRoPjwvc3ZnPg=="},"q/j5":function(e,t,a){},rgG1:function(e,t,a){"use strict";var n=a("tAuX"),l=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("B9cy");var u=l(a("Ol7k")),r=n(a("q1tI")),c=a("MuoO"),i=l(a("mNz5")),o=l(a("TSYQ")),d=l(a("KJw8")),f=a("E6Dt"),s=l(a("ZFw/")),m=l(a("hFYC")),p=a("HHCq"),v=l(a("Mdgm")),g=a("LeJ0"),M=l(a("mxmt")),y=l(a("QBzw")),h=l(a("8wGe")),E=l(a("8uky"));a("TOiX");var b={"screen-xs":{maxWidth:575},"screen-sm":{minWidth:576,maxWidth:767},"screen-md":{minWidth:768,maxWidth:991},"screen-lg":{minWidth:992,maxWidth:1199},"screen-xl":{minWidth:1200,maxWidth:1599},"screen-xxl":{minWidth:1600}},N=u.default.Content,I=g.SETTING_DEFAULT_CONFIG.theme,j=g.SETTING_DEFAULT_CONFIG.fixedSide,T=g.STORAGE_KEY_DEFAULT_CONFIG.tabListKey,C=function(e){var t=e.dispatch,a=e.location,n=e.route,l=e.menuData,c=e.breadcrumbNameMap,g=e.children,C=n.routes,L=n.authority;(0,r.useState)(function(){var e=v.default.get(T)||[];t({type:"user/fetchCurrent"}),t({type:"menu/getMenuData",payload:{routes:C,authority:L}}),t({type:"global/saveTabList",payload:e})}),(0,r.useEffect)(function(){_()},[e.location]);var _=function(){var e=a.pathname;if(e){var n=c[e];if(n){var l={location:a,menuData:n,id:(0,i.default)("tab_")};t({type:"global/fetchAddTab",payload:l})}}},P=(0,d.default)({id:"BasicLayout",query:"(max-width: 599px)"})[0],D=r.default.createElement(u.default,null,r.default.createElement(m.default,Object.assign({logo:M.default,theme:I,menuData:l,fixedSide:j},e)),r.default.createElement(u.default,{style:{paddingLeft:80,minHeight:"100vh"}},r.default.createElement(h.default,Object.assign({isMobile:P},e)),r.default.createElement(N,{className:"basic-layout__content"},g),r.default.createElement(E.default,null)));return r.default.createElement(s.default,{title:(0,p.moGetPageTitle)(a.pathname,c)},r.default.createElement(f.ContainerQuery,{query:b},function(e){return r.default.createElement(y.default.Provider,{value:{location:a,breadcrumbNameMap:c}},r.default.createElement("div",{className:(0,o.default)(e)},D))}))},L=(0,c.connect)(function(e){var t=e.menu,a=e.global;return{tabList:a.tabList,menuData:t.menuData,breadcrumbNameMap:t.breadcrumbNameMap}})(C);t.default=L},tRwZ:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a("IRRO"),l=n.SelectLang;t.default=l},xjoZ:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a("5aYj"),l=n.GlobalFooter;t.default=l}}]);