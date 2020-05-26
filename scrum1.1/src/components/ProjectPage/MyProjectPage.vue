<template>
    <div>
        <el-col style="padding:30px; width: 600px; position: absolute; top: 10%; left:20%">
            <el-card style="height:500px;">
                <el-container>
                    <el-header>
                        <div style="margin: 20px 0; position: absolute;left:10%">
                            <el-button type="primary" round  style="width:150px;height:40px">打开</el-button>
                            <el-button round style="height:40px">新建</el-button>
                        </div>
                    </el-header>
                    <el-main>
                        <OpenProject></OpenProject>
                    </el-main>
                </el-container>
            </el-card>
        </el-col>
    </div>
</template>>

<script>
import OpenProject from './OpenProject'
import CreateProject from './CreateProject'
export default {
    components:{
        OpenProject,
        CreateProject
    },
    data(){
        return {
            flag:true,
        }
    },
    methods:{
        Open(){
            
        }
    }
}
</script>>