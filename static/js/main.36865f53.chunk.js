(this.webpackJsonpsimulation=this.webpackJsonpsimulation||[]).push([[0],{164:function(e,t,n){},290:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(17),o=n.n(i),u=(n(164),n(22)),s=n(332),c=n(333),l=n(334),m=n(335),d=n(336),j=n(327),b=["Dia","RND Demanda","Demanda","Stock","Desperdicio","Perdidas","AVG Desperdicio","AVG Perdidas","RDN Oc. Policia","RND Atrapado","Es Atrapado","Utilidad","AVG Utilidad","Utilidad c/Permiso","AVG Utilidad c/Permiso"],h={unitPrice:30,unitCost:10,penaltyAmount:300,dailyStock:50,simulationDays:100,fromDay:1,toDay:100},g=n(292),x=n(330),p=n(331),O=n(345),f=n(7),y=Object(j.a)({table:{maxHeight:600}}),D=function(e){var t=e.rows,n=e.title,i=e.pagination,o=e.reset,j=a.a.useState(0),h=Object(u.a)(j,2),D=h[0],v=h[1],S=a.a.useState(10),C=Object(u.a)(S,2),I=C[0],P=C[1],A=y();return Object(r.useEffect)((function(){o&&v(0)}),[o]),Object(f.jsxs)(g.a,{children:[n&&Object(f.jsx)(x.a,{variant:"h6",id:"tableTitle",align:"center",children:n}),Object(f.jsx)(p.a,{className:A.table,children:Object(f.jsxs)(s.a,{stickyHeader:!0,size:"small",children:[Object(f.jsx)(c.a,{children:Object(f.jsx)(l.a,{children:b.map((function(e,t){return Object(f.jsx)(m.a,{children:e},t)}))})}),Object(f.jsx)(d.a,{children:t&&t.slice(D*I,D*I+I).map((function(e,t){return Object(f.jsx)(l.a,{children:e.map((function(e,t){return Object(f.jsx)(m.a,{align:"right",children:e},t)}))},t)}))})]})}),i&&Object(f.jsx)(O.a,{rowsPerPageOptions:[10,25,100],component:"div",count:t.length,rowsPerPage:I,page:D,onChangePage:function(e,t){v(t)},onChangeRowsPerPage:function(e){P(+e.target.value),v(0)}})]})},v=n(339),S=n(344),C=n(49),I=n(346),P=n(340),A=n(146),w=n(35),N=w.b({unitPrice:w.a("Ingrese un numero").typeError("Debe ingresar un numero").positive("Ingrese un numero positivo").required("Ingrese un numero"),unitCost:w.a("Ingrese un numero").typeError("Debe ingresar un numero").positive("Ingrese un numero positivo").required("Ingrese un numero"),penaltyAmount:w.a("Ingrese un numero").typeError("Debe ingresar un numero").positive("Ingrese un numero positivo").required("Ingrese un numero"),dailyStock:w.a("Ingrese un numero").typeError("Debe ingresar un numero").positive("Ingrese un numero positivo").integer("Ingrese un numero entero").required("Ingrese un numero"),simulationDays:w.a("Ingrese un numero").typeError("Debe ingresar un numero").positive("Ingrese un numero positivo").integer("Ingrese un numero entero").required("Ingrese un numero").max(1e6,"Debe ser <= 1.000.000"),fromDay:w.a("Ingrese un numero").typeError("Debe ingresar un numero").positive("Ingrese un numero positivo").integer("Ingrese un numero entero").required("Ingrese un numero").when("toDay",(function(e,t){return t.max(e>=500?500:e,"Debe ser [<= Hasta] o [<= 500]")})),toDay:w.a("Ingrese un numero").typeError("Debe ingresar un numero").positive("Ingrese un numero positivo").integer("Ingrese un numero entero").required("Ingrese un numero").when("simulationDays",(function(e,t){return t.max(e,"Debe ser menor al valor de [Cantidad dias]")}))}),k=function(e){var t=e.handleSubmit,n=Object(A.a)({initialValues:h,validationSchema:N,onSubmit:function(e){t(Object(C.a)({},e))}});return Object(f.jsx)(S.a,{mx:2,children:Object(f.jsxs)("form",{onSubmit:n.handleSubmit,children:[Object(f.jsxs)(v.a,{container:!0,spacing:2,children:[Object(f.jsx)(v.a,{item:!0,xs:12,lg:6,children:Object(f.jsx)(I.a,{label:"Precio unitario",id:"unitPrice",name:"unitPrice",value:n.values.unitPrice||"",onChange:n.handleChange,error:n.touched.unitPrice&&Boolean(n.errors.unitPrice),helperText:n.touched.unitPrice&&n.errors.unitPrice,inputProps:{maxLength:5},fullWidth:!0})}),Object(f.jsx)(v.a,{item:!0,xs:12,lg:6,children:Object(f.jsx)(I.a,{label:"Costo unitario",id:"unitCost",name:"unitCost",value:n.values.unitCost||"",onChange:n.handleChange,error:n.touched.unitCost&&Boolean(n.errors.unitCost),helperText:n.touched.unitCost&&n.errors.unitCost,inputProps:{maxLength:5},fullWidth:!0})}),Object(f.jsx)(v.a,{item:!0,xs:12,lg:6,children:Object(f.jsx)(I.a,{label:"Valor de multa",id:"penaltyAmount",name:"penaltyAmount",value:n.values.penaltyAmount||"",onChange:n.handleChange,error:n.touched.penaltyAmount&&Boolean(n.errors.penaltyAmount),helperText:n.touched.penaltyAmount&&n.errors.penaltyAmount,inputProps:{maxLength:5},fullWidth:!0})}),Object(f.jsx)(v.a,{item:!0,xs:12,lg:6,children:Object(f.jsx)(I.a,{label:"Stock diario",id:"dailyStock",name:"dailyStock",value:n.values.dailyStock||"",onChange:n.handleChange,error:n.touched.dailyStock&&Boolean(n.errors.dailyStock),helperText:n.touched.dailyStock&&n.errors.dailyStock,inputProps:{maxLength:5},fullWidth:!0})}),Object(f.jsx)(v.a,{item:!0,xs:12,lg:6,children:Object(f.jsx)(I.a,{label:"Desde",id:"fromDay",name:"fromDay",value:n.values.fromDay||"",onChange:n.handleChange,error:n.touched.fromDay&&Boolean(n.errors.fromDay),helperText:n.touched.fromDay&&n.errors.fromDay,inputProps:{maxLength:7},fullWidth:!0})}),Object(f.jsx)(v.a,{item:!0,xs:12,lg:6,children:Object(f.jsx)(I.a,{label:"Hasta",id:"toDay",name:"toDay",value:n.values.toDay||"",onChange:n.handleChange,error:n.touched.toDay&&Boolean(n.errors.toDay),helperText:n.touched.toDay&&n.errors.toDay,inputProps:{maxLength:7},fullWidth:!0})}),Object(f.jsx)(v.a,{item:!0,xs:12,lg:12,children:Object(f.jsx)(I.a,{label:"Cantidad de dias a simular",id:"simulationDays",name:"simulationDays",value:n.values.simulationDays||"",onChange:n.handleChange,error:n.touched.simulationDays&&Boolean(n.errors.simulationDays),helperText:n.touched.simulationDays&&n.errors.simulationDays,inputProps:{maxLength:7},fullWidth:!0})})]}),Object(f.jsx)(S.a,{mt:2,display:"flex",justifyContent:"flex-end",children:Object(f.jsx)(P.a,{type:"submit",variant:"outlined",children:"SIMULAR"})})]})})},E=n(13),T=n(5),R=n(6),L=function(){function e(){Object(T.a)(this,e),this.m=4294967296,this.a=1664525,this.c=1013904223,this._last=Date.now()}return Object(R.a)(e,[{key:"getNext",value:function(){return Math.random()}}]),e}();function V(e,t){var n,r;return r=(new L).getNext()*(t-e),n=Number(e)+r,Number(U(n,4))}function U(e,t){var n=new RegExp("^-?\\d+(?:.\\d{0,"+(t||-1)+"})?");return e.toString().match(n)?e.toString().match(n)[0]:e.toString()}var B=[10,20,25,30,50,70,100],G=[.1,.3,.7,.8,.9,.95,1];function q(e){var t;return G.forEach((function(n,r){!t&&e<n&&(t=B[r])})),t}function W(e,t){return e>t?e-t:0}function _(e,t){return e<t?t-e:0}function F(e,t,n,r,a,i){return(e<n?e:n)*t-n*r-(a?i:0)}function H(e,t,n,r,a,i){return(e<n?e:n)*t-n*r-(a?0:i)}var M=function(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),n=t[0],a=t[1],i=Object(r.useState)([]),o=Object(u.a)(i,2),s=o[0],c=o[1],l=Object(r.useState)([]),m=Object(u.a)(l,2),d=m[0],j=m[1],b=Object(r.useState)([]),h=Object(u.a)(b,2),g=h[0],x=h[1];return Object(r.useEffect)((function(){if(n.length>0){var e=n.slice(-1).pop();c([{name:"AVG. VENTAS PERDIDAS",value:e[7]},{name:"AVG. TORTAS TIRADAS",value:e[6]},{name:"AVG. UTILIDAD",value:e[12]},{name:"AVG. UTILIDAD PERMISO",value:e[14]}])}}),[n]),{rows:n,results:s,lastRow:d,tail:g,simulate:function(e){var t=function(e){for(var t,n,r,a,i=e.initPrice,o=e.initCost,u=e.initPenalty,s=e.initStock,c=e.simulationDays,l=e.fromDay,m=e.toDay,d=Number(o),j=Number(i),b=Number(u),h=Number(s),g=V(0,1),x=q(g),p=W(h,x),O=_(h,x),f=p,y=O,D=V(.2,.4),v=V(0,1),S=v<D,C=!1,I=F(x,j,h,d,S,b),P=I,A=H(x,j,h,d,C,200),w=A,N=1>=l&&1<=m?[[1,g,x,h,p,O,f,y,D,v,S?"SI (-".concat(b,")"):"NO",I,P,A,w]]:[],k=N.length>0?N:[],T=[],R=2;R<=c;R++)f+=p=W(h,x=q(g=V(0,1))),y+=O=_(h,x),D=V(.2,.4),C=R%7!==0,P+=I=F(x,j,h,d,S=(v=V(0,1))<D,b),w+=A=H(x,j,h,d,C,200),n=Number(U(f/R,4)),t=Number(U(y/R,4)),r=Number(U(P/R,4)),a=Number(U(w/R,4)),k=[R,g,x,h,p,O,n,t,D,v,S?"SI (-".concat(b,")"):"NO",I,r,A,a],R>=l&&R<=m&&N.push(Object(E.a)(k)),c>=25&&c-25<=R&&T.push(Object(E.a)(k));return{_rows:N,_lastRow:[k],_tail:T}}({initPrice:e.unitPrice,initCost:e.unitCost,initPenalty:e.penaltyAmount,initStock:e.dailyStock,simulationDays:e.simulationDays,fromDay:e.fromDay,toDay:e.toDay}),n=t._rows,r=t._lastRow,i=t._tail;a(n),j(r),x(i)}}},J=n(341),z=n(342),K=function(e){var t=e.name,n=e.value;return Object(f.jsx)(J.a,{children:Object(f.jsxs)(z.a,{children:[Object(f.jsx)(x.a,{variant:"subtitle1",component:"h5",align:"center",children:t}),Object(f.jsx)(x.a,{variant:"subtitle2",align:"center",children:n})]})})},Q=function(e){var t=e.rows;return{labels:t.map((function(e){return e[0]})),datasets:[{label:"Ventas perdidas",data:t.map((function(e){return e[5]})),borderColor:"#457b9d"},{label:"Tortas tiradas",data:t.map((function(e){return e[4]})),borderColor:"#a8dadc"},{label:"Utilidad",data:t.map((function(e){return e[11]})),borderColor:"#e63946"},{label:"Utilidad c/permiso",data:t.map((function(e){return e[14]})),borderColor:"#1d3557"}]}},X=n(147),Y=function(e){var t=e.rows;return Object(f.jsx)(X.a,{data:Q({rows:t})})};function Z(){var e=M(),t=e.rows,n=e.results,a=e.lastRow,i=e.tail,o=e.simulate,s=Object(r.useState)(!1),c=Object(u.a)(s,2),l=c[0],m=c[1];return Object(r.useEffect)((function(){l&&m(!1)}),[l]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)(v.a,{container:!0,alignContent:"space-around",children:[Object(f.jsx)(v.a,{item:!0,xs:12,lg:2,children:Object(f.jsx)(S.a,{my:2,children:Object(f.jsx)(k,{handleSubmit:function(e){m(!0),o(e)}})})}),Object(f.jsx)(v.a,{item:!0,container:!0,xs:12,lg:4,spacing:1,alignItems:"center",children:n.map((function(e,t){return Object(f.jsx)(v.a,{item:!0,xs:6,children:Object(f.jsx)(K,{name:e.name,value:e.value})},t)}))}),Object(f.jsx)(v.a,{item:!0,container:!0,xs:12,lg:6,alignItems:"center",children:i.length>25&&Object(f.jsx)(Y,{rows:i})})]}),Object(f.jsx)(v.a,{container:!0,children:Object(f.jsxs)(v.a,{item:!0,xs:12,children:[Object(f.jsx)(S.a,{my:3,mx:"auto",children:Object(f.jsx)(D,{title:"Ultima fila",rows:a})})," ",Object(f.jsx)(S.a,{my:3,mx:"auto",children:Object(f.jsx)(D,{rows:t,reset:l,title:"Simulacion completa",pagination:!0})})]})})]})}var $=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,349)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),i(e),o(e)}))};o.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(Z,{})}),document.getElementById("root")),$()}},[[290,1,2]]]);
//# sourceMappingURL=main.36865f53.chunk.js.map