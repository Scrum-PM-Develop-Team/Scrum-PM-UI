<template>
    <div>
        <el-col style=" width: 550px;height:500px;padding:80px; position: absolute; top: 10%; left:20%">
                <el-tabs type="border-card">
                    <el-tab-pane label="打开">
                        <OpenProject></OpenProject>
                    </el-tab-pane>
                    <el-tab-pane label="新建">
                        <CreateProject></CreateProject>
                    </el-tab-pane>
                </el-tabs>
        </el-col>
    </div>
</template>

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
    }
}
</script>>