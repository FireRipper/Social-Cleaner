webpackJsonp([2,5,11,13],{"EW+e":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={components:{Top:n("k/f8").default},props:{obj:{type:Object,required:!0},name:{type:String,required:!0},compare:{type:Boolean,required:!1},info:{type:String,required:!1}},computed:{process:function(){return this.$store.state.vk.process}}},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"block__attr"},[n("top",{attrs:{obj:t.obj,name:t.name,compare:t.compare}}),t._v(" "),n("at-checkbox-group",{model:{value:t.obj.items,callback:function(e){t.$set(t.obj,"items",e)},expression:"obj.items"}},t._l(t.obj.html,function(e){return n("at-checkbox",{key:e.val,attrs:{label:e.val,disabled:t.process}},[t._v("\n      "+t._s(e.name)+"\n    ")])})),t._v(" "),t.info?n("small",[t._v(t._s(t.info))]):t._e()],1)},staticRenderFns:[]},s=n("VU/8")(a,r,!1,null,null,null);e.default=s.exports},F279:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("Xxa5"),r=n.n(a),s=n("exGp"),o=n.n(s),i=n("9Tdp"),l={props:{mainConfig:{type:Object,required:!0},ownerId:{type:null|String,required:!0}},data:function(){return{wall:{},page:{},isUser:!1}},computed:{hasWallPosts:function(){return this.wall.response.items.length>0},linkPage:function(){return this.isUser?i.default.getLinkUser(this.page.id):i.default.getLinkGroup(this.page.id)},linkWall:function(){return i.default.getLinkWall(this.wall.response.items[0])}},methods:{fetchGetWall:function(){var t=this;return o()(r.a.mark(function e(){var n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.default.fetchWallGet(t.ownerId,t.mainConfig.filter,1,t.mainConfig.count.min-1);case 2:(n=e.sent).ok&&(t.wall=n.body);case 4:case"end":return e.stop()}},e,t)}))()},fetchGetUsersById:function(){var t=this;return o()(r.a.mark(function e(){var n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.default.fetchUsersGet(t.ownerId,"photo_100");case 2:(n=e.sent).ok&&n.body.response&&(t.page=n.body.response[0]);case 4:case"end":return e.stop()}},e,t)}))()},fetchGetGroupsById:function(){var t=this;return o()(r.a.mark(function e(){var n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.default.fetchGroupsGetById(t.ownerId.substr(1));case 2:(n=e.sent).ok&&n.body.response&&(t.page=n.body.response[0]);case 4:case"end":return e.stop()}},e,t)}))()},sendRequest:function(){this.fetchGetWall(),this.isUser="-"!==this.ownerId[0],this.isUser?this.fetchGetUsersById():this.fetchGetGroupsById()},close:function(){this.wall={},this.page={}}}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"block__result"},[t.page.response||t.wall.response?[n("at-button",{attrs:{type:"primary",hollow:""},on:{click:function(e){t.close()}}},[t._v("Close")]),t._v(" "),n("div",{staticClass:"wall-config-result"},[t.page.id?n("div",{staticClass:"page section"},[n("span",[t._v(t._s(t.isUser?"User":"Group"))]),t._v(" "),n("div",{staticClass:"flex"},[n("img",{attrs:{src:t.page.photo_100,alt:"Page image"}}),t._v(" "),n("div",{staticClass:"info"},[n("p",[n("strong",[t._v("ID:")]),t._v(" "+t._s(t.page.id))]),t._v(" "),t.isUser?[n("p",[n("strong",[t._v("Name:")]),t._v(" "+t._s(t.page.last_name+" "+t.page.first_name))])]:[n("p",[n("strong",[t._v("Name:")]),t._v(" "+t._s(t.page.name))]),t._v(" "),n("p",[n("strong",[t._v("Is admin:")]),t._v(" "+t._s(t.page.is_admin?"Yes":"No"))])],t._v(" "),n("p",[n("a",{attrs:{href:t.linkPage,target:"_blank",rel:"noopener"}},[t._v("Follow the link")])])],2)])]):t._e(),t._v(" "),t.wall.response?n("div",{staticClass:"wall section"},[n("span",[t._v("Wall")]),t._v(" "),n("div",{staticClass:"info"},[n("p",[n("strong",[t._v("Count:")]),t._v(" "+t._s(t.wall.response.count))]),t._v(" "),t.hasWallPosts?n("p",[n("strong",[t._v("Start from the first post:")]),t._v(" "),n("a",{attrs:{href:t.linkWall,target:"_blank",rel:"noopener"}},[t._v("Follow the link")])]):t._e()])]):t._e()])]:n("at-button",{attrs:{type:"primary",hollow:""},on:{click:function(e){t.sendRequest()}}},[t._v("\n    Check main settings\n  ")])],2)},staticRenderFns:[]};var u=n("VU/8")(l,c,!1,function(t){n("JZcN")},"data-v-6c53606d",null);e.default=u.exports},JZcN:function(t,e){},aO0K:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={props:{name:{type:String,required:!0},model:{type:String,required:!0},html:{type:Array,required:!0},info:{type:String,required:!1},size:{type:String,required:!1,default:"normal"}},data:function(){return{input:this.model}},computed:{process:function(){return this.$store.state.vk.process}},watch:{input:function(){this.$emit("update:model",this.input)}}},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"block__attr"},[n("p",[t._v(t._s(t.name))]),t._v(" "),n("at-select",{attrs:{disabled:t.process,size:t.size},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}},t._l(t.html,function(e){return n("at-option",{key:e.val,attrs:{value:e.val}},[t._v("\n      "+t._s(e.name)+"\n    ")])})),t._v(" "),t.info?n("small",[t._v(t._s(t.info))]):t._e()],1)},staticRenderFns:[]},s=n("VU/8")(a,r,!1,null,null,null);e.default=s.exports},slB7:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("Xxa5"),r=n.n(a),s=n("exGp"),o=n.n(s),i=n("fZjL"),l=n.n(i),c=n("EW+e"),u=n("F279"),p=n("aO0K"),d=n("8j+c"),f=n("dKil"),m=n("MhDk"),v=n("9Tdp"),h={components:{ConfigResult:u.default,AttrTag:m.default,AttrCheckbox:c.default,AttrCount:f.default,AttrInput:d.default,AttrSelect:p.default},data:function(){return{main:{owner_id:"",filter:"all",count:{min:"1",max:"20"},isDeletePosts:0},wall:{ids:{input:"",items:[],compareAll:!1},fromIds:{input:"",items:[],compareAll:!1},texts:{input:"",items:[],compareAll:!1},attachments:{items:[],compareAll:!0,html:[{name:"Photo",val:"photo"},{name:"Video",val:"video"},{name:"Audio",val:"audio"},{name:"Document",val:"doc"},{name:"Link",val:"link"},{name:"Note",val:"note"},{name:"Poll",val:"poll"},{name:"Wiki Page",val:"page"},{name:"Photos List",val:"photos_list"},{name:"Market Item",val:"market"},{name:"Market Collection",val:"market_album"}]},count:{items:{comments:{state:0,count:0},likes:{state:0,count:0},reposts:{state:0,count:0},views:{state:0,count:0}},compareAll:!0}},del:{dialog:!1,process:!1,continue:!0},preview:{ids:[],show:!1,loading:!1},html:{filters:[{name:"Все",val:"all"},{name:"Предложенные записи на стене сообщества",val:"suggests"},{name:"Отложенные записи",val:"postponed"},{name:"Записи владельца стены",val:"owner"},{name:"Записи не от владельца стены",val:"others"}],count:[{name:"Comments",attr:"comments",icon:"fa-comment-o"},{name:"Likes",attr:"likes",icon:"fa-heart-o"},{name:"Reposts",attr:"reposts",icon:"fa-bullhorn"},{name:"Views",attr:"views",icon:"fa-eye"}]}}},computed:{user:function(){return this.$store.state.vk.user},process:function(){return this.$store.state.vk.process},ownerId:function(){return this.main.owner_id?"-"+this.main.owner_id:this.user.id},isActiveWallCount:function(){var t=this;return l()(this.wall.count.items).some(function(e){if(0!==t.wall.count.items[e].state)return!0})}},methods:{startAction:function(){this.$store.commit("VK_SET_PROCESS"),this.del.dialog=!1;var t=parseInt(this.main.count.min),e=parseInt(this.main.count.max);return t>0&&e>0&&e>=t?(this.main.count.min=t.toString(),this.main.count.max=e.toString(),!0):(this.stopAction(!1),this.$Modal.alert({title:"Ошибка",content:"Проверьте диапазон удаляемых постов в основных настройках"}),!1)},stopAction:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t?this.$Message.success("Action stopped"):this.$Message.error("Action stopped"),e&&(this.preview.show=!1),this.preview.loading=!1,this.del.continue=!0,this.$store.commit("VK_SET_PROCESS",!1)},fetchGetWall:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v.default.prototype.COUNT_WALL,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.main.count.min-1;return o()(r.a.mark(function a(){var s;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,v.default.fetchWallGet(t.ownerId,t.main.filter,e,n,500,1500);case 2:return s=a.sent,a.abrupt("return",s);case 4:case"end":return a.stop()}},a,t)}))()},fetchDeletePost:function(t){var e=this;return o()(r.a.mark(function n(){var a;return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,v.default.fetchWallDelete(t,e.ownerId,1500,2500);case 2:return a=n.sent,n.abrupt("return",a);case 4:case"end":return n.stop()}},n,e)}))()},startDeletePosts:function(){var t=this;return o()(r.a.mark(function e(){var n,a,s,o,i,l,c;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.startAction()){e.next=2;break}return e.abrupt("return");case 2:n=0;case 3:if(!(n<t.getCountLoop())){e.next=34;break}return a=t.getCountDeletePosts(),e.next=7,t.fetchGetWall(a>100?100:a);case 7:if(!(s=e.sent).ok||!s.body.response){e.next=30;break}o=s.body.response.items.length,i=0;case 11:if(!(i<o)){e.next=28;break}if(l=s.body.response.items[i],t.del.continue){e.next=15;break}return e.abrupt("return",t.stopAction(!0,!0));case 15:if(void 0!==l.can_delete&&l.can_delete){e.next=18;break}return t.$Modal.error({title:"Access to wall's post denied",content:"Error code: 210"}),e.abrupt("return",t.stopAction(!1));case 18:if(t.checkWallConfiguration(l)){e.next=21;break}return t.main.count.min++,e.abrupt("continue",25);case 21:return e.next=23,t.fetchDeletePost(l.id);case 23:(c=e.sent).ok&&c.body.response&&t.main.count.max--;case 25:i++,e.next=11;break;case 28:e.next=31;break;case 30:return e.abrupt("return",t.stopAction(s.ok&&void 0===s.body.error,!0));case 31:n++,e.next=3;break;case 34:t.stopAction(!0,!0);case 35:case"end":return e.stop()}},e,t)}))()},startPreviewPosts:function(){var t=this;return o()(r.a.mark(function e(){var n,a,s;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.startAction()){e.next=2;break}return e.abrupt("return");case 2:t.preview.loading=!0,t.preview.show=!0,t.preview.ids=[],n=0;case 6:if(!(n<t.getCountLoop())){e.next=22;break}if(t.del.continue){e.next=9;break}return e.abrupt("return",t.stopAction());case 9:return a=n*v.default.prototype.COUNT_WALL,e.next=12,t.fetchGetWall(t.getCountDeletePosts()-a,a);case 12:if(!((s=e.sent).ok&&s.body.response&&s.body.response.items.length)){e.next=17;break}s.body.response.items.forEach(function(e){t.checkWallConfiguration(e)&&t.preview.ids.push(e.id)}),e.next=19;break;case 17:return t.stopAction(!!s.ok),e.abrupt("return");case 19:n++,e.next=6;break;case 22:t.stopAction();case 23:case"end":return e.stop()}},e,t)}))()},checkWallConfiguration:function(t){for(var e=[this.checkWallNumber("ids",t.id),this.checkWallNumber("fromIds",t.from_id),this.checkWallTexts(t.text),this.checkWallAttachments(t.attachments),this.checkWallCounts(t)],n=0;n<e.length;n++){var a=e[n];if(null!==a&&!a)return!1}return!0},checkWallNumber:function(t,e){var n=this.wall[t].compareAll,a=this.wall[t].items;if(!a.length)return null;if(n){for(var r=0;r<a;r++)if(a[r]!==e)return!1;return!0}return a.includes(e)},checkWallTexts:function(t){var e=this.wall.texts.compareAll,n=this.wall.texts.items,a=n.length;if(!a)return null;t=t.toLowerCase().trim();for(var r=0;r<a;r++){var s=-1!==t.indexOf(n[r]);if(e&&!s)return!1;if(!e&&s)return!0}return e},checkWallAttachments:function(t){var e=this.wall.attachments.compareAll,n=this.wall.attachments.items,a=n.length;if(!a)return null;if(void 0===t)return!1;t=t.map(function(t){return t.type});for(var r=0;r<a;r++){var s=t.includes(n[r]);if(e&&!s)return!1;if(!e&&s)return!0}return e},checkWallCounts:function(t){var e=this;if(!this.isActiveWallCount)return null;for(var n=this.wall.count.compareAll,a=l()(this.wall.count.items).map(function(n){return e.checkWallCountAttr(t,n)}),r=0;r<a.length;r++)if(null!==a[r]){if(n&&!a[r])return!1;if(!n&&a[r])return!0}return n},checkWallCountAttr:function(t,e){if(void 0===t[e])return!1;var n=this.wall.count.items[e].state;if(0===n)return null;var a=parseInt(this.wall.count.items[e].count),r=t[e].count;switch(n){case-1:return r<a;case 1:return r>a;default:return!1}},getLinkPost:function(t){return v.default.getLinkWall({from_id:this.ownerId,id:t})},getLinkPage:function(t){return v.default.getLinkPage(t)},getCountLoop:function(){return Math.ceil((this.main.count.max-this.main.count.min+1)/v.default.prototype.COUNT_WALL)},getCountDeletePosts:function(){return this.main.count.max-this.main.count.min+1}}},_={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"wall"}},[n("div",{staticClass:"main-config block"},[n("h2",[t._v("Основные настройки")]),t._v(" "),n("attr-input",{attrs:{name:"ID сообщества",info:"Positive number. Empty - Current User.",model:t.main.owner_id},on:{"update:model":function(e){t.$set(t.main,"owner_id",e)}}}),t._v(" "),n("attr-select",{attrs:{name:"Фильтр записей",html:t.html.filters,model:t.main.filter,size:"large"},on:{"update:model":function(e){t.$set(t.main,"filter",e)}}}),t._v(" "),n("attr-count",{attrs:{name:"Количество записей (от и до), включительно",model:t.main.count}}),t._v(" "),n("div",{staticClass:"block__attr"},[n("p",[t._v("Удалить записи или очистить комментарии")]),t._v(" "),n("at-radio-group",{model:{value:t.main.isDeletePosts,callback:function(e){t.$set(t.main,"isDeletePosts",e)},expression:"main.isDeletePosts"}},[n("at-radio-button",{attrs:{label:0,disabled:t.process}},[t._v("Записи")]),t._v(" "),n("at-radio-button",{attrs:{label:1,disabled:""}},[t._v("Комментарии")])],1)],1),t._v(" "),t.process?t._e():n("config-result",{attrs:{"main-config":t.main,"owner-id":t.ownerId}})],1),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"wall-config block"},[n("h2",[t._v("Параметры стены")]),t._v(" "),n("attr-tag",{attrs:{obj:t.wall.ids,name:"ID записей",push:t.pushNumber,"link-tag":t.getLinkPost,info:"After filling, press enter to add to the list."}}),t._v(" "),n("attr-tag",{attrs:{obj:t.wall.fromIds,name:"ID авторов записей",push:t.pushNumber,"link-tag":t.getLinkPage,info:"After filling, press enter to add to the list. Use a negative value to designate a community ID."}}),t._v(" "),n("attr-tag",{attrs:{obj:t.wall.texts,name:"Фразы в тексте",push:t.pushString,compare:"",info:"After filling, press enter to add to the list."}}),t._v(" "),n("attr-checkbox",{attrs:{obj:t.wall.attachments,name:"Added media attachments",compare:""}}),t._v(" "),n("div",{staticClass:"block__attr"},[n("div",{staticClass:"top"},[n("p",{class:t.getStyleStatus(t.isActiveWallCount)},[t._v("Значения")]),t._v(" "),n("a",{staticClass:"compare",on:{click:function(e){t.wall.count.compareAll=!t.wall.count.compareAll}}},[t._v("\n          "+t._s(t.wall.count.compareAll?"All":"One")+"\n        ")])]),t._v(" "),n("div",{staticClass:"counts"},t._l(t.html.count,function(e){return n("div",{key:e.attr,class:"count-"+e.attr+" count"},[n("div",{staticClass:"flex"},[n("i",{class:"fa fa-"+e.icon,attrs:{"aria-hidden":"true"}}),t._v(" "),n("p",[t._v(t._s(e.name))])]),t._v(" "),n("at-input",{attrs:{disabled:t.process||0===t.wall.count.items[e.attr].state},model:{value:t.wall.count.items[e.attr].count,callback:function(n){t.$set(t.wall.count.items[e.attr],"count",n)},expression:"wall.count.items[item.attr].count"}}),t._v(" "),n("at-radio-group",{attrs:{disabled:t.process},model:{value:t.wall.count.items[e.attr].state,callback:function(n){t.$set(t.wall.count.items[e.attr],"state",n)},expression:"wall.count.items[item.attr].state"}},[n("at-radio-button",{attrs:{label:-1}},[t._v("Меньше")]),t._v(" "),n("at-radio-button",{attrs:{label:0}},[t._v("Выкл.")]),t._v(" "),n("at-radio-button",{attrs:{label:1}},[t._v("Больше")])],1)],1)}))])],1),t._v(" "),t.main.isDeletePosts?[n("hr"),t._v(" "),t._m(0)]:t._e(),t._v(" "),t.process?t._e():[n("hr"),t._v(" "),n("div",{staticClass:"block-preview block"},[t.preview.show?[n("at-button",{attrs:{type:"primary",hollow:""},on:{click:function(e){t.preview.show=!1}}},[t._v("Закрыть")]),t._v(" "),n("div",{staticClass:"block__result"},[n("p",[t._v("Найдены совпадения:")]),t._v(" "),t.preview.loading?[t._v("\n            Загрузка..\n          ")]:t._l(t.preview.ids,function(e){return n("at-tag",{key:e,attrs:{name:e}},[n("a",{attrs:{href:t.getLinkPost(e),target:"_blank",rel:"noopener"}},[t._v(t._s(e))])])})],2)]:n("at-button",{staticClass:"preview-btn",attrs:{type:"info",hollow:""},on:{click:function(e){t.startPreviewPosts()}}},[t._v("\n        Проверить список удаляемых записей\n      ")])],2)],t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"block-buttons block"},[t.process?t._e():n("at-button",{attrs:{type:"error"},on:{click:function(e){t.del.dialog=!0}}},[t._v("\n      Удалить записи с "+t._s(t.main.count.min)+" по "+t._s(t.main.count.max)+"\n    ")]),t._v(" "),t.del.continue&&t.process?n("at-button",{attrs:{type:"primary"},on:{click:function(e){t.del.continue=!1}}},[t._v("\n      Остановить\n    ")]):t._e(),t._v(" "),n("at-modal",{model:{value:t.del.dialog,callback:function(e){t.$set(t.del,"dialog",e)},expression:"del.dialog"}},[n("div",{attrs:{slot:"header"},slot:"header"},[n("span",[t._v("The confirmation")])]),t._v(" "),n("div",{staticStyle:{"text-align":"center"}},[n("p",[t._v("Are you sure you want to start deleting posts?")])]),t._v(" "),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("at-button",{on:{click:function(e){t.del.dialog=!1}}},[t._v("Cancel")]),t._v(" "),n("at-button",{attrs:{type:"error"},on:{click:function(e){t.startDeletePosts()}}},[t._v("Run cleanup")])],1)])],1)],2)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"comments-config block"},[e("h2",[this._v("Параметры комментарий")])])}]};var k=n("VU/8")(h,_,!1,function(t){n("zTk2")},"data-v-d6ff6a1a",null);e.default=k.exports},zTk2:function(t,e){}});
//# sourceMappingURL=2.757e51a2cbd4b8685247.js.map