(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{158:function(e,t,n){var content=n(191);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(26).default)("53ff29af",content,!0,{sourceMap:!1})},190:function(e,t,n){"use strict";var r=n(158);n.n(r).a},191:function(e,t,n){(t=n(25)(!1)).push([e.i,".joke{padding:1rem;border:1px dotted #ccc;margin:1rem 0}",""]),e.exports=t},199:function(e,t,n){"use strict";n.r(t);n(38);var r,o,c=n(5),l=n(157),h=n.n(l),d={name:"Joke",props:["joke","id"]},f=(n(190),n(6)),m={name:"SearchJokes",data:function(){return{text:""}},methods:{onSubmit:function(){this.$emit("search-text",this.text),this.text=""}}},k={components:{Joke:Object(f.a)(d,(function(){var e=this.$createElement,t=this._self._c||e;return t("nuxt-link",{attrs:{to:"jokes/"+this.id}},[t("div",{staticClass:"joke"},[t("p",[this._v(this._s(this.joke))])])])}),[],!1,null,null,null).exports,SearchJokes:Object(f.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.text,expression:"text"}],attrs:{type:"text",placeholder:"Search Jokes..."},domProps:{value:e.text},on:{input:function(t){t.target.composing||(e.text=t.target.value)}}}),e._v(" "),n("input",{attrs:{type:"submit",value:"Search Jokes"}})])}),[],!1,null,null,null).exports},data:function(){return{jokes:[]}},created:(o=Object(c.a)(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={headers:{Accept:"application/json"}},e.prev=1,e.next=4,h.a.get("https://icanhazdadjoke.com/search",t);case 4:n=e.sent,console.log(n.data),this.jokes=n.data.results,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,this,[[1,9]])}))),function(){return o.apply(this,arguments)}),methods:{searchText:(r=Object(c.a)(regeneratorRuntime.mark((function e(text){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(text),t={headers:{Accept:"application/json"}},e.prev=2,e.next=5,h.a.get("https://icanhazdadjoke.com/search?term=".concat(text),t);case 5:n=e.sent,console.log(n.data),this.jokes=n.data.results,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0);case 13:case"end":return e.stop()}}),e,this,[[2,10]])}))),function(e){return r.apply(this,arguments)})},head:function(){return{title:"Funny Jokes from Papa",meta:[{hid:"jokes",name:"jokes",content:"Daddy stop being so funny!"}]}}},v=Object(f.a)(k,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("SearchJokes",{on:{"search-text":this.searchText}}),this._v(" "),this._l(this.jokes,(function(e){return t("Joke",{key:e.id,attrs:{id:e.id,joke:e.joke}})}))],2)}),[],!1,null,null,null);t.default=v.exports}}]);