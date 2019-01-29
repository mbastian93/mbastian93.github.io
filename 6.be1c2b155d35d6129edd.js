(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{O6c9:function(l,n,e){"use strict";e.r(n);var a=e("8Y7J"),t=e("2Imx");class i{constructor(l){this.name=l,this.meals=[]}}class u{constructor(l,n){this.days=[],this.name=l,this.counters=n}getMealsForDayByCounter(l){const n=[];return this.counters.forEach(e=>{const a=new i(e.name);e.meals.forEach(n=>{n.date===l&&a.meals.push(n)}),n.push(a)}),n}addMeal(l,n){this.counters.forEach(e=>{e.types.indexOf(n)>=0&&e.meals.push(l)}),this.days.indexOf(l.date)<0&&this.days.push(l.date)}}class o{}var r=e("IheW");const s="https://www.studierendenwerk-mainz.de/speiseplan/Speiseplan.xml";class c{constructor(l){this.http=l,this.domParser=new DOMParser,this.rawCanteens=e("rRmt"),this.canteens=[]}static checkDate(l){const n=l.split("."),e=new Date(+n[2],+n[1]-1,+n[0],0,0,0,0),a=new Date;return a.setHours(0,0,0,0),a<=e}getCanteenPlans(){return this.http.get(s,{responseType:"text"})}parseCanteenPlan(l){this.rawCanteens.forEach(l=>{this.canteens.push(new u(l.name,l.counters))});const n=this.domParser.parseFromString(l,"text/xml");return Array.from(n.getElementsByTagName("ROW")).forEach(l=>{const n=new o;if(n.date=l.getAttribute("DATUM"),!c.checkDate(n.date))return;const e=+l.getAttribute("VERBRAUCHSORT");if([310,312,370,425].indexOf(e)<0)return;const a=+l.getAttribute("TYP");37!==a&&9!==a&&""!==l.getAttribute("ARTNR")&&(l.getAttribute("SPEISE").toLowerCase().indexOf("salat")>=0||(n.description=l.getAttribute("AUSGABETEXT"),n.vegan=l.getAttribute("MENUEKENNZTEXT"),n.additives=l.getAttribute("ZSNUMMERN"),n.priceStudents=+l.getAttribute("STUDIERENDE"),n.priceEmployees=+l.getAttribute("BEDIENSTETE"),n.hints=l.getAttribute("REZHINWEISE"),n.soldOut=l.getAttribute("AUSVERKAUFT"),this.addMealToMensa(n,e,a)))}),this.canteens}addMealToMensa(l,n,e){switch(n){case 310:this.canteens[0].addMeal(l,e);break;case 312:this.canteens[1].addMeal(l,e);break;case 370:this.canteens[2].addMeal(l,e);break;case 425:this.canteens[3].addMeal(l,e)}}}c.ngInjectableDef=a.S({factory:function(){return new c(a.W(r.c))},token:c,providedIn:"root"});class d{constructor(l,n,e){this.titleService=l,this.toolbarService=n,this.canteenService=e,this.title="JGU Portal | Mensapl\xe4ne ",this.canteens=[],this.counters=[]}ngOnInit(){this.setTitle(),0===(this.canteens=this.canteenService.canteens).length&&this.canteenService.getCanteenPlans().subscribe(l=>{this.canteens=this.canteenService.parseCanteenPlan(l)})}setTitle(){this.titleService.setTitle(this.title),this.toolbarService.setToolbarTitle(this.title)}handleSelect(l){l.isUserInput?(void 0===this.selectedCanteen&&(this.selectedCanteen=this.canteens[0]),this.counters=this.selectedCanteen.getMealsForDayByCounter(l.source.value))}setActiveCanteen(l){this.selectedCanteen=this.canteens[l.index],void 0!==this.selectedDay&&(this.counters=this.selectedCanteen.getMealsForDayByCounter(this.selectedDay))}}class p{}var m=e("pMnS"),h=e("yWMr"),b=e("MlvX"),g=e("Xd0L"),f=e("kNGD"),y=e("/HVE"),Z=e("lzlj"),w=e("igqZ"),v=e("SVse"),x=e("tRTW"),k=e("HsOI"),O=e("IP0z"),_=e("s7LF"),C=e("AyJq"),S=e("c9fC"),P=e("8bJo"),X=e("5GAg"),I=e("Rlre"),T=e("rWV4"),E=e("dJrM"),M=e("omvX"),A=e("JjoW"),F=e("QQfA"),L=e("zMNK"),D=e("hOhj"),G=a.Na({encapsulation:2,styles:[".mat-select{display:inline-block;width:100%;outline:0}.mat-select-trigger{display:inline-table;cursor:pointer;position:relative;box-sizing:border-box}.mat-select-disabled .mat-select-trigger{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-select-value{display:table-cell;max-width:0;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-select-arrow-wrapper{display:table-cell;vertical-align:middle}.mat-form-field-appearance-fill .mat-select-arrow-wrapper,.mat-form-field-appearance-standard .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-outline .mat-select-arrow-wrapper{transform:translateY(-25%)}.mat-select-arrow{width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;margin:0 4px}.mat-select-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;padding-top:0;padding-bottom:0;max-height:256px;min-width:100%}.mat-select-panel:not([class*=mat-elevation-z]){box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}@media screen and (-ms-high-contrast:active){.mat-select-panel{outline:solid 1px}}.mat-select-panel .mat-optgroup-label,.mat-select-panel .mat-option{font-size:inherit;line-height:3em;height:3em}.mat-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-form-field-flex{cursor:pointer}.mat-form-field-type-mat-select .mat-form-field-label{width:calc(100% - 18px)}.mat-select-placeholder{transition:color .4s .133s cubic-bezier(.25,.8,.25,1)}._mat-animation-noopable .mat-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-select-placeholder{color:transparent;transition:none;display:block}"],data:{animation:[{type:7,name:"transformPanel",definitions:[{type:0,name:"void",styles:{type:6,styles:{transform:"scaleY(0)",minWidth:"100%",opacity:0},offset:null},options:void 0},{type:0,name:"showing",styles:{type:6,styles:{opacity:1,minWidth:"calc(100% + 32px)",transform:"scaleY(1)"},offset:null},options:void 0},{type:0,name:"showing-multiple",styles:{type:6,styles:{opacity:1,minWidth:"calc(100% + 64px)",transform:"scaleY(1)"},offset:null},options:void 0},{type:1,expr:"void => *",animation:{type:3,steps:[{type:11,selector:"@fadeInContent",animation:{type:9,options:null},options:null},{type:4,styles:null,timings:"150ms cubic-bezier(0.25, 0.8, 0.25, 1)"}],options:null},options:null},{type:1,expr:"* => void",animation:[{type:4,styles:{type:6,styles:{opacity:0},offset:null},timings:"250ms 100ms linear"}],options:null}],options:{}},{type:7,name:"fadeInContent",definitions:[{type:0,name:"showing",styles:{type:6,styles:{opacity:1},offset:null},options:void 0},{type:1,expr:"void => showing",animation:[{type:6,styles:{opacity:0},offset:null},{type:4,styles:null,timings:"150ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)"}],options:null}],options:{}}]}});function R(l){return a.ib(0,[(l()(),a.Pa(0,0,null,null,1,"span",[["class","mat-select-placeholder"]],null,null,null,null,null)),(l()(),a.gb(1,null,["",""]))],null,function(l,n){l(n,1,0,n.component.placeholder||"\xa0")})}function z(l){return a.ib(0,[(l()(),a.Pa(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),a.gb(1,null,["",""]))],null,function(l,n){l(n,1,0,n.component.triggerValue)})}function N(l){return a.ib(0,[a.Ya(null,0),(l()(),a.Ga(0,null,null,0))],null,null)}function j(l){return a.ib(0,[(l()(),a.Pa(0,0,null,null,5,"span",[["class","mat-select-value-text"]],null,null,null,null,null)),a.Oa(1,16384,null,0,v.p,[],{ngSwitch:[0,"ngSwitch"]},null),(l()(),a.Ga(16777216,null,null,1,null,z)),a.Oa(3,16384,null,0,v.r,[a.O,a.L,v.p],null,null),(l()(),a.Ga(16777216,null,null,1,null,N)),a.Oa(5,278528,null,0,v.q,[a.O,a.L,v.p],{ngSwitchCase:[0,"ngSwitchCase"]},null)],function(l,n){l(n,1,0,!!n.component.customTrigger),l(n,5,0,!0)},null)}function q(l){return a.ib(0,[(l()(),a.Pa(0,0,[[2,0],["panel",1]],null,3,"div",[],[[24,"@transformPanel",0],[4,"transformOrigin",null],[2,"mat-select-panel-done-animating",null],[4,"font-size","px"]],[[null,"@transformPanel.done"],[null,"keydown"]],function(l,n,e){var a=!0,t=l.component;return"@transformPanel.done"===n&&(a=!1!==t._panelDoneAnimatingStream.next(e.toState)&&a),"keydown"===n&&(a=!1!==t._handleKeydown(e)&&a),a},null,null)),a.Oa(1,278528,null,0,v.k,[a.r,a.s,a.k,a.D],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(l()(),a.Pa(2,0,null,null,1,"div",[["class","mat-select-content"]],[[24,"@fadeInContent",0]],[[null,"@fadeInContent.done"]],function(l,n,e){var a=!0;return"@fadeInContent.done"===n&&(a=!1!==l.component._onFadeInDone()&&a),a},null,null)),a.Ya(null,1)],function(l,n){var e=n.component;l(n,1,0,a.Ra(1,"mat-select-panel ",e._getPanelTheme(),""),e.panelClass)},function(l,n){var e=n.component;l(n,0,0,e.multiple?"showing-multiple":"showing",e._transformOrigin,e._panelDoneAnimating,e._triggerFontSize),l(n,2,0,"showing")})}function B(l){return a.ib(2,[a.eb(402653184,1,{trigger:0}),a.eb(671088640,2,{panel:0}),a.eb(402653184,3,{overlayDir:0}),(l()(),a.Pa(3,0,[[1,0],["trigger",1]],null,9,"div",[["aria-hidden","true"],["cdk-overlay-origin",""],["class","mat-select-trigger"]],null,[[null,"click"]],function(l,n,e){var a=!0;return"click"===n&&(a=!1!==l.component.toggle()&&a),a},null,null)),a.Oa(4,16384,[["origin",4]],0,F.b,[a.k],null,null),(l()(),a.Pa(5,0,null,null,5,"div",[["class","mat-select-value"]],null,null,null,null,null)),a.Oa(6,16384,null,0,v.p,[],{ngSwitch:[0,"ngSwitch"]},null),(l()(),a.Ga(16777216,null,null,1,null,R)),a.Oa(8,278528,null,0,v.q,[a.O,a.L,v.p],{ngSwitchCase:[0,"ngSwitchCase"]},null),(l()(),a.Ga(16777216,null,null,1,null,j)),a.Oa(10,278528,null,0,v.q,[a.O,a.L,v.p],{ngSwitchCase:[0,"ngSwitchCase"]},null),(l()(),a.Pa(11,0,null,null,1,"div",[["class","mat-select-arrow-wrapper"]],null,null,null,null,null)),(l()(),a.Pa(12,0,null,null,0,"div",[["class","mat-select-arrow"]],null,null,null,null,null)),(l()(),a.Ga(16777216,null,null,1,function(l,n,e){var a=!0,t=l.component;return"backdropClick"===n&&(a=!1!==t.close()&&a),"attach"===n&&(a=!1!==t._onAttached()&&a),"detach"===n&&(a=!1!==t.close()&&a),a},q)),a.Oa(14,671744,[[3,4]],0,F.a,[F.c,a.L,a.O,F.j,[2,O.b]],{origin:[0,"origin"],positions:[1,"positions"],offsetY:[2,"offsetY"],minWidth:[3,"minWidth"],backdropClass:[4,"backdropClass"],scrollStrategy:[5,"scrollStrategy"],open:[6,"open"],hasBackdrop:[7,"hasBackdrop"],lockPosition:[8,"lockPosition"]},{backdropClick:"backdropClick",attach:"attach",detach:"detach"})],function(l,n){var e=n.component;l(n,6,0,e.empty),l(n,8,0,!0),l(n,10,0,!1),l(n,14,0,a.Za(n,4),e._positions,e._offsetY,null==e._triggerRect?null:e._triggerRect.width,"cdk-overlay-transparent-backdrop",e._scrollStrategy,e.panelOpen,"","")},null)}var W=e("NvT6"),$=e("W5yJ"),H=e("cUpR"),K=a.Na({encapsulation:0,styles:[[".output[_ngcontent-%COMP%]{justify-content:center}mat-card[_ngcontent-%COMP%]{max-width:350px;cursor:initial}@media screen and (min-width:376px){mat-card[_ngcontent-%COMP%]{width:350px}}@media screen and (max-width:375px){mat-card[_ngcontent-%COMP%]{min-width:317px}}@media screen and (max-width:320px){mat-card[_ngcontent-%COMP%]{min-width:262px}}mat-card-footer[_ngcontent-%COMP%]{height:40px}.mat-chip-list-wrapper[_ngcontent-%COMP%]{flex-wrap:wrap-reverse}mat-chip-list[_ngcontent-%COMP%]{position:absolute;bottom:5px;right:5px} .green.mat-chip{background-color:#aed581} .red.mat-chip{background-color:red}.selectForm[_ngcontent-%COMP%]{margin:10px auto}.mat-tab-labels[_ngcontent-%COMP%]{background-color:#fff}  .mat-tab-header{background-color:#fff} .mat-tab-header-pagination{background-color:#fff} .mat-expansion-panel-body{display:flex;flex-wrap:wrap;justify-content:center}"]],data:{}});function U(l){return a.ib(0,[(l()(),a.Pa(0,0,null,null,2,"mat-option",[["class","mat-option"],["role","option"]],[[1,"tabindex",0],[2,"mat-selected",null],[2,"mat-option-multiple",null],[2,"mat-active",null],[8,"id",0],[1,"aria-selected",0],[1,"aria-disabled",0],[2,"mat-option-disabled",null]],[[null,"onSelectionChange"],[null,"click"],[null,"keydown"]],function(l,n,e){var t=!0,i=l.component;return"click"===n&&(t=!1!==a.Za(l,1)._selectViaInteraction()&&t),"keydown"===n&&(t=!1!==a.Za(l,1)._handleKeydown(e)&&t),"onSelectionChange"===n&&(t=!1!==i.handleSelect(e)&&t),t},b.c,b.a)),a.Oa(1,8568832,[[11,4]],0,g.r,[a.k,a.h,[2,g.j],[2,g.q]],{value:[0,"value"]},{onSelectionChange:"onSelectionChange"}),(l()(),a.gb(2,0,[" "," "]))],function(l,n){l(n,1,0,n.context.$implicit)},function(l,n){l(n,0,0,a.Za(n,1)._getTabIndex(),a.Za(n,1).selected,a.Za(n,1).multiple,a.Za(n,1).active,a.Za(n,1).id,a.Za(n,1).selected.toString(),a.Za(n,1).disabled.toString(),a.Za(n,1).disabled),l(n,2,0,n.context.$implicit)})}function Y(l){return a.ib(0,[(l()(),a.Pa(0,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),a.gb(1,null,[" N\xe4hrwertangaben: "," "]))],null,function(l,n){l(n,1,0,n.parent.context.$implicit.hints)})}function J(l){return a.ib(0,[(l()(),a.Pa(0,0,null,null,5,"mat-chip",[["class","green mat-chip"],["role","option"]],[[1,"tabindex",0],[2,"mat-chip-selected",null],[2,"mat-chip-with-avatar",null],[2,"mat-chip-with-trailing-icon",null],[2,"mat-chip-disabled",null],[1,"disabled",0],[1,"aria-disabled",0],[1,"aria-selected",0]],[[null,"click"],[null,"keydown"],[null,"focus"],[null,"blur"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==a.Za(l,1)._handleClick(e)&&t),"keydown"===n&&(t=!1!==a.Za(l,1)._handleKeydown(e)&&t),"focus"===n&&(t=!1!==a.Za(l,1).focus()&&t),"blur"===n&&(t=!1!==a.Za(l,1)._blur()&&t),t},null,null)),a.Oa(1,147456,[[15,4]],3,f.b,[a.k,a.y,y.a,[2,g.k]],null,null),a.eb(335544320,19,{avatar:0}),a.eb(335544320,20,{trailingIcon:0}),a.eb(335544320,21,{removeIcon:0}),(l()(),a.gb(5,null,["",""]))],null,function(l,n){l(n,0,0,a.Za(n,1).disabled?null:-1,a.Za(n,1).selected,a.Za(n,1).avatar,a.Za(n,1).trailingIcon||a.Za(n,1).removeIcon,a.Za(n,1).disabled,a.Za(n,1).disabled||null,a.Za(n,1).disabled.toString(),a.Za(n,1).ariaSelected),l(n,5,0,n.parent.context.$implicit.vegan)})}function V(l){return a.ib(0,[(l()(),a.Pa(0,0,null,null,5,"mat-chip",[["class","red mat-chip"],["role","option"]],[[1,"tabindex",0],[2,"mat-chip-selected",null],[2,"mat-chip-with-avatar",null],[2,"mat-chip-with-trailing-icon",null],[2,"mat-chip-disabled",null],[1,"disabled",0],[1,"aria-disabled",0],[1,"aria-selected",0]],[[null,"click"],[null,"keydown"],[null,"focus"],[null,"blur"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==a.Za(l,1)._handleClick(e)&&t),"keydown"===n&&(t=!1!==a.Za(l,1)._handleKeydown(e)&&t),"focus"===n&&(t=!1!==a.Za(l,1).focus()&&t),"blur"===n&&(t=!1!==a.Za(l,1)._blur()&&t),t},null,null)),a.Oa(1,147456,[[15,4]],3,f.b,[a.k,a.y,y.a,[2,g.k]],null,null),a.eb(335544320,22,{avatar:0}),a.eb(335544320,23,{trailingIcon:0}),a.eb(335544320,24,{removeIcon:0}),(l()(),a.gb(5,null,["",""]))],null,function(l,n){l(n,0,0,a.Za(n,1).disabled?null:-1,a.Za(n,1).selected,a.Za(n,1).avatar,a.Za(n,1).trailingIcon||a.Za(n,1).removeIcon,a.Za(n,1).disabled,a.Za(n,1).disabled||null,a.Za(n,1).disabled.toString(),a.Za(n,1).ariaSelected),l(n,5,0,n.parent.context.$implicit.soldOut)})}function Q(l){return a.ib(0,[(l()(),a.Pa(0,0,null,null,26,"mat-card",[["class","mat-card"]],null,null,null,Z.d,Z.a)),a.Oa(1,49152,null,0,w.a,[],null,null),(l()(),a.Pa(2,0,null,0,24,"mat-card-content",[["class","mat-card-content"]],null,null,null,null,null)),a.Oa(3,16384,null,0,w.b,[],null,null),(l()(),a.gb(4,null,[" "," "])),(l()(),a.Pa(5,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),a.Pa(6,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),a.Ga(16777216,null,null,1,null,Y)),a.Oa(8,16384,null,0,v.m,[a.O,a.L],{ngIf:[0,"ngIf"]},null),(l()(),a.Pa(9,0,null,null,17,"mat-card-footer",[["class","mat-card-footer"]],null,null,null,null,null)),a.Oa(10,16384,null,0,w.c,[],null,null),(l()(),a.Pa(11,0,null,null,15,"mat-chip-list",[["class","mat-chip-list"]],[[1,"tabindex",0],[1,"aria-describedby",0],[1,"aria-required",0],[1,"aria-disabled",0],[1,"aria-invalid",0],[1,"aria-multiselectable",0],[1,"role",0],[2,"mat-chip-list-disabled",null],[2,"mat-chip-list-invalid",null],[2,"mat-chip-list-required",null],[1,"aria-orientation",0],[8,"id",0]],[[null,"focus"],[null,"blur"],[null,"keydown"]],function(l,n,e){var t=!0;return"focus"===n&&(t=!1!==a.Za(l,13).focus()&&t),"blur"===n&&(t=!1!==a.Za(l,13)._blur()&&t),"keydown"===n&&(t=!1!==a.Za(l,13)._keydown(e)&&t),t},x.b,x.a)),a.db(6144,null,k.c,null,[f.c]),a.Oa(13,1556480,null,1,f.c,[a.k,a.h,[2,O.b],[2,_.m],[2,_.g],g.d,[8,null]],{selectable:[0,"selectable"]},null),a.eb(603979776,15,{chips:1}),(l()(),a.Pa(15,0,null,0,7,"mat-chip",[["class","grey mat-chip"],["role","option"]],[[1,"tabindex",0],[2,"mat-chip-selected",null],[2,"mat-chip-with-avatar",null],[2,"mat-chip-with-trailing-icon",null],[2,"mat-chip-disabled",null],[1,"disabled",0],[1,"aria-disabled",0],[1,"aria-selected",0]],[[null,"click"],[null,"keydown"],[null,"focus"],[null,"blur"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==a.Za(l,16)._handleClick(e)&&t),"keydown"===n&&(t=!1!==a.Za(l,16)._handleKeydown(e)&&t),"focus"===n&&(t=!1!==a.Za(l,16).focus()&&t),"blur"===n&&(t=!1!==a.Za(l,16)._blur()&&t),t},null,null)),a.Oa(16,147456,[[15,4]],3,f.b,[a.k,a.y,y.a,[2,g.k]],null,null),a.eb(335544320,16,{avatar:0}),a.eb(335544320,17,{trailingIcon:0}),a.eb(335544320,18,{removeIcon:0}),(l()(),a.gb(20,null,[" "," / "," "])),a.cb(21,2),a.cb(22,2),(l()(),a.Ga(16777216,null,0,1,null,J)),a.Oa(24,16384,null,0,v.m,[a.O,a.L],{ngIf:[0,"ngIf"]},null),(l()(),a.Ga(16777216,null,0,1,null,V)),a.Oa(26,16384,null,0,v.m,[a.O,a.L],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,8,0,n.context.$implicit.hints),l(n,13,0,!1),l(n,24,0,n.context.$implicit.vegan),l(n,26,0,n.context.$implicit.soldOut)},function(l,n){l(n,4,0,n.context.$implicit.description),l(n,11,1,[a.Za(n,13)._tabIndex,a.Za(n,13)._ariaDescribedby||null,a.Za(n,13).required.toString(),a.Za(n,13).disabled.toString(),a.Za(n,13).errorState,a.Za(n,13).multiple,a.Za(n,13).role,a.Za(n,13).disabled,a.Za(n,13).errorState,a.Za(n,13).required,a.Za(n,13).ariaOrientation,a.Za(n,13)._uid]),l(n,15,0,a.Za(n,16).disabled?null:-1,a.Za(n,16).selected,a.Za(n,16).avatar,a.Za(n,16).trailingIcon||a.Za(n,16).removeIcon,a.Za(n,16).disabled,a.Za(n,16).disabled||null,a.Za(n,16).disabled.toString(),a.Za(n,16).ariaSelected),l(n,20,0,a.hb(n,20,0,l(n,21,0,a.Za(n.parent.parent.parent.parent.parent,0),n.context.$implicit.priceStudents,"\u20ac")),a.hb(n,20,1,l(n,22,0,a.Za(n.parent.parent.parent.parent.parent,0),n.context.$implicit.priceEmployees,"\u20ac")))})}function ll(l){return a.ib(0,[(l()(),a.Pa(0,0,null,null,2,"mat-card",[["class","mat-card"]],null,null,null,Z.d,Z.a)),a.Oa(1,49152,null,0,w.a,[],null,null),(l()(),a.gb(-1,0,[" Heute geschlossen "]))],null,null)}function nl(l){return a.ib(0,[(l()(),a.Pa(0,16777216,null,null,12,"mat-expansion-panel",[["class","mat-expansion-panel"]],[[2,"mat-expanded",null],[2,"mat-expansion-panel-spacing",null]],null,null,C.d,C.a)),a.Oa(1,1753088,null,1,S.c,[[3,S.a],a.h,P.c,a.O],null,null),a.eb(335544320,14,{_lazyContent:0}),a.db(256,null,S.a,void 0,[]),(l()(),a.Pa(4,0,null,0,4,"mat-expansion-panel-header",[["class","mat-expansion-panel-header"],["role","button"]],[[1,"id",0],[1,"tabindex",0],[1,"aria-controls",0],[1,"aria-expanded",0],[1,"aria-disabled",0],[2,"mat-expanded",null],[40,"@expansionHeight",0]],[[null,"click"],[null,"keydown"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==a.Za(l,5)._toggle()&&t),"keydown"===n&&(t=!1!==a.Za(l,5)._keydown(e)&&t),t},C.c,C.b)),a.Oa(5,180224,null,0,S.d,[S.c,a.k,X.c,a.h],null,null),a.bb(6,{collapsedHeight:0,expandedHeight:1}),a.bb(7,{value:0,params:1}),(l()(),a.gb(8,2,[" "," "])),(l()(),a.Ga(16777216,null,1,1,null,Q)),a.Oa(10,802816,null,0,v.l,[a.O,a.L,a.r],{ngForOf:[0,"ngForOf"]},null),(l()(),a.Ga(16777216,null,1,1,null,ll)),a.Oa(12,16384,null,0,v.m,[a.O,a.L],{ngIf:[0,"ngIf"]},null),(l()(),a.Ga(0,null,null,0))],function(l,n){l(n,10,0,n.context.$implicit.meals),l(n,12,0,0===n.context.$implicit.meals.length)},function(l,n){l(n,0,0,a.Za(n,1).expanded,a.Za(n,1)._hasSpacing()),l(n,4,0,a.Za(n,5).panel._headerId,a.Za(n,5).panel.disabled?-1:0,a.Za(n,5)._getPanelId(),a.Za(n,5)._isExpanded(),a.Za(n,5).panel.disabled,a.Za(n,5)._isExpanded(),l(n,7,0,a.Za(n,5)._getExpandedState(),l(n,6,0,a.Za(n,5).collapsedHeight,a.Za(n,5).expandedHeight))),l(n,8,0,n.context.$implicit.name)})}function el(l){return a.ib(0,[(l()(),a.Pa(0,0,null,null,4,"div",[["class","output"]],null,null,null,null,null)),(l()(),a.Pa(1,0,null,null,3,"mat-accordion",[["class","mat-accordion"]],null,null,null,null,null)),a.Oa(2,16384,null,0,S.a,[],null,null),(l()(),a.Ga(16777216,null,null,1,null,nl)),a.Oa(4,802816,null,0,v.l,[a.O,a.L,a.r],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,4,0,n.component.counters)},null)}function al(l){return a.ib(0,[(l()(),a.Pa(0,16777216,null,null,26,"mat-tab",[],null,null,null,I.d,I.a)),a.Oa(1,770048,[[1,4]],2,T.b,[a.O],{textLabel:[0,"textLabel"]},null),a.eb(335544320,2,{templateLabel:0}),a.eb(335544320,3,{_explicitContent:0}),(l()(),a.Pa(4,0,null,0,20,"mat-form-field",[["class","selectForm mat-elevation-z3 mat-form-field"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,E.b,E.a)),a.Oa(5,7389184,null,7,k.b,[a.k,a.h,[2,g.h],[2,O.b],[2,k.a],y.a,a.y,[2,M.a]],null,null),a.eb(335544320,4,{_control:0}),a.eb(335544320,5,{_placeholderChild:0}),a.eb(335544320,6,{_labelChild:0}),a.eb(603979776,7,{_errorChildren:1}),a.eb(603979776,8,{_hintChildren:1}),a.eb(603979776,9,{_prefixChildren:1}),a.eb(603979776,10,{_suffixChildren:1}),(l()(),a.Pa(13,0,null,1,11,"mat-select",[["class","mat-select"],["placeholder","Tag ausw\xe4hlen"],["role","listbox"]],[[1,"id",0],[1,"tabindex",0],[1,"aria-label",0],[1,"aria-labelledby",0],[1,"aria-required",0],[1,"aria-disabled",0],[1,"aria-invalid",0],[1,"aria-owns",0],[1,"aria-multiselectable",0],[1,"aria-describedby",0],[1,"aria-activedescendant",0],[2,"mat-select-disabled",null],[2,"mat-select-invalid",null],[2,"mat-select-required",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"keydown"],[null,"focus"],[null,"blur"]],function(l,n,e){var t=!0,i=l.component;return"keydown"===n&&(t=!1!==a.Za(l,17)._handleKeydown(e)&&t),"focus"===n&&(t=!1!==a.Za(l,17)._onFocus()&&t),"blur"===n&&(t=!1!==a.Za(l,17)._onBlur()&&t),"ngModelChange"===n&&(t=!1!==(i.selectedDay=e)&&t),t},B,G)),a.db(6144,null,g.j,null,[A.c]),a.Oa(15,671744,null,0,_.n,[[8,null],[8,null],[8,null],[8,null]],{model:[0,"model"]},{update:"ngModelChange"}),a.db(2048,null,_.j,null,[_.n]),a.Oa(17,2080768,null,3,A.c,[D.e,a.h,a.y,g.d,a.k,[2,O.b],[2,_.m],[2,_.g],[2,k.b],[6,_.j],[8,null],A.a],{placeholder:[0,"placeholder"]},null),a.eb(603979776,11,{options:1}),a.eb(603979776,12,{optionGroups:1}),a.eb(335544320,13,{customTrigger:0}),a.Oa(21,16384,null,0,_.k,[[4,_.j]],null,null),a.db(2048,[[4,4]],k.c,null,[A.c]),(l()(),a.Ga(16777216,null,1,1,null,U)),a.Oa(24,802816,null,0,v.l,[a.O,a.L,a.r],{ngForOf:[0,"ngForOf"]},null),(l()(),a.Ga(16777216,null,0,1,null,el)),a.Oa(26,16384,null,0,v.m,[a.O,a.L],{ngIf:[0,"ngIf"]},null),(l()(),a.Ga(0,null,null,0))],function(l,n){var e=n.component;l(n,1,0,a.Ra(1,"",n.context.$implicit.name,"")),l(n,15,0,e.selectedDay),l(n,17,0,"Tag ausw\xe4hlen"),l(n,24,0,n.context.$implicit.days),l(n,26,0,e.counters.length>0)},function(l,n){l(n,4,1,["standard"==a.Za(n,5).appearance,"fill"==a.Za(n,5).appearance,"outline"==a.Za(n,5).appearance,"legacy"==a.Za(n,5).appearance,a.Za(n,5)._control.errorState,a.Za(n,5)._canLabelFloat,a.Za(n,5)._shouldLabelFloat(),a.Za(n,5)._hideControlPlaceholder(),a.Za(n,5)._control.disabled,a.Za(n,5)._control.autofilled,a.Za(n,5)._control.focused,"accent"==a.Za(n,5).color,"warn"==a.Za(n,5).color,a.Za(n,5)._shouldForward("untouched"),a.Za(n,5)._shouldForward("touched"),a.Za(n,5)._shouldForward("pristine"),a.Za(n,5)._shouldForward("dirty"),a.Za(n,5)._shouldForward("valid"),a.Za(n,5)._shouldForward("invalid"),a.Za(n,5)._shouldForward("pending"),!a.Za(n,5)._animationsEnabled]),l(n,13,1,[a.Za(n,17).id,a.Za(n,17).tabIndex,a.Za(n,17)._getAriaLabel(),a.Za(n,17)._getAriaLabelledby(),a.Za(n,17).required.toString(),a.Za(n,17).disabled.toString(),a.Za(n,17).errorState,a.Za(n,17).panelOpen?a.Za(n,17)._optionIds:null,a.Za(n,17).multiple,a.Za(n,17)._ariaDescribedby||null,a.Za(n,17)._getAriaActiveDescendant(),a.Za(n,17).disabled,a.Za(n,17).errorState,a.Za(n,17).required,a.Za(n,21).ngClassUntouched,a.Za(n,21).ngClassTouched,a.Za(n,21).ngClassPristine,a.Za(n,21).ngClassDirty,a.Za(n,21).ngClassValid,a.Za(n,21).ngClassInvalid,a.Za(n,21).ngClassPending])})}function tl(l){return a.ib(0,[(l()(),a.Pa(0,0,null,null,5,null,null,null,null,null,null,null)),(l()(),a.Pa(1,0,null,null,4,"mat-tab-group",[["class","mat-tab-group"]],[[2,"mat-tab-group-dynamic-height",null],[2,"mat-tab-group-inverted-header",null]],[[null,"selectedTabChange"]],function(l,n,e){var a=!0;return"selectedTabChange"===n&&(a=!1!==l.component.setActiveCanteen(e)&&a),a},I.c,I.b)),a.Oa(2,3325952,null,1,T.e,[a.k,a.h],null,{selectedTabChange:"selectedTabChange"}),a.eb(603979776,1,{_tabs:1}),(l()(),a.Ga(16777216,null,null,1,null,al)),a.Oa(5,802816,null,0,v.l,[a.O,a.L,a.r],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,5,0,n.component.canteens)},function(l,n){l(n,1,0,a.Za(n,2).dynamicHeight,"below"===a.Za(n,2).headerPosition)})}function il(l){return a.ib(0,[(l()(),a.Pa(0,0,null,null,1,"mat-spinner",[["class","mat-spinner mat-progress-spinner"],["mode","indeterminate"],["role","progressbar"]],[[2,"_mat-animation-noopable",null],[4,"width","px"],[4,"height","px"]],null,null,W.b,W.a)),a.Oa(1,49152,null,0,$.d,[a.k,y.a,[2,v.e],[2,M.a],$.a],null,null)],null,function(l,n){l(n,0,0,a.Za(n,1)._noopAnimations,a.Za(n,1).diameter,a.Za(n,1).diameter)})}function ul(l){return a.ib(0,[a.ab(0,v.d,[a.t]),(l()(),a.Pa(1,0,null,null,3,"main",[["class","content-container"]],null,null,null,null,null)),(l()(),a.Ga(16777216,null,null,1,null,tl)),a.Oa(3,16384,null,0,v.m,[a.O,a.L],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(l()(),a.Ga(0,[["spinner",2]],null,0,null,il))],function(l,n){l(n,3,0,n.component.canteens.length>0,a.Za(n,4))},null)}var ol=a.La("app-canteen",d,function(l){return a.ib(0,[(l()(),a.Pa(0,0,null,null,1,"app-canteen",[],null,null,null,ul,K)),a.Oa(1,114688,null,0,d,[H.i,t.a,c],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),rl=e("/Co4"),sl=e("POq0"),cl=e("iInd"),dl=e("02hT"),pl=e("Q+lL"),ml=e("5Bek"),hl=e("zQui"),bl=e("8rEH"),gl=e("oapL"),fl=e("ZwOa"),yl=e("Fwaw"),Zl=e("lwm9"),wl=e("Gi4r"),vl=e("BzsH"),xl=e("BV1i"),kl=e("hctd"),Ol=e("dvZr");e.d(n,"CanteenModuleNgFactory",function(){return _l});var _l=a.Ma(p,[],function(l){return a.Wa([a.Xa(512,a.j,a.Ba,[[8,[m.a,h.a,ol]],[3,a.j],a.w]),a.Xa(4608,v.o,v.n,[a.t,[2,v.x]]),a.Xa(4608,g.d,g.d,[]),a.Xa(4608,F.c,F.c,[F.i,F.e,a.j,F.h,F.f,a.q,a.y,v.e,O.b]),a.Xa(5120,F.j,F.k,[F.c]),a.Xa(5120,rl.b,rl.c,[F.c]),a.Xa(5120,A.a,A.b,[F.c]),a.Xa(4608,sl.c,sl.c,[]),a.Xa(4608,_.d,_.d,[]),a.Xa(4608,_.r,_.r,[]),a.Xa(1073742336,v.c,v.c,[]),a.Xa(1073742336,cl.n,cl.n,[[2,cl.t],[2,cl.k]]),a.Xa(1073742336,O.a,O.a,[]),a.Xa(1073742336,g.l,g.l,[[2,g.e]]),a.Xa(1073742336,g.n,g.n,[]),a.Xa(1073742336,y.b,y.b,[]),a.Xa(1073742336,g.x,g.x,[]),a.Xa(1073742336,g.v,g.v,[]),a.Xa(1073742336,dl.b,dl.b,[]),a.Xa(1073742336,pl.c,pl.c,[]),a.Xa(1073742336,ml.c,ml.c,[]),a.Xa(1073742336,L.g,L.g,[]),a.Xa(1073742336,S.b,S.b,[]),a.Xa(1073742336,hl.p,hl.p,[]),a.Xa(1073742336,bl.l,bl.l,[]),a.Xa(1073742336,gl.c,gl.c,[]),a.Xa(1073742336,k.d,k.d,[]),a.Xa(1073742336,fl.b,fl.b,[]),a.Xa(1073742336,g.s,g.s,[]),a.Xa(1073742336,D.b,D.b,[]),a.Xa(1073742336,F.g,F.g,[]),a.Xa(1073742336,rl.e,rl.e,[]),a.Xa(1073742336,w.e,w.e,[]),a.Xa(1073742336,A.d,A.d,[]),a.Xa(1073742336,f.d,f.d,[]),a.Xa(1073742336,yl.c,yl.c,[]),a.Xa(1073742336,Zl.e,Zl.e,[]),a.Xa(1073742336,sl.d,sl.d,[]),a.Xa(1073742336,T.i,T.i,[]),a.Xa(1073742336,wl.b,wl.b,[]),a.Xa(1073742336,vl.b,vl.b,[]),a.Xa(1073742336,xl.h,xl.h,[]),a.Xa(1073742336,$.c,$.c,[]),a.Xa(1073742336,kl.a,kl.a,[]),a.Xa(1073742336,_.p,_.p,[]),a.Xa(1073742336,_.o,_.o,[]),a.Xa(1073742336,_.h,_.h,[]),a.Xa(1073742336,p,p,[]),a.Xa(256,f.a,{separatorKeyCodes:[Ol.f]},[]),a.Xa(1024,cl.i,function(){return[[{path:"",component:d}]]},[])])})},rRmt:function(l){l.exports=[{name:"Zentralmensa",days:[],counters:[{name:"Theke 1",types:[102,110,112,113,610,612],meals:[]},{name:"Theke 2",types:[120],meals:[]},{name:"Theke 3",types:[130,630],meals:[]},{name:"Theke 4",types:[140,142,640,642],meals:[]},{name:"Suppen",types:[100],meals:[]},{name:"Beilagen",types:[200,201,202],meals:[]}]},{name:"Mens@ria",days:[],counters:[{name:"Theke 1",types:[302,303],meals:[]},{name:"Theke 2",types:[303],meals:[]},{name:"Snack",types:[104],meals:[]},{name:"Frisch aus dem Kessel",types:[101],meals:[]},{name:"Eintopf",types:[102],meals:[]},{name:"Suppen",types:[100],meals:[]}]},{name:"Mensa Georg Forster",days:[],counters:[{name:"Theke 1",types:[170],meals:[]},{name:"Theke 2",types:[300],meals:[]},{name:"Eintopf",types:[102],meals:[]},{name:"W\xfcrstchen",types:[103],meals:[]},{name:"Frisch aus dem Kessel",types:[101],meals:[]}]},{name:"Caf\xe9 Rewi",days:[],counters:[{name:"Theke 1",types:[180,680],meals:[]},{name:"Theke 2",types:[102],meals:[]},{name:"Beilagen",types:[200],meals:[]},{name:"Eintopf",types:[102],meals:[]}]}]}}]);
