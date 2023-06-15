<template>
    <!--
         1 el-table显示数据,分页 
         2  token cookie|session 服务端保存状态信息方式   
         H5 token 如果有值 登录状态 否则就是登录
         进入某个页面就要进行拦截：判断用户是否登录
         通过什么方式：路由守卫
         3 添加和更新
    -->


    <div class="adCates">
        <div class="adcate-tools">
            <el-button type="warning" @click="toAdd">添加</el-button>
        </div>
        <el-table :data="adCates" style="width: 100%">
            <el-table-column prop="apiMethod" label="API请求方式" width="120" />
            <el-table-column prop="apiName" label="API名称" width="120" />
            <el-table-column prop="apiSort" label="排序" width="120" />
            <el-table-column prop="apiUrl" label="API请求地址" width="150" />
            <el-table-column prop="description" label="描述" width="120" />
            <el-table-column prop="hasChildren" label="是否有子菜单" width="150" />
            <el-table-column prop="id" label="主键" width="120" />
            <el-table-column prop="pid" label="父ID" width="120" />
             <el-table-column label="sfsdfd" width="120">
                <el-table-column  label="操作" width="120">
                <template #default="scope">
                    <el-button link type="primary" size="small" @click="toEdit(scope.row)">更新</el-button>
                    <el-button link type="primary" size="small" @click="del(scope.row.id)">删除</el-button>
                </template>
                </el-table-column>
            </el-table-column>
        </el-table>
        <el-pagination layout="prev, pager, next" :page-size="page.size" :total="page.total"
            @current-change="currentchange" />
    </div>
    <el-dialog v-model="dialogFormVisible" title="backendApi">
        <el-form :model="adCate">
            <el-form-item label="API请求方式" :label-width="formLabelWidth">
                <el-input v-model="adCate.apiMethod" autocomplete="off" />
            </el-form-item>
            <el-form-item label="API名称" :label-width="formLabelWidth">
                <el-input v-model="adCate.name" autocomplete="off" />
            </el-form-item>
            <el-form-item label="排序" :label-width="formLabelWidth">
                <el-input v-model="adCate.apiSort" autocomplete="off" />
            </el-form-item>
            <el-form-item label="API请求地址" :label-width="formLabelWidth">
                <el-input v-model="adCate.apiUrl" autocomplete="off" />
            </el-form-item>
            <el-form-item label="描述" :label-width="formLabelWidth">
                <el-input v-model="adCate.description" autocomplete="off" />
            </el-form-item>
            <el-form-item label="是否有子菜单" :label-width="formLabelWidth">
                <el-input v-model="adCate.hasChildren" autocomplete="off" />
            </el-form-item>
            <el-form-item label="主键" :label-width="formLabelWidth">
                <el-input v-model="adCate.id" autocomplete="off" />
            </el-form-item>
            <el-form-item label="父ID" :label-width="formLabelWidth">
                <el-input v-model="adCate.pid" autocomplete="off" />
            </el-form-item>
                <el-form-item label="token" :label-width="formLabelWidth">
                <el-input v-model="adCate.token" autocomplete="off" />
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogFormVisible = false">Cancel</el-button>
                <el-button type="primary" @click="save">
                    保存
                </el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script>
import { defineComponent } from "vue"
import{blackendOne,blackendAll,blackendEdit,blackendDel,blackendAdd,blackendPage} from "../../http/blackend";
import { ElMessage } from 'element-plus'
import { cloneDeep } from 'lodash-es'
export default defineComponent({
    data() {
        return {
            adCates: [],
            page: {
                total: 0,
                current: 1,
                size: 10
            },
            dialogFormVisible: false,
            adCate: {
                "apiMethod": "",
                "apiName": "",
                "apiSort": 0,
                "apiUrl": "",
                "description": "",
                "hasChildren": true,
                "id": 0,
                "pid": 0
            },
            formLabelWidth: 80
        }
    },
    mounted() {
        this.selelctall()
    },
    methods: {
        toEdit(adcate) {
            console.log(adcate);
            this.dialogFormVisible = true;
            this.adCate = cloneDeep(adcate);
        },
        getAdCatesPage(current) {
            const data = {
                current: current,
                size: 10
            }
            blackendPage(data).then(res => {
                console.log(res);
                const page = res.data.page;
                this.adCates = page.records;
                this.page = page;
            }).catch(err => {
                console.log(err);
            })

        },
        currentchange(current) {
            // console.log(current);
            this.getAdCatesPage(current);
            this.page.current = current;//数据更新目前显示的页面
        },
        del(id) {
            //删除数据
            //模拟删除，服务器进行处理 
            //要别人反悔机会
            // 如果只有一条数据，删除数据之后如何处理？
            //人机交互
            console.log(id)
            const params = {
                id: id
            }
            blackendDel(params).then(res => {
                if (res.success) {
                    this.getAdCatesPage(this.page.current)

                }
                else {
                    console.log(res.msg)
                    return false
                }


            }).catch(err => {

            })
        },
        toAdd() {
            //到添加的页面
            this.dialogFormVisible = true;
        },
        save() {
            const adcate = this.adCate;
            if (adcate.id == 0) {
            
                blackendAdd(adcate).then(res => {
                    if (res.success) {
                        //刷新页面
                        this.dialogFormVisible = false;
                        this.getAdCatesPage(this.page.current)
                        ElMessage(res.msg)
                    }
                    else {
                        ElMessage(res.msg)
                        return false
                    }
                }).catch(err => {
                    ElMessage('网络错误联系管理员')
                })
            }
            else {
                blackendEdit(adcate).then(res => {
                    if (res.success) {
                        //刷新页面
                        this.dialogFormVisible = false;
                        this.getAdCatesPage(this.page.current)
                        ElMessage(res.msg)
                    }
                    else {
                        ElMessage(res.msg)
                        return false
                    }
                }).catch(err => {
                    ElMessage('网络错误联系管理员')
                })
            }

        },
        //例子
        selelctall(){
            blackendAll().then(res => {
                    if (res.success) {
                        console.log(res.data.backendApis);
                        this.adCates = res.data.backendApis
                    }
                    else {
                        ElMessage(res.msg)
                        return false
                    }
                }).catch(err => {
                    ElMessage('网络错误联系管理员')
                })
        }

    }

});
</script>

<style lang="scss" scoped></style>