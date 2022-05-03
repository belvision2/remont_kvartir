
; /* Start:"a:4:{s:4:"full";s:32:"/js/inputmask.js?157605086488562";s:6:"source";s:16:"/js/inputmask.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
!function(n){function a(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,a),t.l=!0,t.exports}var i={};a.m=n,a.c=i,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=3)}([function(e,t,n){"use strict";var a,i,r;i=[n(2)],void 0!==(r="function"==typeof(a=function(e){return e})?a.apply(t,i):a)&&(e.exports=r)},function(e,t,n){"use strict";var a,i,r,le="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};i=[n(0),n(10),n(11)],void 0!==(r="function"==typeof(a=function(J,X,ee,te){function ne(e,t,n){if(!(this instanceof ne))return new ne(e,t,n);this.el=te,this.events={},this.maskset=te,this.refreshValue=!1,!0!==n&&(J.isPlainObject(e)?t=e:(t=t||{}).alias=e,this.opts=J.extend(!0,{},this.defaults,t),this.noMasksCache=t&&t.definitions!==te,this.userOptions=t||{},this.isRTL=this.opts.numericInput,u(this.opts.alias,t,this.opts))}function u(e,t,n){var a=ne.prototype.aliases[e];return a?(a.alias&&u(a.alias,te,n),J.extend(!0,n,a),J.extend(!0,n,t),!0):(null===n.mask&&(n.mask=e),!1)}function o(n,s){function e(e,t,n){var a=!1;if(null!==e&&""!==e||((a=null!==n.regex)?e=(e=n.regex).replace(/^(\^)(.*)(\$)$/,"$2"):(a=!0,e=".*")),1===e.length&&!1===n.greedy&&0!==n.repeat&&(n.placeholder=""),n.repeat>0||"*"===n.repeat||"+"===n.repeat){var i="*"===n.repeat?0:"+"===n.repeat?1:n.repeat;e=n.groupmarker.start+e+n.groupmarker.end+n.quantifiermarker.start+i+","+n.repeat+n.quantifiermarker.end}var r,o=a?"regex_"+n.regex:n.numericInput?e.split("").reverse().join(""):e;return ne.prototype.masksCache[o]===te||!0===s?(r={mask:e,maskToken:ne.prototype.analyseMask(e,a,n),validPositions:{},_buffer:te,buffer:te,tests:{},metadata:t,maskLength:te},!0!==s&&(ne.prototype.masksCache[o]=r,r=J.extend(!0,{},ne.prototype.masksCache[o]))):r=J.extend(!0,{},ne.prototype.masksCache[o]),r}if(J.isFunction(n.mask)&&(n.mask=n.mask(n)),J.isArray(n.mask)){if(n.mask.length>1){n.keepStatic=null===n.keepStatic||n.keepStatic;var a=n.groupmarker.start;return J.each(n.numericInput?n.mask.reverse():n.mask,function(e,t){a.length>1&&(a+=n.groupmarker.end+n.alternatormarker+n.groupmarker.start),t.mask===te||J.isFunction(t.mask)?a+=t:a+=t.mask}),a+=n.groupmarker.end,e(a,n.mask,n)}n.mask=n.mask.pop()}return n.mask&&n.mask.mask!==te&&!J.isFunction(n.mask.mask)?e(n.mask.mask,n.mask,n):e(n.mask,n.mask,n)}function ae(e,t,F){function i(e,t,n){t=t||0;var a,i,r,o=[],s=0,l=A();do{!0===e&&T().validPositions[s]?(i=(r=T().validPositions[s]).match,a=r.locator.slice(),o.push(!0===n?r.input:!1===n?i.nativeDef:j(s,i))):(i=(r=k(s,a,s-1)).match,a=r.locator.slice(),(!1===F.jitMasking||s<l||"number"==typeof F.jitMasking&&isFinite(F.jitMasking)&&F.jitMasking>s)&&o.push(!1===n?i.nativeDef:j(s,i))),s++}while((G===te||s<G)&&(null!==i.fn||""!==i.def)||t>s);return""===o[o.length-1]&&o.pop(),T().maskLength=s+1,o}function T(){return t}function w(e){var t=T();t.buffer=te,!0!==e&&(t.validPositions={},t.p=0)}function A(e,t,n){var a=-1,i=-1,r=n||T().validPositions;e===te&&(e=-1);for(var o in r){var s=parseInt(o);r[s]&&(t||!0!==r[s].generatedInput)&&(s<=e&&(a=s),s>=e&&(i=s))}return-1!==a&&e-a>1||i<e?a:i}function y(e,t,n,a){var i,r=e,o=J.extend(!0,{},T().validPositions),s=!1;for(T().p=e,i=t-1;i>=r;i--)T().validPositions[i]!==te&&(!0!==n&&(!T().validPositions[i].match.optionality&&function(e){var t=T().validPositions[e];if(t!==te&&null===t.match.fn){var n=T().validPositions[e-1],a=T().validPositions[e+1];return n!==te&&a!==te}return!1}(i)||!1===F.canClearPosition(T(),i,A(),a,F))||delete T().validPositions[i]);for(w(!0),i=r+1;i<=A();){for(;T().validPositions[r]!==te;)r++;if(i<r&&(i=r+1),T().validPositions[i]===te&&M(i))i++;else{var l=k(i);!1===s&&o[r]&&o[r].match.def===l.match.def?(T().validPositions[r]=J.extend(!0,{},o[r]),T().validPositions[r].input=l.input,delete T().validPositions[i],i++):b(r,l.match.def)?!1!==R(r,l.input||j(i),!0)&&(delete T().validPositions[i],i++,s=!0):M(i)||(i++,r--),r++}}w(!0)}function d(e,t){for(var n,a=e,i=A(),r=T().validPositions[i]||S(0)[0],o=r.alternation!==te?r.locator[r.alternation].toString().split(","):[],s=0;s<a.length&&(!((n=a[s]).match&&(F.greedy&&!0!==n.match.optionalQuantifier||(!1===n.match.optionality||!1===n.match.newBlockMarker)&&!0!==n.match.optionalQuantifier)&&(r.alternation===te||r.alternation!==n.alternation||n.locator[r.alternation]!==te&&O(n.locator[r.alternation].toString().split(","),o)))||!0===t&&(null!==n.match.fn||/[0-9a-bA-Z]/.test(n.match.def)));s++);return n}function k(e,t,n){return T().validPositions[e]||d(S(e,t?t.slice():t,n))}function s(e){return T().validPositions[e]?T().validPositions[e]:S(e)[0]}function b(e,t){for(var n=!1,a=S(e),i=0;i<a.length;i++)if(a[i].match&&a[i].match.def===t){n=!0;break}return n}function S(R,e,t){function M(E,C,e,t){function O(e,n,t){function r(n,a){var i=0===J.inArray(n,a.matches);return i||J.each(a.matches,function(e,t){if(!0===t.isQuantifier&&(i=r(n,a.matches[e-1])))return!1}),i}function l(e,i,r){var o,s;if(T().validPositions[e-1]&&r&&T().tests[e])for(var t=T().validPositions[e-1].locator,n=T().tests[e][0].locator,a=0;a<r;a++)if(t[a]!==n[a])return t.slice(r+1);return(T().tests[e]||T().validPositions[e])&&J.each(T().tests[e]||[T().validPositions[e]],function(e,t){var n=r!==te?r:t.alternation,a=t.locator[n]!==te?t.locator[n].toString().indexOf(i):-1;(s===te||a<s)&&-1!==a&&(o=t,s=a)}),o?o.locator.slice((r!==te?r:o.alternation)+1):r!==te?l(e,i):te}if(D>1e4)throw"Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. "+T().mask;if(D===R&&e.matches===te)return j.push({match:e,locator:n.reverse(),cd:I}),!0;if(e.matches!==te){if(e.isGroup&&t!==e){if(e=O(E.matches[J.inArray(e,E.matches)+1],n))return!0}else if(e.isOptional){var a=e;if(e=M(e,C,n,t)){if(_=j[j.length-1].match,!r(_,a))return!0;N=!0,D=R}}else if(e.isAlternator){var i,o=e,s=[],c=j.slice(),u=n.length,p=C.length>0?C.shift():-1;if(-1===p||"string"==typeof p){var f,d=D,m=C.slice(),h=[];if("string"==typeof p)h=p.split(",");else for(f=0;f<o.matches.length;f++)h.push(f);for(var g=0;g<h.length;g++){if(f=parseInt(h[g]),j=[],C=l(D,f,u)||m.slice(),!0!==(e=O(o.matches[f]||E.matches[f],[f].concat(n),t)||e)&&e!==te&&h[h.length-1]<o.matches.length){var v=J.inArray(e,E.matches)+1;E.matches.length>v&&(e=O(E.matches[v],[v].concat(n.slice(1,n.length)),t))&&(h.push(v.toString()),J.each(j,function(e,t){t.alternation=n.length-1}))}i=j.slice(),D=d,j=[];for(var y=0;y<i.length;y++){var k=i[y],b=!1;k.alternation=k.alternation||u;for(var x=0;x<s.length;x++){var P=s[x];if("string"!=typeof p||-1!==J.inArray(k.locator[k.alternation].toString(),h)){if(function(e,t){return e.match.nativeDef===t.match.nativeDef||e.match.def===t.match.nativeDef||e.match.nativeDef===t.match.def}(k,P)){b=!0,k.alternation===P.alternation&&-1===P.locator[P.alternation].toString().indexOf(k.locator[k.alternation])&&(P.locator[P.alternation]=P.locator[P.alternation]+","+k.locator[k.alternation],P.alternation=k.alternation),k.match.nativeDef===P.match.def&&(k.locator[k.alternation]=P.locator[P.alternation],s.splice(s.indexOf(P),1,k));break}if(k.match.def===P.match.def){b=!1;break}if(function(e,t){return null===e.match.fn&&null!==t.match.fn&&t.match.fn.test(e.match.def,T(),R,!1,F,!1)}(k,P)||function(e,t){return null!==e.match.fn&&null!==t.match.fn&&t.match.fn.test(e.match.def.replace(/[\[\]]/g,""),T(),R,!1,F,!1)}(k,P)){k.alternation===P.alternation&&-1===k.locator[k.alternation].toString().indexOf(P.locator[P.alternation].toString().split("")[0])&&(k.na=k.na||k.locator[k.alternation].toString(),-1===k.na.indexOf(k.locator[k.alternation].toString().split("")[0])&&(k.na=k.na+","+k.locator[P.alternation].toString().split("")[0]),b=!0,k.locator[k.alternation]=P.locator[P.alternation].toString().split("")[0]+","+k.locator[k.alternation],s.splice(s.indexOf(P),0,k));break}}}b||s.push(k)}}"string"==typeof p&&(s=J.map(s,function(e,t){if(isFinite(t)){var n=e.alternation,a=e.locator[n].toString().split(",");e.locator[n]=te,e.alternation=te;for(var i=0;i<a.length;i++)-1!==J.inArray(a[i],h)&&(e.locator[n]!==te?(e.locator[n]+=",",e.locator[n]+=a[i]):e.locator[n]=parseInt(a[i]),e.alternation=n);if(e.locator[n]!==te)return e}})),j=c.concat(s),D=R,N=j.length>0,e=s.length>0,C=m.slice()}else e=O(o.matches[p]||E.matches[p],[p].concat(n),t);if(e)return!0}else if(e.isQuantifier&&t!==E.matches[J.inArray(e,E.matches)-1])for(var w=e,A=C.length>0?C.shift():0;A<(isNaN(w.quantifier.max)?A+1:w.quantifier.max)&&D<=R;A++){var S=E.matches[J.inArray(w,E.matches)-1];if(e=O(S,[A].concat(n),S)){if(_=j[j.length-1].match,_.optionalQuantifier=A>w.quantifier.min-1,r(_,S)){if(A>w.quantifier.min-1){N=!0,D=R;break}return!0}return!0}}else if(e=M(e,C,n,t))return!0}else D++}for(var n=C.length>0?C.shift():0;n<E.matches.length;n++)if(!0!==E.matches[n].isQuantifier){var a=O(E.matches[n],[n].concat(e),t);if(a&&D===R)return a;if(D>R)break}}function n(e){if(F.keepStatic&&R>0&&e.length>1+(""===e[e.length-1].match.def?1:0)&&!0!==e[0].match.optionality&&!0!==e[0].match.optionalQuantifier&&null===e[0].match.fn&&!/[0-9a-bA-Z]/.test(e[0].match.def)){if(T().validPositions[R-1]===te)return[d(e)];if(T().validPositions[R-1].alternation===e[0].alternation)return[d(e)];if(T().validPositions[R-1])return[d(e)]}return e}var _,a=T().maskToken,D=e?t:0,i=e?e.slice():[0],j=[],N=!1,I=e?e.join(""):"";if(R>-1){if(e===te){for(var r,o=R-1;(r=T().validPositions[o]||T().tests[o])===te&&o>-1;)o--;r!==te&&o>-1&&(i=function(e){var a=[];return J.isArray(e)||(e=[e]),e.length>0&&(e[0].alternation===te?0===(a=d(e.slice()).locator.slice()).length&&(a=e[0].locator.slice()):J.each(e,function(e,t){if(""!==t.def)if(0===a.length)a=t.locator.slice();else for(var n=0;n<a.length;n++)t.locator[n]&&-1===a[n].toString().indexOf(t.locator[n])&&(a[n]+=","+t.locator[n])})),a}(r),I=i.join(""),D=o)}if(T().tests[R]&&T().tests[R][0].cd===I)return n(T().tests[R]);for(var s=i.shift();s<a.length&&!(M(a[s],i,[s])&&D===R||D>R);s++);}return(0===j.length||N)&&j.push({match:{fn:null,cardinality:0,optionality:!0,casing:null,def:"",placeholder:""},locator:[],cd:I}),e!==te&&T().tests[R]?n(J.extend(!0,[],j)):(T().tests[R]=J.extend(!0,[],j),n(T().tests[R]))}function g(){return T()._buffer===te&&(T()._buffer=i(!1,1),T().buffer===te&&(T().buffer=T()._buffer.slice())),T()._buffer}function x(e){return T().buffer!==te&&!0!==e||(T().buffer=i(!0,A(),!0)),T().buffer}function E(e,t,n){var a,i;if(!0===e)w(),e=0,t=n.length;else for(a=e;a<t;a++)delete T().validPositions[a];for(i=e,a=e;a<t;a++)if(w(!0),n[a]!==F.skipOptionalPartCharacter){var r=R(i,n[a],!0,!0);!1!==r&&(w(!0),i=r.caret!==te?r.caret:r.pos+1)}}function C(e,t,n){switch(F.casing||t.casing){case"upper":e=e.toUpperCase();break;case"lower":e=e.toLowerCase();break;case"title":var a=T().validPositions[n-1];e=0===n||a&&a.input===String.fromCharCode(ne.keyCode.SPACE)?e.toUpperCase():e.toLowerCase();break;default:if(J.isFunction(F.casing)){var i=Array.prototype.slice.call(arguments);i.push(T().validPositions),e=F.casing.apply(this,i)}}return e}function O(e,t,n){for(var a,i=F.greedy?t:t.slice(0,1),r=!1,o=n!==te?n.split(","):[],s=0;s<o.length;s++)-1!==(a=e.indexOf(o[s]))&&e.splice(a,1);for(var l=0;l<e.length;l++)if(-1!==J.inArray(e[l],i)){r=!0;break}return r}function R(m,e,t,P,n,a){function h(e){var t=U?e.begin-e.end>1||e.begin-e.end==1:e.end-e.begin>1||e.end-e.begin==1;return t&&0===e.begin&&e.end===T().maskLength?"full":t}function r(u,p,f){var d=!1;return J.each(S(u),function(e,t){for(var n=t.match,a=p?1:0,i="",r=n.cardinality;r>a;r--)i+=D(u-(r-1));if(p&&(i+=p),x(!0),!1!==(d=null!=n.fn?n.fn.test(i,T(),u,f,F,h(m)):(p===n.def||p===F.skipOptionalPartCharacter)&&""!==n.def&&{c:j(u,n,!0)||n.def,pos:u})){var o=d.c!==te?d.c:p;o=o===F.skipOptionalPartCharacter&&null===n.fn?j(u,n,!0)||n.def:o;var s=u,l=x();if(d.remove!==te&&(J.isArray(d.remove)||(d.remove=[d.remove]),J.each(d.remove.sort(function(e,t){return t-e}),function(e,t){y(t,t+1,!0)})),d.insert!==te&&(J.isArray(d.insert)||(d.insert=[d.insert]),J.each(d.insert.sort(function(e,t){return e-t}),function(e,t){R(t.pos,t.c,!0,P)})),d.refreshFromBuffer){var c=d.refreshFromBuffer;if(E(!0===c?c:c.start,c.end,l),d.pos===te&&d.c===te)return d.pos=A(),!1;if((s=d.pos!==te?d.pos:u)!==u)return d=J.extend(d,R(s,o,!0,P)),!1}else if(!0!==d&&d.pos!==te&&d.pos!==u&&(s=d.pos,E(u,s,x().slice()),s!==u))return d=J.extend(d,R(s,o,!0)),!1;return(!0===d||d.pos!==te||d.c!==te)&&(e>0&&w(!0),g(s,J.extend({},t,{input:C(o,n,s)}),P,h(m))||(d=!1),!1)}}),d}function g(e,t,n,a){if(a||F.insertMode&&T().validPositions[e]!==te&&n===te){var i,r=J.extend(!0,{},T().validPositions),o=A(te,!0);for(i=e;i<=o;i++)delete T().validPositions[i];T().validPositions[e]=J.extend(!0,{},t);var s,l=!0,c=T().validPositions,u=!1,p=T().maskLength;for(i=s=e;i<=o;i++){var f=r[i];if(f!==te)for(var d=s;d<T().maskLength&&(null===f.match.fn&&c[i]&&(!0===c[i].match.optionalQuantifier||!0===c[i].match.optionality)||null!=f.match.fn);){if(d++,!1===u&&r[d]&&r[d].match.def===f.match.def)T().validPositions[d]=J.extend(!0,{},r[d]),T().validPositions[d].input=f.input,v(d),s=d,l=!0;else if(b(d,f.match.def)){var m=R(d,f.input,!0,!0);l=!1!==m,s=m.caret||m.insert?A():d,u=!0}else if(!(l=!0===f.generatedInput)&&d>=T().maskLength-1)break;if(T().maskLength<p&&(T().maskLength=p),l)break}if(!l)break}if(!l)return T().validPositions=J.extend(!0,{},r),w(!0),!1}else T().validPositions[e]=J.extend(!0,{},t);return w(!0),!0}function v(e){for(var t=e-1;t>-1&&!T().validPositions[t];t--);var n,a;for(t++;t<e;t++)T().validPositions[t]===te&&(!1===F.jitMasking||F.jitMasking>t)&&(""===(a=S(t,k(t-1).locator,t-1).slice())[a.length-1].match.def&&a.pop(),(n=d(a))&&(n.match.def===F.radixPointDefinitionSymbol||!M(t,!0)||J.inArray(F.radixPoint,x())<t&&n.match.fn&&n.match.fn.test(j(t),T(),t,!1,F))&&!1!==(o=r(t,j(t,n.match,!0)||(null==n.match.fn?n.match.def:""!==j(t)?j(t):x()[t]),!0))&&(T().validPositions[o.pos||t].generatedInput=!0))}t=!0===t;var i=m;m.begin!==te&&(i=U&&!h(m)?m.end:m.begin);var o=!0,s=J.extend(!0,{},T().validPositions);if(J.isFunction(F.preValidation)&&!t&&!0!==P&&!0!==a&&(o=F.preValidation(x(),i,e,h(m),F)),!0===o){if(v(i),h(m)&&(N(te,ne.keyCode.DELETE,m,!0,!0),i=T().p),i<T().maskLength&&(G===te||i<G)&&(o=r(i,e,t),(!t||!0===P)&&!1===o&&!0!==a)){var l=T().validPositions[i];if(!l||null!==l.match.fn||l.match.def!==e&&e!==F.skipOptionalPartCharacter){if((F.insertMode||T().validPositions[_(i)]===te)&&!M(i,!0))for(var c=i+1,u=_(i);c<=u;c++)if(!1!==(o=r(c,e,t))){!function(e,t){var n=T().validPositions[t];if(n)for(var o=n.locator,s=o.length,a=e;a<t;a++)if(T().validPositions[a]===te&&!M(a,!0)){var i=S(a).slice(),l=d(i,!0),c=-1;""===i[i.length-1].match.def&&i.pop(),J.each(i,function(e,t){for(var n=0;n<s;n++){if(t.locator[n]===te||!O(t.locator[n].toString().split(","),o[n].toString().split(","),t.na)){var a=o[n],i=l.locator[n],r=t.locator[n];a-i>Math.abs(a-r)&&(l=t);break}c<n&&(c=n,l=t)}}),(l=J.extend({},l,{input:j(a,l.match,!0)||l.match.def})).generatedInput=!0,g(a,l,!0),T().validPositions[t]=te,r(t,n.input,!0)}}(i,o.pos!==te?o.pos:c),i=c;break}}else o={caret:_(i)}}!1===o&&F.keepStatic&&!t&&!0!==n&&(o=function(u,p,f){var e,d,t,n,m,h,g,v,y=J.extend(!0,{},T().validPositions),k=!1,a=A();for(n=T().validPositions[a];a>=0;a--)if((t=T().validPositions[a])&&t.alternation!==te){if(e=a,d=T().validPositions[e].alternation,n.locator[t.alternation]!==t.locator[t.alternation])break;n=t}if(d!==te){v=parseInt(e);var b=n.locator[n.alternation||d]!==te?n.locator[n.alternation||d]:g[0];b.length>0&&(b=b.split(",")[0]);var x=T().validPositions[v],i=T().validPositions[v-1];J.each(S(v,i?i.locator:te,v-1),function(e,t){g=t.locator[d]?t.locator[d].toString().split(","):[];for(var n=0;n<g.length;n++){var a=[],i=0,r=0,o=!1;if(b<g[n]&&(t.na===te||-1===J.inArray(g[n],t.na.split(","))||-1===J.inArray(b.toString(),g))){T().validPositions[v]=J.extend(!0,{},t);var s=T().validPositions[v].locator;for(T().validPositions[v].locator[d]=parseInt(g[n]),null==t.match.fn?(x.input!==t.match.def&&(o=!0,!0!==x.generatedInput&&a.push(x.input)),r++,T().validPositions[v].generatedInput=!/[0-9a-bA-Z]/.test(t.match.def),T().validPositions[v].input=t.match.def):T().validPositions[v].input=x.input,m=v+1;m<A(te,!0)+1;m++)(h=T().validPositions[m])&&!0!==h.generatedInput&&/[0-9a-bA-Z]/.test(h.input)?a.push(h.input):m<u&&i++,delete T().validPositions[m];for(o&&a[0]===t.match.def&&a.shift(),w(!0),k=!0;a.length>0;){var l=a.shift();if(l!==F.skipOptionalPartCharacter&&!(k=R(A(te,!0)+1,l,!1,P,!0)))break}if(k){T().validPositions[v].locator=s;var c=A(u)+1;for(m=v+1;m<A()+1;m++)((h=T().validPositions[m])===te||null==h.match.fn)&&m<u+(r-i)&&r++;k=R((u+=r-i)>c?c:u,p,f,P,!0)}if(k)return!1;w(),T().validPositions=J.extend(!0,{},y)}}})}return k}(i,e,t)),!0===o&&(o={pos:i})}if(J.isFunction(F.postValidation)&&!1!==o&&!t&&!0!==P&&!0!==a){var p=F.postValidation(x(!0),o,F);if(p.refreshFromBuffer&&p.buffer){var f=p.refreshFromBuffer;E(!0===f?f:f.start,f.end,p.buffer)}o=!0===p?o:p}return o&&o.pos===te&&(o.pos=i),!1!==o&&!0!==a||(w(!0),T().validPositions=J.extend(!0,{},s)),o}function M(e,t){var n=k(e).match;if(""===n.def&&(n=s(e).match),null!=n.fn)return n.fn;if(!0!==t&&e>-1){var a=S(e);return a.length>1+(""===a[a.length-1].match.def?1:0)}return!1}function _(e,t){var n=T().maskLength;if(e>=n)return n;var a=e;for(S(n+1).length>1&&(i(!0,n+1,!0),n=T().maskLength);++a<n&&(!0===t&&(!0!==s(a).match.newBlockMarker||!M(a))||!0!==t&&!M(a)););return a}function v(e,t){var n,a=e;if(a<=0)return 0;for(;--a>0&&(!0===t&&!0!==s(a).match.newBlockMarker||!0!==t&&!M(a)&&((n=S(a)).length<2||2===n.length&&""===n[1].match.def)););return a}function D(e){return T().validPositions[e]===te?j(e):T().validPositions[e].input}function P(e,t,n,a,i){if(a&&J.isFunction(F.onBeforeWrite)){var r=F.onBeforeWrite.call(L,a,t,n,F);if(r){if(r.refreshFromBuffer){var o=r.refreshFromBuffer;E(!0===o?o:o.start,o.end,r.buffer||t),t=x(!0)}n!==te&&(n=r.caret!==te?r.caret:n)}}e!==te&&(e.inputmask._valueSet(t.join("")),n===te||a!==te&&"blur"===a.type?p(e,n,0===t.length):se&&a&&"input"===a.type?setTimeout(function(){m(e,n)},0):m(e,n),!0===i&&(K=!0,J(e).trigger("input")))}function j(e,t,n){if((t=t||s(e).match).placeholder!==te||!0===n)return J.isFunction(t.placeholder)?t.placeholder(F):t.placeholder;if(null===t.fn){if(e>-1&&T().validPositions[e]===te){var a,i=S(e),r=[];if(i.length>1+(""===i[i.length-1].match.def?1:0))for(var o=0;o<i.length;o++)if(!0!==i[o].match.optionality&&!0!==i[o].match.optionalQuantifier&&(null===i[o].match.fn||a===te||!1!==i[o].match.fn.test(a.match.def,T(),e,!0,F))&&(r.push(i[o]),null===i[o].match.fn&&(a=i[o]),r.length>1&&/[0-9a-bA-Z]/.test(r[0].match.def)))return F.placeholder.charAt(e%F.placeholder.length)}return t.def}return F.placeholder.charAt(e%F.placeholder.length)}function u(c,e,u,t,n){function p(e,t){return-1!==g().slice(e,_(e)).join("").indexOf(t)&&!M(e)&&s(e).match.nativeDef===t.charAt(t.length-1)}var f=t.slice(),d="",m=-1,h=te;if(w(),u||!0===F.autoUnmask)m=_(m);else{var a=g().slice(0,_(-1)).join(""),i=f.join("").match(new RegExp("^"+ne.escapeRegex(a),"g"));i&&i.length>0&&(f.splice(0,i.length*a.length),m=_(m))}if(-1===m?(T().p=_(m),m=0):T().p=m,J.each(f,function(e,t){if(t!==te)if(T().validPositions[e]===te&&f[e]===j(e)&&M(e,!0)&&!1===R(e,f[e],!0,te,te,!0))T().p++;else{var n=new J.Event("_checkval");n.which=t.charCodeAt(0),d+=t;var a=A(te,!0),i=T().validPositions[a],r=k(a+1,i?i.locator.slice():te,a);if(!p(m,d)||u||F.autoUnmask){var o=u?e:null==r.match.fn&&r.match.optionality&&a+1<T().p?a+1:T().p;h=Q.keypressEvent.call(c,n,!0,!1,u,o),m=o+1,d=""}else h=Q.keypressEvent.call(c,n,!0,!1,!0,a+1);if(!1!==h&&!u&&J.isFunction(F.onBeforeWrite)){var s=h;if(h=F.onBeforeWrite.call(L,n,x(),h.forwardPosition,F),(h=J.extend(s,h))&&h.refreshFromBuffer){var l=h.refreshFromBuffer;E(!0===l?l:l.start,l.end,h.buffer),w(!0),h.caret&&(T().p=h.caret,h.forwardPosition=h.caret)}}}}),e){var r=te;ee.activeElement===c&&h&&(r=F.numericInput?v(h.forwardPosition):h.forwardPosition),P(c,x(),r,n||new J.Event("checkval"),n&&"input"===n.type)}}function n(e){if(e){if(e.inputmask===te)return e.value;e.inputmask&&e.inputmask.refreshValue&&Q.setValueEvent.call(e)}var t=[],n=T().validPositions;for(var a in n)n[a].match&&null!=n[a].match.fn&&t.push(n[a].input);var i=0===t.length?"":(U?t.reverse():t).join("");if(J.isFunction(F.onUnMask)){var r=(U?x().slice().reverse():x()).join("");i=F.onUnMask.call(L,r,i,F)}return i}function m(e,t,n,a){function i(e){return!0===a||!U||"number"!=typeof e||F.greedy&&""===F.placeholder||(e=x().join("").length-e),e}var r;if(t===te)return e.setSelectionRange?(t=e.selectionStart,n=e.selectionEnd):X.getSelection?(r=X.getSelection().getRangeAt(0)).commonAncestorContainer.parentNode!==e&&r.commonAncestorContainer!==e||(t=r.startOffset,n=r.endOffset):ee.selection&&ee.selection.createRange&&(n=(t=0-(r=ee.selection.createRange()).duplicate().moveStart("character",-e.inputmask._valueGet().length))+r.text.length),{begin:i(t),end:i(n)};if(t.begin!==te&&(n=t.end,t=t.begin),"number"==typeof t){t=i(t),n="number"==typeof(n=i(n))?n:t;var o=parseInt(((e.ownerDocument.defaultView||X).getComputedStyle?(e.ownerDocument.defaultView||X).getComputedStyle(e,null):e.currentStyle).fontSize)*n;if(e.scrollLeft=o>e.scrollWidth?o:0,ie||!1!==F.insertMode||t!==n||n++,e.setSelectionRange)e.selectionStart=t,e.selectionEnd=n;else if(X.getSelection){if(r=ee.createRange(),e.firstChild===te||null===e.firstChild){var s=ee.createTextNode("");e.appendChild(s)}r.setStart(e.firstChild,t<e.inputmask._valueGet().length?t:e.inputmask._valueGet().length),r.setEnd(e.firstChild,n<e.inputmask._valueGet().length?n:e.inputmask._valueGet().length),r.collapse(!0);var l=X.getSelection();l.removeAllRanges(),l.addRange(r)}else e.createTextRange&&((r=e.createTextRange()).collapse(!0),r.moveEnd("character",n),r.moveStart("character",t),r.select());p(e,{begin:t,end:n})}}function o(e){var t,n,a=x(),i=a.length,r=A(),o={},s=T().validPositions[r],l=s!==te?s.locator.slice():te;for(t=r+1;t<a.length;t++)l=(n=k(t,l,t-1)).locator.slice(),o[t]=J.extend(!0,{},n);var c=s&&s.alternation!==te?s.locator[s.alternation]:te;for(t=i-1;t>r&&(((n=o[t]).match.optionality||n.match.optionalQuantifier&&n.match.newBlockMarker||c&&(c!==o[t].locator[s.alternation]&&null!=n.match.fn||null===n.match.fn&&n.locator[s.alternation]&&O(n.locator[s.alternation].toString().split(","),c.toString().split(","))&&""!==S(t)[0].def))&&a[t]===j(t,n.match));t--)i--;return e?{l:i,def:o[i]?o[i].match:te}:i}function l(e){for(var t,n=o(),a=e.length,i=T().validPositions[A()];n<a&&!M(n,!0)&&(t=i!==te?k(n,i.locator.slice(""),i):s(n))&&!0!==t.match.optionality&&(!0!==t.match.optionalQuantifier&&!0!==t.match.newBlockMarker||n+1===a&&""===(i!==te?k(n+1,i.locator.slice(""),i):s(n+1)).match.def);)n++;for(;(t=T().validPositions[n-1])&&t&&t.match.optionality&&t.input===F.skipOptionalPartCharacter;)n--;return e.splice(n),e}function h(e){if(J.isFunction(F.isComplete))return F.isComplete(e,F);if("*"===F.repeat)return te;var t=!1,n=o(!0),a=v(n.l);if(n.def===te||n.def.newBlockMarker||n.def.optionality||n.def.optionalQuantifier){t=!0;for(var i=0;i<=a;i++){var r=k(i).match;if(null!==r.fn&&T().validPositions[i]===te&&!0!==r.optionality&&!0!==r.optionalQuantifier||null===r.fn&&e[i]!==j(i,r)){t=!1;break}}}return t}function N(o,e,t,n,a){if((F.numericInput||U)&&(e===ne.keyCode.BACKSPACE?e=ne.keyCode.DELETE:e===ne.keyCode.DELETE&&(e=ne.keyCode.BACKSPACE),U)){var i=t.end;t.end=t.begin,t.begin=i}e===ne.keyCode.BACKSPACE&&(t.end-t.begin<1||!1===F.insertMode)?(t.begin=v(t.begin),T().validPositions[t.begin]!==te&&T().validPositions[t.begin].input===F.groupSeparator&&t.begin--):e===ne.keyCode.DELETE&&t.begin===t.end&&(t.end=M(t.end,!0)&&T().validPositions[t.end]&&T().validPositions[t.end].input!==F.radixPoint?t.end+1:_(t.end)+1,T().validPositions[t.begin]!==te&&T().validPositions[t.begin].input===F.groupSeparator&&t.end++),y(t.begin,t.end,!1,n),!0!==n&&function(){if(F.keepStatic){for(var e=[],t=A(-1,!0),n=J.extend(!0,{},T().validPositions),a=T().validPositions[t];t>=0;t--){var i=T().validPositions[t];if(i){if(!0!==i.generatedInput&&/[0-9a-bA-Z]/.test(i.input)&&e.push(i.input),delete T().validPositions[t],i.alternation!==te&&i.locator[i.alternation]!==a.locator[i.alternation])break;a=i}}if(t>-1)for(T().p=_(A(-1,!0));e.length>0;){var r=new J.Event("keypress");r.which=e.pop().charCodeAt(0),Q.keypressEvent.call(o,r,!0,!1,!1,T().p)}else T().validPositions=J.extend(!0,{},n)}}();var r=A(t.begin,!0);if(r<t.begin)T().p=_(r);else if(!0!==n&&(T().p=t.begin,!0!==a))for(;T().p<r&&T().validPositions[T().p]===te;)T().p++}function r(c){function t(e){var t,n=ee.createElement("span");for(var a in u)isNaN(a)&&-1!==a.indexOf("font")&&(n.style[a]=u[a]);n.style.textTransform=u.textTransform,n.style.letterSpacing=u.letterSpacing,n.style.position="absolute",n.style.height="auto",n.style.width="auto",n.style.visibility="hidden",n.style.whiteSpace="nowrap",ee.body.appendChild(n);var i,r=c.inputmask._valueGet(),o=0;for(t=0,i=r.length;t<=i;t++){if(n.innerHTML+=r.charAt(t)||"_",n.offsetWidth>=e){var s=e-o,l=n.offsetWidth-e;n.innerHTML=r.charAt(t),t=(s-=n.offsetWidth/3)<l?t-1:t;break}o=n.offsetWidth}return ee.body.removeChild(n),t}var u=(c.ownerDocument.defaultView||X).getComputedStyle(c,null),e=ee.createElement("div");e.style.width=u.width,e.style.textAlign=u.textAlign,(B=ee.createElement("div")).className="im-colormask",c.parentNode.insertBefore(B,c),c.parentNode.removeChild(c),B.appendChild(e),B.appendChild(c),c.style.left=e.offsetLeft+"px",J(c).on("click",function(e){return m(c,t(e.clientX)),Q.clickEvent.call(c,[e])}),J(c).on("keydown",function(e){e.shiftKey||!1===F.insertMode||setTimeout(function(){p(c)},0)})}function p(t,n,e){function a(){c||null!==r.fn&&o.input!==te?c&&(null!==r.fn&&o.input!==te||""===r.def)&&(c=!1,l+="</span>"):(c=!0,l+="<span class='im-static'>")}function i(e){!0!==e&&u!==n.begin||ee.activeElement!==t||(l+="<span class='im-caret' style='border-right-width: 1px;border-right-style: solid;'></span>")}var r,o,s,l="",c=!1,u=0;if(B!==te){var p=x();if(n===te?n=m(t):n.begin===te&&(n={begin:n,end:n}),!0!==e){var f=A();do{i(),T().validPositions[u]?(o=T().validPositions[u],r=o.match,s=o.locator.slice(),a(),l+=p[u]):(o=k(u,s,u-1),r=o.match,s=o.locator.slice(),(!1===F.jitMasking||u<f||"number"==typeof F.jitMasking&&isFinite(F.jitMasking)&&F.jitMasking>u)&&(a(),l+=j(u,r))),u++}while((G===te||u<G)&&(null!==r.fn||""!==r.def)||f>u||c);-1===l.indexOf("im-caret")&&i(!0),c&&a()}var d=B.getElementsByTagName("div")[0];d.innerHTML=l,t.inputmask.positionColorMask(t,d)}}t=t||this.maskset,F=F||this.opts;var I,c,G,B,L=this,f=this.el,U=this.isRTL,V=!1,K=!1,H=!1,z=!1,q={on:function(e,t,r){var n=function(e){if(this.inputmask===te&&"FORM"!==this.nodeName){var t=J.data(this,"_inputmask_opts");t?new ne(t).mask(this):q.off(this)}else{if("setvalue"===e.type||"FORM"===this.nodeName||!(this.disabled||this.readOnly&&!("keydown"===e.type&&e.ctrlKey&&67===e.keyCode||!1===F.tabThrough&&e.keyCode===ne.keyCode.TAB))){switch(e.type){case"input":if(!0===K)return K=!1,e.preventDefault();break;case"keydown":V=!1,K=!1;break;case"keypress":if(!0===V)return e.preventDefault();V=!0;break;case"click":if(re||oe){var n=this,a=arguments;return setTimeout(function(){r.apply(n,a)},0),!1}}var i=r.apply(this,arguments);return!1===i&&(e.preventDefault(),e.stopPropagation()),i}e.preventDefault()}};e.inputmask.events[t]=e.inputmask.events[t]||[],e.inputmask.events[t].push(n),-1!==J.inArray(t,["submit","reset"])?null!==e.form&&J(e.form).on(t,n):J(e).on(t,n)},off:function(a,e){if(a.inputmask&&a.inputmask.events){var t;e?(t=[])[e]=a.inputmask.events[e]:t=a.inputmask.events,J.each(t,function(e,t){for(;t.length>0;){var n=t.pop();-1!==J.inArray(e,["submit","reset"])?null!==a.form&&J(a.form).off(e,n):J(a).off(e,n)}delete a.inputmask.events[e]})}}},Q={keydownEvent:function(e){var t=this,n=J(t),a=e.keyCode,i=m(t);if(a===ne.keyCode.BACKSPACE||a===ne.keyCode.DELETE||oe&&a===ne.keyCode.BACKSPACE_SAFARI||e.ctrlKey&&a===ne.keyCode.X&&!function(e){var t=ee.createElement("input"),n="on"+e,a=n in t;return a||(t.setAttribute(n,"return;"),a="function"==typeof t[n]),t=null,a}("cut"))e.preventDefault(),N(t,a,i),P(t,x(!0),T().p,e,t.inputmask._valueGet()!==x().join("")),t.inputmask._valueGet()===g().join("")?n.trigger("cleared"):!0===h(x())&&n.trigger("complete");else if(a===ne.keyCode.END||a===ne.keyCode.PAGE_DOWN){e.preventDefault();var r=_(A());F.insertMode||r!==T().maskLength||e.shiftKey||r--,m(t,e.shiftKey?i.begin:r,r,!0)}else a===ne.keyCode.HOME&&!e.shiftKey||a===ne.keyCode.PAGE_UP?(e.preventDefault(),m(t,0,e.shiftKey?i.begin:0,!0)):(F.undoOnEscape&&a===ne.keyCode.ESCAPE||90===a&&e.ctrlKey)&&!0!==e.altKey?(u(t,!0,!1,I.split("")),n.trigger("click")):a!==ne.keyCode.INSERT||e.shiftKey||e.ctrlKey?!0===F.tabThrough&&a===ne.keyCode.TAB?(!0===e.shiftKey?(null===s(i.begin).match.fn&&(i.begin=_(i.begin)),i.end=v(i.begin,!0),i.begin=v(i.end,!0)):(i.begin=_(i.begin,!0),i.end=_(i.begin,!0),i.end<T().maskLength&&i.end--),i.begin<T().maskLength&&(e.preventDefault(),m(t,i.begin,i.end))):e.shiftKey||!1===F.insertMode&&(a===ne.keyCode.RIGHT?setTimeout(function(){var e=m(t);m(t,e.begin)},0):a===ne.keyCode.LEFT&&setTimeout(function(){var e=m(t);m(t,U?e.begin+1:e.begin-1)},0)):(F.insertMode=!F.insertMode,m(t,F.insertMode||i.begin!==T().maskLength?i.begin:i.begin-1));F.onKeyDown.call(this,e,x(),m(t).begin,F),H=-1!==J.inArray(a,F.ignorables)},keypressEvent:function(e,t,n,a,i){var r=this,o=J(r),s=e.which||e.charCode||e.keyCode;if(!(!0===t||e.ctrlKey&&e.altKey)&&(e.ctrlKey||e.metaKey||H))return s===ne.keyCode.ENTER&&I!==x().join("")&&(I=x().join(""),setTimeout(function(){o.trigger("change")},0)),!0;if(s){46===s&&!1===e.shiftKey&&""!==F.radixPoint&&(s=F.radixPoint.charCodeAt(0));var l,c=t?{begin:i,end:i}:m(r),u=String.fromCharCode(s);T().writeOutBuffer=!0;var p=R(c,u,a);if(!1!==p&&(w(!0),l=p.caret!==te?p.caret:t?p.pos+1:_(p.pos),T().p=l),!1!==n&&(setTimeout(function(){F.onKeyValidation.call(r,s,p,F)},0),T().writeOutBuffer&&!1!==p)){var f=x();P(r,f,F.numericInput&&p.caret===te?v(l):l,e,!0!==t),!0!==t&&setTimeout(function(){!0===h(f)&&o.trigger("complete")},0)}if(e.preventDefault(),t)return!1!==p&&(p.forwardPosition=l),p}},pasteEvent:function(e){var t,n=this,a=e.originalEvent||e,i=J(n),r=n.inputmask._valueGet(!0),o=m(n);U&&(t=o.end,o.end=o.begin,o.begin=t);var s=r.substr(0,o.begin),l=r.substr(o.end,r.length);if(s===(U?g().reverse():g()).slice(0,o.begin).join("")&&(s=""),l===(U?g().reverse():g()).slice(o.end).join("")&&(l=""),U&&(t=s,s=l,l=t),X.clipboardData&&X.clipboardData.getData)r=s+X.clipboardData.getData("Text")+l;else{if(!a.clipboardData||!a.clipboardData.getData)return!0;r=s+a.clipboardData.getData("text/plain")+l}var c=r;if(J.isFunction(F.onBeforePaste)){if(!1===(c=F.onBeforePaste.call(L,r,F)))return e.preventDefault();c||(c=r)}return u(n,!1,!1,U?c.split("").reverse():c.toString().split("")),P(n,x(),_(A()),e,I!==x().join("")),!0===h(x())&&i.trigger("complete"),e.preventDefault()},inputFallBackEvent:function(e){var a=this,t=a.inputmask._valueGet();if(x().join("")!==t){var n=m(a);if(!1===function(e,t,n){if("."===t.charAt(n.begin-1)&&""!==F.radixPoint&&((t=t.split(""))[n.begin-1]=F.radixPoint.charAt(0),t=t.join("")),t.charAt(n.begin-1)===F.radixPoint&&t.length>x().length){var a=new J.Event("keypress");return a.which=F.radixPoint.charCodeAt(0),Q.keypressEvent.call(e,a,!0,!0,!1,n.begin-1),!1}}(a,t,n))return!1;if(t=t.replace(new RegExp("("+ne.escapeRegex(g().join(""))+")*"),""),!1===function(e,t,n){if(re){var a=t.replace(x().join(""),"");if(1===a.length){var i=new J.Event("keypress");return i.which=a.charCodeAt(0),Q.keypressEvent.call(e,i,!0,!0,!1,T().validPositions[n.begin-1]?n.begin:n.begin-1),!1}}}(a,t,n))return!1;n.begin>t.length&&(m(a,t.length),n=m(a));var i=x().join(""),r=t.substr(0,n.begin),o=t.substr(n.begin),s=i.substr(0,n.begin),l=i.substr(n.begin),c=n,u="",p=!1;if(r!==s){c.begin=0;for(var f=(p=r.length>=s.length)?r.length:s.length,d=0;r.charAt(d)===s.charAt(d)&&d<f;d++)c.begin++;p&&(u+=r.slice(c.begin,c.end))}o!==l&&(o.length>l.length?p&&(c.end=c.begin):o.length<l.length?c.end+=l.length-o.length:o.charAt(0)!==l.charAt(0)&&c.end++),P(a,x(),c),u.length>0?J.each(u.split(""),function(e,t){var n=new J.Event("keypress");n.which=t.charCodeAt(0),H=!1,Q.keypressEvent.call(a,n)}):(c.begin===c.end-1&&m(a,v(c.begin+1),c.end),e.keyCode=ne.keyCode.DELETE,Q.keydownEvent.call(a,e)),e.preventDefault()}},setValueEvent:function(e){this.inputmask.refreshValue=!1;var t=this,n=t.inputmask._valueGet(!0);J.isFunction(F.onBeforeMask)&&(n=F.onBeforeMask.call(L,n,F)||n),n=n.split(""),u(t,!0,!1,U?n.reverse():n),I=x().join(""),(F.clearMaskOnLostFocus||F.clearIncomplete)&&t.inputmask._valueGet()===g().join("")&&t.inputmask._valueSet("")},focusEvent:function(e){var t=this,n=t.inputmask._valueGet();F.showMaskOnFocus&&(!F.showMaskOnHover||F.showMaskOnHover&&""===n)&&(t.inputmask._valueGet()!==x().join("")?P(t,x(),_(A())):!1===z&&m(t,_(A()))),!0===F.positionCaretOnTab&&!1===z&&""!==n&&(P(t,x(),m(t)),Q.clickEvent.apply(t,[e,!0])),I=x().join("")},mouseleaveEvent:function(e){var t=this;if(z=!1,F.clearMaskOnLostFocus&&ee.activeElement!==t){var n=x().slice(),a=t.inputmask._valueGet();a!==t.getAttribute("placeholder")&&""!==a&&(-1===A()&&a===g().join("")?n=[]:l(n),P(t,n))}},clickEvent:function(e,c){function u(e){if(""!==F.radixPoint){var t=T().validPositions;if(t[e]===te||t[e].input===j(e)){if(e<_(-1))return!0;var n=J.inArray(F.radixPoint,x());if(-1!==n){for(var a in t)if(n<a&&t[a].input!==j(a))return!1;return!0}}}return!1}var p=this;setTimeout(function(){if(ee.activeElement===p){var e=m(p);if(c&&(U?e.end=e.begin:e.begin=e.end),e.begin===e.end)switch(F.positionCaretOnClick){case"none":break;case"radixFocus":if(u(e.begin)){var t=x().join("").indexOf(F.radixPoint);m(p,F.numericInput?_(t):t);break}default:var n=e.begin,a=A(n,!0),i=_(a);if(n<i)m(p,M(n,!0)||M(n-1,!0)?n:_(n));else{var r=T().validPositions[a],o=k(i,r?r.match.locator:te,r),s=j(i,o.match);if(""!==s&&x()[i]!==s&&!0!==o.match.optionalQuantifier&&!0!==o.match.newBlockMarker||!M(i,!0)&&o.match.def===s){var l=_(i);(n>=l||n===i)&&(i=l)}m(p,i)}}}},0)},dblclickEvent:function(e){var t=this;setTimeout(function(){m(t,0,_(A()))},0)},cutEvent:function(e){var t=this,n=J(t),a=m(t),i=e.originalEvent||e,r=X.clipboardData||i.clipboardData,o=U?x().slice(a.end,a.begin):x().slice(a.begin,a.end);r.setData("text",U?o.reverse().join(""):o.join("")),ee.execCommand&&ee.execCommand("copy"),N(t,ne.keyCode.DELETE,a),P(t,x(),T().p,e,I!==x().join("")),t.inputmask._valueGet()===g().join("")&&n.trigger("cleared")},blurEvent:function(e){var t=J(this),n=this;if(n.inputmask){var a=n.inputmask._valueGet(),i=x().slice();""!==a&&(F.clearMaskOnLostFocus&&(-1===A()&&a===g().join("")?i=[]:l(i)),!1===h(i)&&(setTimeout(function(){t.trigger("incomplete")},0),F.clearIncomplete&&(w(),i=F.clearMaskOnLostFocus?[]:g().slice())),P(n,i,te,e)),I!==x().join("")&&(I=i.join(""),t.trigger("change"))}},mouseenterEvent:function(e){var t=this;z=!0,ee.activeElement!==t&&F.showMaskOnHover&&t.inputmask._valueGet()!==x().join("")&&P(t,x())},submitEvent:function(e){I!==x().join("")&&c.trigger("change"),F.clearMaskOnLostFocus&&-1===A()&&f.inputmask._valueGet&&f.inputmask._valueGet()===g().join("")&&f.inputmask._valueSet(""),F.removeMaskOnSubmit&&(f.inputmask._valueSet(f.inputmask.unmaskedvalue(),!0),setTimeout(function(){P(f,x())},0))},resetEvent:function(e){f.inputmask.refreshValue=!0,setTimeout(function(){c.trigger("setvalue")},0)}};ne.prototype.positionColorMask=function(e,t){e.style.left=t.offsetLeft+"px"};var a;if(e!==te)switch(e.action){case"isComplete":return f=e.el,h(x());case"unmaskedvalue":return f!==te&&e.value===te||(a=e.value,a=(J.isFunction(F.onBeforeMask)?F.onBeforeMask.call(L,a,F)||a:a).split(""),u(te,!1,!1,U?a.reverse():a),J.isFunction(F.onBeforeWrite)&&F.onBeforeWrite.call(L,te,x(),0,F)),n(f);case"mask":!function(e){q.off(e);var t=function(e,o){var t=e.getAttribute("type"),n="INPUT"===e.tagName&&-1!==J.inArray(t,o.supportsInputType)||e.isContentEditable||"TEXTAREA"===e.tagName;if(!n)if("INPUT"===e.tagName){var a=ee.createElement("input");a.setAttribute("type",t),n="text"===a.type,a=null}else n="partial";return!1!==n?function(e){function t(){return this.inputmask?this.inputmask.opts.autoUnmask?this.inputmask.unmaskedvalue():-1!==A()||!0!==o.nullable?ee.activeElement===this&&o.clearMaskOnLostFocus?(U?l(x().slice()).reverse():l(x().slice())).join(""):a.call(this):"":a.call(this)}function n(e){i.call(this,e),this.inputmask&&J(this).trigger("setvalue")}var a,i;if(!e.inputmask.__valueGet){if(!0!==o.noValuePatching){if(Object.getOwnPropertyDescriptor){"function"!=typeof Object.getPrototypeOf&&(Object.getPrototypeOf="object"===le("test".__proto__)?function(e){return e.__proto__}:function(e){return e.constructor.prototype});var r=Object.getPrototypeOf?Object.getOwnPropertyDescriptor(Object.getPrototypeOf(e),"value"):te;r&&r.get&&r.set?(a=r.get,i=r.set,Object.defineProperty(e,"value",{get:t,set:n,configurable:!0})):"INPUT"!==e.tagName&&(a=function(){return this.textContent},i=function(e){this.textContent=e},Object.defineProperty(e,"value",{get:t,set:n,configurable:!0}))}else ee.__lookupGetter__&&e.__lookupGetter__("value")&&(a=e.__lookupGetter__("value"),i=e.__lookupSetter__("value"),e.__defineGetter__("value",t),e.__defineSetter__("value",n));e.inputmask.__valueGet=a,e.inputmask.__valueSet=i}e.inputmask._valueGet=function(e){return U&&!0!==e?a.call(this.el).split("").reverse().join(""):a.call(this.el)},e.inputmask._valueSet=function(e,t){i.call(this.el,null===e||e===te?"":!0!==t&&U?e.split("").reverse().join(""):e)},a===te&&(a=function(){return this.value},i=function(e){this.value=e},function(e){if(J.valHooks&&(J.valHooks[e]===te||!0!==J.valHooks[e].inputmaskpatch)){var n=J.valHooks[e]&&J.valHooks[e].get?J.valHooks[e].get:function(e){return e.value},i=J.valHooks[e]&&J.valHooks[e].set?J.valHooks[e].set:function(e,t){return e.value=t,e};J.valHooks[e]={get:function(e){if(e.inputmask){if(e.inputmask.opts.autoUnmask)return e.inputmask.unmaskedvalue();var t=n(e);return-1!==A(te,te,e.inputmask.maskset.validPositions)||!0!==o.nullable?t:""}return n(e)},set:function(e,t){var n,a=J(e);return n=i(e,t),e.inputmask&&a.trigger("setvalue"),n},inputmaskpatch:!0}}}(e.type),function(e){q.on(e,"mouseenter",function(e){var t=J(this);this.inputmask._valueGet()!==x().join("")&&t.trigger("setvalue")})}(e))}}(e):e.inputmask=te,n}(e,F);if(!1!==t&&(f=e,c=J(f),-1===(G=f!==te?f.maxLength:te)&&(G=te),!0===F.colorMask&&r(f),se&&(f.hasOwnProperty("inputmode")&&(f.inputmode=F.inputmode,f.setAttribute("inputmode",F.inputmode)),"rtfm"===F.androidHack&&(!0!==F.colorMask&&r(f),f.type="password")),!0===t&&(q.on(f,"submit",Q.submitEvent),q.on(f,"reset",Q.resetEvent),q.on(f,"mouseenter",Q.mouseenterEvent),q.on(f,"blur",Q.blurEvent),q.on(f,"focus",Q.focusEvent),q.on(f,"mouseleave",Q.mouseleaveEvent),!0!==F.colorMask&&q.on(f,"click",Q.clickEvent),q.on(f,"dblclick",Q.dblclickEvent),q.on(f,"paste",Q.pasteEvent),q.on(f,"dragdrop",Q.pasteEvent),q.on(f,"drop",Q.pasteEvent),q.on(f,"cut",Q.cutEvent),q.on(f,"complete",F.oncomplete),q.on(f,"incomplete",F.onincomplete),q.on(f,"cleared",F.oncleared),se||!0===F.inputEventOnly?f.removeAttribute("maxLength"):(q.on(f,"keydown",Q.keydownEvent),q.on(f,"keypress",Q.keypressEvent)),q.on(f,"compositionstart",J.noop),q.on(f,"compositionupdate",J.noop),q.on(f,"compositionend",J.noop),q.on(f,"keyup",J.noop),q.on(f,"input",Q.inputFallBackEvent),q.on(f,"beforeinput",J.noop)),q.on(f,"setvalue",Q.setValueEvent),I=g().join(""),""!==f.inputmask._valueGet(!0)||!1===F.clearMaskOnLostFocus||ee.activeElement===f)){var n=J.isFunction(F.onBeforeMask)?F.onBeforeMask.call(L,f.inputmask._valueGet(!0),F)||f.inputmask._valueGet(!0):f.inputmask._valueGet(!0);""!==n&&u(f,!0,!1,U?n.split("").reverse():n.split(""));var a=x().slice();I=a.join(""),!1===h(a)&&F.clearIncomplete&&w(),F.clearMaskOnLostFocus&&ee.activeElement!==f&&(-1===A()?a=[]:l(a)),P(f,a),ee.activeElement===f&&m(f,_(A()))}}(f);break;case"format":return a=(J.isFunction(F.onBeforeMask)?F.onBeforeMask.call(L,e.value,F)||e.value:e.value).split(""),u(te,!0,!1,U?a.reverse():a),e.metadata?{value:U?x().slice().reverse().join(""):x().join(""),metadata:ae.call(this,{action:"getmetadata"},t,F)}:U?x().slice().reverse().join(""):x().join("");case"isValid":e.value?(a=e.value.split(""),u(te,!0,!0,U?a.reverse():a)):e.value=x().join("");for(var $=x(),W=o(),Y=$.length-1;Y>W&&!M(Y);Y--);return $.splice(W,Y+1-W),h($)&&e.value===x().join("");case"getemptymask":return g().join("");case"remove":if(f&&f.inputmask){c=J(f),f.inputmask._valueSet(F.autoUnmask?n(f):f.inputmask._valueGet(!0)),q.off(f);Object.getOwnPropertyDescriptor&&Object.getPrototypeOf?Object.getOwnPropertyDescriptor(Object.getPrototypeOf(f),"value")&&f.inputmask.__valueGet&&Object.defineProperty(f,"value",{get:f.inputmask.__valueGet,set:f.inputmask.__valueSet,configurable:!0}):ee.__lookupGetter__&&f.__lookupGetter__("value")&&f.inputmask.__valueGet&&(f.__defineGetter__("value",f.inputmask.__valueGet),f.__defineSetter__("value",f.inputmask.__valueSet)),f.inputmask=te}return f;case"getmetadata":if(J.isArray(t.metadata)){var Z=i(!0,0,!1).join("");return J.each(t.metadata,function(e,t){if(t.mask===Z)return Z=t,!1}),Z}return t.metadata}}var e=navigator.userAgent,ie=/mobile/i.test(e),re=/iemobile/i.test(e),oe=/iphone/i.test(e)&&!re,se=/android/i.test(e)&&!re;return ne.prototype={dataAttribute:"data-inputmask",defaults:{placeholder:"_",optionalmarker:{start:"[",end:"]"},quantifiermarker:{start:"{",end:"}"},groupmarker:{start:"(",end:")"},alternatormarker:"|",escapeChar:"\\",mask:null,regex:null,oncomplete:J.noop,onincomplete:J.noop,oncleared:J.noop,repeat:0,greedy:!0,autoUnmask:!1,removeMaskOnSubmit:!1,clearMaskOnLostFocus:!0,insertMode:!0,clearIncomplete:!1,alias:null,onKeyDown:J.noop,onBeforeMask:null,onBeforePaste:function(e,t){return J.isFunction(t.onBeforeMask)?t.onBeforeMask.call(this,e,t):e},onBeforeWrite:null,onUnMask:null,showMaskOnFocus:!0,showMaskOnHover:!0,onKeyValidation:J.noop,skipOptionalPartCharacter:" ",numericInput:!1,rightAlign:!1,undoOnEscape:!0,radixPoint:"",radixPointDefinitionSymbol:te,groupSeparator:"",keepStatic:null,positionCaretOnTab:!0,tabThrough:!1,supportsInputType:["text","tel","password"],ignorables:[8,9,13,19,27,33,34,35,36,37,38,39,40,45,46,93,112,113,114,115,116,117,118,119,120,121,122,123,0,229],isComplete:null,canClearPosition:J.noop,preValidation:null,postValidation:null,staticDefinitionSymbol:te,jitMasking:!1,nullable:!0,inputEventOnly:!1,noValuePatching:!1,positionCaretOnClick:"lvp",casing:null,inputmode:"verbatim",colorMask:!1,androidHack:!1,importDataAttributes:!0},definitions:{9:{validator:"[0-9１-９]",cardinality:1,definitionSymbol:"*"},a:{validator:"[A-Za-zА-яЁёÀ-ÿµ]",cardinality:1,definitionSymbol:"*"},"*":{validator:"[0-9１-９A-Za-zА-яЁёÀ-ÿµ]",cardinality:1}},aliases:{},masksCache:{},mask:function(e){function i(n,e,a,i){if(!0===e.importDataAttributes){var t,r,o,s,l=function(e,t){null!==(t=t!==te?t:n.getAttribute(i+"-"+e))&&("string"==typeof t&&(0===e.indexOf("on")?t=X[t]:"false"===t?t=!1:"true"===t&&(t=!0)),a[e]=t)},c=n.getAttribute(i);if(c&&""!==c&&(c=c.replace(new RegExp("'","g"),'"'),r=JSON.parse("{"+c+"}")),r){o=te;for(s in r)if("alias"===s.toLowerCase()){o=r[s];break}}l("alias",o),a.alias&&u(a.alias,a,e);for(t in e){if(r){o=te;for(s in r)if(s.toLowerCase()===t.toLowerCase()){o=r[s];break}}l(t,o)}}return J.extend(!0,e,a),("rtl"===n.dir||e.rightAlign)&&(n.style.textAlign="right"),("rtl"===n.dir||e.numericInput)&&(n.dir="ltr",n.removeAttribute("dir"),e.isRTL=!0),e}var r=this;return"string"==typeof e&&(e=ee.getElementById(e)||ee.querySelectorAll(e)),e=e.nodeName?[e]:e,J.each(e,function(e,t){var n=J.extend(!0,{},r.opts);i(t,n,J.extend(!0,{},r.userOptions),r.dataAttribute);var a=o(n,r.noMasksCache);a!==te&&(t.inputmask!==te&&(t.inputmask.opts.autoUnmask=!0,t.inputmask.remove()),t.inputmask=new ne(te,te,!0),t.inputmask.opts=n,t.inputmask.noMasksCache=r.noMasksCache,t.inputmask.userOptions=J.extend(!0,{},r.userOptions),t.inputmask.isRTL=n.isRTL||n.numericInput,t.inputmask.el=t,t.inputmask.maskset=a,J.data(t,"_inputmask_opts",n),ae.call(t.inputmask,{action:"mask"}))}),e&&e[0]?e[0].inputmask||this:this},option:function(e,t){return"string"==typeof e?this.opts[e]:"object"===(void 0===e?"undefined":le(e))?(J.extend(this.userOptions,e),this.el&&!0!==t&&this.mask(this.el),this):void 0},unmaskedvalue:function(e){return this.maskset=this.maskset||o(this.opts,this.noMasksCache),ae.call(this,{action:"unmaskedvalue",value:e})},remove:function(){return ae.call(this,{action:"remove"})},getemptymask:function(){return this.maskset=this.maskset||o(this.opts,this.noMasksCache),ae.call(this,{action:"getemptymask"})},hasMaskedValue:function(){return!this.opts.autoUnmask},isComplete:function(){return this.maskset=this.maskset||o(this.opts,this.noMasksCache),ae.call(this,{action:"isComplete"})},getmetadata:function(){return this.maskset=this.maskset||o(this.opts,this.noMasksCache),ae.call(this,{action:"getmetadata"})},isValid:function(e){return this.maskset=this.maskset||o(this.opts,this.noMasksCache),ae.call(this,{action:"isValid",value:e})},format:function(e,t){return this.maskset=this.maskset||o(this.opts,this.noMasksCache),ae.call(this,{action:"format",value:e,metadata:t})},analyseMask:function(e,p,f){function t(e,t,n,a){this.matches=[],this.openGroup=e||!1,this.alternatorGroup=!1,this.isGroup=e||!1,this.isOptional=t||!1,this.isQuantifier=n||!1,this.isAlternator=a||!1,this.quantifier={min:1,max:1}}function i(n,e,a){a=a!==te?a:n.matches.length;var i=n.matches[a-1];if(p)0===e.indexOf("[")||v&&/\\d|\\s|\\w]/i.test(e)||"."===e?n.matches.splice(a++,0,{fn:new RegExp(e,f.casing?"i":""),cardinality:1,optionality:n.isOptional,newBlockMarker:i===te||i.def!==e,casing:null,def:e,placeholder:te,nativeDef:e}):(v&&(e=e[e.length-1]),J.each(e.split(""),function(e,t){i=n.matches[a-1],n.matches.splice(a++,0,{fn:null,cardinality:0,optionality:n.isOptional,newBlockMarker:i===te||i.def!==t&&null!==i.fn,casing:null,def:f.staticDefinitionSymbol||t,placeholder:f.staticDefinitionSymbol!==te?t:te,nativeDef:t})})),v=!1;else{var t=(f.definitions?f.definitions[e]:te)||ne.prototype.definitions[e];if(t&&!v){for(var r=t.prevalidator,o=r?r.length:0,s=1;s<t.cardinality;s++){var l=o>=s?r[s-1]:[],c=l.validator,u=l.cardinality;n.matches.splice(a++,0,{fn:c?"string"==typeof c?new RegExp(c,f.casing?"i":""):new function(){this.test=c}:new RegExp("."),cardinality:u||1,optionality:n.isOptional,newBlockMarker:i===te||i.def!==(t.definitionSymbol||e),casing:t.casing,def:t.definitionSymbol||e,placeholder:t.placeholder,nativeDef:e}),i=n.matches[a-1]}n.matches.splice(a++,0,{fn:t.validator?"string"==typeof t.validator?new RegExp(t.validator,f.casing?"i":""):new function(){this.test=t.validator}:new RegExp("."),cardinality:t.cardinality,optionality:n.isOptional,newBlockMarker:i===te||i.def!==(t.definitionSymbol||e),casing:t.casing,def:t.definitionSymbol||e,placeholder:t.placeholder,nativeDef:e})}else n.matches.splice(a++,0,{fn:null,cardinality:0,optionality:n.isOptional,newBlockMarker:i===te||i.def!==e&&null!==i.fn,casing:null,def:f.staticDefinitionSymbol||e,placeholder:f.staticDefinitionSymbol!==te?e:te,nativeDef:e}),v=!1}}function r(a){a&&a.matches&&J.each(a.matches,function(e,t){var n=a.matches[e+1];(n===te||n.matches===te||!1===n.isQuantifier)&&t&&t.isGroup&&(t.isGroup=!1,p||(i(t,f.groupmarker.start,0),!0!==t.openGroup&&i(t,f.groupmarker.end))),r(t)})}function n(){if(k.length>0){if(c=k[k.length-1],i(c,s),c.isAlternator){u=k.pop();for(var e=0;e<u.matches.length;e++)u.matches[e].isGroup=!1;k.length>0?(c=k[k.length-1]).matches.push(u):y.matches.push(u)}}else i(y,s)}function o(e){e.matches=e.matches.reverse();for(var t in e.matches)if(e.matches.hasOwnProperty(t)){var n=parseInt(t);if(e.matches[t].isQuantifier&&e.matches[n+1]&&e.matches[n+1].isGroup){var a=e.matches[t];e.matches.splice(t,1),e.matches.splice(n+1,0,a)}e.matches[t].matches!==te?e.matches[t]=o(e.matches[t]):e.matches[t]=function(e){return e===f.optionalmarker.start?e=f.optionalmarker.end:e===f.optionalmarker.end?e=f.optionalmarker.start:e===f.groupmarker.start?e=f.groupmarker.end:e===f.groupmarker.end&&(e=f.groupmarker.start),e}(e.matches[t])}return e}var a,s,l,c,u,d,m,h=/(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?\})|[^.?*+^${[]()|\\]+|./g,g=/\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,v=!1,y=new t,k=[],b=[];for(p&&(f.optionalmarker.start=te,f.optionalmarker.end=te);a=p?g.exec(e):h.exec(e);){if(s=a[0],p)switch(s.charAt(0)){case"?":s="{0,1}";break;case"+":case"*":s="{"+s+"}"}if(v)n();else switch(s.charAt(0)){case f.escapeChar:v=!0,p&&n();break;case f.optionalmarker.end:case f.groupmarker.end:if(l=k.pop(),l.openGroup=!1,l!==te)if(k.length>0){if((c=k[k.length-1]).matches.push(l),c.isAlternator){u=k.pop();for(var x=0;x<u.matches.length;x++)u.matches[x].isGroup=!1,u.matches[x].alternatorGroup=!1;k.length>0?(c=k[k.length-1]).matches.push(u):y.matches.push(u)}}else y.matches.push(l);else n();break;case f.optionalmarker.start:k.push(new t(!1,!0));break;case f.groupmarker.start:k.push(new t(!0));break;case f.quantifiermarker.start:var P=new t(!1,!1,!0),w=(s=s.replace(/[{}]/g,"")).split(","),A=isNaN(w[0])?w[0]:parseInt(w[0]),S=1===w.length?A:isNaN(w[1])?w[1]:parseInt(w[1]);if("*"!==S&&"+"!==S||(A="*"===S?0:1),P.quantifier={min:A,max:S},k.length>0){var E=k[k.length-1].matches;(a=E.pop()).isGroup||((m=new t(!0)).matches.push(a),a=m),E.push(a),E.push(P)}else(a=y.matches.pop()).isGroup||(p&&null===a.fn&&"."===a.def&&(a.fn=new RegExp(a.def,f.casing?"i":"")),(m=new t(!0)).matches.push(a),a=m),y.matches.push(a),y.matches.push(P);break;case f.alternatormarker:if(k.length>0){var C=(c=k[k.length-1]).matches[c.matches.length-1];d=c.openGroup&&(C.matches===te||!1===C.isGroup&&!1===C.isAlternator)?k.pop():c.matches.pop()}else d=y.matches.pop();if(d.isAlternator)k.push(d);else if(d.alternatorGroup?(u=k.pop(),d.alternatorGroup=!1):u=new t(!1,!1,!1,!0),u.matches.push(d),k.push(u),d.openGroup){d.openGroup=!1;var O=new t(!0);O.alternatorGroup=!0,k.push(O)}break;default:n()}}for(;k.length>0;)l=k.pop(),y.matches.push(l);return y.matches.length>0&&(r(y),b.push(y)),(f.numericInput||f.isRTL)&&o(b[0]),b}},ne.extendDefaults=function(e){J.extend(!0,ne.prototype.defaults,e)},ne.extendDefinitions=function(e){J.extend(!0,ne.prototype.definitions,e)},ne.extendAliases=function(e){J.extend(!0,ne.prototype.aliases,e)},ne.format=function(e,t,n){return ne(t).format(e,n)},ne.unmask=function(e,t){return ne(t).unmaskedvalue(e)},ne.isValid=function(e,t){return ne(t).isValid(e)},ne.remove=function(e){J.each(e,function(e,t){t.inputmask&&t.inputmask.remove()})},ne.escapeRegex=function(e){var t=["/",".","*","+","?","|","(",")","[","]","{","}","\\","$","^"];return e.replace(new RegExp("(\\"+t.join("|\\")+")","gim"),"\\$1")},ne.keyCode={ALT:18,BACKSPACE:8,BACKSPACE_SAFARI:127,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91,X:88},ne})?a.apply(t,i):a)&&(e.exports=r)},function(e,t){e.exports=jQuery},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}n(4),n(9),n(12),n(13),n(14),n(15);var i=a(n(1)),r=a(n(0)),o=a(n(2));r.default===o.default&&n(16),window.Inputmask=i.default},function(e,t,n){var a=n(5);"string"==typeof a&&(a=[[e.i,a,""]]);var i={hmr:!0,transform:void 0};n(7)(a,i),a.locals&&(e.exports=a.locals)},function(e,t,n){(e.exports=n(6)(void 0)).push([e.i,"span.im-caret {\r\n    -webkit-animation: 1s blink step-end infinite;\r\n    animation: 1s blink step-end infinite;\r\n}\r\n\r\n@keyframes blink {\r\n    from, to {\r\n        border-right-color: black;\r\n    }\r\n    50% {\r\n        border-right-color: transparent;\r\n    }\r\n}\r\n\r\n@-webkit-keyframes blink {\r\n    from, to {\r\n        border-right-color: black;\r\n    }\r\n    50% {\r\n        border-right-color: transparent;\r\n    }\r\n}\r\n\r\nspan.im-static {\r\n    color: grey;\r\n}\r\n\r\ndiv.im-colormask {\r\n    display: inline-block;\r\n    border-style: inset;\r\n    border-width: 2px;\r\n    -webkit-appearance: textfield;\r\n    -moz-appearance: textfield;\r\n    appearance: textfield;\r\n}\r\n\r\ndiv.im-colormask > input {\r\n    position: absolute;\r\n    display: inline-block;\r\n    background-color: transparent;\r\n    color: transparent;\r\n    -webkit-appearance: caret;\r\n    -moz-appearance: caret;\r\n    appearance: caret;\r\n    border-style: none;\r\n    left: 0; /*calculated*/\r\n}\r\n\r\ndiv.im-colormask > input:focus {\r\n    outline: none;\r\n}\r\n\r\ndiv.im-colormask > input::-moz-selection{\r\n    background: none;\r\n}\r\n\r\ndiv.im-colormask > input::selection{\r\n    background: none;\r\n}\r\ndiv.im-colormask > input::-moz-selection{\r\n    background: none;\r\n}\r\n\r\ndiv.im-colormask > div {\r\n    color: black;\r\n    display: inline-block;\r\n    width: 100px; /*calculated*/\r\n}",""])},function(e,t){function a(e,t){var n,a=e[1]||"",i=e[3];if(!i)return a;if(t&&"function"==typeof btoa){var r=(n=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),o=i.sources.map(function(e){return"/*# sourceURL="+i.sourceRoot+e+" */"});return[a].concat(o).concat([r]).join("\n")}return[a].join("\n")}e.exports=function(n){var o=[];return o.toString=function(){return this.map(function(e){var t=a(e,n);return e[2]?"@media "+e[2]+"{"+t+"}":t}).join("")},o.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},a=0;a<this.length;a++){var i=this[a][0];"number"==typeof i&&(n[i]=!0)}for(a=0;a<e.length;a++){var r=e[a];"number"==typeof r[0]&&n[r[0]]||(t&&!r[2]?r[2]=t:t&&(r[2]="("+r[2]+") and ("+t+")"),o.push(r))}},o}},function(e,t,n){function l(e,t){for(var n=0;n<e.length;n++){var a=e[n],i=h[a.id];if(i){for(i.refs++,o=0;o<i.parts.length;o++)i.parts[o](a.parts[o]);for(;o<a.parts.length;o++)i.parts.push(s(a.parts[o],t))}else{for(var r=[],o=0;o<a.parts.length;o++)r.push(s(a.parts[o],t));h[a.id]={id:a.id,refs:1,parts:r}}}}function c(e,t){for(var n=[],a={},i=0;i<e.length;i++){var r=e[i],o=t.base?r[0]+t.base:r[0],s={css:r[1],media:r[2],sourceMap:r[3]};a[o]?a[o].parts.push(s):n.push(a[o]={id:o,parts:[s]})}return n}function u(e,t){var n=o(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var a=y[y.length-1];if("top"===e.insertAt)a?a.nextSibling?n.insertBefore(t,a.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),y.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=o(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,i)}}function p(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=y.indexOf(e);0<=t&&y.splice(t,1)}function f(e){var t=document.createElement("style");return e.attrs.type="text/css",d(t,e.attrs),u(e,t),t}function d(t,n){Object.keys(n).forEach(function(e){t.setAttribute(e,n[e])})}function s(t,e){var n,a,i,r,o,s;if(e.transform&&t.css){if(!(r=e.transform(t.css)))return function(){};t.css=r}if(e.singleton){var l=v++;n=g=g||f(e),a=m.bind(null,n,l,!1),i=m.bind(null,n,l,!0)}else i=t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(o=e,s=document.createElement("link"),o.attrs.type="text/css",o.attrs.rel="stylesheet",d(s,o.attrs),u(o,s),a=function(e,t,n){var a=n.css,i=n.sourceMap,r=void 0===t.convertToAbsoluteUrls&&i;(t.convertToAbsoluteUrls||r)&&(a=k(a)),i&&(a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var o=new Blob([a],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(o),s&&URL.revokeObjectURL(s)}.bind(null,n=s,e),function(){p(n),n.href&&URL.revokeObjectURL(n.href)}):(n=f(e),a=function(e,t){var n=t.css,a=t.media;if(a&&e.setAttribute("media",a),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),function(){p(n)});return a(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;a(t=e)}else i()}}function m(e,t,n,a){var i=n?"":a.css;if(e.styleSheet)e.styleSheet.cssText=x(t,i);else{var r=document.createTextNode(i),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(r,o[t]):e.appendChild(r)}}var a,i,h={},r=function(){return void 0===i&&(i=function(){return window&&document&&document.all&&!window.atob}.apply(this,arguments)),i},o=(a={},function(e){if(void 0===a[e]){var t=function(e){return document.querySelector(e)}.call(this,e);if(t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}a[e]=t}return a[e]}),g=null,v=0,y=[],k=n(8);e.exports=function(e,o){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(o=o||{}).attrs="object"==typeof o.attrs?o.attrs:{},o.singleton||(o.singleton=r()),o.insertInto||(o.insertInto="head"),o.insertAt||(o.insertAt="bottom");var s=c(e,o);return l(s,o),function(e){for(var t=[],n=0;n<s.length;n++){var a=s[n];(i=h[a.id]).refs--,t.push(i)}for(e&&l(c(e,o),o),n=0;n<t.length;n++){var i=t[n];if(0===i.refs){for(var r=0;r<i.parts.length;r++)i.parts[r]();delete h[i.id]}}}};var b,x=(b=[],function(e,t){return b[e]=t,b.filter(Boolean).join("\n")})},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var i=t.protocol+"//"+t.host,r=i+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var n,a=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(a)?e:(n=0===a.indexOf("//")?a:0===a.indexOf("index.html")?i+a:r+a.replace(/^\.\//,""),"url("+JSON.stringify(n)+")")})}},function(e,t,n){"use strict";var a,i,r;i=[n(0),n(1)],void 0!==(r="function"==typeof(a=function(o,s){function l(e){return isNaN(e)||29===new Date(e,2,0).getDate()}return s.extendAliases({"dd/mm/yyyy":{mask:"1/2/y",placeholder:"dd/mm/yyyy",regex:{val1pre:new RegExp("[0-3]"),val1:new RegExp("0[1-9]|[12][0-9]|3[01]"),val2pre:function(e){var t=s.escapeRegex.call(this,e);return new RegExp("((0[1-9]|[12][0-9]|3[01])"+t+"[01])")},val2:function(e){var t=s.escapeRegex.call(this,e);return new RegExp("((0[1-9]|[12][0-9])"+t+"(0[1-9]|1[012]))|(30"+t+"(0[13-9]|1[012]))|(31"+t+"(0[13578]|1[02]))")}},leapday:"29/02/",separator:"/",yearrange:{minyear:1900,maxyear:2099},isInYearRange:function(e,t,n){if(isNaN(e))return!1;var a=parseInt(e.concat(t.toString().slice(e.length))),i=parseInt(e.concat(n.toString().slice(e.length)));return!isNaN(a)&&(t<=a&&a<=n)||!isNaN(i)&&(t<=i&&i<=n)},determinebaseyear:function(e,t,n){var a=(new Date).getFullYear();if(e>a)return e;if(t<a){for(var i=t.toString().slice(0,2),r=t.toString().slice(2,4);t<i+n;)i--;var o=i+r;return e>o?e:o}if(e<=a&&a<=t){for(var s=a.toString().slice(0,2);t<s+n;)s--;var l=s+n;return l<e?e:l}return a},onKeyDown:function(e,t,n,a){var i=o(this);if(e.ctrlKey&&e.keyCode===s.keyCode.RIGHT){var r=new Date;i.val(r.getDate().toString()+(r.getMonth()+1).toString()+r.getFullYear().toString()),i.trigger("setvalue")}},getFrontValue:function(e,t,n){for(var a=0,i=0,r=0;r<e.length&&"2"!==e.charAt(r);r++){var o=n.definitions[e.charAt(r)];o?(a+=i,i=o.cardinality):i++}return t.join("").substr(a,i)},postValidation:function(e,t,n){var a,i,r=e.join("");return 0===n.mask.indexOf("y")?(i=r.substr(0,4),a=r.substring(4,10)):(i=r.substring(6,10),a=r.substr(0,6)),t&&(a!==n.leapday||l(i))},definitions:{1:{validator:function(e,t,n,a,i){var r=i.regex.val1.test(e);return a||r||e.charAt(1)!==i.separator&&-1==="-./".indexOf(e.charAt(1))||!(r=i.regex.val1.test("0"+e.charAt(0)))?r:(t.buffer[n-1]="0",{refreshFromBuffer:{start:n-1,end:n},pos:n,c:e.charAt(0)})},cardinality:2,prevalidator:[{validator:function(e,t,n,a,i){var r=e;isNaN(t.buffer[n+1])||(r+=t.buffer[n+1]);var o=1===r.length?i.regex.val1pre.test(r):i.regex.val1.test(r);if(o&&t.validPositions[n]&&(i.regex.val2(i.separator).test(e+t.validPositions[n].input)||(t.validPositions[n].input="0"===e?"1":"0")),!a&&!o){if(o=i.regex.val1.test(e+"0"))return t.buffer[n]=e,t.buffer[++n]="0",{pos:n,c:"0"};if(o=i.regex.val1.test("0"+e))return t.buffer[n]="0",n++,{pos:n}}return o},cardinality:1}]},2:{validator:function(e,t,n,a,i){var r=i.getFrontValue(t.mask,t.buffer,i);-1!==r.indexOf(i.placeholder[0])&&(r="01"+i.separator);var o=i.regex.val2(i.separator).test(r+e);return a||o||e.charAt(1)!==i.separator&&-1==="-./".indexOf(e.charAt(1))||!(o=i.regex.val2(i.separator).test(r+"0"+e.charAt(0)))?o:(t.buffer[n-1]="0",{refreshFromBuffer:{start:n-1,end:n},pos:n,c:e.charAt(0)})},cardinality:2,prevalidator:[{validator:function(e,t,n,a,i){isNaN(t.buffer[n+1])||(e+=t.buffer[n+1]);var r=i.getFrontValue(t.mask,t.buffer,i);-1!==r.indexOf(i.placeholder[0])&&(r="01"+i.separator);var o=1===e.length?i.regex.val2pre(i.separator).test(r+e):i.regex.val2(i.separator).test(r+e);return o&&t.validPositions[n]&&(i.regex.val2(i.separator).test(e+t.validPositions[n].input)||(t.validPositions[n].input="0"===e?"1":"0")),a||o||!(o=i.regex.val2(i.separator).test(r+"0"+e))?o:(t.buffer[n]="0",n++,{pos:n})},cardinality:1}]},y:{validator:function(e,t,n,a,i){return i.isInYearRange(e,i.yearrange.minyear,i.yearrange.maxyear)},cardinality:4,prevalidator:[{validator:function(e,t,n,a,i){var r=i.isInYearRange(e,i.yearrange.minyear,i.yearrange.maxyear);if(!a&&!r){var o=i.determinebaseyear(i.yearrange.minyear,i.yearrange.maxyear,e+"0").toString().slice(0,1);if(r=i.isInYearRange(o+e,i.yearrange.minyear,i.yearrange.maxyear))return t.buffer[n++]=o.charAt(0),{pos:n};if(o=i.determinebaseyear(i.yearrange.minyear,i.yearrange.maxyear,e+"0").toString().slice(0,2),r=i.isInYearRange(o+e,i.yearrange.minyear,i.yearrange.maxyear))return t.buffer[n++]=o.charAt(0),t.buffer[n++]=o.charAt(1),{pos:n}}return r},cardinality:1},{validator:function(e,t,n,a,i){var r=i.isInYearRange(e,i.yearrange.minyear,i.yearrange.maxyear);if(!a&&!r){var o=i.determinebaseyear(i.yearrange.minyear,i.yearrange.maxyear,e).toString().slice(0,2);if(r=i.isInYearRange(e[0]+o[1]+e[1],i.yearrange.minyear,i.yearrange.maxyear))return t.buffer[n++]=o.charAt(1),{pos:n};if(o=i.determinebaseyear(i.yearrange.minyear,i.yearrange.maxyear,e).toString().slice(0,2),r=i.isInYearRange(o+e,i.yearrange.minyear,i.yearrange.maxyear))return t.buffer[n-1]=o.charAt(0),t.buffer[n++]=o.charAt(1),t.buffer[n++]=e.charAt(0),{refreshFromBuffer:{start:n-3,end:n},pos:n}}return r},cardinality:2},{validator:function(e,t,n,a,i){return i.isInYearRange(e,i.yearrange.minyear,i.yearrange.maxyear)},cardinality:3}]}},insertMode:!1,autoUnmask:!1},"mm/dd/yyyy":{placeholder:"mm/dd/yyyy",alias:"dd/mm/yyyy",regex:{val2pre:function(e){var t=s.escapeRegex.call(this,e);return new RegExp("((0[13-9]|1[012])"+t+"[0-3])|(02"+t+"[0-2])")},val2:function(e){var t=s.escapeRegex.call(this,e);return new RegExp("((0[1-9]|1[012])"+t+"(0[1-9]|[12][0-9]))|((0[13-9]|1[012])"+t+"30)|((0[13578]|1[02])"+t+"31)")},val1pre:new RegExp("[01]"),val1:new RegExp("0[1-9]|1[012]")},leapday:"02/29/",onKeyDown:function(e,t,n,a){var i=o(this);if(e.ctrlKey&&e.keyCode===s.keyCode.RIGHT){var r=new Date;i.val((r.getMonth()+1).toString()+r.getDate().toString()+r.getFullYear().toString()),i.trigger("setvalue")}}},"yyyy/mm/dd":{mask:"y/1/2",placeholder:"yyyy/mm/dd",alias:"mm/dd/yyyy",leapday:"/02/29",onKeyDown:function(e,t,n,a){var i=o(this);if(e.ctrlKey&&e.keyCode===s.keyCode.RIGHT){var r=new Date;i.val(r.getFullYear().toString()+(r.getMonth()+1).toString()+r.getDate().toString()),i.trigger("setvalue")}}},"dd.mm.yyyy":{mask:"1.2.y",placeholder:"dd.mm.yyyy",leapday:"29.02.",separator:".",alias:"dd/mm/yyyy"},"dd-mm-yyyy":{mask:"1-2-y",placeholder:"dd-mm-yyyy",leapday:"29-02-",separator:"-",alias:"dd/mm/yyyy"},"mm.dd.yyyy":{mask:"1.2.y",placeholder:"mm.dd.yyyy",leapday:"02.29.",separator:".",alias:"mm/dd/yyyy"},"mm-dd-yyyy":{mask:"1-2-y",placeholder:"mm-dd-yyyy",leapday:"02-29-",separator:"-",alias:"mm/dd/yyyy"},"yyyy.mm.dd":{mask:"y.1.2",placeholder:"yyyy.mm.dd",leapday:".02.29",separator:".",alias:"yyyy/mm/dd"},"yyyy-mm-dd":{mask:"y-1-2",placeholder:"yyyy-mm-dd",leapday:"-02-29",separator:"-",alias:"yyyy/mm/dd"},datetime:{mask:"1/2/y h:s",placeholder:"dd/mm/yyyy hh:mm",alias:"dd/mm/yyyy",regex:{hrspre:new RegExp("[012]"),hrs24:new RegExp("2[0-4]|1[3-9]"),hrs:new RegExp("[01][0-9]|2[0-4]"),ampm:new RegExp("^[a|p|A|P][m|M]"),mspre:new RegExp("[0-5]"),ms:new RegExp("[0-5][0-9]")},timeseparator:":",hourFormat:"24",definitions:{h:{validator:function(e,t,n,a,i){if("24"===i.hourFormat&&24===parseInt(e,10))return t.buffer[n-1]="0",t.buffer[n]="0",{refreshFromBuffer:{start:n-1,end:n},c:"0"};var r=i.regex.hrs.test(e);if(!a&&!r&&(e.charAt(1)===i.timeseparator||-1!=="-.:".indexOf(e.charAt(1)))&&(r=i.regex.hrs.test("0"+e.charAt(0))))return t.buffer[n-1]="0",t.buffer[n]=e.charAt(0),n++,{refreshFromBuffer:{start:n-2,end:n},pos:n,c:i.timeseparator};if(r&&"24"!==i.hourFormat&&i.regex.hrs24.test(e)){var o=parseInt(e,10);return 24===o?(t.buffer[n+5]="a",t.buffer[n+6]="m"):(t.buffer[n+5]="p",t.buffer[n+6]="m"),(o-=12)<10?(t.buffer[n]=o.toString(),t.buffer[n-1]="0"):(t.buffer[n]=o.toString().charAt(1),t.buffer[n-1]=o.toString().charAt(0)),{refreshFromBuffer:{start:n-1,end:n+6},c:t.buffer[n]}}return r},cardinality:2,prevalidator:[{validator:function(e,t,n,a,i){var r=i.regex.hrspre.test(e);return a||r||!(r=i.regex.hrs.test("0"+e))?r:(t.buffer[n]="0",n++,{pos:n})},cardinality:1}]},s:{validator:"[0-5][0-9]",cardinality:2,prevalidator:[{validator:function(e,t,n,a,i){var r=i.regex.mspre.test(e);return a||r||!(r=i.regex.ms.test("0"+e))?r:(t.buffer[n]="0",n++,{pos:n})},cardinality:1}]},t:{validator:function(e,t,n,a,i){return i.regex.ampm.test(e+"m")},casing:"lower",cardinality:1}},insertMode:!1,autoUnmask:!1},datetime12:{mask:"1/2/y h:s t\\m",placeholder:"dd/mm/yyyy hh:mm xm",alias:"datetime",hourFormat:"12"},"mm/dd/yyyy hh:mm xm":{mask:"1/2/y h:s t\\m",placeholder:"mm/dd/yyyy hh:mm xm",alias:"datetime12",regex:{val2pre:function(e){var t=s.escapeRegex.call(this,e);return new RegExp("((0[13-9]|1[012])"+t+"[0-3])|(02"+t+"[0-2])")},val2:function(e){var t=s.escapeRegex.call(this,e);return new RegExp("((0[1-9]|1[012])"+t+"(0[1-9]|[12][0-9]))|((0[13-9]|1[012])"+t+"30)|((0[13578]|1[02])"+t+"31)")},val1pre:new RegExp("[01]"),val1:new RegExp("0[1-9]|1[012]")},leapday:"02/29/",onKeyDown:function(e,t,n,a){var i=o(this);if(e.ctrlKey&&e.keyCode===s.keyCode.RIGHT){var r=new Date;i.val((r.getMonth()+1).toString()+r.getDate().toString()+r.getFullYear().toString()),i.trigger("setvalue")}}},"hh:mm t":{mask:"h:s t\\m",placeholder:"hh:mm xm",alias:"datetime",hourFormat:"12"},"h:s t":{mask:"h:s t\\m",placeholder:"hh:mm xm",alias:"datetime",hourFormat:"12"},"hh:mm:ss":{mask:"h:s:s",placeholder:"hh:mm:ss",alias:"datetime",autoUnmask:!1},"hh:mm":{mask:"h:s",placeholder:"hh:mm",alias:"datetime",autoUnmask:!1},date:{alias:"dd/mm/yyyy"},"mm/yyyy":{mask:"1/y",placeholder:"mm/yyyy",leapday:"donotuse",separator:"/",alias:"mm/dd/yyyy"},shamsi:{regex:{val2pre:function(e){var t=s.escapeRegex.call(this,e);return new RegExp("((0[1-9]|1[012])"+t+"[0-3])")},val2:function(e){var t=s.escapeRegex.call(this,e);return new RegExp("((0[1-9]|1[012])"+t+"(0[1-9]|[12][0-9]))|((0[1-9]|1[012])"+t+"30)|((0[1-6])"+t+"31)")},val1pre:new RegExp("[01]"),val1:new RegExp("0[1-9]|1[012]")},yearrange:{minyear:1300,maxyear:1499},mask:"y/1/2",leapday:"/12/30",placeholder:"yyyy/mm/dd",alias:"mm/dd/yyyy",clearIncomplete:!0},"yyyy-mm-dd hh:mm:ss":{mask:"y-1-2 h:s:s",placeholder:"yyyy-mm-dd hh:mm:ss",alias:"datetime",separator:"-",leapday:"-02-29",regex:{val2pre:function(e){var t=s.escapeRegex.call(this,e);return new RegExp("((0[13-9]|1[012])"+t+"[0-3])|(02"+t+"[0-2])")},val2:function(e){var t=s.escapeRegex.call(this,e);return new RegExp("((0[1-9]|1[012])"+t+"(0[1-9]|[12][0-9]))|((0[13-9]|1[012])"+t+"30)|((0[13578]|1[02])"+t+"31)")},val1pre:new RegExp("[01]"),val1:new RegExp("0[1-9]|1[012]")},onKeyDown:function(e,t,n,a){}}}),s})?a.apply(t,i):a)&&(e.exports=r)},function(e,t,n){"use strict";var a;void 0!==(a=function(){return window}.call(t,n,t,e))&&(e.exports=a)},function(e,t,n){"use strict";var a;void 0!==(a=function(){return document}.call(t,n,t,e))&&(e.exports=a)},function(e,t,n){"use strict";var a,i,r;i=[n(0),n(1)],void 0!==(r="function"==typeof(a=function(e,t){return t.extendDefinitions({A:{validator:"[A-Za-zА-яЁёÀ-ÿµ]",cardinality:1,casing:"upper"},"&":{validator:"[0-9A-Za-zА-яЁёÀ-ÿµ]",cardinality:1,casing:"upper"},"#":{validator:"[0-9A-Fa-f]",cardinality:1,casing:"upper"}}),t.extendAliases({url:{definitions:{i:{validator:".",cardinality:1}},mask:"(\\http://)|(\\http\\s://)|(ftp://)|(ftp\\s://)i{+}",insertMode:!1,autoUnmask:!1,inputmode:"url"},ip:{mask:"i[i[i]].i[i[i]].i[i[i]].i[i[i]]",definitions:{i:{validator:function(e,t,n,a,i){return n-1>-1&&"."!==t.buffer[n-1]?(e=t.buffer[n-1]+e,e=n-2>-1&&"."!==t.buffer[n-2]?t.buffer[n-2]+e:"0"+e):e="00"+e,new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]").test(e)},cardinality:1}},onUnMask:function(e,t,n){return e},inputmode:"numeric"},email:{mask:"*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",greedy:!1,onBeforePaste:function(e,t){return(e=e.toLowerCase()).replace("mailto:","")},definitions:{"*":{validator:"[0-9A-Za-z!#$%&'*+/=?^_`{|}~-]",cardinality:1,casing:"lower"},"-":{validator:"[0-9A-Za-z-]",cardinality:1,casing:"lower"}},onUnMask:function(e,t,n){return e},inputmode:"email"},mac:{mask:"##:##:##:##:##:##"},vin:{mask:"V{13}9{4}",definitions:{V:{validator:"[A-HJ-NPR-Za-hj-npr-z\\d]",cardinality:1,casing:"upper"}},clearIncomplete:!0,autoUnmask:!0}}),t})?a.apply(t,i):a)&&(e.exports=r)},function(e,t,n){"use strict";var a,i,r;i=[n(0),n(1)],void 0!==(r="function"==typeof(a=function(h,g,v){function r(e,t){for(var n="",a=0;a<e.length;a++)g.prototype.definitions[e.charAt(a)]||t.definitions[e.charAt(a)]||t.optionalmarker.start===e.charAt(a)||t.optionalmarker.end===e.charAt(a)||t.quantifiermarker.start===e.charAt(a)||t.quantifiermarker.end===e.charAt(a)||t.groupmarker.start===e.charAt(a)||t.groupmarker.end===e.charAt(a)||t.alternatormarker===e.charAt(a)?n+="\\"+e.charAt(a):n+=e.charAt(a);return n}return g.extendAliases({numeric:{mask:function(e){if(0!==e.repeat&&isNaN(e.integerDigits)&&(e.integerDigits=e.repeat),e.repeat=0,e.groupSeparator===e.radixPoint&&("."===e.radixPoint?e.groupSeparator=",":","===e.radixPoint?e.groupSeparator=".":e.groupSeparator="")," "===e.groupSeparator&&(e.skipOptionalPartCharacter=v),e.autoGroup=e.autoGroup&&""!==e.groupSeparator,e.autoGroup&&("string"==typeof e.groupSize&&isFinite(e.groupSize)&&(e.groupSize=parseInt(e.groupSize)),isFinite(e.integerDigits))){var t=Math.floor(e.integerDigits/e.groupSize),n=e.integerDigits%e.groupSize;e.integerDigits=parseInt(e.integerDigits)+(0===n?t-1:t),e.integerDigits<1&&(e.integerDigits="*")}e.placeholder.length>1&&(e.placeholder=e.placeholder.charAt(0)),"radixFocus"===e.positionCaretOnClick&&""===e.placeholder&&!1===e.integerOptional&&(e.positionCaretOnClick="lvp"),e.definitions[";"]=e.definitions["~"],e.definitions[";"].definitionSymbol="~",!0===e.numericInput&&(e.positionCaretOnClick="radixFocus"===e.positionCaretOnClick?"lvp":e.positionCaretOnClick,e.digitsOptional=!1,isNaN(e.digits)&&(e.digits=2),e.decimalProtect=!1);var a="[+]";if(a+=r(e.prefix,e),!0===e.integerOptional?a+="~{1,"+e.integerDigits+"}":a+="~{"+e.integerDigits+"}",e.digits!==v){e.radixPointDefinitionSymbol=e.decimalProtect?":":e.radixPoint;var i=e.digits.toString().split(",");isFinite(i[0]&&i[1]&&isFinite(i[1]))?a+=e.radixPointDefinitionSymbol+";{"+e.digits+"}":(isNaN(e.digits)||parseInt(e.digits)>0)&&(e.digitsOptional?a+="["+e.radixPointDefinitionSymbol+";{1,"+e.digits+"}]":a+=e.radixPointDefinitionSymbol+";{"+e.digits+"}")}return a+=r(e.suffix,e),a+="[-]",e.greedy=!1,a},placeholder:"",greedy:!1,digits:"*",digitsOptional:!0,enforceDigitsOnBlur:!1,radixPoint:".",positionCaretOnClick:"radixFocus",groupSize:3,groupSeparator:"",autoGroup:!1,allowMinus:!0,negationSymbol:{front:"-",back:""},integerDigits:"+",integerOptional:!0,prefix:"",suffix:"",rightAlign:!0,decimalProtect:!0,min:null,max:null,step:1,insertMode:!0,autoUnmask:!1,unmaskAsNumber:!1,inputmode:"numeric",preValidation:function(e,t,n,a,i){if("-"===n||n===i.negationSymbol.front)return!0===i.allowMinus&&(i.isNegative=i.isNegative===v||!i.isNegative,""===e.join("")||{caret:t,dopost:!0});if(!1===a&&n===i.radixPoint&&i.digits!==v&&(isNaN(i.digits)||parseInt(i.digits)>0)){var r=h.inArray(i.radixPoint,e);if(-1!==r)return!0===i.numericInput?t===r:{caret:r+1}}return!0},postValidation:function(e,t,n){var a=n.suffix.split(""),i=n.prefix.split("");if(t.pos===v&&t.caret!==v&&!0!==t.dopost)return t;var r=t.caret!==v?t.caret:t.pos,o=e.slice();n.numericInput&&(r=o.length-r-1,o=o.reverse());var s=o[r];if(s===n.groupSeparator&&(s=o[r+=1]),r===o.length-n.suffix.length-1&&s===n.radixPoint)return t;s!==v&&s!==n.radixPoint&&s!==n.negationSymbol.front&&s!==n.negationSymbol.back&&(o[r]="?",n.prefix.length>0&&r>=(!1===n.isNegative?1:0)&&r<n.prefix.length-1+(!1===n.isNegative?1:0)?i[r-(!1===n.isNegative?1:0)]="?":n.suffix.length>0&&r>=o.length-n.suffix.length-(!1===n.isNegative?1:0)&&(a[r-(o.length-n.suffix.length-(!1===n.isNegative?1:0))]="?")),i=i.join(""),a=a.join("");var l=o.join("").replace(i,"");if(l=l.replace(a,""),l=l.replace(new RegExp(g.escapeRegex(n.groupSeparator),"g"),""),l=l.replace(new RegExp("[-"+g.escapeRegex(n.negationSymbol.front)+"]","g"),""),l=l.replace(new RegExp(g.escapeRegex(n.negationSymbol.back)+"$"),""),isNaN(n.placeholder)&&(l=l.replace(new RegExp(g.escapeRegex(n.placeholder),"g"),"")),l.length>1&&1!==l.indexOf(n.radixPoint)&&("0"===s&&(l=l.replace(/^\?/g,"")),l=l.replace(/^0/g,"")),l.charAt(0)===n.radixPoint&&""!==n.radixPoint&&!0!==n.numericInput&&(l="0"+l),""!==l){if(l=l.split(""),(!n.digitsOptional||n.enforceDigitsOnBlur&&"blur"===t.event)&&isFinite(n.digits)){var c=h.inArray(n.radixPoint,l),u=h.inArray(n.radixPoint,o);-1===c&&(l.push(n.radixPoint),c=l.length-1);for(var p=1;p<=n.digits;p++)n.digitsOptional&&(!n.enforceDigitsOnBlur||"blur"!==t.event)||l[c+p]!==v&&l[c+p]!==n.placeholder.charAt(0)?-1!==u&&o[u+p]!==v&&(l[c+p]=l[c+p]||o[u+p]):l[c+p]=t.placeholder||n.placeholder.charAt(0)}if(!0!==n.autoGroup||""===n.groupSeparator||s===n.radixPoint&&t.pos===v&&!t.dopost)l=l.join("");else{var f=l[l.length-1]===n.radixPoint&&t.c===n.radixPoint;l=g(function(e,t){var n="";if(n+="("+t.groupSeparator+"*{"+t.groupSize+"}){*}",""!==t.radixPoint){var a=e.join("").split(t.radixPoint);a[1]&&(n+=t.radixPoint+"*{"+a[1].match(/^\d*\??\d*/)[0].length+"}")}return n}(l,n),{numericInput:!0,jitMasking:!0,definitions:{"*":{validator:"[0-9?]",cardinality:1}}}).format(l.join("")),f&&(l+=n.radixPoint),l.charAt(0)===n.groupSeparator&&l.substr(1)}}if(n.isNegative&&"blur"===t.event&&(n.isNegative="0"!==l),l=i+l,l+=a,n.isNegative&&(l=n.negationSymbol.front+l,l+=n.negationSymbol.back),l=l.split(""),s!==v)if(s!==n.radixPoint&&s!==n.negationSymbol.front&&s!==n.negationSymbol.back)(r=h.inArray("?",l))>-1?l[r]=s:r=t.caret||0;else if(s===n.radixPoint||s===n.negationSymbol.front||s===n.negationSymbol.back){var d=h.inArray(s,l);-1!==d&&(r=d)}n.numericInput&&(r=l.length-r-1,l=l.reverse());var m={caret:s===v||t.pos!==v?r+(n.numericInput?-1:1):r,buffer:l,refreshFromBuffer:t.dopost||e.join("")!==l.join("")};return m.refreshFromBuffer?m:t},onBeforeWrite:function(e,t,n,a){if(e)switch(e.type){case"keydown":return a.postValidation(t,{caret:n,dopost:!0},a);case"blur":case"checkval":var i;if(function(e){e.parseMinMaxOptions===v&&(null!==e.min&&(e.min=e.min.toString().replace(new RegExp(g.escapeRegex(e.groupSeparator),"g"),""),","===e.radixPoint&&(e.min=e.min.replace(e.radixPoint,".")),e.min=isFinite(e.min)?parseFloat(e.min):NaN,isNaN(e.min)&&(e.min=Number.MIN_VALUE)),null!==e.max&&(e.max=e.max.toString().replace(new RegExp(g.escapeRegex(e.groupSeparator),"g"),""),","===e.radixPoint&&(e.max=e.max.replace(e.radixPoint,".")),e.max=isFinite(e.max)?parseFloat(e.max):NaN,isNaN(e.max)&&(e.max=Number.MAX_VALUE)),e.parseMinMaxOptions="done")}(a),null!==a.min||null!==a.max){if(i=a.onUnMask(t.join(""),v,h.extend({},a,{unmaskAsNumber:!0})),null!==a.min&&i<a.min)return a.isNegative=a.min<0,a.postValidation(a.min.toString().replace(".",a.radixPoint).split(""),{caret:n,dopost:!0,placeholder:"0"},a);if(null!==a.max&&i>a.max)return a.isNegative=a.max<0,a.postValidation(a.max.toString().replace(".",a.radixPoint).split(""),{caret:n,dopost:!0,placeholder:"0"},a)}return a.postValidation(t,{caret:n,placeholder:"0",event:"blur"},a);case"_checkval":return{caret:n}}},regex:{integerPart:function(e,t){return t?new RegExp("["+g.escapeRegex(e.negationSymbol.front)+"+]?"):new RegExp("["+g.escapeRegex(e.negationSymbol.front)+"+]?\\d+")},integerNPart:function(e){return new RegExp("[\\d"+g.escapeRegex(e.groupSeparator)+g.escapeRegex(e.placeholder.charAt(0))+"]+")}},definitions:{"~":{validator:function(e,t,n,a,i,r){var o=a?new RegExp("[0-9"+g.escapeRegex(i.groupSeparator)+"]").test(e):new RegExp("[0-9]").test(e);if(!0===o){if(!0!==i.numericInput&&t.validPositions[n]!==v&&"~"===t.validPositions[n].match.def&&!r){var s=t.buffer.join(""),l=(s=(s=s.replace(new RegExp("[-"+g.escapeRegex(i.negationSymbol.front)+"]","g"),"")).replace(new RegExp(g.escapeRegex(i.negationSymbol.back)+"$"),"")).split(i.radixPoint);l.length>1&&(l[1]=l[1].replace(/0/g,i.placeholder.charAt(0))),"0"===l[0]&&(l[0]=l[0].replace(/0/g,i.placeholder.charAt(0))),s=l[0]+i.radixPoint+l[1]||"";var c=t._buffer.join("");for(s===i.radixPoint&&(s=c);null===s.match(g.escapeRegex(c)+"$");)c=c.slice(1);o=(s=(s=s.replace(c,"")).split(""))[n]===v?{pos:n,remove:n}:{pos:n}}}else a||e!==i.radixPoint||t.validPositions[n-1]!==v||(t.buffer[n]="0",o={pos:n+1});return o},cardinality:1},"+":{validator:function(e,t,n,a,i){return i.allowMinus&&("-"===e||e===i.negationSymbol.front)},cardinality:1,placeholder:""},"-":{validator:function(e,t,n,a,i){return i.allowMinus&&e===i.negationSymbol.back},cardinality:1,placeholder:""},":":{validator:function(e,t,n,a,i){var r="["+g.escapeRegex(i.radixPoint)+"]",o=new RegExp(r).test(e);return o&&t.validPositions[n]&&t.validPositions[n].match.placeholder===i.radixPoint&&(o={caret:n+1}),o},cardinality:1,placeholder:function(e){return e.radixPoint}}},onUnMask:function(e,t,n){if(""===t&&!0===n.nullable)return t;var a=e.replace(n.prefix,"");return a=a.replace(n.suffix,""),a=a.replace(new RegExp(g.escapeRegex(n.groupSeparator),"g"),""),""!==n.placeholder.charAt(0)&&(a=a.replace(new RegExp(n.placeholder.charAt(0),"g"),"0")),n.unmaskAsNumber?(""!==n.radixPoint&&-1!==a.indexOf(n.radixPoint)&&(a=a.replace(g.escapeRegex.call(this,n.radixPoint),".")),a=a.replace(new RegExp("^"+g.escapeRegex(n.negationSymbol.front)),"-"),a=a.replace(new RegExp(g.escapeRegex(n.negationSymbol.back)+"$"),""),Number(a)):a},isComplete:function(e,t){var n=e.join("");if(e.slice().join("")!==n)return!1;var a=n.replace(t.prefix,"");return a=a.replace(t.suffix,""),a=a.replace(new RegExp(g.escapeRegex(t.groupSeparator),"g"),""),","===t.radixPoint&&(a=a.replace(g.escapeRegex(t.radixPoint),".")),isFinite(a)},onBeforeMask:function(e,t){if(t.isNegative=v,e=e.toString().charAt(e.length-1)===t.radixPoint?e.toString().substr(0,e.length-1):e.toString(),""!==t.radixPoint&&isFinite(e)){var n=e.split("."),a=""!==t.groupSeparator?parseInt(t.groupSize):0;2===n.length&&(n[0].length>a||n[1].length>a||n[0].length<=a&&n[1].length<a)&&(e=e.replace(".",t.radixPoint))}var i=e.match(/,/g),r=e.match(/\./g);if(e=r&&i?r.length>i.length?(e=e.replace(/\./g,"")).replace(",",t.radixPoint):i.length>r.length?(e=e.replace(/,/g,"")).replace(".",t.radixPoint):e.indexOf(".")<e.indexOf(",")?e.replace(/\./g,""):e.replace(/,/g,""):e.replace(new RegExp(g.escapeRegex(t.groupSeparator),"g"),""),0===t.digits&&(-1!==e.indexOf(".")?e=e.substring(0,e.indexOf(".")):-1!==e.indexOf(",")&&(e=e.substring(0,e.indexOf(",")))),""!==t.radixPoint&&isFinite(t.digits)&&-1!==e.indexOf(t.radixPoint)){var o=e.split(t.radixPoint)[1].match(new RegExp("\\d*"))[0];if(parseInt(t.digits)<o.toString().length){var s=Math.pow(10,parseInt(t.digits));e=e.replace(g.escapeRegex(t.radixPoint),"."),e=(e=Math.round(parseFloat(e)*s)/s).toString().replace(".",t.radixPoint)}}return e},canClearPosition:function(e,t,n,a,i){var r=e.validPositions[t],o=r.input!==i.radixPoint||null!==e.validPositions[t].match.fn&&!1===i.decimalProtect||r.input===i.radixPoint&&e.validPositions[t+1]&&null===e.validPositions[t+1].match.fn||isFinite(r.input)||t===n||r.input===i.groupSeparator||r.input===i.negationSymbol.front||r.input===i.negationSymbol.back;return!o||"+"!==r.match.nativeDef&&"-"!==r.match.nativeDef||(i.isNegative=!1),o},onKeyDown:function(e,t,n,a){var i=h(this);if(e.ctrlKey)switch(e.keyCode){case g.keyCode.UP:i.val(parseFloat(this.inputmask.unmaskedvalue())+parseInt(a.step)),i.trigger("setvalue");break;case g.keyCode.DOWN:i.val(parseFloat(this.inputmask.unmaskedvalue())-parseInt(a.step)),i.trigger("setvalue")}}},currency:{prefix:"$ ",groupSeparator:",",alias:"numeric",placeholder:"0",autoGroup:!0,digits:2,digitsOptional:!1,clearMaskOnLostFocus:!1},decimal:{alias:"numeric"},integer:{alias:"numeric",digits:0,radixPoint:""},percentage:{alias:"numeric",digits:2,digitsOptional:!0,radixPoint:".",placeholder:"0",autoGroup:!1,min:0,max:100,suffix:" %",allowMinus:!1}}),g})?a.apply(t,i):a)&&(e.exports=r)},function(e,t,n){"use strict";var a,i,r;i=[n(0),n(1)],void 0!==(r="function"==typeof(a=function(o,t){function n(e,t){var n=(e.mask||e).replace(/#/g,"9").replace(/\)/,"9").replace(/[+()#-]/g,""),a=(t.mask||t).replace(/#/g,"9").replace(/\)/,"9").replace(/[+()#-]/g,""),i=(e.mask||e).split("#")[0],r=(t.mask||t).split("#")[0];return 0===r.indexOf(i)?-1:0===i.indexOf(r)?1:n.localeCompare(a)}var a=t.prototype.analyseMask;return t.prototype.analyseMask=function(s,e,i){function l(e,t,n){t=t||"",n=n||c,""!==t&&(n[t]={});for(var a="",i=n[t]||n,r=e.length-1;r>=0;r--)i[a=(s=e[r].mask||e[r]).substr(0,1)]=i[a]||[],i[a].unshift(s.substr(1)),e.splice(r,1);for(var o in i)i[o].length>500&&l(i[o].slice(),o,i)}function r(e){var t="",n=[];for(var a in e)o.isArray(e[a])?1===e[a].length?n.push(a+e[a]):n.push(a+i.groupmarker.start+e[a].join(i.groupmarker.end+i.alternatormarker+i.groupmarker.start)+i.groupmarker.end):n.push(a+r(e[a]));return 1===n.length?t+=n[0]:t+=i.groupmarker.start+n.join(i.groupmarker.end+i.alternatormarker+i.groupmarker.start)+i.groupmarker.end,t}var c={};return i.phoneCodes&&(i.phoneCodes&&i.phoneCodes.length>1e3&&(l((s=s.substr(1,s.length-2)).split(i.groupmarker.end+i.alternatormarker+i.groupmarker.start)),s=r(c)),s=s.replace(/9/g,"\\9")),a.call(this,s,e,i)},t.extendAliases({abstractphone:{groupmarker:{start:"<",end:">"},countrycode:"",phoneCodes:[],mask:function(e){return e.definitions={"#":t.prototype.definitions[9]},e.phoneCodes.sort(n)},keepStatic:!0,onBeforeMask:function(e,t){var n=e.replace(/^0{1,2}/,"").replace(/[\s]/g,"");return(n.indexOf(t.countrycode)>1||-1===n.indexOf(t.countrycode))&&(n="+"+t.countrycode+n),n},onUnMask:function(e,t,n){return e.replace(/[()#-]/g,"")},inputmode:"tel"}}),t})?a.apply(t,i):a)&&(e.exports=r)},function(e,t,n){"use strict";var a,i,r;i=[n(0),n(1)],void 0!==(r="function"==typeof(a=function(x,e){return e.extendAliases({Regex:{mask:"r",greedy:!1,repeat:"*",regex:null,regexTokens:null,tokenizer:/\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,quantifierFilter:/[0-9]+[^,]/,isComplete:function(e,t){return new RegExp(t.regex,t.casing?"i":"").test(e.join(""))},definitions:{r:{validator:function(e,t,n,a,g){function c(e,t){this.matches=[],this.isGroup=e||!1,this.isQuantifier=t||!1,this.quantifier={min:1,max:1},this.repeaterPart=void 0}function v(e,t){var n=!1;t&&(k+="(",b++);for(var a=0;a<e.matches.length;a++){var i=e.matches[a];if(!0===i.isGroup)n=v(i,!0);else if(!0===i.isQuantifier){var r=x.inArray(i,e.matches),o=e.matches[r-1],s=k;if(isNaN(i.quantifier.max)){for(;i.repeaterPart&&i.repeaterPart!==k&&i.repeaterPart.length>k.length&&!(n=v(o,!0)););(n=n||v(o,!0))&&(i.repeaterPart=k),k=s+i.quantifier.max}else{for(var l=0,c=i.quantifier.max-1;l<c&&!(n=v(o,!0));l++);k=s+"{"+i.quantifier.min+","+i.quantifier.max+"}"}}else if(void 0!==i.matches)for(var u=0;u<i.length&&!(n=v(i[u],t));u++);else{var p;if("["==i.charAt(0)){p=k,p+=i;for(m=0;m<b;m++)p+=")";n=(h=new RegExp("^("+p+")$",g.casing?"i":"")).test(y)}else for(var f=0,d=i.length;f<d;f++)if("\\"!==i.charAt(f)){p=k,p=(p+=i.substr(0,f+1)).replace(/\|$/,"");for(var m=0;m<b;m++)p+=")";var h=new RegExp("^("+p+")$",g.casing?"i":"");if(n=h.test(y))break}k+=i}if(n)break}return t&&(k+=")",b--),n}var y,u,i=t.buffer.slice(),k="",r=!1,b=0;null===g.regexTokens&&function(){var e,t,n=new c,a=[];for(g.regexTokens=[];e=g.tokenizer.exec(g.regex);)switch((t=e[0]).charAt(0)){case"(":a.push(new c(!0));break;case")":u=a.pop(),a.length>0?a[a.length-1].matches.push(u):n.matches.push(u);break;case"{":case"+":case"*":var i=new c(!1,!0),r=(t=t.replace(/[{}]/g,"")).split(","),o=isNaN(r[0])?r[0]:parseInt(r[0]),s=1===r.length?o:isNaN(r[1])?r[1]:parseInt(r[1]);if(i.quantifier={min:o,max:s},a.length>0){var l=a[a.length-1].matches;(e=l.pop()).isGroup||((u=new c(!0)).matches.push(e),e=u),l.push(e),l.push(i)}else(e=n.matches.pop()).isGroup||((u=new c(!0)).matches.push(e),e=u),n.matches.push(e),n.matches.push(i);break;default:a.length>0?a[a.length-1].matches.push(t):n.matches.push(t)}n.matches.length>0&&g.regexTokens.push(n)}(),i.splice(n,0,e),y=i.join("");for(var o=0;o<g.regexTokens.length;o++){var s=g.regexTokens[o];if(r=v(s,s.isGroup))break}return r},cardinality:1}}}}),e})?a.apply(t,i):a)&&(e.exports=r)},function(e,t,n){"use strict";var a,i,r,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};i=[n(2),n(1)],void 0!==(r="function"==typeof(a=function(i,r){return void 0===i.fn.inputmask&&(i.fn.inputmask=function(e,t){var n,a=this[0];if(void 0===t&&(t={}),"string"==typeof e)switch(e){case"unmaskedvalue":return a&&a.inputmask?a.inputmask.unmaskedvalue():i(a).val();case"remove":return this.each(function(){this.inputmask&&this.inputmask.remove()});case"getemptymask":return a&&a.inputmask?a.inputmask.getemptymask():"";case"hasMaskedValue":return!(!a||!a.inputmask)&&a.inputmask.hasMaskedValue();case"isComplete":return!a||!a.inputmask||a.inputmask.isComplete();case"getmetadata":return a&&a.inputmask?a.inputmask.getmetadata():void 0;case"setvalue":i(a).val(t),a&&void 0===a.inputmask&&i(a).triggerHandler("setvalue");break;case"option":if("string"!=typeof t)return this.each(function(){if(void 0!==this.inputmask)return this.inputmask.option(t)});if(a&&void 0!==a.inputmask)return a.inputmask.option(t);break;default:return t.alias=e,n=new r(t),this.each(function(){n.mask(this)})}else{if("object"==(void 0===e?"undefined":o(e)))return n=new r(e),void 0===e.mask&&void 0===e.alias?this.each(function(){if(void 0!==this.inputmask)return this.inputmask.option(e);n.mask(this)}):this.each(function(){n.mask(this)});if(void 0===e)return this.each(function(){(n=new r(t)).mask(this)})}}),i.fn.inputmask})?a.apply(t,i):a)&&(e.exports=r)}]);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:43:"/js/jquery.fancybox.pack.js?149197862823135";s:6:"source";s:27:"/js/jquery.fancybox.pack.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*! fancyBox v2.1.5 fancyapps.com | fancyapps.com/fancybox/#license */
(function(r,G,f,v){var J=f("html"),n=f(r),p=f(G),b=f.fancybox=function(){b.open.apply(this,arguments)},I=navigator.userAgent.match(/msie/i),B=null,s=G.createTouch!==v,t=function(a){return a&&a.hasOwnProperty&&a instanceof f},q=function(a){return a&&"string"===f.type(a)},E=function(a){return q(a)&&0<a.indexOf("%")},l=function(a,d){var e=parseInt(a,10)||0;d&&E(a)&&(e*=b.getViewport()[d]/100);return Math.ceil(e)},w=function(a,b){return l(a,b)+"px"};f.extend(b,{version:"2.1.5",defaults:{padding:15,margin:20,
width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,pixelRatio:1,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!0,autoCenter:!s,fitToView:!0,aspectRatio:!1,topRatio:0.5,leftRatio:0.5,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3E3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},iframe:{scrolling:"auto",preload:!0},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},
keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+
(I?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:!0,
openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:!0,title:!0},onCancel:f.noop,beforeLoad:f.noop,afterLoad:f.noop,beforeShow:f.noop,afterShow:f.noop,beforeChange:f.noop,beforeClose:f.noop,afterClose:f.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:!1,
isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(a,d){if(a&&(f.isPlainObject(d)||(d={}),!1!==b.close(!0)))return f.isArray(a)||(a=t(a)?f(a).get():[a]),f.each(a,function(e,c){var k={},g,h,j,m,l;"object"===f.type(c)&&(c.nodeType&&(c=f(c)),t(c)?(k={href:c.data("fancybox-href")||c.attr("href"),title:c.data("fancybox-title")||c.attr("title"),isDom:!0,element:c},f.metadata&&f.extend(!0,k,
c.metadata())):k=c);g=d.href||k.href||(q(c)?c:null);h=d.title!==v?d.title:k.title||"";m=(j=d.content||k.content)?"html":d.type||k.type;!m&&k.isDom&&(m=c.data("fancybox-type"),m||(m=(m=c.prop("class").match(/fancybox\.(\w+)/))?m[1]:null));q(g)&&(m||(b.isImage(g)?m="image":b.isSWF(g)?m="swf":"#"===g.charAt(0)?m="inline":q(c)&&(m="html",j=c)),"ajax"===m&&(l=g.split(/\s+/,2),g=l.shift(),l=l.shift()));j||("inline"===m?g?j=f(q(g)?g.replace(/.*(?=#[^\s]+$)/,""):g):k.isDom&&(j=c):"html"===m?j=g:!m&&(!g&&
k.isDom)&&(m="inline",j=c));f.extend(k,{href:g,type:m,content:j,title:h,selector:l});a[e]=k}),b.opts=f.extend(!0,{},b.defaults,d),d.keys!==v&&(b.opts.keys=d.keys?f.extend({},b.defaults.keys,d.keys):!1),b.group=a,b._start(b.opts.index)},cancel:function(){var a=b.coming;a&&!1!==b.trigger("onCancel")&&(b.hideLoading(),b.ajaxLoad&&b.ajaxLoad.abort(),b.ajaxLoad=null,b.imgPreload&&(b.imgPreload.onload=b.imgPreload.onerror=null),a.wrap&&a.wrap.stop(!0,!0).trigger("onReset").remove(),b.coming=null,b.current||
b._afterZoomOut(a))},close:function(a){b.cancel();!1!==b.trigger("beforeClose")&&(b.unbindEvents(),b.isActive&&(!b.isOpen||!0===a?(f(".fancybox-wrap").stop(!0).trigger("onReset").remove(),b._afterZoomOut()):(b.isOpen=b.isOpened=!1,b.isClosing=!0,f(".fancybox-item, .fancybox-nav").remove(),b.wrap.stop(!0,!0).removeClass("fancybox-opened"),b.transitions[b.current.closeMethod]())))},play:function(a){var d=function(){clearTimeout(b.player.timer)},e=function(){d();b.current&&b.player.isActive&&(b.player.timer=
setTimeout(b.next,b.current.playSpeed))},c=function(){d();p.unbind(".player");b.player.isActive=!1;b.trigger("onPlayEnd")};if(!0===a||!b.player.isActive&&!1!==a){if(b.current&&(b.current.loop||b.current.index<b.group.length-1))b.player.isActive=!0,p.bind({"onCancel.player beforeClose.player":c,"onUpdate.player":e,"beforeLoad.player":d}),e(),b.trigger("onPlayStart")}else c()},next:function(a){var d=b.current;d&&(q(a)||(a=d.direction.next),b.jumpto(d.index+1,a,"next"))},prev:function(a){var d=b.current;
d&&(q(a)||(a=d.direction.prev),b.jumpto(d.index-1,a,"prev"))},jumpto:function(a,d,e){var c=b.current;c&&(a=l(a),b.direction=d||c.direction[a>=c.index?"next":"prev"],b.router=e||"jumpto",c.loop&&(0>a&&(a=c.group.length+a%c.group.length),a%=c.group.length),c.group[a]!==v&&(b.cancel(),b._start(a)))},reposition:function(a,d){var e=b.current,c=e?e.wrap:null,k;c&&(k=b._getPosition(d),a&&"scroll"===a.type?(delete k.position,c.stop(!0,!0).animate(k,200)):(c.css(k),e.pos=f.extend({},e.dim,k)))},update:function(a){var d=
a&&a.type,e=!d||"orientationchange"===d;e&&(clearTimeout(B),B=null);b.isOpen&&!B&&(B=setTimeout(function(){var c=b.current;c&&!b.isClosing&&(b.wrap.removeClass("fancybox-tmp"),(e||"load"===d||"resize"===d&&c.autoResize)&&b._setDimension(),"scroll"===d&&c.canShrink||b.reposition(a),b.trigger("onUpdate"),B=null)},e&&!s?0:300))},toggle:function(a){b.isOpen&&(b.current.fitToView="boolean"===f.type(a)?a:!b.current.fitToView,s&&(b.wrap.removeAttr("style").addClass("fancybox-tmp"),b.trigger("onUpdate")),
b.update())},hideLoading:function(){p.unbind(".loading");f("#fancybox-loading").remove()},showLoading:function(){var a,d;b.hideLoading();a=f('<div id="fancybox-loading"><div></div></div>').click(b.cancel).appendTo("body");p.bind("keydown.loading",function(a){if(27===(a.which||a.keyCode))a.preventDefault(),b.cancel()});b.defaults.fixed||(d=b.getViewport(),a.css({position:"absolute",top:0.5*d.h+d.y,left:0.5*d.w+d.x}))},getViewport:function(){var a=b.current&&b.current.locked||!1,d={x:n.scrollLeft(),
y:n.scrollTop()};a?(d.w=a[0].clientWidth,d.h=a[0].clientHeight):(d.w=s&&r.innerWidth?r.innerWidth:n.width(),d.h=s&&r.innerHeight?r.innerHeight:n.height());return d},unbindEvents:function(){b.wrap&&t(b.wrap)&&b.wrap.unbind(".fb");p.unbind(".fb");n.unbind(".fb")},bindEvents:function(){var a=b.current,d;a&&(n.bind("orientationchange.fb"+(s?"":" resize.fb")+(a.autoCenter&&!a.locked?" scroll.fb":""),b.update),(d=a.keys)&&p.bind("keydown.fb",function(e){var c=e.which||e.keyCode,k=e.target||e.srcElement;
if(27===c&&b.coming)return!1;!e.ctrlKey&&(!e.altKey&&!e.shiftKey&&!e.metaKey&&(!k||!k.type&&!f(k).is("[contenteditable]")))&&f.each(d,function(d,k){if(1<a.group.length&&k[c]!==v)return b[d](k[c]),e.preventDefault(),!1;if(-1<f.inArray(c,k))return b[d](),e.preventDefault(),!1})}),f.fn.mousewheel&&a.mouseWheel&&b.wrap.bind("mousewheel.fb",function(d,c,k,g){for(var h=f(d.target||null),j=!1;h.length&&!j&&!h.is(".fancybox-skin")&&!h.is(".fancybox-wrap");)j=h[0]&&!(h[0].style.overflow&&"hidden"===h[0].style.overflow)&&
(h[0].clientWidth&&h[0].scrollWidth>h[0].clientWidth||h[0].clientHeight&&h[0].scrollHeight>h[0].clientHeight),h=f(h).parent();if(0!==c&&!j&&1<b.group.length&&!a.canShrink){if(0<g||0<k)b.prev(0<g?"down":"left");else if(0>g||0>k)b.next(0>g?"up":"right");d.preventDefault()}}))},trigger:function(a,d){var e,c=d||b.coming||b.current;if(c){f.isFunction(c[a])&&(e=c[a].apply(c,Array.prototype.slice.call(arguments,1)));if(!1===e)return!1;c.helpers&&f.each(c.helpers,function(d,e){if(e&&b.helpers[d]&&f.isFunction(b.helpers[d][a]))b.helpers[d][a](f.extend(!0,
{},b.helpers[d].defaults,e),c)});p.trigger(a)}},isImage:function(a){return q(a)&&a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)},isSWF:function(a){return q(a)&&a.match(/\.(swf)((\?|#).*)?$/i)},_start:function(a){var d={},e,c;a=l(a);e=b.group[a]||null;if(!e)return!1;d=f.extend(!0,{},b.opts,e);e=d.margin;c=d.padding;"number"===f.type(e)&&(d.margin=[e,e,e,e]);"number"===f.type(c)&&(d.padding=[c,c,c,c]);d.modal&&f.extend(!0,d,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,
mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}});d.autoSize&&(d.autoWidth=d.autoHeight=!0);"auto"===d.width&&(d.autoWidth=!0);"auto"===d.height&&(d.autoHeight=!0);d.group=b.group;d.index=a;b.coming=d;if(!1===b.trigger("beforeLoad"))b.coming=null;else{c=d.type;e=d.href;if(!c)return b.coming=null,b.current&&b.router&&"jumpto"!==b.router?(b.current.index=a,b[b.router](b.direction)):!1;b.isActive=!0;if("image"===c||"swf"===c)d.autoHeight=d.autoWidth=!1,d.scrolling="visible";"image"===c&&(d.aspectRatio=
!0);"iframe"===c&&s&&(d.scrolling="scroll");d.wrap=f(d.tpl.wrap).addClass("fancybox-"+(s?"mobile":"desktop")+" fancybox-type-"+c+" fancybox-tmp "+d.wrapCSS).appendTo(d.parent||"body");f.extend(d,{skin:f(".fancybox-skin",d.wrap),outer:f(".fancybox-outer",d.wrap),inner:f(".fancybox-inner",d.wrap)});f.each(["Top","Right","Bottom","Left"],function(a,b){d.skin.css("padding"+b,w(d.padding[a]))});b.trigger("onReady");if("inline"===c||"html"===c){if(!d.content||!d.content.length)return b._error("content")}else if(!e)return b._error("href");
"image"===c?b._loadImage():"ajax"===c?b._loadAjax():"iframe"===c?b._loadIframe():b._afterLoad()}},_error:function(a){f.extend(b.coming,{type:"html",autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:"no",hasError:a,content:b.coming.tpl.error});b._afterLoad()},_loadImage:function(){var a=b.imgPreload=new Image;a.onload=function(){this.onload=this.onerror=null;b.coming.width=this.width/b.opts.pixelRatio;b.coming.height=this.height/b.opts.pixelRatio;b._afterLoad()};a.onerror=function(){this.onload=
this.onerror=null;b._error("image")};a.src=b.coming.href;!0!==a.complete&&b.showLoading()},_loadAjax:function(){var a=b.coming;b.showLoading();b.ajaxLoad=f.ajax(f.extend({},a.ajax,{url:a.href,error:function(a,e){b.coming&&"abort"!==e?b._error("ajax",a):b.hideLoading()},success:function(d,e){"success"===e&&(a.content=d,b._afterLoad())}}))},_loadIframe:function(){var a=b.coming,d=f(a.tpl.iframe.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",s?"auto":a.iframe.scrolling).attr("src",a.href);
f(a.wrap).bind("onReset",function(){try{f(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(a){}});a.iframe.preload&&(b.showLoading(),d.one("load",function(){f(this).data("ready",1);s||f(this).bind("load.fb",b.update);f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();b._afterLoad()}));a.content=d.appendTo(a.inner);a.iframe.preload||b._afterLoad()},_preloadImages:function(){var a=b.group,d=b.current,e=a.length,c=d.preload?Math.min(d.preload,
e-1):0,f,g;for(g=1;g<=c;g+=1)f=a[(d.index+g)%e],"image"===f.type&&f.href&&((new Image).src=f.href)},_afterLoad:function(){var a=b.coming,d=b.current,e,c,k,g,h;b.hideLoading();if(a&&!1!==b.isActive)if(!1===b.trigger("afterLoad",a,d))a.wrap.stop(!0).trigger("onReset").remove(),b.coming=null;else{d&&(b.trigger("beforeChange",d),d.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());b.unbindEvents();e=a.content;c=a.type;k=a.scrolling;f.extend(b,{wrap:a.wrap,skin:a.skin,
outer:a.outer,inner:a.inner,current:a,previous:d});g=a.href;switch(c){case "inline":case "ajax":case "html":a.selector?e=f("<div>").html(e).find(a.selector):t(e)&&(e.data("fancybox-placeholder")||e.data("fancybox-placeholder",f('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()),e=e.show().detach(),a.wrap.bind("onReset",function(){f(this).find(e).length&&e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder",!1)}));break;case "image":e=a.tpl.image.replace("{href}",
g);break;case "swf":e='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+g+'"></param>',h="",f.each(a.swf,function(a,b){e+='<param name="'+a+'" value="'+b+'"></param>';h+=" "+a+'="'+b+'"'}),e+='<embed src="'+g+'" type="application/x-shockwave-flash" width="100%" height="100%"'+h+"></embed></object>"}(!t(e)||!e.parent().is(a.inner))&&a.inner.append(e);b.trigger("beforeShow");a.inner.css("overflow","yes"===k?"scroll":
"no"===k?"hidden":k);b._setDimension();b.reposition();b.isOpen=!1;b.coming=null;b.bindEvents();if(b.isOpened){if(d.prevMethod)b.transitions[d.prevMethod]()}else f(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove();b.transitions[b.isOpened?a.nextMethod:a.openMethod]();b._preloadImages()}},_setDimension:function(){var a=b.getViewport(),d=0,e=!1,c=!1,e=b.wrap,k=b.skin,g=b.inner,h=b.current,c=h.width,j=h.height,m=h.minWidth,u=h.minHeight,n=h.maxWidth,p=h.maxHeight,s=h.scrolling,q=h.scrollOutside?
h.scrollbarWidth:0,x=h.margin,y=l(x[1]+x[3]),r=l(x[0]+x[2]),v,z,t,C,A,F,B,D,H;e.add(k).add(g).width("auto").height("auto").removeClass("fancybox-tmp");x=l(k.outerWidth(!0)-k.width());v=l(k.outerHeight(!0)-k.height());z=y+x;t=r+v;C=E(c)?(a.w-z)*l(c)/100:c;A=E(j)?(a.h-t)*l(j)/100:j;if("iframe"===h.type){if(H=h.content,h.autoHeight&&1===H.data("ready"))try{H[0].contentWindow.document.location&&(g.width(C).height(9999),F=H.contents().find("body"),q&&F.css("overflow-x","hidden"),A=F.outerHeight(!0))}catch(G){}}else if(h.autoWidth||
h.autoHeight)g.addClass("fancybox-tmp"),h.autoWidth||g.width(C),h.autoHeight||g.height(A),h.autoWidth&&(C=g.width()),h.autoHeight&&(A=g.height()),g.removeClass("fancybox-tmp");c=l(C);j=l(A);D=C/A;m=l(E(m)?l(m,"w")-z:m);n=l(E(n)?l(n,"w")-z:n);u=l(E(u)?l(u,"h")-t:u);p=l(E(p)?l(p,"h")-t:p);F=n;B=p;h.fitToView&&(n=Math.min(a.w-z,n),p=Math.min(a.h-t,p));z=a.w-y;r=a.h-r;h.aspectRatio?(c>n&&(c=n,j=l(c/D)),j>p&&(j=p,c=l(j*D)),c<m&&(c=m,j=l(c/D)),j<u&&(j=u,c=l(j*D))):(c=Math.max(m,Math.min(c,n)),h.autoHeight&&
"iframe"!==h.type&&(g.width(c),j=g.height()),j=Math.max(u,Math.min(j,p)));if(h.fitToView)if(g.width(c).height(j),e.width(c+x),a=e.width(),y=e.height(),h.aspectRatio)for(;(a>z||y>r)&&(c>m&&j>u)&&!(19<d++);)j=Math.max(u,Math.min(p,j-10)),c=l(j*D),c<m&&(c=m,j=l(c/D)),c>n&&(c=n,j=l(c/D)),g.width(c).height(j),e.width(c+x),a=e.width(),y=e.height();else c=Math.max(m,Math.min(c,c-(a-z))),j=Math.max(u,Math.min(j,j-(y-r)));q&&("auto"===s&&j<A&&c+x+q<z)&&(c+=q);g.width(c).height(j);e.width(c+x);a=e.width();
y=e.height();e=(a>z||y>r)&&c>m&&j>u;c=h.aspectRatio?c<F&&j<B&&c<C&&j<A:(c<F||j<B)&&(c<C||j<A);f.extend(h,{dim:{width:w(a),height:w(y)},origWidth:C,origHeight:A,canShrink:e,canExpand:c,wPadding:x,hPadding:v,wrapSpace:y-k.outerHeight(!0),skinSpace:k.height()-j});!H&&(h.autoHeight&&j>u&&j<p&&!c)&&g.height("auto")},_getPosition:function(a){var d=b.current,e=b.getViewport(),c=d.margin,f=b.wrap.width()+c[1]+c[3],g=b.wrap.height()+c[0]+c[2],c={position:"absolute",top:c[0],left:c[3]};d.autoCenter&&d.fixed&&
!a&&g<=e.h&&f<=e.w?c.position="fixed":d.locked||(c.top+=e.y,c.left+=e.x);c.top=w(Math.max(c.top,c.top+(e.h-g)*d.topRatio));c.left=w(Math.max(c.left,c.left+(e.w-f)*d.leftRatio));return c},_afterZoomIn:function(){var a=b.current;a&&(b.isOpen=b.isOpened=!0,b.wrap.css("overflow","visible").addClass("fancybox-opened"),b.update(),(a.closeClick||a.nextClick&&1<b.group.length)&&b.inner.css("cursor","pointer").bind("click.fb",function(d){!f(d.target).is("a")&&!f(d.target).parent().is("a")&&(d.preventDefault(),
b[a.closeClick?"close":"next"]())}),a.closeBtn&&f(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb",function(a){a.preventDefault();b.close()}),a.arrows&&1<b.group.length&&((a.loop||0<a.index)&&f(a.tpl.prev).appendTo(b.outer).bind("click.fb",b.prev),(a.loop||a.index<b.group.length-1)&&f(a.tpl.next).appendTo(b.outer).bind("click.fb",b.next)),b.trigger("afterShow"),!a.loop&&a.index===a.group.length-1?b.play(!1):b.opts.autoPlay&&!b.player.isActive&&(b.opts.autoPlay=!1,b.play()))},_afterZoomOut:function(a){a=
a||b.current;f(".fancybox-wrap").trigger("onReset").remove();f.extend(b,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null});b.trigger("afterClose",a)}});b.transitions={getOrigPosition:function(){var a=b.current,d=a.element,e=a.orig,c={},f=50,g=50,h=a.hPadding,j=a.wPadding,m=b.getViewport();!e&&(a.isDom&&d.is(":visible"))&&(e=d.find("img:first"),e.length||(e=d));t(e)?(c=e.offset(),e.is("img")&&(f=e.outerWidth(),g=e.outerHeight())):
(c.top=m.y+(m.h-g)*a.topRatio,c.left=m.x+(m.w-f)*a.leftRatio);if("fixed"===b.wrap.css("position")||a.locked)c.top-=m.y,c.left-=m.x;return c={top:w(c.top-h*a.topRatio),left:w(c.left-j*a.leftRatio),width:w(f+j),height:w(g+h)}},step:function(a,d){var e,c,f=d.prop;c=b.current;var g=c.wrapSpace,h=c.skinSpace;if("width"===f||"height"===f)e=d.end===d.start?1:(a-d.start)/(d.end-d.start),b.isClosing&&(e=1-e),c="width"===f?c.wPadding:c.hPadding,c=a-c,b.skin[f](l("width"===f?c:c-g*e)),b.inner[f](l("width"===
f?c:c-g*e-h*e))},zoomIn:function(){var a=b.current,d=a.pos,e=a.openEffect,c="elastic"===e,k=f.extend({opacity:1},d);delete k.position;c?(d=this.getOrigPosition(),a.openOpacity&&(d.opacity=0.1)):"fade"===e&&(d.opacity=0.1);b.wrap.css(d).animate(k,{duration:"none"===e?0:a.openSpeed,easing:a.openEasing,step:c?this.step:null,complete:b._afterZoomIn})},zoomOut:function(){var a=b.current,d=a.closeEffect,e="elastic"===d,c={opacity:0.1};e&&(c=this.getOrigPosition(),a.closeOpacity&&(c.opacity=0.1));b.wrap.animate(c,
{duration:"none"===d?0:a.closeSpeed,easing:a.closeEasing,step:e?this.step:null,complete:b._afterZoomOut})},changeIn:function(){var a=b.current,d=a.nextEffect,e=a.pos,c={opacity:1},f=b.direction,g;e.opacity=0.1;"elastic"===d&&(g="down"===f||"up"===f?"top":"left","down"===f||"right"===f?(e[g]=w(l(e[g])-200),c[g]="+=200px"):(e[g]=w(l(e[g])+200),c[g]="-=200px"));"none"===d?b._afterZoomIn():b.wrap.css(e).animate(c,{duration:a.nextSpeed,easing:a.nextEasing,complete:b._afterZoomIn})},changeOut:function(){var a=
b.previous,d=a.prevEffect,e={opacity:0.1},c=b.direction;"elastic"===d&&(e["down"===c||"up"===c?"top":"left"]=("up"===c||"left"===c?"-":"+")+"=200px");a.wrap.animate(e,{duration:"none"===d?0:a.prevSpeed,easing:a.prevEasing,complete:function(){f(this).trigger("onReset").remove()}})}};b.helpers.overlay={defaults:{closeClick:!0,speedOut:200,showEarly:!0,css:{},locked:!s,fixed:!0},overlay:null,fixed:!1,el:f("html"),create:function(a){a=f.extend({},this.defaults,a);this.overlay&&this.close();this.overlay=
f('<div class="fancybox-overlay"></div>').appendTo(b.coming?b.coming.parent:a.parent);this.fixed=!1;a.fixed&&b.defaults.fixed&&(this.overlay.addClass("fancybox-overlay-fixed"),this.fixed=!0)},open:function(a){var d=this;a=f.extend({},this.defaults,a);this.overlay?this.overlay.unbind(".overlay").width("auto").height("auto"):this.create(a);this.fixed||(n.bind("resize.overlay",f.proxy(this.update,this)),this.update());a.closeClick&&this.overlay.bind("click.overlay",function(a){if(f(a.target).hasClass("fancybox-overlay"))return b.isActive?
b.close():d.close(),!1});this.overlay.css(a.css).show()},close:function(){var a,b;n.unbind("resize.overlay");this.el.hasClass("fancybox-lock")&&(f(".fancybox-margin").removeClass("fancybox-margin"),a=n.scrollTop(),b=n.scrollLeft(),this.el.removeClass("fancybox-lock"),n.scrollTop(a).scrollLeft(b));f(".fancybox-overlay").remove().hide();f.extend(this,{overlay:null,fixed:!1})},update:function(){var a="100%",b;this.overlay.width(a).height("100%");I?(b=Math.max(G.documentElement.offsetWidth,G.body.offsetWidth),
p.width()>b&&(a=p.width())):p.width()>n.width()&&(a=p.width());this.overlay.width(a).height(p.height())},onReady:function(a,b){var e=this.overlay;f(".fancybox-overlay").stop(!0,!0);e||this.create(a);a.locked&&(this.fixed&&b.fixed)&&(e||(this.margin=p.height()>n.height()?f("html").css("margin-right").replace("px",""):!1),b.locked=this.overlay.append(b.wrap),b.fixed=!1);!0===a.showEarly&&this.beforeShow.apply(this,arguments)},beforeShow:function(a,b){var e,c;b.locked&&(!1!==this.margin&&(f("*").filter(function(){return"fixed"===
f(this).css("position")&&!f(this).hasClass("fancybox-overlay")&&!f(this).hasClass("fancybox-wrap")}).addClass("fancybox-margin"),this.el.addClass("fancybox-margin")),e=n.scrollTop(),c=n.scrollLeft(),this.el.addClass("fancybox-lock"),n.scrollTop(e).scrollLeft(c));this.open(a)},onUpdate:function(){this.fixed||this.update()},afterClose:function(a){this.overlay&&!b.coming&&this.overlay.fadeOut(a.speedOut,f.proxy(this.close,this))}};b.helpers.title={defaults:{type:"float",position:"bottom"},beforeShow:function(a){var d=
b.current,e=d.title,c=a.type;f.isFunction(e)&&(e=e.call(d.element,d));if(q(e)&&""!==f.trim(e)){d=f('<div class="fancybox-title fancybox-title-'+c+'-wrap">'+e+"</div>");switch(c){case "inside":c=b.skin;break;case "outside":c=b.wrap;break;case "over":c=b.inner;break;default:c=b.skin,d.appendTo("body"),I&&d.width(d.width()),d.wrapInner('<span class="child"></span>'),b.current.margin[2]+=Math.abs(l(d.css("margin-bottom")))}d["top"===a.position?"prependTo":"appendTo"](c)}}};f.fn.fancybox=function(a){var d,
e=f(this),c=this.selector||"",k=function(g){var h=f(this).blur(),j=d,k,l;!g.ctrlKey&&(!g.altKey&&!g.shiftKey&&!g.metaKey)&&!h.is(".fancybox-wrap")&&(k=a.groupAttr||"data-fancybox-group",l=h.attr(k),l||(k="rel",l=h.get(0)[k]),l&&(""!==l&&"nofollow"!==l)&&(h=c.length?f(c):e,h=h.filter("["+k+'="'+l+'"]'),j=h.index(this)),a.index=j,!1!==b.open(h,a)&&g.preventDefault())};a=a||{};d=a.index||0;!c||!1===a.live?e.unbind("click.fb-start").bind("click.fb-start",k):p.undelegate(c,"click.fb-start").delegate(c+
":not('.fancybox-item, .fancybox-nav')","click.fb-start",k);this.filter("[data-fancybox-start=1]").trigger("click");return this};p.ready(function(){var a,d;f.scrollbarWidth===v&&(f.scrollbarWidth=function(){var a=f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),b=a.children(),b=b.innerWidth()-b.height(99).innerWidth();a.remove();return b});if(f.support.fixedPosition===v){a=f.support;d=f('<div style="position:fixed;top:20px;"></div>').appendTo("body");var e=20===
d[0].offsetTop||15===d[0].offsetTop;d.remove();a.fixedPosition=e}f.extend(b.defaults,{scrollbarWidth:f.scrollbarWidth(),fixed:f.support.fixedPosition,parent:f("body")});a=f(r).width();J.addClass("fancybox-lock-test");d=f(r).width();J.removeClass("fancybox-lock-test");f("<style type='text/css'>.fancybox-margin{margin-right:"+(d-a)+"px;}</style>").appendTo("head")})})(window,document,jQuery);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:31:"/js/yaMetrika.js?16184932921618";s:6:"source";s:16:"/js/yaMetrika.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function ($, w) {
setTimeout(() => {
        ym(39861120, 'reachGoal', 'timeOnSite')
    }, 70000);


    $(function () {
        var $link = $('.ya-link');
        var $submit = $('.ya-submit');
        var _debug = 1;
        var methods = {
            reach: function (counter, goal) {
                w['yaCounter' + counter].reachGoal(goal);
            },
            sendTag(type, id) {
                // Событие / название события / параметры
                gtag('event', 'event', {'event_category': type, 'event_action': id,})
            }
        };
        try {
            if (appGlobalsVarible === undefined && appGlobalsVarible.yametrika === undefined) {
                if (_debug) console.log('[YA METRIKA] ID не найден')
                return
            }
        } catch (e) {
            console.warn(e);
            return;
        }

        $('form').each(function () {
            var $form = $(this);
            var $goalInput = $form.find('[name=goal]');
            if ($goalInput.length == 0) return;
            $form.attr('data-goal', $goalInput.val());
            $form.on('submit', goalHandler);
        });


        $link.on('click', goalHandler);
        $submit.on('submit', goalHandler);

        function goalHandler(e) {
            var $this = $(this);
            var id = $this.attr('data-goal');
            console.log(e.type);
            if (id !== undefined) {
                methods.reach(appGlobalsVarible.yametrika.id, id);
                methods.sendTag(e.type, id);
            }
        }
    })
})(jQuery, window);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:56:"/bitrix/templates/main/js/functions.min.js?1509013549804";s:6:"source";s:38:"/bitrix/templates/main/js/functions.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
function setCookie(e,g,c){c=c||{};var b=c.expires;if(typeof b=="number"&&b){var i=new Date();i.setTime(i.getTime()+b*1000);b=c.expires=i}if(b&&b.toUTCString){c.expires=b.toUTCString()}g=encodeURIComponent(g);var a=e+"="+g;for(var f in c){a+="; "+f;var h=c[f];if(h!==true){a+="="+h}}document.cookie=a}function getCookie(a){var b=document.cookie.match(new RegExp("(?:^|; )"+a.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return b?decodeURIComponent(b[1]):undefined}function deleteCookie(a){setCookie(a,"",{expires:-1})}if(typeof BX==="function"){BX.showWait=function(a,b){showFixedPreloader()};BX.closeWait=function(b,a){hideFixedPreloader()}}function showFixedPreloader(){$("#loader-wrapper").css("display","block")}function hideFixedPreloader(){$("#loader-wrapper").css("display","none")};
/* End */
;
; /* Start:"a:4:{s:4:"full";s:54:"/bitrix/templates/main/js/for_comagic.js?1577454103967";s:6:"source";s:40:"/bitrix/templates/main/js/for_comagic.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
var credential;
var cred_counter = 0;
var cred_timeout;

function get_credential() {
	if(Comagic === undefined || Comagic === null) {
		return;
	}
	credential = Comagic.getCredentials();
	if( isNaN(credential.hit_id) && cred_counter++ < 15 ) {
setTimeout(get_credential, 300);
	}
	else {
		clearTimeout(cred_timeout);
		set_credential();
	}
}

function set_credential() {
	
	var $input_comagic = $("input[data-field='comagic']");
	$input_comagic.val(JSON.stringify(credential));
}

$(window).load(function() {
	if(Comagic !== undefined && Comagic !== null) {
		try {
			credential = Comagic.getCredentials();
		} catch (e) {
			credential = [];
			credential.hit_id = NaN;
			console.log(e);
		}
		
		if( isNaN(credential.hit_id) ) {
			cred_timeout = setTimeout(get_credential, 300);
		}
		else {
			set_credential();
		}
	}
	else {
		cred_timeout = setTimeout(get_credential, 300);
	}
});

/*
BX.addCustomEvent('onAjaxSuccess', function(){
	set_credential();
});*/

/* End */
;
; /* Start:"a:4:{s:4:"full";s:60:"/js/twentytwenty-master/jquery.event.move.js?147375731314709";s:6:"source";s:44:"/js/twentytwenty-master/jquery.event.move.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
// jquery.event.move
//
// 1.3.6
//
// Stephen Band
//
// Triggers 'movestart', 'move' and 'moveend' events after
// mousemoves following a mousedown cross a distance threshold,
// similar to the native 'dragstart', 'drag' and 'dragend' events.
// Move events are throttled to animation frames. Move event objects
// have the properties:
//
// pageX:
// pageY:   Page coordinates of pointer.
// startX:
// startY:  Page coordinates of pointer at movestart.
// distX:
// distY:  Distance the pointer has moved since movestart.
// deltaX:
// deltaY:  Distance the finger has moved since last event.
// velocityX:
// velocityY:  Average velocity over last few events.


(function (module) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define(['jquery'], module);
	} else {
		// Browser globals
		module(jQuery);
	}
})(function(jQuery, undefined){

	var // Number of pixels a pressed pointer travels before movestart
	    // event is fired.
	    threshold = 6,
	
	    add = jQuery.event.add,
	
	    remove = jQuery.event.remove,

	    // Just sugar, so we can have arguments in the same order as
	    // add and remove.
	    trigger = function(node, type, data) {
	    	jQuery.event.trigger(type, data, node);
	    },

	    // Shim for requestAnimationFrame, falling back to timer. See:
	    // see http://paulirish.com/2011/requestanimationframe-for-smart-animating/
	    requestFrame = (function(){
	    	return (
	    		window.requestAnimationFrame ||
	    		window.webkitRequestAnimationFrame ||
	    		window.mozRequestAnimationFrame ||
	    		window.oRequestAnimationFrame ||
	    		window.msRequestAnimationFrame ||
	    		function(fn, element){
	    			return window.setTimeout(function(){
	    				fn();
	    			}, 25);
	    		}
	    	);
	    })(),
	    
	    ignoreTags = {
	    	textarea: true,
	    	input: true,
	    	select: true,
	    	button: true
	    },
	    
	    mouseevents = {
	    	move: 'mousemove',
	    	cancel: 'mouseup dragstart',
	    	end: 'mouseup'
	    },
	    
	    touchevents = {
	    	move: 'touchmove',
	    	cancel: 'touchend',
	    	end: 'touchend'
	    };


	// Constructors
	
	function Timer(fn){
		var callback = fn,
		    active = false,
		    running = false;
		
		function trigger(time) {
			if (active){
				callback();
				requestFrame(trigger);
				running = true;
				active = false;
			}
			else {
				running = false;
			}
		}
		
		this.kick = function(fn) {
			active = true;
			if (!running) { trigger(); }
		};
		
		this.end = function(fn) {
			var cb = callback;
			
			if (!fn) { return; }
			
			// If the timer is not running, simply call the end callback.
			if (!running) {
				fn();
			}
			// If the timer is running, and has been kicked lately, then
			// queue up the current callback and the end callback, otherwise
			// just the end callback.
			else {
				callback = active ?
					function(){ cb(); fn(); } : 
					fn ;
				
				active = true;
			}
		};
	}


	// Functions
	
	function returnTrue() {
		return true;
	}
	
	function returnFalse() {
		return false;
	}
	
	function preventDefault(e) {
		e.preventDefault();
	}
	
	function preventIgnoreTags(e) {
		// Don't prevent interaction with form elements.
		if (ignoreTags[ e.target.tagName.toLowerCase() ]) { return; }
		
		e.preventDefault();
	}

	function isLeftButton(e) {
		// Ignore mousedowns on any button other than the left (or primary)
		// mouse button, or when a modifier key is pressed.
		return (e.which === 1 && !e.ctrlKey && !e.altKey);
	}

	function identifiedTouch(touchList, id) {
		var i, l;

		if (touchList.identifiedTouch) {
			return touchList.identifiedTouch(id);
		}
		
		// touchList.identifiedTouch() does not exist in
		// webkit yet… we must do the search ourselves...
		
		i = -1;
		l = touchList.length;
		
		while (++i < l) {
			if (touchList[i].identifier === id) {
				return touchList[i];
			}
		}
	}

	function changedTouch(e, event) {
		var touch = identifiedTouch(e.changedTouches, event.identifier);

		// This isn't the touch you're looking for.
		if (!touch) { return; }

		// Chrome Android (at least) includes touches that have not
		// changed in e.changedTouches. That's a bit annoying. Check
		// that this touch has changed.
		if (touch.pageX === event.pageX && touch.pageY === event.pageY) { return; }

		return touch;
	}


	// Handlers that decide when the first movestart is triggered
	
	function mousedown(e){
		var data;

		if (!isLeftButton(e)) { return; }

		data = {
			target: e.target,
			startX: e.pageX,
			startY: e.pageY,
			timeStamp: e.timeStamp
		};

		add(document, mouseevents.move, mousemove, data);
		add(document, mouseevents.cancel, mouseend, data);
	}

	function mousemove(e){
		var data = e.data;

		checkThreshold(e, data, e, removeMouse);
	}

	function mouseend(e) {
		removeMouse();
	}

	function removeMouse() {
		remove(document, mouseevents.move, mousemove);
		remove(document, mouseevents.cancel, mouseend);
	}

	function touchstart(e) {
		var touch, template;

		// Don't get in the way of interaction with form elements.
		if (ignoreTags[ e.target.tagName.toLowerCase() ]) { return; }

		touch = e.changedTouches[0];
		
		// iOS live updates the touch objects whereas Android gives us copies.
		// That means we can't trust the touchstart object to stay the same,
		// so we must copy the data. This object acts as a template for
		// movestart, move and moveend event objects.
		template = {
			target: touch.target,
			startX: touch.pageX,
			startY: touch.pageY,
			timeStamp: e.timeStamp,
			identifier: touch.identifier
		};

		// Use the touch identifier as a namespace, so that we can later
		// remove handlers pertaining only to this touch.
		add(document, touchevents.move + '.' + touch.identifier, touchmove, template);
		add(document, touchevents.cancel + '.' + touch.identifier, touchend, template);
	}

	function touchmove(e){
		var data = e.data,
		    touch = changedTouch(e, data);

		if (!touch) { return; }

		checkThreshold(e, data, touch, removeTouch);
	}

	function touchend(e) {
		var template = e.data,
		    touch = identifiedTouch(e.changedTouches, template.identifier);

		if (!touch) { return; }

		removeTouch(template.identifier);
	}

	function removeTouch(identifier) {
		remove(document, '.' + identifier, touchmove);
		remove(document, '.' + identifier, touchend);
	}


	// Logic for deciding when to trigger a movestart.

	function checkThreshold(e, template, touch, fn) {
		var distX = touch.pageX - template.startX,
		    distY = touch.pageY - template.startY;

		// Do nothing if the threshold has not been crossed.
		if ((distX * distX) + (distY * distY) < (threshold * threshold)) { return; }

		triggerStart(e, template, touch, distX, distY, fn);
	}

	function handled() {
		// this._handled should return false once, and after return true.
		this._handled = returnTrue;
		return false;
	}

	function flagAsHandled(e) {
		e._handled();
	}

	function triggerStart(e, template, touch, distX, distY, fn) {
		var node = template.target,
		    touches, time;

		touches = e.targetTouches;
		time = e.timeStamp - template.timeStamp;

		// Create a movestart object with some special properties that
		// are passed only to the movestart handlers.
		template.type = 'movestart';
		template.distX = distX;
		template.distY = distY;
		template.deltaX = distX;
		template.deltaY = distY;
		template.pageX = touch.pageX;
		template.pageY = touch.pageY;
		template.velocityX = distX / time;
		template.velocityY = distY / time;
		template.targetTouches = touches;
		template.finger = touches ?
			touches.length :
			1 ;

		// The _handled method is fired to tell the default movestart
		// handler that one of the move events is bound.
		template._handled = handled;
			
		// Pass the touchmove event so it can be prevented if or when
		// movestart is handled.
		template._preventTouchmoveDefault = function() {
			e.preventDefault();
		};

		// Trigger the movestart event.
		trigger(template.target, template);

		// Unbind handlers that tracked the touch or mouse up till now.
		fn(template.identifier);
	}


	// Handlers that control what happens following a movestart

	function activeMousemove(e) {
		var timer = e.data.timer;

		e.data.touch = e;
		e.data.timeStamp = e.timeStamp;
		timer.kick();
	}

	function activeMouseend(e) {
		var event = e.data.event,
		    timer = e.data.timer;
		
		removeActiveMouse();

		endEvent(event, timer, function() {
			// Unbind the click suppressor, waiting until after mouseup
			// has been handled.
			setTimeout(function(){
				remove(event.target, 'click', returnFalse);
			}, 0);
		});
	}

	function removeActiveMouse(event) {
		remove(document, mouseevents.move, activeMousemove);
		remove(document, mouseevents.end, activeMouseend);
	}

	function activeTouchmove(e) {
		var event = e.data.event,
		    timer = e.data.timer,
		    touch = changedTouch(e, event);

		if (!touch) { return; }

		// Stop the interface from gesturing
		e.preventDefault();

		event.targetTouches = e.targetTouches;
		e.data.touch = touch;
		e.data.timeStamp = e.timeStamp;
		timer.kick();
	}

	function activeTouchend(e) {
		var event = e.data.event,
		    timer = e.data.timer,
		    touch = identifiedTouch(e.changedTouches, event.identifier);

		// This isn't the touch you're looking for.
		if (!touch) { return; }

		removeActiveTouch(event);
		endEvent(event, timer);
	}

	function removeActiveTouch(event) {
		remove(document, '.' + event.identifier, activeTouchmove);
		remove(document, '.' + event.identifier, activeTouchend);
	}


	// Logic for triggering move and moveend events

	function updateEvent(event, touch, timeStamp, timer) {
		var time = timeStamp - event.timeStamp;

		event.type = 'move';
		event.distX =  touch.pageX - event.startX;
		event.distY =  touch.pageY - event.startY;
		event.deltaX = touch.pageX - event.pageX;
		event.deltaY = touch.pageY - event.pageY;
		
		// Average the velocity of the last few events using a decay
		// curve to even out spurious jumps in values.
		event.velocityX = 0.3 * event.velocityX + 0.7 * event.deltaX / time;
		event.velocityY = 0.3 * event.velocityY + 0.7 * event.deltaY / time;
		event.pageX =  touch.pageX;
		event.pageY =  touch.pageY;
	}

	function endEvent(event, timer, fn) {
		timer.end(function(){
			event.type = 'moveend';

			trigger(event.target, event);
			
			return fn && fn();
		});
	}


	// jQuery special event definition

	function setup(data, namespaces, eventHandle) {
		// Stop the node from being dragged
		//add(this, 'dragstart.move drag.move', preventDefault);
		
		// Prevent text selection and touch interface scrolling
		//add(this, 'mousedown.move', preventIgnoreTags);
		
		// Tell movestart default handler that we've handled this
		add(this, 'movestart.move', flagAsHandled);

		// Don't bind to the DOM. For speed.
		return true;
	}
	
	function teardown(namespaces) {
		remove(this, 'dragstart drag', preventDefault);
		remove(this, 'mousedown touchstart', preventIgnoreTags);
		remove(this, 'movestart', flagAsHandled);
		
		// Don't bind to the DOM. For speed.
		return true;
	}
	
	function addMethod(handleObj) {
		// We're not interested in preventing defaults for handlers that
		// come from internal move or moveend bindings
		if (handleObj.namespace === "move" || handleObj.namespace === "moveend") {
			return;
		}
		
		// Stop the node from being dragged
		add(this, 'dragstart.' + handleObj.guid + ' drag.' + handleObj.guid, preventDefault, undefined, handleObj.selector);
		
		// Prevent text selection and touch interface scrolling
		add(this, 'mousedown.' + handleObj.guid, preventIgnoreTags, undefined, handleObj.selector);
	}
	
	function removeMethod(handleObj) {
		if (handleObj.namespace === "move" || handleObj.namespace === "moveend") {
			return;
		}
		
		remove(this, 'dragstart.' + handleObj.guid + ' drag.' + handleObj.guid);
		remove(this, 'mousedown.' + handleObj.guid);
	}
	
	jQuery.event.special.movestart = {
		setup: setup,
		teardown: teardown,
		add: addMethod,
		remove: removeMethod,

		_default: function(e) {
			var event, data;
			
			// If no move events were bound to any ancestors of this
			// target, high tail it out of here.
			if (!e._handled()) { return; }

			function update(time) {
				updateEvent(event, data.touch, data.timeStamp);
				trigger(e.target, event);
			}

			event = {
				target: e.target,
				startX: e.startX,
				startY: e.startY,
				pageX: e.pageX,
				pageY: e.pageY,
				distX: e.distX,
				distY: e.distY,
				deltaX: e.deltaX,
				deltaY: e.deltaY,
				velocityX: e.velocityX,
				velocityY: e.velocityY,
				timeStamp: e.timeStamp,
				identifier: e.identifier,
				targetTouches: e.targetTouches,
				finger: e.finger
			};

			data = {
				event: event,
				timer: new Timer(update),
				touch: undefined,
				timeStamp: undefined
			};
			
			if (e.identifier === undefined) {
				// We're dealing with a mouse
				// Stop clicks from propagating during a move
				add(e.target, 'click', returnFalse);
				add(document, mouseevents.move, activeMousemove, data);
				add(document, mouseevents.end, activeMouseend, data);
			}
			else {
				// We're dealing with a touch. Stop touchmove doing
				// anything defaulty.
				e._preventTouchmoveDefault();
				add(document, touchevents.move + '.' + e.identifier, activeTouchmove, data);
				add(document, touchevents.end + '.' + e.identifier, activeTouchend, data);
			}
		}
	};

	jQuery.event.special.move = {
		setup: function() {
			// Bind a noop to movestart. Why? It's the movestart
			// setup that decides whether other move events are fired.
			add(this, 'movestart.move', jQuery.noop);
		},
		
		teardown: function() {
			remove(this, 'movestart.move', jQuery.noop);
		}
	};
	
	jQuery.event.special.moveend = {
		setup: function() {
			// Bind a noop to movestart. Why? It's the movestart
			// setup that decides whether other move events are fired.
			add(this, 'movestart.moveend', jQuery.noop);
		},
		
		teardown: function() {
			remove(this, 'movestart.moveend', jQuery.noop);
		}
	};

	add(document, 'mousedown.move', mousedown);
	add(document, 'touchstart.move', touchstart);

	// Make jQuery copy touch event properties over to the jQuery event
	// object, if they are not already listed. But only do the ones we
	// really need. IE7/8 do not have Array#indexOf(), but nor do they
	// have touch events, so let's assume we can ignore them.
	if (typeof Array.prototype.indexOf === 'function') {
		(function(jQuery, undefined){
			var props = ["changedTouches", "targetTouches"],
			    l = props.length;
			
			while (l--) {
				if (jQuery.event.props.indexOf(props[l]) === -1) {
					jQuery.event.props.push(props[l]);
				}
			}
		})(jQuery);
	};
});

/* End */
;
; /* Start:"a:4:{s:4:"full";s:61:"/js/twentytwenty-master/jquery.twentytwenty.js?14737573133721";s:6:"source";s:46:"/js/twentytwenty-master/jquery.twentytwenty.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function($){

  $.fn.twentytwenty = function(options) {
    var options = $.extend({default_offset_pct: 0.5, orientation: 'horizontal'}, options);
    return this.each(function() {

      var sliderPct = options.default_offset_pct;
      var container = $(this);
      var sliderOrientation = options.orientation;
      var beforeDirection = (sliderOrientation === 'vertical') ? 'down' : 'left';
      var afterDirection = (sliderOrientation === 'vertical') ? 'up' : 'right';
      
      
      container.wrap("<div class='twentytwenty-wrapper twentytwenty-" + sliderOrientation + "'></div>");
      container.append("<div class='twentytwenty-overlay'></div>");
      var beforeImg = container.find("img:first");
      var afterImg = container.find("img:last");
      container.append("<div class='twentytwenty-handle'></div>");
      var slider = container.find(".twentytwenty-handle");
      slider.append("<span class='twentytwenty-" + beforeDirection + "-arrow'></span>");
      slider.append("<span class='twentytwenty-" + afterDirection + "-arrow'></span>");
      container.addClass("twentytwenty-container");
      beforeImg.addClass("twentytwenty-before");
      afterImg.addClass("twentytwenty-after");
      
      var overlay = container.find(".twentytwenty-overlay");
      overlay.append("<div class='twentytwenty-before-label'></div>");
      overlay.append("<div class='twentytwenty-after-label'></div>");

      var calcOffset = function(dimensionPct) {
        var w = beforeImg.width();
        var h = beforeImg.height();
        return {
          w: w+"px",
          h: h+"px",
          cw: (dimensionPct*w)+"px",
          ch: (dimensionPct*h)+"px"
        };
      };

      var adjustContainer = function(offset) {
      	if (sliderOrientation === 'vertical') {
      	  beforeImg.css("clip", "rect(0,"+offset.w+","+offset.ch+",0)");
      	}
      	else {
          beforeImg.css("clip", "rect(0,"+offset.cw+","+offset.h+",0)");
    	}
        container.css("height", offset.h);
      };

      var adjustSlider = function(pct) {
        var offset = calcOffset(pct);
        slider.css((sliderOrientation==="vertical") ? "top" : "left", (sliderOrientation==="vertical") ? offset.ch : offset.cw);
        adjustContainer(offset);
      }

      $(window).on("resize.twentytwenty", function(e) {
        adjustSlider(sliderPct);
      });

      var offsetX = 0;
      var imgWidth = 0;
      
      slider.on("movestart", function(e) {
        if (((e.distX > e.distY && e.distX < -e.distY) || (e.distX < e.distY && e.distX > -e.distY)) && sliderOrientation !== 'vertical') {
          e.preventDefault();
        }
        else if (((e.distX < e.distY && e.distX < -e.distY) || (e.distX > e.distY && e.distX > -e.distY)) && sliderOrientation === 'vertical') {
          e.preventDefault();
        }
        container.addClass("active");
        offsetX = container.offset().left;
        offsetY = container.offset().top;
        imgWidth = beforeImg.width(); 
        imgHeight = beforeImg.height();          
      });

      slider.on("moveend", function(e) {
        container.removeClass("active");
      });

      slider.on("move", function(e) {
        if (container.hasClass("active")) {
          sliderPct = (sliderOrientation === 'vertical') ? (e.pageY-offsetY)/imgHeight : (e.pageX-offsetX)/imgWidth;
          if (sliderPct < 0) {
            sliderPct = 0;
          }
          if (sliderPct > 1) {
            sliderPct = 1;
          }
          adjustSlider(sliderPct);
        }
      });

      container.find("img").on("mousedown", function(event) {
        event.preventDefault();
      });

      $(window).trigger("resize.twentytwenty");
    });
  };

})(jQuery);

/* End */
;
; /* Start:"a:4:{s:4:"full";s:30:"/js/compile.js?158013185122731";s:6:"source";s:14:"/js/compile.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
//© ООО Сео-Гранд seo-grand.ru
/**
 * Created by vasilisa on 14.09.16.
 */
(function ($) {
    var revapi;
    jQuery(document).ready(function() {


        // bind to button click
        jQuery(".es1_menutub__item").click(apiHandler)

        function apiHandler(e) {
            switch (e.currentTarget.id) {

                case "show1":

                    $(".np_wrapsec1").css("display","block");
                    $(".np_wrapsec2").css("display","none");

                    $("#show1").addClass("actnp");
                    $("#show2").removeClass("actnp");

                    break;

                case "show2":

                    $(".np_wrapsec1").css("display","none");
                    $(".np_wrapsec2").css("display","block");

                    $("#show2").addClass("actnp");
                    $("#show1").removeClass("actnp");

                    break;




            }
            return false;
        }

    });	//ready
})(jQuery);
(function ($) {
    $(window).load(function(){
        $(".twentytwenty-container[data-orientation!='vertical']").twentytwenty({default_offset_pct: 0.5});
        $(".twentytwenty-container[data-orientation='vertical']").twentytwenty({default_offset_pct: 0.5, orientation: 'vertical'});
    });
})(jQuery);
/**
 * Created by John on 04.10.16.
 */
(function(){
    function limitText(field, maxChar){
        var ref = $(field),
            val = ref.val();
        if ( val.length >= maxChar ){
            ref.val(function() {
                console.log(val.substr(0, maxChar))
                return val.substr(0, maxChar);
            });
        }
    }

    $(function(){
        $('#inprass').bind('keyup', function(){
            limitText(this, 3);
        });
    });
})();
(function ($) {
    $(function () {
        var $forms = $('form');


        $.each($forms, function () {
            var form = new FormValidate($(this));
            form.init();
        });

/*Статус отправки формы*/
        var $formOK = $('.b-form__ok');
        if ($formOK.length) {
            var $btnClose = $formOK.find('.i-close');
            $btnClose.on('click', function () {
                $formOK.parent('.b-form__ok__wrap').hide();
            });
            setTimeout(function(){
                $btnClose.trigger('click');
            }, 5000)
        }

    });

    var validators = {
        'e-mail': /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i,
        'phone': /^\+?\d{6,}$/
    };

    function FormValidate($el) {
        this.$el = $el;
        this.$submit = $el.find('button');
        /*Для comagic*/
        //this.message = this.$el.find('input[name=comagic]').val();
    }


    FormValidate.prototype = {
        constructor: FormValidate,
        init: function () {
            this.getAllFields();
            this.bindEvents();
            //this.iCanAddFile();
            //this.addMask();
        },
        getAllFields: function () {
            this.$fields = this.$el.find('.form-group');
            this.$fieldsToValid = this.$fields.find('[data-validation]').add(this.$el.find('textarea[data-validation]'));
        },
        bindEvents: function () {
            this.$submit.on('click', $.proxy(function (e) {
                console.log('submit');
                e.preventDefault();
                if (this.validate()) {
                    //$.cookie('form_sended', 'yes', {path: '/'});
                    this.addPreloader();
                    this.$el.trigger('submit');
                    //this.comagicGo();
                }
            }, this));
        },
        validate: function () {
            var result = true,
                self = this;
            $.each(this.$fieldsToValid, function () {
                var $this = $(this),
                    value = $this.val(),
                    validType = $this.data('validation');

                switch (validType) {
                    case 'number':
                    {
                        checkNumber();
                        break;
                    }
                    case 'required':
                    {
                        checkRequired();
                        break;
                    }
                    default:
                        checkString();
                        break;
                }


                function checkNumber() {
                    if (!Number(value) || value < 0 || value > 99) {
                        fieldInvalid();
                        return false;
                    }

                    $this.removeClass('invalid').parent().removeClass('input-error');
                }

                function checkRequired() {
                    if (value.length) {
                        $this.removeClass('invalid').parent().removeClass('input-error');
                    } else {
                        fieldInvalid();
                    }
                }

                function checkString() {
                    if (validators[validType].test(value)) {
                        $this.removeClass('invalid').parent().removeClass('input-error');
                    } else {
                        fieldInvalid();
                    }
                }

                function fieldInvalid() {
                    $this.addClass('invalid').parent().addClass('input-error');
                    result = false;
                    self.$fieldsToValid.filter('.phonemask').trigger('focus').val('');
                }


            });

            return result;
        },

        iCanAddFile: function () {
            var $fileInput = this.$el.find('input[type=file]');
            if ($fileInput.length) {
                var $btn_file = this.$el.find('.js-sketch');
                $btn_file.on('click', function (e) {
                    e.preventDefault();
                    $fileInput.trigger('click');
                });
                $fileInput.change(function () {
                    $btn_file.html('Эскизы загружены');
                });
            }
        },
        addMask: function () {
            var $input = this.$el.find('.input-phone');
            if ($input.length) {
                $input.mask("8 (999) 999-99-99");
            }
        },
        addPreloader: function () {
            $('#loader-wrapper').show();
        },
        comagicGo: function () {
            var $nameField = this.$fields.filter('._name'),
                name = $nameField.length ? $nameField.find('input').val() : '-',
                phone = this.$fields.filter('._phone').find('input').val(),
                email = '-',
                comagicObj = {name: name, email: email, phone: phone, message: this.message},
                self = this;

            try {
                //Comagic.addOfflineRequest(comagicObj);
            } catch (e) {
            }

            setTimeout(function () {
                self.$el.trigger('submit');
            }, 2000)
        }
    }
})(jQuery);
(function ($) {

    function mycarousel_initCallback_bx_3218110189_517(carousel) {
        jQuery('.jcarousel-control_bx_3218110189_517 div div a').bind('click', function() {
            carousel.scroll(jQuery.jcarousel.intval(jQuery(this).attr('ttt')));


            if($(this).parent().parent().is($(".jcarousel-control_bx_3218110189_517 div.jcontr").last())) {
                $(this).parent().parent().parent().find('.icocol').removeClass('icocolact');
                $(this).parent().addClass('icocolact');
                //$(".jcarousel-control_bx_3218110189_517 div.jcontr").first().children('.icocol').addClass('icocolact');
            }

            else {
                $(this).parent().parent().parent().find('.icocol').removeClass('icocolact');
                $(this).parent().addClass('icocolact');
                //$(this).parent().parent().next(".jcontr").children('.icocol').addClass('icocolact');
            }


            return false;
        });
    };

    jQuery(document).ready(function() {

        jQuery("#dvkarusel_bx_3218110189_517").jcarousel({
            scroll: 1,
            wrap: 'circular',
            initCallback: mycarousel_initCallback_bx_3218110189_517,
        });

        $(".jjcontrolout_bx_3218110189_517").appendTo(".jjcontrolin_bx_3218110189_517");

        // podsvetka tsvetov pri clickprev
        $("#dvkarusel_bx_3218110189_517 .jcarousel-prev").click(function () {

            var inprevbx_3218110189_517 = $(".jcarousel-control_bx_3218110189_517").find(".icocolact").parent().index(".jcarousel-control_bx_3218110189_517 .jcontr");

            if ( $(".jcarousel-control_bx_3218110189_517 .jcontr").eq(0).children('.icocol').hasClass("icocolact")  )
            {
                $(".jjcontrolin_bx_3218110189_517").find(".icocol").removeClass('icocolact');
                $(".jcarousel-control_bx_3218110189_517 .jcontr").eq(-1).children('.icocol').addClass('icocolact');
                //$(".jcarousel-control_bx_3218110189_517 .jcontr").eq(-2).children('.icocol').addClass('icocolact');
            }

            else  if ( $(".jcarousel-control_bx_3218110189_517 .jcontr").eq(0).children('.icocol').hasClass("icocolact")  &&  $(".jcarousel-control_bx_3218110189_517 .jcontr").eq(1).children('.icocol').hasClass("icocolact"))
            {
                $(".jjcontrolin_bx_3218110189_517").find(".icocol").removeClass('icocolact');
                $(".jcarousel-control_bx_3218110189_517 .jcontr").eq(0).children('.icocol').addClass('icocolact');
                $(".jcarousel-control_bx_3218110189_517 .jcontr").eq(-1).children('.icocol').addClass('icocolact');
            }

            else
            {
                $(".jjcontrolin_bx_3218110189_517").find(".icocol").removeClass('icocolact');
                //$(".jcarousel-control_bx_3218110189_517 .jcontr").eq(inprevbx_3218110189_517).children('.icocol').addClass('icocolact');
                $(".jcarousel-control_bx_3218110189_517 .jcontr").eq(inprevbx_3218110189_517).prev(".jcontr").children('.icocol').addClass('icocolact');
            }


        });





        // podsvetka tsvetov pri clicknext
        $("#dvkarusel_bx_3218110189_517 .jcarousel-next").click(function () {

            var innextbx_3218110189_517 = $(".jcarousel-control_bx_3218110189_517").find(".icocolact").parent().index(".jcarousel-control_bx_3218110189_517 .jcontr");



            if ( $(".jcarousel-control_bx_3218110189_517 .jcontr").eq(-1).children('.icocol').hasClass("icocolact"))
            {
                $(".jjcontrolin_bx_3218110189_517").find(".icocol").removeClass('icocolact');
                $(".jcarousel-control_bx_3218110189_517 .jcontr").eq(0).children('.icocol').addClass('icocolact');
                //$(".jcarousel-control_bx_3218110189_517 .jcontr").eq(1).children('.icocol').addClass('icocolact');
            }

            else  if ( $(".jcarousel-control_bx_3218110189_517 .jcontr").eq(-1).children('.icocol').hasClass("icocolact")  &&  $(".jcarousel-control_bx_3218110189_517 .jcontr").eq(-2).children('.icocol').hasClass("icocolact"))
            {
                $(".jjcontrolin_bx_3218110189_517").find(".icocol").removeClass('icocolact');
                $(".jcarousel-control_bx_3218110189_517 .jcontr").eq(0).children('.icocol').addClass('icocolact');
                $(".jcarousel-control_bx_3218110189_517 .jcontr").eq(-1).children('.icocol').addClass('icocolact');
            }

            else
            {
                $(".jjcontrolin_bx_3218110189_517").find(".icocol").removeClass('icocolact');
                //$(".jcarousel-control_bx_3218110189_517 .jcontr").eq(innextbx_3218110189_517).children('.icocol').addClass('icocolact');
                $(".jcarousel-control_bx_3218110189_517 .jcontr").eq(innextbx_3218110189_517).next(".jcontr").children('.icocol').addClass('icocolact');
                //$(".jcarousel-control_bx_3218110189_517 .jcontr").eq(innextbx_3218110189_517).next(".jcontr").next(".jcontr").children('.icocol').addClass('icocolact');
            }


        });






    });
    function mycarousel_initCallback_bx_3218110189_518(carousel) {
        jQuery('.jcarousel-control_bx_3218110189_518 div div a').bind('click', function() {
            carousel.scroll(jQuery.jcarousel.intval(jQuery(this).attr('ttt')));


            if($(this).parent().parent().is($(".jcarousel-control_bx_3218110189_518 div.jcontr").last())) {
                $(this).parent().parent().parent().find('.icocol').removeClass('icocolact');
                $(this).parent().addClass('icocolact');
                //$(".jcarousel-control_bx_3218110189_518 div.jcontr").first().children('.icocol').addClass('icocolact');
            }

            else {
                $(this).parent().parent().parent().find('.icocol').removeClass('icocolact');
                $(this).parent().addClass('icocolact');
                //$(this).parent().parent().next(".jcontr").children('.icocol').addClass('icocolact');
            }


            return false;
        });
    };

    jQuery(document).ready(function() {

        jQuery("#dvkarusel_bx_3218110189_518").jcarousel({
            scroll: 1,
            wrap: 'circular',
            initCallback: mycarousel_initCallback_bx_3218110189_518,
        });

        $(".jjcontrolout_bx_3218110189_518").appendTo(".jjcontrolin_bx_3218110189_518");

        // podsvetka tsvetov pri clickprev
        $("#dvkarusel_bx_3218110189_518 .jcarousel-prev").click(function () {

            var inprevbx_3218110189_518 = $(".jcarousel-control_bx_3218110189_518").find(".icocolact").parent().index(".jcarousel-control_bx_3218110189_518 .jcontr");

            if ( $(".jcarousel-control_bx_3218110189_518 .jcontr").eq(0).children('.icocol').hasClass("icocolact")  )
            {
                $(".jjcontrolin_bx_3218110189_518").find(".icocol").removeClass('icocolact');
                $(".jcarousel-control_bx_3218110189_518 .jcontr").eq(-1).children('.icocol').addClass('icocolact');
                //$(".jcarousel-control_bx_3218110189_518 .jcontr").eq(-2).children('.icocol').addClass('icocolact');
            }

            else  if ( $(".jcarousel-control_bx_3218110189_518 .jcontr").eq(0).children('.icocol').hasClass("icocolact")  &&  $(".jcarousel-control_bx_3218110189_518 .jcontr").eq(1).children('.icocol').hasClass("icocolact"))
            {
                $(".jjcontrolin_bx_3218110189_518").find(".icocol").removeClass('icocolact');
                $(".jcarousel-control_bx_3218110189_518 .jcontr").eq(0).children('.icocol').addClass('icocolact');
                $(".jcarousel-control_bx_3218110189_518 .jcontr").eq(-1).children('.icocol').addClass('icocolact');
            }

            else
            {
                $(".jjcontrolin_bx_3218110189_518").find(".icocol").removeClass('icocolact');
                //$(".jcarousel-control_bx_3218110189_518 .jcontr").eq(inprevbx_3218110189_518).children('.icocol').addClass('icocolact');
                $(".jcarousel-control_bx_3218110189_518 .jcontr").eq(inprevbx_3218110189_518).prev(".jcontr").children('.icocol').addClass('icocolact');
            }


        });





        // podsvetka tsvetov pri clicknext
        $("#dvkarusel_bx_3218110189_518 .jcarousel-next").click(function () {

            var innextbx_3218110189_518 = $(".jcarousel-control_bx_3218110189_518").find(".icocolact").parent().index(".jcarousel-control_bx_3218110189_518 .jcontr");



            if ( $(".jcarousel-control_bx_3218110189_518 .jcontr").eq(-1).children('.icocol').hasClass("icocolact"))
            {
                $(".jjcontrolin_bx_3218110189_518").find(".icocol").removeClass('icocolact');
                $(".jcarousel-control_bx_3218110189_518 .jcontr").eq(0).children('.icocol').addClass('icocolact');
                //$(".jcarousel-control_bx_3218110189_518 .jcontr").eq(1).children('.icocol').addClass('icocolact');
            }

            else  if ( $(".jcarousel-control_bx_3218110189_518 .jcontr").eq(-1).children('.icocol').hasClass("icocolact")  &&  $(".jcarousel-control_bx_3218110189_518 .jcontr").eq(-2).children('.icocol').hasClass("icocolact"))
            {
                $(".jjcontrolin_bx_3218110189_518").find(".icocol").removeClass('icocolact');
                $(".jcarousel-control_bx_3218110189_518 .jcontr").eq(0).children('.icocol').addClass('icocolact');
                $(".jcarousel-control_bx_3218110189_518 .jcontr").eq(-1).children('.icocol').addClass('icocolact');
            }

            else
            {
                $(".jjcontrolin_bx_3218110189_518").find(".icocol").removeClass('icocolact');
                //$(".jcarousel-control_bx_3218110189_518 .jcontr").eq(innextbx_3218110189_518).children('.icocol').addClass('icocolact');
                $(".jcarousel-control_bx_3218110189_518 .jcontr").eq(innextbx_3218110189_518).next(".jcontr").children('.icocol').addClass('icocolact');
                //$(".jcarousel-control_bx_3218110189_518 .jcontr").eq(innextbx_3218110189_518).next(".jcontr").next(".jcontr").children('.icocol').addClass('icocolact');
            }


        });






    });

})(jQuery);



/**
 * Created by vasilisa on 10.08.16.
 */
// Define our selectors
var $clock 		= $("#clock");
var $timer 		= $("#timer");
var $start 		= $("#start");
var $pause 		= $("#pause");
var $continue 	= $("#continue");
// Enable start / pause / continue buttons
$(function(){
    $start.on("click",function(e){
        e.preventDefault();
        beginTimer(60000); // 60 seconds
    });
});
// Change timer face colour
function colourChanger(intAngle)
{
    intAngle = 6.29 - intAngle;
    if(Math.floor(72+55*intAngle) < 255 || Math.floor(214+14*intAngle) < 255)
    {
        // Animate from green to amber
        return 'rgb(51,51,51)';
    } else {
        // Animate from amber to red
        return 'rgb(255,0,0)';
    }
}
// Get the ball rolling...
function beginTimer(timer)
{
    // Get our start time
    var dteStart = new Date();
    dteStart = dteStart.getTime();
    // Call countdown clock function
    countDownClock(dteStart,timer);
    // Reset elements to their defaults
    $clock.show();
    $timer.show();
}
// Build our countdown clock
function countDownClock(dteStart,timer)
{
    // Time started, minus time now, subtracked from 60 seconds
    var d = new Date();
    window.intOffset = timer - (d.getTime() - dteStart);
    // Whole number to use as countdown time
    $timer.html(Math.ceil(window.intOffset / 1000));
    // Angle to use, defined by 1 millisecond
    window.intAngle = 0.1048335*0.001*window.intOffset;
    // Set up our canvas
    var canvas = document.getElementById("clock");
    if (canvas.getContext) // Does the browser support canvas?
    {
        var ctx = canvas.getContext("2d");
        // Clear canvas before re-drawing
        ctx.clearRect(0,0,300,300);
        // Grey background ring
        ctx.beginPath();
        ctx.globalAlpha = 1;
        ctx.arc(150,150,140,0,6.283,false);
        ctx.arc(150,150,105,6.283,((Math.PI*2)),true);
        ctx.fillStyle = "#fde800";
        ctx.fill();
        ctx.closePath();
        // Clock face ring
        ctx.beginPath();
        ctx.globalAlpha = 1;
        ctx.arc(150,150,120.1,-1.57,(-1.57 + window.intAngle),false);
        ctx.arc(150,150,105,(-1.57 + window.intAngle),((Math.PI*2) -1.57),true);
        ctx.fillStyle = colourChanger(window.intAngle);
        ctx.fill();
        ctx.closePath();
        // Centre circle
        ctx.beginPath();
        ctx.arc(150,150,105,0,6.283,false);
        ctx.fillStyle = "#fde800";
        ctx.fill();
        ctx.closePath();
    } else {
        // Put fallback for browsers that don't support canvas here...
    }
    if(window.intOffset <= 0) // If time is up
        timeUp();
    else // Resersive ahoy!
        window.t = setTimeout("countDownClock(" + dteStart + "," + timer + ")",50);
}
// Pause clock and animate our centre circle
function clockPause(timeElapsed,pause)
{
    // Duration of pause animation
    pauseTime = 100;
    diff = timeElapsed / pauseTime;
    if(pause) // Pause the clock
    {
        percentage = 1 - diff;
        if(percentage < 0)
            percentage = 0;
    } else { // Resume the clock
        percentage = diff;
        if(percentage > 1)
            percentage = 1;
    }
    // Set up our canvas
    var canvas = document.getElementById("clock");
    if (canvas.getContext) // Does the browser support canvas?
    {
        var ctx = canvas.getContext("2d");
        // Clear canvas before re-drawing
        ctx.clearRect(0,0,300,300);
        // Grey background ring
        ctx.beginPath();
        ctx.globalAlpha = 1;
        ctx.arc(150,150,140,0,6.283,false);
        ctx.arc(150,150,105,6.283,((Math.PI*2)),true);
        ctx.fillStyle = "#fde800";
        ctx.fill();
        ctx.closePath();
        // Clock face ring
        ctx.beginPath();
        ctx.globalAlpha = 1;
        ctx.arc(150,150,140.1,-1.57,(-1.57 + window.intAngle),false);
        ctx.arc(150,150,105,(-1.57 + window.intAngle),((Math.PI*2) -1.57),true);
        ctx.fillStyle = colourChanger(window.intAngle);
        ctx.fill();
        ctx.closePath();
        // Centre circle
        ctx.beginPath();
        ctx.arc(150,150,(105 * percentage),0,6.283,false);
        ctx.fillStyle = "#fde800";
        ctx.fill();
        ctx.closePath();
        // Recursive until time has elapsed
        if(timeElapsed < pauseTime)
        {
            setTimeout(function(){
                clockPause((timeElapsed + 10),pause);
            },10);
        }
    } else {
        // Put fallback for browsers that don't support canvas here...
    }
}
// Time up
function timeUp()
{
    $('#happy').modal('hide');
}


/**
 * Created by vasilisa on 11.08.16.
 */
(function($){
    //
    $(window).load(function(){

        $(function(){
            $('.inpfilefile').change(function(){
                $('.inpfile').removeClass('inpfile').addClass('inpfilevyb');
            });
        });
    });




})(jQuery);

/* End */
;
; /* Start:"a:4:{s:4:"full";s:46:"/js/jquery-migrate-1.2.1.min.js?14737541057200";s:6:"source";s:31:"/js/jquery-migrate-1.2.1.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*! jQuery Migrate v1.2.1 | (c) 2005, 2013 jQuery Foundation, Inc. and other contributors | jquery.org/license */
jQuery.migrateMute===void 0&&(jQuery.migrateMute=!0),function(e,t,n){function r(n){var r=t.console;i[n]||(i[n]=!0,e.migrateWarnings.push(n),r&&r.warn&&!e.migrateMute&&(r.warn("JQMIGRATE: "+n),e.migrateTrace&&r.trace&&r.trace()))}function a(t,a,i,o){if(Object.defineProperty)try{return Object.defineProperty(t,a,{configurable:!0,enumerable:!0,get:function(){return r(o),i},set:function(e){r(o),i=e}}),n}catch(s){}e._definePropertyBroken=!0,t[a]=i}var i={};e.migrateWarnings=[],!e.migrateMute&&t.console&&t.console.log&&t.console.log("JQMIGRATE: Logging is active"),e.migrateTrace===n&&(e.migrateTrace=!0),e.migrateReset=function(){i={},e.migrateWarnings.length=0},"BackCompat"===document.compatMode&&r("jQuery is not compatible with Quirks Mode");var o=e("<input/>",{size:1}).attr("size")&&e.attrFn,s=e.attr,u=e.attrHooks.value&&e.attrHooks.value.get||function(){return null},c=e.attrHooks.value&&e.attrHooks.value.set||function(){return n},l=/^(?:input|button)$/i,d=/^[238]$/,p=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,f=/^(?:checked|selected)$/i;a(e,"attrFn",o||{},"jQuery.attrFn is deprecated"),e.attr=function(t,a,i,u){var c=a.toLowerCase(),g=t&&t.nodeType;return u&&(4>s.length&&r("jQuery.fn.attr( props, pass ) is deprecated"),t&&!d.test(g)&&(o?a in o:e.isFunction(e.fn[a])))?e(t)[a](i):("type"===a&&i!==n&&l.test(t.nodeName)&&t.parentNode&&r("Can't change the 'type' of an input or button in IE 6/7/8"),!e.attrHooks[c]&&p.test(c)&&(e.attrHooks[c]={get:function(t,r){var a,i=e.prop(t,r);return i===!0||"boolean"!=typeof i&&(a=t.getAttributeNode(r))&&a.nodeValue!==!1?r.toLowerCase():n},set:function(t,n,r){var a;return n===!1?e.removeAttr(t,r):(a=e.propFix[r]||r,a in t&&(t[a]=!0),t.setAttribute(r,r.toLowerCase())),r}},f.test(c)&&r("jQuery.fn.attr('"+c+"') may use property instead of attribute")),s.call(e,t,a,i))},e.attrHooks.value={get:function(e,t){var n=(e.nodeName||"").toLowerCase();return"button"===n?u.apply(this,arguments):("input"!==n&&"option"!==n&&r("jQuery.fn.attr('value') no longer gets properties"),t in e?e.value:null)},set:function(e,t){var a=(e.nodeName||"").toLowerCase();return"button"===a?c.apply(this,arguments):("input"!==a&&"option"!==a&&r("jQuery.fn.attr('value', val) no longer sets properties"),e.value=t,n)}};var g,h,v=e.fn.init,m=e.parseJSON,y=/^([^<]*)(<[\w\W]+>)([^>]*)$/;e.fn.init=function(t,n,a){var i;return t&&"string"==typeof t&&!e.isPlainObject(n)&&(i=y.exec(e.trim(t)))&&i[0]&&("<"!==t.charAt(0)&&r("$(html) HTML strings must start with '<' character"),i[3]&&r("$(html) HTML text after last tag is ignored"),"#"===i[0].charAt(0)&&(r("HTML string cannot start with a '#' character"),e.error("JQMIGRATE: Invalid selector string (XSS)")),n&&n.context&&(n=n.context),e.parseHTML)?v.call(this,e.parseHTML(i[2],n,!0),n,a):v.apply(this,arguments)},e.fn.init.prototype=e.fn,e.parseJSON=function(e){return e||null===e?m.apply(this,arguments):(r("jQuery.parseJSON requires a valid JSON string"),null)},e.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||0>e.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e.browser||(g=e.uaMatch(navigator.userAgent),h={},g.browser&&(h[g.browser]=!0,h.version=g.version),h.chrome?h.webkit=!0:h.webkit&&(h.safari=!0),e.browser=h),a(e,"browser",e.browser,"jQuery.browser is deprecated"),e.sub=function(){function t(e,n){return new t.fn.init(e,n)}e.extend(!0,t,this),t.superclass=this,t.fn=t.prototype=this(),t.fn.constructor=t,t.sub=this.sub,t.fn.init=function(r,a){return a&&a instanceof e&&!(a instanceof t)&&(a=t(a)),e.fn.init.call(this,r,a,n)},t.fn.init.prototype=t.fn;var n=t(document);return r("jQuery.sub() is deprecated"),t},e.ajaxSetup({converters:{"text json":e.parseJSON}});var b=e.fn.data;e.fn.data=function(t){var a,i,o=this[0];return!o||"events"!==t||1!==arguments.length||(a=e.data(o,t),i=e._data(o,t),a!==n&&a!==i||i===n)?b.apply(this,arguments):(r("Use of jQuery.fn.data('events') is deprecated"),i)};var j=/\/(java|ecma)script/i,w=e.fn.andSelf||e.fn.addBack;e.fn.andSelf=function(){return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),w.apply(this,arguments)},e.clean||(e.clean=function(t,a,i,o){a=a||document,a=!a.nodeType&&a[0]||a,a=a.ownerDocument||a,r("jQuery.clean() is deprecated");var s,u,c,l,d=[];if(e.merge(d,e.buildFragment(t,a).childNodes),i)for(c=function(e){return!e.type||j.test(e.type)?o?o.push(e.parentNode?e.parentNode.removeChild(e):e):i.appendChild(e):n},s=0;null!=(u=d[s]);s++)e.nodeName(u,"script")&&c(u)||(i.appendChild(u),u.getElementsByTagName!==n&&(l=e.grep(e.merge([],u.getElementsByTagName("script")),c),d.splice.apply(d,[s+1,0].concat(l)),s+=l.length));return d});var Q=e.event.add,x=e.event.remove,k=e.event.trigger,N=e.fn.toggle,T=e.fn.live,M=e.fn.die,S="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",C=RegExp("\\b(?:"+S+")\\b"),H=/(?:^|\s)hover(\.\S+|)\b/,A=function(t){return"string"!=typeof t||e.event.special.hover?t:(H.test(t)&&r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),t&&t.replace(H,"mouseenter$1 mouseleave$1"))};e.event.props&&"attrChange"!==e.event.props[0]&&e.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),e.event.dispatch&&a(e.event,"handle",e.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),e.event.add=function(e,t,n,a,i){e!==document&&C.test(t)&&r("AJAX events should be attached to document: "+t),Q.call(this,e,A(t||""),n,a,i)},e.event.remove=function(e,t,n,r,a){x.call(this,e,A(t)||"",n,r,a)},e.fn.error=function(){var e=Array.prototype.slice.call(arguments,0);return r("jQuery.fn.error() is deprecated"),e.splice(0,0,"error"),arguments.length?this.bind.apply(this,e):(this.triggerHandler.apply(this,e),this)},e.fn.toggle=function(t,n){if(!e.isFunction(t)||!e.isFunction(n))return N.apply(this,arguments);r("jQuery.fn.toggle(handler, handler...) is deprecated");var a=arguments,i=t.guid||e.guid++,o=0,s=function(n){var r=(e._data(this,"lastToggle"+t.guid)||0)%o;return e._data(this,"lastToggle"+t.guid,r+1),n.preventDefault(),a[r].apply(this,arguments)||!1};for(s.guid=i;a.length>o;)a[o++].guid=i;return this.click(s)},e.fn.live=function(t,n,a){return r("jQuery.fn.live() is deprecated"),T?T.apply(this,arguments):(e(this.context).on(t,this.selector,n,a),this)},e.fn.die=function(t,n){return r("jQuery.fn.die() is deprecated"),M?M.apply(this,arguments):(e(this.context).off(t,this.selector||"**",n),this)},e.event.trigger=function(e,t,n,a){return n||C.test(e)||r("Global events are undocumented and deprecated"),k.call(this,e,t,n||document,a)},e.each(S.split("|"),function(t,n){e.event.special[n]={setup:function(){var t=this;return t!==document&&(e.event.add(document,n+"."+e.guid,function(){e.event.trigger(n,null,t,!0)}),e._data(this,n,e.guid++)),!1},teardown:function(){return this!==document&&e.event.remove(document,n+"."+e._data(this,n)),!1}}})}(jQuery,window);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:36:"/js/bootstrap.min.js?147375410536822";s:6:"source";s:20:"/js/bootstrap.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.5",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.5",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),a(c.target).is('input[type="radio"]')||a(c.target).is('input[type="checkbox"]')||c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.5",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.5",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger("hidden.bs.dropdown",f))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.5",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger("shown.bs.dropdown",h)}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.5",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.5",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),c.isInStateTrue()?void 0:(clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide())},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover%20requires%20tooltip.html");c.VERSION="3.3.5",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.5",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),
d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.5",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.5",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=e?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:39:"/js/jquery.easing-1.3.js?14737541058301";s:6:"source";s:24:"/js/jquery.easing-1.3.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */
/* End */
;
; /* Start:"a:4:{s:4:"full";s:50:"/js/bootstrap-hover-dropdown.min.js?14737541051722";s:6:"source";s:35:"/js/bootstrap-hover-dropdown.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/**
 * @preserve
 * Project: Bootstrap Hover Dropdown
 * Author: Cameron Spear
 * Version: v2.1.3
 * Contributors: Mattia Larentis
 * Dependencies: Bootstrap's Dropdown plugin, jQuery
 * Description: A simple plugin to enable Bootstrap dropdowns to active on hover and provide a nice user experience.
 * License: MIT
 * Homepage: http://cameronspear.com/blog/bootstrap-dropdown-on-hover-plugin/
 */
!function(e,n){var o=e();e.fn.dropdownHover=function(t){return"ontouchstart"in document?this:(o=o.add(this.parent()),this.each(function(){function r(){n.clearTimeout(a),n.clearTimeout(i),i=n.setTimeout(function(){o.find(":focus").blur(),f.instantlyCloseOthers===!0&&o.removeClass("open"),n.clearTimeout(i),d.attr("aria-expanded","true"),s.addClass("open"),d.trigger(l)},f.hoverDelay)}var a,i,d=e(this),s=d.parent(),u={delay:500,hoverDelay:0,instantlyCloseOthers:!0},h={delay:e(this).data("delay"),hoverDelay:e(this).data("hover-delay"),instantlyCloseOthers:e(this).data("close-others")},l="show.bs.dropdown",c="hide.bs.dropdown",f=e.extend(!0,{},u,t,h);s.hover(function(e){return s.hasClass("open")||d.is(e.target)?void r(e):!0},function(){n.clearTimeout(i),a=n.setTimeout(function(){d.attr("aria-expanded","false"),s.removeClass("open"),d.trigger(c)},f.delay)}),d.hover(function(e){return s.hasClass("open")||s.is(e.target)?void r(e):!0}),s.find(".dropdown-submenu").each(function(){var o,t=e(this);t.hover(function(){n.clearTimeout(o),t.children(".dropdown-menu").show(),t.siblings().children(".dropdown-menu").hide()},function(){var e=t.children(".dropdown-menu");o=n.setTimeout(function(){e.hide()},f.delay)})})}))},e(document).ready(function(){e('[data-hover="dropdown"]').dropdownHover()})}(jQuery,window);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:39:"/js/jquery.iosslider.js?147375410588778";s:6:"source";s:23:"/js/jquery.iosslider.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*
 * iosSlider - http://iosscripts.com/iosslider/
 * 
 * A jQuery Horizontal Slider for iPhone/iPad Safari 
 * This plugin turns any wide element into a touch enabled horizontal slider.
 * 
 * Copyright (c) 2012 Marc Whitbread
 * 
 * Version: v1.2.5 (04/06/2013)
 * Minimum requirements: jQuery v1.4+
 *
 * Advanced requirements:
 * 1) jQuery bind() click event override on slide requires jQuery v1.6+
 *
 * Terms of use:
 *
 * 1) iosSlider is licensed under the Creative Commons – Attribution-NonCommercial 3.0 License.
 * 2) You may use iosSlider free for personal or non-profit purposes, without restriction.
 *	  Attribution is not required but always appreciated. For commercial projects, you
 *	  must purchase a license. You may download and play with the script before deciding to
 *	  fully implement it in your project. Making sure you are satisfied, and knowing iosSlider
 *	  is the right script for your project is paramount.
 * 3) You are not permitted to make the resources found on iosscripts.com available for
 *    distribution elsewhere "as is" without prior consent. If you would like to feature
 *    iosSlider on your site, please do not link directly to the resource zip files. Please
 *    link to the appropriate page on iosscripts.com where users can find the download.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 * COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 * GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 */

;(function($) {
	
	/* global variables */
	var scrollbarNumber = 0;
	var xScrollDistance = 0;
	var yScrollDistance = 0;
	var scrollIntervalTime = 10;
	var scrollbarDistance = 0;
	var isTouch = 'ontouchstart' in window;
	var supportsOrientationChange = 'onorientationchange' in window;
	var isWebkit = false;
	var has3DTransform = false;
	var isIe7 = false;
	var isIe8 = false;
	var isIe9 = false;
	var isIe = false;
	var isGecko = false;
	var grabOutCursor = 'pointer';
	var grabInCursor = 'pointer';
	var onChangeEventLastFired = new Array();
	var autoSlideTimeouts = new Array();
	var iosSliders = new Array();
	var iosSliderSettings = new Array();
	var isEventCleared = new Array();
	var slideTimeouts = new Array();
	var activeChildOffsets = new Array();
	var activeChildInfOffsets = new Array();
	var infiniteSliderOffset = new Array();
	var sliderMin = new Array();
	var sliderMax = new Array();
	var sliderAbsMax = new Array();
	var touchLocks = new Array();
	
	/* private functions */
	var helpers = {
    
        showScrollbar: function(settings, scrollbarClass) {
			
			if(settings.scrollbarHide) {
				$('.' + scrollbarClass).css({
					opacity: settings.scrollbarOpacity,
					filter: 'alpha(opacity:' + (settings.scrollbarOpacity * 100) + ')'
				});
			}
			
		},
		
		hideScrollbar: function(settings, scrollTimeouts, j, distanceOffsetArray, scrollbarClass, scrollbarWidth, stageWidth, scrollMargin, scrollBorder, sliderNumber) {
			
			if(settings.scrollbar && settings.scrollbarHide) {
					
				for(var i = j; i < j+25; i++) {
					
					scrollTimeouts[scrollTimeouts.length] = helpers.hideScrollbarIntervalTimer(scrollIntervalTime * i, distanceOffsetArray[j], ((j + 24) - i) / 24, scrollbarClass, scrollbarWidth, stageWidth, scrollMargin, scrollBorder, sliderNumber, settings);
					
				}
			
			}
			
		},
		
		hideScrollbarInterval: function(newOffset, opacity, scrollbarClass, scrollbarWidth, stageWidth, scrollMargin, scrollBorder, sliderNumber, settings) {
	
			scrollbarDistance = (newOffset * -1) / (sliderMax[sliderNumber]) * (stageWidth - scrollMargin - scrollBorder - scrollbarWidth);
			
			helpers.setSliderOffset('.' + scrollbarClass, scrollbarDistance);
			
			$('.' + scrollbarClass).css({
				opacity: settings.scrollbarOpacity * opacity,
				filter: 'alpha(opacity:' + (settings.scrollbarOpacity * opacity * 100) + ')'
			});
			
		},
		
		slowScrollHorizontalInterval: function(node, slideNodes, newOffset, scrollbarClass, scrollbarWidth, stageWidth, scrollbarStageWidth, scrollMargin, scrollBorder, activeChildOffset, originalOffsets, childrenOffsets, infiniteSliderWidth, numberOfSlides, slideNodeOuterWidths, sliderNumber, centeredSlideOffset, endOffset, settings) {

			if(settings.infiniteSlider) {
				
				if(newOffset <= (sliderMax[sliderNumber] * -1)) {

					var scrollerWidth = $(node).width();

					if(newOffset <= (sliderAbsMax[sliderNumber] * -1)) {
						
						var sum = originalOffsets[0] * -1;
						$(slideNodes).each(function(i) {
							
							helpers.setSliderOffset($(slideNodes)[i], sum + centeredSlideOffset);
							if(i < childrenOffsets.length) {
								childrenOffsets[i] = sum * -1;
							}
							sum = sum + slideNodeOuterWidths[i];
							
						});
						
						newOffset = newOffset + childrenOffsets[0] * -1;
						sliderMin[sliderNumber] = childrenOffsets[0] * -1 + centeredSlideOffset;
						sliderMax[sliderNumber] = sliderMin[sliderNumber] + scrollerWidth - stageWidth;
						infiniteSliderOffset[sliderNumber] = 0;
						
					} else {
						
						var lowSlideNumber = 0;
						var lowSlideOffset = helpers.getSliderOffset($(slideNodes[0]), 'x');
						$(slideNodes).each(function(i) {
							
							if(helpers.getSliderOffset(this, 'x') < lowSlideOffset) {
								lowSlideOffset = helpers.getSliderOffset(this, 'x');
								lowSlideNumber = i;
							}
							
						});
						
						var tempOffset = sliderMin[sliderNumber] + scrollerWidth;
						helpers.setSliderOffset($(slideNodes)[lowSlideNumber], tempOffset);
						
						sliderMin[sliderNumber] = childrenOffsets[1] * -1 + centeredSlideOffset;
						sliderMax[sliderNumber] = sliderMin[sliderNumber] + scrollerWidth - stageWidth;

						childrenOffsets.splice(0, 1);
						childrenOffsets.splice(childrenOffsets.length, 0, tempOffset * -1 + centeredSlideOffset);

						infiniteSliderOffset[sliderNumber]++;
						
					}
					
				}
				
				if((newOffset >= (sliderMin[sliderNumber] * -1)) || (newOffset >= 0)) {
					
					var scrollerWidth = $(node).width();
					
					if(newOffset >= 0) {

						var sum = originalOffsets[0] * -1;
						$(slideNodes).each(function(i) {
							
							helpers.setSliderOffset($(slideNodes)[i], sum + centeredSlideOffset);
							if(i < childrenOffsets.length) {
								childrenOffsets[i] = sum * -1;
							}
							sum = sum + slideNodeOuterWidths[i];
							
						});
						
						newOffset = newOffset - childrenOffsets[0] * -1;
						sliderMin[sliderNumber] = childrenOffsets[0] * -1 + centeredSlideOffset;
						sliderMax[sliderNumber] = sliderMin[sliderNumber] + scrollerWidth - stageWidth;
						infiniteSliderOffset[sliderNumber] = numberOfSlides;
						
						while(((childrenOffsets[0] * -1 - scrollerWidth + centeredSlideOffset) > 0)) {

							var highSlideNumber = 0;
							var highSlideOffset = helpers.getSliderOffset($(slideNodes[0]), 'x');
							$(slideNodes).each(function(i) {
								
								if(helpers.getSliderOffset(this, 'x') > highSlideOffset) {
									highSlideOffset = helpers.getSliderOffset(this, 'x');
									highSlideNumber = i;
								}
								
							});

							var tempOffset = sliderMin[sliderNumber] - slideNodeOuterWidths[highSlideNumber];
							helpers.setSliderOffset($(slideNodes)[highSlideNumber], tempOffset);
							
							childrenOffsets.splice(0, 0, tempOffset * -1 + centeredSlideOffset);
							childrenOffsets.splice(childrenOffsets.length-1, 1);

							sliderMin[sliderNumber] = childrenOffsets[0] * -1 + centeredSlideOffset;
							sliderMax[sliderNumber] = sliderMin[sliderNumber] + scrollerWidth - stageWidth;

							infiniteSliderOffset[sliderNumber]--;
							activeChildOffsets[sliderNumber]++;
							
						}

					} 
					
					if(newOffset < 0) {

						var highSlideNumber = 0;
						var highSlideOffset = helpers.getSliderOffset($(slideNodes[0]), 'x');
						$(slideNodes).each(function(i) {
							
							if(helpers.getSliderOffset(this, 'x') > highSlideOffset) {
								highSlideOffset = helpers.getSliderOffset(this, 'x');
								highSlideNumber = i;
							}
							
						});						
					
						var tempOffset = sliderMin[sliderNumber] - slideNodeOuterWidths[highSlideNumber];
						helpers.setSliderOffset($(slideNodes)[highSlideNumber], tempOffset);
						
						childrenOffsets.splice(0, 0, tempOffset * -1 + centeredSlideOffset);
						childrenOffsets.splice(childrenOffsets.length-1, 1);

						sliderMin[sliderNumber] = childrenOffsets[0] * -1 + centeredSlideOffset;
						sliderMax[sliderNumber] = sliderMin[sliderNumber] + scrollerWidth - stageWidth;

						infiniteSliderOffset[sliderNumber]--;
						
					}
				
				}
				
			}

			var slideChanged = false;
			var newChildOffset = helpers.calcActiveOffset(settings, newOffset, childrenOffsets, stageWidth, infiniteSliderOffset[sliderNumber], numberOfSlides, activeChildOffset, sliderNumber);
			var tempOffset = (newChildOffset + infiniteSliderOffset[sliderNumber] + numberOfSlides)%numberOfSlides;
			
			if(settings.infiniteSlider) {
								
				if(tempOffset != activeChildInfOffsets[sliderNumber]) {
					slideChanged = true;
				}
					
			} else {
			
				if(newChildOffset != activeChildOffsets[sliderNumber]) {
					slideChanged = true;
				}
			
			}
			
			if(slideChanged) {
				
				var args = new helpers.args('change', settings, node, $(node).children(':eq(' + tempOffset + ')'), tempOffset, endOffset);
				$(node).parent().data('args', args);
				
				if(settings.onSlideChange != '') {
				
					settings.onSlideChange(args);
				
				}
			
			}
			
			activeChildOffsets[sliderNumber] = newChildOffset;
			activeChildInfOffsets[sliderNumber] = tempOffset;
			
			newOffset = Math.floor(newOffset);
			
			helpers.setSliderOffset(node, newOffset);

			if(settings.scrollbar) {
				
				scrollbarDistance = Math.floor((newOffset * -1 - sliderMin[sliderNumber] + centeredSlideOffset) / (sliderMax[sliderNumber] - sliderMin[sliderNumber] + centeredSlideOffset) * (scrollbarStageWidth - scrollMargin - scrollbarWidth));
				var width = scrollbarWidth - scrollBorder;
				
				if(newOffset >= (sliderMin[sliderNumber] * -1 + centeredSlideOffset)) {

					width = scrollbarWidth - scrollBorder - (scrollbarDistance * -1);
					
					helpers.setSliderOffset($('.' + scrollbarClass), 0);
					
					$('.' + scrollbarClass).css({
						width: width + 'px'
					});
				
				} else if(newOffset <= ((sliderMax[sliderNumber] * -1) + 1)) {
					
					width = scrollbarStageWidth - scrollMargin - scrollBorder - scrollbarDistance;
					
					helpers.setSliderOffset($('.' + scrollbarClass), scrollbarDistance);
					
					$('.' + scrollbarClass).css({
						width: width + 'px'
					});
					
				} else {
					
					helpers.setSliderOffset($('.' + scrollbarClass), scrollbarDistance);
					
					$('.' + scrollbarClass).css({
						width: width + 'px'
					});
				
				}
				
			}
			
		},
		
		slowScrollHorizontal: function(node, slideNodes, scrollTimeouts, scrollbarClass, xScrollDistance, yScrollDistance, scrollbarWidth, stageWidth, scrollbarStageWidth, scrollMargin, scrollBorder, originalOffsets, childrenOffsets, slideNodeOuterWidths, sliderNumber, infiniteSliderWidth, numberOfSlides, currentEventNode, snapOverride, centeredSlideOffset, settings) {
			
			var distanceOffsetArray = new Array();
			var xScrollDistanceArray = new Array();
			var nodeOffset = helpers.getSliderOffset(node, 'x');
			var snapDirection = 0;
			var maxSlideVelocity = 25 / 1024 * stageWidth;
			var changeSlideFired = false;
			frictionCoefficient = settings.frictionCoefficient;
			elasticFrictionCoefficient = settings.elasticFrictionCoefficient;
			snapFrictionCoefficient = settings.snapFrictionCoefficient;
				
			if((xScrollDistance > settings.snapVelocityThreshold) && settings.snapToChildren && !snapOverride) {
				snapDirection = 1;
			} else if((xScrollDistance < (settings.snapVelocityThreshold * -1)) && settings.snapToChildren && !snapOverride) {
				snapDirection = -1;
			}
			
			if(xScrollDistance < (maxSlideVelocity * -1)) {
				xScrollDistance = maxSlideVelocity * -1;
			} else if(xScrollDistance > maxSlideVelocity) {
				xScrollDistance = maxSlideVelocity;
			}
			
			if(!($(node)[0] === $(currentEventNode)[0])) {
				snapDirection = snapDirection * -1;
				xScrollDistance = xScrollDistance * -2;
			}
			
			var tempInfiniteSliderOffset = infiniteSliderOffset[sliderNumber];
			
			if(settings.infiniteSlider) {
			
				var tempSliderMin = sliderMin[sliderNumber];
				var tempSliderMax = sliderMax[sliderNumber];
			
			}
			
			var tempChildrenOffsets = new Array();
			var tempSlideNodeOffsets = new Array();

			for(var i = 0; i < childrenOffsets.length; i++) {
				
				tempChildrenOffsets[i] = childrenOffsets[i];
				
				if(i < slideNodes.length) {
					tempSlideNodeOffsets[i] = helpers.getSliderOffset($(slideNodes[i]), 'x');
				}
				
			}
			
			while((xScrollDistance > 1) || (xScrollDistance < -1)) {
				
				xScrollDistance = xScrollDistance * frictionCoefficient;
				nodeOffset = nodeOffset + xScrollDistance;

				if(((nodeOffset > (sliderMin[sliderNumber] * -1)) || (nodeOffset < (sliderMax[sliderNumber] * -1))) && !settings.infiniteSlider) {
					xScrollDistance = xScrollDistance * elasticFrictionCoefficient;
					nodeOffset = nodeOffset + xScrollDistance;
				}
				
				if(settings.infiniteSlider) {
					
					if(nodeOffset <= (tempSliderMax * -1)) {
						
						var scrollerWidth = $(node).width();
							
						var lowSlideNumber = 0;
						var lowSlideOffset = tempSlideNodeOffsets[0];
						for(var i = 0; i < tempSlideNodeOffsets.length; i++) {
							
							if(tempSlideNodeOffsets[i] < lowSlideOffset) {
								lowSlideOffset = tempSlideNodeOffsets[i];
								lowSlideNumber = i;
							}
							
						}
						
						var newOffset = tempSliderMin + scrollerWidth;
						tempSlideNodeOffsets[lowSlideNumber] = newOffset;
						
						tempSliderMin = tempChildrenOffsets[1] * -1 + centeredSlideOffset;
						tempSliderMax = tempSliderMin + scrollerWidth - stageWidth;

						tempChildrenOffsets.splice(0, 1);
						tempChildrenOffsets.splice(tempChildrenOffsets.length, 0, newOffset * -1 + centeredSlideOffset);

						tempInfiniteSliderOffset++;
						
					}
					
					if(nodeOffset >= (tempSliderMin * -1)) {
						
						var scrollerWidth = $(node).width();
						
						var highSlideNumber = 0;
						var highSlideOffset = tempSlideNodeOffsets[0];
						for(var i = 0; i < tempSlideNodeOffsets.length; i++) {
							
							if(tempSlideNodeOffsets[i] > highSlideOffset) {
								highSlideOffset = tempSlideNodeOffsets[i];
								highSlideNumber = i;
							}
							
						}

						var newOffset = tempSliderMin - slideNodeOuterWidths[highSlideNumber];
						tempSlideNodeOffsets[highSlideNumber] = newOffset;
						
						tempChildrenOffsets.splice(0, 0, newOffset * -1 + centeredSlideOffset);
						tempChildrenOffsets.splice(tempChildrenOffsets.length-1, 1);

						tempSliderMin = tempChildrenOffsets[0] * -1 + centeredSlideOffset;
						tempSliderMax = tempSliderMin + scrollerWidth - stageWidth;

						tempInfiniteSliderOffset--;
					
					}
						
				}
				
				distanceOffsetArray[distanceOffsetArray.length] = nodeOffset;
				xScrollDistanceArray[xScrollDistanceArray.length] = xScrollDistance;

			}

			var slideChanged = false;
			var newChildOffset = helpers.calcActiveOffset(settings, nodeOffset, tempChildrenOffsets, stageWidth, tempInfiniteSliderOffset, numberOfSlides, activeChildOffsets[sliderNumber], sliderNumber);
			var tempOffset = (newChildOffset + tempInfiniteSliderOffset + numberOfSlides)%numberOfSlides;

			if(settings.snapToChildren) {
			
				if(settings.infiniteSlider) {
				
					if(tempOffset != activeChildInfOffsets[sliderNumber]) {
						slideChanged = true;
					}
						
				} else {
				
					if(newChildOffset != activeChildOffsets[sliderNumber]) {
						slideChanged = true;
					}
				
				}

				if((snapDirection < 0) && !slideChanged) {
				
					newChildOffset++;
					
					if((newChildOffset >= childrenOffsets.length) && !settings.infinteSlider) newChildOffset = childrenOffsets.length - 1;
					
				} else if((snapDirection > 0) && !slideChanged) {
				
					newChildOffset--;
					
					if((newChildOffset < 0) && !settings.infinteSlider) newChildOffset = 0;
					
				}
			
			}

			if(settings.snapToChildren || (((nodeOffset > (sliderMin[sliderNumber] * -1)) || (nodeOffset < (sliderMax[sliderNumber] * -1))) && !settings.infiniteSlider)) {
				
				nodeOffset = helpers.getSliderOffset(node, 'x');
				distanceOffsetArray.splice(0, distanceOffsetArray.length);
				
				while((nodeOffset < (tempChildrenOffsets[newChildOffset] - 0.5)) || (nodeOffset > (tempChildrenOffsets[newChildOffset] + 0.5))) {
					
					nodeOffset = ((nodeOffset - (tempChildrenOffsets[newChildOffset])) * snapFrictionCoefficient) + (tempChildrenOffsets[newChildOffset]);
					distanceOffsetArray[distanceOffsetArray.length] = nodeOffset;
					
				}

				distanceOffsetArray[distanceOffsetArray.length] = tempChildrenOffsets[newChildOffset];
	
			}

			var jStart = 1;
			if((distanceOffsetArray.length%2) != 0) {
				jStart = 0;
			}
			
			var lastTimeoutRegistered = 0;
			var count = 0;
			
			for(var j = 0; j < scrollTimeouts.length; j++) {
				clearTimeout(scrollTimeouts[j]);
			}
			
			var endOffset = (newChildOffset + tempInfiniteSliderOffset + numberOfSlides)%numberOfSlides;

			var lastCheckOffset = 0;
			for(var j = jStart; j < distanceOffsetArray.length; j = j + 2) {
				
				if((j == jStart) || (Math.abs(distanceOffsetArray[j] - lastCheckOffset) > 1) || (j >= (distanceOffsetArray.length - 2))) {
				
					lastCheckOffset	= distanceOffsetArray[j];
					
					scrollTimeouts[scrollTimeouts.length] = helpers.slowScrollHorizontalIntervalTimer(scrollIntervalTime * j, node, slideNodes, distanceOffsetArray[j], scrollbarClass, scrollbarWidth, stageWidth, scrollbarStageWidth, scrollMargin, scrollBorder, newChildOffset, originalOffsets, childrenOffsets, infiniteSliderWidth, numberOfSlides, slideNodeOuterWidths, sliderNumber, centeredSlideOffset, endOffset, settings);
				
				}
				
			}
			
			var slideChanged = false;
			var tempOffset = (newChildOffset + infiniteSliderOffset[sliderNumber] + numberOfSlides)%numberOfSlides;
			
			if(settings.infiniteSlider) {
				
				if(tempOffset != activeChildInfOffsets[sliderNumber]) {
					slideChanged = true;
				}
					
			} else {
			
				if(newChildOffset != activeChildOffsets[sliderNumber]) {
					slideChanged = true;
				}
			
			}
				
			if(settings.onSlideComplete != '') {

				scrollTimeouts[scrollTimeouts.length] = helpers.onSlideCompleteTimer(scrollIntervalTime * (j + 1), settings, node, $(node).children(':eq(' + tempOffset + ')'), tempOffset, sliderNumber);
				
			}
			
			slideTimeouts[sliderNumber] = scrollTimeouts;
			
			helpers.hideScrollbar(settings, scrollTimeouts, j, distanceOffsetArray, scrollbarClass, scrollbarWidth, stageWidth, scrollMargin, scrollBorder, sliderNumber);
				
		},
		
		onSlideComplete: function(settings, node, slideNode, newChildOffset, sliderNumber) {
			
			var isChanged = (onChangeEventLastFired[sliderNumber] != newChildOffset) ? true : false;
			var args = new helpers.args('complete', settings, $(node), slideNode, newChildOffset, newChildOffset);
			$(node).parent().data('args', args);
				
			if(settings.onSlideComplete != '') {
				
				settings.onSlideComplete(args);
			
			}
			
			onChangeEventLastFired[sliderNumber] = newChildOffset;
		
		},
		
		getSliderOffset: function(node, xy) {
			
			var sliderOffset = 0;
			if(xy == 'x') {
				xy = 4;
			} else {
				xy = 5;
			}
			
			if(has3DTransform && !isIe7 && !isIe8) {
				
				var transforms = new Array('-webkit-transform', '-moz-transform', 'transform');
				
				for(var i = 0; i < transforms.length; i++) {
					
					if($(node).css(transforms[i]) != undefined) {
						
						if($(node).css(transforms[i]).length > 0) {
						
							var transformArray = $(node).css(transforms[i]).split(',');
							
							break;
							
						}
					
					}
				
				}
				
				sliderOffset = parseInt(transformArray[xy], 10);
					
			} else {
			
				sliderOffset = parseInt($(node).css('left'), 10);
			
			}
			
			return sliderOffset;
		
		},
		
		setSliderOffset: function(node, sliderOffset) {
			
			if(has3DTransform && !isIe7 && !isIe8) {
				
				$(node).css({
					'webkitTransform': 'matrix(1,0,0,1,' + sliderOffset + ',0)',
					'MozTransform': 'matrix(1,0,0,1,' + sliderOffset + ',0)',
					'transform': 'matrix(1,0,0,1,' + sliderOffset + ',0)'
				});
			
			} else {

				$(node).css({
					left: sliderOffset + 'px'
				});
			
			}
						
		},
		
		setBrowserInfo: function() {
			
			if(navigator.userAgent.match('WebKit') != null) {
				isWebkit = true;
				grabOutCursor = '-webkit-grab';
				grabInCursor = '-webkit-grabbing';
			} else if(navigator.userAgent.match('Gecko') != null) {
				isGecko = true;
				grabOutCursor = 'move';
				grabInCursor = '-moz-grabbing';
			} else if(navigator.userAgent.match('MSIE 7') != null) {
				isIe7 = true;
				isIe = true;
			} else if(navigator.userAgent.match('MSIE 8') != null) {
				isIe8 = true;
				isIe = true;
			} else if(navigator.userAgent.match('MSIE 9') != null) {
				isIe9 = true;
				isIe = true;
			}
			
		},
		
		has3DTransform: function() {
			
			var has3D = false;
			
			var testElement = $('<div />').css({
				'webkitTransform': 'matrix(1,1,1,1,1,1)',
				'MozTransform': 'matrix(1,1,1,1,1,1)',
				'transform': 'matrix(1,1,1,1,1,1)'
			});
			
			if(testElement.attr('style') == '') {
				has3D = false;
			} else if(testElement.attr('style') != undefined) {
				has3D = true;
			}
			
			return has3D;
			
		},
		
		getSlideNumber: function(slide, sliderNumber, numberOfSlides) {
			
			return (slide - infiniteSliderOffset[sliderNumber] + numberOfSlides) % numberOfSlides;
		
		}, 

        calcActiveOffset: function(settings, offset, childrenOffsets, stageWidth, infiniteSliderOffset, numberOfSlides, activeChildOffset, sliderNumber) {
								
			var isFirst = false;
			var arrayOfOffsets = new Array();
			var newChildOffset;

			for(var i = 0; i < childrenOffsets.length; i++) {
				
				if((childrenOffsets[i] <= offset) && (childrenOffsets[i] > (offset - stageWidth))) {
				
					if(!isFirst && (childrenOffsets[i] != offset)) {
						
						arrayOfOffsets[arrayOfOffsets.length] = childrenOffsets[i-1];
						
					}
					
					arrayOfOffsets[arrayOfOffsets.length] = childrenOffsets[i];
					
					isFirst = true;
						
				}
			
			}
			
			if(arrayOfOffsets.length == 0) {
				arrayOfOffsets[0] = childrenOffsets[childrenOffsets.length - 1];
			}
			
			var distance = stageWidth;
			var closestChildOffset = 0;
			
			for(var i = 0; i < arrayOfOffsets.length; i++) {
				
				var newDistance = Math.abs(offset - arrayOfOffsets[i]);
				
				if(newDistance < distance) {
					closestChildOffset = arrayOfOffsets[i];
					distance = newDistance;
				}
				
			}
			
			for(var i = 0; i < childrenOffsets.length; i++) {
				
				if(closestChildOffset == childrenOffsets[i]) {
					
					newChildOffset = i;
					
				}
				
			}
			
			return newChildOffset;
		
		},
		
		changeSlide: function(slide, node, slideNodes, scrollTimeouts, scrollbarClass, scrollbarWidth, stageWidth, scrollbarStageWidth, scrollMargin, scrollBorder, originalOffsets, childrenOffsets, slideNodeOuterWidths, sliderNumber, infiniteSliderWidth, numberOfSlides, centeredSlideOffset, settings) {

			helpers.autoSlidePause(sliderNumber);
			
			for(var j = 0; j < scrollTimeouts.length; j++) {
				clearTimeout(scrollTimeouts[j]);
			}
			
			var steps = Math.ceil(settings.autoSlideTransTimer / 10) + 1;
			var startOffset = helpers.getSliderOffset(node, 'x');
			var endOffset = childrenOffsets[slide];
			var offsetDiff = endOffset - startOffset;
			
			if(settings.infiniteSlider) {
				
				slide = (slide - infiniteSliderOffset[sliderNumber] + numberOfSlides * 2)%numberOfSlides;
				
				var appendArray = false;
				if((slide == 0) && (numberOfSlides == 2)) {
					
					slide = numberOfSlides;
					childrenOffsets[slide] = childrenOffsets[slide-1] - $(slideNodes).eq(0).outerWidth(true);
					appendArray = true;
					
				}
				
				endOffset = childrenOffsets[slide];
				offsetDiff = endOffset - startOffset;
				
				var offsets = new Array(childrenOffsets[slide] - $(node).width(), childrenOffsets[slide] + $(node).width());
				
				if(appendArray) {
					childrenOffsets.splice(childrenOffsets.length-1, 1);
				}
				
				for(var i = 0; i < offsets.length; i++) {
					
					if(Math.abs(offsets[i] - startOffset) < Math.abs(offsetDiff)) {
						offsetDiff = (offsets[i] - startOffset);
					}
				
				}
				
			}
			
			var stepArray = new Array();
			var t;
			var nextStep;

			helpers.showScrollbar(settings, scrollbarClass);

			for(var i = 0; i <= steps; i++) {

				t = i;
				t /= steps;
				t--;
				nextStep = startOffset + offsetDiff*(Math.pow(t,5) + 1);
				
				stepArray[stepArray.length] = nextStep;
				
			}
			
			var lastCheckOffset = 0;
			for(var i = 0; i < stepArray.length; i++) {
				
				if((i == 0) || (Math.abs(stepArray[i] - lastCheckOffset) > 1) || (i >= (stepArray.length - 2))) {

					lastCheckOffset	= stepArray[i];
					
					scrollTimeouts[i] = helpers.slowScrollHorizontalIntervalTimer(scrollIntervalTime * (i + 1), node, slideNodes, stepArray[i], scrollbarClass, scrollbarWidth, stageWidth, scrollbarStageWidth, scrollMargin, scrollBorder, slide, originalOffsets, childrenOffsets, infiniteSliderWidth, numberOfSlides, slideNodeOuterWidths, sliderNumber, centeredSlideOffset, slide, settings);
						
				}
				
				if((i == 0) && (settings.onSlideStart != '')) {
					var tempOffset = (activeChildOffsets[sliderNumber] + infiniteSliderOffset[sliderNumber] + numberOfSlides)%numberOfSlides;		
				
					settings.onSlideStart(new helpers.args('start', settings, node, $(node).children(':eq(' + tempOffset + ')'), tempOffset, slide));
				}
					
			}

			var slideChanged = false;
			var tempOffset = (slide + infiniteSliderOffset[sliderNumber] + numberOfSlides)%numberOfSlides;
			
			if(settings.infiniteSlider) {
				
				if(tempOffset != activeChildInfOffsets[sliderNumber]) {
					slideChanged = true;
				}
					
			} else {
			
				if(slide != activeChildOffsets[sliderNumber]) {
					slideChanged = true;
				}
			
			}
				
			if(slideChanged && (settings.onSlideComplete != '')) {

				scrollTimeouts[scrollTimeouts.length] = helpers.onSlideCompleteTimer(scrollIntervalTime * (i + 1), settings, node, $(node).children(':eq(' + tempOffset + ')'), tempOffset, sliderNumber);
			}
			
			slideTimeouts[sliderNumber] = scrollTimeouts;
			
			helpers.hideScrollbar(settings, scrollTimeouts, i, stepArray, scrollbarClass, scrollbarWidth, stageWidth, scrollMargin, scrollBorder, sliderNumber);
			
			helpers.autoSlide(node, slideNodes, scrollTimeouts, scrollbarClass, scrollbarWidth, stageWidth, scrollbarStageWidth, scrollMargin, scrollBorder, originalOffsets, childrenOffsets, slideNodeOuterWidths, sliderNumber, infiniteSliderWidth, numberOfSlides, centeredSlideOffset, settings);
			
		},
		
		autoSlide: function(scrollerNode, slideNodes, scrollTimeouts, scrollbarClass, scrollbarWidth, stageWidth, scrollbarStageWidth, scrollMargin, scrollBorder, originalOffsets, childrenOffsets, slideNodeOuterWidths, sliderNumber, infiniteSliderWidth, numberOfSlides, centeredSlideOffset, settings) {
			
			if(!iosSliderSettings[sliderNumber].autoSlide) return false;
			
			helpers.autoSlidePause(sliderNumber);

			autoSlideTimeouts[sliderNumber] = setTimeout(function() {

				if(!settings.infiniteSlider && (activeChildOffsets[sliderNumber] > childrenOffsets.length-1)) {
					activeChildOffsets[sliderNumber] = activeChildOffsets[sliderNumber] - numberOfSlides;
				}
				
				var nextSlide = (activeChildOffsets[sliderNumber] + infiniteSliderOffset[sliderNumber] + numberOfSlides + 1)%numberOfSlides;

				helpers.changeSlide(nextSlide, scrollerNode, slideNodes, scrollTimeouts, scrollbarClass, scrollbarWidth, stageWidth, scrollbarStageWidth, scrollMargin, scrollBorder, originalOffsets, childrenOffsets, slideNodeOuterWidths, sliderNumber, infiniteSliderWidth, numberOfSlides, centeredSlideOffset, settings);
				
				helpers.autoSlide(scrollerNode, slideNodes, scrollTimeouts, scrollbarClass, scrollbarWidth, stageWidth, scrollbarStageWidth, scrollMargin, scrollBorder, originalOffsets, childrenOffsets, slideNodeOuterWidths, sliderNumber, infiniteSliderWidth, numberOfSlides, centeredSlideOffset, settings);
				
			}, settings.autoSlideTimer + settings.autoSlideTransTimer);
			
		},
		
		autoSlidePause: function(sliderNumber) {
			
			clearTimeout(autoSlideTimeouts[sliderNumber]);

		},
		
		isUnselectable: function(node, settings) {

			if(settings.unselectableSelector != '') {
				if($(node).closest(settings.unselectableSelector).size() == 1) return true;
			}
			
			return false;
			
		},
		
		/* timers */
		slowScrollHorizontalIntervalTimer: function(scrollIntervalTime, node, slideNodes, step, scrollbarClass, scrollbarWidth, stageWidth, scrollbarStageWidth, scrollMargin, scrollBorder, slide, originalOffsets, childrenOffsets, infiniteSliderWidth, numberOfSlides, slideNodeOuterWidths, sliderNumber, centeredSlideOffset, endOffset, settings) {
		
			var scrollTimeout = setTimeout(function() {
				helpers.slowScrollHorizontalInterval(node, slideNodes, step, scrollbarClass, scrollbarWidth, stageWidth, scrollbarStageWidth, scrollMargin, scrollBorder, slide, originalOffsets, childrenOffsets, infiniteSliderWidth, numberOfSlides, slideNodeOuterWidths, sliderNumber, centeredSlideOffset, endOffset, settings);
			}, scrollIntervalTime);
			
			return scrollTimeout;
		
		},
		
		onSlideCompleteTimer: function(scrollIntervalTime, settings, node, slideNode, slide, scrollbarNumber) {
			
			var scrollTimeout = setTimeout(function() {
				helpers.onSlideComplete(settings, node, slideNode, slide, scrollbarNumber);
			}, scrollIntervalTime);
			
			return scrollTimeout;
		
		},
		
		hideScrollbarIntervalTimer: function(scrollIntervalTime, newOffset, opacity, scrollbarClass, scrollbarWidth, stageWidth, scrollMargin, scrollBorder, sliderNumber, settings) {

			var scrollTimeout = setTimeout(function() {
				helpers.hideScrollbarInterval(newOffset, opacity, scrollbarClass, scrollbarWidth, stageWidth, scrollMargin, scrollBorder, sliderNumber, settings);
			}, scrollIntervalTime);
		
			return scrollTimeout;
		
		},
						
		args: function(func, settings, node, activeSlideNode, newChildOffset, targetSlideOffset) {
			
			this.prevSlideNumber = ($(node).parent().data('args') == undefined) ? undefined : $(node).parent().data('args').prevSlideNumber;
			this.prevSlideObject = ($(node).parent().data('args') == undefined) ? undefined : $(node).parent().data('args').prevSlideObject;
			this.targetSlideNumber = undefined;
			this.targetSlideObject = undefined;
			this.slideChanged = false;
			
			if(func == 'load') {
			} else if(func == 'start') {
			} else if(func == 'change') {
				this.slideChanged = true;
				this.prevSlideNumber = ($(node).parent().data('args') == undefined) ? settings.startAtSlide : $(node).parent().data('args').currentSlideNumber;	
				this.prevSlideObject = $(node).children(':eq(' + this.prevSlideNumber + ')');
			} else if(func == 'complete') {
				this.slideChanged = $(node).parent().data('args').slideChanged;
			}
			
			this.settings = settings;
			this.data = $(node).parent().data('iosslider');
			this.sliderObject = node;
			this.sliderContainerObject = $(node).parent();

			this.currentSlideObject = activeSlideNode;
			this.currentSlideNumber = newChildOffset + 1;
			this.currentSliderOffset = helpers.getSliderOffset(node, 'x') * -1;

		},
		
		preventDrag: function(event) {
			event.preventDefault();
		},
		
		preventClick: function(event) {
			event.stopImmediatePropagation();
			return false;
		},
		
		enableClick: function() {
			return true;
		}
        
    }
    
    helpers.setBrowserInfo();
    
    var methods = {
		
		init: function(options, node) {
			
			has3DTransform = helpers.has3DTransform();
			
			var settings = $.extend(true, {
				'elasticPullResistance': 0.6, 		
				'frictionCoefficient': 0.92,
				'elasticFrictionCoefficient': 0.6,
				'snapFrictionCoefficient': 0.92,
				'snapToChildren': false,
				'snapSlideCenter': false,
				'startAtSlide': 1,
				'scrollbar': false,
				'scrollbarDrag': false,
				'scrollbarHide': true,
				'scrollbarLocation': 'top',
				'scrollbarContainer': '',
				'scrollbarOpacity': 0.4,
				'scrollbarHeight': '4px',
				'scrollbarBorder': '0',
				'scrollbarMargin': '5px',
				'scrollbarBackground': '#000',
				'scrollbarBorderRadius': '100px',
				'scrollbarShadow': '0 0 0 #000',
				'scrollbarElasticPullResistance': 0.9,
				'desktopClickDrag': false,
				'keyboardControls': false,
				'tabToAdvance': false,
				'responsiveSlideContainer': true,
				'responsiveSlides': true,
				'navSlideSelector': '',
				'navPrevSelector': '',
				'navNextSelector': '',
				'autoSlideToggleSelector': '',
				'autoSlide': false,
				'autoSlideTimer': 5000,
				'autoSlideTransTimer': 750,
				'infiniteSlider': false,
				'snapVelocityThreshold': 5,
				'slideStartVelocityThreshold': 0,
				'horizontalSlideLockThreshold': 5,
				'verticalSlideLockThreshold': 3,
				'stageCSS': {
					position: 'relative',
					top: '0',
					left: '0',
					overflow: 'hidden',
					zIndex: 1
				},
				'unselectableSelector': '',
				'onSliderLoaded': '',
				'onSliderUpdate': '',
				'onSliderResize': '',
				'onSlideStart': '',
				'onSlideChange': '',
				'onSlideComplete': ''
			}, options);
			
			if(node == undefined) {
				node = this;
			}
			
			return $(node).each(function(i) {
				
				scrollbarNumber++;
				var sliderNumber = scrollbarNumber;
				var scrollTimeouts = new Array();
				iosSliderSettings[sliderNumber] = settings;
				sliderMin[sliderNumber] = 0;
				sliderMax[sliderNumber] = 0;
				var minTouchpoints = 0;
				var xCurrentScrollRate = new Array(0, 0);
				var yCurrentScrollRate = new Array(0, 0);
				var scrollbarBlockClass = 'scrollbarBlock' + scrollbarNumber;
				var scrollbarClass = 'scrollbar' + scrollbarNumber;
				var scrollbarNode;
				var scrollbarBlockNode;
				var scrollbarStageWidth;
				var scrollbarWidth;
				var containerWidth;
				var containerHeight;
				var centeredSlideOffset = 0;
				var stageNode = $(this);
				var stageWidth;
				var stageHeight;
				var slideWidth;
				var scrollMargin;
				var scrollBorder;
				var lastTouch;
				var isFirstInit = true;
				var newChildOffset = -1;
				var webkitTransformArray = new Array();
				var childrenOffsets;
				var originalOffsets = new Array();
				var scrollbarStartOpacity = 0;
				var xScrollStartPosition = 0;
				var yScrollStartPosition = 0;
				var currentTouches = 0;
				var scrollerNode = $(this).children(':first-child');
				var slideNodes;
				var slideNodeWidths;
				var slideNodeOuterWidths;
				var numberOfSlides = $(scrollerNode).children().not('script').size();
				var xScrollStarted = false;
				var lastChildOffset = 0;
				var isMouseDown = false;
				var currentSlider = undefined;
				var sliderStopLocation = 0;
				var infiniteSliderWidth;
				infiniteSliderOffset[sliderNumber] = 0;
				var shortContent = false;
				onChangeEventLastFired[sliderNumber] = -1;
				var isAutoSlideToggleOn = false;
				iosSliders[sliderNumber] = stageNode;
				isEventCleared[sliderNumber] = false;
				var currentEventNode;
				var intermediateChildOffset = 0;
				var tempInfiniteSliderOffset = 0;
				var preventXScroll = false;
				var snapOverride = false;
				var clickEvent = 'touchstart.iosSliderEvent click.iosSliderEvent';
				var scrollerWidth;
				var anchorEvents;
				var onclickEvents;
				var allScrollerNodeChildren;
				touchLocks[sliderNumber] = false;
				slideTimeouts[sliderNumber] = new Array();
				if(settings.scrollbarDrag) {
					settings.scrollbar = true;
					settings.scrollbarHide = false;
				}
				var $this = $(this);
				var data = $this.data('iosslider');	
				if(data != undefined) return true;
           		
           		$(this).find('img').bind('dragstart.iosSliderEvent', function(event) { event.preventDefault(); });

				if(settings.infiniteSlider) {
					settings.scrollbar = false;
				}
						
				if(settings.scrollbar) {
					
					if(settings.scrollbarContainer != '') {
						$(settings.scrollbarContainer).append("<div class = '" + scrollbarBlockClass + "'><div class = '" + scrollbarClass + "'></div></div>");
					} else {
						$(scrollerNode).parent().append("<div class = '" + scrollbarBlockClass + "'><div class = '" + scrollbarClass + "'></div></div>");
					}
				
				}
				
				if(!init()) return true;
				
				$(this).find('a').bind('mousedown', helpers.preventDrag);
				$(this).find("[onclick]").bind('click', helpers.preventDrag).each(function() {
					
					$(this).data('onclick', this.onclick);
				
				});
				
				var newChildOffset = helpers.calcActiveOffset(settings, helpers.getSliderOffset($(scrollerNode), 'x'), childrenOffsets, stageWidth, infiniteSliderOffset[sliderNumber], numberOfSlides, undefined, sliderNumber);
				var tempOffset = (newChildOffset + infiniteSliderOffset[sliderNumber] + numberOfSlides)%numberOfSlides;
				
				var args = new helpers.args('load', settings, scrollerNode, $(scrollerNode).children(':eq(' + tempOffset + ')'), tempOffset, tempOffset);
				$(stageNode).data('args', args);

				if(settings.onSliderLoaded != '') {

					settings.onSliderLoaded(args);
					
				}
				
				onChangeEventLastFired[sliderNumber] = tempOffset;

				function init() {
					
					helpers.autoSlidePause(sliderNumber);
					
					anchorEvents = $(scrollerNode).find('a');
					onclickEvents = $(scrollerNode).find('[onclick]');
					allScrollerNodeChildren = $(scrollerNode).find('*');
					
					$(stageNode).css('width', '');
					$(stageNode).css('height', '');
					$(scrollerNode).css('width', '');
					slideNodes = $(scrollerNode).children().not('script').get();
					slideNodeWidths = new Array();
					slideNodeOuterWidths = new Array();
					
					$(slideNodes).css('width', '');
					
					sliderMax[sliderNumber] = 0;
					childrenOffsets = new Array();
					containerWidth = $(stageNode).parent().width();
					stageWidth = $(stageNode).outerWidth(true);
					
					if(settings.responsiveSlideContainer) {
						stageWidth = ($(stageNode).outerWidth(true) > containerWidth) ? containerWidth : $(stageNode).outerWidth(true);
					}

					$(stageNode).css({
						position: settings.stageCSS.position,
						top: settings.stageCSS.top,
						left: settings.stageCSS.left,
						overflow: settings.stageCSS.overflow,
						zIndex: settings.stageCSS.zIndex,
						'webkitPerspective': 1000,
						'webkitBackfaceVisibility': 'hidden',
						'-ms-touch-action': 'pan-y',
						width: stageWidth
					});
					
					$(settings.unselectableSelector).css({
						cursor: 'default'
					});
						
					for(var j = 0; j < slideNodes.length; j++) {
						
						slideNodeWidths[j] = $(slideNodes[j]).width();
						slideNodeOuterWidths[j] = $(slideNodes[j]).outerWidth(true);
						var newWidth = slideNodeOuterWidths[j];
						
						if(settings.responsiveSlides) {

							if(slideNodeOuterWidths[j] > stageWidth) {
								
								newWidth = stageWidth + (slideNodeOuterWidths[j] - slideNodeWidths[j]) * -1;
								
							} else {

								newWidth = slideNodeWidths[j];
								
							}
							
							$(slideNodes[j]).css({
								width: newWidth
							});
					
						}
						
						$(slideNodes[j]).css({
							'webkitBackfaceVisibility': 'hidden',
							position: 'absolute',
							top: 0
						});
						
						childrenOffsets[j] = sliderMax[sliderNumber] * -1;
						
						sliderMax[sliderNumber] = sliderMax[sliderNumber] + newWidth + (slideNodeOuterWidths[j] - slideNodeWidths[j]);
					
					}
					
					if(settings.snapSlideCenter) {
						centeredSlideOffset = (stageWidth - slideNodeOuterWidths[0]) * 0.5;
						
						if(settings.responsiveSlides && (slideNodeOuterWidths[0] > stageWidth)) {
							centeredSlideOffset = 0;
						}
					}
					
					sliderAbsMax[sliderNumber] = sliderMax[sliderNumber] * 2;
					
					for(var j = 0; j < slideNodes.length; j++) {
						
						helpers.setSliderOffset($(slideNodes[j]), childrenOffsets[j] * -1 + sliderMax[sliderNumber] + centeredSlideOffset);
						
						childrenOffsets[j] = childrenOffsets[j] - sliderMax[sliderNumber];
					
					}
					
					if(!settings.infiniteSlider && !settings.snapSlideCenter) {
					
						for(var i = 0; i < childrenOffsets.length; i++) {
							
							if(childrenOffsets[i] <= ((sliderMax[sliderNumber] * 2 - stageWidth) * -1)) {
								break;
							}
							
							lastChildOffset = i;
							
						}
						
						childrenOffsets.splice(lastChildOffset + 1, childrenOffsets.length);
						childrenOffsets[childrenOffsets.length] = (sliderMax[sliderNumber] * 2 - stageWidth) * -1;
					
					}
					
					for(var i = 0; i < childrenOffsets.length; i++) {
						originalOffsets[i] = childrenOffsets[i];
					}
					
					if(isFirstInit) {
						settings.startAtSlide = (iosSliderSettings[sliderNumber].startAtSlide > childrenOffsets.length) ? childrenOffsets.length : iosSliderSettings[sliderNumber].startAtSlide;
						if(settings.infiniteSlider) {
							settings.startAtSlide = (iosSliderSettings[sliderNumber].startAtSlide - 1 + numberOfSlides)%numberOfSlides;
							activeChildOffsets[sliderNumber] = (iosSliderSettings[sliderNumber].startAtSlide);
						} else {
							settings.startAtSlide = ((iosSliderSettings[sliderNumber].startAtSlide - 1) < 0) ? childrenOffsets.length-1 : iosSliderSettings[sliderNumber].startAtSlide;	
							activeChildOffsets[sliderNumber] = (iosSliderSettings[sliderNumber].startAtSlide-1);
						}
						activeChildInfOffsets[sliderNumber] = activeChildOffsets[sliderNumber];
					}
					
					sliderMin[sliderNumber] = sliderMax[sliderNumber] + centeredSlideOffset;

					$(scrollerNode).css({
						position: 'relative',
						cursor: grabOutCursor,
						'webkitPerspective': '0',
						'webkitBackfaceVisibility': 'hidden',
						width: sliderMax[sliderNumber] + 'px'
					});
					
					scrollerWidth = sliderMax[sliderNumber];
					sliderMax[sliderNumber] = sliderMax[sliderNumber] * 2 - stageWidth + centeredSlideOffset * 2;
					
					shortContent = (scrollerWidth < stageWidth) ? true : false;

					if(shortContent) {
						
						$(scrollerNode).css({
							cursor: 'default'
						});
						
					}
					
					containerHeight = $(stageNode).parent().outerHeight(true);
					stageHeight = $(stageNode).height();
					
					if(settings.responsiveSlideContainer) {
						stageHeight = (stageHeight > containerHeight) ? containerHeight : stageHeight;
					}
					
					$(stageNode).css({
						height: stageHeight
					});

					helpers.setSliderOffset(scrollerNode, childrenOffsets[activeChildOffsets[sliderNumber]]);
					
					if(settings.infiniteSlider && !shortContent) {
						
						var currentScrollOffset = helpers.getSliderOffset($(scrollerNode), 'x');
						var count = (infiniteSliderOffset[sliderNumber] + numberOfSlides)%numberOfSlides * -1;
						
						while(count < 0) {
							
							var lowSlideNumber = 0;
							var lowSlideOffset = helpers.getSliderOffset($(slideNodes[0]), 'x');
							$(slideNodes).each(function(i) {
								
								if(helpers.getSliderOffset(this, 'x') < lowSlideOffset) {
									lowSlideOffset = helpers.getSliderOffset(this, 'x');
									lowSlideNumber = i;
								}
								
							});
							
							var newOffset = sliderMin[sliderNumber] + scrollerWidth;
							helpers.setSliderOffset($(slideNodes)[lowSlideNumber], newOffset);
							
							sliderMin[sliderNumber] = childrenOffsets[1] * -1 + centeredSlideOffset;
							sliderMax[sliderNumber] = sliderMin[sliderNumber] + scrollerWidth - stageWidth;

							childrenOffsets.splice(0, 1);
							childrenOffsets.splice(childrenOffsets.length, 0, newOffset * -1 + centeredSlideOffset);

							count++;
							
						}
						
						while(((childrenOffsets[0] * -1 - scrollerWidth + centeredSlideOffset) > 0) && settings.snapSlideCenter && isFirstInit) {
							
							var highSlideNumber = 0;
							var highSlideOffset = helpers.getSliderOffset($(slideNodes[0]), 'x');
							$(slideNodes).each(function(i) {
								
								if(helpers.getSliderOffset(this, 'x') > highSlideOffset) {
									highSlideOffset = helpers.getSliderOffset(this, 'x');
									highSlideNumber = i;
								}
								
							});

							var newOffset = sliderMin[sliderNumber] - slideNodeOuterWidths[highSlideNumber];
							helpers.setSliderOffset($(slideNodes)[highSlideNumber], newOffset);
							
							childrenOffsets.splice(0, 0, newOffset * -1 + centeredSlideOffset);
							childrenOffsets.splice(childrenOffsets.length-1, 1);

							sliderMin[sliderNumber] = childrenOffsets[0] * -1 + centeredSlideOffset;
							sliderMax[sliderNumber] = sliderMin[sliderNumber] + scrollerWidth - stageWidth;

							infiniteSliderOffset[sliderNumber]--;
							activeChildOffsets[sliderNumber]++;
							
						}
						
						while(currentScrollOffset <= (sliderMax[sliderNumber] * -1)) {
							
							var lowSlideNumber = 0;
							var lowSlideOffset = helpers.getSliderOffset($(slideNodes[0]), 'x');
							$(slideNodes).each(function(i) {
								
								if(helpers.getSliderOffset(this, 'x') < lowSlideOffset) {
									lowSlideOffset = helpers.getSliderOffset(this, 'x');
									lowSlideNumber = i;
								}
								
							});
							
							var newOffset = sliderMin[sliderNumber] + scrollerWidth;
							helpers.setSliderOffset($(slideNodes)[lowSlideNumber], newOffset);	
							
							sliderMin[sliderNumber] = childrenOffsets[1] * -1 + centeredSlideOffset;
							sliderMax[sliderNumber] = sliderMin[sliderNumber] + scrollerWidth - stageWidth;

							childrenOffsets.splice(0, 1);
							childrenOffsets.splice(childrenOffsets.length, 0, newOffset * -1 + centeredSlideOffset);

							infiniteSliderOffset[sliderNumber]++;
							activeChildOffsets[sliderNumber]--;
							
						}
					
					}
					
					helpers.setSliderOffset(scrollerNode, childrenOffsets[activeChildOffsets[sliderNumber]]);
					
					if(!settings.desktopClickDrag) {
						
						$(scrollerNode).css({
							cursor: 'default'
						});
						
					}
					
					if(settings.scrollbar) {
						
						$('.' + scrollbarBlockClass).css({ 
							margin: settings.scrollbarMargin,
							overflow: 'hidden',
							display: 'none'
						});
						
						$('.' + scrollbarBlockClass + ' .' + scrollbarClass).css({ 
							border: settings.scrollbarBorder
						});
						
						scrollMargin = parseInt($('.' + scrollbarBlockClass).css('marginLeft')) + parseInt($('.' + scrollbarBlockClass).css('marginRight'));
						scrollBorder = parseInt($('.' + scrollbarBlockClass + ' .' + scrollbarClass).css('borderLeftWidth'), 10) + parseInt($('.' + scrollbarBlockClass + ' .' + scrollbarClass).css('borderRightWidth'), 10);
						scrollbarStageWidth = (settings.scrollbarContainer != '') ? $(settings.scrollbarContainer).width() : stageWidth;
						scrollbarWidth = (scrollbarStageWidth - scrollMargin) / numberOfSlides;
		
						if(!settings.scrollbarHide) {
							scrollbarStartOpacity = settings.scrollbarOpacity;
						}
						
						$('.' + scrollbarBlockClass).css({ 
							position: 'absolute',
							left: 0,
							width: scrollbarStageWidth - scrollMargin + 'px',
							margin: settings.scrollbarMargin
						});
						
						if(settings.scrollbarLocation == 'top') {
							$('.' + scrollbarBlockClass).css('top', '0');
						} else {
							$('.' + scrollbarBlockClass).css('bottom', '0');
						}
						
						$('.' + scrollbarBlockClass + ' .' + scrollbarClass).css({ 
							borderRadius: settings.scrollbarBorderRadius,
							background: settings.scrollbarBackground,
							height: settings.scrollbarHeight,
							width: scrollbarWidth - scrollBorder + 'px',
							minWidth: settings.scrollbarHeight,
							border: settings.scrollbarBorder,
							'webkitPerspective': 1000,
							'webkitBackfaceVisibility': 'hidden',
							'position': 'relative',
							opacity: scrollbarStartOpacity,
							filter: 'alpha(opacity:' + (scrollbarStartOpacity * 100) + ')',
							boxShadow: settings.scrollbarShadow
						});
						
						helpers.setSliderOffset($('.' + scrollbarBlockClass + ' .' + scrollbarClass), Math.floor((childrenOffsets[activeChildOffsets[sliderNumber]] * -1 - sliderMin[sliderNumber] + centeredSlideOffset) / (sliderMax[sliderNumber] - sliderMin[sliderNumber] + centeredSlideOffset) * (scrollbarStageWidth - scrollMargin - scrollbarWidth)));
		
						$('.' + scrollbarBlockClass).css({
							display: 'block'
						});
						
						scrollbarNode = $('.' + scrollbarBlockClass + ' .' + scrollbarClass);
						scrollbarBlockNode = $('.' + scrollbarBlockClass);						
						
					}
					
					if(settings.scrollbarDrag && !shortContent) {
						$('.' + scrollbarBlockClass + ' .' + scrollbarClass).css({
							cursor: grabOutCursor
						});
					}
					
					if(settings.infiniteSlider) {
					
						infiniteSliderWidth = (sliderMax[sliderNumber] + stageWidth) / 3;
						
					}
					
					if(settings.navSlideSelector != '') {
								
						$(settings.navSlideSelector).each(function(j) {
						
							$(this).css({
								cursor: 'pointer'
							});
							
							$(this).unbind(clickEvent).bind(clickEvent, function(e) {
								
								if(e.type == 'touchstart') {
									$(this).unbind('click.iosSliderEvent');
								} else {
									$(this).unbind('touchstart.iosSliderEvent');
								}
								clickEvent = e.type + '.iosSliderEvent';

								helpers.changeSlide(j, scrollerNode, slideNodes, scrollTimeouts, scrollbarClass, scrollbarWidth, stageWidth, scrollbarStageWidth, scrollMargin, scrollBorder, originalOffsets, childrenOffsets, slideNodeOuterWidths, sliderNumber, infiniteSliderWidth, numberOfSlides, centeredSlideOffset, settings);
								
							});
						
						});
								
					}	
					
					if(settings.navPrevSelector != '') {
						
						$(settings.navPrevSelector).css({
							cursor: 'pointer'
						});
						
						$(settings.navPrevSelector).unbind(clickEvent).bind(clickEvent, function(e) {	
							
							if(e.type == 'touchstart') {
								$(this).unbind('click.iosSliderEvent');
							} else {
								$(this).unbind('touchstart.iosSliderEvent');
							}
							clickEvent = e.type + '.iosSliderEvent';

							var slide = (activeChildOffsets[sliderNumber] + infiniteSliderOffset[sliderNumber] + numberOfSlides)%numberOfSlides;
											
							if((slide > 0) || settings.infiniteSlider) {
								helpers.changeSlide(slide - 1, scrollerNode, slideNodes, scrollTimeouts, scrollbarClass, scrollbarWidth, stageWidth, scrollbarStageWidth, scrollMargin, scrollBorder, originalOffsets, childrenOffsets, slideNodeOuterWidths, sliderNumber, infiniteSliderWidth, numberOfSlides, centeredSlideOffset, settings);
							}
						});
					
					}
					
					if(settings.navNextSelector != '') {
						
						$(settings.navNextSelector).css({
							cursor: 'pointer'
						});
						
						$(settings.navNextSelector).unbind(clickEvent).bind(clickEvent, function(e) {
							
							if(e.type == 'touchstart') {
								$(this).unbind('click.iosSliderEvent');
							} else {
								$(this).unbind('touchstart.iosSliderEvent');
							}
							clickEvent = e.type + '.iosSliderEvent';
							
							var slide = (activeChildOffsets[sliderNumber] + infiniteSliderOffset[sliderNumber] + numberOfSlides)%numberOfSlides;
							
							if((slide < childrenOffsets.length-1) || settings.infiniteSlider) {
								helpers.changeSlide(slide + 1, scrollerNode, slideNodes, scrollTimeouts, scrollbarClass, scrollbarWidth, stageWidth, scrollbarStageWidth, scrollMargin, scrollBorder, originalOffsets, childrenOffsets, slideNodeOuterWidths, sliderNumber, infiniteSliderWidth, numberOfSlides, centeredSlideOffset, settings);
							}
						});
					
					}
					
					if(settings.autoSlide && !shortContent) {
						
						if(settings.autoSlideToggleSelector != '') {
						
							$(settings.autoSlideToggleSelector).css({
								cursor: 'pointer'
							});
							
							$(settings.autoSlideToggleSelector).unbind(clickEvent).bind(clickEvent, function() {
								
								if(e.type == 'touchstart') {
									$(this).unbind('click.iosSliderEvent');
								} else {
									$(this).unbind('touchstart.iosSliderEvent');
								}
								clickEvent = e.type + '.iosSliderEvent';
							
								if(!isAutoSlideToggleOn) {
								
									helpers.autoSlidePause(sliderNumber);
									isAutoSlideToggleOn = true;
									
									$(settings.autoSlideToggleSelector).addClass('on');
									
								} else {
									
									helpers.autoSlide(scrollerNode, slideNodes, scrollTimeouts, scrollbarClass, scrollbarWidth, stageWidth, scrollbarStageWidth, scrollMargin, scrollBorder, originalOffsets, childrenOffsets, slideNodeOuterWidths, sliderNumber, infiniteSliderWidth, numberOfSlides, centeredSlideOffset, settings);
									
									isAutoSlideToggleOn = false;
									
									$(settings.autoSlideToggleSelector).removeClass('on');
									
								}
							
							});
						
						}
						
						if(!isAutoSlideToggleOn && !shortContent) {
							helpers.autoSlide(scrollerNode, slideNodes, scrollTimeouts, scrollbarClass, scrollbarWidth, stageWidth, scrollbarStageWidth, scrollMargin, scrollBorder, originalOffsets, childrenOffsets, slideNodeOuterWidths, sliderNumber, infiniteSliderWidth, numberOfSlides, centeredSlideOffset, settings);
						}
							
						$(stageNode).bind('mouseenter.iosSliderEvent', function() {
							helpers.autoSlidePause(sliderNumber);
						});
						
						$(stageNode).bind('mouseleave.iosSliderEvent', function() {
						
							if(!isAutoSlideToggleOn && !shortContent) {
								helpers.autoSlide(scrollerNode, slideNodes, scrollTimeouts, scrollbarClass, scrollbarWidth, stageWidth, scrollbarStageWidth, scrollMargin, scrollBorder, originalOffsets, childrenOffsets, slideNodeOuterWidths, sliderNumber, infiniteSliderWidth, numberOfSlides, centeredSlideOffset, settings);
							}
							
						});
						
						$(stageNode).bind('touchend.iosSliderEvent', function() {
						
							if(!isAutoSlideToggleOn && !shortContent) {
								helpers.autoSlide(scrollerNode, slideNodes, scrollTimeouts, scrollbarClass, scrollbarWidth, stageWidth, scrollbarStageWidth, scrollMargin, scrollBorder, originalOffsets, childrenOffsets, slideNodeOuterWidths, sliderNumber, infiniteSliderWidth, numberOfSlides, centeredSlideOffset, settings);
							}
						
						});
					
					}
					
					$(stageNode).data('iosslider', {
						obj: $this,
						settings: settings,
						scrollerNode: scrollerNode,
						slideNodes: slideNodes,
						numberOfSlides: numberOfSlides,
						centeredSlideOffset: centeredSlideOffset,
						sliderNumber: sliderNumber,
						originalOffsets: originalOffsets,
						childrenOffsets: childrenOffsets,
						sliderMax: sliderMax[sliderNumber],
						scrollbarClass: scrollbarClass,
						scrollbarWidth: scrollbarWidth, 
						scrollbarStageWidth: scrollbarStageWidth,
						stageWidth: stageWidth, 
						scrollMargin: scrollMargin, 
						scrollBorder: scrollBorder, 
						infiniteSliderOffset: infiniteSliderOffset[sliderNumber], 
						infiniteSliderWidth: infiniteSliderWidth,
						slideNodeOuterWidths: slideNodeOuterWidths
					});
					
					isFirstInit = false;
					
					return true;
				
				}
				
				if(iosSliderSettings[sliderNumber].responsiveSlides || iosSliderSettings[sliderNumber].responsiveSlideContainer) {
					
					var orientationEvent = supportsOrientationChange ? 'orientationchange' : 'resize';
					
					$(window).bind(orientationEvent + '.iosSliderEvent', function() {
							
						if(!init()) return true;
						
						var args = $(stageNode).data('args');
				
						if(settings.onSliderResize != '') {
					    	settings.onSliderResize(args);
					    }
						
					});
					
				}
				
				if((settings.keyboardControls || settings.tabToAdvance) && !shortContent) {

					$(document).bind('keydown.iosSliderEvent', function(e) {
						
						if((!isIe7) && (!isIe8)) {
							var e = e.originalEvent;
						}
						
						if((e.keyCode == 37) && settings.keyboardControls) {
							
							e.preventDefault();
							
							var slide = (activeChildOffsets[sliderNumber] + infiniteSliderOffset[sliderNumber] + numberOfSlides)%numberOfSlides;

							if((slide > 0) || settings.infiniteSlider) {
								helpers.changeSlide(slide - 1, scrollerNode, slideNodes, scrollTimeouts, scrollbarClass, scrollbarWidth, stageWidth, scrollbarStageWidth, scrollMargin, scrollBorder, originalOffsets, childrenOffsets, slideNodeOuterWidths, sliderNumber, infiniteSliderWidth, numberOfSlides, centeredSlideOffset, settings);
							} 
								
						} else if(((e.keyCode == 39) && settings.keyboardControls) || ((e.keyCode == 9) && settings.tabToAdvance)) {
							
							e.preventDefault();
							
							var slide = (activeChildOffsets[sliderNumber] + infiniteSliderOffset[sliderNumber] + numberOfSlides)%numberOfSlides;
								
							if((slide < childrenOffsets.length-1) || settings.infiniteSlider) {
								helpers.changeSlide(slide + 1, scrollerNode, slideNodes, scrollTimeouts, scrollbarClass, scrollbarWidth, stageWidth, scrollbarStageWidth, scrollMargin, scrollBorder, originalOffsets, childrenOffsets, slideNodeOuterWidths, sliderNumber, infiniteSliderWidth, numberOfSlides, centeredSlideOffset, settings);
							}
								
						}
					
					});
					
				}
					
				if(isTouch || settings.desktopClickDrag) {
					
					var touchStartFlag = false;
					var touchSelection = $(scrollerNode);
					var touchSelectionMove = $(scrollerNode);
					var preventDefault = null;
					var isUnselectable = false;
					
					if(settings.scrollbarDrag) {
					
						touchSelection = touchSelection.add(scrollbarNode);
						touchSelectionMove = touchSelectionMove.add(scrollbarBlockNode);

					}
					
					$(touchSelection).bind('mousedown.iosSliderEvent touchstart.iosSliderEvent', function(e) {
						
						if(touchStartFlag) return true;
						touchStartFlag = true;
						
						if(e.type == 'touchstart') {
							$(touchSelectionMove).unbind('mousedown.iosSliderEvent');
						} else {
							$(touchSelectionMove).unbind('touchstart.iosSliderEvent');
						}
						
						if(touchLocks[sliderNumber] || shortContent) return true;
						
						isUnselectable = helpers.isUnselectable(e.target, settings);
						
						if(isUnselectable) {
							touchStartFlag = false;
							xScrollStarted = false;
							return true;
						}
						
						currentEventNode = ($(this)[0] === $(scrollbarNode)[0]) ? scrollbarNode : scrollerNode;

						if((!isIe7) && (!isIe8)) {
							var e = e.originalEvent;
						}

						helpers.autoSlidePause(sliderNumber);
						
						allScrollerNodeChildren.unbind('.disableClick');
						
						if(e.type == 'touchstart') {
							
							eventX = e.touches[0].pageX;
							eventY = e.touches[0].pageY;
							
						} else {
						
							if (window.getSelection) {
								if (window.getSelection().empty) {
									window.getSelection().empty();
								} else if (window.getSelection().removeAllRanges) {
									window.getSelection().removeAllRanges();
								}
							} else if (document.selection) {
								if(isIe8) {
									try { document.selection.empty(); } catch(e) { /* absorb ie8 bug */ }
								} else {
									document.selection.empty();
								}
							}
							
							eventX = e.pageX;
							eventY = e.pageY;
							
							isMouseDown = true;
							currentSlider = scrollerNode;

							$(this).css({
								cursor: grabInCursor
							});

						}
						
						xCurrentScrollRate = new Array(0, 0);
						yCurrentScrollRate = new Array(0, 0);
						xScrollDistance = 0;
						xScrollStarted = false;
						
						for(var j = 0; j < scrollTimeouts.length; j++) {
							clearTimeout(scrollTimeouts[j]);
						}
						
						var scrollPosition = helpers.getSliderOffset(scrollerNode, 'x');

						if(scrollPosition > (sliderMin[sliderNumber] * -1 + centeredSlideOffset + scrollerWidth)) {
							
							scrollPosition = sliderMin[sliderNumber] * -1 + centeredSlideOffset + scrollerWidth;

							helpers.setSliderOffset($('.' + scrollbarClass), scrollPosition);
							
							$('.' + scrollbarClass).css({
								width: (scrollbarWidth - scrollBorder) + 'px'
							});
							
						} else if(scrollPosition < (sliderMax[sliderNumber] * -1)) {
						
							scrollPosition = sliderMax[sliderNumber] * -1;

							helpers.setSliderOffset($('.' + scrollbarClass), (scrollbarStageWidth - scrollMargin - scrollbarWidth));
							
							$('.' + scrollbarClass).css({
								width: (scrollbarWidth - scrollBorder) + 'px'
							});
							
						}
						
						var scrollbarSubtractor = ($(this)[0] === $(scrollbarNode)[0]) ? (sliderMin[sliderNumber]) : 0;
						
						xScrollStartPosition = (helpers.getSliderOffset(this, 'x') - eventX - scrollbarSubtractor) * -1;
						yScrollStartPosition = (helpers.getSliderOffset(this, 'y') - eventY) * -1;
						
						xCurrentScrollRate[1] = eventX;
						yCurrentScrollRate[1] = eventY;
						
						snapOverride = false;

					});
					
					$(touchSelectionMove).bind('touchmove.iosSliderEvent mousemove.iosSliderEvent', function(e) {
						
						if((!isIe7) && (!isIe8)) {
							var e = e.originalEvent;
						}
						
						if(touchLocks[sliderNumber] || shortContent) return true;
						
						if(isUnselectable) return true;
						
						var edgeDegradation = 0;
						
						if(e.type == 'touchmove') {
						
							eventX = e.touches[0].pageX;
							eventY = e.touches[0].pageY;
							
						} else {
						
							if(window.getSelection) {
								if(window.getSelection().empty) {
									//console.log(window.getSelection().empty);
									//return true;
									window.getSelection().empty();
								} else if(window.getSelection().removeAllRanges) {
									window.getSelection().removeAllRanges();
								}
							} else if(document.selection) {
								if(isIe8) {
									try { document.selection.empty(); } catch(e) { /* absorb ie8 bug */ }
								} else {
									document.selection.empty();
								}
							}
						
							eventX = e.pageX;
							eventY = e.pageY;
							
							if(!isMouseDown) {
								return true;
							}
							
							if(!isIe) {
								if((typeof e.webkitMovementX != 'undefined' || typeof e.webkitMovementY != 'undefined') && e.webkitMovementY === 0 && e.webkitMovementX === 0) {
									return true;
								}
							}
							
						}
						
						xCurrentScrollRate[0] = xCurrentScrollRate[1];
						xCurrentScrollRate[1] = eventX;
						xScrollDistance = (xCurrentScrollRate[1] - xCurrentScrollRate[0]) / 2;
						
						yCurrentScrollRate[0] = yCurrentScrollRate[1];
						yCurrentScrollRate[1] = eventY;
						yScrollDistance = (yCurrentScrollRate[1] - yCurrentScrollRate[0]) / 2;

						if(!xScrollStarted) {

							var slide = (activeChildOffsets[sliderNumber] + infiniteSliderOffset[sliderNumber] + numberOfSlides)%numberOfSlides;
							var args = new helpers.args('start', settings, scrollerNode, $(scrollerNode).children(':eq(' + slide + ')'), slide, slide);
							$(stageNode).data('args', args);

							if(settings.onSlideStart != '') {
								settings.onSlideStart(args);
							}
							
						}
						
						//if(((yScrollDistance > 3) || (yScrollDistance < -3)) && ((xScrollDistance < 3) && (xScrollDistance > -3)) && (e.type == 'touchmove') && (!xScrollStarted)) {
						if(((yScrollDistance > settings.verticalSlideLockThreshold) || (yScrollDistance < (settings.verticalSlideLockThreshold * -1))) && (e.type == 'touchmove') && (!xScrollStarted)) {
						
							preventXScroll = true;
							
						}
						
						if(((xScrollDistance > settings.horizontalSlideLockThreshold) || (xScrollDistance < (settings.horizontalSlideLockThreshold * -1))) && (e.type == 'touchmove')) {
						
							e.preventDefault();
							
						}
						
						if(((xScrollDistance > settings.slideStartVelocityThreshold) || (xScrollDistance < (settings.slideStartVelocityThreshold * -1)))) {
						
							xScrollStarted = true;
						
						}
						
						if(xScrollStarted && !preventXScroll) {

							var scrollPosition = helpers.getSliderOffset(scrollerNode, 'x');
							var scrollbarSubtractor = ($(this)[0] === $(scrollbarBlockNode)[0]) ? (sliderMin[sliderNumber]) : centeredSlideOffset;
							var scrollbarMultiplier = ($(this)[0] === $(scrollbarBlockNode)[0]) ? ((sliderMin[sliderNumber] - sliderMax[sliderNumber] - centeredSlideOffset) / (scrollbarStageWidth - scrollMargin - scrollbarWidth)) : 1;
							var elasticPullResistance = ($(this)[0] === $(scrollbarBlockNode)[0]) ? settings.scrollbarElasticPullResistance : settings.elasticPullResistance;
							var snapCenteredSlideOffset = (settings.snapSlideCenter && ($(this)[0] === $(scrollbarBlockNode)[0])) ? 0 : centeredSlideOffset;
							var snapCenteredSlideOffsetScrollbar = (settings.snapSlideCenter && ($(this)[0] === $(scrollbarBlockNode)[0])) ? centeredSlideOffset : 0;

							if(e.type == 'touchmove') {
								if(currentTouches != e.touches.length) {
									xScrollStartPosition = (scrollPosition * -1) + eventX;
								}
								
								currentTouches = e.touches.length;
							}

							if(settings.infiniteSlider) {

								if(scrollPosition <= (sliderMax[sliderNumber] * -1)) {
									
									var scrollerWidth = $(scrollerNode).width();
									
									if(scrollPosition <= (sliderAbsMax[sliderNumber] * -1)) {

										var sum = originalOffsets[0] * -1;
										$(slideNodes).each(function(i) {
											
											helpers.setSliderOffset($(slideNodes)[i], sum + centeredSlideOffset);
											if(i < childrenOffsets.length) {
												childrenOffsets[i] = sum * -1;
											}
											sum = sum + slideNodeOuterWidths[i];
											
										});
										
										xScrollStartPosition = xScrollStartPosition - childrenOffsets[0] * -1;
										sliderMin[sliderNumber] = childrenOffsets[0] * -1 + centeredSlideOffset;
										sliderMax[sliderNumber] = sliderMin[sliderNumber] + scrollerWidth - stageWidth;
										infiniteSliderOffset[sliderNumber] = 0;
										
									} else {

										var lowSlideNumber = 0;
										var lowSlideOffset = helpers.getSliderOffset($(slideNodes[0]), 'x');
										$(slideNodes).each(function(i) {
											
											if(helpers.getSliderOffset(this, 'x') < lowSlideOffset) {
												lowSlideOffset = helpers.getSliderOffset(this, 'x');
												lowSlideNumber = i;
											}
											
										});
										
										var newOffset = sliderMin[sliderNumber] + scrollerWidth;
										helpers.setSliderOffset($(slideNodes)[lowSlideNumber], newOffset);	
										
										sliderMin[sliderNumber] = childrenOffsets[1] * -1 + centeredSlideOffset;
										sliderMax[sliderNumber] = sliderMin[sliderNumber] + scrollerWidth - stageWidth;

										childrenOffsets.splice(0, 1);
										childrenOffsets.splice(childrenOffsets.length, 0, newOffset * -1 + centeredSlideOffset);

										infiniteSliderOffset[sliderNumber]++;
										
									}
									
								}
								
								if((scrollPosition >= (sliderMin[sliderNumber] * -1)) || (scrollPosition >= 0)) {
		
									var scrollerWidth = $(scrollerNode).width();
									
									if(scrollPosition >= 0) {

										var sum = originalOffsets[0] * -1;
										$(slideNodes).each(function(i) {
											
											helpers.setSliderOffset($(slideNodes)[i], sum + centeredSlideOffset);
											if(i < childrenOffsets.length) {
												childrenOffsets[i] = sum * -1;
											}
											sum = sum + slideNodeOuterWidths[i];
											
										});
										
										xScrollStartPosition = xScrollStartPosition + childrenOffsets[0] * -1;
										sliderMin[sliderNumber] = childrenOffsets[0] * -1 + centeredSlideOffset;
										sliderMax[sliderNumber] = sliderMin[sliderNumber] + scrollerWidth - stageWidth;
										infiniteSliderOffset[sliderNumber] = numberOfSlides;
										
										while(((childrenOffsets[0] * -1 - scrollerWidth + centeredSlideOffset) > 0)) {
				
											var highSlideNumber = 0;
											var highSlideOffset = helpers.getSliderOffset($(slideNodes[0]), 'x');
											$(slideNodes).each(function(i) {
												
												if(helpers.getSliderOffset(this, 'x') > highSlideOffset) {
													highSlideOffset = helpers.getSliderOffset(this, 'x');
													highSlideNumber = i;
												}
												
											});
				
											var newOffset = sliderMin[sliderNumber] - slideNodeOuterWidths[highSlideNumber];
											helpers.setSliderOffset($(slideNodes)[highSlideNumber], newOffset);
											
											childrenOffsets.splice(0, 0, newOffset * -1 + centeredSlideOffset);
											childrenOffsets.splice(childrenOffsets.length-1, 1);
				
											sliderMin[sliderNumber] = childrenOffsets[0] * -1 + centeredSlideOffset;
											sliderMax[sliderNumber] = sliderMin[sliderNumber] + scrollerWidth - stageWidth;
				
											infiniteSliderOffset[sliderNumber]--;
											activeChildOffsets[sliderNumber]++;
											
										}

									} else {

										var highSlideNumber = 0;
										var highSlideOffset = helpers.getSliderOffset($(slideNodes[0]), 'x');
										$(slideNodes).each(function(i) {
											
											if(helpers.getSliderOffset(this, 'x') > highSlideOffset) {
												highSlideOffset = helpers.getSliderOffset(this, 'x');
												highSlideNumber = i;
											}
											
										});
										
										var newOffset = sliderMin[sliderNumber] - slideNodeOuterWidths[highSlideNumber];
										helpers.setSliderOffset($(slideNodes)[highSlideNumber], newOffset);									

										childrenOffsets.splice(0, 0, newOffset * -1 + centeredSlideOffset);
										childrenOffsets.splice(childrenOffsets.length-1, 1);

										sliderMin[sliderNumber] = childrenOffsets[0] * -1 + centeredSlideOffset;
										sliderMax[sliderNumber] = sliderMin[sliderNumber] + scrollerWidth - stageWidth;

										infiniteSliderOffset[sliderNumber]--;

									}
								
								}
								
							} else {
								
								var scrollerWidth = $(scrollerNode).width();
								
								if(scrollPosition > (sliderMin[sliderNumber] * -1 + centeredSlideOffset)) {

									edgeDegradation = (sliderMin[sliderNumber] + ((xScrollStartPosition - scrollbarSubtractor - eventX + snapCenteredSlideOffset) * -1 * scrollbarMultiplier) - scrollbarSubtractor) * elasticPullResistance * -1 / scrollbarMultiplier;
									
								}
								
								if(scrollPosition < (sliderMax[sliderNumber] * -1)) {
									
									edgeDegradation = (sliderMax[sliderNumber] + snapCenteredSlideOffsetScrollbar + ((xScrollStartPosition - scrollbarSubtractor - eventX) * -1 * scrollbarMultiplier) - scrollbarSubtractor) * elasticPullResistance * -1 / scrollbarMultiplier;
										
								}
							
							}

							helpers.setSliderOffset(scrollerNode, ((xScrollStartPosition - scrollbarSubtractor - eventX - edgeDegradation) * -1 * scrollbarMultiplier) - scrollbarSubtractor + snapCenteredSlideOffsetScrollbar);
							
							if(settings.scrollbar) {
								
								helpers.showScrollbar(settings, scrollbarClass);

								scrollbarDistance = Math.floor((xScrollStartPosition - eventX - edgeDegradation - sliderMin[sliderNumber] + snapCenteredSlideOffset) / (sliderMax[sliderNumber] - sliderMin[sliderNumber] + centeredSlideOffset) * (scrollbarStageWidth - scrollMargin - scrollbarWidth) * scrollbarMultiplier);

								var width = scrollbarWidth;
								
								if(scrollPosition >= (sliderMin[sliderNumber] * -1 + snapCenteredSlideOffset + scrollerWidth)) {

									width = scrollbarWidth - scrollBorder - (scrollbarDistance * -1);
									
									helpers.setSliderOffset($('.' + scrollbarClass), 0);
									
									$('.' + scrollbarClass).css({
										width: width + 'px'
									});
									
								} else if(scrollPosition <= ((sliderMax[sliderNumber] * -1) + 1)) {

									width = scrollbarStageWidth - scrollMargin - scrollBorder - scrollbarDistance;
									
									helpers.setSliderOffset($('.' + scrollbarClass), scrollbarDistance);
									
									$('.' + scrollbarClass).css({
										width: width + 'px'
									});
									
								} else {
								
									helpers.setSliderOffset($('.' + scrollbarClass), scrollbarDistance);
									
								}
								
							}
							
							if(e.type == 'touchmove') {
								lastTouch = e.touches[0].pageX;
							}

							var slideChanged = false;
							var newChildOffset = helpers.calcActiveOffset(settings, (xScrollStartPosition - eventX - edgeDegradation) * -1, childrenOffsets, stageWidth, infiniteSliderOffset[sliderNumber], numberOfSlides, undefined, sliderNumber);
							var tempOffset = (newChildOffset + infiniteSliderOffset[sliderNumber] + numberOfSlides)%numberOfSlides;

							if(settings.infiniteSlider) {
								
								if(tempOffset != activeChildInfOffsets[sliderNumber]) {
									slideChanged = true;
								}
									
							} else {
							
								if(newChildOffset != activeChildOffsets[sliderNumber]) {
									slideChanged = true;
								}
							
							}
							
							if(slideChanged) {
								
								activeChildOffsets[sliderNumber] = newChildOffset;
								activeChildInfOffsets[sliderNumber] = tempOffset;
								snapOverride = true;
								
								var args = new helpers.args('change', settings, scrollerNode, $(scrollerNode).children(':eq(' + tempOffset + ')'), tempOffset, tempOffset);
								$(stageNode).data('args', args);
								
								if(settings.onSlideChange != '') {
									settings.onSlideChange(args);
								}
								
							}
							
						}
						
						touchStartFlag = false;
						
					});
					
					var eventObject = $(window);

					if(isIe8 || isIe7) {
						var eventObject = $(document); 
					}
					
					$(touchSelection).bind('touchend.iosSliderEvent', function(e) {
						
						var e = e.originalEvent;
						
						if(touchLocks[sliderNumber] || shortContent) return true;
						
						if(isUnselectable) return true;
						
						if(e.touches.length != 0) {
							
							for(var j = 0; j < e.touches.length; j++) {
								
								if(e.touches[j].pageX == lastTouch) {
									helpers.slowScrollHorizontal(scrollerNode, slideNodes, scrollTimeouts, scrollbarClass, xScrollDistance, yScrollDistance, scrollbarWidth, stageWidth, scrollbarStageWidth, scrollMargin, scrollBorder, originalOffsets, childrenOffsets, slideNodeOuterWidths, sliderNumber, infiniteSliderWidth, numberOfSlides, currentEventNode, snapOverride, centeredSlideOffset, settings);
								}
								
							}
							
						} else {
							
							helpers.slowScrollHorizontal(scrollerNode, slideNodes, scrollTimeouts, scrollbarClass, xScrollDistance, yScrollDistance, scrollbarWidth, stageWidth, scrollbarStageWidth, scrollMargin, scrollBorder, originalOffsets, childrenOffsets, slideNodeOuterWidths, sliderNumber, infiniteSliderWidth, numberOfSlides, currentEventNode, snapOverride, centeredSlideOffset, settings);
							
						}
						
						preventXScroll = false;
						touchStartFlag = false;
						
					});
						
					$(eventObject).bind('mouseup.iosSliderEvent' + sliderNumber, function(e) {
						
						if(xScrollStarted) {
							anchorEvents.unbind('click.disableClick').bind('click.disableClick', helpers.preventClick);
						} else {
							anchorEvents.unbind('click.disableClick').bind('click.disableClick', helpers.enableClick);
						}
						
						onclickEvents.each(function() {
							
							this.onclick = function(event) {
								if(xScrollStarted) { 
									return false;
								}
							
								$(this).data('onclick').call(this, event || window.event);
							}
							
						});
						
						if(parseFloat($().jquery) >= 1.8) {
							
							allScrollerNodeChildren.each(function() {
									
								var clickObject = $._data(this, 'events');
								
								if(clickObject != undefined) {
									if(clickObject.click != undefined) {

										if(clickObject.click[0].namespace != 'iosSliderEvent') {
											
											if(!xScrollStarted) { 
												return false;
											}

											$(this).one('click.disableClick', helpers.preventClick);
										    var handlers = $._data(this, 'events').click;
										    var handler = handlers.pop();
										    handlers.splice(0, 0, handler);
											
										}
										
									}
								}
								
							});
						
						} else if(parseFloat($().jquery) >= 1.6) {
						
							allScrollerNodeChildren.each(function() {
									
								var clickObject = $(this).data('events');
								
								if(clickObject != undefined) {
									if(clickObject.click != undefined) {

										if(clickObject.click[0].namespace != 'iosSliderEvent') {
											
											if(!xScrollStarted) { 
												return false;
											}
										
											$(this).one('click.disableClick', helpers.preventClick);
										    var handlers = $(this).data('events').click;
										    var handler = handlers.pop();
										    handlers.splice(0, 0, handler);
											
										}
										
									}
								}
								
							});
						
						} else {
						}
						
						if(!isEventCleared[sliderNumber]) {
						
							if(shortContent) return true;
							
							$(touchSelection).css({
								cursor: grabOutCursor
							});
							
							isMouseDown = false;
							
							if(currentSlider == undefined) {
								return true;
							}

							helpers.slowScrollHorizontal(currentSlider, slideNodes, scrollTimeouts, scrollbarClass, xScrollDistance, yScrollDistance, scrollbarWidth, stageWidth, scrollbarStageWidth, scrollMargin, scrollBorder, originalOffsets, childrenOffsets, slideNodeOuterWidths, sliderNumber, infiniteSliderWidth, numberOfSlides, currentEventNode, snapOverride, centeredSlideOffset, settings);
							
							currentSlider = undefined;
						
						}
						
						preventXScroll = false;
						touchStartFlag = false;
						
					});
				
				}
				
			});	
			
		},
		
		destroy: function(clearStyle, node) {
			
			if(node == undefined) {
				node = this;
			}
			
			return $(node).each(function() {
			
				var $this = $(this);
				var data = $this.data('iosslider');
				if(data == undefined) return false;
				
				if(clearStyle == undefined) {
		    		clearStyle = true;
		    	}
		    	
	    		helpers.autoSlidePause(data.sliderNumber);
		    	isEventCleared[data.sliderNumber] = true;
		    	$(window).unbind('.iosSliderEvent-' + data.sliderNumber);
		    	$(window).unbind('.iosSliderEvent');
		    	$(document).unbind('.iosSliderEvent-' + data.sliderNumber);
		    	$(document).unbind('keydown.iosSliderEvent');
		    	$(this).unbind('.iosSliderEvent');
	    		$(this).children(':first-child').unbind('.iosSliderEvent');
	    		$(this).children(':first-child').children().unbind('.iosSliderEvent');
		    	
		    	if(clearStyle) {
	    			$(this).attr('style', '');
		    		$(this).children(':first-child').attr('style', '');
		    		$(this).children(':first-child').children().attr('style', '');
		    		
		    		$(data.settings.navSlideSelector).attr('style', '');
		    		$(data.settings.navPrevSelector).attr('style', '');
		    		$(data.settings.navNextSelector).attr('style', '');
		    		$(data.settings.autoSlideToggleSelector).attr('style', '');
		    		$(data.settings.unselectableSelector).attr('style', '');
	    		}
	    		
	    		if(data.settings.scrollbar) {
	    			$('.scrollbarBlock' + data.sliderNumber).remove();
	    		}
	    		
	    		var scrollTimeouts = slideTimeouts[data.sliderNumber];
	    		
	    		for(var i = 0; i < scrollTimeouts.length; i++) {
					clearTimeout(scrollTimeouts[i]);
				}
	    		
	    		$this.removeData('iosslider');
	    		$this.removeData('args');
		    	
			});
		
		},
		
		update: function(node) {
			
			if(node == undefined) {
				node = this;
			}
			
			return $(node).each(function() {

				var $this = $(this);
				var data = $this.data('iosslider');
				if(data == undefined) return false;
				
				data.settings.startAtSlide = $this.data('args').currentSlideNumber;
				methods.destroy(false, this);
				
				if((data.numberOfSlides != 1) && data.settings.infiniteSlider) {
				 	data.settings.startAtSlide = (activeChildOffsets[data.sliderNumber] + 1 + infiniteSliderOffset[data.sliderNumber] + data.numberOfSlides)%data.numberOfSlides;
				}

				methods.init(data.settings, this);
				
				var args = new helpers.args('update', data.settings, data.scrollerNode, $(data.scrollerNode).children(':eq(' + (data.settings.startAtSlide - 1) + ')'), data.settings.startAtSlide - 1, data.settings.startAtSlide - 1);
				$(data.stageNode).data('args', args);
				
				if(data.settings.onSliderUpdate != '') {
			    	data.settings.onSliderUpdate(args);
			    }
		    	
			});
		
		},
		
		addSlide: function(slideNode, slidePosition) {

			return this.each(function() {
				
				var $this = $(this);
				var data = $this.data('iosslider');
				if(data == undefined) return false;
				
				if($(data.scrollerNode).children().size() == 0) {
				
					$(data.scrollerNode).append(slideNode);
					$this.data('args').currentSlideNumber = 1;
					
				} else if(!data.settings.infiniteSlider) {
				
					if(slidePosition <= data.numberOfSlides) {
						$(data.scrollerNode).children(':eq(' + (slidePosition - 1) + ')').before(slideNode);
					} else {
						$(data.scrollerNode).children(':eq(' + (slidePosition - 2) + ')').after(slideNode);
					}
					
					if($this.data('args').currentSlideNumber >= slidePosition) {
						$this.data('args').currentSlideNumber++;
					}
					
				} else {
					
					if(slidePosition == 1) {
						$(data.scrollerNode).children(':eq(0)').before(slideNode);
					} else {
						$(data.scrollerNode).children(':eq(' + (slidePosition - 2) + ')').after(slideNode);
					}
					
					if((infiniteSliderOffset[data.sliderNumber] < -1) && (true)) {
						activeChildOffsets[data.sliderNumber]--;
					}
					
					if($this.data('args').currentSlideNumber >= slidePosition) {
						activeChildOffsets[data.sliderNumber]++;
					}
					
				}
					
				$this.data('iosslider').numberOfSlides++;
				
				methods.update(this);
			
			});
		
		},
		
		removeSlide: function(slideNumber) {
		
			return this.each(function() {
			
				var $this = $(this);
				var data = $this.data('iosslider');
				if(data == undefined) return false;

				$(data.scrollerNode).children(':eq(' + (slideNumber - 1) + ')').remove();
				if(activeChildOffsets[data.sliderNumber] > (slideNumber - 1)) {
					activeChildOffsets[data.sliderNumber]--;
				}

				methods.update(this);
			
			});
		
		},
		
		goToSlide: function(slide, node) {
			
			if(node == undefined) {
				node = this;
			}
			
			return $(node).each(function() {
					
				var $this = $(this);
				var data = $this.data('iosslider');
				if(data == undefined) return false;
				
				slide = (slide > data.childrenOffsets.length) ? data.childrenOffsets.length - 1 : slide - 1;
				
				helpers.changeSlide(slide, $(data.scrollerNode), $(data.slideNodes), slideTimeouts[data.sliderNumber], data.scrollbarClass, data.scrollbarWidth, data.stageWidth, data.scrollbarStageWidth, data.scrollMargin, data.scrollBorder, data.originalOffsets, data.childrenOffsets, data.slideNodeOuterWidths, data.sliderNumber, data.infiniteSliderWidth, data.numberOfSlides, data.centeredSlideOffset, data.settings);
				
				activeChildOffsets[data.sliderNumber] = slide;

			});
			
		},
		
		lock: function() {
			
			return this.each(function() {
			
				var $this = $(this);
				var data = $this.data('iosslider');
				if(data == undefined) return false;

				touchLocks[data.sliderNumber] = true;
			
			});
			
		},
		
		unlock: function() {
		
			return this.each(function() {
			
				var $this = $(this);
				var data = $this.data('iosslider');
				if(data == undefined) return false;

				touchLocks[data.sliderNumber] = false;
			
			});
		
		},
		
		getData: function() {
		
			return this.each(function() {
			
				var $this = $(this);
				var data = $this.data('iosslider');
				if(data == undefined) return false;
				
				return data;
			
			});	
		
		},
		
		autoSlidePause: function() {
			
			return this.each(function() {
			
				var $this = $(this);
				var data = $this.data('iosslider');
				if(data == undefined) return false;
				
				helpers.autoSlidePause(data.sliderNumber);
				
				return data;
			
			});	
		
		},
		
		autoSlidePlay: function() {
			
			return this.each(function() {
			
				var $this = $(this);
				var data = $this.data('iosslider');
				if(data == undefined) return false;
				
				iosSliderSettings[data.sliderNumber].autoSlide = true;
				
				helpers.autoSlide($(data.scrollerNode), $(data.slideNodes), slideTimeouts[data.sliderNumber], data.scrollbarClass, data.scrollbarWidth, data.stageWidth, data.scrollbarStageWidth, data.scrollMargin, data.scrollBorder, data.originalOffsets, data.childrenOffsets, data.slideNodeOuterWidths, data.sliderNumber, data.infiniteSliderWidth, data.numberOfSlides, data.centeredSlideOffset, data.settings);
				
				return data;
			
			});	
			
		}
	
	}
	
	/* public functions */
	$.fn.iosSlider = function(method) {

		if(methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof method === 'object' || !method) {
			return methods.init.apply(this, arguments);
		} else {
			$.error('invalid method call!');
		}
	
    };

}) (jQuery);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:35:"/js/zoom-showcase.js?15516888026500";s:6:"source";s:20:"/js/zoom-showcase.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
!function(ct){var rt="ontouchend"in document;function ht(t){ct(this).data("image").fadeTo(250,1)}function lt(t){var e=ct(this);e.data("image").stop(!0,!0).fadeTo(250,e.data("sideOpacity"))}function dt(t){var e=ct(this);"_parent"===e.data("target")?window.location=e.data("link"):window.open(e.data("link"))}ct.fn.zoomShowcase=function(st){return this.each(function(){var e,i,n,a,v,c,r,h,l,d,u,o,b=[],k=[],y=[],j=ct(this),t=st.easing,x=st.linkTarget,I=st.imageWidth,S=st.imageHeight,s=st.bannerWidth,T=st.sideOpacity,L=st.randomizeItems,f=st.animationSpeed,p=st.autoPlayDelay,g=st.backZoom,m=st.sideZoom,w=st.autoPlay,P=I*m|0,z=S*m|0,E=I*g|0,X=S*g|0,C=.5*s|0,M=.5*S|0,D=j.children("ul").children("li"),N=D.length,O=!1,R=!1,W=!1,Q=!0,Z=N-1,A=0,H=0,U=s-P,_=C-(.5*I|0),q=C-(.5*E|0),B=M-(.5*z|0),F=M-(.5*X|0);function G(t){t.stopPropagation(),A<Z?A++:(v&&v.remove(),b[0].fadeTo(500,1,J),v=A=null)}function J(){e=Z,a=0,b[n=1].fadeTo(500,1),b[e].fadeTo(500,1,K)}function K(){b[1].css("cursor","pointer").mouseenter(ht).mouseleave(lt),b[Z].css("cursor","pointer").mouseenter(ht).mouseleave(lt);for(var t=N;t--;)b[t].show();w&&j.mouseenter(V).mouseleave(Y),nt()}function V(t){R=!0,o&&clearTimeout(o)}function Y(t){R=!1,O&&(o=setTimeout(tt,p))}function $(t){o&&clearTimeout(o),O=!1,e=0<(a=0<H?H-1:Z)?a-1:Z,i=H<Z?H+1:0,n=H,b[a].unbind("click",$),b[i].unbind("click",tt),b[e].css("z-index",1),b[n].css("z-index",2),et()}function tt(t){o&&clearTimeout(o),O=!1,i=0<(e=H)?H-1:Z,n=(a=H<Z?H+1:0)<Z?a+1:0,b[a].unbind("click",tt),b[i].unbind("click",$),b[e].css("z-index",2),b[n].css("z-index",1),et()}function et(){if(b[H].css("cursor","auto").unbind("click",dt),H=a,W=!0,null!=d){for(;d.length;)d[0].stop().data("child").stop(),d[0].removeData("child").empty().remove(),d.shift();c=d=null}rt&&(b[i].cjSwipe("off"),b[e].cjSwipe("off"),b[n].cjSwipe("off"),b[a].cjSwipe("off")),b[i].unbind("mouseenter",ht).unbind("mouseleave",lt).css({zIndex:0,cursor:"auto"}).animate({left:q,top:F,width:E,height:X},f,t),k[i].animate({width:E,height:X},f,t),b[e].css("cursor","pointer").mouseenter(ht).mouseleave(lt).animate({left:0,top:B,width:P,height:z},f,t),k[e].animate({width:P,height:z,opacity:T},f,t),b[n].css("cursor","pointer").mouseenter(ht).mouseleave(lt).animate({left:U,top:B,width:P,height:z},f,t),k[n].animate({width:P,height:z,opacity:T},f,t),b[a].unbind("mouseenter",ht).unbind("mouseleave",lt).css({zIndex:3,cursor:"auto"}).animate({left:_,top:0,width:I,height:S},f,t),k[a].stop(!0,!0).animate({width:I,height:S,opacity:1},f,t,nt)}function it(t){t?tt():$()}function nt(){rt?(b[n].click(tt).cjSwipe("on",it),b[e].click($).cjSwipe("on",it),b[a].click($).cjSwipe("on",it)):(b[n].click(tt),b[e].click($)),b[H].data("link")&&b[H].css("cursor","pointer").click(dt),W=!1,0!==y[H]?(c=y[H],r=c.content.length-1,h=c.align,d=[],l=0,ot()):at()}function at(){!w||W||R||(o=setTimeout(tt,p)),O=!0}function ot(){if(!W){var t=c.content[l];if(0!==t){var e,i,n,a,o=ct("<div />").addClass("zoom-gallery-info-text").appendTo(j),s=ct("<span />").html(t).appendTo(o);Q&&(u=parseInt(o.css("padding-left"),10)+parseInt(o.css("padding-right"),10),parseInt(o.css("padding-top"),10)+parseInt(o.css("padding-bottom"),10),Q=!1),a=o.height(),n=i=o.width(),s.css({width:n-u,height:a}),o.css(c.style[l]).css({left:"left"===h?_+c.position[l].x:_+I-c.position[l].x-u,top:c.position[l].y,opacity:1,width:0,height:a}).data("child",s).find("a").each(function(){ct(this).css(c.style[l])}),d[l]=o,l<r?(l++,e=ot):e=at,"left"===h?o.animate({width:n},250,e):(s.css({position:"relative",left:-i}).animate({left:0},250),o.animate({left:_+I-c.position[l].x-n-u,width:n},250,e))}else l<r?(l++,ot()):at()}}N<4||(!function(){st.bannerWidth;if(3<N){var i,n,a,o,s,c,r,h,t=N,l=[],d=[],u=[];if((v=j.find(".preloader")).length&&v.css({left:C-(.5*parseInt(v.attr("width"),10)|0),top:M-(.5*parseInt(v.attr("height"),10)|0),display:"block"}),j.css("height",S+20),j.find("ul").css("display","block"),D.each(function(t){var e;h=ct(this),l[t]=h.css({position:"absolute",backgroundColor:"#000"}).data({sideOpacity:T,target:x}).hide(),i=ct("<img />").css({position:"absolute",top:0,left:0}).load(G).appendTo(ct(this)),d[t]=i,h.data("image",i),ul=h.find("ul"),ul.length?(ul.attr("title")&&h.data("link",ul.attr("title")),s=ul.attr("class")&&-1!==(s=ul.attr("class").toLowerCase()).search("-")?s.split("-")[1]:"left"):s="left",(n=h.find("li")).length?(a=[],c=[],r=[],n.each(function(t){e=ct(this),""!==ct.trim(n.html())&&e.attr("class")&&-1!==e.attr("class").toLowerCase().search("x")?(o=e.attr("class").split("x"),a[t]=e.html(),c[t]={x:parseInt(o[0],10),y:parseInt(o[1],10)},r[t]={color:e.css("color"),backgroundColor:e.css("background-color")}):(a[t]=0,c[t]=0,r[t]=0)}),u[t]={content:a,position:c,style:r,align:s}):u[t]=0,ul.empty()}),L){for(var e,f,p=[],g=[],m=[],w=0;w<N;w++)p[w]=l[w],g[w]=d[w],m[w]=u[w];for(;0<p.length;)e=Math.random()*p.length|0,f=b.length,b[f]=p[e],k[f]=g[e],y[f]=m[e],p.splice(e,1),g.splice(e,1),m.splice(e,1)}else b=l,k=d,y=u;for(;t--;){switch(t){case 0:b[t].css({left:_,top:0,width:I,height:S,zIndex:3}),k[t].attr("width",I).attr("height",S);break;case 1:b[t].css({left:U,top:B,width:P,height:z,zIndex:1}),k[t].css("opacity",T).attr("width",P).attr("height",z);break;case Z:b[t].css({left:0,top:B,width:P,height:z,zIndex:2}),k[t].css("opacity",T).attr("width",P).attr("height",z);break;default:b[t].css({left:q,top:F,width:E,height:X,xIndex:0}),k[t].attr("width",E).attr("height",X)}k[t].attr("src",b[t].attr("title")),b[t].removeAttr("title")}}}(),this.goLeft=function(){$()},this.goRight=function(){tt()},this.isReady=function(){return!W})})}}(jQuery),function(t){var i,n,a,o="addEventListener"in window,s={on:function(t,e){t.cjCallback=e,t.addEventListener(a,r)},off:function(t){t.removeEventListener(a,r),t.removeEventListener(n,h),t.removeEventListener(i,l),delete t.cjSwipeLeft,delete t.cjSwipeRight,delete t.cjNewPageX,delete t.cjPageX}};function c(t,e){s[t](this,e)}function r(t){var e=t.touches?t.touches[0]:t;this.cjPageX=e.pageX,this.addEventListener(i,l),this.addEventListener(n,h)}function h(t){var e=t.touches?t.touches[0]:t,i=this.cjNewPageX=e.pageX;10<Math.abs(this.cjPageX-i)&&t.preventDefault()}function l(){this.removeEventListener(n,h),this.removeEventListener(i,l);var t=this.cjNewPageX,e=this.cjPageX;30<Math.abs(e-t)&&this.cjCallback(t<e)}"ontouchend"in document?(i="touchend",n="touchmove",a="touchstart"):(i="MSPointerUp",n="MSPointerMove",a="MSPointerDown"),t.fn.cjSwipe=function(t,e){if(o)return this.each(c,[t,e])}}(jQuery);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:44:"/js/jquery.maskedinput.min.js?14737541054330";s:6:"source";s:29:"/js/jquery.maskedinput.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*
    jQuery Masked Input Plugin
    Copyright (c) 2007 - 2015 Josh Bush (digitalbush.com)
    Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
    Version: 1.4.1
*/
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){var b,c=navigator.userAgent,d=/iphone/i.test(c),e=/chrome/i.test(c),f=/android/i.test(c);a.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},a.fn.extend({caret:function(a,b){var c;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof a?(b="number"==typeof b?b:a,this.each(function(){this.setSelectionRange?this.setSelectionRange(a,b):this.createTextRange&&(c=this.createTextRange(),c.collapse(!0),c.moveEnd("character",b),c.moveStart("character",a),c.select())})):(this[0].setSelectionRange?(a=this[0].selectionStart,b=this[0].selectionEnd):document.selection&&document.selection.createRange&&(c=document.selection.createRange(),a=0-c.duplicate().moveStart("character",-1e5),b=a+c.text.length),{begin:a,end:b})},unmask:function(){return this.trigger("unmask")},mask:function(c,g){var h,i,j,k,l,m,n,o;if(!c&&this.length>0){h=a(this[0]);var p=h.data(a.mask.dataName);return p?p():void 0}return g=a.extend({autoclear:a.mask.autoclear,placeholder:a.mask.placeholder,completed:null},g),i=a.mask.definitions,j=[],k=n=c.length,l=null,a.each(c.split(""),function(a,b){"?"==b?(n--,k=a):i[b]?(j.push(new RegExp(i[b])),null===l&&(l=j.length-1),k>a&&(m=j.length-1)):j.push(null)}),this.trigger("unmask").each(function(){function h(){if(g.completed){for(var a=l;m>=a;a++)if(j[a]&&C[a]===p(a))return;g.completed.call(B)}}function p(a){return g.placeholder.charAt(a<g.placeholder.length?a:0)}function q(a){for(;++a<n&&!j[a];);return a}function r(a){for(;--a>=0&&!j[a];);return a}function s(a,b){var c,d;if(!(0>a)){for(c=a,d=q(b);n>c;c++)if(j[c]){if(!(n>d&&j[c].test(C[d])))break;C[c]=C[d],C[d]=p(d),d=q(d)}z(),B.caret(Math.max(l,a))}}function t(a){var b,c,d,e;for(b=a,c=p(a);n>b;b++)if(j[b]){if(d=q(b),e=C[b],C[b]=c,!(n>d&&j[d].test(e)))break;c=e}}function u(){var a=B.val(),b=B.caret();if(o&&o.length&&o.length>a.length){for(A(!0);b.begin>0&&!j[b.begin-1];)b.begin--;if(0===b.begin)for(;b.begin<l&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}else{for(A(!0);b.begin<n&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}h()}function v(){A(),B.val()!=E&&B.change()}function w(a){if(!B.prop("readonly")){var b,c,e,f=a.which||a.keyCode;o=B.val(),8===f||46===f||d&&127===f?(b=B.caret(),c=b.begin,e=b.end,e-c===0&&(c=46!==f?r(c):e=q(c-1),e=46===f?q(e):e),y(c,e),s(c,e-1),a.preventDefault()):13===f?v.call(this,a):27===f&&(B.val(E),B.caret(0,A()),a.preventDefault())}}function x(b){if(!B.prop("readonly")){var c,d,e,g=b.which||b.keyCode,i=B.caret();if(!(b.ctrlKey||b.altKey||b.metaKey||32>g)&&g&&13!==g){if(i.end-i.begin!==0&&(y(i.begin,i.end),s(i.begin,i.end-1)),c=q(i.begin-1),n>c&&(d=String.fromCharCode(g),j[c].test(d))){if(t(c),C[c]=d,z(),e=q(c),f){var k=function(){a.proxy(a.fn.caret,B,e)()};setTimeout(k,0)}else B.caret(e);i.begin<=m&&h()}b.preventDefault()}}}function y(a,b){var c;for(c=a;b>c&&n>c;c++)j[c]&&(C[c]=p(c))}function z(){B.val(C.join(""))}function A(a){var b,c,d,e=B.val(),f=-1;for(b=0,d=0;n>b;b++)if(j[b]){for(C[b]=p(b);d++<e.length;)if(c=e.charAt(d-1),j[b].test(c)){C[b]=c,f=b;break}if(d>e.length){y(b+1,n);break}}else C[b]===e.charAt(d)&&d++,k>b&&(f=b);return a?z():k>f+1?g.autoclear||C.join("")===D?(B.val()&&B.val(""),y(0,n)):z():(z(),B.val(B.val().substring(0,f+1))),k?b:l}var B=a(this),C=a.map(c.split(""),function(a,b){return"?"!=a?i[a]?p(b):a:void 0}),D=C.join(""),E=B.val();B.data(a.mask.dataName,function(){return a.map(C,function(a,b){return j[b]&&a!=p(b)?a:null}).join("")}),B.one("unmask",function(){B.off(".mask").removeData(a.mask.dataName)}).on("focus.mask",function(){if(!B.prop("readonly")){clearTimeout(b);var a;E=B.val(),a=A(),b=setTimeout(function(){B.get(0)===document.activeElement&&(z(),a==c.replace("?","").length?B.caret(0,a):B.caret(a))},10)}}).on("blur.mask",v).on("keydown.mask",w).on("keypress.mask",x).on("input.mask paste.mask",function(){B.prop("readonly")||setTimeout(function(){var a=A(!0);B.caret(a),h()},0)}),e&&f&&B.off("input.mask").on("input.mask",u),A()})}})});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:44:"/js/jquery.jcarousel.min_.js?147375410516104";s:6:"source";s:28:"/js/jquery.jcarousel.min_.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*!
 * jCarousel - Riding carousels with jQuery
 *   http://sorgalla.com/jcarousel/
 *
 * Copyright (c) 2006 Jan Sorgalla (http://sorgalla.com)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Built on top of the jQuery library
 *   http://jquery.com
 *
 * Inspired by the "Carousel Component" by Bill Scott
 *   http://billwscott.com/carousel/
 */

(function(a){var b={vertical:!1,rtl:!1,start:1,offset:1,size:null,scroll:3,visible:null,animation:"normal",easing:"swing",auto:0,wrap:null,initCallback:null,setupCallback:null,reloadCallback:null,itemLoadCallback:null,itemFirstInCallback:null,itemFirstOutCallback:null,itemLastInCallback:null,itemLastOutCallback:null,itemVisibleInCallback:null,itemVisibleOutCallback:null,animationStepCallback:null,buttonNextHTML:"<div></div>",buttonPrevHTML:"<div></div>",buttonNextEvent:"click",buttonPrevEvent:"click",buttonNextCallback:null,buttonPrevCallback:null,itemFallbackDimension:null},c=!1;a(window).bind("load.jcarousel",function(){c=!0}),a.jcarousel=function(e,f){this.options=a.extend({},b,f||{}),this.locked=!1,this.autoStopped=!1,this.container=null,this.clip=null,this.list=null,this.buttonNext=null,this.buttonPrev=null,this.buttonNextState=null,this.buttonPrevState=null,f&&void 0!==f.rtl||(this.options.rtl="rtl"==(a(e).attr("dir")||a("html").attr("dir")||"").toLowerCase()),this.wh=this.options.vertical?"height":"width",this.lt=this.options.vertical?"top":this.options.rtl?"right":"left";for(var g="",h=e.className.split(" "),i=0;h.length>i;i++)if(-1!=h[i].indexOf("jcarousel-skin")){a(e).removeClass(h[i]),g=h[i];break}"UL"==e.nodeName.toUpperCase()||"OL"==e.nodeName.toUpperCase()?(this.list=a(e),this.clip=this.list.parents(".jcarousel-clip"),this.container=this.list.parents(".jcarousel-container")):(this.container=a(e),this.list=this.container.find("ul,ol").eq(0),this.clip=this.container.find(".jcarousel-clip")),0===this.clip.size()&&(this.clip=this.list.wrap("<div></div>").parent()),0===this.container.size()&&(this.container=this.clip.wrap("<div></div>").parent()),""!==g&&-1==this.container.parent()[0].className.indexOf("jcarousel-skin")&&this.container.wrap('<div class=" '+g+'"></div>'),this.buttonPrev=a(".jcarousel-prev",this.container),0===this.buttonPrev.size()&&null!==this.options.buttonPrevHTML&&(this.buttonPrev=a(this.options.buttonPrevHTML).appendTo(this.container)),this.buttonPrev.addClass(this.className("jcarousel-prev")),this.buttonNext=a(".jcarousel-next",this.container),0===this.buttonNext.size()&&null!==this.options.buttonNextHTML&&(this.buttonNext=a(this.options.buttonNextHTML).appendTo(this.container)),this.buttonNext.addClass(this.className("jcarousel-next")),this.clip.addClass(this.className("jcarousel-clip")).css({position:"relative"}),this.list.addClass(this.className("jcarousel-list")).css({overflow:"hidden",position:"relative",top:0,margin:0,padding:0}).css(this.options.rtl?"right":"left",0),this.container.addClass(this.className("jcarousel-container")).css({position:"relative"}),!this.options.vertical&&this.options.rtl&&this.container.addClass("jcarousel-direction-rtl").attr("dir","rtl");var j=null!==this.options.visible?Math.ceil(this.clipping()/this.options.visible):null,k=this.list.children("li"),l=this;if(k.size()>0){var m=0,n=this.options.offset;k.each(function(){l.format(this,n++),m+=l.dimension(this,j)}),this.list.css(this.wh,m+100+"px"),f&&void 0!==f.size||(this.options.size=k.size())}this.container.css("display","block"),this.buttonNext.css("display","block"),this.buttonPrev.css("display","block"),this.funcNext=function(){return l.next(),!1},this.funcPrev=function(){return l.prev(),!1},this.funcResize=function(){l.resizeTimer&&clearTimeout(l.resizeTimer),l.resizeTimer=setTimeout(function(){l.reload()},100)},null!==this.options.initCallback&&this.options.initCallback(this,"init"),!c&&d.isSafari()?(this.buttons(!1,!1),a(window).bind("load.jcarousel",function(){l.setup()})):this.setup()};var d=a.jcarousel;d.fn=d.prototype={jcarousel:"0.2.9"},d.fn.extend=d.extend=a.extend,d.fn.extend({setup:function(){if(this.first=null,this.last=null,this.prevFirst=null,this.prevLast=null,this.animating=!1,this.timer=null,this.resizeTimer=null,this.tail=null,this.inTail=!1,!this.locked){this.list.css(this.lt,this.pos(this.options.offset)+"px");var b=this.pos(this.options.start,!0);this.prevFirst=this.prevLast=null,this.animate(b,!1),a(window).unbind("resize.jcarousel",this.funcResize).bind("resize.jcarousel",this.funcResize),null!==this.options.setupCallback&&this.options.setupCallback(this)}},reset:function(){this.list.empty(),this.list.css(this.lt,"0px"),this.list.css(this.wh,"10px"),null!==this.options.initCallback&&this.options.initCallback(this,"reset"),this.setup()},reload:function(){if(null!==this.tail&&this.inTail&&this.list.css(this.lt,d.intval(this.list.css(this.lt))+this.tail),this.tail=null,this.inTail=!1,null!==this.options.reloadCallback&&this.options.reloadCallback(this),null!==this.options.visible){var a=this,b=Math.ceil(this.clipping()/this.options.visible),c=0,e=0;this.list.children("li").each(function(d){c+=a.dimension(this,b),a.first>d+1&&(e=c)}),this.list.css(this.wh,c+"px"),this.list.css(this.lt,-e+"px")}this.scroll(this.first,!1)},lock:function(){this.locked=!0,this.buttons()},unlock:function(){this.locked=!1,this.buttons()},size:function(a){return void 0!==a&&(this.options.size=a,this.locked||this.buttons()),this.options.size},has:function(a,b){void 0!==b&&b||(b=a),null!==this.options.size&&b>this.options.size&&(b=this.options.size);for(var c=a;b>=c;c++){var d=this.get(c);if(!d.length||d.hasClass("jcarousel-item-placeholder"))return!1}return!0},get:function(b){return a(">.jcarousel-item-"+b,this.list)},add:function(b,c){var e=this.get(b),f=0,g=a(c);if(0===e.length){var h,i=d.intval(b);for(e=this.create(b);;)if(h=this.get(--i),0>=i||h.length){0>=i?this.list.prepend(e):h.after(e);break}}else f=this.dimension(e);"LI"==g.get(0).nodeName.toUpperCase()?(e.replaceWith(g),e=g):e.empty().append(c),this.format(e.removeClass(this.className("jcarousel-item-placeholder")),b);var j=null!==this.options.visible?Math.ceil(this.clipping()/this.options.visible):null,k=this.dimension(e,j)-f;return b>0&&this.first>b&&this.list.css(this.lt,d.intval(this.list.css(this.lt))-k+"px"),this.list.css(this.wh,d.intval(this.list.css(this.wh))+k+"px"),e},remove:function(a){var b=this.get(a);if(b.length&&!(a>=this.first&&this.last>=a)){var c=this.dimension(b);this.first>a&&this.list.css(this.lt,d.intval(this.list.css(this.lt))+c+"px"),b.remove(),this.list.css(this.wh,d.intval(this.list.css(this.wh))-c+"px")}},next:function(){null===this.tail||this.inTail?this.scroll("both"!=this.options.wrap&&"last"!=this.options.wrap||null===this.options.size||this.last!=this.options.size?this.first+this.options.scroll:1):this.scrollTail(!1)},prev:function(){null!==this.tail&&this.inTail?this.scrollTail(!0):this.scroll("both"!=this.options.wrap&&"first"!=this.options.wrap||null===this.options.size||1!=this.first?this.first-this.options.scroll:this.options.size)},scrollTail:function(a){if(!this.locked&&!this.animating&&this.tail){this.pauseAuto();var b=d.intval(this.list.css(this.lt));b=a?b+this.tail:b-this.tail,this.inTail=!a,this.prevFirst=this.first,this.prevLast=this.last,this.animate(b)}},scroll:function(a,b){this.locked||this.animating||(this.pauseAuto(),this.animate(this.pos(a),b))},pos:function(a,b){var c=d.intval(this.list.css(this.lt));if(this.locked||this.animating)return c;"circular"!=this.options.wrap&&(a=1>a?1:this.options.size&&a>this.options.size?this.options.size:a);for(var m,e=this.first>a,f="circular"!=this.options.wrap&&1>=this.first?1:this.first,g=e?this.get(f):this.get(this.last),h=e?f:f-1,i=null,j=0,k=!1,l=0;e?--h>=a:a>++h;)i=this.get(h),k=!i.length,0===i.length&&(i=this.create(h).addClass(this.className("jcarousel-item-placeholder")),g[e?"before":"after"](i),null!==this.first&&"circular"==this.options.wrap&&null!==this.options.size&&(0>=h||h>this.options.size)&&(m=this.get(this.index(h)),m.length&&(i=this.add(h,m.clone(!0))))),g=i,l=this.dimension(i),k&&(j+=l),null!==this.first&&("circular"==this.options.wrap||h>=1&&(null===this.options.size||this.options.size>=h))&&(c=e?c+l:c-l);var n=this.clipping(),o=[],p=0,q=0;for(g=this.get(a-1),h=a;++p;){if(i=this.get(h),k=!i.length,0===i.length&&(i=this.create(h).addClass(this.className("jcarousel-item-placeholder")),0===g.length?this.list.prepend(i):g[e?"before":"after"](i),null!==this.first&&"circular"==this.options.wrap&&null!==this.options.size&&(0>=h||h>this.options.size)&&(m=this.get(this.index(h)),m.length&&(i=this.add(h,m.clone(!0))))),g=i,l=this.dimension(i),0===l)throw Error("jCarousel: No width/height set for items. This will cause an infinite loop. Aborting...");if("circular"!=this.options.wrap&&null!==this.options.size&&h>this.options.size?o.push(i):k&&(j+=l),q+=l,q>=n)break;h++}for(var r=0;o.length>r;r++)o[r].remove();j>0&&(this.list.css(this.wh,this.dimension(this.list)+j+"px"),e&&(c-=j,this.list.css(this.lt,d.intval(this.list.css(this.lt))-j+"px")));var s=a+p-1;if("circular"!=this.options.wrap&&this.options.size&&s>this.options.size&&(s=this.options.size),h>s)for(p=0,h=s,q=0;++p&&(i=this.get(h--),i.length)&&(q+=this.dimension(i),!(q>=n)););var t=s-p+1;if("circular"!=this.options.wrap&&1>t&&(t=1),this.inTail&&e&&(c+=this.tail,this.inTail=!1),this.tail=null,"circular"!=this.options.wrap&&s==this.options.size&&s-p+1>=1){var u=d.intval(this.get(s).css(this.options.vertical?"marginBottom":"marginRight"));q-u>n&&(this.tail=q-n-u)}for(b&&a===this.options.size&&this.tail&&(c-=this.tail,this.inTail=!0);a-->t;)c+=this.dimension(this.get(a));return this.prevFirst=this.first,this.prevLast=this.last,this.first=t,this.last=s,c},animate:function(b,c){if(!this.locked&&!this.animating){this.animating=!0;var d=this,e=function(){if(d.animating=!1,0===b&&d.list.css(d.lt,0),!d.autoStopped&&("circular"==d.options.wrap||"both"==d.options.wrap||"last"==d.options.wrap||null===d.options.size||d.last<d.options.size||d.last==d.options.size&&null!==d.tail&&!d.inTail)&&d.startAuto(),d.buttons(),d.notify("onAfterAnimation"),"circular"==d.options.wrap&&null!==d.options.size)for(var a=d.prevFirst;d.prevLast>=a;a++)null===a||a>=d.first&&d.last>=a||!(1>a||a>d.options.size)||d.remove(a)};if(this.notify("onBeforeAnimation"),this.options.animation&&c!==!1){var f=this.options.vertical?{top:b}:this.options.rtl?{right:b}:{left:b},g={duration:this.options.animation,easing:this.options.easing,complete:e};a.isFunction(this.options.animationStepCallback)&&(g.step=this.options.animationStepCallback),this.list.animate(f,g)}else this.list.css(this.lt,b+"px"),e()}},startAuto:function(a){if(void 0!==a&&(this.options.auto=a),0===this.options.auto)return this.stopAuto();if(null===this.timer){this.autoStopped=!1;var b=this;this.timer=window.setTimeout(function(){b.next()},1e3*this.options.auto)}},stopAuto:function(){this.pauseAuto(),this.autoStopped=!0},pauseAuto:function(){null!==this.timer&&(window.clearTimeout(this.timer),this.timer=null)},buttons:function(a,b){null==a&&(a=!this.locked&&0!==this.options.size&&(this.options.wrap&&"first"!=this.options.wrap||null===this.options.size||this.last<this.options.size),this.locked||this.options.wrap&&"first"!=this.options.wrap||null===this.options.size||!(this.last>=this.options.size)||(a=null!==this.tail&&!this.inTail)),null==b&&(b=!this.locked&&0!==this.options.size&&(this.options.wrap&&"last"!=this.options.wrap||this.first>1),this.locked||this.options.wrap&&"last"!=this.options.wrap||null===this.options.size||1!=this.first||(b=null!==this.tail&&this.inTail));var c=this;this.buttonNext.size()>0?(this.buttonNext.unbind(this.options.buttonNextEvent+".jcarousel",this.funcNext),a&&this.buttonNext.bind(this.options.buttonNextEvent+".jcarousel",this.funcNext),this.buttonNext[a?"removeClass":"addClass"](this.className("jcarousel-next-disabled")).attr("disabled",a?!1:!0),null!==this.options.buttonNextCallback&&this.buttonNext.data("jcarouselstate")!=a&&this.buttonNext.each(function(){c.options.buttonNextCallback(c,this,a)}).data("jcarouselstate",a)):null!==this.options.buttonNextCallback&&this.buttonNextState!=a&&this.options.buttonNextCallback(c,null,a),this.buttonPrev.size()>0?(this.buttonPrev.unbind(this.options.buttonPrevEvent+".jcarousel",this.funcPrev),b&&this.buttonPrev.bind(this.options.buttonPrevEvent+".jcarousel",this.funcPrev),this.buttonPrev[b?"removeClass":"addClass"](this.className("jcarousel-prev-disabled")).attr("disabled",b?!1:!0),null!==this.options.buttonPrevCallback&&this.buttonPrev.data("jcarouselstate")!=b&&this.buttonPrev.each(function(){c.options.buttonPrevCallback(c,this,b)}).data("jcarouselstate",b)):null!==this.options.buttonPrevCallback&&this.buttonPrevState!=b&&this.options.buttonPrevCallback(c,null,b),this.buttonNextState=a,this.buttonPrevState=b},notify:function(a){var b=null===this.prevFirst?"init":this.prevFirst<this.first?"next":"prev";this.callback("itemLoadCallback",a,b),this.prevFirst!==this.first&&(this.callback("itemFirstInCallback",a,b,this.first),this.callback("itemFirstOutCallback",a,b,this.prevFirst)),this.prevLast!==this.last&&(this.callback("itemLastInCallback",a,b,this.last),this.callback("itemLastOutCallback",a,b,this.prevLast)),this.callback("itemVisibleInCallback",a,b,this.first,this.last,this.prevFirst,this.prevLast),this.callback("itemVisibleOutCallback",a,b,this.prevFirst,this.prevLast,this.first,this.last)},callback:function(b,c,d,e,f,g,h){if(null!=this.options[b]&&("object"==typeof this.options[b]||"onAfterAnimation"==c)){var i="object"==typeof this.options[b]?this.options[b][c]:this.options[b];if(a.isFunction(i)){var j=this;if(void 0===e)i(j,d,c);else if(void 0===f)this.get(e).each(function(){i(j,this,e,d,c)});else for(var k=function(a){j.get(a).each(function(){i(j,this,a,d,c)})},l=e;f>=l;l++)null===l||l>=g&&h>=l||k(l)}}},create:function(a){return this.format("<li></li>",a)},format:function(b,c){b=a(b);for(var d=b.get(0).className.split(" "),e=0;d.length>e;e++)-1!=d[e].indexOf("jcarousel-")&&b.removeClass(d[e]);return b.addClass(this.className("jcarousel-item")).addClass(this.className("jcarousel-item-"+c)).css({"float":this.options.rtl?"right":"left","list-style":"none"}).attr("jcarouselindex",c),b},className:function(a){return a+" "+a+(this.options.vertical?"-vertical":"-horizontal")},dimension:function(b,c){var e=a(b);if(null==c)return this.options.vertical?e.innerHeight()+d.intval(e.css("margin-top"))+d.intval(e.css("margin-bottom"))+d.intval(e.css("border-top-width"))+d.intval(e.css("border-bottom-width"))||d.intval(this.options.itemFallbackDimension):e.innerWidth()+d.intval(e.css("margin-left"))+d.intval(e.css("margin-right"))+d.intval(e.css("border-left-width"))+d.intval(e.css("border-right-width"))||d.intval(this.options.itemFallbackDimension);var f=this.options.vertical?c-d.intval(e.css("marginTop"))-d.intval(e.css("marginBottom")):c-d.intval(e.css("marginLeft"))-d.intval(e.css("marginRight"));return a(e).css(this.wh,f+"px"),this.dimension(e)},clipping:function(){return this.options.vertical?this.clip[0].offsetHeight-d.intval(this.clip.css("borderTopWidth"))-d.intval(this.clip.css("borderBottomWidth")):this.clip[0].offsetWidth-d.intval(this.clip.css("borderLeftWidth"))-d.intval(this.clip.css("borderRightWidth"))},index:function(a,b){return null==b&&(b=this.options.size),Math.round(((a-1)/b-Math.floor((a-1)/b))*b)+1}}),d.extend({defaults:function(c){return a.extend(b,c||{})},intval:function(a){return a=parseInt(a,10),isNaN(a)?0:a},windowLoaded:function(){c=!0},isSafari:function(){var a=navigator.userAgent.toLowerCase(),b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||[],c=b[1]||"";return"webkit"===c}}),a.fn.jcarousel=function(b){if("string"==typeof b){var c=a(this).data("jcarousel"),e=Array.prototype.slice.call(arguments,1);return c[b].apply(c,e)}return this.each(function(){var c=a(this).data("jcarousel");c?(b&&a.extend(c.options,b),c.reload()):a(this).data("jcarousel",new d(this,b))})}})(jQuery);

/* End */
;
; /* Start:"a:4:{s:4:"full";s:38:"/js/jquery.cookie.min.js?1473754105732";s:6:"source";s:24:"/js/jquery.cookie.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
jQuery.cookie=function(b,j,m){if(typeof j!="undefined"){m=m||{};if(j===null){j="";m.expires=-1}var e="";if(m.expires&&(typeof m.expires=="number"||m.expires.toUTCString)){var f;if(typeof m.expires=="number"){f=new Date();f.setTime(f.getTime()+(m.expires*24*60*60*1000))}else{f=m.expires}e="; expires="+f.toUTCString()}var l=m.path?"; path="+(m.path):"";var g=m.domain?"; domain="+(m.domain):"";var a=m.secure?"; secure":"";document.cookie=[b,"=",encodeURIComponent(j),e,l,g,a].join("")}else{var d=null;if(document.cookie&&document.cookie!=""){var k=document.cookie.split(";");for(var h=0;h<k.length;h++){var c=jQuery.trim(k[h]);if(c.substring(0,b.length+1)==(b+"=")){d=decodeURIComponent(c.substring(b.length+1));break}}}return d}};
/* End */
;
; /* Start:"a:4:{s:4:"full";s:35:"/js/waypoints.min.js?14737541058051";s:6:"source";s:20:"/js/waypoints.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
// Generated by CoffeeScript 1.6.2
/*!
jQuery Waypoints - v2.0.5
Copyright (c) 2011-2014 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/
(function(){var t=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++){if(e in this&&this[e]===t)return e}return-1},e=[].slice;(function(t,e){if(typeof define==="function"&&define.amd){return define("waypoints",["jquery"],function(n){return e(n,t)})}else{return e(t.jQuery,t)}})(window,function(n,r){var i,o,l,s,f,u,c,a,h,d,p,y,v,w,g,m;i=n(r);a=t.call(r,"ontouchstart")>=0;s={horizontal:{},vertical:{}};f=1;c={};u="waypoints-context-id";p="resize.waypoints";y="scroll.waypoints";v=1;w="waypoints-waypoint-ids";g="waypoint";m="waypoints";o=function(){function t(t){var e=this;this.$element=t;this.element=t[0];this.didResize=false;this.didScroll=false;this.id="context"+f++;this.oldScroll={x:t.scrollLeft(),y:t.scrollTop()};this.waypoints={horizontal:{},vertical:{}};this.element[u]=this.id;c[this.id]=this;t.bind(y,function(){var t;if(!(e.didScroll||a)){e.didScroll=true;t=function(){e.doScroll();return e.didScroll=false};return r.setTimeout(t,n[m].settings.scrollThrottle)}});t.bind(p,function(){var t;if(!e.didResize){e.didResize=true;t=function(){n[m]("refresh");return e.didResize=false};return r.setTimeout(t,n[m].settings.resizeThrottle)}})}t.prototype.doScroll=function(){var t,e=this;t={horizontal:{newScroll:this.$element.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.$element.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};if(a&&(!t.vertical.oldScroll||!t.vertical.newScroll)){n[m]("refresh")}n.each(t,function(t,r){var i,o,l;l=[];o=r.newScroll>r.oldScroll;i=o?r.forward:r.backward;n.each(e.waypoints[t],function(t,e){var n,i;if(r.oldScroll<(n=e.offset)&&n<=r.newScroll){return l.push(e)}else if(r.newScroll<(i=e.offset)&&i<=r.oldScroll){return l.push(e)}});l.sort(function(t,e){return t.offset-e.offset});if(!o){l.reverse()}return n.each(l,function(t,e){if(e.options.continuous||t===l.length-1){return e.trigger([i])}})});return this.oldScroll={x:t.horizontal.newScroll,y:t.vertical.newScroll}};t.prototype.refresh=function(){var t,e,r,i=this;r=n.isWindow(this.element);e=this.$element.offset();this.doScroll();t={horizontal:{contextOffset:r?0:e.left,contextScroll:r?0:this.oldScroll.x,contextDimension:this.$element.width(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:r?0:e.top,contextScroll:r?0:this.oldScroll.y,contextDimension:r?n[m]("viewportHeight"):this.$element.height(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};return n.each(t,function(t,e){return n.each(i.waypoints[t],function(t,r){var i,o,l,s,f;i=r.options.offset;l=r.offset;o=n.isWindow(r.element)?0:r.$element.offset()[e.offsetProp];if(n.isFunction(i)){i=i.apply(r.element)}else if(typeof i==="string"){i=parseFloat(i);if(r.options.offset.indexOf("%")>-1){i=Math.ceil(e.contextDimension*i/100)}}r.offset=o-e.contextOffset+e.contextScroll-i;if(r.options.onlyOnScroll&&l!=null||!r.enabled){return}if(l!==null&&l<(s=e.oldScroll)&&s<=r.offset){return r.trigger([e.backward])}else if(l!==null&&l>(f=e.oldScroll)&&f>=r.offset){return r.trigger([e.forward])}else if(l===null&&e.oldScroll>=r.offset){return r.trigger([e.forward])}})})};t.prototype.checkEmpty=function(){if(n.isEmptyObject(this.waypoints.horizontal)&&n.isEmptyObject(this.waypoints.vertical)){this.$element.unbind([p,y].join(" "));return delete c[this.id]}};return t}();l=function(){function t(t,e,r){var i,o;if(r.offset==="bottom-in-view"){r.offset=function(){var t;t=n[m]("viewportHeight");if(!n.isWindow(e.element)){t=e.$element.height()}return t-n(this).outerHeight()}}this.$element=t;this.element=t[0];this.axis=r.horizontal?"horizontal":"vertical";this.callback=r.handler;this.context=e;this.enabled=r.enabled;this.id="waypoints"+v++;this.offset=null;this.options=r;e.waypoints[this.axis][this.id]=this;s[this.axis][this.id]=this;i=(o=this.element[w])!=null?o:[];i.push(this.id);this.element[w]=i}t.prototype.trigger=function(t){if(!this.enabled){return}if(this.callback!=null){this.callback.apply(this.element,t)}if(this.options.triggerOnce){return this.destroy()}};t.prototype.disable=function(){return this.enabled=false};t.prototype.enable=function(){this.context.refresh();return this.enabled=true};t.prototype.destroy=function(){delete s[this.axis][this.id];delete this.context.waypoints[this.axis][this.id];return this.context.checkEmpty()};t.getWaypointsByElement=function(t){var e,r;r=t[w];if(!r){return[]}e=n.extend({},s.horizontal,s.vertical);return n.map(r,function(t){return e[t]})};return t}();d={init:function(t,e){var r;e=n.extend({},n.fn[g].defaults,e);if((r=e.handler)==null){e.handler=t}this.each(function(){var t,r,i,s;t=n(this);i=(s=e.context)!=null?s:n.fn[g].defaults.context;if(!n.isWindow(i)){i=t.closest(i)}i=n(i);r=c[i[0][u]];if(!r){r=new o(i)}return new l(t,r,e)});n[m]("refresh");return this},disable:function(){return d._invoke.call(this,"disable")},enable:function(){return d._invoke.call(this,"enable")},destroy:function(){return d._invoke.call(this,"destroy")},prev:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e>0){return t.push(n[e-1])}})},next:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e<n.length-1){return t.push(n[e+1])}})},_traverse:function(t,e,i){var o,l;if(t==null){t="vertical"}if(e==null){e=r}l=h.aggregate(e);o=[];this.each(function(){var e;e=n.inArray(this,l[t]);return i(o,e,l[t])});return this.pushStack(o)},_invoke:function(t){this.each(function(){var e;e=l.getWaypointsByElement(this);return n.each(e,function(e,n){n[t]();return true})});return this}};n.fn[g]=function(){var t,r;r=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(d[r]){return d[r].apply(this,t)}else if(n.isFunction(r)){return d.init.apply(this,arguments)}else if(n.isPlainObject(r)){return d.init.apply(this,[null,r])}else if(!r){return n.error("jQuery Waypoints needs a callback function or handler option.")}else{return n.error("The "+r+" method does not exist in jQuery Waypoints.")}};n.fn[g].defaults={context:r,continuous:true,enabled:true,horizontal:false,offset:0,triggerOnce:false};h={refresh:function(){return n.each(c,function(t,e){return e.refresh()})},viewportHeight:function(){var t;return(t=r.innerHeight)!=null?t:i.height()},aggregate:function(t){var e,r,i;e=s;if(t){e=(i=c[n(t)[0][u]])!=null?i.waypoints:void 0}if(!e){return[]}r={horizontal:[],vertical:[]};n.each(r,function(t,i){n.each(e[t],function(t,e){return i.push(e)});i.sort(function(t,e){return t.offset-e.offset});r[t]=n.map(i,function(t){return t.element});return r[t]=n.unique(r[t])});return r},above:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset<=t.oldScroll.y})},below:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset>t.oldScroll.y})},left:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset<=t.oldScroll.x})},right:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset>t.oldScroll.x})},enable:function(){return h._invoke("enable")},disable:function(){return h._invoke("disable")},destroy:function(){return h._invoke("destroy")},extendFn:function(t,e){return d[t]=e},_invoke:function(t){var e;e=n.extend({},s.vertical,s.horizontal);return n.each(e,function(e,n){n[t]();return true})},_filter:function(t,e,r){var i,o;i=c[n(t)[0][u]];if(!i){return[]}o=[];n.each(i.waypoints[e],function(t,e){if(r(i,e)){return o.push(e)}});o.sort(function(t,e){return t.offset-e.offset});return n.map(o,function(t){return t.element})}};n[m]=function(){var t,n;n=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(h[n]){return h[n].apply(null,t)}else{return h.aggregate.call(null,n)}};n[m].settings={resizeThrottle:100,scrollThrottle:30};return i.on("load.waypoints",function(){return n[m]("refresh")})})}).call(this);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:29:"/js/prodes.js?161674205013104";s:6:"source";s:13:"/js/prodes.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(document).ready(function() {

	$('.iosSlider1').iosSlider({
		snapToChildren: true,
		desktopClickDrag: true,
		keyboardControls: false,
		onSlideComplete: slideComplete1,
		navNextSelector: $('.next1'),
		navPrevSelector: $('.prev1'),
	});

	$('.iosSlider2').iosSlider({
		snapToChildren: true,
		desktopClickDrag: true,
		keyboardControls: false,
		onSlideComplete: slideComplete2,
		navNextSelector: $('.next2'),
		navPrevSelector: $('.prev2'),
	});

	$('.iosSlider3').iosSlider({
		snapToChildren: true,
		desktopClickDrag: true,
		keyboardControls: false,
		onSlideComplete: slideComplete3,
		navNextSelector: $('.next3'),
		navPrevSelector: $('.prev3'),
	});

	$('.iosSlider4').iosSlider({
		snapToChildren: true,
		desktopClickDrag: true,
		keyboardControls: false,
		onSlideComplete: slideComplete4,
		navNextSelector: $('.next4'),
		navPrevSelector: $('.prev4'),
	});

	$('.iosSlider_balkon').iosSlider({
		snapToChildren: true,
		desktopClickDrag: true,
		keyboardControls: false,
		onSlideComplete: slideComplete_balkon,
		navNextSelector: $('.es3balkon .next4'),
		navPrevSelector: $('.es3balkon .prev4'),
	});

	$('.iosSlider_allcolors').iosSlider({
		snapToChildren: true,
		desktopClickDrag: true,
		keyboardControls: false,
		onSlideComplete: slideComplete_allcolors,
		navNextSelector: $('.next1'),
		navPrevSelector: $('.prev1'),
	});

	$('.iosslider_2').iosSlider({
		snapToChildren: true,
		scrollbar: true,
		scrollbarHide: false,
		desktopClickDrag: true,
		scrollbarLocation: 'bottom',
		scrollbarHeight: '13px',
		scrollbarBackground: '#02bbcf',
		scrollbarBorder: '1px solid #000',
		scrollbarMargin: '10px 30px 16px 30px',
		scrollbarOpacity: '0.75',
		scrollbarDrag: true,
	});


	$('.top_block')
	.waypoint(function(dir) {
		if( dir === 'down' )
			$('.fly_girl').addClass('animated').removeClass('bounceOutRight').toggleClass('bounceInRight');
		$('.toptop').addClass('animated').removeClass('fadeOut').toggleClass('fadeIn');
		$('.gk-menu').addClass('animated').removeClass('fadeOut').toggleClass('fadeIn');
	}, {
		offset: -400
	})
	.waypoint(function(dir) {
		if( dir === 'up' )
			$('.fly_girl').addClass('animated').removeClass('bounceInRight').toggleClass('bounceOutRight');
		$('.toptop').addClass('animated').removeClass('fadeIn').toggleClass('fadeOut');
		$('.gk-menu').addClass('animated').removeClass('fadeIn').toggleClass('fadeOut');
	}, {
		offset: -399
	});

	$('.es19_bg')
	.waypoint(function(dirbot) {
		if( dirbot === 'down' )
			$('.fly_girl').addClass('animated').removeClass('bounceInRight').toggleClass('bounceOutRight');
		$('.toptop').addClass('animated').removeClass('fadeOut').toggleClass('fadeIn');
	}, {
		offset: 1000
	})
	.waypoint(function(dirbot) {
		if( dirbot === 'up' )
			$('.fly_girl').addClass('animated').removeClass('bounceOutRight').toggleClass('bounceInRight');
		$('.toptop').addClass('animated').removeClass('fadeIn').toggleClass('fadeOut');
	}, {
		offset: 999
	});


	$(".toptop").click(function() {
		$("body,html").animate({
			scrollTop: 0
		}, 100);
		return false
	});

	var $inputs = $(".phonemask");
	$inputs.inputmask({
		mask: ['8 (99) 999-99-99', '+375 (99) 999-99-99'],
		placeholder: '_',
		showMaskOnHover: false,
		showMaskOnFocus: true,
		clearIncomplete: true,
	});
	$inputs.on('keyup', function (event) {
		var $this = $(this);
		var value = $(event.target).inputmask("unmaskedvalue");
		if (value.length === 1 && $this.val().slice(0, 2) !== '+7' && value === "7") {
			$this.val('+7');
		}
	})


	//want_zamer
	/*
			$(".t1_1").click(function ()
			{
				$('.t1_1').addClass('act');
				$('.t1_2').removeClass('act');
				$('.t1_3').removeClass('act');
				$('.t2_yest').css("display","block");
				$('.t2_today').css("display","none");
				$('.t2_tomorrow').css("display","none");

			});

			$(".t1_2").click(function ()
			{
				$('.t1_1').removeClass('act');
				$('.t1_2').addClass('act');
				$('.t1_3').removeClass('act');
				$('.t2_yest').css("display","none");
				$('.t2_today').css("display","block");
				$('.t2_tomorrow').css("display","none");
			});

			$(".t1_3").click(function ()
			{
				$('.t1_1').removeClass('act');
				$('.t1_2').removeClass('act');
				$('.t1_3').addClass('act');
				$('.t2_yest').css("display","none");
				$('.t2_today').css("display","none");
				$('.t2_tomorrow').css("display","block");
			});
	*/


	//срабатывание ссылки в главном меню если есть подменю
	$('.navbar .dropdown-toggle').click(function() {
		if( $(this).next('.dropdown-menu').is(':visible') ) {
			window.location = $(this).attr('href');
		}
	});


	//поле когда может приехать замерщик

	//press button
	$('.b_contact_but_city').click(function() {
		$(".b_contact_zhdu_bg_no").slideUp("fast");
		$(".b_contact_zhdu_bg").slideUp("fast");

		if( anyCityInInput == "no" ) {


			lowcitytozamerinput = $('.b_contact_input_city input').val().toLowerCase();
			for( var i = 0; i < citytozamer.length; i++ ) {
				lowcitytozamer = citytozamer[i].toLowerCase();


				if( lowcitytozamer == lowcitytozamerinput ) {
					var espopadanie = 1;
					$(".b_contact_zhdu_bg").slideDown("slow");
					var dzhdu = new Date();
					var hourszhdu = dzhdu.getHours();
					if( hourszhdu < 19 ) {
						$(".b_contact_zhdu_t1").html("Выезд замерщика на Ваш адрес возможен сегодня до 21:00");
					}
					else {
						$(".b_contact_zhdu_t1").html("Выезд замерщика на Ваш адрес возможен завтра до 21:00");
					}
				}
			}
			if( espopadanie != 1 ) {
				$(".b_contact_zhdu_bg_no").slideDown("slow");
			}


		}
		else if( anyCityInInput == "yes" ) {
			$(".b_contact_zhdu_bg").slideDown("slow");
			var dzhdu = new Date();
			var hourszhdu = dzhdu.getHours();
			if( hourszhdu < 19 ) {
				$(".b_contact_zhdu_t1").html("Выезд замерщика на Ваш адрес возможен сегодня до 21:00");
			}
			else {
				$(".b_contact_zhdu_t1").html("Выезд замерщика на Ваш адрес возможен завтра до 21:00");
			}

		}


	});
	//press enter
	$(".b_contact_input_city input").keypress(function(e) {
		if( e.keyCode == 13 ) {
			$(".b_contact_zhdu_bg_no").slideUp("fast");
			$(".b_contact_zhdu_bg").slideUp("fast");

			if( anyCityInInput == "no" ) {

				lowcitytozamerinput = $('.b_contact_input_city input').val().toLowerCase();
				for( var i = 0; i < citytozamer.length; i++ ) {
					lowcitytozamer = citytozamer[i].toLowerCase();
					if( lowcitytozamer == lowcitytozamerinput ) {
						var espopadanieenter = 1;
						$(".b_contact_zhdu_bg").slideDown("slow");
						var dzhdu = new Date();
						var hourszhdu = dzhdu.getHours();
						if( hourszhdu < 19 ) {
							$(".b_contact_zhdu_t1").html("Выезд замерщика на Ваш адрес возможен сегодня до 21:00");
						}
						else {
							$(".b_contact_zhdu_t1").html("Выезд замерщика на Ваш адрес возможен завтра до 21:00");
						}
					}
				}
				if( espopadanieenter != 1 ) {
					$(".b_contact_zhdu_bg_no").slideDown("slow");
				}

			}
			else if( anyCityInInput == "yes" ) {
				$(".b_contact_zhdu_bg").slideDown("slow");
				var dzhdu = new Date();
				var hourszhdu = dzhdu.getHours();
				if( hourszhdu < 19 ) {
					$(".b_contact_zhdu_t1").html("Выезд замерщика на Ваш адрес возможен сегодня до 21:00");
				}
				else {
					$(".b_contact_zhdu_t1").html("Выезд замерщика на Ваш адрес возможен завтра до 21:00");
				}

			}


		}
	});


	//Работа с ползунком на туч устройствах
	//$('#slider').draggable();
	//$('#sliderhor').draggable();
	//$('#sliderver').draggable();

});


function slideComplete1(args) {
	$('.next1, .prev1').removeClass('unselectable');
	if( args.currentSlideNumber == 1 ) {
		$('.prev1').addClass('unselectable');
	}
	else if( args.currentSliderOffset == args.data.sliderMax ) {
		$('.next1').addClass('unselectable');
	}
}

function slideComplete2(args) {
	$('.next2, .prev2').removeClass('unselectable');
	if( args.currentSlideNumber == 1 ) {
		$('.prev2').addClass('unselectable');
	}
	else if( args.currentSliderOffset == args.data.sliderMax ) {
		$('.next2').addClass('unselectable');
	}
}

function slideComplete3(args) {
	$('.next3, .prev3').removeClass('unselectable');
	if( args.currentSlideNumber == 1 ) {
		$('.prev3').addClass('unselectable');
	}
	else if( args.currentSliderOffset == args.data.sliderMax ) {
		$('.next3').addClass('unselectable');
	}
}

function slideComplete4(args) {
	$('.next4, .prev4').removeClass('unselectable');
	if( args.currentSlideNumber == 1 ) {
		$('.prev4').addClass('unselectable');
	}
	else if( args.currentSliderOffset == args.data.sliderMax ) {
		$('.next4').addClass('unselectable');
	}
}

function slideComplete_balkon(args) {
	$('.next4, .prev4').removeClass('unselectable');
	if( args.currentSlideNumber == 1 ) {
		$('.prev4').addClass('unselectable');
	}
	else if( args.currentSliderOffset == args.data.sliderMax ) {
		$('.next4').addClass('unselectable');
	}
}

function slideComplete_allcolors(args) {
	$('.next1, .prev1').removeClass('unselectable');
	if( args.currentSlideNumber == 1 ) {
		$('.prev1').addClass('unselectable');
	}
	else if( args.currentSliderOffset == args.data.sliderMax ) {
		$('.next1').addClass('unselectable');
	}
}


var zoomShowcaseSettings = {
	imageWidth: 511,
	imageHeight: 335,
	bannerWidth: 900,
	animationSpeed: 750,
	easing: "easeOutQuint",
	sideOpacity: 0.5,
	autoPlay: false,
	autoPlayDelay: 4000,
	randomizeItems: false,
	linkTarget: "_parent.",
	sideZoom: 0.75,
	backZoom: 0.5
};

jQuery(document).ready(function() {
	jQuery(".zoom-gallery").zoomShowcase(zoomShowcaseSettings);
	var isRunning = false, iVal;

	jQuery("#thanky-left-button").click(goLeft);
	jQuery("#thanky-right-button").click(goRight);

	function goLeft(event) {
		event.stopPropagation();
		event.preventDefault();
		if( !isRunning ) {
			isRunning = true;
			jQuery("#zoom-instance-1")[0].goLeft();
			setTimeout(animationDone, zoomShowcaseSettings.animationSpeed + 100);
		}
	}

	function goRight(event) {
		event.stopPropagation();
		event.preventDefault();
		if( !isRunning ) {
			isRunning = true;
			jQuery("#zoom-instance-1")[0].goRight();
			setTimeout(animationDone, zoomShowcaseSettings.animationSpeed + 100);
		}
	}

	function animationDone() {
		if( jQuery("#zoom-instance-1")[0].isReady() ) {
			isRunning = false;
		}
		else {
			setTimeout(animationDone, 100);
		}
	}
});


$(function(e) {

	$('.gk-menu__block').on('click', function() {
		$(".gk-menu__block").fadeOut();
		$(".gk-menu__blockopen").fadeIn();
		return false;
	});

	$(document).on('click', function() {
		$(".gk-menu__block").fadeIn();
		$(".gk-menu__blockopen").fadeOut();
	});


});

$(function() {


	$('.fancybox-frame').fancybox(
		{
			apectRatio: true,
			width: 1200,
			height: 800
		}
	);

});


(function($) {
	var revapi;
	jQuery(document).ready(function() {


		// bind to button click
		jQuery(".b-sposob_menutub__item").click(apiHandler)

		function apiHandler(e) {
			switch( e.currentTarget.id ) {

				case "show1":

					$(".np_wrapsec1").css("display", "block");
					$(".np_wrapsec2").css("display", "none");
					$(".np_wrapsec3").css("display", "none");
					$(".np_wrapsec4").css("display", "none");

					$("#show1").addClass("actnp");
					$("#show2").removeClass("actnp");
					$("#show3").removeClass("actnp");
					$("#show4").removeClass("actnp");
					break;

				case "show2":

					$(".np_wrapsec1").css("display", "none");
					$(".np_wrapsec2").css("display", "block");
					$(".np_wrapsec3").css("display", "none");
					$(".np_wrapsec4").css("display", "none");

					$("#show2").addClass("actnp");
					$("#show1").removeClass("actnp");
					$("#show3").removeClass("actnp");
					$("#show4").removeClass("actnp");
					break;

				case "show3":

					$(".np_wrapsec1").css("display", "none");
					$(".np_wrapsec2").css("display", "none");
					$(".np_wrapsec3").css("display", "block");
					$(".np_wrapsec4").css("display", "none");

					$("#show3").addClass("actnp");
					$("#show2").removeClass("actnp");
					$("#show1").removeClass("actnp");
					$("#show4").removeClass("actnp");
					break;

				case "show4":

					$(".np_wrapsec4").css("display", "block");
					$(".np_wrapsec2").css("display", "none");
					$(".np_wrapsec3").css("display", "none");
					$(".np_wrapsec1").css("display", "none");

					$("#show4").addClass("actnp");
					$("#show2").removeClass("actnp");
					$("#show3").removeClass("actnp");
					$("#show1").removeClass("actnp");
					break;

			}
			return false;
		}

	});	//ready
})(jQuery);



;
; /* Start:"a:4:{s:4:"full";s:34:"/js/otherscripts.js?16064792006591";s:6:"source";s:19:"/js/otherscripts.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
	// Define our selectors
	var $clock 		= $("#clock");
	var $timer 		= $("#timer");
	var $start 		= $("#start");
	var $pause 		= $("#pause");
	var $continue 	= $("#continue");
	// Enable start / pause / continue buttons
	$(function(){
		$start.on("click",function(e){
			e.preventDefault();
			beginTimer(60000); // 60 seconds
		});
	});
	// Change timer face colour
	function colourChanger(intAngle)
	{
		intAngle = 6.29 - intAngle;
		if(Math.floor(72+55*intAngle) < 255 || Math.floor(214+14*intAngle) < 255)
		{
			// Animate from green to amber
			return 'rgb(51,51,51)';
		} else {
			// Animate from amber to red
			return 'rgb(255,0,0)';
		}
	}
	// Get the ball rolling...
	function beginTimer(timer)
	{
		// Get our start time
		var dteStart = new Date();
		dteStart = dteStart.getTime();
		// Call countdown clock function
		countDownClock(dteStart,timer);
		// Reset elements to their defaults
		$clock.show();
		$timer.show();
	}
	// Build our countdown clock
	function countDownClock(dteStart,timer)
	{
		// Time started, minus time now, subtracked from 60 seconds
		var d = new Date();
		window.intOffset = timer - (d.getTime() - dteStart);
		// Whole number to use as countdown time
		$timer.html(Math.ceil(window.intOffset / 1000));
		// Angle to use, defined by 1 millisecond
		window.intAngle = 0.1048335*0.001*window.intOffset;
		// Set up our canvas
		var canvas = document.getElementById("clock");
		if (canvas && canvas.getContext) // Does the browser support canvas?
		{
			var ctx = canvas.getContext("2d");
			// Clear canvas before re-drawing
			ctx.clearRect(0,0,300,300);
			// Grey background ring
			ctx.beginPath();
			ctx.globalAlpha = 1;
			ctx.arc(150,150,140,0,6.283,false);
			ctx.arc(150,150,105,6.283,((Math.PI*2)),true);
			ctx.fillStyle = "#fde800";
			ctx.fill();
			ctx.closePath();
			// Clock face ring
			ctx.beginPath();
			ctx.globalAlpha = 1;
			ctx.arc(150,150,120.1,-1.57,(-1.57 + window.intAngle),false);
			ctx.arc(150,150,105,(-1.57 + window.intAngle),((Math.PI*2) -1.57),true);
			ctx.fillStyle = colourChanger(window.intAngle);
			ctx.fill();
			ctx.closePath();
			// Centre circle
			ctx.beginPath();
			ctx.arc(150,150,105,0,6.283,false);
			ctx.fillStyle = "#fde800";
			ctx.fill();
			ctx.closePath();
		} else {
			// Put fallback for browsers that don't support canvas here...
		}
		if(window.intOffset <= 0) // If time is up
			timeUp();
		else // Resersive ahoy!
			window.t = setTimeout("countDownClock(" + dteStart + "," + timer + ")",50);
	}
	// Pause clock and animate our centre circle
	function clockPause(timeElapsed,pause)
	{
		// Duration of pause animation
		pauseTime = 100;
		diff = timeElapsed / pauseTime;
		if(pause) // Pause the clock
		{
			percentage = 1 - diff;
			if(percentage < 0)
				percentage = 0;
		} else { // Resume the clock
			percentage = diff;
			if(percentage > 1)
				percentage = 1;
		}
		// Set up our canvas
		var canvas = document.getElementById("clock");
		if (canvas.getContext) // Does the browser support canvas?
		{
			var ctx = canvas.getContext("2d");
			// Clear canvas before re-drawing
			ctx.clearRect(0,0,300,300);
			// Grey background ring
			ctx.beginPath();
			ctx.globalAlpha = 1;
			ctx.arc(150,150,140,0,6.283,false);
			ctx.arc(150,150,105,6.283,((Math.PI*2)),true);
			ctx.fillStyle = "#fde800";
			ctx.fill();
			ctx.closePath();
			// Clock face ring
			ctx.beginPath();
			ctx.globalAlpha = 1;
			ctx.arc(150,150,140.1,-1.57,(-1.57 + window.intAngle),false);
			ctx.arc(150,150,105,(-1.57 + window.intAngle),((Math.PI*2) -1.57),true);
			ctx.fillStyle = colourChanger(window.intAngle);
			ctx.fill();
			ctx.closePath();
			// Centre circle
			ctx.beginPath();
			ctx.arc(150,150,(105 * percentage),0,6.283,false);
			ctx.fillStyle = "#fde800";
			ctx.fill();
			ctx.closePath();
			// Recursive until time has elapsed
			if(timeElapsed < pauseTime)
			{
				setTimeout(function(){
					clockPause((timeElapsed + 10),pause);
				},10);
			}
		} else {
			// Put fallback for browsers that don't support canvas here...
		}
	}
	// Time up
	function timeUp()
	{
		$('#happy').modal('hide');
	}



	jQuery(document).ready(function() {
	var today = new Date();
	var nowminute = today.getMinutes();
	if ($.cookie('show_popup_okna_tseny4')) {
		var raznitsavr = nowminute - $.cookie('show_popup_okna_tseny4');
		if (raznitsavr > 0) { setTimeout(show_popup_100kupon, 10000); }
	 }
	 else
	 {
			$.cookie('show_popup_okna_tseny4', nowminute, {
				expires: 1,
				path: '/'
			});
	}
		function show_popup_100kupon()
		{
			if (noHappy == "false") {
				if (!$.cookie('show_popup_100_tseny4')) {

					$('#happy').modal('show');

					beginTimer(60000);
				}

				  $.cookie('show_popup_100_tseny4', true, {
					expires: 1,
					path: '/'
				  });
			}
		}

	});



	var noHappy = "false";

		//открытие формы НЕ УХОДИТЕ БЕЗ ПОДАРКА
	jQuery(document).ready(function() {
		var todaygift = new Date();
		var nowminutegift = todaygift.getMinutes();
		/*
	if ($.cookie('show_popup_okna_tseny_gift1'))
		{}
		else
		{
			$(".topclose5px").hover( function () {
					$('#gift').modal('show');


					//Устанавливаем куки на 720 минут (12 часов)
					var datecookie = new Date();
				var minutescookie = 720;
				datecookie.setTime(datecookie.getTime() + (minutescookie * 60 * 1000));

				$.cookie('show_popup_okna_tseny_gift1', nowminutegift, {
					expires: datecookie,
					path: '/'
				});
			},
			function () {
			});
		}
	*/



		$('#gift').on('hide.bs.modal', function (e) {
			$(".topclose5px").remove();
		});


		if ($.cookie('show_popup_okna_gift4')) {
			var raznitsavr = nowminutegift - $.cookie('show_popup_okna_gift4');
			if (raznitsavr > 0) { setTimeout(show_popup_100gift, 2000); }
		}
		else {
			$.cookie('show_popup_okna_gift4', nowminutegift, {
				expires: 1,
				path: '/'
			});
		}
		$('.katalog__price_item .red-button').on('click',function() {
			var parent = $(this).closest('.b-tipov__flat_info');
			$('input[name="form_hidden_65"]').val($(parent).find('.b-tipov__flat_info-ttl').text());
			$('input[name="form_hidden_66"]').val($(parent).find('.b-tipov__flat_info-tt2').text());
			$('input[name="form_hidden_67"]').val($(parent).find('.b-tipov__flat_item-S').html());
		})



		function show_popup_100gift() {
			if (!$.cookie('show_popup_100_gift4')) {
				$(".topclose5px").hover( function () {

					$('#gift').modal('show');
					noHappy = "true";

				},
				function () {
				});
			}

			$.cookie('show_popup_100_gift4', true, {
				expires: 1,
				path: '/'
			});
		}


	});

/* End */
;; /* /js/inputmask.js?157605086488562*/
; /* /js/jquery.fancybox.pack.js?149197862823135*/
; /* /js/yaMetrika.js?16184932921618*/
; /* /bitrix/templates/main/js/functions.min.js?1509013549804*/
; /* /bitrix/templates/main/js/for_comagic.js?1577454103967*/
; /* /js/twentytwenty-master/jquery.event.move.js?147375731314709*/
; /* /js/twentytwenty-master/jquery.twentytwenty.js?14737573133721*/
; /* /js/compile.js?158013185122731*/
; /* /js/jquery-migrate-1.2.1.min.js?14737541057200*/
; /* /js/bootstrap.min.js?147375410536822*/
; /* /js/jquery.easing-1.3.js?14737541058301*/
; /* /js/bootstrap-hover-dropdown.min.js?14737541051722*/
; /* /js/jquery.iosslider.js?147375410588778*/
; /* /js/zoom-showcase.js?15516888026500*/
; /* /js/jquery.maskedinput.min.js?14737541054330*/
; /* /js/jquery.jcarousel.min_.js?147375410516104*/
; /* /js/jquery.cookie.min.js?1473754105732*/
; /* /js/waypoints.min.js?14737541058051*/
; /* /js/prodes.js?161674205013104*/
; /* /js/otherscripts.js?16064792006591*/
