!function(){function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{qiIP:function(t,e,o){"use strict";o.r(e),o.d(e,"TabsPageModule",(function(){return h}));var a,i,r,b=o("TEn/"),c=o("ofXK"),l=o("3Pt+"),u=o("tyNb"),s=o("fXoL"),f=[{path:"tabs",component:(a=function t(){n(this,t)},a.\u0275fac=function(n){return new(n||a)},a.\u0275cmp=s.Bb({type:a,selectors:[["app-tabs"]],decls:10,vars:0,consts:[["slot","bottom","color","dark"],["tab","tab1"],["name","clipboard-outline"],["tab","tab2"],["name","checkmark-done-outline"]],template:function(n,t){1&n&&(s.Kb(0,"ion-tabs"),s.Kb(1,"ion-tab-bar",0),s.Kb(2,"ion-tab-button",1),s.Ib(3,"ion-icon",2),s.Kb(4,"ion-label"),s.fc(5,"Pendientes"),s.Jb(),s.Jb(),s.Kb(6,"ion-tab-button",3),s.Ib(7,"ion-icon",4),s.Kb(8,"ion-label"),s.fc(9,"Terminados"),s.Jb(),s.Jb(),s.Jb(),s.Jb())},directives:[b.y,b.w,b.x,b.l,b.r],styles:[""]}),a),children:[{path:"tab1",loadChildren:function(){return Promise.all([o.e(0),o.e(10)]).then(o.bind(null,"uMfO")).then((function(n){return n.Tab1PageModule}))}},{path:"tab2",loadChildren:function(){return Promise.all([o.e(0),o.e(11)]).then(o.bind(null,"HJ/b")).then((function(n){return n.Tab2PageModule}))}},{path:"agregar/:listaId",loadChildren:function(){return o.e(0).then(o.bind(null,"PNSq")).then((function(n){return n.AgregarPageModule}))}},{path:"",redirectTo:"/tabs/tab1",pathMatch:"full"}]},{path:"",redirectTo:"/tabs/tab1",pathMatch:"full"}],d=((r=function t(){n(this,t)}).\u0275mod=s.Fb({type:r}),r.\u0275inj=s.Eb({factory:function(n){return new(n||r)},imports:[[u.i.forChild(f)],u.i]}),r),h=((i=function t(){n(this,t)}).\u0275mod=s.Fb({type:i}),i.\u0275inj=s.Eb({factory:function(n){return new(n||i)},imports:[[b.B,c.b,l.a,d]]}),i)}}])}();