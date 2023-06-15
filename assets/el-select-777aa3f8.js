import{bh as ql,s as Wl,bd as Kl,d as ie,B as El,G as te,A as v,o as h,c as V,a as M,M as ee,L as b,J as I,p as P,w as O,b as Y,a$ as gl,N,ap as ul,ar as D,R as x,aB as dl,O as ge,a1 as kl,z as ze,bi as Pe,bj as W,$ as K,aP as cl,Y as De,Z as pl,bk as Fl,P as B,H as be,aK as fl,Q as Z,y as A,W as vl,bl as Ml,ak as ml,bm as Rl,a_ as yl,T as Hl,al as Cl,a0 as Nl,av as oe,bn as he,aS as jl,v as Ql,bo as al,aw as Sl,bp as Ol,au as wl,U as _,t as $l,bq as Gl,br as Ul,C as Vl,k as Jl,ax as Xl,at as Yl,aJ as Zl,bs as xl,bt as _l,bc as Ll,aj as en,az as ln,bu as nn,X as zl,bv as on,bw as X,bx as tn,F as Ve,r as sl,aD as q,aR as an,by as sn,aq as Tl,a2 as Pl}from"./index-e58ba159.js";const rn=(e="")=>e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d"),un=e=>ql[e||"default"],dn=e=>({focus:()=>{var l,i;(i=(l=e.value)==null?void 0:l.focus)==null||i.call(l)}}),Dl=Wl({type:{type:String,values:["success","info","warning","danger",""],default:""},closable:Boolean,disableTransitions:Boolean,hit:Boolean,color:{type:String,default:""},size:{type:String,values:Kl,default:""},effect:{type:String,values:["dark","light","plain"],default:"light"},round:Boolean}),cn={close:e=>e instanceof MouseEvent,click:e=>e instanceof MouseEvent},pn=ie({name:"ElTag"}),fn=ie({...pn,props:Dl,emits:cn,setup(e,{emit:l}){const i=e,y=El(),c=te("tag"),d=v(()=>{const{type:r,hit:S,effect:p,closable:g,round:w}=i;return[c.b(),c.is("closable",g),c.m(r),c.m(y.value),c.m(p),c.is("hit",S),c.is("round",w)]}),s=r=>{l("close",r)},m=r=>{l("click",r)};return(r,S)=>r.disableTransitions?(h(),V("span",{key:0,class:b(I(d)),style:x({backgroundColor:r.color}),onClick:m},[M("span",{class:b(I(c).e("content"))},[ee(r.$slots,"default")],2),r.closable?(h(),P(I(ul),{key:0,class:b(I(c).e("close")),onClick:N(s,["stop"])},{default:O(()=>[Y(I(gl))]),_:1},8,["class","onClick"])):D("v-if",!0)],6)):(h(),P(dl,{key:1,name:`${I(c).namespace.value}-zoom-in-center`,appear:""},{default:O(()=>[M("span",{class:b(I(d)),style:x({backgroundColor:r.color}),onClick:m},[M("span",{class:b(I(c).e("content"))},[ee(r.$slots,"default")],2),r.closable?(h(),P(I(ul),{key:0,class:b(I(c).e("close")),onClick:N(s,["stop"])},{default:O(()=>[Y(I(gl))]),_:1},8,["class","onClick"])):D("v-if",!0)],6)]),_:3},8,["name"]))}});var vn=ge(fn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]);const mn=kl(vn),Bl=Symbol("ElSelectGroup"),Be=Symbol("ElSelect");function hn(e,l){const i=ze(Be),y=ze(Bl,{disabled:!1}),c=v(()=>Object.prototype.toString.call(e.value).toLowerCase()==="[object object]"),d=v(()=>i.props.multiple?g(i.props.modelValue,e.value):w(e.value,i.props.modelValue)),s=v(()=>{if(i.props.multiple){const t=i.props.modelValue||[];return!d.value&&t.length>=i.props.multipleLimit&&i.props.multipleLimit>0}else return!1}),m=v(()=>e.label||(c.value?"":e.value)),r=v(()=>e.value||e.label||""),S=v(()=>e.disabled||l.groupDisabled||s.value),p=cl(),g=(t=[],f)=>{if(c.value){const L=i.props.valueKey;return t&&t.some(F=>Pe(W(F,L))===W(f,L))}else return t&&t.includes(f)},w=(t,f)=>{if(c.value){const{valueKey:L}=i.props;return W(t,L)===W(f,L)}else return t===f},T=()=>{!e.disabled&&!y.disabled&&(i.hoverIndex=i.optionsArray.indexOf(p.proxy))};K(()=>m.value,()=>{!e.created&&!i.props.remote&&i.setSelected()}),K(()=>e.value,(t,f)=>{const{remote:L,valueKey:F}=i.props;if(Object.is(t,f)||(i.onOptionDestroy(f,p.proxy),i.onOptionCreate(p.proxy)),!e.created&&!L){if(F&&typeof t=="object"&&typeof f=="object"&&t[F]===f[F])return;i.setSelected()}}),K(()=>y.disabled,()=>{l.groupDisabled=y.disabled},{immediate:!0});const{queryChange:z}=Pe(i);return K(z,t=>{const{query:f}=I(t),L=new RegExp(rn(f),"i");l.visible=L.test(m.value)||e.created,l.visible||i.filteredOptionsCount--},{immediate:!0}),{select:i,currentLabel:m,currentValue:r,itemSelected:d,isDisabled:S,hoverItem:T}}const bn=ie({name:"ElOption",componentName:"ElOption",props:{value:{required:!0,type:[String,Number,Boolean,Object]},label:[String,Number],created:Boolean,disabled:{type:Boolean,default:!1}},setup(e){const l=te("select"),i=De({index:-1,groupDisabled:!1,visible:!0,hitState:!1,hover:!1}),{currentLabel:y,itemSelected:c,isDisabled:d,select:s,hoverItem:m}=hn(e,i),{visible:r,hover:S}=pl(i),p=cl().proxy;s.onOptionCreate(p),Fl(()=>{const w=p.value,{selected:T}=s,t=(s.props.multiple?T:[T]).some(f=>f.value===p.value);B(()=>{s.cachedOptions.get(w)===p&&!t&&s.cachedOptions.delete(w)}),s.onOptionDestroy(w,p)});function g(){e.disabled!==!0&&i.groupDisabled!==!0&&s.handleOptionSelect(p)}return{ns:l,currentLabel:y,itemSelected:c,isDisabled:d,select:s,hoverItem:m,visible:r,hover:S,selectOptionClick:g,states:i}}});function gn(e,l,i,y,c,d){return be((h(),V("li",{class:b([e.ns.be("dropdown","item"),e.ns.is("disabled",e.isDisabled),{selected:e.itemSelected,hover:e.hover}]),onMouseenter:l[0]||(l[0]=(...s)=>e.hoverItem&&e.hoverItem(...s)),onClick:l[1]||(l[1]=N((...s)=>e.selectOptionClick&&e.selectOptionClick(...s),["stop"]))},[ee(e.$slots,"default",{},()=>[M("span",null,Z(e.currentLabel),1)])],34)),[[fl,e.visible]])}var hl=ge(bn,[["render",gn],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/option.vue"]]);const yn=ie({name:"ElSelectDropdown",componentName:"ElSelectDropdown",setup(){const e=ze(Be),l=te("select"),i=v(()=>e.props.popperClass),y=v(()=>e.props.multiple),c=v(()=>e.props.fitInputWidth),d=A("");function s(){var m;d.value=`${(m=e.selectWrapper)==null?void 0:m.offsetWidth}px`}return vl(()=>{s(),Ml(e.selectWrapper,s)}),{ns:l,minWidth:d,popperClass:i,isMultiple:y,isFitInputWidth:c}}});function Cn(e,l,i,y,c,d){return h(),V("div",{class:b([e.ns.b("dropdown"),e.ns.is("multiple",e.isMultiple),e.popperClass]),style:x({[e.isFitInputWidth?"width":"minWidth"]:e.minWidth})},[ee(e.$slots,"default")],6)}var Sn=ge(yn,[["render",Cn],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/select-dropdown.vue"]]);function On(e){const{t:l}=ml();return De({options:new Map,cachedOptions:new Map,createdLabel:null,createdSelected:!1,selected:e.multiple?[]:{},inputLength:20,inputWidth:0,optionsCount:0,filteredOptionsCount:0,visible:!1,selectedLabel:"",hoverIndex:-1,query:"",previousQuery:null,inputHovering:!1,cachedPlaceHolder:"",currentPlaceholder:l("el.select.placeholder"),menuVisibleOnFocus:!1,isOnComposition:!1,prefixWidth:11,tagInMultiLine:!1,mouseEnter:!1})}let rl=!1;const wn=(e,l,i)=>{const{t:y}=ml(),c=te("select");Rl({from:"suffixTransition",replacement:"override style scheme",version:"2.3.0",scope:"props",ref:"https://element-plus.org/en-US/component/select.html#select-attributes"},v(()=>e.suffixTransition===!1));const d=A(null),s=A(null),m=A(null),r=A(null),S=A(null),p=A(null),g=A(null),w=A(-1),T=yl({query:""}),z=yl(""),t=A([]);let f=0;const{form:L,formItem:F}=Hl(),ye=v(()=>!e.filterable||e.multiple||!l.visible),Q=v(()=>e.disabled||(L==null?void 0:L.disabled)),Ae=v(()=>{const n=e.multiple?Array.isArray(e.modelValue)&&e.modelValue.length>0:e.modelValue!==void 0&&e.modelValue!==null&&e.modelValue!=="";return e.clearable&&!Q.value&&l.inputHovering&&n}),Ce=v(()=>e.remote&&e.filterable&&!e.remoteShowSuffix?"":e.suffixIcon),qe=v(()=>c.is("reverse",Ce.value&&l.visible&&e.suffixTransition)),Se=v(()=>e.remote?300:0),re=v(()=>e.loading?e.loadingText||y("el.select.loading"):e.remote&&l.query===""&&l.options.size===0?!1:e.filterable&&l.query&&l.options.size>0&&l.filteredOptionsCount===0?e.noMatchText||y("el.select.noMatch"):l.options.size===0?e.noDataText||y("el.select.noData"):null),$=v(()=>{const n=Array.from(l.options.values()),o=[];return t.value.forEach(a=>{const u=n.findIndex(E=>E.currentLabel===a);u>-1&&o.push(n[u])}),o.length?o:n}),We=v(()=>Array.from(l.cachedOptions.values())),Ke=v(()=>{const n=$.value.filter(o=>!o.created).some(o=>o.currentLabel===l.query);return e.filterable&&e.allowCreate&&l.query!==""&&!n}),le=El(),Fe=v(()=>["small"].includes(le.value)?"small":"default"),Re=v({get(){return l.visible&&re.value!==!1},set(n){l.visible=n}});K([()=>Q.value,()=>le.value,()=>L==null?void 0:L.size],()=>{B(()=>{R()})}),K(()=>e.placeholder,n=>{l.cachedPlaceHolder=l.currentPlaceholder=n,e.multiple&&Array.isArray(e.modelValue)&&e.modelValue.length>0&&(l.currentPlaceholder="")}),K(()=>e.modelValue,(n,o)=>{e.multiple&&(R(),n&&n.length>0||s.value&&l.query!==""?l.currentPlaceholder="":l.currentPlaceholder=l.cachedPlaceHolder,e.filterable&&!e.reserveKeyword&&(l.query="",G(l.query))),ue(),e.filterable&&!e.multiple&&(l.inputLength=20),!Cl(n,o)&&e.validateEvent&&(F==null||F.validate("change").catch(a=>Nl()))},{flush:"post",deep:!0}),K(()=>l.visible,n=>{var o,a,u,E,k;n?((a=(o=r.value)==null?void 0:o.updatePopper)==null||a.call(o),e.filterable&&(l.filteredOptionsCount=l.optionsCount,l.query=e.remote?"":l.selectedLabel,(E=(u=m.value)==null?void 0:u.focus)==null||E.call(u),e.multiple?(k=s.value)==null||k.focus():l.selectedLabel&&(l.currentPlaceholder=`${l.selectedLabel}`,l.selectedLabel=""),G(l.query),!e.multiple&&!e.remote&&(T.value.query="",he(T),he(z)))):(e.filterable&&(oe(e.filterMethod)&&e.filterMethod(""),oe(e.remoteMethod)&&e.remoteMethod("")),s.value&&s.value.blur(),l.query="",l.previousQuery=null,l.selectedLabel="",l.inputLength=20,l.menuVisibleOnFocus=!1,He(),B(()=>{s.value&&s.value.value===""&&l.selected.length===0&&(l.currentPlaceholder=l.cachedPlaceHolder)}),e.multiple||(l.selected&&(e.filterable&&e.allowCreate&&l.createdSelected&&l.createdLabel?l.selectedLabel=l.createdLabel:l.selectedLabel=l.selected.currentLabel,e.filterable&&(l.query=l.selectedLabel)),e.filterable&&(l.currentPlaceholder=l.cachedPlaceHolder))),i.emit("visible-change",n)}),K(()=>l.options.entries(),()=>{var n,o,a;if(!jl)return;(o=(n=r.value)==null?void 0:n.updatePopper)==null||o.call(n),e.multiple&&R();const u=((a=p.value)==null?void 0:a.querySelectorAll("input"))||[];Array.from(u).includes(document.activeElement)||ue(),e.defaultFirstOption&&(e.filterable||e.remote)&&l.filteredOptionsCount&&we()},{flush:"post"}),K(()=>l.hoverIndex,n=>{Ql(n)&&n>-1?w.value=$.value[n]||{}:w.value={},$.value.forEach(o=>{o.hover=w.value===o})});const R=()=>{B(()=>{var n,o;if(!d.value)return;const a=d.value.$el.querySelector("input");f=f||(a.clientHeight>0?a.clientHeight+2:0);const u=S.value,E=un(le.value||(L==null?void 0:L.size)),k=le.value||E===f||f<=0?E:f;!(a.offsetParent===null)&&(a.style.height=`${(l.selected.length===0?k:Math.max(u?u.clientHeight+(u.clientHeight>k?6:0):0,k))-2}px`),l.tagInMultiLine=Number.parseFloat(a.style.height)>=k,l.visible&&re.value!==!1&&((o=(n=r.value)==null?void 0:n.updatePopper)==null||o.call(n))})},G=async n=>{if(!(l.previousQuery===n||l.isOnComposition)){if(l.previousQuery===null&&(oe(e.filterMethod)||oe(e.remoteMethod))){l.previousQuery=n;return}l.previousQuery=n,B(()=>{var o,a;l.visible&&((a=(o=r.value)==null?void 0:o.updatePopper)==null||a.call(o))}),l.hoverIndex=-1,e.multiple&&e.filterable&&B(()=>{const o=s.value.value.length*15+20;l.inputLength=e.collapseTags?Math.min(50,o):o,Oe(),R()}),e.remote&&oe(e.remoteMethod)?(l.hoverIndex=-1,e.remoteMethod(n)):oe(e.filterMethod)?(e.filterMethod(n),he(z)):(l.filteredOptionsCount=l.optionsCount,T.value.query=n,he(T),he(z)),e.defaultFirstOption&&(e.filterable||e.remote)&&l.filteredOptionsCount&&(await B(),we())}},Oe=()=>{l.currentPlaceholder!==""&&(l.currentPlaceholder=s.value.value?"":l.cachedPlaceHolder)},we=()=>{const n=$.value.filter(u=>u.visible&&!u.disabled&&!u.states.groupDisabled),o=n.find(u=>u.created),a=n[0];l.hoverIndex=Ie($.value,o||a)},ue=()=>{var n;if(e.multiple)l.selectedLabel="";else{const a=Le(e.modelValue);(n=a.props)!=null&&n.created?(l.createdLabel=a.props.value,l.createdSelected=!0):l.createdSelected=!1,l.selectedLabel=a.currentLabel,l.selected=a,e.filterable&&(l.query=l.selectedLabel);return}const o=[];Array.isArray(e.modelValue)&&e.modelValue.forEach(a=>{o.push(Le(a))}),l.selected=o,B(()=>{R()})},Le=n=>{let o;const a=al(n).toLowerCase()==="object",u=al(n).toLowerCase()==="null",E=al(n).toLowerCase()==="undefined";for(let J=l.cachedOptions.size-1;J>=0;J--){const C=We.value[J];if(a?W(C.value,e.valueKey)===W(n,e.valueKey):C.value===n){o={value:n,currentLabel:C.currentLabel,isDisabled:C.isDisabled};break}}if(o)return o;const k=a?n.label:!u&&!E?n:"",j={value:n,currentLabel:k};return e.multiple&&(j.hitState=!1),j},He=()=>{setTimeout(()=>{const n=e.valueKey;e.multiple?l.selected.length>0?l.hoverIndex=Math.min.apply(null,l.selected.map(o=>$.value.findIndex(a=>W(a,n)===W(o,n)))):l.hoverIndex=-1:l.hoverIndex=$.value.findIndex(o=>ve(o)===ve(l.selected))},300)},Ne=()=>{var n,o;je(),(o=(n=r.value)==null?void 0:n.updatePopper)==null||o.call(n),e.multiple&&R()},je=()=>{var n;l.inputWidth=(n=d.value)==null?void 0:n.$el.offsetWidth},Qe=()=>{e.filterable&&l.query!==l.selectedLabel&&(l.query=l.selectedLabel,G(l.query))},Ge=Sl(()=>{Qe()},Se.value),Ue=Sl(n=>{G(n.target.value)},Se.value),ne=n=>{Cl(e.modelValue,n)||i.emit(Vl,n)},ae=n=>{if(n.code!==wl.delete){if(n.target.value.length<=0&&!pe()){const o=e.modelValue.slice();o.pop(),i.emit(_,o),ne(o)}n.target.value.length===1&&e.modelValue.length===0&&(l.currentPlaceholder=l.cachedPlaceHolder)}},Je=(n,o)=>{const a=l.selected.indexOf(o);if(a>-1&&!Q.value){const u=e.modelValue.slice();u.splice(a,1),i.emit(_,u),ne(u),i.emit("remove-tag",o.value)}n.stopPropagation()},Te=n=>{n.stopPropagation();const o=e.multiple?[]:"";if(!$l(o))for(const a of l.selected)a.isDisabled&&o.push(a.value);i.emit(_,o),ne(o),l.hoverIndex=-1,l.visible=!1,i.emit("clear")},de=n=>{var o;if(e.multiple){const a=(e.modelValue||[]).slice(),u=Ie(a,n.value);u>-1?a.splice(u,1):(e.multipleLimit<=0||a.length<e.multipleLimit)&&a.push(n.value),i.emit(_,a),ne(a),n.created&&(l.query="",G(""),l.inputLength=20),e.filterable&&((o=s.value)==null||o.focus())}else i.emit(_,n.value),ne(n.value),l.visible=!1;ce(),!l.visible&&B(()=>{se(n)})},Ie=(n=[],o)=>{if(!Ol(o))return n.indexOf(o);const a=e.valueKey;let u=-1;return n.some((E,k)=>Pe(W(E,a))===W(o,a)?(u=k,!0):!1),u},ce=()=>{const n=s.value||d.value;n&&(n==null||n.focus())},se=n=>{var o,a,u,E,k;const j=Array.isArray(n)?n[0]:n;let J=null;if(j!=null&&j.value){const C=$.value.filter(H=>H.value===j.value);C.length>0&&(J=C[0].$el)}if(r.value&&J){const C=(E=(u=(a=(o=r.value)==null?void 0:o.popperRef)==null?void 0:a.contentRef)==null?void 0:u.querySelector)==null?void 0:E.call(u,`.${c.be("dropdown","wrap")}`);C&&Gl(C,J)}(k=g.value)==null||k.handleScroll()},Xe=n=>{l.optionsCount++,l.filteredOptionsCount++,l.options.set(n.value,n),l.cachedOptions.set(n.value,n)},Ye=(n,o)=>{l.options.get(n)===o&&(l.optionsCount--,l.filteredOptionsCount--,l.options.delete(n))},Ze=n=>{n.code!==wl.backspace&&pe(!1),l.inputLength=s.value.value.length*15+20,R()},pe=n=>{if(!Array.isArray(l.selected))return;const o=l.selected[l.selected.length-1];if(o)return n===!0||n===!1?(o.hitState=n,n):(o.hitState=!o.hitState,o.hitState)},xe=n=>{const o=n.target.value;if(n.type==="compositionend")l.isOnComposition=!1,B(()=>G(o));else{const a=o[o.length-1]||"";l.isOnComposition=!Ul(a)}},_e=()=>{B(()=>se(l.selected))},el=n=>{rl?rl=!1:((e.automaticDropdown||e.filterable)&&(e.filterable&&!l.visible&&(l.menuVisibleOnFocus=!0),l.visible=!0),i.emit("focus",n))},U=()=>{var n,o,a;l.visible=!1,(n=d.value)==null||n.blur(),(a=(o=m.value)==null?void 0:o.blur)==null||a.call(o)},Ee=n=>{setTimeout(()=>{var o;if((o=r.value)!=null&&o.isFocusInsideContent()){rl=!0;return}l.visible&&fe(),i.emit("blur",n)})},ll=n=>{Te(n)},fe=()=>{l.visible=!1},nl=n=>{l.visible&&(n.preventDefault(),n.stopPropagation(),l.visible=!1)},ke=n=>{var o;n&&!l.mouseEnter||Q.value||(l.menuVisibleOnFocus?l.menuVisibleOnFocus=!1:(!r.value||!r.value.isFocusInsideContent())&&(l.visible=!l.visible),l.visible&&((o=s.value||d.value)==null||o.focus()))},Me=()=>{l.visible?$.value[l.hoverIndex]&&de($.value[l.hoverIndex]):ke()},ve=n=>Ol(n.value)?W(n.value,e.valueKey):n.value,ol=v(()=>$.value.filter(n=>n.visible).every(n=>n.disabled)),me=v(()=>l.selected.slice(0,e.maxCollapseTags)),tl=v(()=>l.selected.slice(e.maxCollapseTags)),$e=n=>{if(!l.visible){l.visible=!0;return}if(!(l.options.size===0||l.filteredOptionsCount===0)&&!l.isOnComposition&&!ol.value){n==="next"?(l.hoverIndex++,l.hoverIndex===l.options.size&&(l.hoverIndex=0)):n==="prev"&&(l.hoverIndex--,l.hoverIndex<0&&(l.hoverIndex=l.options.size-1));const o=$.value[l.hoverIndex];(o.disabled===!0||o.states.groupDisabled===!0||!o.visible)&&$e(n),B(()=>se(w.value))}};return{optionList:t,optionsArray:$,selectSize:le,handleResize:Ne,debouncedOnInputChange:Ge,debouncedQueryChange:Ue,deletePrevTag:ae,deleteTag:Je,deleteSelected:Te,handleOptionSelect:de,scrollToOption:se,readonly:ye,resetInputHeight:R,showClose:Ae,iconComponent:Ce,iconReverse:qe,showNewOption:Ke,collapseTagSize:Fe,setSelected:ue,managePlaceholder:Oe,selectDisabled:Q,emptyText:re,toggleLastOptionHitState:pe,resetInputState:Ze,handleComposition:xe,onOptionCreate:Xe,onOptionDestroy:Ye,handleMenuEnter:_e,handleFocus:el,blur:U,handleBlur:Ee,handleClearClick:ll,handleClose:fe,handleKeydownEscape:nl,toggleMenu:ke,selectOption:Me,getValueKey:ve,navigateOptions:$e,dropMenuVisible:Re,queryChange:T,groupQueryChange:z,showTagList:me,collapseTagList:tl,reference:d,input:s,iOSInput:m,tooltipRef:r,tags:S,selectWrapper:p,scrollbar:g,handleMouseEnter:()=>{l.mouseEnter=!0},handleMouseLeave:()=>{l.mouseEnter=!1}}};var Ln=ie({name:"ElOptions",emits:["update-options"],setup(e,{slots:l,emit:i}){let y=[];function c(d,s){if(d.length!==s.length)return!1;for(const[m]of d.entries())if(d[m]!=s[m])return!1;return!0}return()=>{var d,s;const m=(d=l.default)==null?void 0:d.call(l),r=[];function S(p){Array.isArray(p)&&p.forEach(g=>{var w,T,z,t;const f=(w=(g==null?void 0:g.type)||{})==null?void 0:w.name;f==="ElOptionGroup"?S(!$l(g.children)&&!Array.isArray(g.children)&&oe((T=g.children)==null?void 0:T.default)?(z=g.children)==null?void 0:z.default():g.children):f==="ElOption"?r.push((t=g.props)==null?void 0:t.label):Array.isArray(g.children)&&S(g.children)})}return m.length&&S((s=m[0])==null?void 0:s.children),c(r,y)||(y=r,i("update-options",r)),m}}});const Il="ElSelect",Tn=ie({name:Il,componentName:Il,components:{ElInput:Jl,ElSelectMenu:Sn,ElOption:hl,ElOptions:Ln,ElTag:mn,ElScrollbar:Xl,ElTooltip:Yl,ElIcon:ul},directives:{ClickOutside:Zl},props:{name:String,id:String,modelValue:{type:[Array,String,Number,Boolean,Object],default:void 0},autocomplete:{type:String,default:"off"},automaticDropdown:Boolean,size:{type:String,validator:xl},effect:{type:String,default:"light"},disabled:Boolean,clearable:Boolean,filterable:Boolean,allowCreate:Boolean,loading:Boolean,popperClass:{type:String,default:""},popperOptions:{type:Object,default:()=>({})},remote:Boolean,loadingText:String,noMatchText:String,noDataText:String,remoteMethod:Function,filterMethod:Function,multiple:Boolean,multipleLimit:{type:Number,default:0},placeholder:{type:String},defaultFirstOption:Boolean,reserveKeyword:{type:Boolean,default:!0},valueKey:{type:String,default:"value"},collapseTags:Boolean,collapseTagsTooltip:{type:Boolean,default:!1},maxCollapseTags:{type:Number,default:1},teleported:_l.teleported,persistent:{type:Boolean,default:!0},clearIcon:{type:Ll,default:en},fitInputWidth:{type:Boolean,default:!1},suffixIcon:{type:Ll,default:ln},tagType:{...Dl.type,default:"info"},validateEvent:{type:Boolean,default:!0},remoteShowSuffix:{type:Boolean,default:!1},suffixTransition:{type:Boolean,default:!0},placement:{type:String,values:nn,default:"bottom-start"}},emits:[_,Vl,"remove-tag","clear","visible-change","focus","blur"],setup(e,l){const i=te("select"),y=te("input"),{t:c}=ml(),d=On(e),{optionList:s,optionsArray:m,selectSize:r,readonly:S,handleResize:p,collapseTagSize:g,debouncedOnInputChange:w,debouncedQueryChange:T,deletePrevTag:z,deleteTag:t,deleteSelected:f,handleOptionSelect:L,scrollToOption:F,setSelected:ye,resetInputHeight:Q,managePlaceholder:Ae,showClose:Ce,selectDisabled:qe,iconComponent:Se,iconReverse:re,showNewOption:$,emptyText:We,toggleLastOptionHitState:Ke,resetInputState:le,handleComposition:Fe,onOptionCreate:Re,onOptionDestroy:R,handleMenuEnter:G,handleFocus:Oe,blur:we,handleBlur:ue,handleClearClick:Le,handleClose:He,handleKeydownEscape:Ne,toggleMenu:je,selectOption:Qe,getValueKey:Ge,navigateOptions:Ue,dropMenuVisible:ne,reference:ae,input:Je,iOSInput:Te,tooltipRef:de,tags:Ie,selectWrapper:ce,scrollbar:se,queryChange:Xe,groupQueryChange:Ye,handleMouseEnter:Ze,handleMouseLeave:pe,showTagList:xe,collapseTagList:_e}=wn(e,d,l),{focus:el}=dn(ae),{inputWidth:U,selected:Ee,inputLength:ll,filteredOptionsCount:fe,visible:nl,selectedLabel:ke,hoverIndex:Me,query:ve,inputHovering:ol,currentPlaceholder:me,menuVisibleOnFocus:tl,isOnComposition:$e,options:il,cachedOptions:bl,optionsCount:n,prefixWidth:o,tagInMultiLine:a}=pl(d),u=v(()=>{const C=[i.b()],H=I(r);return H&&C.push(i.m(H)),e.disabled&&C.push(i.m("disabled")),C}),E=v(()=>({maxWidth:`${I(U)-32}px`,width:"100%"})),k=v(()=>({maxWidth:`${I(U)>123?I(U)-123:I(U)-75}px`}));zl(Be,De({props:e,options:il,optionsArray:m,cachedOptions:bl,optionsCount:n,filteredOptionsCount:fe,hoverIndex:Me,handleOptionSelect:L,onOptionCreate:Re,onOptionDestroy:R,selectWrapper:ce,selected:Ee,setSelected:ye,queryChange:Xe,groupQueryChange:Ye})),vl(()=>{d.cachedPlaceHolder=me.value=e.placeholder||(()=>c("el.select.placeholder")),e.multiple&&Array.isArray(e.modelValue)&&e.modelValue.length>0&&(me.value=""),Ml(ce,p),e.remote&&e.multiple&&Q(),B(()=>{const C=ae.value&&ae.value.$el;if(C&&(U.value=C.getBoundingClientRect().width,l.slots.prefix)){const H=C.querySelector(`.${y.e("prefix")}`);o.value=Math.max(H.getBoundingClientRect().width+5,30)}}),ye()}),e.multiple&&!Array.isArray(e.modelValue)&&l.emit(_,[]),!e.multiple&&Array.isArray(e.modelValue)&&l.emit(_,"");const j=v(()=>{var C,H;return(H=(C=de.value)==null?void 0:C.popperRef)==null?void 0:H.contentRef});return{isIOS:on,onOptionsRendered:C=>{s.value=C},tagInMultiLine:a,prefixWidth:o,selectSize:r,readonly:S,handleResize:p,collapseTagSize:g,debouncedOnInputChange:w,debouncedQueryChange:T,deletePrevTag:z,deleteTag:t,deleteSelected:f,handleOptionSelect:L,scrollToOption:F,inputWidth:U,selected:Ee,inputLength:ll,filteredOptionsCount:fe,visible:nl,selectedLabel:ke,hoverIndex:Me,query:ve,inputHovering:ol,currentPlaceholder:me,menuVisibleOnFocus:tl,isOnComposition:$e,options:il,resetInputHeight:Q,managePlaceholder:Ae,showClose:Ce,selectDisabled:qe,iconComponent:Se,iconReverse:re,showNewOption:$,emptyText:We,toggleLastOptionHitState:Ke,resetInputState:le,handleComposition:Fe,handleMenuEnter:G,handleFocus:Oe,blur:we,handleBlur:ue,handleClearClick:Le,handleClose:He,handleKeydownEscape:Ne,toggleMenu:je,selectOption:Qe,getValueKey:Ge,navigateOptions:Ue,dropMenuVisible:ne,focus:el,reference:ae,input:Je,iOSInput:Te,tooltipRef:de,popperPaneRef:j,tags:Ie,selectWrapper:ce,scrollbar:se,wrapperKls:u,selectTagsStyle:E,nsSelect:i,tagTextStyle:k,handleMouseEnter:Ze,handleMouseLeave:pe,showTagList:xe,collapseTagList:_e}}}),In=["disabled","autocomplete"],En=["disabled"],kn={style:{height:"100%",display:"flex","justify-content":"center","align-items":"center"}};function Mn(e,l,i,y,c,d){const s=X("el-tag"),m=X("el-tooltip"),r=X("el-icon"),S=X("el-input"),p=X("el-option"),g=X("el-options"),w=X("el-scrollbar"),T=X("el-select-menu"),z=tn("click-outside");return be((h(),V("div",{ref:"selectWrapper",class:b(e.wrapperKls),onMouseenter:l[21]||(l[21]=(...t)=>e.handleMouseEnter&&e.handleMouseEnter(...t)),onMouseleave:l[22]||(l[22]=(...t)=>e.handleMouseLeave&&e.handleMouseLeave(...t)),onClick:l[23]||(l[23]=N((...t)=>e.toggleMenu&&e.toggleMenu(...t),["stop"]))},[Y(m,{ref:"tooltipRef",visible:e.dropMenuVisible,placement:e.placement,teleported:e.teleported,"popper-class":[e.nsSelect.e("popper"),e.popperClass],"popper-options":e.popperOptions,"fallback-placements":["bottom-start","top-start","right","left"],effect:e.effect,pure:"",trigger:"click",transition:`${e.nsSelect.namespace.value}-zoom-in-top`,"stop-popper-mouse-event":!1,"gpu-acceleration":!1,persistent:e.persistent,onShow:e.handleMenuEnter},{default:O(()=>[M("div",{class:"select-trigger",onMouseenter:l[19]||(l[19]=t=>e.inputHovering=!0),onMouseleave:l[20]||(l[20]=t=>e.inputHovering=!1)},[e.multiple?(h(),V("div",{key:0,ref:"tags",class:b([e.nsSelect.e("tags"),e.nsSelect.is("disabled",e.selectDisabled)]),style:x(e.selectTagsStyle)},[e.collapseTags&&e.selected.length?(h(),P(dl,{key:0,onAfterLeave:e.resetInputHeight},{default:O(()=>[M("span",{class:b([e.nsSelect.b("tags-wrapper"),{"has-prefix":e.prefixWidth&&e.selected.length}])},[(h(!0),V(Ve,null,sl(e.showTagList,t=>(h(),P(s,{key:e.getValueKey(t),closable:!e.selectDisabled&&!t.isDisabled,size:e.collapseTagSize,hit:t.hitState,type:e.tagType,"disable-transitions":"",onClose:f=>e.deleteTag(f,t)},{default:O(()=>[M("span",{class:b(e.nsSelect.e("tags-text")),style:x(e.tagTextStyle)},Z(t.currentLabel),7)]),_:2},1032,["closable","size","hit","type","onClose"]))),128)),e.selected.length>e.maxCollapseTags?(h(),P(s,{key:0,closable:!1,size:e.collapseTagSize,type:e.tagType,"disable-transitions":""},{default:O(()=>[e.collapseTagsTooltip?(h(),P(m,{key:0,disabled:e.dropMenuVisible,"fallback-placements":["bottom","top","right","left"],effect:e.effect,placement:"bottom",teleported:e.teleported},{default:O(()=>[M("span",{class:b(e.nsSelect.e("tags-text"))},"+ "+Z(e.selected.length-e.maxCollapseTags),3)]),content:O(()=>[M("div",{class:b(e.nsSelect.e("collapse-tags"))},[(h(!0),V(Ve,null,sl(e.collapseTagList,t=>(h(),V("div",{key:e.getValueKey(t),class:b(e.nsSelect.e("collapse-tag"))},[Y(s,{class:"in-tooltip",closable:!e.selectDisabled&&!t.isDisabled,size:e.collapseTagSize,hit:t.hitState,type:e.tagType,"disable-transitions":"",style:{margin:"2px"},onClose:f=>e.deleteTag(f,t)},{default:O(()=>[M("span",{class:b(e.nsSelect.e("tags-text")),style:x({maxWidth:e.inputWidth-75+"px"})},Z(t.currentLabel),7)]),_:2},1032,["closable","size","hit","type","onClose"])],2))),128))],2)]),_:1},8,["disabled","effect","teleported"])):(h(),V("span",{key:1,class:b(e.nsSelect.e("tags-text"))},"+ "+Z(e.selected.length-e.maxCollapseTags),3))]),_:1},8,["size","type"])):D("v-if",!0)],2)]),_:1},8,["onAfterLeave"])):D("v-if",!0),e.collapseTags?D("v-if",!0):(h(),P(dl,{key:1,onAfterLeave:e.resetInputHeight},{default:O(()=>[M("span",{class:b([e.nsSelect.b("tags-wrapper"),{"has-prefix":e.prefixWidth&&e.selected.length}])},[(h(!0),V(Ve,null,sl(e.selected,t=>(h(),P(s,{key:e.getValueKey(t),closable:!e.selectDisabled&&!t.isDisabled,size:e.collapseTagSize,hit:t.hitState,type:e.tagType,"disable-transitions":"",onClose:f=>e.deleteTag(f,t)},{default:O(()=>[M("span",{class:b(e.nsSelect.e("tags-text")),style:x({maxWidth:e.inputWidth-75+"px"})},Z(t.currentLabel),7)]),_:2},1032,["closable","size","hit","type","onClose"]))),128))],2)]),_:1},8,["onAfterLeave"])),e.filterable?be((h(),V("input",{key:2,ref:"input","onUpdate:modelValue":l[0]||(l[0]=t=>e.query=t),type:"text",class:b([e.nsSelect.e("input"),e.nsSelect.is(e.selectSize),e.nsSelect.is("disabled",e.selectDisabled)]),disabled:e.selectDisabled,autocomplete:e.autocomplete,style:x({marginLeft:e.prefixWidth&&!e.selected.length||e.tagInMultiLine?`${e.prefixWidth}px`:"",flexGrow:1,width:`${e.inputLength/(e.inputWidth-32)}%`,maxWidth:`${e.inputWidth-42}px`}),onFocus:l[1]||(l[1]=(...t)=>e.handleFocus&&e.handleFocus(...t)),onBlur:l[2]||(l[2]=(...t)=>e.handleBlur&&e.handleBlur(...t)),onKeyup:l[3]||(l[3]=(...t)=>e.managePlaceholder&&e.managePlaceholder(...t)),onKeydown:[l[4]||(l[4]=(...t)=>e.resetInputState&&e.resetInputState(...t)),l[5]||(l[5]=q(N(t=>e.navigateOptions("next"),["prevent"]),["down"])),l[6]||(l[6]=q(N(t=>e.navigateOptions("prev"),["prevent"]),["up"])),l[7]||(l[7]=q((...t)=>e.handleKeydownEscape&&e.handleKeydownEscape(...t),["esc"])),l[8]||(l[8]=q(N((...t)=>e.selectOption&&e.selectOption(...t),["stop","prevent"]),["enter"])),l[9]||(l[9]=q((...t)=>e.deletePrevTag&&e.deletePrevTag(...t),["delete"])),l[10]||(l[10]=q(t=>e.visible=!1,["tab"]))],onCompositionstart:l[11]||(l[11]=(...t)=>e.handleComposition&&e.handleComposition(...t)),onCompositionupdate:l[12]||(l[12]=(...t)=>e.handleComposition&&e.handleComposition(...t)),onCompositionend:l[13]||(l[13]=(...t)=>e.handleComposition&&e.handleComposition(...t)),onInput:l[14]||(l[14]=(...t)=>e.debouncedQueryChange&&e.debouncedQueryChange(...t))},null,46,In)),[[an,e.query]]):D("v-if",!0)],6)):D("v-if",!0),D(" fix: https://github.com/element-plus/element-plus/issues/11415 "),e.isIOS&&!e.multiple&&e.filterable&&e.readonly?(h(),V("input",{key:1,ref:"iOSInput",class:b([e.nsSelect.e("input"),e.nsSelect.is(e.selectSize),e.nsSelect.em("input","iOS")]),disabled:e.selectDisabled,type:"text"},null,10,En)):D("v-if",!0),Y(S,{id:e.id,ref:"reference",modelValue:e.selectedLabel,"onUpdate:modelValue":l[15]||(l[15]=t=>e.selectedLabel=t),type:"text",placeholder:typeof e.currentPlaceholder=="function"?e.currentPlaceholder():e.currentPlaceholder,name:e.name,autocomplete:e.autocomplete,size:e.selectSize,disabled:e.selectDisabled,readonly:e.readonly,"validate-event":!1,class:b([e.nsSelect.is("focus",e.visible)]),tabindex:e.multiple&&e.filterable?-1:void 0,onFocus:e.handleFocus,onBlur:e.handleBlur,onInput:e.debouncedOnInputChange,onPaste:e.debouncedOnInputChange,onCompositionstart:e.handleComposition,onCompositionupdate:e.handleComposition,onCompositionend:e.handleComposition,onKeydown:[l[16]||(l[16]=q(N(t=>e.navigateOptions("next"),["stop","prevent"]),["down"])),l[17]||(l[17]=q(N(t=>e.navigateOptions("prev"),["stop","prevent"]),["up"])),q(N(e.selectOption,["stop","prevent"]),["enter"]),q(e.handleKeydownEscape,["esc"]),l[18]||(l[18]=q(t=>e.visible=!1,["tab"]))]},sn({suffix:O(()=>[e.iconComponent&&!e.showClose?(h(),P(r,{key:0,class:b([e.nsSelect.e("caret"),e.nsSelect.e("icon"),e.iconReverse])},{default:O(()=>[(h(),P(Tl(e.iconComponent)))]),_:1},8,["class"])):D("v-if",!0),e.showClose&&e.clearIcon?(h(),P(r,{key:1,class:b([e.nsSelect.e("caret"),e.nsSelect.e("icon")]),onClick:e.handleClearClick},{default:O(()=>[(h(),P(Tl(e.clearIcon)))]),_:1},8,["class","onClick"])):D("v-if",!0)]),_:2},[e.$slots.prefix?{name:"prefix",fn:O(()=>[M("div",kn,[ee(e.$slots,"prefix")])])}:void 0]),1032,["id","modelValue","placeholder","name","autocomplete","size","disabled","readonly","class","tabindex","onFocus","onBlur","onInput","onPaste","onCompositionstart","onCompositionupdate","onCompositionend","onKeydown"])],32)]),content:O(()=>[Y(T,null,{default:O(()=>[be(Y(w,{ref:"scrollbar",tag:"ul","wrap-class":e.nsSelect.be("dropdown","wrap"),"view-class":e.nsSelect.be("dropdown","list"),class:b([e.nsSelect.is("empty",!e.allowCreate&&!!e.query&&e.filteredOptionsCount===0)])},{default:O(()=>[e.showNewOption?(h(),P(p,{key:0,value:e.query,created:!0},null,8,["value"])):D("v-if",!0),Y(g,{onUpdateOptions:e.onOptionsRendered},{default:O(()=>[ee(e.$slots,"default")]),_:3},8,["onUpdateOptions"])]),_:3},8,["wrap-class","view-class","class"]),[[fl,e.options.size>0&&!e.loading]]),e.emptyText&&(!e.allowCreate||e.loading||e.allowCreate&&e.options.size===0)?(h(),V(Ve,{key:0},[e.$slots.empty?ee(e.$slots,"empty",{key:0}):(h(),V("p",{key:1,class:b(e.nsSelect.be("dropdown","empty"))},Z(e.emptyText),3))],64)):D("v-if",!0)]),_:3})]),_:3},8,["visible","placement","teleported","popper-class","popper-options","effect","transition","persistent","onShow"])],34)),[[z,e.handleClose,e.popperPaneRef]])}var $n=ge(Tn,[["render",Mn],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/select.vue"]]);const Vn=ie({name:"ElOptionGroup",componentName:"ElOptionGroup",props:{label:String,disabled:{type:Boolean,default:!1}},setup(e){const l=te("select"),i=A(!0),y=cl(),c=A([]);zl(Bl,De({...pl(e)}));const d=ze(Be);vl(()=>{c.value=s(y.subTree)});const s=r=>{const S=[];return Array.isArray(r.children)&&r.children.forEach(p=>{var g;p.type&&p.type.name==="ElOption"&&p.component&&p.component.proxy?S.push(p.component.proxy):(g=p.children)!=null&&g.length&&S.push(...s(p))}),S},{groupQueryChange:m}=Pe(d);return K(m,()=>{i.value=c.value.some(r=>r.visible===!0)},{flush:"post"}),{visible:i,ns:l}}});function zn(e,l,i,y,c,d){return be((h(),V("ul",{class:b(e.ns.be("group","wrap"))},[M("li",{class:b(e.ns.be("group","title"))},Z(e.label),3),M("li",null,[M("ul",{class:b(e.ns.b("group"))},[ee(e.$slots,"default")],2)])],2)),[[fl,e.visible]])}var Al=ge(Vn,[["render",zn],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/option-group.vue"]]);const Dn=kl($n,{Option:hl,OptionGroup:Al}),Bn=Pl(hl);Pl(Al);export{Bn as E,Dn as a};
