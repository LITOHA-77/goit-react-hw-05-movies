"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[567],{2967:function(t,e,n){n.d(e,{Hg:function(){return p},tx:function(){return w},x$:function(){return v},z1:function(){return f},zv:function(){return d}});var r=n(5861),a=n(7757),c=n.n(a),u=n(4569),o=n.n(u),i="15859190bf14b9d850903e894168e9e6",s="https://api.themoviedb.org/3/";function p(){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function t(){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o().get("".concat(s,"trending/movie/day?api_key=").concat(i));case 3:return e=t.sent,n=e.data.results.map((function(t){return{id:t.id,movieName:t.original_title}})),t.abrupt("return",n);case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function f(t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o().get("".concat(s,"search/movie?api_key=").concat(i,"&language=en-US&query=").concat(e,"&page=1&include_adult=true"));case 3:return n=t.sent,r=n.data.results.map((function(t){return{id:t.id,movieName:t.original_title}})),t.abrupt("return",r);case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function v(t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o().get("".concat(s,"movie/").concat(e,"?api_key=").concat(i,"&language=en-US"));case 3:return n=t.sent,r=[n.data].map((function(t){return{poster:"https://image.tmdb.org/t/p/w500/".concat(t.poster_path),tag:t.tagline,movieName:t.original_title,userScore:10*t.vote_average,overview:t.overview,genres:t.genres.map((function(t){return t.name}))}})),t.abrupt("return",r);case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function d(t){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o().get("".concat(s,"movie/").concat(e,"/credits?api_key=").concat(i,"&language=en-US"));case 3:return n=t.sent,r=n.data.cast.map((function(t){return{castId:t.cast_id,name:t.original_name,character:t.character,photo:"https://image.tmdb.org/t/p/w500/".concat(t.profile_path)}})),t.abrupt("return",r);case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function w(t){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o().get("".concat(s,"movie/").concat(e,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 3:return n=t.sent,r=n.data.results.map((function(t){return{revId:t.id,author:t.author,review:t.content}})),t.abrupt("return",r);case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}},9567:function(t,e,n){n.r(e),n.d(e,{default:function(){return l}});var r=n(885),a=n(2791),c=n(3504),u=n(6871),o="PageHeading_title__1wPIF",i=n(184);function s(t){var e=t.text;return(0,i.jsx)("h1",{className:o,children:e})}var p=n(2967);function l(){var t=(0,a.useState)(),e=(0,r.Z)(t,2),n=e[0],o=e[1],l=(0,u.TH)();return(0,a.useEffect)((function(){p.Hg().then(o)}),[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s,{text:"Trending today"}),n&&(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("ul",{children:n.map((function(t){return(0,i.jsx)("li",{children:(0,i.jsx)(c.rU,{to:{pathname:"/movies/".concat(t.id)},state:{from:l.pathname},children:t.movieName})},t.id)}))})})]})}}}]);
//# sourceMappingURL=567.a8fa3760.chunk.js.map