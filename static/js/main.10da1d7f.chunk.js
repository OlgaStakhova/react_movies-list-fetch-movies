(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{14:function(e,t,i){},15:function(e,t,i){},16:function(e,t,i){},18:function(e,t,i){},19:function(e,t,i){"use strict";i.r(t);var c=i(6),s=i.n(c),a=(i(13),i(2)),n=i(1),r=(i(14),i(15),i(16),i(0)),l=function(e){var t=e.movie;return Object(r.jsxs)("div",{className:"card","data-cy":"movieCard",children:[Object(r.jsx)("div",{className:"card-image",children:Object(r.jsx)("figure",{className:"image is-4by3",children:Object(r.jsx)("img",{"data-cy":"moviePoster",src:t.imgUrl?t.imgUrl:"images/defaultPoster.png",alt:"Film logo"})})}),Object(r.jsxs)("div",{className:"card-content",children:[Object(r.jsxs)("div",{className:"media",children:[Object(r.jsx)("div",{className:"media-left",children:Object(r.jsx)("figure",{className:"image is-48x48",children:Object(r.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(r.jsx)("div",{className:"media-content",children:Object(r.jsx)("p",{className:"title is-8","data-cy":"movieTitle",children:t.title})})]}),Object(r.jsxs)("div",{className:"content","data-cy":"movieDescription",children:[t.description,Object(r.jsx)("br",{}),Object(r.jsx)("a",{href:t.imdbUrl,"data-cy":"movieURL",children:"IMDB"})]})]})]})},d=function(e){var t=e.movies;return Object(r.jsx)("div",{className:"movies",children:t.map((function(e){return Object(r.jsx)(l,{movie:e},e.imdbId)}))})},o=i(8),j=i(7),m=i.n(j);i(18);var b=function(e){var t=e.setMovie,i=e.movie,c=e.setMovies,s=e.movies,d=Object(n.useState)(""),j=Object(a.a)(d,2),b=j[0],u=j[1],v=Object(n.useState)(null),h=Object(a.a)(v,2),O=h[0],x=h[1],f=Object(n.useState)(!1),p=Object(a.a)(f,2),g=p[0],N=p[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("form",{className:"find-movie",children:[Object(r.jsxs)("div",{className:"field",children:[Object(r.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("input",{"data-cy":"titleField",type:"text",id:"movie-title",placeholder:"Enter a title to search",className:"input is-dander",value:b,onChange:function(e){return u(e.target.value)}})}),Object(r.jsx)("p",{className:"help is-danger","data-cy":"errorMessage",children:O&&!i&&"False"===O.Response&&""===b&&O.Error})]}),Object(r.jsxs)("div",{className:"field is-grouped",children:[Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("button",{"data-cy":"searchButton",type:"submit",className:m()("button","is-light",{"is-loading":g}),disabled:""===b.trim(),onClick:function(e){e.preventDefault(),N(!0),function(e){return fetch("".concat("https://www.omdbapi.com/?apikey=52a93447","&t=").concat(e)).then((function(e){return e.json()})).catch((function(){return{Response:"False",Error:"unexpected error"}}))}(b).then((function(e){N(!1);var i,c=e;if("Error"in c)x(c);else{var s={title:(i=c).Title,description:i.Plot,imgUrl:i.Poster,imdbUrl:i.imdbID,imdbId:i.imdbID};t(s)}})),u(""),t(null)},children:"Find a movie"})}),Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("button",{"data-cy":"addButton",type:"button",className:"button is-primary",onClick:function(){if(i&&s.some((function(e){return e.imdbId===i.imdbId})))return t(null),void x(null);i&&(c([].concat(Object(o.a)(s),[i])),t(null),x(null))},disabled:!i,children:"Add to the list"})})]})]}),Object(r.jsxs)("div",{className:"container","data-cy":"previewContainer",children:[Object(r.jsx)("h2",{className:"title",children:"Preview"}),i&&Object(r.jsx)(l,{movie:i})]})]})},u=function(){var e=Object(n.useState)([]),t=Object(a.a)(e,2),i=t[0],c=t[1],s=Object(n.useState)(null),l=Object(a.a)(s,2),o=l[0],j=l[1];return Object(r.jsxs)("div",{className:"page",children:[Object(r.jsx)("div",{className:"page-content",children:Object(r.jsx)(d,{movies:i})}),Object(r.jsx)("div",{className:"sidebar",children:Object(r.jsx)(b,{setMovie:j,movie:o,setMovies:c,movies:i})})]})};s.a.render(Object(r.jsx)(u,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.10da1d7f.chunk.js.map