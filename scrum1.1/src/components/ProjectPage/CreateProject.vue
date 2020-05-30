<template>
    <div style="height:900px width: 550px;">
        <el-form ref="form" :model="form" label-width="100px" label-position="left">
            <el-form-item label="项目名称">
                <el-input v-model="form.name" round style="width:250px"></el-input>
            </el-form-item>
            <el-form-item label="参与者人数">
                <el-input v-model="form.parternerNum" round style="width:200px"></el-input>
                <el-button round style="position:absolute;left:50%">现在添加</el-button>
            </el-form-item>
            <el-form-item label="设为当前项目">
                <el-switch v-model="form.isCurrent"></el-switch>
            </el-form-item>
            <el-form-item>
                <div style="position:absolute;left:0%">
                    <el-button type="primary" round @click="onSubmit">立即创建</el-button>
                    <el-button round>取消</el-button>   
                </div>             
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
import {mapState,mapMutations} from 'Vuex'
import axios from 'axios'
axios.defaults.baseURL = 'http://47.97.196.50:8886'

export default {
    data() {
      return {
        form: {
            name: 'undefined',
            parternerNum:1,
            isCurrent:true
        },
        newProject:{
            teamProjectId:0,
            teamProjectName:""
        }
      }
    },
    computed:{
        ...mapState('login',['userInfo'])
    },
    methods: {
        onSubmit() {
            axios({
                url: '/rest/teamProject',
                method: 'post',
                data: {
                    teamProjectName: this.form.name
                    }
                }).then(Response => {
                    console.log(Response)
                    this.newProject.teamProjectId=Response.data.teamProjectId,
                    this.newProject.teamProjectName=Response.data.teamProjectName
                    axios({
                        url:'/rest/teamRelationship',
                        method:'post',
                        data:{
                            teamProjectId: Response.data.teamProjectId,
                            userId: this.userInfo.userId,
                            userState:  "队长"
                        }
                        }).then(Response=>{
                            console.log(Response)
                    })
            })
            console.log("在createProjectPage中调用store中的userInfo")
            console.log(this.userInfo)
            
        }
    }
}
</script>