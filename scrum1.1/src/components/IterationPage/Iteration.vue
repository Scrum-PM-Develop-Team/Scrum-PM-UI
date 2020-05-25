<template>
<el-container style="height: 500px; border: 1px solid #eee">
    <!--顶栏容器-->
    <el-header style="text-align: font-size: 12px">
    <el-row :gutter="20">
      <el-col :span="14"><div class="grid-content bg-purple">
      <el-button @click="newIterationDialog">增加迭代</el-button></div></el-col>
      <el-col :span="10"><div class="grid-content bg-purple">
      </div></el-col>
      <!--增加迭代-->
    <el-dialog
      title="增加迭代"
      :visible.sync="newIterationDialogVisible"
      width="70%">
      <el-row><el-input placeholder="迭代名"  v-model="newIteration.iterationVOs[0].iterationName" clearable></el-input></el-row>
      <el-row><el-select v-model="newIteration.iterationVOs[0].iterationState" placeholder="任务状态">
      <el-option
        v-for="item in iterationState"
        :key="item.value"
        :label="item.value"
        :value="item.value">
      </el-option>
      </el-select></el-row>
      <el-row>
      <el-date-picker
      v-model="newIteration.iterationVOs[0].iterationBeginTime"
      type="datetime"
      placeholder="迭代开始时间"
      value-format="yyyy-MM-dd HH:mm:ss">
      </el-date-picker>
      </el-row>
      <span slot="footer" class="dialog-footer">
      <el-button @click="newIteraDialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="newIterationMethod">确 定</el-button>
      </span>
</el-dialog>
<!--修改迭代的弹框-->
 <el-dialog
      title="修改迭代"
      :visible.sync="editIterationDialogVisible"
      width="70%">
      <el-row><el-input placeholder="迭代名"  v-model="editIteration.iterationName" clearable></el-input></el-row>
      <el-row><el-select v-model="editIteration.iterationState" placeholder="迭代状态">
      <el-option
        v-for="item in iterationState"
        :key="item.value"
        :label="item.value"
        :value="item.value">
      </el-option>
      </el-select></el-row>
      <el-row>
      <el-date-picker
      v-model="editIteration.iterationBeginTime"
      type="datetime"
      placeholder="迭代开始时间"
      value-format="yyyy-MM-dd HH:mm:ss">
      </el-date-picker>
      <el-date-picker
      v-model="editIteration.iterationEndTime"
      type="datetime"
      placeholder="迭代结束时间"
      value-format="yyyy-MM-dd HH:mm:ss">
      </el-date-picker>
      </el-row>>
      <span slot="footer" class="dialog-footer">
      <el-button @click="editIterationDialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="iterationEdit">确 定</el-button>
      </span>
</el-dialog>
    </el-row>
    </el-header>
    <!--迭代显示-->
    <el-table :data="iterationVOs" border="true" style="width: 100%" height="400">
     <el-table-column prop="iterationId" label="ID"  width="120"></el-table-column>
     <el-table-column prop="iterationName" label="名称" width="200"></el-table-column>
     <el-table-column prop="iterationState" label="状态"  width="120"></el-table-column>
     <el-table-column prop="iterationBeginTime"  label="开始时间"  width="150"></el-table-column>
     <el-table-column prop="iterationEndTime"  label="结束时间"  width="150"></el-table-column>
     <el-table-column label="操作" width="150">
      <template slot-scope="scope">
        <el-button size="mini" @click="editIterationDialog(scope.row)">编辑</el-button>
        <el-button size="mini" type="danger" @click="iterationDelete(scope.row)">删除</el-button>
      </template>
    </el-table-column>
    </el-table>
    </el-container>
</template>

