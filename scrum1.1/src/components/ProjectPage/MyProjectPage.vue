<template>
    <div>
        <el-container style="height: 500px; border: 1px solid #eee">
            <!--顶栏容器-->
            <el-header style="text-align: font-size: 12px">
                <el-row :gutter="20">
                    <el-col :span="1" :offset="22">
                        <div class="grid-content bg-purple">
                            <el-button @click="handleCreateProject"  type="primary" icon="el-icon-plus" circle></el-button>
                        </div>
                    </el-col>
                    <el-col :span="1" :offset="23">
                        <div class="grid-content bg-purple">
                            <el-button @click="handleJoinProject"  type="primary" icon="el-icon-s-flag" circle></el-button>
                        </div>
                    </el-col>
                </el-row>
            </el-header>
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
                <!-- 编辑项目对话框 -->
                <el-dialog :visible="editFlag" title="编辑" width="30%">
                    <el-row>
                        <el-input placeholder="新项目名" clearable v-model="newName"></el-input>
                    </el-row>
                    <span slot="footer" class="dialog-footer">
                        <el-button @click="handleCancel">取 消</el-button>
                        <el-button type="primary" @click="handleSave">修 改</el-button>
                    </span>
                </el-dialog>
                <!-- 创建项目对话框 -->
                <el-dialog :visible="createFlag" title="创建" width="40%">
                    <el-form ref="createForm" :model="createForm" label-width="100px" label-position="left">
                        <el-form-item label="项目名称">
                            <el-input v-model="createForm.projectName" round style="width:250px"></el-input>
                        </el-form-item>
                        <el-form-item label="设为当前项目">
                            <el-switch v-model="currentFlag" @click="handleSetCurrent"></el-switch>
                        </el-form-item>
                        <el-form-item>
                            <div style="position: absolute;left:0%">
                                <el-button type="primary" round @click="onSubmit">立即创建</el-button>
                                <el-button round @click="handleCancel">取消</el-button>   
                            </div>       
                        </el-form-item>
                    </el-form>
                </el-dialog>
                <!-- 加入项目对话框 -->
                <el-dialog :visible="joinFlag" title="加入" width="40%">
                    <el-row>
                        <el-input placeholder="项目ID" clearable v-model="joinId"></el-input>
                    </el-row>
                    <span slot="footer" class="dialog-footer">
                        <el-button @click="handleCancel">取 消</el-button>
                        <el-button type="primary" @click="handleJoin">加 入</el-button>
                    </span>
                </el-dialog>
            </div>
        </el-container>
    </div>
</template>

<script>
import {mapState,mapMutations} from 'Vuex'
import axios from 'axios'
export default {

    data () {
        return {
            //新建项目的名称
            newName:'',
            //加入项目的ID
            joinId:0,
            //编辑窗口显示标记
            editFlag:false,
            //创建窗口显示标记
            createFlag:false,
            //设为当前项目标记
            currentFlag:false,
            //加入窗口显示标记
            joinFlag:false,
            //表单元素
            form:{
                projectId:'',
                projectName:'',
                currIteration:'',
                headerName:'',
                role:''
            },
            createForm:{
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

    },

    computed: {

        //当前项目，最初为空
        ...mapState(['currentProject']),

        //项目数组，展示在列表上
        ...mapState('login',['allData']),
        //用户信息
        ...mapState('login',['userInfo'])
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
            //this.setCurrentProject(row)
            this.form=row
        },

        //进入按钮处理函数
        handleOpen(index,row){
            //this.setCurrentProject(row)
            this.form=row
            this.$router.push('Task')
        },

        //创建按钮处理函数
        handleCreateProject(){
            this.createFlag=true
        },
        //加入按钮处理函数
        handleJoinProject(){
            this.joinFlag=true
        },
        handleSetCurrent(){
            this.currentFlag=!this.currentFlag
        },
        //编辑按钮触发处理函数
        handleEdit(index,row){
            this.editFlag=true
        },

        //修改保存处理函数
        handleSave(){
            if(this.newName!==''){
                this.form.projectName=this.newName
                this.test.forEach(p => {
                    if(p.projectId==this.form.projectId)
                        p.projectName=this.form.projectName
                });
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
            //编辑窗口显示标记
            this.editFlag=false
            //创建窗口显示标记
            this.createFlag=false
            //加入窗口显示标记
            this.joinFlag=false
        },

        //创建项目提交处理函数
        onSubmit() {
            if(this.createForm.name!=""){
                axios({
                    url: '/rest/teamProject',
                    method: 'post',
                    data: {
                        teamProjectName: this.createForm.name
                        }
                    }).then(Response => {
                        console.log('onSubmit response')
                        console.log(Response)
                        this.createForm.projectId=Response.data.data.teamProjectId
                        axios({
                            url:'/rest/teamRelationship',
                            method:'post',
                            data:{
                                teamProjectId: Response.data.data.teamProjectId,
                                userId: this.userInfo.userId,
                                userState:  "队长"
                            }
                            }).then(Response=>{
                                console.log('add user to project')
                                console.log(Response)
                                this.createForm.headerName=this.userInfo.userName
                                this.createForm.role="队长"
                                this.test[this.test.length]=this.createForm
                                console.log("form")
                                console.log(this.createForm)
                                console.log('this.forms.length')
                                console.log(this.forms.length)
                            })
                    })
            }
            this.createFlag=false
        },

        //加入项目处理函数
        handleJoin(){
            axios({
                url: '/rest/teamRelationship',
                method: 'post',
                data: {
                    teamProjectId: this.joinId,
                    userId:this.userInfo.userId,
                    userState:"队员"
                    }
                }).then(Response => {
                    // this.form.teamProjectId=joinId
                    // this.form.teamProjectName=Response.data.teamProjectName
                    // this.form.headerName=
                    // this.form.role
                })
            this.joinFlag=false
        },
    }
}
</script>