(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{MKrp:function(n,a,t){"use strict";t.r(a);var e=t("8Y7J"),l=t("2Imx"),r=t("WIKx");class i{constructor(n,a,t){this.titleService=n,this.toolbarService=a,this.calendarService=t,this.title="JGU Portal | Veranstaltungen",this.panelOpenState=!1}ngOnInit(){this.setTitle(),this.calendarService.getEvents().subscribe(n=>{this.events=this.calendarService.parseEventsFromXmlToJson(n)}),this.events=this.calendarService.events,this.mobile=window.screen.width<=768}setTitle(){this.titleService.setTitle(this.title),this.toolbarService.setToolbarTitle(this.title)}}class o{}var s=t("yWMr"),u=t("pMnS"),c=t("AyJq"),m=t("c9fC"),p=t("8bJo"),d=t("5GAg"),g=t("SVse"),f=t("6UMx"),b=t("Q+lL"),h=t("Mr+X"),v=t("Gi4r"),x=t("iInd"),k=t("NvT6"),X=t("W5yJ"),_=t("/HVE"),Z=t("omvX"),O=t("cUpR"),y=e.Na({encapsulation:0,styles:[[".date[_ngcontent-%COMP%]{padding-right:10px}.mat-expansion-panel[_ngcontent-%COMP%]{padding:10px 0}mat-list-item.mat-list-item[_ngcontent-%COMP%]{height:auto;padding:10px 0;white-space:pre-line}mat-expansion-panel[_ngcontent-%COMP%]{max-width:700px}@media screen and (min-width:748px){mat-expansion-panel[_ngcontent-%COMP%]{margin:0 auto}}@media screen and (min-width:426px){.mat-expansion-panel-spacing[_ngcontent-%COMP%]{margin:16px auto}}@media screen and (max-width:425px){  .mat-expansion-panel-body{padding:0 0 16px!important}}"]],data:{}});function P(n){return e.ib(0,[(n()(),e.Pa(0,16777216,null,null,48,"mat-expansion-panel",[["class","mat-expansion-panel"],["expandedHeight","auto"]],[[2,"mat-expanded",null],[2,"mat-expansion-panel-spacing",null]],null,null,c.d,c.a)),e.Oa(1,1753088,null,1,m.c,[[3,m.a],e.h,p.c,e.O],null,null),e.eb(335544320,1,{_lazyContent:0}),e.db(256,null,m.a,void 0,[]),(n()(),e.Pa(4,0,null,0,10,"mat-expansion-panel-header",[["class","mat-expansion-panel-header"],["collapsedHeight","auto"],["expandedHeight","auto"],["role","button"]],[[1,"id",0],[1,"tabindex",0],[1,"aria-controls",0],[1,"aria-expanded",0],[1,"aria-disabled",0],[2,"mat-expanded",null],[40,"@expansionHeight",0]],[[null,"click"],[null,"keydown"]],function(n,a,t){var l=!0;return"click"===a&&(l=!1!==e.Za(n,5)._toggle()&&l),"keydown"===a&&(l=!1!==e.Za(n,5)._keydown(t)&&l),l},c.c,c.b)),e.Oa(5,180224,null,0,m.d,[m.c,e.k,d.c,e.h],{expandedHeight:[0,"expandedHeight"],collapsedHeight:[1,"collapsedHeight"]},null),e.bb(6,{collapsedHeight:0,expandedHeight:1}),e.bb(7,{value:0,params:1}),(n()(),e.Pa(8,0,null,0,6,"mat-panel-title",[["class","mat-expansion-panel-header-title"]],null,null,null,null,null)),e.Oa(9,278528,null,0,g.k,[e.r,e.s,e.k,e.D],{ngClass:[0,"ngClass"]},null),e.Oa(10,16384,null,0,m.e,[],null,null),(n()(),e.Pa(11,0,null,null,2,"span",[["class","date"]],null,null,null,null,null)),(n()(),e.gb(12,null,["",""])),e.cb(13,2),(n()(),e.gb(14,null,[" "," "])),(n()(),e.Pa(15,0,null,1,33,"mat-list",[["class","mat-list"]],null,null,null,f.e,f.a)),e.Oa(16,49152,null,0,b.a,[],null,null),(n()(),e.Pa(17,0,null,0,8,"mat-list-item",[["class","mat-list-item"]],[[2,"mat-list-item-avatar",null],[2,"mat-list-item-with-avatar",null]],[[null,"focus"],[null,"blur"]],function(n,a,t){var l=!0;return"focus"===a&&(l=!1!==e.Za(n,18)._handleFocus()&&l),"blur"===a&&(l=!1!==e.Za(n,18)._handleBlur()&&l),l},f.d,f.b)),e.Oa(18,1097728,null,2,b.b,[e.k,[2,b.e]],null,null),e.eb(603979776,2,{_lines:1}),e.eb(335544320,3,{_avatar:0}),(n()(),e.Pa(21,0,null,2,1,"mat-icon",[["class","mat-icon"],["color","primary"],["role","img"],["svgIcon","clock"]],[[2,"mat-icon-inline",null]],null,null,h.b,h.a)),e.Oa(22,638976,null,0,v.a,[e.k,v.c,[8,null]],{color:[0,"color"],svgIcon:[1,"svgIcon"]},null),(n()(),e.gb(23,2,[" "," - "," "])),e.cb(24,2),e.cb(25,2),(n()(),e.Pa(26,0,null,0,6,"mat-list-item",[["class","mat-list-item"]],[[2,"mat-list-item-avatar",null],[2,"mat-list-item-with-avatar",null]],[[null,"focus"],[null,"blur"]],function(n,a,t){var l=!0;return"focus"===a&&(l=!1!==e.Za(n,27)._handleFocus()&&l),"blur"===a&&(l=!1!==e.Za(n,27)._handleBlur()&&l),l},f.d,f.b)),e.Oa(27,1097728,null,2,b.b,[e.k,[2,b.e]],null,null),e.eb(603979776,4,{_lines:1}),e.eb(335544320,5,{_avatar:0}),(n()(),e.Pa(30,0,null,2,1,"mat-icon",[["class","mat-icon"],["color","primary"],["role","img"],["svgIcon","marker"]],[[2,"mat-icon-inline",null]],null,null,h.b,h.a)),e.Oa(31,638976,null,0,v.a,[e.k,v.c,[8,null]],{color:[0,"color"],svgIcon:[1,"svgIcon"]},null),(n()(),e.gb(32,2,[" ",", "," "])),(n()(),e.Pa(33,0,null,0,6,"mat-list-item",[["class","mat-list-item"]],[[2,"mat-list-item-avatar",null],[2,"mat-list-item-with-avatar",null]],[[null,"focus"],[null,"blur"]],function(n,a,t){var l=!0;return"focus"===a&&(l=!1!==e.Za(n,34)._handleFocus()&&l),"blur"===a&&(l=!1!==e.Za(n,34)._handleBlur()&&l),l},f.d,f.b)),e.Oa(34,1097728,null,2,b.b,[e.k,[2,b.e]],null,null),e.eb(603979776,6,{_lines:1}),e.eb(335544320,7,{_avatar:0}),(n()(),e.Pa(37,0,null,2,1,"mat-icon",[["class","mat-icon"],["color","primary"],["role","img"],["svgIcon","info"]],[[2,"mat-icon-inline",null]],null,null,h.b,h.a)),e.Oa(38,638976,null,0,v.a,[e.k,v.c,[8,null]],{color:[0,"color"],svgIcon:[1,"svgIcon"]},null),(n()(),e.gb(39,2,[" "," "])),(n()(),e.Pa(40,0,null,0,8,"mat-list-item",[["class","mat-list-item"]],[[2,"mat-list-item-avatar",null],[2,"mat-list-item-with-avatar",null]],[[null,"focus"],[null,"blur"]],function(n,a,t){var l=!0;return"focus"===a&&(l=!1!==e.Za(n,41)._handleFocus()&&l),"blur"===a&&(l=!1!==e.Za(n,41)._handleBlur()&&l),l},f.d,f.b)),e.Oa(41,1097728,null,2,b.b,[e.k,[2,b.e]],null,null),e.eb(603979776,8,{_lines:1}),e.eb(335544320,9,{_avatar:0}),(n()(),e.Pa(44,0,null,2,1,"mat-icon",[["class","mat-icon"],["color","primary"],["role","img"],["svgIcon","person"]],[[2,"mat-icon-inline",null]],null,null,h.b,h.a)),e.Oa(45,638976,null,0,v.a,[e.k,v.c,[8,null]],{color:[0,"color"],svgIcon:[1,"svgIcon"]},null),(n()(),e.Pa(46,0,null,2,2,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,a,t){var l=!0;return"click"===a&&(l=!1!==e.Za(n,47).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&l),l},null,null)),e.Oa(47,671744,null,0,x.m,[x.k,x.a,g.j],{routerLink:[0,"routerLink"]},null),(n()(),e.gb(-1,null,[" Kontakt "])),(n()(),e.Ga(0,null,null,0))],function(n,a){var t=a.component;n(a,5,0,"auto","auto"),n(a,9,0,t.panelOpenState?"expanded":"collapsed"),n(a,22,0,"primary","clock"),n(a,31,0,"primary","marker"),n(a,38,0,"primary","info"),n(a,45,0,"primary","person"),n(a,47,0,e.Ra(1,"/Personensuche/",a.context.$implicit.person.key,""))},function(n,a){n(a,0,0,e.Za(a,1).expanded,e.Za(a,1)._hasSpacing()),n(a,4,0,e.Za(a,5).panel._headerId,e.Za(a,5).panel.disabled?-1:0,e.Za(a,5)._getPanelId(),e.Za(a,5)._isExpanded(),e.Za(a,5).panel.disabled,e.Za(a,5)._isExpanded(),n(a,7,0,e.Za(a,5)._getExpandedState(),n(a,6,0,e.Za(a,5).collapsedHeight,e.Za(a,5).expandedHeight))),n(a,12,0,e.hb(a,12,0,n(a,13,0,e.Za(a.parent.parent,0),a.context.$implicit.startDate,"dd.MM"))),n(a,14,0,a.context.$implicit.title),n(a,17,0,e.Za(a,18)._avatar,e.Za(a,18)._avatar),n(a,21,0,e.Za(a,22).inline),n(a,23,0,e.hb(a,23,0,n(a,24,0,e.Za(a.parent.parent,0),a.context.$implicit.startDate+"T"+a.context.$implicit.startTime,"H:mm")),e.hb(a,23,1,n(a,25,0,e.Za(a.parent.parent,0),a.context.$implicit.endDate+"T"+a.context.$implicit.endTime,"H:mm"))),n(a,26,0,e.Za(a,27)._avatar,e.Za(a,27)._avatar),n(a,30,0,e.Za(a,31).inline),n(a,32,0,a.context.$implicit.location.name,a.context.$implicit.location.address),n(a,33,0,e.Za(a,34)._avatar,e.Za(a,34)._avatar),n(a,37,0,e.Za(a,38).inline),n(a,39,0,a.context.$implicit.description),n(a,40,0,e.Za(a,41)._avatar,e.Za(a,41)._avatar),n(a,44,0,e.Za(a,45).inline),n(a,46,0,e.Za(a,47).target,e.Za(a,47).href)})}function w(n){return e.ib(0,[(n()(),e.Pa(0,0,null,null,4,"div",[["class","output"]],null,null,null,null,null)),(n()(),e.Pa(1,0,null,null,3,"mat-accordion",[["class","mat-accordion"]],null,null,null,null,null)),e.Oa(2,16384,null,0,m.a,[],null,null),(n()(),e.Ga(16777216,null,null,1,null,P)),e.Oa(4,802816,null,0,g.l,[e.O,e.L,e.r],{ngForOf:[0,"ngForOf"]},null)],function(n,a){n(a,4,0,a.component.events)},null)}function I(n){return e.ib(0,[(n()(),e.Pa(0,0,null,null,1,"mat-spinner",[["class","mat-spinner mat-progress-spinner"],["mode","indeterminate"],["role","progressbar"]],[[2,"_mat-animation-noopable",null],[4,"width","px"],[4,"height","px"]],null,null,k.b,k.a)),e.Oa(1,49152,null,0,X.d,[e.k,_.a,[2,g.e],[2,Z.a],X.a],null,null)],null,function(n,a){n(a,0,0,e.Za(a,1)._noopAnimations,e.Za(a,1).diameter,e.Za(a,1).diameter)})}function H(n){return e.ib(0,[e.ab(0,g.f,[e.t]),(n()(),e.Pa(1,0,null,null,3,"main",[["class","content-container"]],null,null,null,null,null)),(n()(),e.Ga(16777216,null,null,1,null,w)),e.Oa(3,16384,null,0,g.m,[e.O,e.L],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(n()(),e.Ga(0,[["spinner",2]],null,0,null,I))],function(n,a){n(a,3,0,a.component.events.length>0,e.Za(a,4))},null)}var M=e.La("app-calendar",i,function(n){return e.ib(0,[(n()(),e.Pa(0,0,null,null,1,"app-calendar",[],null,null,null,H,y)),e.Oa(1,114688,null,0,i,[O.i,l.a,r.a],null,null)],function(n,a){n(a,1,0)},null)},{},{},[]),S=t("Xd0L"),C=t("QQfA"),T=t("IP0z"),J=t("/Co4"),B=t("JjoW"),E=t("POq0"),$=t("02hT"),F=t("5Bek"),L=t("zMNK"),z=t("zQui"),G=t("8rEH"),K=t("oapL"),W=t("HsOI"),j=t("ZwOa"),N=t("hOhj"),V=t("igqZ"),D=t("kNGD"),A=t("Fwaw"),q=t("lwm9"),Q=t("rWV4"),R=t("BzsH"),U=t("BV1i"),Y=t("hctd"),nn=t("dvZr");t.d(a,"CalendarModuleNgFactory",function(){return an});var an=e.Ma(o,[],function(n){return e.Wa([e.Xa(512,e.j,e.Ba,[[8,[s.a,u.a,M]],[3,e.j],e.w]),e.Xa(4608,g.o,g.n,[e.t,[2,g.x]]),e.Xa(4608,S.d,S.d,[]),e.Xa(4608,C.c,C.c,[C.i,C.e,e.j,C.h,C.f,e.q,e.y,g.e,T.b]),e.Xa(5120,C.j,C.k,[C.c]),e.Xa(5120,J.b,J.c,[C.c]),e.Xa(5120,B.a,B.b,[C.c]),e.Xa(4608,E.c,E.c,[]),e.Xa(1073742336,g.c,g.c,[]),e.Xa(1073742336,T.a,T.a,[]),e.Xa(1073742336,S.l,S.l,[[2,S.e]]),e.Xa(1073742336,S.n,S.n,[]),e.Xa(1073742336,_.b,_.b,[]),e.Xa(1073742336,S.x,S.x,[]),e.Xa(1073742336,S.v,S.v,[]),e.Xa(1073742336,$.b,$.b,[]),e.Xa(1073742336,b.c,b.c,[]),e.Xa(1073742336,F.c,F.c,[]),e.Xa(1073742336,L.g,L.g,[]),e.Xa(1073742336,m.b,m.b,[]),e.Xa(1073742336,z.p,z.p,[]),e.Xa(1073742336,G.l,G.l,[]),e.Xa(1073742336,K.c,K.c,[]),e.Xa(1073742336,W.d,W.d,[]),e.Xa(1073742336,j.b,j.b,[]),e.Xa(1073742336,S.s,S.s,[]),e.Xa(1073742336,N.b,N.b,[]),e.Xa(1073742336,C.g,C.g,[]),e.Xa(1073742336,J.e,J.e,[]),e.Xa(1073742336,V.e,V.e,[]),e.Xa(1073742336,B.d,B.d,[]),e.Xa(1073742336,D.d,D.d,[]),e.Xa(1073742336,A.c,A.c,[]),e.Xa(1073742336,q.e,q.e,[]),e.Xa(1073742336,E.d,E.d,[]),e.Xa(1073742336,Q.i,Q.i,[]),e.Xa(1073742336,v.b,v.b,[]),e.Xa(1073742336,R.b,R.b,[]),e.Xa(1073742336,U.h,U.h,[]),e.Xa(1073742336,X.c,X.c,[]),e.Xa(1073742336,Y.a,Y.a,[]),e.Xa(1073742336,x.n,x.n,[[2,x.t],[2,x.k]]),e.Xa(1073742336,o,o,[]),e.Xa(256,D.a,{separatorKeyCodes:[nn.f]},[]),e.Xa(1024,x.i,function(){return[[{path:"",component:i}]]},[])])})},NvT6:function(n,a,t){"use strict";t.d(a,"a",function(){return l}),t.d(a,"b",function(){return r});var e=t("8Y7J");t("W5yJ"),t("IP0z"),t("Xd0L"),t("/HVE"),t("SVse"),t("omvX");var l=e.Na({encapsulation:2,styles:[".mat-progress-spinner{display:block;position:relative}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{animation:mat-progress-spinner-linear-rotate 2s linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4s;animation-timing-function:cubic-bezier(.35,0,.25,1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{animation:mat-progress-spinner-stroke-rotate-fallback 10s cubic-bezier(.87,.03,.33,1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.60617px;transform:rotate(0)}12.5%{stroke-dashoffset:56.54867px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.60617px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.54867px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.60617px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.54867px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.60617px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.54867px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}"],data:{}});function r(n){return e.ib(2,[(n()(),e.Pa(0,0,null,null,1,":svg:svg",[["focusable","false"],["preserveAspectRatio","xMidYMid meet"]],[[4,"width","px"],[4,"height","px"],[1,"viewBox",0]],null,null,null,null)),(n()(),e.Pa(1,0,null,null,0,":svg:circle",[["cx","50%"],["cy","50%"]],[[1,"r",0],[4,"animation-name",null],[4,"stroke-dashoffset","px"],[4,"stroke-dasharray","px"],[4,"stroke-width","%"]],null,null,null,null))],null,function(n,a){var t=a.component;n(a,0,0,t.diameter,t.diameter,t._viewBox),n(a,1,0,t._circleRadius,"mat-progress-spinner-stroke-rotate-"+t.diameter,t._strokeDashOffset,t._strokeCircumference,t._circleStrokeWidth)})}}}]);