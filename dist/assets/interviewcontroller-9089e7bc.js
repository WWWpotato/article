import{n as u,_ as V,d as y,o as C,c as _,a as w,b as l,w as i,F as I,e as k,E as r,f as E,g as T,h as F,i as m,j as P,k as z,l as B,m as U}from"./index-e58ba159.js";import{E as W}from"./el-pagination-0c4c3cdd.js";import"./el-select-777aa3f8.js";/* empty css                   */const $=e=>u.request({url:"/api/interview/add",method:"post",data:e}),q=e=>u.request({url:"/api/interview/colums",method:"get",data:e}),L=e=>u.request({url:"/api/interview/delete",method:"get",data:e}),N=e=>u.request({url:"/api/interview/edit",method:"post",data:e}),A=e=>u.request({url:"/api/interview/getInterviewWithTypeByPage",method:"post",data:e}),D=y({data(){return{interview:[],page:{total:0,current:1,size:10},dialogFormVisible:!1,interviewr:{analysis:"",createTime:"",deleted:0,id:0,interviewType:0,title:"",updateTime:"",userinfoId:0,view:0},interviewColums:{colums:""},formLabelWidth:80}},mounted(){this.getinterviewsPage(1)},methods:{toEdit(e){this.dialogFormVisible=!0,this.interview=k(e)},getinterviewsPage(e){A({current:e,size:4}).then(o=>{const s=o.data.page;this.interviews=s.records,this.page=s}).catch(o=>{console.log(o)})},getinterviewsColumn(e){q({colums:e}).then(o=>{const s=o.params.page;this.interviews=s.records,this.page=s}).catch(o=>{console.log(o)})},currentchange(e){this.getinterviewsPage(e),this.page.current=e},del(e){confirm("是否删除")==!0&&console.log(e),console.log(e),L({id:e}).then(o=>{if(o.success)this.getinterviewsPage(this.page.current);else return console.log(o.msg),!1}).catch(o=>{})},toAdd(){this.dialogFormVisible=!0},save(){const e=this.interview;e.id==0?$(e).then(t=>{if(t.success)this.dialogFormVisible=!1,this.getinterviewsPage(this.page.current),r(t.msg);else return r(t.msg),!1}).catch(t=>{r("网络错误联系管理员")}):N(e).then(t=>{if(t.success)this.dialogFormVisible=!1,this.getinterviewsPage(this.page.current),r(t.msg);else return r(t.msg),!1}).catch(t=>{r("网络错误联系管理员")})}}}),j={class:"interviews"},M={class:"interview-tools"},G={class:"dialog-footer"};function H(e,t,o,s,J,K){const d=E,n=P,c=T,h=W,p=z,g=B,f=U,v=F;return C(),_(I,null,[w("div",j,[w("div",M,[l(d,{type:"warning",onClick:e.toAdd},{default:i(()=>[m("添加")]),_:1},8,["onClick"])]),l(c,{data:e.interviews,style:{width:"100%"}},{default:i(()=>[l(n,{fixed:"",prop:"id",width:"150"}),l(n,{prop:"idd",label:"编号",width:"120"}),l(n,{prop:"title",label:"面试题目",width:"120"}),l(n,{prop:"analysis",label:"面试解析",width:"500"}),l(n,{prop:"interviewType",label:"面试类型",width:"120"}),l(n,{prop:"deleted",label:"deleted",width:"120"}),l(n,{fixed:"tight",label:"view",width:"120"},{default:i(a=>[l(d,{link:"",type:"primary",size:"small",onClick:b=>e.toEdit(a.row)},{default:i(()=>[m("更新")]),_:2},1032,["onClick"]),l(d,{link:"",type:"primary",size:"small",onClick:b=>e.del(a.row.id)},{default:i(()=>[m("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),l(h,{layout:"prev, pager, next","page-size":e.page.size,total:e.page.total,onCurrentChange:e.currentchange},null,8,["page-size","total","onCurrentChange"])]),l(v,{modelValue:e.dialogFormVisible,"onUpdate:modelValue":t[5]||(t[5]=a=>e.dialogFormVisible=a),title:"面试信息编辑"},{footer:i(()=>[w("span",G,[l(d,{onClick:t[4]||(t[4]=a=>e.dialogFormVisible=!1)},{default:i(()=>[m("Cancel")]),_:1}),l(d,{type:"primary",onClick:e.save},{default:i(()=>[m("保存 ")]),_:1},8,["onClick"])])]),default:i(()=>[l(f,{model:e.Interview},{default:i(()=>[l(g,{label:"面试题","label-width":e.formLabelWidth},{default:i(()=>[l(p,{modelValue:e.Interview.title,"onUpdate:modelValue":t[0]||(t[0]=a=>e.Interview.title=a),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(g,{label:"面试解析","label-width":e.formLabelWidth},{default:i(()=>[l(p,{modelValue:e.Interview.analysis,"onUpdate:modelValue":t[1]||(t[1]=a=>e.Interview.analysis=a),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(g,{label:"创建时间","label-width":e.formLabelWidth},{default:i(()=>[l(p,{modelValue:e.Interview.ucreateTime,"onUpdate:modelValue":t[2]||(t[2]=a=>e.Interview.ucreateTime=a),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(g,{label:"更新时间","label-width":e.formLabelWidth},{default:i(()=>[l(p,{modelValue:e.Interview.UpdateTime,"onUpdate:modelValue":t[3]||(t[3]=a=>e.Interview.UpdateTime=a),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"])]),_:1},8,["model"])]),_:1},8,["modelValue"])],64)}const X=V(D,[["render",H]]);export{X as default};