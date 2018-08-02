(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{O6c9:function(l,n,e){"use strict";e.r(n);var a=e("CcnG"),t=e("2Imx"),i=function(){function l(l){this.meals=[],this.days=[],this.name=l}return l.prototype.getMealsForDay=function(l){var n=[];return this.meals.forEach(function(e){e.date===l&&n.push(e)}),n},l}(),o=e("t/Na"),u=function(){function l(l){this.http=l,this.canteens=[],this.domParser=new DOMParser}return l.checkDate=function(l){var n=l.split("."),e=new Date(+n[2],+n[1]-1,+n[0],0,0,0,0),a=new Date;return a.setHours(0,0,0,0),a<=e},l.prototype.fetchCanteenPlans=function(){var l=this;this.canteens.length>0||this.http.get("https://www.studierendenwerk-mainz.de/speiseplan/Speiseplan.xml",{responseType:"text"}).toPromise().then(function(n){l.parseCanteenPlan(n)})},l.prototype.parseCanteenPlan=function(n){var e=this;Date.now(),this.canteens[0]=new i("Hauptlager Zentralmensa"),this.canteens[1]=new i("Mens@ria"),this.canteens[2]=new i("Mensa Georg Forster"),this.canteens[3]=new i("Caf\xe9 Rewi");var a=this.domParser.parseFromString(n,"text/xml");Array.from(a.getElementsByTagName("ROW")).forEach(function(n){var a=new function(){};if(a.date=n.getAttribute("DATUM"),l.checkDate(a.date)){var t=+n.getAttribute("VERBRAUCHSORT");[310,312,370,425].indexOf(t)<0||(a.type=n.getAttribute("TYP"),37!=+a.type&&9!=+a.type&&(a.artNr=n.getAttribute("ARTNR"),""!==a.artNr&&(a.counter=n.getAttribute("SPEISE"),a.counter.toLowerCase().indexOf("salat")>=0||(a.buildingNr=n.getAttribute("GEBNR"),a.description=n.getAttribute("AUSGABETEXT"),a.canteen=n.getAttribute("MENSA"),a.location=n.getAttribute("ORT"),a.vegan=n.getAttribute("MENUEKENNZTEXT"),a.additives=n.getAttribute("ZSNUMMERN"),a.priceStudents=n.getAttribute("STUDIERENDE"),a.priceEmployees=n.getAttribute("BEDIENSTETE"),a.hints=n.getAttribute("REZHINWEISE"),a.soldOut=n.getAttribute("AUSVERKAUFT"),e.addMealToMensa(a,t)))))}})},l.prototype.getCanteenPlans=function(){return this.canteens},l.prototype.addMealToMensa=function(l,n){switch(n){case 310:this.canteens[0].meals.push(l),this.canteens[0].days.indexOf(l.date)<0&&this.canteens[0].days.push(l.date);break;case 312:this.canteens[1].meals.push(l),this.canteens[1].days.indexOf(l.date)<0&&this.canteens[1].days.push(l.date);break;case 370:this.canteens[2].meals.push(l),this.canteens[2].days.indexOf(l.date)<0&&this.canteens[2].days.push(l.date);break;case 425:this.canteens[3].meals.push(l),this.canteens[3].days.indexOf(l.date)<0&&this.canteens[3].days.push(l.date)}},l.ngInjectableDef=a.T({factory:function(){return new l(a.X(o.c))},token:l,providedIn:"root"}),l}(),r=function(){function l(l,n,e){this.titleService=l,this.toolbarService=n,this.canteenService=e,this.title="JGU Portal | Mensapl\xe4ne "}return l.prototype.ngOnInit=function(){this.setTitle(),this.canteenService.fetchCanteenPlans(),this.canteens=this.canteenService.getCanteenPlans()},l.prototype.setTitle=function(){this.titleService.setTitle(this.title),this.toolbarService.setToolbarTitle(this.title)},l.prototype.handleSelect=function(l){l.isUserInput&&(void 0===this.activeCanteen&&(this.activeCanteen=this.canteens[0]),this.todaysMeals=this.activeCanteen.getMealsForDay(l.source.value))},l.prototype.setActiveCanteen=function(l){this.activeCanteen=this.canteens[l.index],this.todaysMeals=this.activeCanteen.getMealsForDay(this.today)},l}(),s=function(){},c=e("pMnS"),d=e("yWMr"),b=e("MlvX"),p=e("Wf4p"),m=e("/dO6"),h=e("dWZg"),f=e("lzlj"),g=e("FVSy"),y=e("Ip0R"),w=e("tRTW"),v=e("seP3"),x=e("Fzqc"),k=e("gIcY"),P=e("Rlre"),C=e("La40"),_=e("dJrM"),S=e("wFw1"),Y=e("uGex"),M=e("eDkP"),I=e("4c35"),O=e("qAlS"),T=a.Oa({encapsulation:2,styles:[".mat-select{display:inline-block;width:100%;outline:0}.mat-select-trigger{display:inline-table;cursor:pointer;position:relative;box-sizing:border-box}.mat-select-disabled .mat-select-trigger{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-select-value{display:table-cell;max-width:0;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-select-arrow-wrapper{display:table-cell;vertical-align:middle}.mat-form-field-appearance-fill .mat-select-arrow-wrapper,.mat-form-field-appearance-standard .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-outline .mat-select-arrow-wrapper{transform:translateY(-25%)}.mat-select-arrow{width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;margin:0 4px}.mat-select-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;padding-top:0;padding-bottom:0;max-height:256px;min-width:100%}.mat-select-panel:not([class*=mat-elevation-z]){box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}@media screen and (-ms-high-contrast:active){.mat-select-panel{outline:solid 1px}}.mat-select-panel .mat-optgroup-label,.mat-select-panel .mat-option{font-size:inherit;line-height:3em;height:3em}.mat-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-form-field-flex{cursor:pointer}.mat-form-field-type-mat-select .mat-form-field-label{width:calc(100% - 18px)}.mat-select-placeholder{transition:color .4s .133s cubic-bezier(.25,.8,.25,1)}._mat-animation-noopable .mat-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-select-placeholder{color:transparent;transition:none;display:block}"],data:{animation:[{type:7,name:"transformPanel",definitions:[{type:0,name:"void",styles:{type:6,styles:{transform:"scaleY(0)",minWidth:"100%",opacity:0},offset:null},options:void 0},{type:0,name:"showing",styles:{type:6,styles:{opacity:1,minWidth:"calc(100% + 32px)",transform:"scaleY(1)"},offset:null},options:void 0},{type:0,name:"showing-multiple",styles:{type:6,styles:{opacity:1,minWidth:"calc(100% + 64px)",transform:"scaleY(1)"},offset:null},options:void 0},{type:1,expr:"void => *",animation:{type:3,steps:[{type:11,selector:"@fadeInContent",animation:{type:9,options:null},options:null},{type:4,styles:null,timings:"150ms cubic-bezier(0.25, 0.8, 0.25, 1)"}],options:null},options:null},{type:1,expr:"* => void",animation:[{type:4,styles:{type:6,styles:{opacity:0},offset:null},timings:"250ms 100ms linear"}],options:null}],options:{}},{type:7,name:"fadeInContent",definitions:[{type:0,name:"showing",styles:{type:6,styles:{opacity:1},offset:null},options:void 0},{type:1,expr:"void => showing",animation:[{type:6,styles:{opacity:0},offset:null},{type:4,styles:null,timings:"150ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)"}],options:null}],options:{}}]}});function A(l){return a.jb(0,[(l()(),a.Qa(0,0,null,null,1,"span",[["class","mat-select-placeholder"]],null,null,null,null,null)),(l()(),a.hb(1,null,["",""]))],null,function(l,n){l(n,1,0,n.component.placeholder||"\xa0")})}function E(l){return a.jb(0,[(l()(),a.Qa(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),a.hb(1,null,["",""]))],null,function(l,n){l(n,1,0,n.component.triggerValue)})}function j(l){return a.jb(0,[a.Za(null,0),(l()(),a.Ha(0,null,null,0))],null,null)}function Q(l){return a.jb(0,[(l()(),a.Qa(0,0,null,null,5,"span",[["class","mat-select-value-text"]],null,null,null,null,null)),a.Pa(1,16384,null,0,y.p,[],{ngSwitch:[0,"ngSwitch"]},null),(l()(),a.Ha(16777216,null,null,1,null,E)),a.Pa(3,16384,null,0,y.r,[a.P,a.M,y.p],null,null),(l()(),a.Ha(16777216,null,null,1,null,j)),a.Pa(5,278528,null,0,y.q,[a.P,a.M,y.p],{ngSwitchCase:[0,"ngSwitchCase"]},null)],function(l,n){l(n,1,0,!!n.component.customTrigger),l(n,5,0,!0)},null)}function F(l){return a.jb(0,[(l()(),a.Qa(0,0,[[2,0],["panel",1]],null,3,"div",[],[[24,"@transformPanel",0],[4,"transformOrigin",null],[2,"mat-select-panel-done-animating",null],[4,"font-size","px"]],[[null,"@transformPanel.done"],[null,"keydown"]],function(l,n,e){var a=!0,t=l.component;return"@transformPanel.done"===n&&(a=!1!==t._panelDoneAnimatingStream.next(e.toState)&&a),"keydown"===n&&(a=!1!==t._handleKeydown(e)&&a),a},null,null)),a.Pa(1,278528,null,0,y.k,[a.s,a.t,a.k,a.E],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(l()(),a.Qa(2,0,null,null,1,"div",[["class","mat-select-content"]],[[24,"@fadeInContent",0]],[[null,"@fadeInContent.done"]],function(l,n,e){var a=!0;return"@fadeInContent.done"===n&&(a=!1!==l.component._onFadeInDone()&&a),a},null,null)),a.Za(null,1)],function(l,n){var e=n.component;l(n,1,0,a.Sa(1,"mat-select-panel ",e._getPanelTheme(),""),e.panelClass)},function(l,n){var e=n.component;l(n,0,0,e.multiple?"showing-multiple":"showing",e._transformOrigin,e._panelDoneAnimating,e._triggerFontSize),l(n,2,0,"showing")})}function D(l){return a.jb(2,[a.fb(402653184,1,{trigger:0}),a.fb(671088640,2,{panel:0}),a.fb(402653184,3,{overlayDir:0}),(l()(),a.Qa(3,0,[[1,0],["trigger",1]],null,9,"div",[["aria-hidden","true"],["cdk-overlay-origin",""],["class","mat-select-trigger"]],null,[[null,"click"]],function(l,n,e){var a=!0;return"click"===n&&(a=!1!==l.component.toggle()&&a),a},null,null)),a.Pa(4,16384,[["origin",4]],0,M.b,[a.k],null,null),(l()(),a.Qa(5,0,null,null,5,"div",[["class","mat-select-value"]],null,null,null,null,null)),a.Pa(6,16384,null,0,y.p,[],{ngSwitch:[0,"ngSwitch"]},null),(l()(),a.Ha(16777216,null,null,1,null,A)),a.Pa(8,278528,null,0,y.q,[a.P,a.M,y.p],{ngSwitchCase:[0,"ngSwitchCase"]},null),(l()(),a.Ha(16777216,null,null,1,null,Q)),a.Pa(10,278528,null,0,y.q,[a.P,a.M,y.p],{ngSwitchCase:[0,"ngSwitchCase"]},null),(l()(),a.Qa(11,0,null,null,1,"div",[["class","mat-select-arrow-wrapper"]],null,null,null,null,null)),(l()(),a.Qa(12,0,null,null,0,"div",[["class","mat-select-arrow"]],null,null,null,null,null)),(l()(),a.Ha(16777216,null,null,1,function(l,n,e){var a=!0,t=l.component;return"backdropClick"===n&&(a=!1!==t.close()&&a),"attach"===n&&(a=!1!==t._onAttached()&&a),"detach"===n&&(a=!1!==t.close()&&a),a},F)),a.Pa(14,671744,[[3,4]],0,M.a,[M.c,a.M,a.P,M.j,[2,x.b]],{origin:[0,"origin"],positions:[1,"positions"],offsetY:[2,"offsetY"],minWidth:[3,"minWidth"],backdropClass:[4,"backdropClass"],scrollStrategy:[5,"scrollStrategy"],open:[6,"open"],hasBackdrop:[7,"hasBackdrop"],lockPosition:[8,"lockPosition"]},{backdropClick:"backdropClick",attach:"attach",detach:"detach"})],function(l,n){var e=n.component;l(n,6,0,e.empty),l(n,8,0,!0),l(n,10,0,!1),l(n,14,0,a.ab(n,4),e._positions,e._offsetY,null==e._triggerRect?null:e._triggerRect.width,"cdk-overlay-transparent-backdrop",e._scrollStrategy,e.panelOpen,"","")},null)}var H=e("NvT6"),N=e("Blfk"),z=e("ZYjt"),R=a.Oa({encapsulation:0,styles:[[".output[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center}mat-card[_ngcontent-%COMP%]{width:350px;cursor:initial}mat-card-footer[_ngcontent-%COMP%]{position:absolute;right:25px;bottom:30px}.mat-chip-list-wrapper[_ngcontent-%COMP%]{flex-wrap:wrap-reverse}mat-chip-list[_ngcontent-%COMP%]{position:absolute;bottom:5px;right:5px} .green.mat-chip{background-color:#aed581} .red.mat-chip{background-color:red}.selectForm[_ngcontent-%COMP%]{margin:10px auto}.mat-tab-labels[_ngcontent-%COMP%]{background-color:#fff}  .mat-tab-header{background-color:#fff} .mat-tab-header-pagination{background-color:#fff}"]],data:{}});function q(l){return a.jb(0,[(l()(),a.Qa(0,0,null,null,2,"mat-option",[["class","mat-option"],["role","option"]],[[1,"tabindex",0],[2,"mat-selected",null],[2,"mat-option-multiple",null],[2,"mat-active",null],[8,"id",0],[1,"aria-selected",0],[1,"aria-disabled",0],[2,"mat-option-disabled",null]],[[null,"onSelectionChange"],[null,"click"],[null,"keydown"]],function(l,n,e){var t=!0,i=l.component;return"click"===n&&(t=!1!==a.ab(l,1)._selectViaInteraction()&&t),"keydown"===n&&(t=!1!==a.ab(l,1)._handleKeydown(e)&&t),"onSelectionChange"===n&&(t=!1!==i.handleSelect(e)&&t),t},b.c,b.a)),a.Pa(1,8568832,[[11,4]],0,p.r,[a.k,a.h,[2,p.j],[2,p.q]],{value:[0,"value"]},{onSelectionChange:"onSelectionChange"}),(l()(),a.hb(2,0,[" "," "]))],function(l,n){l(n,1,0,n.context.$implicit)},function(l,n){l(n,0,0,a.ab(n,1)._getTabIndex(),a.ab(n,1).selected,a.ab(n,1).multiple,a.ab(n,1).active,a.ab(n,1).id,a.ab(n,1).selected.toString(),a.ab(n,1).disabled.toString(),a.ab(n,1).disabled),l(n,2,0,n.context.$implicit)})}function $(l){return a.jb(0,[(l()(),a.Qa(0,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),a.hb(1,null,[" N\xe4hrwertangaben: "," "]))],null,function(l,n){l(n,1,0,n.parent.context.$implicit.hints)})}function U(l){return a.jb(0,[(l()(),a.Qa(0,0,null,null,5,"mat-chip",[["class","green mat-chip"],["role","option"]],[[1,"tabindex",0],[2,"mat-chip-selected",null],[2,"mat-chip-with-avatar",null],[2,"mat-chip-with-trailing-icon",null],[2,"mat-chip-disabled",null],[1,"disabled",0],[1,"aria-disabled",0],[1,"aria-selected",0]],[[null,"click"],[null,"keydown"],[null,"focus"],[null,"blur"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==a.ab(l,1)._handleClick(e)&&t),"keydown"===n&&(t=!1!==a.ab(l,1)._handleKeydown(e)&&t),"focus"===n&&(t=!1!==a.ab(l,1).focus()&&t),"blur"===n&&(t=!1!==a.ab(l,1)._blur()&&t),t},null,null)),a.Pa(1,147456,[[14,4]],3,m.b,[a.k,a.z,h.a,[2,p.k]],null,null),a.fb(335544320,18,{avatar:0}),a.fb(335544320,19,{trailingIcon:0}),a.fb(335544320,20,{removeIcon:0}),(l()(),a.hb(5,null,["",""]))],null,function(l,n){l(n,0,0,a.ab(n,1).disabled?null:-1,a.ab(n,1).selected,a.ab(n,1).avatar,a.ab(n,1).trailingIcon||a.ab(n,1).removeIcon,a.ab(n,1).disabled,a.ab(n,1).disabled||null,a.ab(n,1).disabled.toString(),a.ab(n,1).ariaSelected),l(n,5,0,n.parent.context.$implicit.vegan)})}function W(l){return a.jb(0,[(l()(),a.Qa(0,0,null,null,5,"mat-chip",[["class","red mat-chip"],["role","option"]],[[1,"tabindex",0],[2,"mat-chip-selected",null],[2,"mat-chip-with-avatar",null],[2,"mat-chip-with-trailing-icon",null],[2,"mat-chip-disabled",null],[1,"disabled",0],[1,"aria-disabled",0],[1,"aria-selected",0]],[[null,"click"],[null,"keydown"],[null,"focus"],[null,"blur"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==a.ab(l,1)._handleClick(e)&&t),"keydown"===n&&(t=!1!==a.ab(l,1)._handleKeydown(e)&&t),"focus"===n&&(t=!1!==a.ab(l,1).focus()&&t),"blur"===n&&(t=!1!==a.ab(l,1)._blur()&&t),t},null,null)),a.Pa(1,147456,[[14,4]],3,m.b,[a.k,a.z,h.a,[2,p.k]],null,null),a.fb(335544320,21,{avatar:0}),a.fb(335544320,22,{trailingIcon:0}),a.fb(335544320,23,{removeIcon:0}),(l()(),a.hb(5,null,["",""]))],null,function(l,n){l(n,0,0,a.ab(n,1).disabled?null:-1,a.ab(n,1).selected,a.ab(n,1).avatar,a.ab(n,1).trailingIcon||a.ab(n,1).removeIcon,a.ab(n,1).disabled,a.ab(n,1).disabled||null,a.ab(n,1).disabled.toString(),a.ab(n,1).ariaSelected),l(n,5,0,n.parent.context.$implicit.soldOut)})}function B(l){return a.jb(0,[(l()(),a.Qa(0,0,null,null,30,"mat-card",[["class","mat-card"]],null,null,null,f.d,f.a)),a.Pa(1,49152,null,0,g.a,[],null,null),(l()(),a.Qa(2,0,null,0,5,"mat-card-header",[["class","mat-card-header"]],null,null,null,f.c,f.b)),a.Pa(3,49152,null,0,g.d,[],null,null),(l()(),a.Qa(4,0,null,1,3,"mat-card-title",[["class","mat-card-title"]],null,null,null,null,null)),a.Pa(5,16384,null,0,g.g,[],null,null),(l()(),a.Qa(6,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),a.hb(7,null,["",""])),(l()(),a.Qa(8,0,null,0,22,"mat-card-content",[["class","mat-card-content"]],null,null,null,null,null)),a.Pa(9,16384,null,0,g.b,[],null,null),(l()(),a.hb(10,null,[" "," "])),(l()(),a.Qa(11,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),a.Qa(12,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),a.Ha(16777216,null,null,1,null,$)),a.Pa(14,16384,null,0,y.m,[a.P,a.M],{ngIf:[0,"ngIf"]},null),(l()(),a.Qa(15,0,null,null,15,"mat-chip-list",[["class","mat-chip-list"]],[[1,"tabindex",0],[1,"aria-describedby",0],[1,"aria-required",0],[1,"aria-disabled",0],[1,"aria-invalid",0],[1,"aria-multiselectable",0],[1,"role",0],[2,"mat-chip-list-disabled",null],[2,"mat-chip-list-invalid",null],[2,"mat-chip-list-required",null],[1,"aria-orientation",0],[8,"id",0]],[[null,"focus"],[null,"blur"],[null,"keydown"]],function(l,n,e){var t=!0;return"focus"===n&&(t=!1!==a.ab(l,17).focus()&&t),"blur"===n&&(t=!1!==a.ab(l,17)._blur()&&t),"keydown"===n&&(t=!1!==a.ab(l,17)._keydown(e)&&t),t},w.b,w.a)),a.eb(6144,null,v.c,null,[m.c]),a.Pa(17,1556480,null,1,m.c,[a.k,a.h,[2,x.b],[2,k.m],[2,k.g],p.d,[8,null]],{selectable:[0,"selectable"]},null),a.fb(603979776,14,{chips:1}),(l()(),a.Qa(19,0,null,0,7,"mat-chip",[["class","grey mat-chip"],["role","option"]],[[1,"tabindex",0],[2,"mat-chip-selected",null],[2,"mat-chip-with-avatar",null],[2,"mat-chip-with-trailing-icon",null],[2,"mat-chip-disabled",null],[1,"disabled",0],[1,"aria-disabled",0],[1,"aria-selected",0]],[[null,"click"],[null,"keydown"],[null,"focus"],[null,"blur"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==a.ab(l,20)._handleClick(e)&&t),"keydown"===n&&(t=!1!==a.ab(l,20)._handleKeydown(e)&&t),"focus"===n&&(t=!1!==a.ab(l,20).focus()&&t),"blur"===n&&(t=!1!==a.ab(l,20)._blur()&&t),t},null,null)),a.Pa(20,147456,[[14,4]],3,m.b,[a.k,a.z,h.a,[2,p.k]],null,null),a.fb(335544320,15,{avatar:0}),a.fb(335544320,16,{trailingIcon:0}),a.fb(335544320,17,{removeIcon:0}),(l()(),a.hb(24,null,[" "," / "," "])),a.db(25,2),a.db(26,2),(l()(),a.Ha(16777216,null,0,1,null,U)),a.Pa(28,16384,null,0,y.m,[a.P,a.M],{ngIf:[0,"ngIf"]},null),(l()(),a.Ha(16777216,null,0,1,null,W)),a.Pa(30,16384,null,0,y.m,[a.P,a.M],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,14,0,n.context.$implicit.hints),l(n,17,0,!1),l(n,28,0,n.context.$implicit.vegan),l(n,30,0,n.context.$implicit.soldOut)},function(l,n){l(n,7,0,n.context.$implicit.counter),l(n,10,0,n.context.$implicit.description),l(n,15,1,[a.ab(n,17)._tabIndex,a.ab(n,17)._ariaDescribedby||null,a.ab(n,17).required.toString(),a.ab(n,17).disabled.toString(),a.ab(n,17).errorState,a.ab(n,17).multiple,a.ab(n,17).role,a.ab(n,17).disabled,a.ab(n,17).errorState,a.ab(n,17).required,a.ab(n,17).ariaOrientation,a.ab(n,17)._uid]),l(n,19,0,a.ab(n,20).disabled?null:-1,a.ab(n,20).selected,a.ab(n,20).avatar,a.ab(n,20).trailingIcon||a.ab(n,20).removeIcon,a.ab(n,20).disabled,a.ab(n,20).disabled||null,a.ab(n,20).disabled.toString(),a.ab(n,20).ariaSelected),l(n,24,0,a.ib(n,24,0,l(n,25,0,a.ab(n.parent.parent.parent.parent,0),n.context.$implicit.priceStudents,"\u20ac")),a.ib(n,24,1,l(n,26,0,a.ab(n.parent.parent.parent.parent,0),n.context.$implicit.priceEmployees,"\u20ac")))})}function K(l){return a.jb(0,[(l()(),a.Qa(0,0,null,null,2,"div",[["class","output"]],null,null,null,null,null)),(l()(),a.Ha(16777216,null,null,1,null,B)),a.Pa(2,802816,null,0,y.l,[a.P,a.M,a.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,2,0,n.component.todaysMeals)},null)}function L(l){return a.jb(0,[(l()(),a.Qa(0,16777216,null,null,26,"mat-tab",[],null,null,null,P.d,P.a)),a.Pa(1,770048,[[1,4]],2,C.b,[a.P],{textLabel:[0,"textLabel"]},null),a.fb(335544320,2,{templateLabel:0}),a.fb(335544320,3,{_explicitContent:0}),(l()(),a.Qa(4,0,null,0,20,"mat-form-field",[["class","selectForm mat-elevation-z3 mat-form-field"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,_.b,_.a)),a.Pa(5,7389184,null,7,v.b,[a.k,a.h,[2,p.h],[2,x.b],[2,v.a],h.a,a.z,[2,S.a]],null,null),a.fb(335544320,4,{_control:0}),a.fb(335544320,5,{_placeholderChild:0}),a.fb(335544320,6,{_labelChild:0}),a.fb(603979776,7,{_errorChildren:1}),a.fb(603979776,8,{_hintChildren:1}),a.fb(603979776,9,{_prefixChildren:1}),a.fb(603979776,10,{_suffixChildren:1}),(l()(),a.Qa(13,0,null,1,11,"mat-select",[["class","mat-select"],["placeholder","Tag ausw\xe4hlen"],["role","listbox"]],[[1,"id",0],[1,"tabindex",0],[1,"aria-label",0],[1,"aria-labelledby",0],[1,"aria-required",0],[1,"aria-disabled",0],[1,"aria-invalid",0],[1,"aria-owns",0],[1,"aria-multiselectable",0],[1,"aria-describedby",0],[1,"aria-activedescendant",0],[2,"mat-select-disabled",null],[2,"mat-select-invalid",null],[2,"mat-select-required",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"keydown"],[null,"focus"],[null,"blur"]],function(l,n,e){var t=!0,i=l.component;return"keydown"===n&&(t=!1!==a.ab(l,17)._handleKeydown(e)&&t),"focus"===n&&(t=!1!==a.ab(l,17)._onFocus()&&t),"blur"===n&&(t=!1!==a.ab(l,17)._onBlur()&&t),"ngModelChange"===n&&(t=!1!==(i.today=e)&&t),t},D,T)),a.eb(6144,null,p.j,null,[Y.c]),a.Pa(15,671744,null,0,k.n,[[8,null],[8,null],[8,null],[8,null]],{model:[0,"model"]},{update:"ngModelChange"}),a.eb(2048,null,k.j,null,[k.n]),a.Pa(17,2080768,null,3,Y.c,[O.e,a.h,a.z,p.d,a.k,[2,x.b],[2,k.m],[2,k.g],[2,v.b],[6,k.j],[8,null],Y.a],{placeholder:[0,"placeholder"]},null),a.fb(603979776,11,{options:1}),a.fb(603979776,12,{optionGroups:1}),a.fb(335544320,13,{customTrigger:0}),a.Pa(21,16384,null,0,k.k,[[4,k.j]],null,null),a.eb(2048,[[4,4]],v.c,null,[Y.c]),(l()(),a.Ha(16777216,null,1,1,null,q)),a.Pa(24,802816,null,0,y.l,[a.P,a.M,a.s],{ngForOf:[0,"ngForOf"]},null),(l()(),a.Ha(16777216,null,0,1,null,K)),a.Pa(26,16384,null,0,y.m,[a.P,a.M],{ngIf:[0,"ngIf"]},null),(l()(),a.Ha(0,null,null,0))],function(l,n){var e=n.component;l(n,1,0,a.Sa(1,"",n.context.$implicit.name,"")),l(n,15,0,e.today),l(n,17,0,"Tag ausw\xe4hlen"),l(n,24,0,n.context.$implicit.days),l(n,26,0,e.todaysMeals)},function(l,n){l(n,4,1,["standard"==a.ab(n,5).appearance,"fill"==a.ab(n,5).appearance,"outline"==a.ab(n,5).appearance,"legacy"==a.ab(n,5).appearance,a.ab(n,5)._control.errorState,a.ab(n,5)._canLabelFloat,a.ab(n,5)._shouldLabelFloat(),a.ab(n,5)._hideControlPlaceholder(),a.ab(n,5)._control.disabled,a.ab(n,5)._control.autofilled,a.ab(n,5)._control.focused,"accent"==a.ab(n,5).color,"warn"==a.ab(n,5).color,a.ab(n,5)._shouldForward("untouched"),a.ab(n,5)._shouldForward("touched"),a.ab(n,5)._shouldForward("pristine"),a.ab(n,5)._shouldForward("dirty"),a.ab(n,5)._shouldForward("valid"),a.ab(n,5)._shouldForward("invalid"),a.ab(n,5)._shouldForward("pending"),!a.ab(n,5)._animationsEnabled]),l(n,13,1,[a.ab(n,17).id,a.ab(n,17).tabIndex,a.ab(n,17)._getAriaLabel(),a.ab(n,17)._getAriaLabelledby(),a.ab(n,17).required.toString(),a.ab(n,17).disabled.toString(),a.ab(n,17).errorState,a.ab(n,17).panelOpen?a.ab(n,17)._optionIds:null,a.ab(n,17).multiple,a.ab(n,17)._ariaDescribedby||null,a.ab(n,17)._getAriaActiveDescendant(),a.ab(n,17).disabled,a.ab(n,17).errorState,a.ab(n,17).required,a.ab(n,21).ngClassUntouched,a.ab(n,21).ngClassTouched,a.ab(n,21).ngClassPristine,a.ab(n,21).ngClassDirty,a.ab(n,21).ngClassValid,a.ab(n,21).ngClassInvalid,a.ab(n,21).ngClassPending])})}function Z(l){return a.jb(0,[(l()(),a.Qa(0,0,null,null,5,null,null,null,null,null,null,null)),(l()(),a.Qa(1,0,null,null,4,"mat-tab-group",[["class","mat-tab-group"]],[[2,"mat-tab-group-dynamic-height",null],[2,"mat-tab-group-inverted-header",null]],[[null,"selectedTabChange"]],function(l,n,e){var a=!0;return"selectedTabChange"===n&&(a=!1!==l.component.setActiveCanteen(e)&&a),a},P.c,P.b)),a.Pa(2,3325952,null,1,C.e,[a.k,a.h],null,{selectedTabChange:"selectedTabChange"}),a.fb(603979776,1,{_tabs:1}),(l()(),a.Ha(16777216,null,null,1,null,L)),a.Pa(5,802816,null,0,y.l,[a.P,a.M,a.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,5,0,n.component.canteens)},function(l,n){l(n,1,0,a.ab(n,2).dynamicHeight,"below"===a.ab(n,2).headerPosition)})}function G(l){return a.jb(0,[(l()(),a.Qa(0,0,null,null,1,"mat-spinner",[["class","mat-spinner mat-progress-spinner"],["mode","indeterminate"],["role","progressbar"]],[[2,"_mat-animation-noopable",null],[4,"width","px"],[4,"height","px"]],null,null,H.b,H.a)),a.Pa(1,49152,null,0,N.d,[a.k,h.a,[2,y.e],[2,S.a],N.a],null,null)],null,function(l,n){l(n,0,0,a.ab(n,1)._noopAnimations,a.ab(n,1).diameter,a.ab(n,1).diameter)})}function V(l){return a.jb(0,[a.bb(0,y.d,[a.u]),(l()(),a.Qa(1,0,null,null,3,"main",[["class","content-container"]],null,null,null,null,null)),(l()(),a.Ha(16777216,null,null,1,null,Z)),a.Pa(3,16384,null,0,y.m,[a.P,a.M],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(l()(),a.Ha(0,[["spinner",2]],null,0,null,G))],function(l,n){l(n,3,0,n.component.canteens.length>0,a.ab(n,4))},null)}var X=a.Ma("app-canteen",r,function(l){return a.jb(0,[(l()(),a.Qa(0,0,null,null,1,"app-canteen",[],null,null,null,V,R)),a.Pa(1,114688,null,0,r,[z.i,t.a,u],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),J=e("4tE/"),ll=e("M2Lx"),nl=e("ZYCi"),el=e("LC5p"),al=e("0/Q6"),tl=e("YhbO"),il=e("jlZm"),ol=e("y4qS"),ul=e("BHnd"),rl=e("/VYK"),sl=e("b716"),cl=e("UodH"),dl=e("BgWK"),bl=e("SMsm"),pl=e("8mMr"),ml=e("Nsh5"),hl=e("hctd"),fl=e("YSh2");e.d(n,"CanteenModuleNgFactory",function(){return gl});var gl=a.Na(s,[],function(l){return a.Xa([a.Ya(512,a.j,a.Ca,[[8,[c.a,d.a,X]],[3,a.j],a.x]),a.Ya(4608,y.o,y.n,[a.u,[2,y.x]]),a.Ya(4608,p.d,p.d,[]),a.Ya(4608,M.c,M.c,[M.i,M.e,a.j,M.h,M.f,a.r,a.z,y.e,x.b]),a.Ya(5120,M.j,M.k,[M.c]),a.Ya(5120,J.b,J.c,[M.c]),a.Ya(5120,Y.a,Y.b,[M.c]),a.Ya(4608,ll.c,ll.c,[]),a.Ya(4608,k.d,k.d,[]),a.Ya(4608,k.r,k.r,[]),a.Ya(1073742336,y.c,y.c,[]),a.Ya(1073742336,nl.n,nl.n,[[2,nl.t],[2,nl.k]]),a.Ya(1073742336,x.a,x.a,[]),a.Ya(1073742336,p.l,p.l,[[2,p.e]]),a.Ya(1073742336,p.n,p.n,[]),a.Ya(1073742336,h.b,h.b,[]),a.Ya(1073742336,p.x,p.x,[]),a.Ya(1073742336,p.v,p.v,[]),a.Ya(1073742336,el.b,el.b,[]),a.Ya(1073742336,al.c,al.c,[]),a.Ya(1073742336,tl.c,tl.c,[]),a.Ya(1073742336,I.g,I.g,[]),a.Ya(1073742336,il.b,il.b,[]),a.Ya(1073742336,ol.p,ol.p,[]),a.Ya(1073742336,ul.l,ul.l,[]),a.Ya(1073742336,rl.c,rl.c,[]),a.Ya(1073742336,v.d,v.d,[]),a.Ya(1073742336,sl.b,sl.b,[]),a.Ya(1073742336,p.s,p.s,[]),a.Ya(1073742336,O.b,O.b,[]),a.Ya(1073742336,M.g,M.g,[]),a.Ya(1073742336,J.e,J.e,[]),a.Ya(1073742336,g.e,g.e,[]),a.Ya(1073742336,Y.d,Y.d,[]),a.Ya(1073742336,m.d,m.d,[]),a.Ya(1073742336,cl.c,cl.c,[]),a.Ya(1073742336,dl.e,dl.e,[]),a.Ya(1073742336,ll.d,ll.d,[]),a.Ya(1073742336,C.i,C.i,[]),a.Ya(1073742336,bl.b,bl.b,[]),a.Ya(1073742336,pl.b,pl.b,[]),a.Ya(1073742336,ml.h,ml.h,[]),a.Ya(1073742336,N.c,N.c,[]),a.Ya(1073742336,hl.a,hl.a,[]),a.Ya(1073742336,k.p,k.p,[]),a.Ya(1073742336,k.o,k.o,[]),a.Ya(1073742336,k.h,k.h,[]),a.Ya(1073742336,s,s,[]),a.Ya(256,m.a,{separatorKeyCodes:[fl.f]},[]),a.Ya(1024,nl.i,function(){return[[{path:"",component:r}]]},[])])})}}]);