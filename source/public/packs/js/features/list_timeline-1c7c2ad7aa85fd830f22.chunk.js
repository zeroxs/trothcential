(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{822:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return x}));var s,n,o,a=i(0),l=i(5),c=i(1),d=i.n(c),r=i(9),p=i(2),u=i.n(p),h=i(810),m=i(205),b=i(207),f=i(202),O=i(123),j=i(3),v=i(209),g=i(20),y=i(23),M=i(21),_=i(808),C=i(80),w=i(13),I=i(814),k=Object(j.f)({deleteMessage:{id:"confirmations.delete_list.message",defaultMessage:"Are you sure you want to permanently delete this list?"},deleteConfirm:{id:"confirmations.delete_list.confirm",defaultMessage:"Delete"},followed:{id:"lists.replies_policy.followed",defaultMessage:"Any followed user"},none:{id:"lists.replies_policy.none",defaultMessage:"No one"},list:{id:"lists.replies_policy.list",defaultMessage:"Members of the list"}}),x=Object(r.connect)((function(e,t){return{list:e.getIn(["lists",t.params.id]),hasUnread:e.getIn(["timelines","list:"+t.params.id,"unread"])>0}}))(s=Object(j.g)((o=n=function(e){function t(){for(var t,i=arguments.length,s=new Array(i),n=0;n<i;n++)s[n]=arguments[n];return(t=e.call.apply(e,[this].concat(s))||this).handlePin=function(){var e=t.props,i=e.columnId,s=e.dispatch;i?s(Object(O.h)(i)):(s(Object(O.e)("LIST",{id:t.props.params.id})),t.context.router.history.push("/"))},t.handleMove=function(e){var i=t.props,s=i.columnId;(0,i.dispatch)(Object(O.g)(s,e))},t.handleHeaderClick=function(){t.column.scrollTop()},t.setRef=function(e){t.column=e},t.handleLoadMore=function(e){var i=t.props.params.id;t.props.dispatch(Object(g.v)(i,{maxId:e}))},t.handleEditClick=function(){t.props.dispatch(Object(M.d)("LIST_EDITOR",{listId:t.props.params.id}))},t.handleDeleteClick=function(){var e=t.props,i=e.dispatch,s=e.columnId,n=e.intl,o=t.props.params.id;i(Object(M.d)("CONFIRM",{message:n.formatMessage(k.deleteMessage),confirm:n.formatMessage(k.deleteConfirm),onConfirm:function(){i(Object(y.F)(o)),s?i(Object(O.h)(s)):t.context.router.history.push("/lists")}}))},t.handleRepliesPolicyChange=function(e){var i=e.target,s=t.props.dispatch,n=t.props.params.id;s(Object(y.Q)(n,void 0,!1,i.value))},t}Object(l.a)(t,e);var i=t.prototype;return i.componentDidMount=function(){var e=this.props.dispatch,t=this.props.params.id;e(Object(y.G)(t)),e(Object(g.v)(t)),this.disconnect=e(Object(v.d)(t))},i.componentWillReceiveProps=function(e){var t=this.props.dispatch,i=e.params.id;i!==this.props.params.id&&(this.disconnect&&(this.disconnect(),this.disconnect=null),t(Object(y.G)(i)),t(Object(g.v)(i)),this.disconnect=t(Object(v.d)(i)))},i.componentWillUnmount=function(){this.disconnect&&(this.disconnect(),this.disconnect=null)},i.render=function(){var e=this,t=this.props,i=t.shouldUpdateScroll,s=t.hasUnread,n=t.columnId,o=t.multiColumn,l=t.list,c=t.intl,r=this.props.params.id,p=!!n,u=l?l.get("title"):r,O=l?l.get("replies_policy"):void 0;return void 0===l?Object(a.a)(m.a,{},void 0,Object(a.a)("div",{className:"scrollable"},void 0,Object(a.a)(C.a,{}))):!1===l?Object(a.a)(m.a,{},void 0,Object(a.a)(b.a,{multiColumn:o}),Object(a.a)(_.a,{})):d.a.createElement(m.a,{bindToDocument:!o,ref:this.setRef,label:u},Object(a.a)(f.a,{icon:"list-ul",active:s,title:u,onPin:this.handlePin,onMove:this.handleMove,onClick:this.handleHeaderClick,pinned:p,multiColumn:o},void 0,Object(a.a)("div",{className:"column-settings__row column-header__links"},void 0,Object(a.a)("button",{className:"text-btn column-header__setting-btn",tabIndex:"0",onClick:this.handleEditClick},void 0,Object(a.a)(w.a,{id:"pencil"})," ",Object(a.a)(j.b,{id:"lists.edit",defaultMessage:"Edit list"})),Object(a.a)("button",{className:"text-btn column-header__setting-btn",tabIndex:"0",onClick:this.handleDeleteClick},void 0,Object(a.a)(w.a,{id:"trash"})," ",Object(a.a)(j.b,{id:"lists.delete",defaultMessage:"Delete list"}))),void 0!==O&&Object(a.a)("div",{role:"group","aria-labelledby":"list-"+r+"-replies-policy"},void 0,Object(a.a)("span",{id:"list-"+r+"-replies-policy",className:"column-settings__section"},void 0,Object(a.a)(j.b,{id:"lists.replies_policy.title",defaultMessage:"Show replies to:"})),Object(a.a)("div",{className:"column-settings__row"},void 0,["none","list","followed"].map((function(t){return Object(a.a)(I.a,{name:"order",value:t,label:c.formatMessage(k[t]),checked:O===t,onChange:e.handleRepliesPolicyChange},t)}))))),Object(a.a)(h.a,{trackScroll:!p,scrollKey:"list_timeline-"+n,timelineId:"list:"+r,onLoadMore:this.handleLoadMore,emptyMessage:Object(a.a)(j.b,{id:"empty_column.list",defaultMessage:"There is nothing in this list yet. When members of this list post new statuses, they will appear here."}),shouldUpdateScroll:i,bindToDocument:!o}))},t}(d.a.PureComponent),n.contextTypes={router:u.a.object},s=o))||s)||s}}]);
//# sourceMappingURL=list_timeline-1c7c2ad7aa85fd830f22.chunk.js.map