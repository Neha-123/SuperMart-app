(this["webpackJsonpamazon-clone"]=this["webpackJsonpamazon-clone"]||[]).push([[0],{143:function(e,t,n){e.exports=n(174)},148:function(e,t,n){},149:function(e,t,n){},174:function(e,t,n){"use strict";n.r(t);var a,r,o,i,c,l,u,d,p=n(0),m=n.n(p),s=n(9),b=n.n(s),h=(n(148),n(149),n(5)),g=n(2),f=n(44),x=n(131),O=n.n(x),E=n(37),j=n(38),v=n(41),k=n(40),y=n(8),w=n(127),S=n.n(w),R=n(123),A=n.n(R).a.create({baseURL:"/"}),C=function(e){var t={headers:{"content-type":"application/json",Authorization:e}};return function(e){A.get("/cart",t).then((function(t){e(_(t.data))})).catch((function(e){console.log(e)}))}},_=function(e){return{type:"SET_BASKET",basket:e}},T=function(e,t){var n={headers:{"content-type":"application/json",Authorization:t}};return function(t){A.delete("/cart/".concat(e),n).then((function(n){t(function(e){return{type:"REMOVE_PRODUCT",id:e}}(e))})).catch((function(e){console.log(e)}))}},I=function(e){return{type:"SET_EMAIL_ERROR",error:e}},B=Object(g.a)("div")({display:"flex",justifyContent:"space-between"}),z=function(e){Object(v.a)(n,e);var t=Object(k.a)(n);function n(){var e;Object(E.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).componentDidMount=function(){e.props.onfetchBasketProduct(e.props.token)},e}return Object(j.a)(n,[{key:"render",value:function(){var e=0,t=this.props.basket.map((function(e){return e.quantity}));return t.length>0&&this.props.isAuthenticated&&(e=t.reduce((function(e,t){return Number(e)+Number(t)}))),m.a.createElement(B,null,m.a.createElement(S.a,null),m.a.createElement("span",null,e))}}]),n}(p.Component),L=Object(y.b)((function(e){return{basket:e.basketReducer.basket,token:e.customerReducer.token,isAuthenticated:null!==e.customerReducer.token}}),(function(e){return{onfetchBasketProduct:function(t){return e(C(t))}}}))(z),N="375px",W="425px",P="768px",M="1024px",D="1440px",H="2560px",q={mobileS:"@media (min-width: ".concat("320px",")"),mobileM:"@media (min-width: ".concat(N,")"),mobileL:"@media (min-width: ".concat(W,")"),tablet:"@media (min-width: ".concat(P,")"),laptop:"@media (min-width: ".concat(M,")"),laptopL:"@media (min-width: ".concat(D,")"),desktop:"@media (min-width: ".concat(H,")"),desktopL:"@media (min-width: ".concat(H,")")},U={navpage:{display:"flex",flexDirection:"column",width:"100%"},navbar:(a={display:"flex",backgroundColor:"#131921",border:"1px solid black",alignItems:"center",paddingTop:"2px",paddingBottom:"2px",position:"sticky",top:"0",zIndex:"100"},Object(h.a)(a,q.mobileS,{width:"205%"}),Object(h.a)(a,q.tablet,{width:"100%"}),Object(h.a)(a,q.laptop,{width:"99.8%"}),a),logo:{marginRight:"20px",marginLeft:"20px",border:"1px solid #131921","&:hover":{border:"1px solid white"}},img:(r={width:"50px",height:"100%",objectFit:"contain"},Object(h.a)(r,q.mobileS,{width:"50px"}),Object(h.a)(r,q.mobileL,{width:"70px"}),Object(h.a)(r,q.laptop,{width:"120px"}),r),search:{display:"flex",alignItems:"center",width:"90%"},input:(o={width:"100%"},Object(h.a)(o,q.mobileS,{height:"30px"}),Object(h.a)(o,q.desktop,{height:"35px"}),o),searchIcon:Object(h.a)({backgroundColor:"#febd69",padding:"6px 9px"},q.mobileS,{padding:"4px 6px"}),navMenu:{display:"flex",alignItems:"center"},navMenuItems:Object(h.a)({display:"flex",flexDirection:"column",padding:"0 9px 0 9px",marginLeft:"20px",width:"max-content",textAlign:"left",border:"1px solid #131921","&:hover":{border:"1px solid white"}},q.mobileS,{marginLeft:"10px",padding:"0 4px 0 4px"}),cart:Object(h.a)({display:"flex",padding:"9px 9px 9px 9px",marginLeft:"20px",marginRight:"10px",color:"white",alignItems:"center",justifyContent:"center",border:"1px solid #131921","&:hover":{border:"1px solid white"}},q.mobileS,{padding:"7px 2px 7px 2px",marginLeft:"10px",marginRight:"5px"}),navMenuItemfirstLine:Object(h.a)({color:"#ccc",fontSize:"12px",lineHeight:"14px",height:"17px",fontWeight:"400",paddingTop:"9px",paddingRight:"9px",textDecoration:"none"},q.mobileS,{fontSize:"10px"}),navMenuItemSecLine:Object(h.a)({color:"white",fontSize:"14px",lineHeight:"15px",fontWeight:"700",paddingBottom:"5px"},q.mobileS,{fontSize:"12px"}),link:{textDecoration:"none"}},F=Object(g.a)("div")(U.navpage),Q=Object(g.a)("div")(U.navbar),V=Object(g.a)(f.b)(U.link),G=Object(g.a)("div")(U.logo),Y=Object(g.a)("img")(U.img),J=Object(g.a)("div")(U.search),K=Object(g.a)("div")(U.searchIcon),X=Object(g.a)("div")(U.navMenu),$=Object(g.a)("div")(U.navMenuItems),Z=Object(g.a)("div")(U.cart),ee=Object(g.a)("span")(U.navMenuItemfirstLine),te=Object(g.a)("span")(U.navMenuItemSecLine),ne=Object(g.a)("input")(U.input),ae=m.a.memo((function(e){return m.a.createElement(F,null,m.a.createElement(Q,null,m.a.createElement(V,{to:"/"},m.a.createElement(G,null,m.a.createElement(Y,{rel:"preconnect",src:"https://www.mabaya.com/wp-content/uploads/2019/10/amazon_PNG25.png",alt:"amazon"}))),m.a.createElement(J,null,m.a.createElement(ne,null),m.a.createElement(K,null,m.a.createElement(O.a,null))),m.a.createElement(X,null,e.isAuthenticated?m.a.createElement(V,{to:"/logOut"},m.a.createElement($,null,m.a.createElement(ee,null,"Hello, ",e.name," "),m.a.createElement(te,null,"LogOut"))):m.a.createElement(V,{to:"/login"},m.a.createElement($,null,m.a.createElement(ee,null,"Hello, SignIn"),m.a.createElement(te,null,"Account & lists"))),m.a.createElement(V,{to:"/"},m.a.createElement($,null,m.a.createElement(ee,null,"Returns"),m.a.createElement(te,null,"& Orders"))),m.a.createElement(V,{to:"/"},m.a.createElement($,null,m.a.createElement(ee,null,"Your"),m.a.createElement(te,null,"Prime"))),m.a.createElement(V,{to:"/checkout"},m.a.createElement(Z,null,m.a.createElement(L,null))))))})),re=Object(y.b)((function(e){return{isAuthenticated:null!==e.customerReducer.token,name:e.customerReducer.name}}))(ae),oe=n(15),ie=n(62),ce=n.n(ie),le=n(16),ue=n(203),de=n(204),pe=n(205),me=Object(y.b)((function(e){return{token:e.customerReducer.token}}),(function(e){return{onRemoveProduct:function(t,n){return e(T(t,n))},onSetQuantity:function(t,n,a,r){return e(function(e,t,n,a){var r={headers:{"content-type":"application/json",Authorization:a}};return function(a){A.patch("/cart/".concat(e),{quantity:t},r).then((function(r){a(function(e,t,n){return{type:"UPDATE_QUANTITY",id:e,quantity:t,productId:n}}(e,t,n))})).catch((function(e){console.log(e)}))}}(t,n,a,r))}}}))((function(e){var t=Object(p.useState)(e.quantity),n=Object(le.a)(t,2),a=n[0],r=n[1],o=function(t){var n;0===t?(n=e.id,e.onRemoveProduct(n,e.token)):function(t,n,a){e.onSetQuantity(t,n,a,e.token)}(e.id,t,e.product_id)};return m.a.createElement("div",null,m.a.createElement(ue.a,null,m.a.createElement(de.a,{value:a,onChange:function(e){r(e.target.value),o(e.target.value)},displayEmpty:!0},m.a.createElement(pe.a,{value:0},"0 (Delete)"),m.a.createElement(pe.a,{value:1},"Qty: 1"),m.a.createElement(pe.a,{value:2},"Qty: 2"),m.a.createElement(pe.a,{value:3},"Qty: 3"),m.a.createElement(pe.a,{value:4},"Qty: 4"),m.a.createElement(pe.a,{value:5},"Qty: 5"),m.a.createElement(pe.a,{value:6},"Qty: 6"),m.a.createElement(pe.a,{value:7},"Qty: 7"),m.a.createElement(pe.a,{value:8},"Qty: 8"),m.a.createElement(pe.a,{value:9},"Qty: 9"),m.a.createElement(pe.a,{value:10},"Qty: 10+"))))})),se={basket:{width:"95%",margin:"auto"},basketitem:{display:"flex",marginTop:"20px",marginBottom:"20px"},img:Object(h.a)({objectFit:"contain"},q.mobileS,{height:"125px"}),item:{display:"flex",justifyContent:"space-between",width:"100%"},itemdetails:{display:"flex",flexDirection:"column",marginLeft:"20px",lineHeight:"30px",alignContent:"left"},itemdescription:Object(h.a)({color:"#0066c0",fontSize:"17px",fontWeight:"700",lineHeight:"30px"},q.mobileS,{fontSize:"12px",fontWeight:"600",lineHeight:"20px"}),instock:{fontSize:"12px",color:"green"},shipping:{fontSize:"13px",color:"#606060"},certified:{width:"80px",objectFit:"contain"},eventforitem:{display:"flex",marginTop:"10px"},quantity:{marginRight:"20px"},delete:Object(h.a)({fontSize:"13px",color:"#0066C0",fontWeight:"600",marginRight:"20px",cursor:"pointer","&:hover":{color:"#ce760af7",textDecoration:"underline"}},q.mobileS,{fontSize:"12px",fontWeight:"400",marginRight:"7px"}),save:Object(h.a)({fontSize:"13px",color:"#0066C0",fontWeight:"600",marginRight:"20px",cursor:"pointer","&:hover":{color:"#ce760af7",textDecoration:"underline"}},q.mobileS,{fontSize:"12px",fontWeight:"400",marginRight:"7px",width:"70px"}),more:Object(h.a)({fontSize:"13px",color:"#0066C0",fontWeight:"600",marginRight:"20px",cursor:"pointer","&:hover":{color:"#ce760af7",textDecoration:"underline"}},q.mobileS,{fontSize:"12px",fontWeight:"400",marginRight:"7px",width:"115px"}),price:Object(h.a)({marginLeft:"30px",fontSize:"20px",fontWeight:"700"},q.mobileS,{fontSize:"15px",fontWeight:"600"})},be=Object(g.a)("div")(se.basket),he=Object(g.a)("div")(se.item),ge=Object(g.a)("div")(se.basketitem),fe=Object(g.a)("img")(se.img),xe=Object(g.a)("div")(se.itemdetails),Oe=Object(g.a)("span")(se.itemdescription),Ee=Object(g.a)("span")(se.instock),je=Object(g.a)("span")(se.shipping),ve=Object(g.a)("img")(se.certified),ke=Object(g.a)("div")(se.eventforitem),ye=Object(g.a)("span")(se.delete),we=Object(g.a)("span")(se.save),Se=Object(g.a)("span")(se.more),Re=Object(g.a)("span")(se.price),Ae=m.a.memo((function(e){return m.a.createElement(be,null,m.a.createElement("hr",null),m.a.createElement(ge,null,m.a.createElement(fe,{src:e.productImage}),m.a.createElement(he,null,m.a.createElement(xe,null,m.a.createElement(Oe,null,e.productName),m.a.createElement(Ee,null,"In stock"),m.a.createElement(je,null,"Eligible for FREE Shipping"),m.a.createElement(ve,{src:"https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png"}),m.a.createElement(ke,null,m.a.createElement(me,{quantity:e.quantity,id:e.id,product_id:e.product_id}),m.a.createElement(ye,{onClick:function(){return t=e.id,void e.onRemoveProduct(t,e.token);var t}},"Delete"),m.a.createElement(we,null,"Save for later"),m.a.createElement(Se,null,"See more like this"))),m.a.createElement(Re,null,"\u20b9",ce()(e.price).format("0,0.00")))))})),Ce=Object(y.b)((function(e){return{token:e.customerReducer.token}}),(function(e){return{onRemoveProduct:function(t,n){return e(T(t,n))}}}))(Ae),_e={basketprice:{width:"95%",margin:"auto"},spanstyle:Object(h.a)({fontSize:"20px"},q.mobileS,{fontSize:"12px"}),cartprice:Object(h.a)({fontSize:"20px",fontWeight:"700"},q.mobileS,{fontSize:"15px"})},Te=Object(g.a)("span")(_e.spanstyle),Ie=Object(g.a)("div")(_e.basketprice),Be=Object(g.a)("span")(_e.cartprice),ze=function(e){Object(v.a)(n,e);var t=Object(k.a)(n);function n(){var e;Object(E.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).componentDidMount=function(){e.props.onCalculateTotalPrice(e.props.basket)},e}return Object(j.a)(n,[{key:"render",value:function(){var e=0,t=this.props.basket.map((function(e){return e.quantity}));return t.length>0&&(e=t.reduce((function(e,t){return Number(e)+Number(t)}))),m.a.createElement(Ie,null,m.a.createElement("hr",null),m.a.createElement(Te,null,"Subtotal (",e," items) :"),m.a.createElement(Be,null,"\u20b9",ce()(this.props.totalPrice).format("0,0.00")))}}]),n}(p.Component),Le=Object(y.b)((function(e){return{totalPrice:e.basketReducer.sumTotal,basket:e.basketReducer.basket}}),(function(e){return{onCalculateTotalPrice:function(t){return e(function(e){return{type:"CALCULATE_TOTAL_PRICE",basket:e}}(t))}}}))(ze),Ne={display:"flex",flexDirection:"column",alignItems:"left",textAlign:"left",padding:"10px 10px"},We={marginLeft:"70px"},Pe={display:"flex",flexDirection:"column",marginLeft:"20px"},Me=Object(g.a)("div")(Ne),De=Object(g.a)("div")(We),He=Object(g.a)("div")(Pe),qe=function(e){Object(v.a)(n,e);var t=Object(k.a)(n);function n(){return Object(E.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return m.a.createElement(Me,null,m.a.createElement(De,null,0!==this.props.basket.length&&this.props.isAuthenticated?m.a.createElement("h2",null,"Shopping Cart"):m.a.createElement("h2",null,"Your Basket is empty")),this.props.basket.length>0&&this.props.isAuthenticated&&m.a.createElement("div",null,m.a.createElement(He,null,this.props.basket.map((function(e){return m.a.createElement(Ce,{key:e._id,id:e._id,product_id:e.product_id,productName:e.productName,productImage:e.productImage,price:e.price,quantity:e.quantity})}))),m.a.createElement(Le,null)))}}]),n}(p.Component),Ue=Object(y.b)((function(e){return{basket:e.basketReducer.basket,isAuthenticated:null!==e.customerReducer.token}}))(qe),Fe=n(30),Qe=n(22),Ve={fontFamily:"Amazon Ember,Arial,sans-serif",lineHeight:"25px"},Ge={fontWeight:"700",display:"block"},Ye={fontWeight:"500",marginRight:"10px",letterSpacing:"0.5px"},Je={fontWeight:"500",textDecoration:"none",color:"#0066c0","&:hover":{textDecoration:"underline",color:"brown"}},Ke={width:"90%",padding:"3px 7px",margin:"auto",marginBottom:"10px",border:"1px solid #a6a6a6",borderRadius:"3px",outline:"0",height:"20px",lineHeight:"normal"},Xe={width:"96%",height:"30px",background:"#f0c14b",borderColor:"#a88734 #9c7e31 #846a29",color:"#111",borderRadius:"3px",borderStyle:"solid",borderWidth:"1px",cursor:"pointer","&:hover":{background:"#f2b211"},"&:disabled":{background:"#c8ad69b3",color:"#111111bd"}},$e={display:"block",fontWeight:"500",textAlign:"left",lineHeight:"0px",color:"#cc0808",marginBottom:"20px"},Ze={padding:"10px 10px",display:"block",fontWeight:"500",textAlign:"left",color:"#cc0808",border:"2px solid #cc0808",borderRadius:"5px",background:"#cc080833",margin:"10px 0px"},et=Object(g.a)("input")(Ke),tt=Object(g.a)("button")(Xe),nt=Object(g.a)("div")(Ve),at=Object(g.a)("span")(Ye),rt=Object(g.a)("a")(Je),ot=Object(g.a)("span")(Ge),it=Object(g.a)("span")($e),ct=Object(g.a)("span")(Ze),lt=Object(y.b)((function(e){return{errorMessage:e.customerReducer.passwordError,email:e.customerReducer.email,isAuthenticated:null!==e.customerReducer.token}}),(function(e){return{onLogin:function(t,n){return e(function(e,t){return function(n){A.post("/customer/login",{email:e,password:t}).then((function(e){var t,a;e.data.password?n((t=e.data.tokens,a=e.data.name,{type:"CUSTOMER_LOGIN",tokens:t,name:a})):n({type:"SET_PASSWORD_ERROR",error:e.data})})).catch((function(e){console.log(e)}))}}(t,n))}}}))((function(e){var t=Object(p.useState)(""),n=Object(le.a)(t,2),a=n[0],r=n[1],o=Object(Fe.a)({initialValues:{password:""},validationSchema:Qe.a({password:Qe.b().min(5,"Min 5 characters").required("Required")})}),i=null;return e.isAuthenticated&&(i=m.a.createElement(oe.a,{to:"/"})),m.a.createElement("div",null,i,m.a.createElement(nt,null,m.a.createElement(at,null,e.email),m.a.createElement(rt,{rel:"preconnect",href:"/login"},"Change"),e.errorMessage?m.a.createElement(ct,null,e.errorMessage):null,m.a.createElement(ot,null,"Password"),m.a.createElement(et,{type:"password",name:"password",value:o.values.password,onChange:function(e){!function(e){r(e.target.value)}(e),o.handleChange(e)},onBlur:function(e){o.handleBlur(e)}}),o.touched.password&&o.errors.password?m.a.createElement(it,null,o.errors.password):null,m.a.createElement(tt,{type:"submit",disabled:!!o.errors.password,onClick:function(t){t.preventDefault(),e.onLogin(e.email,a)}},"Login")))})),ut={width:"200px",padding:"3px 7px",margin:"auto",marginBottom:"10px",border:"1px solid #a6a6a6",borderRadius:"3px",outline:"0",height:"20px",lineHeight:"normal"},dt={display:"block",width:"215px",height:"30px",background:"#f0c14b",borderColor:"#a88734 #9c7e31 #846a29",color:"#111",borderRadius:"3px",borderStyle:"solid",borderWidth:"1px",cursor:"pointer","&:hover":{background:"#f2b211"},"&:disabled":{background:"#c8ad69b3",color:"#111111bd"}},pt={display:"block",fontWeight:"500",textAlign:"left",lineHeight:"0px",color:"#cc0808",marginBottom:"20px"},mt=Object(g.a)("input")(ut),st=Object(g.a)("button")(dt),bt=Object(g.a)("span")(pt),ht=Object(y.b)(null,(function(e){return{oncheckEmail:function(t){return e(function(e){return function(t){A.post("/customer/login/email",{email:e}).then((function(n){n.data.email?t(function(e){return{type:"SET_EMAIL",email:e}}(e)):t(I(n.data))})).catch((function(e){console.log(e)}))}}(t))}}}))((function(e){var t=Object(p.useState)(""),n=Object(le.a)(t,2),a=n[0],r=n[1],o=Object(Fe.a)({initialValues:{emailAddress:""},validationSchema:Qe.a({emailAddress:Qe.b().email("Enter a valid Email Address").required("Required")})});return m.a.createElement("div",null,m.a.createElement(mt,{type:"text",name:"emailAddress",value:o.values.emailAddress,onChange:function(e){!function(e){r(e.target.value)}(e),o.handleChange(e)},onBlur:function(e){o.handleBlur(e)}}),o.touched.emailAddress&&o.errors.emailAddress?m.a.createElement(bt,null,o.errors.emailAddress):null,m.a.createElement(st,{type:"submit",disabled:!(!o.errors.emailAddress&&""!==a),onClick:function(t){t.preventDefault(),e.oncheckEmail(a)}},"Continue"))})),gt={border:"1px solid #dac8c8f7",borderRadius:"5px",display:"block",padding:"20px",width:"fit-content",margin:"50px auto",fontSize:"13px",textAlign:"left",lineHeight:"25px"},ft={fontFamily:"Amazon Ember,Arial,sans-serif"},xt={display:"block",fontWeight:"700"},Ot={width:"25%",height:"30px",background:"#f0c14b",borderColor:"#a88734 #9c7e31 #846a29",color:"#111",borderRadius:"3px",borderStyle:"solid",borderWidth:"1px",cursor:"pointer","&:hover":{background:"#f2b211"}},Et={padding:"10px 10px",display:"block",fontWeight:"500",textAlign:"left",color:"#cc0808",border:"2px solid #cc0808",borderRadius:"5px",background:"#cc080833"},jt={fontWeight:"500",textDecoration:"none",color:"#0066c0","&:hover":{textDecoration:"underline",color:"brown"}},vt=Object(g.a)("form")(gt),kt=Object(g.a)("h2")(ft),yt=Object(g.a)("label")(xt),wt=Object(g.a)("button")(Ot),St=Object(g.a)("span")(Et),Rt=Object(g.a)("a")(jt),At=Object(y.b)((function(e){return{errorMessage:e.customerReducer.emailError,continue:e.customerReducer.continue}}))((function(e){var t=Object(p.useState)(null),n=Object(le.a)(t,2),a=n[0],r=n[1];return m.a.createElement("div",null,a,e.continue?m.a.createElement(vt,null,m.a.createElement(kt,null,"Login"),m.a.createElement(lt,null)):m.a.createElement("div",null,m.a.createElement(vt,null,m.a.createElement(kt,null,"Login"),m.a.createElement(Rt,{rel:"preconnect",href:"/"},"Go Home"),e.errorMessage?m.a.createElement(St,null,e.errorMessage):null,m.a.createElement(yt,null,"Enter your email"),m.a.createElement(ht,null)),m.a.createElement(wt,{onClick:function(){r(m.a.createElement(oe.a,{to:"/createAccount"}))}},"Create Your Account")))})),Ct=n(135),_t=n.n(Ct),Tt={productCard:(i={display:"flex",flexDirection:"column",objectFit:"contain",margin:"10px 10px",padding:"20px",backgroundColor:"white",zIndex:"50",alignItems:"center",justifyContent:"space-between"},Object(h.a)(i,q.mobileS,{height:"230px",padding:"10px",lineHeight:"10px"}),Object(h.a)(i,q.tablet,{height:"300px",padding:"12px",lineHeight:"15px"}),Object(h.a)(i,q.laptop,{lineHeight:"20px",height:"350px"}),i),img:(c={width:"100px",height:"100px",objectFit:"contain",marginBottom:"10px"},Object(h.a)(c,q.mobileS,{width:"100px",height:"100px",marginBottom:"5px"}),Object(h.a)(c,q.tablet,{width:"110px",height:"110px",marginBottom:"7px"}),Object(h.a)(c,q.laptop,{width:"130px",height:"130px",marginBottom:"10px"}),c),content:{maxWidth:"200px",textAlign:"left"},description:(l={fontSize:"17px",color:"#0066c0",cursor:"pointer",fontWeight:"500",marginBottom:"20px"},Object(h.a)(l,q.mobileS,{fontSize:"10px"}),Object(h.a)(l,q.tablet,{fontSize:"12px"}),Object(h.a)(l,q.laptop,{fontSize:"14px"}),l),rate:{display:"flex",height:"20px",marginBottom:"10px"},star:{color:"#f0c14b",height:"10px"},price:(u={fontWeight:"700",color:"#B12704",height:"12px",lineHeight:"12px",marginBottom:"10px"},Object(h.a)(u,q.mobileS,{fontSize:"7px"}),Object(h.a)(u,q.tablet,{fontSize:"12px"}),u),button:(d={background:"#f0c14b",borderColor:"#a88734 #9c7e31 #846a29",color:"#111",borderRadius:"3px",borderStyle:"solid",borderWidth:"1px",cursor:"pointer",height:"29px",outline:"none","&:hover":{background:"#f2b211"}},Object(h.a)(d,q.mobileS,{height:"20px"}),Object(h.a)(d,q.tablet,{height:"25px"}),d)},It=Object(g.a)("div")(Tt.productCard),Bt=Object(g.a)("div")(Tt.rate),zt=Object(g.a)("div")(Tt.content),Lt=Object(g.a)(_t.a)(Tt.star),Nt=Object(g.a)("img")(Tt.img),Wt=Object(g.a)("button")(Tt.button),Pt=Object(g.a)("span")(Tt.description),Mt=Object(g.a)("span")(Tt.price);var Dt,Ht=Object(y.b)((function(e){return{productlist:e.productReducer.product,token:e.customerReducer.token}}),(function(e){return{onAddProducttoCart:function(t,n){return e(function(e,t){var n={headers:{"content-type":"application/json",Authorization:t}};return function(a){A.post("/cart",{product:e},n).then((function(e){a(C(t))})).catch((function(e){console.log(e)}))}}(t,n))}}}))((function(e){return m.a.createElement(It,null,m.a.createElement(Nt,{rel:"preconnect",src:e.imagelink}),m.a.createElement(zt,null,m.a.createElement(Pt,null,e.productname),m.a.createElement(Bt,null,Array(Number(e.rate)).fill().map((function(e){return m.a.createElement(Lt,{key:Math.random(),fontSize:"small"})}))),m.a.createElement(Mt,null,"\u20b9",ce()(e.price).format("0,0.00"))),m.a.createElement(Wt,{onClick:function(){return function(t){var n=e.productlist.find((function(e){return e._id===t}));e.onAddProducttoCart(n,e.token)}(e.id)}},"Add to Cart"))})),qt=Object(g.a)("div")({display:"flex",flexDirection:"row",flexWrap:"wrap",alignItems:"center",justifyContent:"center",width:"100%"}),Ut=function(e){return m.a.createElement(qt,null,e.productlist.map((function(t){return m.a.createElement(Ht,{key:t._id,id:t._id,imagelink:t.productImage,productname:t.productName,rate:t.rating,price:t.price,addtoCart:e.addtoCart})})))},Ft=function(e){Object(v.a)(n,e);var t=Object(k.a)(n);function n(){var e;Object(E.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).componentDidMount=function(){e.props.onFetchAllProducts()},e}return Object(j.a)(n,[{key:"render",value:function(){return m.a.createElement(Ut,{productlist:this.props.productlist})}}]),n}(p.Component),Qt=Object(y.b)((function(e){return{productlist:e.productReducer.product}}),(function(e){return{onFetchAllProducts:function(){return e((function(e){A.get("/product").then((function(t){e({type:"SET_PRODUCTLIST",product:t.data})})).catch((function(e){console.log(e)}))}))}}}))(Ft),Vt={backdrop:(Dt={display:"flex",flexDirection:"column",backgroundColor:"#EAEDED",width:"110%",alignItems:"center",justifyContent:"center",zIndex:"-1000"},Object(h.a)(Dt,q.mobileS,{width:"205%"}),Object(h.a)(Dt,q.tablet,{width:"100%"}),Object(h.a)(Dt,q.laptop,{width:"100%"}),Dt)},Gt=Object(g.a)("div")(Vt.backdrop),Yt=function(e){return m.a.createElement(Gt,null,e.children)},Jt={width:"100%"},Kt={width:"100%",maskImage:"linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",marginBottom:"-10%",objectFit:"contain"},Xt=Object(g.a)("div")(Jt),$t=Object(g.a)("img")(Kt),Zt=function(){return m.a.createElement(Yt,null,m.a.createElement(Xt,null,m.a.createElement($t,{rel:"preconnect",src:"https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/Primeday_FLAPHero/PC/1xmidnight-1._CB408619608_.jpg",alt:""})),m.a.createElement(Qt,null))},en=function(e){Object(v.a)(n,e);var t=Object(k.a)(n);function n(){return Object(E.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){var e=null;return this.props.isAuthenticated?this.props.onLogout(this.props.token,this.props.tokenId):e=m.a.createElement(oe.a,{to:this.props.redirectPath}),m.a.createElement("div",null,e)}}]),n}(p.Component),tn=Object(y.b)((function(e){return{token:e.customerReducer.token,tokenId:e.customerReducer.tokenId,isAuthenticated:null!==e.customerReducer.token,redirectPath:e.customerReducer.redirectPath}}),(function(e){return{onLogout:function(t,n){return e(function(e,t){var n={headers:{"content-type":"application/json",Authorization:e}};return function(a){A.patch("/customer/logout",{token:e,tokenId:t},n).then((function(e){a({type:"CUSTOMER_LOGOUT"})})).catch((function(e){console.log(e)}))}}(t,n))}}}))(en),nn={width:"90%",padding:"3px 7px",margin:"auto",marginBottom:"10px",border:"1px solid #a6a6a6",borderRadius:"3px",outline:"0",height:"20px",lineHeight:"normal"},an={display:"block",fontWeight:"500",textAlign:"left",lineHeight:"0px",color:"#cc0808",marginBottom:"10px"},rn=Object(g.a)("input")(nn),on=Object(g.a)("span")(an),cn=function(e){var t=Object(p.useState)(""),n=Object(le.a)(t,2),a=n[0],r=n[1],o=Object(Fe.a)({initialValues:{emailAddress:""},validationSchema:Qe.a({emailAddress:Qe.b().email("Invalid Email Address").required("Required")})});return m.a.createElement("div",null,m.a.createElement(rn,{type:"text",name:"emailAddress",value:o.values.emailAddress,onChange:function(e){!function(e){r(e.target.value)}(e),o.handleChange(e)},onBlur:function(t){e.email(a),o.handleBlur(t)}}),o.touched.emailAddress&&o.errors.emailAddress?m.a.createElement(on,null,o.errors.emailAddress):null)},ln={width:"90%",padding:"3px 7px",margin:"auto",marginBottom:"10px",border:"1px solid #a6a6a6",borderRadius:"3px",outline:"0",height:"20px",lineHeight:"normal"},un={display:"block",fontWeight:"500",textAlign:"left",lineHeight:"0px",color:"#cc0808",marginBottom:"10px"},dn=Object(g.a)("input")(ln),pn=Object(g.a)("span")(un),mn=function(e){var t=Object(p.useState)(""),n=Object(le.a)(t,2),a=n[0],r=n[1],o=Object(Fe.a)({initialValues:{mobileNumber:""},validationSchema:Qe.a({mobileNumber:Qe.b().length(10,"Must be 10 digits").required("Required")})});return m.a.createElement("div",null,m.a.createElement(dn,{type:"number",name:"mobileNumber",value:o.values.mobileNumber,onChange:function(e){!function(e){r(e.target.value)}(e),o.handleChange(e)},onBlur:function(t){e.mobile(a),o.handleBlur(t)}}),o.touched.mobileNumber&&o.errors.mobileNumber?m.a.createElement(pn,null,o.errors.mobileNumber):null)},sn={width:"90%",padding:"3px 7px",margin:"auto",marginBottom:"10px",border:"1px solid #a6a6a6",borderRadius:"3px",outline:"0",height:"20px",lineHeight:"normal"},bn={display:"block",fontWeight:"500",textAlign:"left",lineHeight:"0px",color:"#cc0808",marginBottom:"10px"},hn=Object(g.a)("input")(sn),gn=Object(g.a)("span")(bn),fn=function(e){var t=Object(p.useState)(""),n=Object(le.a)(t,2),a=n[0],r=n[1],o=Object(Fe.a)({initialValues:{fullName:""},validationSchema:Qe.a({fullName:Qe.b().required("Required")})});return m.a.createElement("div",null,m.a.createElement(hn,{type:"text",name:"fullName",value:o.values.fullName,onChange:function(e){!function(e){r(e.target.value)}(e),o.handleChange(e)},onBlur:function(t){e.customername(a),o.handleBlur(t)}}),o.touched.fullName&&o.errors.fullName?m.a.createElement(gn,null,o.errors.fullName):null)},xn={width:"90%",padding:"3px 7px",margin:"auto",marginBottom:"10px",border:"1px solid #a6a6a6",borderRadius:"3px",outline:"0",height:"20px",lineHeight:"normal"},On={display:"block",fontWeight:"500",textAlign:"left",lineHeight:"0px",color:"#cc0808",marginBottom:"10px"},En=Object(g.a)("input")(xn),jn=Object(g.a)("span")(On),vn=function(e){var t=Object(p.useState)(""),n=Object(le.a)(t,2),a=n[0],r=n[1],o=Object(Fe.a)({initialValues:{password:""},validationSchema:Qe.a({password:Qe.b().min(5,"Min 5 characters").required("Required")})});return m.a.createElement("div",null,m.a.createElement(En,{type:"password",name:"password",value:o.values.password,onChange:function(e){!function(e){r(e.target.value)}(e),o.handleChange(e)},onBlur:function(t){e.password(a),o.handleBlur(t)}}),o.touched.password&&o.errors.password?m.a.createElement(jn,null,o.errors.password):null)},kn={border:"1px solid #dac8c8f7",borderRadius:"5px",display:"block",padding:"20px",width:"fit-content",margin:"50px auto",fontSize:"13px",textAlign:"left",lineHeight:"25px"},yn={fontFamily:"Amazon Ember,Arial,sans-serif"},wn={display:"block",fontWeight:"700"},Sn={width:"96%",marginTop:"10px",height:"30px",background:"#f0c14b",borderColor:"#a88734 #9c7e31 #846a29",color:"#111",borderRadius:"3px",borderStyle:"solid",borderWidth:"1px",cursor:"pointer","&:hover":{background:"#f2b211"}},Rn={padding:"10px 10px",display:"block",fontWeight:"500",textAlign:"left",color:"#cc0808",border:"2px solid #cc0808",borderRadius:"5px",background:"#cc080833",margin:"10px 0px"},An=Object(g.a)("form")(kn),Cn=Object(g.a)("h1")(yn),_n=Object(g.a)("label")(wn),Tn=Object(g.a)("button")(Sn),In=Object(g.a)("span")(Rn),Bn=Object(y.b)((function(e){return{isAuthenticated:null!==e.customerReducer.token,errorMessage:e.customerReducer.emailError}}),(function(e){return{onCreateNewAccount:function(t,n,a,r){return e(function(e,t,n,a){return function(r){A.post("/customer",{name:e,mobile:t,email:n,password:a}).then((function(t){t.data.token?r(function(e,t,n,a,r){return{type:"CREATE_ACCOUNT",name:e,email:n,token:a,tokenId:r}}(e,0,n,t.data.token,t.data._id)):r(I(t.data))})).catch((function(e){console.log(e)}))}}(t,n,a,r))}}}))((function(e){var t=Object(p.useState)(""),n=Object(le.a)(t,2),a=n[0],r=n[1],o=Object(p.useState)(0),i=Object(le.a)(o,2),c=i[0],l=i[1],u=Object(p.useState)(""),d=Object(le.a)(u,2),s=d[0],b=d[1],h=Object(p.useState)(""),g=Object(le.a)(h,2),f=g[0],x=g[1],O=null;return e.isAuthenticated&&(O=m.a.createElement(oe.a,{to:"/"})),m.a.createElement("div",null,O,m.a.createElement(An,null,m.a.createElement(Cn,null,"CreateAccount"),e.errorMessage?m.a.createElement(In,null,e.errorMessage):null,m.a.createElement(_n,null,"Your name"),m.a.createElement(fn,{customername:function(e){r(e)}}),m.a.createElement(_n,null,"Mobile Number"),m.a.createElement(mn,{mobile:function(e){l(e)}}),m.a.createElement(_n,null,"Email"),m.a.createElement(cn,{email:function(e){b(e)}}),m.a.createElement(_n,null,"Password"),m.a.createElement(vn,{password:function(e){x(e)}}),m.a.createElement(Tn,{type:"submit",onClick:function(t){t.preventDefault(),e.onCreateNewAccount(a,c,s,f),r(""),l(""),b(""),x("")}},"Continue")))}));var zn=function(){return m.a.createElement("div",{className:"App"},m.a.createElement(oe.d,null,m.a.createElement(oe.b,{path:"/checkout"},m.a.createElement(re,null),m.a.createElement(Ue,null)),m.a.createElement(oe.b,{path:"/login"},m.a.createElement(At,null)),m.a.createElement(oe.b,{path:"/createAccount"},m.a.createElement(Bn,null)),m.a.createElement(oe.b,{path:"/logOut"},m.a.createElement(tn,null)),m.a.createElement(oe.b,{path:"/"},m.a.createElement(re,null),m.a.createElement(Zt,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ln=n(13),Nn={product:[]},Wn=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Nn,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PRODUCTLIST":return Object(Ln.a)(Object(Ln.a)({},e),{},{product:t.product});default:return e}},Pn=(n(139),function(e,t){var n=0,a=e.filter((function(e){return e._id!==t}));return a.length>0&&(n=Mn(a)),{newBasket:a,newPrice:n}}),Mn=function(e){return e.map((function(e){return Number(e.quantity)*Number(e.price)})).reduce((function(e,t){return Number(e)+Number(t)})).toString()},Dn=function(e,t,n){var a=Object.assign([],e);return a.forEach((function(e){e.product_id===t&&(e.quantity=Number(n))})),{cloneBasket:a,sum:Mn(a)}},Hn=function(e){return e[e.length-1]},qn={basket:[],sumTotal:"0"},Un=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:qn,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_BASKET":return Object(Ln.a)(Object(Ln.a)({},e),{},{basket:t.basket});case"CALCULATE_TOTAL_PRICE":var n=Mn(t.basket);return Object(Ln.a)(Object(Ln.a)({},e),{},{sumTotal:n});case"REMOVE_PRODUCT":var a=Pn(e.basket,t.id);return Object(Ln.a)(Object(Ln.a)({},e),{},{basket:a.newBasket,sumTotal:a.newPrice});case"UPDATE_QUANTITY":var r=Dn(e.basket,t.productId,t.quantity);return Object(Ln.a)(Object(Ln.a)({},e),{},{basket:r.cloneBasket,sumTotal:r.sum});default:return e}},Fn={email:null,password:null,emailError:null,passwordError:null,continue:!1,token:null,tokenId:null,name:"",redirectPath:""},Qn=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fn,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_ACCOUNT":return Object(Ln.a)(Object(Ln.a)({},e),{},{email:t.email,name:t.name,token:t.token,tokenId:t.tokenId});case"SET_EMAIL":return Object(Ln.a)(Object(Ln.a)({},e),{},{email:t.email,emailError:null,continue:!0});case"CUSTOMER_LOGIN":var n=Hn(t.tokens);return Object(Ln.a)(Object(Ln.a)({},e),{},{name:t.name,token:n.token,tokenId:n._id,emailError:null,passwordError:null});case"CUSTOMER_LOGOUT":return Object(Ln.a)(Object(Ln.a)({},e),{},{name:"",token:null,tokenId:null,emailError:null,passwordError:null,continue:!1,redirectPath:"/"});case"SET_EMAIL_ERROR":return Object(Ln.a)(Object(Ln.a)({},e),{},{emailError:t.error,continue:!1});case"SET_PASSWORD_ERROR":return Object(Ln.a)(Object(Ln.a)({},e),{},{passwordError:t.error,continue:!0});default:return e}},Vn=n(35),Gn=n(136),Yn=n(107),Jn=n(137),Kn=n.n(Jn),Xn=n(138),$n={key:"root",storage:Kn.a,whitelist:["customerReducer","basketReducer"]},Zn=Object(Vn.c)({productReducer:Wn,customerReducer:Qn,basketReducer:Un}),ea=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Vn.d,ta=Object(Vn.e)(Object(Yn.a)($n,Zn),ea(Object(Vn.a)(Gn.a))),na=Object(Yn.b)(ta),aa=m.a.createElement(y.a,{store:ta},m.a.createElement(f.a,null,m.a.createElement(Xn.a,{persistor:na},m.a.createElement(m.a.StrictMode,null,m.a.createElement(zn,null)))));b.a.render(aa,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[143,1,2]]]);
//# sourceMappingURL=main.952d143a.chunk.js.map