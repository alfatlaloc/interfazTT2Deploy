(this.webpackJsonpinterfazforex=this.webpackJsonpinterfazforex||[]).push([[0],{144:function(e,t,a){},158:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(50),i=a.n(c),s=(a(144),a(234)),r=a(233),o=a(231),l=a(17),j=a.p+"static/media/Home.50969fb7.png",d=a(1);var b=function(){var e=Object(l.f)();return Object(d.jsxs)(o.a,{container:!0,direction:"column",alignItems:"center",justifyContent:"center",children:[Object(d.jsx)("h2",{children:"Trabajo Terminal 2 2020-B030"}),Object(d.jsx)(r.a,{textAlign:"center",sx:{mx:.6},margin:"auto",children:Object(d.jsx)("h4",{children:"Prototipo de aplicaci\xf3n de apoyo para el an\xe1lisis t\xe9cnico del activo financiero EUR USD en ForEx"})}),Object(d.jsx)("br",{}),Object(d.jsx)("img",{className:"homeImg mx-auto",src:j,alt:"home"}),Object(d.jsx)("br",{}),Object(d.jsx)(r.a,{sx:{m:.6},children:Object(d.jsx)(s.a,{variant:"contained",className:"homeButton",onClick:function(){e.push("/datosh")},children:"Datos historicos"})}),Object(d.jsx)(r.a,{sx:{m:.6},children:Object(d.jsx)(s.a,{variant:"contained",className:"homeButton",onClick:function(){e.push("/Train")},children:"Entrenar algoritmo"})}),Object(d.jsx)(r.a,{sx:{m:.6},children:Object(d.jsx)(s.a,{variant:"contained",className:"homeButton",onClick:function(){e.push("/Resultados")},children:"Resultados"})}),Object(d.jsx)(r.a,{sx:{m:.6},children:Object(d.jsx)(s.a,{variant:"contained",className:"homeButton",onClick:function(){e.push("/Backtesting")},children:"Backtesting"})})]})},u=a(235),h=a(236),x=a(238),O=a(237),m=a(116),p=a.n(m),f=a(60),v=function(){return Object(d.jsx)(r.a,{sx:{flexGrow:1},children:Object(d.jsx)(u.a,{position:"static",children:Object(d.jsxs)(h.a,{children:[Object(d.jsx)(O.a,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},children:Object(d.jsx)(p.a,{})}),Object(d.jsx)(x.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:Object(d.jsx)(f.b,{className:"navItem",to:"/",children:"TT2 2020-B030"})}),Object(d.jsx)(s.a,{color:"inherit",children:"2020-B030"})]})})})},g=a(239);function y(){return Object(d.jsx)("footer",{className:"footer",children:Object(d.jsxs)(r.a,{px:{xs:3,sm:10},py:{xs:5,sm:10},bgcolor:"text.secondary",color:"white",children:[Object(d.jsx)(o.a,{container:!0,spacing:2,margin:"5px",children:"Prototipo de aplicaci\xf3n de apoyo para el an\xe1lisis t\xe9cnico del activo financiero EUR USD en ForEx"}),Object(d.jsx)(g.a,{maxWidth:"lg",children:Object(d.jsxs)(r.a,{textAlign:"center",pt:{xs:5,sm:10},pb:{xs:5,sm:0},children:["\xa9 2021 Copyright:",Object(d.jsx)("br",{}),"Marco Antonio Castro Guti\xe9rrez",Object(d.jsx)("br",{}),"Humberto Israel L\xf3pez Vela",Object(d.jsx)("br",{}),"Ariel Enrique Montoya Hernandez"]})})]})})}var w=a(4),D=a(228),S=a(34),C=[new Date("2011-04-15T10:00:00.000+00:00"),new Date("1999-01-04T06:00:00.000+00:00"),new Date("1999-01-03T06:00:00.000+00:00"),new Date("1999-01-01T06:00:00.000+00:00")],I=["Hour","Day","Week","Month"];function k(e,t){return e<t}function F(e,t){return t>e}var T=a(49),_=a(216),M=a(222),E=a(229),R=a(245),A=a(230),B=a(223),N=a(227),L=a(75),P=a.n(L),U=a(103);function W(e){return V.apply(this,arguments)}function V(){return V=Object(U.a)(P.a.mark((function e(t){var a,n,c,i=arguments;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=i.length>1&&void 0!==i[1]?i[1]:{},n=new URL(t),Object.keys(a).forEach((function(e){return n.searchParams.append(e,a[e])})),e.next=5,fetch(n,{method:"GET",mode:"cors",headers:{"Content-Type":"application/json"}});case 5:return c=e.sent,e.abrupt("return",c.json());case 7:case"end":return e.stop()}}),e)}))),V.apply(this,arguments)}function z(e){return H.apply(this,arguments)}function H(){return(H=Object(U.a)(P.a.mark((function e(t){var a;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{method:"GET",mode:"cors",headers:{"Content-Type":"application/json"}});case 2:return a=e.sent,e.abrupt("return",a.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var G=a(225),$="https://tt2-backend.herokuapp.com/",J=function(e){var t=e.setPrediction,a=e.setDatos,c=Object(n.useState)(),i=Object(w.a)(c,2),r=i[0],o=i[1],l=Object(n.useState)(),j=Object(w.a)(l,2),b=j[0],u=j[1],h=Object(n.useState)(0),x=Object(w.a)(h,2),O=x[0],m=x[1],p=Object(n.useState)(new Date("01/01/2000")),f=Object(w.a)(p,2),v=f[0],g=f[1],y=Object(n.useState)(new Date),D=Object(w.a)(y,2),L=D[0],P=D[1];return Object(n.useEffect)((function(){g(C[O]),o(C[O]),z($+I[O]+"/Last").then((function(e){P(new Date(e._id)),u(new Date(e._id))}))}),[O]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(G.a,{sx:{mx:"auto"},children:Object(d.jsxs)(_.b,{dateAdapter:T.a,children:[Object(d.jsx)(G.a,{sx:{m:.5},children:Object(d.jsx)(M.a,{views:["year","month","day"],label:"Fecha inicio",inputFormat:"MM/dd/yyyy",minDate:v,maxDate:L,value:r,inputRef:function(e){null!==e&&(e.disabled=!0)},onChange:function(e){k(e,b)&&o(e)},renderInput:function(e){return Object(d.jsx)(E.a,Object(S.a)({},e))}})}),Object(d.jsx)("br",{}),Object(d.jsx)(G.a,{sx:{m:.5},children:Object(d.jsx)(M.a,{views:["year","month","day"],label:"Fecha limite",inputFormat:"MM/dd/yyyy",minDate:v,maxDate:L,value:b,inputRef:function(e){null!==e&&(e.disabled=!0)},onChange:function(e){F(r,e)&&u(e)},renderInput:function(e){return Object(d.jsx)(E.a,Object(S.a)({},e))}})})]})}),Object(d.jsx)(G.a,{sx:{m:.8},children:Object(d.jsxs)(R.a,{sx:{m:1,minWidth:120},children:[Object(d.jsx)(A.a,{children:"Temporalidad"}),Object(d.jsxs)(B.a,{labelId:"demo-simple-select-label",defaultValue:"hora",id:"demo-simple-select",value:O,label:"Temporalidad",onChange:function(e){m(e.target.value)},children:[Object(d.jsx)(N.a,{value:0,children:"Hora"}),Object(d.jsx)(N.a,{value:1,children:"D\xeda"}),Object(d.jsx)(N.a,{value:2,children:"Semana"}),Object(d.jsx)(N.a,{value:3,children:"Mes"})]})]})}),Object(d.jsx)(G.a,{children:Object(d.jsx)("p",{children:"Clasificar posibles se\xf1ales de tendencias"})}),Object(d.jsx)(G.a,{sx:{m:0},children:Object(d.jsx)(s.a,{variant:"contained",onClick:function(){var e={end_date:b.toISOString(),start_date:r.toISOString(),forecast_or_train:"forecast"};W($+I[O]+"/ML",e).then((function(e){console.log(e),a(e.candles),t(e.prediction)}))},children:"Clasificar"})})]})},Z=a(88),q=a(119),K=a.n(q),Q=function(){var e=Object(l.f)();return Object(d.jsx)("button",{className:"bkButton",onClick:e.goBack,children:Object(d.jsx)(K.a,{})})},X=function(){var e=Object(n.useState)([]),t=Object(w.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)([]),s=Object(w.a)(i,2),r=s[0],o=s[1];function l(e){var t=[];return t.push(e),a.forEach((function(e,a){var n=new Date(e._id),c=Number.parseFloat(r[a])>0?Number.parseFloat(r[a]):.9,i=Number.parseFloat(r[a])<0?1.5:.9;t.push([n,c,i,e.high,e.close,e.open,e.low])})),console.log(t),t}return Object(d.jsxs)(D.a,{container:!0,direction:"column",alignItems:"center",justifyContent:"center",children:[Object(d.jsx)(Q,{}),Object(d.jsx)("h2",{children:"Resultados"}),Object(d.jsx)(J,{setDatos:c,setPrediction:o}),function(){if(a.length>0&&r.length>0){var e=[{controlType:"ChartRangeFilter",options:{filterColumnIndex:0,ui:{chartType:"CandleStickChart",chartOptions:{chartArea:{width:"90%",height:"40%"},hAxis:{baselineColor:"none"}}}},controlPosition:"bottom",controlWrapperParams:{state:{range:{start:new Date(a[0]._id),end:new Date(a[a.length-1]._id)}}}}];return Object(d.jsx)(Z.a,{controls:e,className:"chartResultado",width:"100%",height:"auto",chartType:"ComboChart",loader:Object(d.jsx)("div",{children:"Loading Chart"}),data:l(["Date","Compra","Venta","Candlestick","close","open","low"]),options:{legend:{position:"bottom"},hAxis:{title:"Date"},vAxis:{title:"Price",viewWindowMode:"explicit",viewWindow:{max:1.65,min:.9}},seriesType:"candlesticks",series:{0:{type:"area"},1:{type:"area"},2:{color:"#000000"}},title:"Resultados EURUSD",explorer:{axis:"horizontal",keepInBounds:!0,maxZoomIn:12},isStacked:"false"},rootProps:{"data-testid":"3"}})}}()]})},Y="https://tt2-backend.herokuapp.com/",ee=function(e){var t=e.setDatos,a=Object(n.useState)(new Date("01/01/2000")),c=Object(w.a)(a,2),i=c[0],r=c[1],o=Object(n.useState)(new Date),l=Object(w.a)(o,2),j=l[0],b=l[1],u=Object(n.useState)(0),h=Object(w.a)(u,2),x=h[0],O=h[1],m=Object(n.useState)(new Date("01/01/2000")),p=Object(w.a)(m,2),f=p[0],v=p[1],g=Object(n.useState)(new Date),y=Object(w.a)(g,2),D=y[0],L=y[1];return Object(n.useEffect)((function(){v(C[x]),r(C[x]),z(Y+I[x]+"/Last").then((function(e){L(new Date(e._id)),b(new Date(e._id))}))}),[x]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(G.a,{sx:{mx:"auto"},children:Object(d.jsxs)(_.b,{dateAdapter:T.a,children:[Object(d.jsx)(G.a,{sx:{m:.5},children:Object(d.jsx)(M.a,{views:["year","month","day"],label:"Fecha inicio",inputFormat:"MM/dd/yyyy",minDate:f,maxDate:D,value:i,inputRef:function(e){null!==e&&(e.disabled=!0)},onChange:function(e){k(e,j)&&r(e)},renderInput:function(e){return Object(d.jsx)(E.a,Object(S.a)({},e))}})}),Object(d.jsx)("br",{}),Object(d.jsx)(G.a,{sx:{m:.5},children:Object(d.jsx)(M.a,{views:["year","month","day"],label:"Fecha limite",inputFormat:"MM/dd/yyyy",minDate:f,maxDate:D,value:j,inputRef:function(e){null!==e&&(e.disabled=!0)},onChange:function(e){F(i,e)&&b(e)},renderInput:function(e){return Object(d.jsx)(E.a,Object(S.a)({},e))}})})]})}),Object(d.jsx)(G.a,{sx:{m:.5},children:Object(d.jsxs)(R.a,{sx:{m:1,minWidth:120},children:[Object(d.jsx)(A.a,{children:"Temporalidad"}),Object(d.jsxs)(B.a,{defaultValue:"hora",id:"demo-simple-select",value:x,label:"Temporalidad",onChange:function(e){O(e.target.value)},children:[Object(d.jsx)(N.a,{value:0,children:"Hora"}),Object(d.jsx)(N.a,{value:1,children:"D\xeda"}),Object(d.jsx)(N.a,{value:2,children:"Semana"}),Object(d.jsx)(N.a,{value:3,children:"Mes"})]})]})}),Object(d.jsx)(G.a,{sx:{m:.5},children:Object(d.jsx)(s.a,{variant:"contained",onClick:function(){var e={end_date:j.toISOString(),start_date:i.toISOString()};W(Y+I[x]+"/Range",e).then((function(e){console.log(e),t(e)}))},children:"Obtener datos"})})]})},te=function(){var e=Object(n.useState)([]),t=Object(w.a)(e,2),a=t[0],c=t[1];function i(e){var t=[];t[0]=e;var n=1,c=a[a.length-1].close;return a.forEach((function(e){var a=new Date(e._id);t[n++]=[a,e.high,e.close,e.open,e.low,c]})),t}function r(){var e=document.createElement("a"),t=new Blob([JSON.stringify(a)],{type:"text/plain"});e.href=URL.createObjectURL(t),e.download="data.json",e.click()}return Object(n.useEffect)((function(){})),Object(d.jsxs)(D.a,{container:!0,direction:"column",alignItems:"center",justifyContent:"center",children:[Object(d.jsx)(Q,{}),Object(d.jsx)("h2",{children:"Consulta de datos"}),Object(d.jsx)(ee,{datos:a,setDatos:c}),function(){if(a.length>1)return Object(d.jsxs)(G.a,{sx:{width:"95vw"},children:[Object(d.jsx)(Z.a,{width:"auto",height:"600px",chartType:"CandlestickChart",loader:Object(d.jsx)("div",{children:"Loading Chart"}),data:i(["Fecha","Precios","CLOSE","OPEN","LOW","Ultimo precio"]),options:{hAxis:{title:"Fecha"},vAxes:{0:{title:"Precio",viewWindow:{max:1.65,min:.9}},1:{title:"Precio",viewWindow:{max:1.65,min:.9}}},series:{0:{targetAxisIndex:0},1:{type:"line",targetAxisIndex:1}},title:"EURUSD datos",axes:{y:{1:{side:"right"}}},explorer:{axis:"horizontal",keepInBounds:!0,maxZoomIn:25}},rootProps:{"data-testid":"2"}}),Object(d.jsx)(G.a,{sx:{mx:"auto",width:"100px"},children:Object(d.jsx)(s.a,{variant:"contained",onClick:r,children:"Descargar"})})]})}()]})},ae="https://tt2-backend.herokuapp.com/",ne=function(e){var t=e.accion,a=e.setAccion,c=e.setDatos,i=e.lote,r=e.setLote,o=Object(n.useState)(),l=Object(w.a)(o,2),j=l[0],b=l[1],u=Object(n.useState)(),h=Object(w.a)(u,2),x=h[0],O=h[1],m=Object(n.useState)(0),p=Object(w.a)(m,2),f=p[0],v=p[1],g=Object(n.useState)(new Date("01/01/2000")),y=Object(w.a)(g,2),D=y[0],L=y[1],P=Object(n.useState)(new Date),U=Object(w.a)(P,2),V=U[0],H=U[1];return Object(n.useEffect)((function(){L(C[f]),b(C[f]),z(ae+I[f]+"/Last").then((function(e){H(new Date(e._id)),O(new Date(e._id))}))}),[f]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(G.a,{sx:{mx:"auto"},children:Object(d.jsxs)(_.b,{dateAdapter:T.a,children:[Object(d.jsx)(G.a,{sx:{m:.5},children:Object(d.jsx)(M.a,{views:["year","month","day"],label:"Fecha inicio",inputFormat:"MM/dd/yyyy",minDate:D,maxDate:V,value:j,inputRef:function(e){null!==e&&(e.disabled=!0)},onChange:function(e){k(e,x)&&b(e)},renderInput:function(e){return Object(d.jsx)(E.a,Object(S.a)({},e))}})}),Object(d.jsx)("br",{}),Object(d.jsx)(G.a,{sx:{m:.5},children:Object(d.jsx)(M.a,{views:["year","month","day"],label:"Fecha limite",inputFormat:"MM/dd/yyyy",minDate:D,maxDate:V,value:x,inputRef:function(e){null!==e&&(e.disabled=!0)},onChange:function(e){F(j,e)&&O(e)},renderInput:function(e){return Object(d.jsx)(E.a,Object(S.a)({},e))}})})]})}),Object(d.jsxs)(G.a,{sx:{m:.5},children:[Object(d.jsxs)(R.a,{children:[Object(d.jsx)(A.a,{id:"demo-simple-select-label",children:"Intervalo"}),Object(d.jsxs)(B.a,{labelId:"demo-simple-select-label",defaultValue:"hora",id:"demo-simple-select",value:f,label:"Intervalo",onChange:function(e){v(e.target.value)},children:[Object(d.jsx)(N.a,{value:0,children:"Hora"}),Object(d.jsx)(N.a,{value:1,children:"D\xeda"}),Object(d.jsx)(N.a,{value:2,children:"Semana"}),Object(d.jsx)(N.a,{value:3,children:"Mes"})]})]}),Object(d.jsxs)(R.a,{children:[Object(d.jsx)(A.a,{id:"demo-simple-select-label",children:"Acci\xf3n"}),Object(d.jsxs)(B.a,{labelId:"demo-simple-select-label",defaultValue:"Compra",id:"demo-simple-select",value:t,label:"Acci\xf3n",onChange:function(e){a(e.target.value)},children:[Object(d.jsx)(N.a,{value:0,children:"Compra"}),Object(d.jsx)(N.a,{value:1,children:"Venta"})]})]})]}),Object(d.jsx)(G.a,{sx:{m:.5},children:Object(d.jsx)(E.a,{id:"outlined-basic",type:"number",label:"Tama\xf1o de lote",variant:"outlined",value:i,onChange:function(e){var t=e.target.value;/^\d*\.?\d*$/.test(t)&&Number.parseFloat(t)<=1&&r(Number.parseFloat(e.target.value))}})}),Object(d.jsx)(G.a,{sx:{m:.5},children:Object(d.jsx)(s.a,{variant:"contained",onClick:function(){if(!(i<.01)){var e={end_date:x.toISOString(),start_date:j.toISOString()};W(ae+I[f]+"/Backtesting",e).then((function(e){console.log(e),c(e)}))}},children:"Calcular"})})]})},ce=a(240),ie=a(241),se=function(){var e=Object(n.useState)(),t=Object(w.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(0),s=Object(w.a)(i,2),r=s[0],o=s[1],l=Object(n.useState)(0),j=Object(w.a)(l,2),b=j[0],u=j[1];function h(){if(void 0!==a){var e,t=0===r?"Compra":"Venta",n=a.start,c=a.end;return e=0===r?(c.close-n.close)*b*1e5:(n.close-c.close)*b*1e5,Object(d.jsx)(ce.a,{sx:{minWidth:400},children:Object(d.jsx)(ie.a,{variant:"outlined",children:Object(d.jsxs)(D.a,{display:"flex",justify:"center",alignItems:"center",children:[Object(d.jsxs)(x.a,{sx:{mb:1.5},color:"text.primary",children:["Operaci\xf3n: ",t]}),Object(d.jsxs)(x.a,{variant:"body2",children:[Object(d.jsxs)("p",{children:[Object(d.jsx)("strong",{children:"Fecha: "}),new Date(n._id).toISOString().split("T")[0]]}),Object(d.jsxs)("p",{children:["Valor de cierre Inicio: $ ",n.close]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("strong",{children:"Fecha: "}),new Date(c._id).toISOString().split("T")[0]]}),Object(d.jsxs)("p",{children:["Valor de cierre Final: $ ",c.close]}),Object(d.jsxs)("h4",{children:["Resultado: $ ",e]})]})]})})})}}return Object(d.jsxs)(D.a,{container:!0,direction:"column",alignItems:"center",justifyContent:"center",children:[Object(d.jsx)(Q,{}),Object(d.jsx)("h1",{children:"BackTesting"}),Object(d.jsx)(ne,{accion:r,lote:b,setLote:u,setAccion:o,setDatos:c}),Object(d.jsx)(G.a,{sx:{m:1},children:h()})]})},re="https://tt2-backend.herokuapp.com/",oe=function(e){var t=e.setDatos,a=Object(n.useState)(),c=Object(w.a)(a,2),i=c[0],r=c[1],o=Object(n.useState)(),l=Object(w.a)(o,2),j=l[0],b=l[1],u=Object(n.useState)(0),h=Object(w.a)(u,2),x=h[0],O=h[1],m=Object(n.useState)(new Date("01/01/2000")),p=Object(w.a)(m,2),f=p[0],v=p[1],g=Object(n.useState)(new Date),y=Object(w.a)(g,2),D=y[0],L=y[1];return Object(n.useEffect)((function(){v(C[x]),r(C[x]),z(re+I[x]+"/Last").then((function(e){L(new Date(e._id)),b(new Date(e._id))}))}),[x]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(G.a,{sx:{mx:"auto"},children:Object(d.jsxs)(_.b,{dateAdapter:T.a,children:[Object(d.jsx)(G.a,{sx:{m:.5},children:Object(d.jsx)(M.a,{views:["year","month","day"],label:"Fecha inicio",inputFormat:"MM/dd/yyyy",minDate:f,maxDate:D,value:i,inputRef:function(e){null!==e&&(e.disabled=!0)},onChange:function(e){k(e,j)&&r(e)},renderInput:function(e){return Object(d.jsx)(E.a,Object(S.a)({},e))}})}),Object(d.jsx)("br",{}),Object(d.jsx)(G.a,{sx:{m:.5},children:Object(d.jsx)(M.a,{views:["year","month","day"],label:"Fecha limite",inputFormat:"MM/dd/yyyy",minDate:f,maxDate:D,value:j,inputRef:function(e){null!==e&&(e.disabled=!0)},onChange:function(e){F(i,e)&&b(e)},renderInput:function(e){return Object(d.jsx)(E.a,Object(S.a)({},e))}})})]})}),Object(d.jsx)(G.a,{sx:{m:.8},children:Object(d.jsxs)(R.a,{sx:{m:1,minWidth:120},children:[Object(d.jsx)(A.a,{id:"demo-simple-select-label",children:"Temporalidad"}),Object(d.jsxs)(B.a,{labelId:"demo-simple-select-label",defaultValue:"hora",id:"demo-simple-select",value:x,label:"Temporalidad",onChange:function(e){O(e.target.value)},children:[Object(d.jsx)(N.a,{value:0,children:"Hora"}),Object(d.jsx)(N.a,{value:1,children:"D\xeda"}),Object(d.jsx)(N.a,{value:2,children:"Semana"}),Object(d.jsx)(N.a,{value:3,children:"Mes"})]})]})}),Object(d.jsx)(G.a,{sx:{m:.5},children:Object(d.jsx)(s.a,{variant:"contained",onClick:function(){var e={end_date:j.toISOString(),start_date:i.toISOString(),forecast_or_train:"train"};W(re+I[x]+"/ML",e).then((function(e){console.log(e),t(e)}))},children:"Entrenar"})})]})},le=function(){var e=Object(n.useState)(null),t=Object(w.a)(e,2),a=t[0],c=t[1];return Object(d.jsxs)(D.a,{container:!0,direction:"column",alignItems:"center",justifyContent:"center",children:[Object(d.jsx)("h1",{children:"Entrenamiento del algoritmo"}),Object(d.jsx)(Q,{}),Object(d.jsx)(oe,{setDatos:c}),function(){if(null!=a)return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("p",{children:[Object(d.jsx)("strong",{children:"Entrenado:"})," ",a.trained]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("strong",{children:"Colecci\xf3n:"})," ",a.collection_name]})]})}()]})};var je=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(v,{}),Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{exact:!0,path:"/",component:b}),Object(d.jsx)(l.a,{path:"/Resultados",component:X}),Object(d.jsx)(l.a,{path:"/datosh",component:te}),Object(d.jsx)(l.a,{path:"/Backtesting",component:se}),Object(d.jsx)(l.a,{path:"/Train",component:le})]}),Object(d.jsx)(y,{})]})};i.a.render(Object(d.jsx)(f.a,{children:Object(d.jsx)(je,{})}),document.getElementById("root"))}},[[158,1,2]]]);
//# sourceMappingURL=main.2ffe0260.chunk.js.map