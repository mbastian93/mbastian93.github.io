(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{MDrg:function(l,n,a){"use strict";a.r(n);var t=a("CcnG"),e=a("RIi3"),u=function(){function l(l,n){this.data=l,this.bottomSheetRef=n}return l.prototype.ngOnInit=function(){},l}(),i=a("2Imx"),r=function(){function l(l,n,a,t){this.titleService=l,this.toolbarService=n,this.feedService=a,this.bottomSheet=t,this.title="JGU Portal | Nachrichten"}return l.prototype.ngOnInit=function(){this.getFeeds(),this.setTitle()},l.prototype.getFeeds=function(){this.feedService.getNews(),this.feeds=this.feedService.feedsAsJSON},l.prototype.openLinkForItem=function(l){void 0===window.ontouchstart?window.open(l.link):this.bottomSheet.open(u,{data:{item:l}})},l.prototype.setTitle=function(){this.titleService.setTitle(this.title),this.toolbarService.setToolbarTitle(this.title)},l}(),c=function(){},o=a("pMnS"),b=a("yWMr"),s=a("/dO6"),d=a("dWZg"),f=a("Wf4p"),p=a("tRTW"),m=a("seP3"),h=a("Fzqc"),g=a("gIcY"),Y=a("Ip0R"),v=a("lzlj"),w=a("FVSy"),x=a("Rlre"),P=a("La40"),y=a("NvT6"),k=a("Blfk"),S=a("wFw1"),M=a("ZYjt"),_=a("BgWK"),Q=t.Oa({encapsulation:0,styles:[[".output[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center}mat-card[_ngcontent-%COMP%]{width:350px}mat-card-footer[_ngcontent-%COMP%]{position:absolute;right:25px;bottom:30px;max-width:350px} .mat-chip-list-wrapper{flex-direction:row-reverse!important;flex-wrap:wrap-reverse!important}  .mat-tab-header{background-color:#fff} .mat-tab-header-pagination{background-color:#fff}"]],data:{}});function I(l){return t.jb(0,[(l()(),t.Qa(0,0,null,null,5,"mat-chip",[["class","grey mat-chip"],["role","option"]],[[1,"tabindex",0],[2,"mat-chip-selected",null],[2,"mat-chip-with-avatar",null],[2,"mat-chip-with-trailing-icon",null],[2,"mat-chip-disabled",null],[1,"disabled",0],[1,"aria-disabled",0],[1,"aria-selected",0]],[[null,"click"],[null,"keydown"],[null,"focus"],[null,"blur"]],function(l,n,a){var e=!0;return"click"===n&&(e=!1!==t.ab(l,1)._handleClick(a)&&e),"keydown"===n&&(e=!1!==t.ab(l,1)._handleKeydown(a)&&e),"focus"===n&&(e=!1!==t.ab(l,1).focus()&&e),"blur"===n&&(e=!1!==t.ab(l,1)._blur()&&e),e},null,null)),t.Pa(1,147456,[[4,4]],3,s.b,[t.k,t.z,d.a,[2,f.k]],null,null),t.fb(335544320,5,{avatar:0}),t.fb(335544320,6,{trailingIcon:0}),t.fb(335544320,7,{removeIcon:0}),(l()(),t.hb(5,null,[" "," "]))],null,function(l,n){l(n,0,0,t.ab(n,1).disabled?null:-1,t.ab(n,1).selected,t.ab(n,1).avatar,t.ab(n,1).trailingIcon||t.ab(n,1).removeIcon,t.ab(n,1).disabled,t.ab(n,1).disabled||null,t.ab(n,1).disabled.toString(),t.ab(n,1).ariaSelected),l(n,5,0,n.context.$implicit)})}function j(l){return t.jb(0,[(l()(),t.Qa(0,0,null,null,5,"mat-chip-list",[["class","mat-chip-list"]],[[1,"tabindex",0],[1,"aria-describedby",0],[1,"aria-required",0],[1,"aria-disabled",0],[1,"aria-invalid",0],[1,"aria-multiselectable",0],[1,"role",0],[2,"mat-chip-list-disabled",null],[2,"mat-chip-list-invalid",null],[2,"mat-chip-list-required",null],[1,"aria-orientation",0],[8,"id",0]],[[null,"focus"],[null,"blur"],[null,"keydown"]],function(l,n,a){var e=!0;return"focus"===n&&(e=!1!==t.ab(l,2).focus()&&e),"blur"===n&&(e=!1!==t.ab(l,2)._blur()&&e),"keydown"===n&&(e=!1!==t.ab(l,2)._keydown(a)&&e),e},p.b,p.a)),t.eb(6144,null,m.c,null,[s.c]),t.Pa(2,1556480,null,1,s.c,[t.k,t.h,[2,h.b],[2,g.m],[2,g.g],f.d,[8,null]],{selectable:[0,"selectable"]},null),t.fb(603979776,4,{chips:1}),(l()(),t.Ha(16777216,null,0,1,null,I)),t.Pa(5,802816,null,0,Y.l,[t.P,t.M,t.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,2,0,!1),l(n,5,0,n.parent.context.$implicit.categories)},function(l,n){l(n,0,1,[t.ab(n,2)._tabIndex,t.ab(n,2)._ariaDescribedby||null,t.ab(n,2).required.toString(),t.ab(n,2).disabled.toString(),t.ab(n,2).errorState,t.ab(n,2).multiple,t.ab(n,2).role,t.ab(n,2).disabled,t.ab(n,2).errorState,t.ab(n,2).required,t.ab(n,2).ariaOrientation,t.ab(n,2)._uid])})}function O(l){return t.jb(0,[(l()(),t.Qa(0,0,null,null,17,"mat-card",[["class","mat-elevation-z3 mat-card"]],null,[[null,"click"]],function(l,n,a){var t=!0;return"click"===n&&(t=!1!==l.component.openLinkForItem(l.context.$implicit)&&t),t},v.d,v.a)),t.Pa(1,49152,null,0,w.a,[],null,null),(l()(),t.Qa(2,0,null,0,9,"mat-card-header",[["class","mat-card-header"]],null,null,null,v.c,v.b)),t.Pa(3,49152,null,0,w.d,[],null,null),(l()(),t.Qa(4,0,null,1,3,"mat-card-title",[["class","mat-card-title"]],null,null,null,null,null)),t.Pa(5,16384,null,0,w.g,[],null,null),(l()(),t.Qa(6,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t.hb(7,null,["",""])),(l()(),t.Qa(8,0,null,1,3,"mat-card-subtitle",[["class","mat-card-subtitle"]],null,null,null,null,null)),t.Pa(9,16384,null,0,w.f,[],null,null),(l()(),t.hb(10,null,["",""])),t.db(11,2),(l()(),t.Qa(12,0,null,0,1,"mat-card-content",[["class","mat-card-content"]],[[8,"innerHTML",1]],null,null,null,null)),t.Pa(13,16384,null,0,w.b,[],null,null),(l()(),t.Qa(14,0,null,1,3,"mat-card-footer",[["class","mat-card-footer"]],null,null,null,null,null)),t.Pa(15,16384,null,0,w.c,[],null,null),(l()(),t.Ha(16777216,null,null,1,null,j)),t.Pa(17,16384,null,0,Y.m,[t.P,t.M],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,17,0,n.context.$implicit.categories.length>0)},function(l,n){l(n,7,0,n.context.$implicit.title),l(n,10,0,t.ib(n,10,0,l(n,11,0,t.ab(n.parent.parent.parent,0),n.context.$implicit.pubDate,"dd.MM.yyyy"))),l(n,12,0,n.context.$implicit.description)})}function F(l){return t.jb(0,[(l()(),t.Qa(0,16777216,null,null,6,"mat-tab",[],null,null,null,x.d,x.a)),t.Pa(1,770048,[[1,4]],2,P.b,[t.P],{textLabel:[0,"textLabel"]},null),t.fb(335544320,2,{templateLabel:0}),t.fb(335544320,3,{_explicitContent:0}),(l()(),t.Qa(4,0,null,0,2,"div",[["class","output"]],null,null,null,null,null)),(l()(),t.Ha(16777216,null,null,1,null,O)),t.Pa(6,802816,null,0,Y.l,[t.P,t.M,t.s],{ngForOf:[0,"ngForOf"]},null),(l()(),t.Ha(0,null,null,0))],function(l,n){l(n,1,0,t.Sa(1,"",n.context.$implicit.feedName,"")),l(n,6,0,n.context.$implicit.items)},null)}function H(l){return t.jb(0,[(l()(),t.Qa(0,0,null,null,4,"mat-tab-group",[["class","mat-tab-group"]],[[2,"mat-tab-group-dynamic-height",null],[2,"mat-tab-group-inverted-header",null]],null,null,x.c,x.b)),t.Pa(1,3325952,null,1,P.e,[t.k,t.h],null,null),t.fb(603979776,1,{_tabs:1}),(l()(),t.Ha(16777216,null,null,1,null,F)),t.Pa(4,802816,null,0,Y.l,[t.P,t.M,t.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,4,0,n.component.feeds)},function(l,n){l(n,0,0,t.ab(n,1).dynamicHeight,"below"===t.ab(n,1).headerPosition)})}function C(l){return t.jb(0,[(l()(),t.Qa(0,0,null,null,1,"mat-spinner",[["class","mat-spinner mat-progress-spinner"],["mode","indeterminate"],["role","progressbar"]],[[2,"_mat-animation-noopable",null],[4,"width","px"],[4,"height","px"]],null,null,y.b,y.a)),t.Pa(1,49152,null,0,k.d,[t.k,d.a,[2,Y.e],[2,S.a],k.a],null,null)],null,function(l,n){l(n,0,0,t.ab(n,1)._noopAnimations,t.ab(n,1).diameter,t.ab(n,1).diameter)})}function L(l){return t.jb(0,[t.bb(0,Y.f,[t.u]),(l()(),t.Qa(1,0,null,null,3,"main",[["class","content-container"]],null,null,null,null,null)),(l()(),t.Ha(16777216,null,null,1,null,H)),t.Pa(3,16384,null,0,Y.m,[t.P,t.M],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(l()(),t.Ha(0,[["spinner",2]],null,0,null,C))],function(l,n){l(n,3,0,n.component.feeds.length>0,t.ab(n,4))},null)}var N=t.Ma("app-news-feed",r,function(l){return t.jb(0,[(l()(),t.Qa(0,0,null,null,1,"app-news-feed",[],null,null,null,L,Q)),t.Pa(1,114688,null,0,r,[M.i,i.a,e.a,_.b],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),$=a("6UMx"),T=a("0/Q6"),q=t.Oa({encapsulation:2,styles:[],data:{}});function z(l){return t.jb(0,[(l()(),t.Qa(0,0,null,null,8,"mat-nav-list",[["class","mat-nav-list"],["role","navigation"]],null,null,null,$.f,$.c)),t.Pa(1,49152,null,0,T.e,[],null,null),(l()(),t.Qa(2,0,null,0,6,"a",[["class","mat-list-item"],["mat-list-item",""]],[[8,"href",4],[2,"mat-list-item-avatar",null],[2,"mat-list-item-with-avatar",null]],[[null,"focus"],[null,"blur"]],function(l,n,a){var e=!0;return"focus"===n&&(e=!1!==t.ab(l,3)._handleFocus()&&e),"blur"===n&&(e=!1!==t.ab(l,3)._handleBlur()&&e),e},$.d,$.b)),t.Pa(3,1097728,null,2,T.b,[t.k,[2,T.e]],null,null),t.fb(603979776,1,{_lines:1}),t.fb(335544320,2,{_avatar:0}),(l()(),t.Qa(6,0,null,1,2,"span",[["class","mat-line"],["mat-line",""]],null,null,null,null,null)),t.Pa(7,16384,[[1,4]],0,f.m,[],null,null),(l()(),t.hb(-1,null,["Seite \xf6ffnen"]))],null,function(l,n){l(n,2,0,t.Sa(1,"",n.component.data.item.link,""),t.ab(n,3)._avatar,t.ab(n,3)._avatar)})}var R=t.Ma("app-news-feed",u,function(l){return t.jb(0,[(l()(),t.Qa(0,0,null,null,1,"app-news-feed",[],null,null,null,z,q)),t.Pa(1,114688,null,0,u,[_.a,_.f],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),W=a("eDkP"),B=a("4tE/"),D=a("uGex"),J=a("M2Lx"),K=a("ZYCi"),Z=a("LC5p"),A=a("YhbO"),E=a("4c35"),G=a("jlZm"),U=a("y4qS"),V=a("BHnd"),X=a("/VYK"),ll=a("b716"),nl=a("qAlS"),al=a("UodH"),tl=a("SMsm"),el=a("8mMr"),ul=a("Nsh5"),il=a("hctd"),rl=a("YSh2");a.d(n,"NewsFeedModuleNgFactory",function(){return cl});var cl=t.Na(c,[u],function(l){return t.Xa([t.Ya(512,t.j,t.Ca,[[8,[o.a,b.a,N,R]],[3,t.j],t.x]),t.Ya(4608,Y.o,Y.n,[t.u,[2,Y.x]]),t.Ya(4608,f.d,f.d,[]),t.Ya(4608,W.c,W.c,[W.i,W.e,t.j,W.h,W.f,t.r,t.z,Y.e,h.b]),t.Ya(5120,W.j,W.k,[W.c]),t.Ya(5120,B.b,B.c,[W.c]),t.Ya(5120,D.a,D.b,[W.c]),t.Ya(4608,J.c,J.c,[]),t.Ya(1073742336,Y.c,Y.c,[]),t.Ya(1073742336,K.n,K.n,[[2,K.t],[2,K.k]]),t.Ya(1073742336,h.a,h.a,[]),t.Ya(1073742336,f.l,f.l,[[2,f.e]]),t.Ya(1073742336,f.n,f.n,[]),t.Ya(1073742336,d.b,d.b,[]),t.Ya(1073742336,f.x,f.x,[]),t.Ya(1073742336,f.v,f.v,[]),t.Ya(1073742336,Z.b,Z.b,[]),t.Ya(1073742336,T.c,T.c,[]),t.Ya(1073742336,A.c,A.c,[]),t.Ya(1073742336,E.g,E.g,[]),t.Ya(1073742336,G.b,G.b,[]),t.Ya(1073742336,U.p,U.p,[]),t.Ya(1073742336,V.l,V.l,[]),t.Ya(1073742336,X.c,X.c,[]),t.Ya(1073742336,m.d,m.d,[]),t.Ya(1073742336,ll.b,ll.b,[]),t.Ya(1073742336,f.s,f.s,[]),t.Ya(1073742336,nl.b,nl.b,[]),t.Ya(1073742336,W.g,W.g,[]),t.Ya(1073742336,B.e,B.e,[]),t.Ya(1073742336,w.e,w.e,[]),t.Ya(1073742336,D.d,D.d,[]),t.Ya(1073742336,s.d,s.d,[]),t.Ya(1073742336,al.c,al.c,[]),t.Ya(1073742336,_.e,_.e,[]),t.Ya(1073742336,J.d,J.d,[]),t.Ya(1073742336,P.i,P.i,[]),t.Ya(1073742336,tl.b,tl.b,[]),t.Ya(1073742336,el.b,el.b,[]),t.Ya(1073742336,ul.h,ul.h,[]),t.Ya(1073742336,k.c,k.c,[]),t.Ya(1073742336,il.a,il.a,[]),t.Ya(1073742336,c,c,[]),t.Ya(256,s.a,{separatorKeyCodes:[rl.f]},[]),t.Ya(1024,K.i,function(){return[[{path:"",component:r}]]},[])])})}}]);