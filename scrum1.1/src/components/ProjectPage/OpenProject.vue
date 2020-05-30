<template>
    <div>
        <el-table :data="allData" @row-click="handleCurrentChange">
            <el-table-column fixed prop="teamProjectId" label="ID" width="100"></el-table-column>
            <el-table-column prop="teamProjectName" label="项目" width="100"></el-table-column>
            <el-table-column label="操作" width="100">
                <template>
                    <el-button type="primary" size="small" @click="handleOpen">进入</el-button>
                    <el-button type="text" size="small" @click="handleEdit">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
        <EditDialog :v-if="editFlag"></EditDialog>
    </div>
</template>

<script>
import {mapState,mapMutations} from 'Vuex'
import axios from 'axios'
import EditDialog from './EditDialog'
export default {
    data () {
        return {
            editFlag:false
        }
    },
    components:{
        EditDialog
    },
    computed: {

        //当前项目。最初为空
        ...mapState(['currentProject']),

        //项目数组，展示在列表上
        ...mapState('login',['allData'])
    },
    methods: {

        //设定当前项目
        ...mapMutations(['setCurrentProject']),

        //当前项目变化处理函数
        handleCurrentChange (row,event,column) { 
            console.log("执行了行触发")   
            this.setCurrentProject(row)
        },

        //进入按钮处理函数
        handleOpen(index,row){
            this.setCurrentProject(row)
            this.$router.push('Task')
        },

        //处理编辑
        handleEdit(index,row){
            this.editFlag=true
            //激活对话框：对话框中有各项可修改的内容的表单，有保存和取消按钮，点击保存就会触发
        },
        //保存
        handleSave(){
            //更新currentProject
            //post到后端
            //getAll一次（刷新allData）
        }
    }
}
</script>>