<template>
    <div style="position:absolute;left:15%">
        <el-table :data="test" @row-click="handleCurrentChange">
            <el-table-column fixed prop="projectId" label="ID" width="100"></el-table-column>
            <el-table-column prop="projectName" label="项目" width="150"></el-table-column>
            <el-table-column prop="currIteration" label="当前迭代" width="150"></el-table-column>
            <el-table-column prop="headerName" label="队长" width="100"></el-table-column>
            <el-table-column prop="role" label="我的身份" width="100"></el-table-column>
            <el-table-column label="操作" width="150">
                <template>
                    <el-button type="primary" size="small" @click="handleOpen">进入</el-button>
                    <el-button type="text" size="small" @click="handleEdit">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-dialog :visible="editFlag" title="编辑" width="30%">
        <el-row>
            <el-input placeholder="新项目名" clearable v-model="newName"></el-input>
        </el-row>
        <span slot="footer" class="dialog-footer">
            <el-button @click="handleCancel">取 消</el-button>
            <el-button type="primary" @click="handleSave">修 改</el-button>
        </span>
        </el-dialog>
    </div>
</template>

<script>
import {mapState,mapMutations} from 'Vuex'
import axios from 'axios'
import EditDialog from './EditDialog'
export default {
    data () {
        return {
            newName:'',
            //编辑窗口显示标记
            editFlag:false,
            //表单元素
            form:{
                projectId:'',
                projectName:'',
                currIteration:'',
                headerName:'',
                role:''
            },
            //表单数组
            forms:[],
            //测试数据
            test:[
                {
                    projectId:'1',
                    projectName:'Scrum项目管理软件',
                    currIteration:'第一次迭代',
                    headerName:'陈家棋',
                    role:'队员'
                },
                {
                    projectId:'2',
                    projectName:'CQ自动化群管理助手',
                    currIteration:'第二次迭代',
                    headerName:'陈家棋',
                    role:'队员'
                },
                {
                    projectId:'4',
                    projectName:'whuHelper',
                    currIteration:'第一次迭代',
                    headerName:'张俊杰',
                    role:'队长'
                },
                                {
                    projectId:'7',
                    projectName:'AI问答系统',
                    currIteration:'第一次迭代',
                    headerName:'夏沁菡',
                    role:'队员'
                },
            ],
        }
    },
    components:{
        EditDialog
    },
    computed: {

        //当前项目，最初为空
        ...mapState(['currentProject']),

        //项目数组，展示在列表上
        ...mapState('login',['allData'])
    },
    mounted () {

        // for(let i=0;i<this.allData.length;i++){
        //     //项目ID
        //     this.form.projectId=this.allData[i].teamProjectId
        //     //项目名
        //     this.form.projectName=this.allData[i].teamProjectName
        //     //当前迭代ID
        //     let currIter=this.allData[i].iterationVOs.filter((iter)=>{
        //         return iter.iterationState=="执行中"
        //     })
        //     this.form.currIteration=currIter.iterationId
        //     //负责人
        //     let header=this.allData[i].userVOs.filter((user)=>{
        //         return user.userState=="组长"
        //     })
        //     this.form.headerName=header.userName
        //     //角色
        //     let me=this.allData[i].userVOs.filter((user)=>{
        //         return user.userName=this.userInfo.userName
        //     })
        //     this.form.role=me.userState
        //     //将得到的数据保存到数组中
        //     this.forms[i]=this.form
        // }
        // console.log("form")
        // console.log(this.form)
     },

    methods: {

        //设定当前项目
        ...mapMutations(['setCurrentProject']),

        //当前项目变化处理函数，只要点击到行上，无论按钮还是内容都会触发这个函数
        handleCurrentChange (row,event,column) { 
            this.setCurrentProject(row)
        },

        //进入按钮处理函数
        handleOpen(index,row){
            //this.setCurrentProject(row)
            this.$router.push('Task')
        },

        //编辑按钮触发处理函数
        handleEdit(index,row){
            this.editFlag=true
        },

        //修改保存处理函数
        handleSave(){
            if(newName!==''){
                
                // currentProject.teamProjectName=name
                // axios({
                //     url: '/rest/teamProject',
                //     method: 'put',
                //     params: {
                //         teamProjectId:currentProject.teamProjectId,
                //         teamProjectName:name
                //     }
                // }).then(Response=>{
                //     this.getAll()
                // })

            }
            this.editFlag=false
        },
        
        //取消修改处理函数
        handleCancel(){
            this.editFlag=false
        }
    }
}
</script>>