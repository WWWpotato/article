import{n as p,_ as C,d as N,o as k,c as v,a as f,b as o,w as a,F,e as E,E as u,f as B,g as I,h as U,i as n,j as D,k as L,l as W,m as $}from"./index-e58ba159.js";import{E as z}from"./el-pagination-0c4c3cdd.js";import"./el-select-777aa3f8.js";/* empty css                   */const P=e=>p.request({url:"api/dormitory/all",data:e}),c=e=>p.request({url:"api/dormitory/add",method:"post",data:e}),T=e=>p.request({url:"api/dormitory/delete",params:e}),q=e=>p.request({url:"api/dormitory/edit",method:"post",data:e}),A=e=>p.request({url:"api/dormitory/one",params:e}),j=N({data(){return{dormitorys:[],Dormitory:[],searchText:"",page:{total:0,current:1,size:10},dialogFormVisible:!1,dialogFormVisibleById:!1,dormitory:{building:"",comment:"",id:0,name:"",maxNumber:0,leader:"",leftNumber:0,liveNumber:0,school:"",status:0,type:0},formLabelWidth:80}},mounted(){this.getdormitoryPage(1)},methods:{refresh(){this.getdormitoryPage(1)},toEdit(e){console.log(e),this.dialogFormVisible=!0,this.dormitory=E(e)},getdormitoryPage(){let e=this.page.size*(this.page.current-1),l=this.page.current*this.page.size;P().then(i=>{this.dormitorys=i.data.dormitories.slice(e,l),this.page.total=i.data.dormitories.length,u(i.msg)}).catch(i=>{console.log(i)})},getdormitoryById(e){console.log(e),this.Dormitory=[],A({id:e}).then(i=>{this.dialogFormVisibleById=!1,console.log(i),this.Dormitory.push(i.data.dormitory);const b=this.Dormitory;this.dormitorys=b})},currentchange(e){this.getdormitoryPage(e),this.page.current=e},del(e){confirm("是否删除")==!0&&(console.log(e),T({id:e}).then(i=>{if(i.success)this.getdormitoryPage(this.page.current);else return console.log(i.msg),!1}).catch(i=>{}))},toAdd(){this.dialogFormVisible=!0},searchById(){this.dialogFormVisibleById=!0},save(){const e=this.dormitory;e.id==0?c(e).then(l=>{if(l.success)this.dialogFormVisible=!1,this.getdormitoryPage(this.page.current),u(l.msg);else return u(l.msg),!1}).catch(l=>{u("网络错误联系管理员")}):q(e).then(l=>{if(l.success)this.dialogFormVisible=!1,this.getdormitoryPage(this.page.current),u(l.msg);else return u(l.msg),!1}).catch(l=>{u("网络错误联系管理员")})}}}),M={class:"head"},O={class:"adcate-tools"},G={class:"dialog-footer"},H={class:"dialog-footer"};function J(e,l,i,b,K,Q){const s=B,r=D,h=I,V=z,d=L,m=W,g=$,y=U;return k(),v(F,null,[f("div",M,[f("div",O,[o(s,{type:"warning",onClick:e.toAdd},{default:a(()=>[n("添加")]),_:1},8,["onClick"]),o(s,{type:"warning",onClick:e.searchById},{default:a(()=>[n("查询")]),_:1},8,["onClick"]),o(s,{type:"warning",onClick:l[0]||(l[0]=t=>e.refresh())},{default:a(()=>[n("刷新查询")]),_:1})]),o(h,{data:e.dormitorys,style:{width:"100%"}},{default:a(()=>[o(r,{fixed:"",prop:"id",label:"id",width:"150"}),o(r,{fixed:"",prop:"name",label:"name",width:"120"}),o(r,{fixed:"",prop:"leader",label:"leader",width:"120"}),o(r,{fixed:"",prop:"maxNumber",label:"maxNumber",width:"120"}),o(r,{fixed:"",prop:"leftNumber",label:"leftNumber",width:"120"}),o(r,{fixed:"",prop:"liveNumber",label:"liveNumber",width:"120"}),o(r,{fixed:"",prop:"status",label:"status",width:"120"}),o(r,{fixed:"",prop:"comment",label:"comment",width:"120"}),o(r,{fixed:"",prop:"school",label:"school",width:"120"}),o(r,{fixed:"",prop:"type",label:"type",width:"120"}),o(r,{fixed:"",prop:"building",label:"building",width:"120"}),o(r,{fixed:"right",label:"Operations",width:"120"},{default:a(t=>[o(s,{link:"",type:"primary",size:"small",onClick:w=>e.toEdit(t.row)},{default:a(()=>[n("更新")]),_:2},1032,["onClick"]),o(s,{link:"",type:"primary",size:"small",onClick:w=>e.del(t.row.id)},{default:a(()=>[n("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),o(V,{layout:"prev, pager, next","page-size":e.page.size,total:e.page.total,onCurrentChange:e.currentchange},null,8,["page-size","total","onCurrentChange"])]),o(y,{modelValue:e.dialogFormVisible,"onUpdate:modelValue":l[12]||(l[12]=t=>e.dialogFormVisible=t),title:"添加宿舍"},{footer:a(()=>[f("span",G,[o(s,{onClick:l[10]||(l[10]=t=>e.dialogFormVisible=!1)},{default:a(()=>[n("Cancel")]),_:1}),o(s,{type:"primary",onClick:l[11]||(l[11]=t=>e.save())},{default:a(()=>[n("保存 ")]),_:1})])]),default:a(()=>[o(g,{model:e.dormitory},{default:a(()=>[o(m,{label:"name","label-width":e.formLabelWidth},{default:a(()=>[o(d,{modelValue:e.dormitory.name,"onUpdate:modelValue":l[1]||(l[1]=t=>e.dormitory.name=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),o(m,{label:"leader","label-width":e.formLabelWidth},{default:a(()=>[o(d,{modelValue:e.dormitory.leader,"onUpdate:modelValue":l[2]||(l[2]=t=>e.dormitory.leader=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),o(m,{label:"maxNumber","label-width":e.formLabelWidth},{default:a(()=>[o(d,{modelValue:e.dormitory.maxNumber,"onUpdate:modelValue":l[3]||(l[3]=t=>e.dormitory.maxNumber=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),o(m,{label:"leftNumber","label-width":e.formLabelWidth},{default:a(()=>[o(d,{modelValue:e.dormitory.leftNumber,"onUpdate:modelValue":l[4]||(l[4]=t=>e.dormitory.leftNumber=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),o(m,{label:"liveNumber","label-width":e.formLabelWidth},{default:a(()=>[o(d,{modelValue:e.dormitory.liveNumber,"onUpdate:modelValue":l[5]||(l[5]=t=>e.dormitory.liveNumber=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),o(m,{label:"status","label-width":e.formLabelWidth},{default:a(()=>[o(d,{modelValue:e.dormitory.status,"onUpdate:modelValue":l[6]||(l[6]=t=>e.dormitory.status=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),o(m,{label:"school","label-width":e.formLabelWidth},{default:a(()=>[o(d,{modelValue:e.dormitory.school,"onUpdate:modelValue":l[7]||(l[7]=t=>e.dormitory.school=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),o(m,{label:"type","label-width":e.formLabelWidth},{default:a(()=>[o(d,{modelValue:e.dormitory.type,"onUpdate:modelValue":l[8]||(l[8]=t=>e.dormitory.type=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),o(m,{label:"building","label-width":e.formLabelWidth},{default:a(()=>[o(d,{modelValue:e.dormitory.building,"onUpdate:modelValue":l[9]||(l[9]=t=>e.dormitory.building=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"])]),_:1},8,["model"])]),_:1},8,["modelValue"]),o(y,{modelValue:e.dialogFormVisibleById,"onUpdate:modelValue":l[16]||(l[16]=t=>e.dialogFormVisibleById=t),title:"查询"},{footer:a(()=>[f("span",H,[o(s,{onClick:l[14]||(l[14]=t=>e.dialogFormVisible=!1)},{default:a(()=>[n("Cancel")]),_:1}),o(s,{type:"primary",onClick:l[15]||(l[15]=t=>e.getdormitoryById(e.searchText))},{default:a(()=>[n("查询 ")]),_:1})])]),default:a(()=>[o(g,{model:e.dormitory},{default:a(()=>[o(m,{label:"请输入宿舍ID","label-width":e.formLabelWidth},{default:a(()=>[o(d,{modelValue:e.searchText,"onUpdate:modelValue":l[13]||(l[13]=t=>e.searchText=t),placeholder:"请输入宿舍ID",autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"])]),_:1},8,["model"])]),_:1},8,["modelValue"])],64)}const Z=C(j,[["render",J]]);export{Z as default};
