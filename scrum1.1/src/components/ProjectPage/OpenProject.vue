<template>
<div>
    <el-table :data="allData"  @row-click="handleCurrentChange">
        <el-table-column fixed prop="teamProjectId" label="ID" width="100"></el-table-column>
        <el-table-column prop="teamProjectName" label="项目" width="100"></el-table-column>
        <el-table-column label="操作" width="100">
            <template>
                <el-button type="text" size="small">查看</el-button>
                <el-button type="text" size="small">编辑</el-button>
            </template>
        </el-table-column>
    </el-table>
    <el-dialog
  title="提示"
  :visible.sync="editProjectDialogVisible"
  width="30%">
<el-row><el-input placeholder="项目名"  v-model="tempProjectName" clearable></el-input></el-row>
  <span slot="footer" class="dialog-footer">
    <el-button @click="editProjectCancel">取 消</el-button>
    <el-button type="primary" @click="editProjectConfirm">确 定</el-button>
  </span>
</el-dialog>
</div>
</template>

<script>
import {mapState,mapMutations} from 'Vuex'
import axios from 'axios'
export default {
    data () {
        return {
            editProjectDialogVisible: false,
            tempProjectName:'',
            tempProjectId:0
        }
    },
    computed: {
        ...mapState('login',['allData']),
 
    },
    methods: {
        ...mapMutations('setProjectIndex'),
        ...mapMutations('login',['getAll']),
        handleCurrentChange (row,event,column) {
            console.log('进入了handle函数')
            console.log(row, event, column)
            console.log(this.allData)
            console.log(this.$store.state.login)
            this.tempProjectName = row.teamProjectName
            this.tempProjectId = row.teamProjectId
            this.editProjectDialogVisible = true
        },
        editProjectCancel() {
            this.editProjectDialogVisible = false
            console.log("取消更改")
        },
        editProjectConfirm() {
            // 调用更改接口更改项目名称
            axios({
                url: 'http://47.97.196.50:8886/rest/teamProject',
                method: 'put',
                data: {
                    teamProjectId: this.tempProjectId,
                    teamProjectName: this.tempProjectName
                }
            }).then(Response => {
                // 更新窗口，以显示更改后的数据
                this.getAll()
                console.log("运行到这")
            })
            this.editProjectDialogVisible=false
            console.log("确认更改")
            console.log(this.$store.state)
        }
    }
}
</script>>