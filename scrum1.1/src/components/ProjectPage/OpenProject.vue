<template>
    <div>
    <el-table :data="allData" highlight-current-row @row-click="handleCurrentChange">
        <el-table-column fixed prop="teamProjectId" label="ID" width="100"></el-table-column>
        <el-table-column prop="teamProjectName" label="项目" width="100"></el-table-column>
        <el-table-column label="操作" width="100">
            <template>
                <el-button type="text" size="small">查看</el-button>
                <el-button type="text" size="small">编辑</el-button>
            </template>
        </el-table-column>
    </el-table>
    </div>
</template>

<script>
import {mapState,mapMutations} from 'Vuex'
export default {
    data(){
        return {

        }
    },
    computed:{
        ...mapState('login',['allData']),
    },
    method:{
        ...mapMutations('setProjectIndex'),
        handleCurrentChange(){
            console.log('进入了handle函数')
            setProjectIndex(1)
        }
    }
}
</script>>