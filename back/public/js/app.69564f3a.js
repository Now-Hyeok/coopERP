(function(){"use strict";var e={6847:function(e,a,t){var n=t(9963),r=t(6252);function o(e,a,t,n,o,s){const i=(0,r.up)("router-view");return(0,r.wg)(),(0,r.j4)(i)}var s={name:"App",components:{},data(){return{}}},i=t(3744);const l=(0,i.Z)(s,[["render",o]]);var c=l,d=(t(8877),t(2201));const m={class:"text-center"},u={class:"form-signin w-100 m-auto"},p=(0,r.uE)('<h2 class="mb-5 fw-normal" data-v-53bdbc46>Please sign in</h2><div class="form-floating" data-v-53bdbc46><input type="email" class="form-control" id="floatingInput" placeholder="username" data-v-53bdbc46><label for="floatingInput" data-v-53bdbc46>User name</label></div><div class="form-floating" data-v-53bdbc46><input type="password" class="form-control" id="floatingPassword" placeholder="Password" data-v-53bdbc46><label for="floatingPassword" data-v-53bdbc46>Password</label></div><div class="checkbox mb-3" data-v-53bdbc46><label data-v-53bdbc46><input type="checkbox" value="remember-me" data-v-53bdbc46> Remember me </label></div><button class="w-100 btn btn-lg btn-primary" type="submit" data-v-53bdbc46>Sign in</button>',5),v={class:"mt-3 mb-3 text-muted"},b=(0,r.Uk)("If you don't have an account, please proceed with the "),g=(0,r.Uk)(" Sign up"),f=(0,r.Uk)(" first!"),h={class:"mt-3 mb-3 text-muted"},_=(0,r.Uk)("You can preview the "),y=(0,r.Uk)("InventoryPage");function w(e,a,t,n,o,s){const i=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("body",m,[(0,r._)("main",u,[(0,r._)("form",null,[p,(0,r._)("p",v,[b,(0,r.Wm)(i,{to:"/signup"},{default:(0,r.w5)((()=>[g])),_:1}),f]),(0,r._)("div",null,[(0,r._)("p",h,[_,(0,r.Wm)(i,{to:"/home"},{default:(0,r.w5)((()=>[y])),_:1})])])])])])}var k={name:"loginPage",data(){return{}},methods:{login(){this.$router.replace("/")}}};const M=(0,i.Z)(k,[["render",w],["__scopeId","data-v-53bdbc46"]]);var x=M;const P=e=>((0,r.dD)("data-v-412a84e6"),e=e(),(0,r.Cn)(),e),D={class:"text-center"},S={class:"container"},C=P((()=>(0,r._)("div",{class:"py-4 text-center"},[(0,r._)("h2",null,"Sign up form")],-1))),R=P((()=>(0,r._)("h4",{class:"mb-4"},"User Information",-1))),U={class:"needs-validation",novalidate:""},O=(0,r.uE)('<div class="row g-3" data-v-412a84e6><div class="col-sm-6" data-v-412a84e6><label for="firstName" class="form-label" data-v-412a84e6>First name</label><input type="text" class="form-control" id="firstName" placeholder="" value="" required data-v-412a84e6><div class="invalid-feedback" data-v-412a84e6> Valid first name is required. </div></div><div class="col-sm-6" data-v-412a84e6><label for="lastName" class="form-label" data-v-412a84e6>Last name</label><input type="text" class="form-control" id="lastName" placeholder="" value="" required data-v-412a84e6><div class="invalid-feedback" data-v-412a84e6> Valid last name is required. </div></div><div data-v-412a84e6><label for="user name" class="form-label" data-v-412a84e6>Username</label><div class="input-group has-validation" data-v-412a84e6><input type="text" class="form-control" id="username" placeholder="Username" required data-v-412a84e6><div class="invalid-feedback" data-v-412a84e6> Your username is required. </div></div></div><div data-v-412a84e6><label for="password" class="form-label" data-v-412a84e6>Password</label><div class="input-group has-validation" data-v-412a84e6><input type="text" class="form-control" id="password" placeholder="Password" required data-v-412a84e6><div class="invalid-feedback" data-v-412a84e6> Your password is required. </div></div></div><div data-v-412a84e6><label for="cooperative" class="form-label" data-v-412a84e6>Cooperative </label><input type="cooperative" class="form-control" id="cooperative" placeholder="cooperative name" data-v-412a84e6><div class="invalid-feedback" data-v-412a84e6> Please enter a your cooperative. </div></div><div class="col-md-5" data-v-412a84e6><label for="country" class="form-label" data-v-412a84e6>Country</label><select class="form-select" id="country" required data-v-412a84e6><option value="" data-v-412a84e6>Choose...</option><option data-v-412a84e6>Republic of Korea</option></select><div class="invalid-feedback" data-v-412a84e6> Please select a valid country. </div></div><div class="col-md-4" data-v-412a84e6><label for="state" class="form-label" data-v-412a84e6>State</label><select class="form-select" id="state" required data-v-412a84e6><option value="" data-v-412a84e6>Choose...</option><option data-v-412a84e6>Daejeon</option></select><div class="invalid-feedback" data-v-412a84e6> Please provide a valid state. </div></div><div class="col-md-3 mb-4" data-v-412a84e6><label for="zip" class="form-label" data-v-412a84e6>Zip</label><input type="text" class="form-control" id="zip" placeholder="" required data-v-412a84e6><div class="invalid-feedback" data-v-412a84e6> Zip code required. </div></div></div><div class="mb-4" data-v-412a84e6><label for="address" class="form-label" data-v-412a84e6>Address</label><input type="text" class="form-control" id="address" placeholder="1234 Main St" required data-v-412a84e6><div class="invalid-feedback" data-v-412a84e6> Please enter your address. </div></div><button class="w-100 btn btn-primary btn-lg" type="submit" data-v-412a84e6>Sign Up!</button>',3),Z={class:"mt-3 mb-3 text-muted"},q=(0,r.Uk)("Return to "),N=(0,r.Uk)("Login");function I(e,a,t,n,o,s){const i=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("body",D,[(0,r._)("div",S,[C,(0,r._)("div",null,[R,(0,r._)("form",U,[O,(0,r._)("p",Z,[q,(0,r.Wm)(i,{to:"/"},{default:(0,r.w5)((()=>[N])),_:1})])])])])])}var L={name:"signUp",data(){return{}},methods:{}};const W=(0,i.Z)(L,[["render",I],["__scopeId","data-v-412a84e6"]]);var z=W;const j={class:"top"},T=(0,r._)("div",{class:"maincontent"},[(0,r._)("h4",null,"hello~"),(0,r._)("p",null,"welecome")],-1);function Y(e,a,t,n,o,s){const i=(0,r.up)("TopNavbar");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",j,[(0,r.Wm)(i)]),T],64)}const H={class:"wrapper hw-100"},V={class:"categoryhome"},F={class:"hw-100"},$=(0,r.Uk)("ERP System"),G={class:"topnavb"},A={class:"menu hw-100"},E={class:"menu-item"},K=(0,r.Uk)("COOP management"),B={class:"menu-item"},X=(0,r.Uk)("Inventory Management"),J={class:"menu-item"},Q=(0,r.Uk)("Transaction management"),ee={class:"menu-item"},ae=(0,r.Uk)("Statistics"),te={class:"menu-item"},ne=(0,r.Uk)("Communication"),re=(0,r._)("div",{class:"line"},null,-1);function oe(e,a,t,n,o,s){const i=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("nav",H,[(0,r._)("ul",V,[(0,r._)("li",F,[(0,r.Wm)(i,{class:"cate-home-link hw-100",to:"/home"},{default:(0,r.w5)((()=>[$])),_:1})])]),(0,r._)("div",G,[(0,r._)("ul",A,[(0,r._)("li",E,[(0,r.Wm)(i,{onClick:a[0]||(a[0]=a=>e.userSelect("coop-management")),to:"/coop-management",class:"menu-link"},{default:(0,r.w5)((()=>[K])),_:1})]),(0,r._)("li",B,[(0,r.Wm)(i,{onClick:a[1]||(a[1]=a=>e.userSelect("inventory-management")),to:"/inventory-management",class:"menu-link"},{default:(0,r.w5)((()=>[X])),_:1})]),(0,r._)("li",J,[(0,r.Wm)(i,{onClick:a[2]||(a[2]=a=>e.userSelect("transaction-management")),to:"/transaction-management",class:"menu-link"},{default:(0,r.w5)((()=>[Q])),_:1})]),(0,r._)("li",ee,[(0,r.Wm)(i,{onClick:a[3]||(a[3]=a=>e.userSelect("statistics")),to:"/statistics",class:"menu-link"},{default:(0,r.w5)((()=>[ae])),_:1})]),(0,r._)("li",te,[(0,r.Wm)(i,{onClick:a[4]||(a[4]=a=>e.userSelect("communication")),to:"/communication",class:"menu-link"},{default:(0,r.w5)((()=>[ne])),_:1})])])])]),re],64)}var se=t(3907),ie={name:"TopNavbar",data(){return{select:""}},methods:{...(0,se.OI)(["userSelect"])}};const le=(0,i.Z)(ie,[["render",oe]]);var ce=le,de={name:"mainPage",components:{TopNavbar:ce},data(){return{}}};const me=(0,i.Z)(de,[["render",Y]]);var ue=me;const pe={class:"top"},ve={class:"main"},be={class:"sidebar"},ge={class:"mainPage"};function fe(e,a,t,n,o,s){const i=(0,r.up)("TopNavbar"),l=(0,r.up)("side-navbar"),c=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",pe,[(0,r.Wm)(i)]),(0,r._)("div",ve,[(0,r._)("div",be,[(0,r.Wm)(l)]),(0,r._)("div",ge,[(0,r.Wm)(c)])])],64)}t(7658);var he=t(3577);const _e={class:"sidemenu-list"},ye=["onClick"];function we(e,a,t,n,o,s){return(0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.categoryData[e.category],(a=>((0,r.wg)(),(0,r.iD)("ul",{class:"sidemenu",key:a},[(0,r._)("li",_e,[(0,r._)("div",{class:"sidemenu-item",onClick:t=>e.$router.push(`/${e.category}/${a.replace(/\s/gi,"-").toLowerCase()}`)},(0,he.zw)(a),9,ye)])])))),128)}var ke={"coop-management":["Member","COOP Management","menu1-3"],"inventory-management":["Product Registration","Inventory Status","Inventory Registration"],"transaction-management":["Order","menu3-2","menu3-3"],statistics:["menu4-1","menu4-2","menu4-3"],communication:["menu1","menu2","menu3"]},Me={name:"SideNavbar",computed:{...(0,se.rn)(["category"])},data(){return{categoryData:ke}},methods:{}};const xe=(0,i.Z)(Me,[["render",we]]);var Pe=xe,De={components:{SideNavbar:Pe,TopNavbar:ce}};const Se=(0,i.Z)(De,[["render",fe]]);var Ce=Se;function Re(e,a,t,n,o,s){return(0,r.wg)(),(0,r.iD)("p",null,"coop main")}var Ue={name:"coopMain"};const Oe=(0,i.Z)(Ue,[["render",Re]]);var Ze=Oe;function qe(e,a,t,n,o,s){return(0,r.wg)(),(0,r.iD)("p",null," coop management page ")}var Ne={name:"coopManagement",components:{},data(){return{}}};const Ie=(0,i.Z)(Ne,[["render",qe]]);var Le=Ie;const We={class:"register"},ze={class:"table caption-top",draggable:".memberList"},je=(0,r._)("caption",null,"List of Members",-1),Te=(0,r._)("thead",null,[(0,r._)("tr",null,[(0,r._)("th",{scope:"col"},"#"),(0,r._)("th",{scope:"col"},"Name"),(0,r._)("th",{scope:"col"},"Address"),(0,r._)("th",{scope:"col"},"phone"),(0,r._)("th",{scope:"col"},"Delete")])],-1),Ye=["onClick"];function He(e,a,t,n,o,s){const i=(0,r.up)("MemebrRegister");return(0,r.wg)(),(0,r.iD)(r.HY,null,[1==e.registerModal?((0,r.wg)(),(0,r.j4)(i,{key:0,onMemberRegist:a[0]||(a[0]=a=>{e.closeRegisterModal(),s.getMemberList()})})):(0,r.kq)("",!0),(0,r._)("div",We,[(0,r._)("table",ze,[je,Te,(0,r._)("tbody",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.memberList,((e,a)=>((0,r.wg)(),(0,r.iD)("tr",{class:"memberList",scope:"row",key:e},[(0,r._)("th",null,(0,he.zw)(a+1),1),(0,r._)("td",null,(0,he.zw)(e.Member_name),1),(0,r._)("td",null,(0,he.zw)(e.Member_address),1),(0,r._)("td",null,(0,he.zw)(e.Member_phone),1),(0,r._)("td",null,[(0,r._)("button",{type:"button",class:"btn btn-light",onClick:a=>s.deleteMember(e.Member_id)},"X",8,Ye)])])))),128))])]),(0,r._)("div",null,[(0,r._)("button",{type:"button",class:"btn btn-primary",onClick:a[1]||(a[1]=a=>e.openRegisterModal())}," New Member ")])])],64)}const Ve={class:"modal-bg"},Fe={class:"registerModal"},$e={class:"modalContent"},Ge=(0,r._)("div",{class:"modalHeader"},[(0,r._)("h1",null,"New Member Register")],-1),Ae={class:"modalBody"},Ee={class:"input-group mb-4"},Ke=(0,r._)("label",{class:"input-group-text",id:"inputGroup-sizing-default"},"Name",-1),Be={class:"input-group mb-4"},Xe=(0,r._)("label",{class:"input-group-text",id:"inputGroup-sizing-default"},"ID",-1),Je=(0,r._)("label",{class:"input-group-text",id:"inputGroup-sizing-default",type:"password"},"Password",-1),Qe={class:"input-group mb-4"},ea=(0,r._)("label",{class:"input-group-text",id:"inputGroup-sizing-default"},"Phone Number",-1),aa={class:"input-group mb-4"},ta=(0,r._)("label",{class:"input-group-text",id:"inputGroup-sizing-default"},"Address",-1),na={class:"modalFooter"};function ra(e,a,t,o,s,i){return(0,r.wg)(),(0,r.iD)("div",Ve,[(0,r._)("div",Fe,[(0,r._)("div",$e,[Ge,(0,r._)("form",{id:"registerForm",onSubmit:a[7]||(a[7]=(0,n.iM)((()=>{}),["prevent"]))},[(0,r._)("div",Ae,[(0,r._)("div",Ee,[Ke,(0,r.wy)((0,r._)("input",{type:"text",class:"form-control",name:"name",id:"name","onUpdate:modelValue":a[0]||(a[0]=e=>s.name=e)},null,512),[[n.nr,s.name]])]),(0,r._)("div",Be,[Xe,(0,r.wy)((0,r._)("input",{type:"text",class:"form-control",name:"id",id:"id","onUpdate:modelValue":a[1]||(a[1]=e=>s.id=e)},null,512),[[n.nr,s.id]]),Je,(0,r.wy)((0,r._)("input",{type:"password",class:"form-control",name:"password",id:"password","onUpdate:modelValue":a[2]||(a[2]=e=>s.password=e)},null,512),[[n.nr,s.password]])]),(0,r._)("div",Qe,[ea,(0,r.wy)((0,r._)("input",{type:"text",class:"form-control",name:"phone",id:"phone","onUpdate:modelValue":a[3]||(a[3]=e=>s.phone=e)},null,512),[[n.nr,s.phone]])]),(0,r._)("div",aa,[ta,(0,r.wy)((0,r._)("input",{type:"text",class:"form-control",name:"address",id:"address","onUpdate:modelValue":a[4]||(a[4]=e=>s.address=e)},null,512),[[n.nr,s.address]])])]),(0,r._)("div",na,[(0,r._)("button",{type:"submit",class:"btn btn-primary",onClick:a[5]||(a[5]=e=>i.checkForm())},"Register"),(0,r._)("button",{class:"btn btn-secondary",onClick:a[6]||(a[6]=a=>e.closeRegisterModal())},"Close")])],32)])])])}var oa=t(9669),sa=t.n(oa),ia={name:"memberRegister",computed:{...(0,se.rn)(["registerModal"])},data(){return{errors:[],name:null,id:null,address:null,phone:null,password:null}},methods:{...(0,se.OI)(["closeRegisterModal"]),regist(){sa().post("/api/member/registration",{name:this.name,id:this.id,phone:this.phone,password:this.password,address:this.address}).then((e=>{console.log(e)})).catch((e=>{console.error(e)}))},checkForm(){if(this.name&&this.id&&this.address&&this.phone&&this.password)return this.regist(),this.$emit("memberRegist"),!0;this.errors=[],this.name||this.errors.push("Name required"),this.id||this.errors.push("id require"),this.address||this.errors.push("address require"),this.password||this.errors.push("password require"),alert("can not submit")}}};const la=(0,i.Z)(ia,[["render",ra]]);var ca=la,da={name:"coopRegister",computed:{...(0,se.rn)(["registerModal"])},created(){this.getMemberList()},methods:{...(0,se.OI)(["closeRegisterModal","openRegisterModal"]),getMemberList(){sa().get("/api/member/data").then((e=>{this.memberList=e.data})).catch((e=>{console.error(e)}))},deleteMember(e){sa()["delete"](`/api/member/delete/${e}`).then((e=>{console.log(e),this.getMemberList()})).catch((e=>{console.error(e)}))}},data(){return{memberList:[]}},components:{MemebrRegister:ca}};const ma=(0,i.Z)(da,[["render",He]]);var ua=ma;function pa(e,a,t,n,o,s){return(0,r.wg)(),(0,r.iD)("p",null,"inventory main")}var va={name:"inventoryMain"};const ba=(0,i.Z)(va,[["render",pa]]);var ga=ba;function fa(e,a,t,n,o,s){return(0,r.wg)(),(0,r.iD)("p",null,"inventory status page")}var ha={name:"inventoryStatus"};const _a=(0,i.Z)(ha,[["render",fa]]);var ya=_a;function wa(e,a,t,n,o,s){return(0,r.wg)(),(0,r.iD)("p",null,"Inventory Register Page")}var ka={name:"inventoryRegister"};const Ma=(0,i.Z)(ka,[["render",wa]]);var xa=Ma;function Pa(e,a,t,n,o,s){return(0,r.wg)(),(0,r.iD)("p",null,"transaction main")}var Da={};const Sa=(0,i.Z)(Da,[["render",Pa]]);var Ca=Sa;function Ra(e,a,t,n,o,s){return(0,r.wg)(),(0,r.iD)("p",null," order page ")}var Ua={name:"transactionOrder"};const Oa=(0,i.Z)(Ua,[["render",Ra]]);var Za=Oa;function qa(e,a,t,n,o,s){return(0,r.wg)(),(0,r.iD)("p",null,"statistics main")}var Na={};const Ia=(0,i.Z)(Na,[["render",qa]]);var La=Ia;function Wa(e,a,t,n,o,s){return(0,r.wg)(),(0,r.iD)("p",null,"communication main")}var za={};const ja=(0,i.Z)(za,[["render",Wa]]);var Ta=ja;const Ya=[{path:"/login",component:x,name:"login"},{path:"/signup",component:z,name:"singup"},{path:"/home",component:ue,name:"home"},{path:"/coop-management",component:Ce,name:"coop-main",redirect:"/coop-management/main",children:[{path:"main",name:"coopmain",component:Ze},{path:"coop-management",name:"coopManagement",component:Le},{path:"member",name:"register",component:ua}]},{path:"/inventory-management",component:Ce,name:"category2",redirect:"/inventory-management/main",children:[{path:"main",name:"inventoryMain",component:ga},{path:"inventory-status",name:"inventoryStatus",component:ya},{path:"product-registration",name:"inventoryRegister",component:xa}]},{path:"/transaction-management",component:Ce,name:"category3",redirect:"/transaction-management/main",children:[{path:"main",name:"transactionMain",component:Ca},{path:"order",name:"transaction order",component:Za}]},{path:"/statistics",component:Ce,name:"category4",redirect:"/statistics/main",children:[{path:"main",name:"statisticsMain",component:La}]},{path:"/communication",component:Ce,name:"communication",redirect:"/communication/main",children:[{path:"main",name:"communicationMain",component:Ta}]},{path:"/",redirect:"/login"}],Ha=(0,d.p7)({history:(0,d.PO)(),routes:Ya});var Va=Ha;const Fa=(0,se.MT)({state(){return{category:"",registerModal:!1}},mutations:{userSelect(e,a){e.category=a},openRegisterModal(e){e.registerModal=!0},closeRegisterModal(e){e.registerModal=!1}},actions:{}});var $a=Fa;(0,n.ri)(c).use(Va).use($a).mount("#app")}},a={};function t(n){var r=a[n];if(void 0!==r)return r.exports;var o=a[n]={exports:{}};return e[n](o,o.exports,t),o.exports}t.m=e,function(){var e=[];t.O=function(a,n,r,o){if(!n){var s=1/0;for(d=0;d<e.length;d++){n=e[d][0],r=e[d][1],o=e[d][2];for(var i=!0,l=0;l<n.length;l++)(!1&o||s>=o)&&Object.keys(t.O).every((function(e){return t.O[e](n[l])}))?n.splice(l--,1):(i=!1,o<s&&(s=o));if(i){e.splice(d--,1);var c=r();void 0!==c&&(a=c)}}return a}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[n,r,o]}}(),function(){t.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(a,{a:a}),a}}(),function(){t.d=function(e,a){for(var n in a)t.o(a,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:a[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};t.O.j=function(a){return 0===e[a]};var a=function(a,n){var r,o,s=n[0],i=n[1],l=n[2],c=0;if(s.some((function(a){return 0!==e[a]}))){for(r in i)t.o(i,r)&&(t.m[r]=i[r]);if(l)var d=l(t)}for(a&&a(n);c<s.length;c++)o=s[c],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(d)},n=self["webpackChunkfront"]=self["webpackChunkfront"]||[];n.forEach(a.bind(null,0)),n.push=a.bind(null,n.push.bind(n))}();var n=t.O(void 0,[998],(function(){return t(6847)}));n=t.O(n)})();
//# sourceMappingURL=app.69564f3a.js.map