webpackJsonp([0],{"9iKQ":function(t,a){},NHnr:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("7+uW"),n={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"app"}},[this._m(0),this._v(" "),a("div",{staticClass:"col-xs-12",staticStyle:{height:"50px"}}),this._v(" "),a("router-view")],1)},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[e("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("Start")]),t._v(" "),e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})]),t._v(" "),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[e("ul",{staticClass:"navbar-nav mr-auto"},[e("li",{staticClass:"nav-item active"},[e("a",{staticClass:"nav-link",attrs:{href:"/"}},[t._v("Gemeinde "),e("span",{staticClass:"sr-only"},[t._v("(current)")])])]),t._v(" "),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#/vereine"}},[t._v("Vereine")])]),t._v(" "),e("li",{staticClass:"nav-item dropdown"},[e("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"vereineDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n            Dropdown\n          ")]),t._v(" "),e("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"vereineDropdown"}},[e("a",{staticClass:"dropdown-item",attrs:{href:"#/vereine"}},[t._v("Action")]),t._v(" "),e("a",{staticClass:"dropdown-item",attrs:{href:"#/vereine"}},[t._v("Another action")]),t._v(" "),e("div",{staticClass:"dropdown-divider"}),t._v(" "),e("a",{staticClass:"dropdown-item",attrs:{href:"#/vereine"}},[t._v("Something else here")])])]),t._v(" "),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link disabled",attrs:{href:"#"}},[t._v("Disabled")])])]),t._v(" "),e("form",{staticClass:"form-inline my-2 my-lg-0"},[e("input",{staticClass:"form-control mr-sm-2",attrs:{type:"search",placeholder:"Search","aria-label":"Search"}}),t._v(" "),e("button",{staticClass:"btn btn-outline-success my-2 my-sm-0",attrs:{type:"submit"}},[t._v("Search")])])])])}]};var i=e("VU/8")({name:"App"},n,!1,function(t){e("zl2B")},null,null).exports,r=e("/ocq"),l={render:function(){var t=this.$createElement;return(this._self._c||t)("p",[this._v("Hello World")])},staticRenderFns:[]};var o=e("VU/8")({},l,!1,function(t){e("9iKQ")},null,null).exports,c={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card",staticStyle:{width:"18rem"}},[e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[t._v(t._s(t.id))]),t._v(" "),e("h6",{staticClass:"card-subtitle mb-2 text-muted"},[t._v("Card subtitle")]),t._v(" "),t._l(t.headlines,function(a){return e("div",{key:a.name},[e("h6",[t._v(t._s(a.date))]),t._v(" "),e("h3",[t._v(t._s(a.name))]),t._v(" "),e("p",{staticClass:"card-text"},[t._v("Some quick example text to build on the card title and make up the bulk of the card's content.")])])})],2)])},staticRenderFns:[]};var d={data:function(){return{id:"",headlines:[]}},components:{news:e("VU/8")({props:["id","headlines"]},c,!1,function(t){e("mBG6")},null,null).exports},created:function(){this.id=this.$route.params.id;var t=this;setTimeout(function(){t.headlines=[{date:"2018-06-05",name:"First"},{date:"2018-06-05",name:"Second"},{date:"2018-06-05",name:"Third"}]},3e3)}},v={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"container"},[a("div",[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("news",{attrs:{id:this.id,headlines:this.headlines}})],1),this._v(" "),a("div",{staticClass:"col"},[this._v("\n        2 of 2\n      ")])])]),this._v(" "),this._m(0)])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[this._v("\n        1 of 3\n      ")]),this._v(" "),a("div",{staticClass:"col"},[this._v("\n        2 of 3\n      ")]),this._v(" "),a("div",{staticClass:"col"},[this._v("\n        3 of 3\n      ")])])])}]};var u=e("VU/8")(d,v,!1,function(t){e("POmE")},null,null).exports;s.a.use(r.a);var p=new r.a({routes:[{path:"/",name:"HelloWorld",component:o},{path:"/vereine/:id",name:"Vereine",component:u}]});s.a.config.productionTip=!1,new s.a({el:"#app",router:p,components:{App:i},template:"<App/>"})},POmE:function(t,a){},mBG6:function(t,a){},zl2B:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.df7697f9e47e4c00306c.js.map