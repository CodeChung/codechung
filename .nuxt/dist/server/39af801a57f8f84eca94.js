exports.ids=[2],exports.modules={31:function(t,e,o){var content=o(40);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var n=o(3).default;t.exports.__inject__=function(t){n("53ff29af",content,!0,t)}},39:function(t,e,o){"use strict";o.r(e);var n=o(31),c=o.n(n);for(var r in n)"default"!==r&&function(t){o.d(e,t,(function(){return n[t]}))}(r);e.default=c.a},40:function(t,e,o){(e=o(2)(!1)).push([t.i,".joke{padding:1rem;border:1px dotted #ccc;margin:1rem 0}",""]),t.exports=e},47:function(t,e,o){"use strict";o.r(e);var n=o(27),c=o.n(n),r={name:"Joke",props:["joke","id"]},l=o(1);var h={name:"SearchJokes",data:()=>({text:""}),methods:{onSubmit(){this.$emit("search-text",this.text),this.text=""}}};var d={components:{Joke:Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("nuxt-link",{attrs:{to:"jokes/"+this.id}},[e("div",{staticClass:"joke"},[e("p",[this._v(this._s(this.joke))])])])}),[],!1,(function(t){var e=o(39);e.__inject__&&e.__inject__(t)}),null,"04237f2f").exports,SearchJokes:Object(l.a)(h,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[t._ssrNode('<input type="text" placeholder="Search Jokes..."'+t._ssrAttr("value",t.text)+'> <input type="submit" value="Search Jokes">')])}),[],!1,(function(t){}),null,"3cac490c").exports},data:()=>({jokes:[]}),async created(){const t={headers:{Accept:"application/json"}};try{const e=await c.a.get("https://icanhazdadjoke.com/search",t);console.log(e.data),this.jokes=e.data.results}catch(t){console.log(t)}},methods:{async searchText(text){console.log(text);const t={headers:{Accept:"application/json"}};try{const e=await c.a.get(`https://icanhazdadjoke.com/search?term=${text}`,t);console.log(e.data),this.jokes=e.data.results}catch(t){console.log(t)}}},head:()=>({title:"Funny Jokes from Papa",meta:[{hid:"jokes",name:"jokes",content:"Daddy stop being so funny!"}]})};var f=Object(l.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("SearchJokes",{on:{"search-text":this.searchText}}),this._ssrNode(" "),this._l(this.jokes,(function(t){return e("Joke",{key:t.id,attrs:{id:t.id,joke:t.joke}})}))],2)}),[],!1,(function(t){}),null,"470b58a3");e.default=f.exports}};