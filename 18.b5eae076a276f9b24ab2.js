(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{Tkn4:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),t=u("mrSG"),o=u("tct4"),r=u("67Y/"),i=u("CB3U"),c=u("ZZ/e"),b=function(){function l(l,n,u,e){var o=this;this.afFirestore=l,this.activatedRoute=n,this.afAuth=u,this.alertController=e,this.isAdmin=!1,this.seller=null,this.sellerId=null,this.allCustomers=[],this.customers=[],this.isAdmin="true"===localStorage.getItem("is_admin"),this.afAuth.auth.onAuthStateChanged(function(l){l&&(o.activatedRoute.queryParams.subscribe(function(l){l.seller&&(o.seller=l.seller)}),o.activatedRoute.params.subscribe(function(n){n.sellerId&&(o.sellerId=n.sellerId),o.customersCollection=o.afFirestore.collection("users").doc(n.sellerId?n.sellerId:l.uid).collection("customers",function(l){return l.orderBy("createdAt","desc")}),o.customersCollection.snapshotChanges().pipe(Object(r.a)(function(l){return l.map(function(l){var n=l.payload.doc.data();return t.__assign({id:l.payload.doc.id},n)})})).subscribe(function(l){o.allCustomers=l,o.customers=l.slice()})}))})}return l.prototype.ngOnInit=function(){},l.prototype.onSearchChange=function(l){var n=l.detail.value.toLowerCase();this.customers=this.allCustomers.filter(function(l){return l.name.toLowerCase().includes(n)||l.email.toLowerCase().includes(n)||l.legal_representative.toLowerCase().includes(n)||l.cpf.replace(/\D/g,"").startsWith(n.replace(/\D/g,""))})},l.prototype.deleteCustomer=function(l){return t.__awaiter(this,void 0,void 0,function(){var n=this;return t.__generator(this,function(u){switch(u.label){case 0:return[4,this.alertController.create({header:"Apagar cliente",message:"Deseja mesmo apagar "+l.name+"?",buttons:[{text:"Cancelar",role:"cancel",cssClass:"secondary"},{text:"OK",handler:function(){return t.__awaiter(n,void 0,void 0,function(){return t.__generator(this,function(n){switch(n.label){case 0:return this.customersCollection.doc(l.id).delete(),[4,this.alertController.create({header:"Apagar cliente",message:"Cliente apagado com sucesso.",buttons:["OK"]})];case 1:return[4,n.sent().present()];case 2:return n.sent(),[2]}})})}}]})];case 1:return[4,u.sent().present()];case 2:return u.sent(),[2]}})})},l.prototype.generateLetter=function(l){generateLetter(t.__assign({},l))},l}(),a=function(){return function(){}}(),s=u("pMnS"),p=u("oBZk"),d=u("ZYCi"),m=u("Ip0R"),h=u("gIcY"),f=e.nb({encapsulation:0,styles:[[""]],data:{}});function g(l){return e.Fb(0,[(l()(),e.pb(0,0,null,null,8,"ion-buttons",[["slot","primary"]],null,null,null,p.C,p.c)),e.ob(1,49152,null,0,c.k,[e.h,e.k],null,null),(l()(),e.pb(2,0,null,0,6,"ion-button",[["color","secondary"],["fill","solid"],["routerDirection","root"],["routerLink","/panel/customers/create"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.yb(l,4).onClick()&&t),"click"===n&&(t=!1!==e.yb(l,5).onClick(u)&&t),t},p.B,p.b)),e.ob(3,49152,null,0,c.j,[e.h,e.k],{color:[0,"color"],fill:[1,"fill"],routerDirection:[2,"routerDirection"]},null),e.ob(4,16384,null,0,d.n,[d.m,d.a,[8,null],e.D,e.k],{routerLink:[0,"routerLink"]},null),e.ob(5,737280,null,0,c.Hb,[m.g,c.Fb,e.k,d.m,[2,d.n]],{routerDirection:[0,"routerDirection"]},null),(l()(),e.Eb(-1,0,[" Adicionar cliente "])),(l()(),e.pb(7,0,null,0,1,"ion-icon",[["name","add"],["slot","end"]],null,null,null,p.M,p.m)),e.ob(8,49152,null,0,c.B,[e.h,e.k],{name:[0,"name"]},null)],function(l,n){l(n,3,0,"secondary","solid","root"),l(n,4,0,"/panel/customers/create"),l(n,5,0,"root"),l(n,8,0,"add")},null)}function k(l){return e.Fb(0,[(l()(),e.pb(0,0,null,null,1,"div",[["style","padding: 16px;"]],null,null,null,null,null)),(l()(),e.Eb(-1,null,[" N\xe3o h\xe1 clientes cadastrados. "]))],null,null)}function E(l){return e.Fb(0,[(l()(),e.pb(0,0,null,null,12,"div",[],null,null,null,null,null)),(l()(),e.pb(1,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Eb(-1,null,["Representante legal:"])),(l()(),e.Eb(3,null,[" ",""])),(l()(),e.pb(4,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.pb(5,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Eb(-1,null,["CPF do representante:"])),(l()(),e.Eb(7,null,[" ",""])),(l()(),e.pb(8,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.pb(9,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Eb(-1,null,["RG do representante:"])),(l()(),e.Eb(11,null,[" ",""])),(l()(),e.pb(12,0,null,null,0,"br",[],null,null,null,null,null))],null,function(l,n){l(n,3,0,n.parent.context.$implicit.legal_representative),l(n,7,0,n.parent.context.$implicit.representative_cpf),l(n,11,0,n.parent.context.$implicit.representative_rg)})}function C(l){return e.Fb(0,[(l()(),e.pb(0,0,null,null,73,"ion-col",[["size","12"],["size-md","6"]],null,null,null,p.I,p.i)),e.ob(1,49152,null,0,c.s,[e.h,e.k],{size:[0,"size"]},null),(l()(),e.pb(2,0,null,0,71,"ion-card",[],null,null,null,p.G,p.d)),e.ob(3,49152,null,0,c.l,[e.h,e.k],null,null),(l()(),e.pb(4,0,null,0,4,"ion-card-header",[],null,null,null,p.E,p.f)),e.ob(5,49152,null,0,c.n,[e.h,e.k],null,null),(l()(),e.pb(6,0,null,0,2,"ion-card-title",[],null,null,null,p.F,p.g)),e.ob(7,49152,null,0,c.p,[e.h,e.k],null,null),(l()(),e.Eb(8,0,["",""])),(l()(),e.pb(9,0,null,0,64,"ion-card-content",[],null,null,null,p.D,p.e)),e.ob(10,49152,null,0,c.m,[e.h,e.k],null,null),(l()(),e.pb(11,0,null,0,1,"b",[],null,null,null,null,null)),(l()(),e.Eb(-1,null,["Telefone:"])),(l()(),e.Eb(13,0,[" ",""])),(l()(),e.pb(14,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.pb(15,0,null,0,1,"b",[],null,null,null,null,null)),(l()(),e.Eb(-1,null,["Celular:"])),(l()(),e.Eb(17,0,[" ",""])),(l()(),e.pb(18,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.pb(19,0,null,0,1,"b",[],null,null,null,null,null)),(l()(),e.Eb(-1,null,["E-mail:"])),(l()(),e.Eb(21,0,[" ",""])),(l()(),e.pb(22,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.pb(23,0,null,0,1,"b",[],null,null,null,null,null)),(l()(),e.Eb(-1,null,["Data de nascimento:"])),(l()(),e.Eb(25,0,[" ",""])),(l()(),e.pb(26,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.pb(27,0,null,0,1,"b",[],null,null,null,null,null)),(l()(),e.Eb(-1,null,["CPF:"])),(l()(),e.Eb(29,0,[" ",""])),(l()(),e.pb(30,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.pb(31,0,null,0,1,"b",[],null,null,null,null,null)),(l()(),e.Eb(-1,null,["RG:"])),(l()(),e.Eb(33,0,[" ",""])),(l()(),e.pb(34,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.pb(35,0,null,0,1,"b",[],null,null,null,null,null)),(l()(),e.Eb(-1,null,["Estado civil:"])),(l()(),e.Eb(37,0,[" ",""])),(l()(),e.pb(38,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.pb(39,0,null,0,1,"b",[],null,null,null,null,null)),(l()(),e.Eb(-1,null,["Profiss\xe3o:"])),(l()(),e.Eb(41,0,[" ",""])),(l()(),e.pb(42,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.pb(43,0,null,0,1,"b",[],null,null,null,null,null)),(l()(),e.Eb(-1,null,["CEP:"])),(l()(),e.Eb(45,0,[" ",""])),(l()(),e.pb(46,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.pb(47,0,null,0,1,"b",[],null,null,null,null,null)),(l()(),e.Eb(-1,null,["Endere\xe7o:"])),(l()(),e.Eb(49,0,[" ",""])),(l()(),e.pb(50,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.pb(51,0,null,0,1,"b",[],null,null,null,null,null)),(l()(),e.Eb(-1,null,["Bairro:"])),(l()(),e.Eb(53,0,[" ",""])),(l()(),e.pb(54,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.pb(55,0,null,0,1,"b",[],null,null,null,null,null)),(l()(),e.Eb(-1,null,["Cidade:"])),(l()(),e.Eb(57,0,[" ",""])),(l()(),e.pb(58,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.gb(16777216,null,0,1,null,E)),e.ob(60,16384,null,0,m.i,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.pb(61,0,null,0,12,"div",[["style","display: flex; justify-content: space-between; padding-top: 10px;"]],null,null,null,null,null)),(l()(),e.pb(62,0,null,null,2,"ion-button",[["color","primary"],["size","small"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.generateLetter(l.context.$implicit)&&e),e},p.B,p.b)),e.ob(63,49152,null,0,c.j,[e.h,e.k],{color:[0,"color"],size:[1,"size"]},null),(l()(),e.Eb(-1,0,["Baixar procura\xe7\xe3o"])),(l()(),e.pb(65,0,null,null,8,"div",[],null,null,null,null,null)),(l()(),e.pb(66,0,null,null,4,"ion-button",[["color","primary"],["routerDirection","root"],["size","small"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.yb(l,68).onClick()&&t),"click"===n&&(t=!1!==e.yb(l,69).onClick(u)&&t),t},p.B,p.b)),e.ob(67,49152,null,0,c.j,[e.h,e.k],{color:[0,"color"],routerDirection:[1,"routerDirection"],size:[2,"size"]},null),e.ob(68,16384,null,0,d.n,[d.m,d.a,[8,null],e.D,e.k],{routerLink:[0,"routerLink"]},null),e.ob(69,737280,null,0,c.Hb,[m.g,c.Fb,e.k,d.m,[2,d.n]],{routerDirection:[0,"routerDirection"]},null),(l()(),e.Eb(-1,0,[" Editar"])),(l()(),e.pb(71,0,null,null,2,"ion-button",[["color","danger"],["size","small"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.deleteCustomer(l.context.$implicit)&&e),e},p.B,p.b)),e.ob(72,49152,null,0,c.j,[e.h,e.k],{color:[0,"color"],size:[1,"size"]},null),(l()(),e.Eb(-1,0,["Apagar"]))],function(l,n){var u=n.component;l(n,1,0,"12"),l(n,60,0,n.context.$implicit.has_legal_representative),l(n,63,0,"primary","small"),l(n,67,0,"primary","root","small"),l(n,68,0,u.sellerId?"/panel/sellers/"+u.sellerId+"/customers/"+n.context.$implicit.id+"/edit":"/panel/customers/"+n.context.$implicit.id+"/edit"),l(n,69,0,"root"),l(n,72,0,"danger","small")},function(l,n){l(n,8,0,n.context.$implicit.name),l(n,13,0,n.context.$implicit.tel),l(n,17,0,n.context.$implicit.cel),l(n,21,0,n.context.$implicit.email),l(n,25,0,n.context.$implicit.birthday),l(n,29,0,n.context.$implicit.cpf),l(n,33,0,n.context.$implicit.rg),l(n,37,0,n.context.$implicit.marital_status),l(n,41,0,n.context.$implicit.job),l(n,45,0,n.context.$implicit.cep),l(n,49,0,n.context.$implicit.address),l(n,53,0,n.context.$implicit.neighborhood),l(n,57,0,n.context.$implicit.city)})}function v(l){return e.Fb(0,[(l()(),e.pb(0,0,null,null,12,"ion-header",[],null,null,null,p.L,p.l)),e.ob(1,49152,null,0,c.A,[e.h,e.k],null,null),(l()(),e.pb(2,0,null,0,6,"ion-toolbar",[["color","secondary"]],null,null,null,p.Z,p.z)),e.ob(3,49152,null,0,c.Ab,[e.h,e.k],{color:[0,"color"]},null),(l()(),e.pb(4,0,null,0,2,"ion-title",[],null,null,null,p.Y,p.y)),e.ob(5,49152,null,0,c.yb,[e.h,e.k],null,null),(l()(),e.Eb(6,0,["Clientes",""])),(l()(),e.gb(16777216,null,0,1,null,g)),e.ob(8,16384,null,0,m.i,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.pb(9,0,null,0,3,"ion-searchbar",[["placeholder","Busca de clientes"],["style","background-color: #0cd1e8;"]],null,[[null,"ionChange"],[null,"ionBlur"]],function(l,n,u){var t=!0,o=l.component;return"ionBlur"===n&&(t=!1!==e.yb(l,12)._handleBlurEvent()&&t),"ionChange"===n&&(t=!1!==e.yb(l,12)._handleInputEvent(u.target.value)&&t),"ionChange"===n&&(t=!1!==o.onSearchChange(u)&&t),t},p.U,p.u)),e.Bb(5120,null,h.k,function(l){return[l]},[c.Jb]),e.ob(11,49152,null,0,c.ib,[e.h,e.k],{placeholder:[0,"placeholder"]},null),e.ob(12,16384,null,0,c.Jb,[e.k],null,null),(l()(),e.pb(13,0,null,null,9,"ion-content",[],null,null,null,p.J,p.j)),e.ob(14,49152,null,0,c.t,[e.h,e.k],null,null),(l()(),e.gb(16777216,null,0,1,null,k)),e.ob(16,16384,null,0,m.i,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.pb(17,0,null,0,5,"ion-grid",[],null,null,null,p.K,p.k)),e.ob(18,49152,null,0,c.z,[e.h,e.k],null,null),(l()(),e.pb(19,0,null,0,3,"ion-row",[],null,null,null,p.T,p.t)),e.ob(20,49152,null,0,c.hb,[e.h,e.k],null,null),(l()(),e.gb(16777216,null,0,1,null,C)),e.ob(22,278528,null,0,m.h,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var u=n.component;l(n,3,0,"secondary"),l(n,8,0,null==u.seller),l(n,11,0,"Busca de clientes"),l(n,16,0,0==u.customers.length),l(n,22,0,u.customers)},function(l,n){var u=n.component;l(n,6,0,u.seller?" de "+u.seller:"")})}function y(l){return e.Fb(0,[(l()(),e.pb(0,0,null,null,1,"app-index",[],null,null,null,v,f)),e.ob(1,114688,null,0,b,[o.a,d.a,i.a,c.a],null,null)],function(l,n){l(n,1,0)},null)}var x=e.lb("app-index",b,y,{},{},[]);u.d(n,"IndexPageModuleNgFactory",function(){return w});var w=e.mb(a,[],function(l){return e.vb([e.wb(512,e.j,e.bb,[[8,[s.a,x]],[3,e.j],e.x]),e.wb(4608,m.k,m.j,[e.u,[2,m.r]]),e.wb(4608,h.u,h.u,[]),e.wb(4608,c.b,c.b,[e.z,e.g]),e.wb(4608,c.Eb,c.Eb,[c.b,e.j,e.q,m.c]),e.wb(4608,c.Gb,c.Gb,[c.b,e.j,e.q,m.c]),e.wb(1073742336,m.b,m.b,[]),e.wb(1073742336,h.s,h.s,[]),e.wb(1073742336,h.g,h.g,[]),e.wb(1073742336,c.Cb,c.Cb,[]),e.wb(1073742336,d.o,d.o,[[2,d.u],[2,d.m]]),e.wb(1073742336,a,a,[]),e.wb(1024,d.k,function(){return[[{path:"",component:b}]]},[])])})}}]);