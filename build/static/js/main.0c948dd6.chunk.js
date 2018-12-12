(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{272:function(e,t,a){e.exports=a(527)},277:function(e,t,a){},527:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(70),c=a.n(o),s=(a(277),a(10)),i=a.n(s),u=a(17),l=a(21),p=a(22),d=a(24),m=a(23),h=a(25),g=(a(281),a(552)),f=a(554),v=a(534),E=a(540),C=a(262),b=a(549);function y(e){var t=e.component,a=Object(C.a)(e,["component"]);return r.a.createElement(v.a,Object.assign({},a,{render:function(e){return sessionStorage.getItem("token")?r.a.createElement(t,e):r.a.createElement(b.a,{to:{pathname:"/login",state:{from:e.location}}})}}))}var O=a(31),j=a(541),G=a(536),w=a(537),S=a(547),_=a(546),k=a(18),x=a(29),F={LOGIN:"LOGIN",LOGIN_SUCCEDED:"LOGIN_SUCCEDED",LOGIN_FAILED:"LOGIN_FAILED",REGISTER:"REGISTER",REGISTER_SUCCEDED:"REGISTER_SUCCEDED",REGISTER_FAILED:"REGISTER_FAILED",FETCHDOMAIN:"FETCHDOMAIN",FETCHDOMAIN_SUCCEDED:"FETCHDOMAIN_SUCCEDED",FETCHDOMAIN_FAILED:"FETCHDOMAIN_FAILED"},A=a(238),D=a.n(A).a.create({baseURL:"https://addressbook-2.herokuapp.com/"});function I(){return{headers:{auth:sessionStorage.getItem("token")}}}var R=function(e){var t="";return e.response?(console.log(e.response),t=e.response.data.message):e.request?(console.log(e.request),t="Network error"):(console.log("Error",e.message),t=e.message),console.log(e.config),t},L=F.REGISTER,H=F.REGISTER_FAILED,T=F.REGISTER_SUCCEDED,N=F.LOGIN,M=F.LOGIN_SUCCEDED,P=F.LOGIN_FAILED,U=F.FETCHDOMAIN,z=F.FETCHDOMAIN_SUCCEDED,B=F.FETCHDOMAIN_FAILED,q=function(e){var t=e.name,a=e.email,n=e.phone,r=e.password,o=D.post("users/register",{name:t,email:a,phone:n,password:r});return function(){var e=Object(u.a)(i.a.mark(function e(t){var a,n,r,s;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:L,payload:{error:!1,loading:!0}}),e.prev=1,e.next=4,o;case 4:return a=e.sent,e.next=7,a.data;case 7:n=e.sent,r=n.message,t(void 0!==r?c(r):{type:T,payload:{registered:!0,loading:!1}}),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),s=R(e.t0),t(c(s));case 16:case"end":return e.stop()}},e,this,[[1,12]])}));return function(t){return e.apply(this,arguments)}}();function c(e){return{type:H,payload:{error:e,loading:!1}}}},V=function(e){var t=e.email,a=e.password;return function(){var e=Object(u.a)(i.a.mark(function e(o){var c,s,u,l,p,d;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return o({type:N,payload:{error:!1,loading:!0}}),e.prev=1,e.next=4,D.post("users/login",{email:t,password:a});case 4:return c=e.sent,e.next=7,c.data;case 7:s=e.sent,u=s.user,l=s.token,p=s.message,u&&""!==u&&void 0!==u&&sessionStorage.setItem("name",u.name),l&&""!==l&&void 0!==l&&sessionStorage.setItem("token",l),o(null===u||void 0===u||void 0===l?r(p):n(u)),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(1),d=R(e.t0),o(r(d));case 20:case"end":return e.stop()}},e,this,[[1,16]])}));return function(t){return e.apply(this,arguments)}}();function n(e){return{type:M,payload:{user:e,loading:!1}}}function r(e){return{type:P,payload:{loading:!1,error:e}}}},J=function(){return function(){var a=Object(u.a)(i.a.mark(function a(n){var r,o,c,s,u;return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return n({type:U,payload:{error:!1,loading:!0}}),a.prev=1,a.next=4,D.get("domain");case 4:return r=a.sent,a.next=7,r.data;case 7:o=a.sent,c=o.domain,s=o.message,null===c||void 0===c||void 0===c?n(t(s)):(sessionStorage.setItem("domain",c),n(e(c))),a.next=17;break;case 13:a.prev=13,a.t0=a.catch(1),u=R(a.t0),n(t(u));case 17:case"end":return a.stop()}},a,this,[[1,13]])}));return function(e){return a.apply(this,arguments)}}();function e(e){return{type:z,payload:{domain:e,loading:!1}}}function t(e){return{type:B,payload:{loading:!1,error:e}}}},W=a(161),$=a.n(W),Z=new RegExp("^(?=.*[A-Z])"),K=new RegExp("^(?=.*[0-9])"),Q=new RegExp("^(?=.*[!@#$%^&*])"),X=new RegExp("^(?=.{8,})"),Y=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).onChangeHandler=function(e){var t=e.target.value;if(a.setState(Object(O.a)({},e.target.name,t)),"password"===e.target.name){var n="";X.test(t)||(n+="length > 8, "),Q.test(t)||(n+="special character, "),K.test(t)||(n+="number, "),Z.test(t)||(n+="capital letter"),a.setState({passwordError:n})}else if("email"===e.target.name){var r=t+a.props.domain,o="";t&&!$.a.isEmail(r)&&(o="Email not valid"),a.setState({emailError:o})}else if("phone"===e.target.name){var c="";t&&(!$.a.isNumeric(t)||t.length<10)&&(c="phone number not valid"),a.setState({phoneError:c})}},a.onSubmitHandler=function(){var e=Object(u.a)(i.a.mark(function e(t){var n,r,o,c,s;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!(a.state.emailError||a.state.passwordError||a.state.phoneError)&&a.state.name&&a.state.password&&a.state.phone&&a.state.email){e.next=4;break}return alert("please correct all entries."),e.abrupt("return");case 4:return a.setState({open:!1}),n=a.state,r=n.name,o=n.email,c=n.phone,s=n.password,e.next=8,a.props.registerUser({name:r,email:o,phone:c,password:s});case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.state={name:"",email:"",phone:"",password:"",open:!0,passwordError:"length > 8, special character, number, capital letter",emailError:"",phoneError:"",nameError:""},a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.registered||!1;return r.a.createElement(j.a,{size:"mini",open:this.state.open,closeOnEscape:!1,closeOnDimmerClick:!1},r.a.createElement(j.a.Header,null,"User Information"),r.a.createElement(j.a.Content,null,r.a.createElement(G.a,{name:"name",fluid:!0,placeholder:"Enter name",style:{marginTop:"0.5em"},onChange:this.onChangeHandler,icon:"user"}),r.a.createElement(G.a,{name:"email",fluid:!0,placeholder:"Enter email",style:{marginTop:"0.5em"},onChange:this.onChangeHandler,label:"@inmar.com",labelPosition:"right"}),this.state.emailError&&r.a.createElement("span",{style:{color:"red"}},this.state.emailError),r.a.createElement(G.a,{name:"phone",fluid:!0,placeholder:"Enter phone number",style:{marginTop:"0.5em"},onChange:this.onChangeHandler,icon:"phone"}),this.state.phoneError&&r.a.createElement("span",{style:{color:"red"}},this.state.phoneError),r.a.createElement(G.a,{name:"password",type:"password",fluid:!0,placeholder:"Enter password",icon:"key",style:{marginTop:"0.5em"},onChange:this.onChangeHandler}),this.state.passwordError&&r.a.createElement("span",{style:{color:"red"}},this.state.passwordError),this.props.error&&r.a.createElement("span",{style:{color:"red"}},this.props.error),e&&r.a.createElement("span",{style:{color:"green"}},"Now you are registered, please ",r.a.createElement("a",{href:"/login"},"login")," to proceed."),r.a.createElement(w.a,null),r.a.createElement(S.a,{name:"register",primary:!0,fluid:!0,onClick:this.onSubmitHandler,loading:this.props.loading&&this.state.register},"Register")),r.a.createElement(_.a,null,"Already a user? ",r.a.createElement("a",{href:"/login"},"Login")))}}]),t}(n.Component);var ee=Object(x.b)(function(e){return{error:e.auth.error,loading:e.auth.loading,domain:e.auth.domain,registered:e.auth.registered}},function(e){return{registerUser:Object(k.b)(q,e)}})(Y),te=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).onChangeHandler=function(e){a.setState(Object(O.a)({},e.target.name,e.target.value))},a.onSubmitHandler=function(){var e=Object(u.a)(i.a.mark(function e(t){var n,r,o,c;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a.state.email&&a.state.password){e.next=4;break}return alert("please enter required values."),e.abrupt("return");case 4:return n=a.state,r=n.email,o=n.password,e.next=7,a.props.loginUser({email:r,password:o});case 7:(c=sessionStorage.getItem("token"))&&null!==c&&void 0!==c&&"undefined"!==c&&(a.setState({open:!1}),a.props.history.push("/dashboard"));case 9:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.state={email:"",password:"",open:!0,login:!1},a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement(j.a,{size:"mini",open:this.state.open,closeOnEscape:!1,closeOnDimmerClick:!1},r.a.createElement(j.a.Header,null,"User Information"),r.a.createElement(j.a.Content,null,r.a.createElement(G.a,{name:"email",fluid:!0,placeholder:"Enter your username",style:{marginTop:"0.5em"},onChange:this.onChangeHandler,label:"@inmar.com",labelPosition:"right"}),r.a.createElement(G.a,{name:"password",type:"password",fluid:!0,placeholder:"Enter your password",icon:"key",style:{marginTop:"0.5em"},onChange:this.onChangeHandler}),this.props.error&&r.a.createElement("span",{style:{color:"red"}},this.props.error),r.a.createElement(w.a,null),r.a.createElement(S.a,{name:"login",primary:!0,fluid:!0,size:"small",onClick:this.onSubmitHandler,loading:this.props.loading&&this.state.login},"Login")),r.a.createElement(_.a,null,"New to us? ",r.a.createElement("a",{href:"/register"},"Register")))}}]),t}(n.Component);var ae=Object(x.b)(function(e){return{error:e.auth.error,loading:e.auth.loading,domain:e.auth.domain}},function(e){return{loginUser:Object(k.b)(V,e)}})(te),ne=a(548),re=a(538),oe=a(544),ce=a(545),se=a(236),ie=a(28),ue=Object(ie.a)({},{AddGroup:"AddGroup",AddGroup_Success:"AddGroup_Success",AddGroup_Failure:"AddGroup_Failure",RemoveGroup:"RemoveGroup",RemoveGroup_Success:"RemoveGroup_Success",RemoveGroup_Failure:"RemoveGroup_Failure",EditGroup:"EditGroup",EditGroup_Success:"EditGroup_Success",EditGroup_Failure:"EditGroup_Failure",FetchCachedGroup:"FetchCachedGroup",FetchCachedGroupNames:"FetchCachedGroupName",FetchCachedGroupItems:"FetchCachedGroupItems",FetchGroupList:"FetchGroupList",FetchGroupList_Success:"FetchGroupList_Success",FetchGroupList_Failure:"FetchGroupList_Failure",ChangeActive_Group:"ChangeActive_Group",ChangeActive_Group_Success:"ChangeActive_Group_Success",ChangeActive_Group_Failure:"ChangeActive_Group_Failure"}),le=ue.AddGroup,pe=ue.AddGroup_Success,de=ue.AddGroup_Failure,me=ue.FetchCachedGroup,he=(ue.FetchCachedGroupNames,ue.FetchCachedGroupItems),ge=ue.FetchGroupList,fe=ue.FetchGroupList_Success,ve=ue.FetchGroupList_Failure,Ee=ue.RemoveGroup,Ce=ue.RemoveGroup_Success,be=ue.RemoveGroup_Failure,ye=ue.EditGroup,Oe=ue.EditGroup_Success,je=ue.EditGroup_Failure,Ge=function(e){var t=e.name,a=I(),n=D.post("contacts/group/add",{name:t},a);return function(){var e=Object(u.a)(i.a.mark(function e(t){var a,c,s,u,l;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:le,payload:{error:"",success:!1,loading:"addgroup"}}),e.prev=1,e.next=4,n;case 4:return a=e.sent,e.next=7,a.data;case 7:c=e.sent,s=c.group,u=c.message,console.log("add group action",s),t(null===s?o(u):r(s)),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(1),l=R(e.t0),t(o(l));case 18:case"end":return e.stop()}},e,this,[[1,14]])}));return function(t){return e.apply(this,arguments)}}();function r(e){return{type:pe,payload:{group:e,loading:"",success:!0}}}function o(e){return{type:de,payload:{error:e,loading:""}}}},we=function(e){var t=e.groupid,a=I(),n=D.delete("contacts/group/".concat(t),a);return function(){var e=Object(u.a)(i.a.mark(function e(a){var s,u,l,p,d;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a(r(t)),e.prev=1,e.next=4,n;case 4:return s=e.sent,e.next=7,s.data;case 7:u=e.sent,l=u.group,p=u.message,console.log("delete group action",l),a(null===l?c(p):o(l)),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(1),d=R(e.t0),a(c(d));case 18:case"end":return e.stop()}},e,this,[[1,14]])}));return function(t){return e.apply(this,arguments)}}();function r(e){return{type:Ee,payload:{error:"",success:!1,loading:e}}}function o(e){return{type:Ce,payload:{group:e,loading:"",success:!0}}}function c(e){return{type:be,payload:{error:e,loading:""}}}},Se=function(e){var t=e.groupid,a=e.name,n=e.active,r=I(),o=D.put("contacts/group/".concat(t),{name:a,active:n},r);return function(){var e=Object(u.a)(i.a.mark(function e(t){var a,n,r,u,l;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:ye,payload:{error:"",success:!1,loading:!0}}),e.prev=1,e.next=4,o;case 4:return a=e.sent,e.next=7,a.data;case 7:n=e.sent,r=n.group,u=n.message,console.log("edit group action",r),t(null===r?s(u):c(r)),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(1),l=R(e.t0),t(s(l));case 18:case"end":return e.stop()}},e,this,[[1,14]])}));return function(t){return e.apply(this,arguments)}}();function c(e){return{type:Oe,payload:{group:e,loading:!1,success:!0}}}function s(e){return{type:je,payload:{error:e,loading:!1}}}},_e=function(){var e=I(),t=D.get("contacts/group/list",e);return function(){var e=Object(u.a)(i.a.mark(function e(n){var r,o,c;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n({type:ge,payload:{loading:!0,error:""}}),e.prev=1,e.next=4,t;case 4:return r=e.sent,e.next=7,r.data;case 7:null===(o=e.sent).groups?n(a(o.message)):n((s=o.groups,{type:fe,payload:{groups:s,loading:!1}})),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),c=R(e.t0),n(a(c));case 15:case"end":return e.stop()}var s},e,this,[[1,11]])}));return function(t){return e.apply(this,arguments)}}();function a(e){return{type:ve,payload:{error:e,loading:!1}}}},ke=function(e){var t=e.groupid;return{type:me,payload:{groupid:t}}},xe=function(e){var t=e.groupid;return{type:he,payload:{groupid:t}}},Fe=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).onEdit=function(e){e.preventDefault(),a.props.history.push("/editgroup/".concat(a.props.group.id))},a.onDelete=function(){var e=Object(u.a)(i.a.mark(function e(t){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,a.props.removeGroup({groupid:a.props.group.id});case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.onSelect=function(){var e=Object(u.a)(i.a.mark(function e(t){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,a.props.fetchGroup({groupid:t.target.name});case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.group,t=e.id,a=e.name,n=e.active,o=e.total,c=this.props.selectedGroup?this.props.selectedGroup.name:"All Contacts",s="All Contacts"!==a;return r.a.createElement(oe.a.Item,{key:t},r.a.createElement(ce.a,{fluid:!0,color:c===a?"red":"grey"},r.a.createElement(ce.a.Content,null,r.a.createElement(ne.a,{columns:2},r.a.createElement(ne.a.Row,null,r.a.createElement(ne.a.Column,{width:"11"},r.a.createElement("div",null,r.a.createElement(re.a,{name:t,to:"/dashboard/".concat(t),onClick:this.onSelect},a),r.a.createElement(se.a,{circular:!0,style:{marginLeft:"1em"}},o),s&&r.a.createElement(se.a,{circular:!0,empty:!0,style:{marginLeft:"0.5em"},color:n?"green":"grey"}))),r.a.createElement(ne.a.Column,{width:"5"},s&&r.a.createElement("div",null,r.a.createElement(S.a,{icon:"pencil",size:"tiny",circular:!0,onClick:this.onEdit}),r.a.createElement(S.a,{icon:"delete",size:"tiny",circular:!0,color:"yellow",loading:this.props.loading===t,onClick:this.onDelete}))))))))}}]),t}(n.Component);var Ae=Object(x.b)(function(e){return{loading:e.group.loading,error:e.group.error,selectedGroup:e.group.selectedGroup}},function(e){return{removeGroup:Object(k.b)(we,e),fetchGroup:Object(k.b)(xe,e)}})(Fe),De=a(551),Ie=a(550),Re=a(150),Le=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={newgroup:""},a.onSearchChange=function(){},a.onAddGroup=function(){var e=Object(u.a)(i.a.mark(function e(t){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.props.addGroup({name:a.state.newgroup});case 2:a.props.error&&alert(a.props.error),a.setState({newgroup:""});case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.onChangeHandler=function(e){a.setState(Object(O.a)({},e.target.name,e.target.value))},a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.fetchAllGroups();case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=[],a={id:"00000",name:"All Contacts",total:0,active:!0};return t.push(a),this.props.groups.forEach(function(e){a.total+=e.total,t.push(e)}),r.a.createElement(De.a,null,r.a.createElement(ne.a,{columns:2},r.a.createElement(ne.a.Row,null,r.a.createElement(ne.a.Column,null,r.a.createElement(Ie.a,{color:"yellow"},r.a.createElement(Re.a,{name:"group"}),r.a.createElement(Ie.a.Content,null,"Groups"))),r.a.createElement(ne.a.Column,{align:"right"},r.a.createElement(G.a,{fluid:!0,name:"newgroup",label:r.a.createElement(S.a,{icon:"add",loading:this.props.loading,compact:!0,onClick:this.onAddGroup}),labelPosition:"right",value:this.state.newgroup,placeholder:"Add new group",onChange:this.onChangeHandler})),r.a.createElement(ne.a.Column,null))),r.a.createElement(oe.a,null,t.map(function(t){return r.a.createElement(Ae,Object.assign({name:t.name,key:t.name,group:t},e.props))})))}}]),t}(n.Component);var He=Object(x.b)(function(e){return{groups:e.group.groups,loading:"addgroup"===e.group.loading,error:e.group.error}},function(e){return{addGroup:Object(k.b)(Ge,e),fetchAllGroups:Object(k.b)(_e,e)}})(Le),Te=a(543),Ne=a(542),Me=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).onEdit=function(e){e.preventDefault(),console.log("contact component",a.props.contact),a.props.history.push({pathname:"/editcontact/".concat(a.props.contact._id),state:{data:a.props.contact}})},a.onDelete=function(e){e.preventDefault()},a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.contact,t=e.id,a=e.name,n=e.email,o=e.phone,c=e.job,s=e.active;return r.a.createElement(oe.a.Item,{key:t},r.a.createElement(ce.a,{fluid:!0},r.a.createElement(ce.a.Content,null,r.a.createElement(ce.a.Header,null,a,r.a.createElement(se.a,{circular:!0,empty:!0,color:s?"green":"grey",style:{marginLeft:"0.5em"}})),r.a.createElement(ne.a,{columns:2},r.a.createElement(ne.a.Row,null,r.a.createElement(ne.a.Column,{width:"13"},r.a.createElement("div",null,c),r.a.createElement("div",null,n),r.a.createElement("div",null,o)),r.a.createElement(ne.a.Column,{width:"3"},r.a.createElement("div",null,r.a.createElement(S.a,{icon:"pencil",size:"tiny",circular:!0,onClick:this.onEdit}),r.a.createElement(S.a,{icon:"delete",size:"tiny",circular:!0,color:"yellow",onClick:this.onDelete}))))))))}}]),t}(n.Component),Pe=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={activePage:1,totalPages:5,searchString:"",searchBy:"name",sortBy:"name"},a.handlePaginationChange=function(e,t){var n=t.activePage;a.setState({activePage:n})},a.onSearch=function(){},a.onSort=function(){},a.onChangeHandler=function(e){a.setState(Object(O.a)({},e.target.name,e.target.value))},a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark(function e(){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.group||"00000",e.next=3,this.props.fetchAllGroups({groupid:t});case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.props.selectedGroup,a=null,n="";t&&(a=t.contacts,n=t.name);var o=[{key:"name",text:"name",value:"name"},{key:"email",text:"email",value:"email"},{key:"phone",text:"phone",value:"phone"}];return r.a.createElement("div",null,r.a.createElement(De.a,null,r.a.createElement(ne.a,{columns:3},r.a.createElement(ne.a.Column,{width:4},r.a.createElement(Ie.a,{color:"yellow"},r.a.createElement(Re.a,{name:"address card"}),r.a.createElement(Ie.a.Content,null,n))),r.a.createElement(ne.a.Column,{width:8},r.a.createElement(G.a,{type:"text",placeholder:"Search contact ..."},r.a.createElement("input",null),r.a.createElement(Te.a,{compact:!0,options:o,defaultValue:"name"}),r.a.createElement(S.a,{icon:"search",compact:!0}))),r.a.createElement(ne.a.Column,{width:3,align:"right"},r.a.createElement(G.a,null,r.a.createElement(Te.a,{compact:!0,options:o,defaultValue:"name"}),r.a.createElement(S.a,{compact:!0,icon:"sort"})))),a&&r.a.createElement(oe.a,{selection:!0},a.map(function(t){return r.a.createElement(Me,Object.assign({key:t.email,contact:t},e.props))}))),r.a.createElement(De.a,null,r.a.createElement(Ne.a,{pointing:!0,secondary:!0,activePage:this.state.activePage,onPageChange:this.handlePaginationChange,totalPages:this.state.totalPages}),r.a.createElement(G.a,null,r.a.createElement(Te.a,{name:"pagesize",compact:!0,style:{marginLeft:"1em"},options:[{key:"10",text:"10",value:"10"},{key:"15",text:"15",value:"15"},{key:"20",text:"20",value:"20"}],defaultValue:"10"}),r.a.createElement(S.a,{disabled:!0},"Page Size"))))}}]),t}(n.Component);var Ue=Object(x.b)(function(e){return{selectedGroup:e.group.selectedGroup,error:e.group.error}},function(e){return{fetchAllGroups:Object(k.b)(xe,e)}})(Pe),ze=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement(ne.a,{stretched:!0},r.a.createElement(ne.a.Column,{width:6},r.a.createElement(He,this.props)),r.a.createElement(ne.a.Column,{width:10},r.a.createElement(Ue,this.props)))}}]),t}(n.Component),Be=a(539),qe=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).onChangeHandler=function(e){e.preventDefault(),a.setState(Object(O.a)({},e.target.name,e.target.value))},a.onCheckedChange=function(e){a.setState(Object(O.a)({},e,!a.state[e]))},a.onSubmitHandler=function(){var e=Object(u.a)(i.a.mark(function e(t){var n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a.setState({open:!1}),n={groupid:a.props.dirtyGroup.id,name:a.state.group},a.state.active!==a.props.dirtyGroup.active&&(n.active=a.state.active),console.log("on edit group",n),e.next=7,a.props.editGroup(n);case 7:a.props.history.push("/dashboard");case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.onExit=function(e){e.preventDefault(),a.setState({open:!1}),a.props.history.push("/dashboard")},a.state={group:"",active:!1,open:!0},a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.fetchCachedGroup({groupid:this.props.match.params.id});case 2:this.setState({group:this.props.dirtyGroup.name,active:this.props.dirtyGroup.active});case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement(j.a,{size:"mini",open:this.state.open,closeOnEscape:!0,closeOnDimmerClick:!0},r.a.createElement(Ie.a,{color:"orange",style:{background:"orange"}},"Group Information"),r.a.createElement(j.a.Content,null,r.a.createElement(G.a,{name:"group",fluid:!0,placeholder:"Enter group",style:{marginTop:"0.5em"},icon:"group",iconPosition:"left",onChange:this.onChangeHandler,value:this.state.group}),r.a.createElement(Be.a,{name:"active",toggle:!0,style:{marginTop:"1em"},label:this.state.active?"deactivate":"activate",checked:this.state.active,onChange:function(t){return e.onCheckedChange("active")}}),this.props.error&&r.a.createElement("span",{style:{color:"red"}},this.props.error),r.a.createElement(w.a,null),r.a.createElement(S.a.Group,null,r.a.createElement(S.a,{name:"Save",color:"orange",onClick:this.onSubmitHandler,loading:this.props.loading,icon:"save",content:"",circular:!0,compact:!0}),r.a.createElement(S.a.Or,null),r.a.createElement(S.a,{name:"Cancel",onClick:this.onExit,icon:"cancel",content:"",circular:!0,compact:!0}))))}}]),t}(n.Component);var Ve=Object(x.b)(function(e){return{dirtyGroup:e.group.dirtyGroup,loading:e.group.loading,error:e.group.error}},function(e){return{fetchCachedGroup:Object(k.b)(ke,e),editGroup:Object(k.b)(Se,e)}})(qe),Je=Object(ie.a)({},{AddContact:"AddContact",AddContact_Success:"AddContact_Success",AddContact_Failure:"AddContact_Failure",RemoveContact:"RemoveContact",RemoveContact_Success:"RemoveContact_Success",RemoveContact_Failure:"RemoveContact_Failure",EditContact:"EditContact",EditContact_Success:"EditContact_Success",EditContact_Failure:"EditContact_Failure",FetchContact:"FetchContact",FetchContact_Success:"FetchContact_Success",FetchContact_Failure:"FetchContact_Failure",ChangeActive_Contact:"ChangeActive_Contact",ChangeActive_Contact_Success:"ChangeActive_Contact_Success",ChangeActive_Contact_Failure:"ChangeActive_Contact_Failure"}),We=Je.AddContact,$e=Je.AddContact_Success,Ze=Je.AddContact_Failure,Ke=Je.EditContact,Qe=Je.EditContact_Success,Xe=Je.EditContact_Failure,Ye=(Je.RemoveContact,Je.RemoveContact_Failure,Je.RemoveContact_Success,function(e){var t=e.name,a=e.phone,n=e.email,r=e.job,o=e.group,c=e.active,s=I();console.log(t,a,n,r,o,c);var l=D.post("contacts/add",{name:t,phone:a,email:n,job:r,group:o,active:c},s);return function(){var e=Object(u.a)(i.a.mark(function e(t){var a,n,r,o,c;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:We,payload:{error:"",success:!1,loading:!0}}),e.prev=1,e.next=4,l;case 4:return a=e.sent,e.next=7,a.data;case 7:n=e.sent,r=n.contact,o=n.message,console.log("addContactAction",r),t(null===r?d(o):p(r)),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(1),c=R(e.t0),t(d(c));case 18:case"end":return e.stop()}},e,this,[[1,14]])}));return function(t){return e.apply(this,arguments)}}();function p(e){return{type:$e,payload:{contact:e,loading:!1,success:!0}}}function d(e){return{type:Ze,payload:{error:e,loading:!1}}}}),et=function(e){var t=e.id,a=e.name,n=e.email,r=e.job,o=e.active,c=e.phone,s=e.group,l=I(),p=D.put("contacts/".concat(t),{name:a,email:n,job:r,active:o,phone:c,group:s},l);return function(){var e=Object(u.a)(i.a.mark(function e(a){var n,r,o,c,s;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a(d(t)),e.prev=1,e.next=4,p;case 4:return n=e.sent,e.next=7,n.data;case 7:r=e.sent,o=r.contact,c=r.message,console.log("editContactAction",o),a(null===o?h(c):m(o)),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(1),s=R(e.t0),a(h(s));case 18:case"end":return e.stop()}},e,this,[[1,14]])}));return function(t){return e.apply(this,arguments)}}();function d(e){return{type:Ke,payload:{error:"",success:!1,loading:e}}}function m(e){return{type:Qe,payload:{contact:e,loading:!1,success:!0}}}function h(e){return{type:Xe,payload:{error:e,loading:!1}}}},tt=function(e){function t(e){var a;Object(l.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).onSelectionChange=function(e){var t=e.name,n=e.value;a.setState(Object(O.a)({},t,n))},a.onChangeHandler=function(e){a.setState(Object(O.a)({},e.target.name,e.target.value))},a.onSubmitHandler=function(){var e=Object(u.a)(i.a.mark(function e(t){var n,r,o,c,s,u,l,p,d,m;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a.setState({open:!1}),n=a.state,r=n.id,o=n.name,c=n.phone,s=n.email,u=n.job,l=n.group,p=n.active,d=n.groupoptions,console.log("on edit submit",a.state),m=d.find(function(e){return e.text===l}).key,!a.state.id){e.next=10;break}return e.next=8,a.props.editContact({id:r,name:o,phone:c,email:s,job:u,group:m,active:p});case 8:e.next=12;break;case 10:return e.next=12,a.props.addContact({name:o,phone:c,email:s,job:u,group:m,active:p});case 12:a.props.history.push("/dashboard");case 13:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.onExit=function(e){e.preventDefault(),a.setState({open:!1}),a.props.history.push("/dashboard")},a.onCheckedChange=function(e){a.setState(Object(O.a)({},e,!a.state[e]))};var n={};return a.props.match.params.id&&(n=a.props.location.state.data),a.state={id:a.props.match.params.id,name:n.name||"",job:n.job||"",phone:n.phone||"",email:n.email||"",group:n.group||"",groupoptions:[],active:n.active||!0,open:!0},a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark(function e(){var t,a,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=this.props.groups||[],a=[],t.length>0&&(n="",t.forEach(function(e){a.push({key:e.id,text:e.name,value:e.name})}),n=this.state.id?this.state.group:a[0].text,this.setState({group:n})),this.setState({groupoptions:a}),this.state.id;case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement(j.a,{size:"mini",open:this.state.open,closeOnEscape:!0,closeOnDimmerClick:!0},r.a.createElement(Ie.a,{color:"orange",style:{background:"orange"}},"Contact Information"),r.a.createElement(j.a.Content,null,r.a.createElement(G.a,{name:"name",fluid:!0,placeholder:"Enter name",style:{marginTop:"0.5em"},value:this.state.name,onChange:this.onChangeHandler,icon:"user",iconPosition:"left"}),r.a.createElement(G.a,{name:"email",fluid:!0,placeholder:"Enter email",style:{marginTop:"0.5em"},value:this.state.email,onChange:this.onChangeHandler,icon:"at",iconPosition:"left",label:"@inmar.com",labelPosition:"right"}),r.a.createElement(G.a,{name:"phone",fluid:!0,placeholder:"Enter phone",style:{marginTop:"0.5em"},value:this.state.phone,onChange:this.onChangeHandler,icon:"phone",iconPosition:"left"}),r.a.createElement(G.a,{name:"job",fluid:!0,placeholder:"Enter job role",style:{marginTop:"0.5em"},value:this.state.job,onChange:this.onChangeHandler,icon:"info",iconPosition:"left"}),r.a.createElement(G.a,{fluid:!0,style:{marginTop:"0.5em"},onChange:this.onChangeHandler},r.a.createElement(Te.a,{name:"group",compact:!0,fluid:!0,options:this.state.groupoptions||[],selection:!0,value:this.state.group,onChange:function(t){return e.onSelectionChange({name:"group",value:t.target.textContent})}}),r.a.createElement(S.a,{disabled:!0},"Group")),this.state.id&&r.a.createElement(Be.a,{name:"active",toggle:!0,style:{marginTop:"1em"},label:this.state.active?"deactivate":"activate",checked:this.state.active,onChange:function(t){return e.onCheckedChange("active")}}),this.props.error&&r.a.createElement("span",{style:{color:"red"}},this.props.error),r.a.createElement(w.a,null),r.a.createElement(S.a.Group,null,r.a.createElement(S.a,{name:"Save",primary:!0,onClick:this.onSubmitHandler,loading:this.props.loading,icon:"save",content:"",circular:!0,compact:!0}),r.a.createElement(S.a.Or,null),r.a.createElement(S.a,{name:"Cancel",secondary:!0,onClick:this.onExit,icon:"cancel",content:"",circular:!0,compact:!0}))))}}]),t}(n.Component);var at=Object(x.b)(function(e){return console.log("editContact",e),{contact:e.currentContact,groups:e.group.groups}},function(e){return{addContact:Object(k.b)(Ye,e),editContact:Object(k.b)(et,e)}})(tt),nt=a(555),rt=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).onAddContact=function(e){e.preventDefault(),a.props.history.push("/addcontact")},a.onLogout=function(e){e.preventDefault(),sessionStorage.clear(),a.props.history.push("/")},a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=sessionStorage.getItem("name");return r.a.createElement(De.a,{inverted:!0,color:"yellow"},r.a.createElement(ne.a,null,r.a.createElement(ne.a.Column,{width:12},r.a.createElement(Ie.a,{as:"h2",color:"orange"},r.a.createElement(Re.a,{name:"address book"}),r.a.createElement(Ie.a.Content,null,"Contact Manager",r.a.createElement(Ie.a.Subheader,null,"Hi, ".concat(e))))),r.a.createElement(ne.a.Column,{width:"4"},r.a.createElement(S.a,{icon:"plus",compact:!0,circular:!0,content:"Add Contact",onClick:this.onAddContact}),r.a.createElement(S.a,{icon:"lock",compact:!0,circular:!0,content:"Logout",onClick:this.onLogout}))))}}]),t}(n.Component),ot=Object(nt.a)(rt),ct=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).componentDidMount=Object(u.a)(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.props.fetchDomain();case 2:case"end":return e.stop()}},e,this)})),a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement(g.a,null,r.a.createElement(E.a,null,r.a.createElement(ot,null),r.a.createElement(f.a,null,r.a.createElement(v.a,{exact:!0,path:"/",component:ae}),r.a.createElement(v.a,{exact:!0,path:"/Login",component:ae}),r.a.createElement(v.a,{exact:!0,path:"/Register",component:ee}),r.a.createElement(y,{exact:!0,path:"/dashboard",component:ze}),r.a.createElement(y,{exact:!0,path:"/dashboard/:group",component:ze}),r.a.createElement(y,{exact:!0,path:"/editgroup/:id",component:Ve}),r.a.createElement(y,{exact:!0,path:"/addcontact",component:at}),r.a.createElement(y,{exact:!0,path:"/editcontact/:id",component:at}))))}}]),t}(n.Component);var st=Object(x.b)(null,function(e){return{fetchDomain:Object(k.b)(J,e)}})(ct);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var it=a(261),ut={domain:"",user:"",token:"",loading:!1,error:"",errorMessage:""},lt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ut,t=arguments.length>1?arguments[1]:void 0;switch(console.log("authReducer",t),t.type){case F.LOGIN:case F.LOGIN_FAILED:case F.LOGIN_SUCCEDED:case F.REGISTER:case F.REGISTER_FAILED:case F.REGISTER_SUCCEDED:case F.FETCHDOMAIN:case F.FETCHDOMAIN_SUCCEDED:case F.FETCHDOMAIN_FAILED:return Object(ie.a)({},e,t.payload);default:return Object(ie.a)({},e)}},pt={contact:{},key:"",loading:!1,error:"",errorMessage:"",success:!1},dt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pt,t=arguments.length>1?arguments[1]:void 0;switch(console.log("contactReducer",t),t.type){case Je.AddContact:case Je.AddContact_Failure:case Je.AddContact_Success:case Je.EditContact:case Je.EditContact_Failure:case Je.EditContact_Success:case Je.RemoveContact:case Je.RemoveContact_Failure:case Je.RemoveContact_Success:case Je.FetchContact_Success:case Je.FetchContact:case Je.FetchContact_Failure:return Object(ie.a)({},e,t.payload);default:return Object(ie.a)({},e)}},mt=a(114),ht={groups:[],selectedGroup:null,loading:!1,error:"",errorMessage:"",success:!1},gt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ht,t=arguments.length>1?arguments[1]:void 0;switch(console.log("groupReducer",t),t.type){case ue.EditGroup:case ue.EditGroup_Failure:case ue.EditGroup_Success:case ue.RemoveGroup:case ue.RemoveGroup_Failure:case ue.AddGroup:case ue.AddGroup_Failure:case ue.FetchGroupList:case ue.FetchGroupList_Failure:return Object(ie.a)({},e,t.payload);case ue.AddGroup_Success:return Object(ie.a)({},e,{groups:Object(mt.a)(e.groups).concat([t.payload.group])},t.payload);case ue.RemoveGroup_Success:var a=e.groups.filter(function(e){return e.id!==t.payload.group.id});return Object(ie.a)({},e,{groups:a},t.payload);case ue.FetchCachedGroup:var n=e.groups.find(function(e){return e.id===t.payload.groupid});return Object(ie.a)({},e,{dirtyGroup:n});case ue.FetchCachedGroupNames:return Object(ie.a)({},e,{groupNames:e.groups});case ue.FetchCachedGroupItems:var r={id:"00000",name:"All Contacts",active:!0,total:0,contacts:[]};return"00000"===t.payload.groupid?e.groups.forEach(function(e){var t;e.total>0&&(t=r.contacts).push.apply(t,Object(mt.a)(e.contacts))}):r=e.groups.find(function(e){return e.id===t.payload.groupid}),Object(ie.a)({},e,{selectedGroup:r});case ue.FetchGroupList_Success:var o={id:"00000",name:"All Contacts",active:!0,total:0,contacts:[]};return t.payload.groups&&t.payload.groups.forEach(function(e){var t;e.total>0&&(t=o.contacts).push.apply(t,Object(mt.a)(e.contacts))}),Object(ie.a)({},e,{selectedGroup:o},t.payload);default:return Object(ie.a)({},e)}},ft=Object(k.c)({auth:lt,contact:dt,group:gt}),vt=Object(k.d)(ft,Object(k.a)(it.a));c.a.render(r.a.createElement(x.a,{store:vt},r.a.createElement(st,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[272,2,1]]]);
//# sourceMappingURL=main.0c948dd6.chunk.js.map