<style>
</style>
<script>
import axios from 'axios'
export default {
  name: 'Iteration',
  mounted () {
    // 初始化界面获得所有任务的数据
    axios({
      url: 'http://47.97.196.50:8886/api/userNameForAll',
      method: 'get',
      params: {
        userName: '张俊杰4'
      }
    }).then(Response => {
      Response.data.data.forEach(element => {
        this.teamProjectId = element.teamProjectId
        console.log(this.teamProjectId)
        this.teamProjectName = element.teamProjectName
        console.log(this.teamProjectName)
        this.ExecutorVOs = element.userVOs
        console.log(this.userVOs)
        this.iterationVOs = element.iterationVOs
        console.log(this.iterationVOs)
      })
    })
  },
  data () {
    return {
      // 项目ID
      teamProjectId: '',
      // 项目名
      teamProjectName: '',
      // 迭代集合
      iterationVOs: [],
      // 执行人集合
      ExecutorVOs: [],
      // 新建迭代模型
      newIteration: {
        teamProjectId: '',
        iterationVOs: [{
          iterationState: '',
          iterationName: '',
          iterationBeginTime: ''
        }]
      },
      editIteration: {
        iterationId: '',
        iterationState: '',
        iterationName: '',
        iterationBeginTime: '',
        iterationEndTime: ''
      },
      // 任务状态
      iterationState: [{
        value: '未启动'
      }, {
        value: '准备中'
      }, {
        value: '执行中'
      }, {
        value: '测试中'
      }, {
        value: '已完成'
      }],
      // 新建迭代窗口是否可见
      newIterationDialogVisible: false,
      // 修改迭代窗口是否可见
      editIterationDialogVisible: false
    }
  },
  methods: {
    refresh () {
      axios({
        url: 'http://47.97.196.50:8886/api/userNameForAll',
        method: 'get',
        params: {
          userName: '张俊杰4'
        }
      }).then(Response => {
        Response.data.data.forEach(element => {
          this.teamProjectId = element.teamProjectId
          console.log(this.teamProjectId)
          this.teamProjectName = element.teamProjectName
          console.log(this.teamProjectName)
          this.ExecutorVOs = element.userVOs
          console.log(this.userVOs)
          this.iterationVOs = element.iterationVOs
          console.log(this.iterationVOs)
        })
      })
    },
    // 初始化新建任务窗口
    newIterationDialog () {
      this.newIteration.iterationVOs[0].iterationState = ''
      this.newIteration.iterationVOs[0].iterationState = ''
      this.newIteration.iterationVOs[0].iterationBeginTime = ''
      this.newIterationDialogVisible = true
    },
    newIterationMethod () {
      axios({
        url: 'http://47.97.196.50:8886/rest/iteration',
        method: 'post',
        data: {
          teamProjectId: this.teamProjectId,
          iterationVOs: [{
            iterationName: this.newIteration.iterationVOs[0].iterationName,
            iterationState: this.newIteration.iterationVOs[0].iterationState,
            iterationBeginTime: this.newIteration.iterationVOs[0].iterationBeginTime
          }]
        }
      }).then(Response => { this.refresh() })
      this.newIterationDialogVisible = false
    },
    iterationEdit () {
      axios({
        url: 'http://47.97.196.50:8886/rest/iteration',
        method: 'put',
        data: {
          iterationId: this.editIteration.iterationId,
          iterationState: this.editIteration.iterationState,
          iterationName: this.editIteration.iterationName,
          iterationBeginTime: this.editIteration.iterationBeginTime,
          iterationEndTime: this.editIteration.iterationEndTime
        }
      }).then(Response => { this.refresh() })
      this.editIterationDialogVisible = false
    },
    editIterationDialog (iteration) {
      this.editIteration.iterationId = iteration.iterationId
      this.editIteration.iterationState = iteration.iterationState
      this.editIteration.iterationName = iteration.iterationName
      this.editIteration.iterationBeginTime = iteration.iterationBeginTime
      this.editIteration.iterationEndTime = iteration.iterationEndTime
      this.editIterationDialogVisible = true
    },
    iterationDelete (iteration) {
      axios({
        url: 'http://47.97.196.50:8886/rest/iteration/' + iteration.iterationId,
        method: 'delete'
      }).then(Response => { this.refresh() })
    }
  }
}
</script>