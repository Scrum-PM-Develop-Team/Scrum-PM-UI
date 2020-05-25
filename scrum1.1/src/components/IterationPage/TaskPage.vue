<template>
<el-container style="height: 500px; border: 1px solid #eee">
    <!--顶栏容器-->
    <el-header style="text-align: font-size: 12px">
      <el-row :gutter="20">
        <el-col :span="2" :offset="22"><div class="grid-content bg-purple">
          <el-button @click="newTaskDialog" type="primary" icon="el-icon-plus" circle ></el-button></div></el-col>
      </el-row>
      <!--增加任务的弹框-->
    <el-dialog
      title="增加任务"
      :visible.sync="newTaskDialogVisible"
      width="70%">
      <el-row><el-select v-model="newtask.iterationId" placeholder="选择属于的迭代">
      <el-option
        v-for="item in iterationVOs"
        :key="item.iterationId"
        :label="item.iterationName"
        :value="item.iterationId">
      </el-option>
      </el-select></el-row>
      <el-row><el-input placeholder="任务名"  v-model="newtask.taskVOs[0].taskName" clearable></el-input></el-row>
      <el-row><el-input placeholder="任务详情"  v-model="newtask.taskVOs[0].taskRemark" clearable></el-input></el-row>
      <el-row><el-select v-model="newtask.taskVOs[0].taskState" placeholder="任务状态">
      <el-option
        v-for="item in taskState"
        :key="item.value"
        :label="item.value"
        :value="item.value">
      </el-option>
      </el-select></el-row>
      <el-row>
      <el-date-picker
      v-model="newtask.taskVOs[0].taskBeginTime"
      type="datetime"
      placeholder="任务开始时间"
      value-format="yyyy-MM-dd HH:mm:ss">
      </el-date-picker>
      <el-date-picker
      v-model="newtask.taskVOs[0].taskEndTime"
      type="datetime"
      placeholder="任务截止时间"
      value-format="yyyy-MM-dd HH:mm:ss">
      </el-date-picker>
      </el-row>
      <el-row>
      <el-select v-model="newtask.taskVOs[0].taskPriority" placeholder="任务紧急度">
      <el-option
        v-for="item in taskPriority"
        :key="item.value"
        :label="item.value"
        :value="item.value">
      </el-option>
      </el-select>
      </el-row>
      <el-row>
      <el-select v-model="newtask.taskVOs[0].taskExecutor.userId" placeholder="执行人">
      <el-option
        v-for="item in ExecutorVOs"
        :key="item.userId"
        :label="item.userName"
        :value="item.userId">
      </el-option>
      </el-select>
      </el-row>
      <span slot="footer" class="dialog-footer">
      <el-button @click="newTaskDialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="newTaskMethod">确 定</el-button>
      </span>
</el-dialog>
<!--修改任务的弹框-->
 <el-dialog
      title="修改任务"
      :visible.sync="editTaskDialogVisible"
      width="70%">
      <el-row><el-input placeholder="任务名"  v-model="editTask.taskName" clearable></el-input></el-row>
      <el-row><el-input placeholder="任务详情"  v-model="editTask.taskRemark" clearable></el-input></el-row>
      <el-row><el-select v-model="editTask.taskState" placeholder="任务状态">
      <el-option
        v-for="item in taskState"
        :key="item.value"
        :label="item.value"
        :value="item.value">
      </el-option>
      </el-select></el-row>
      <el-row>
      <el-date-picker
      v-model="editTask.taskBeginTime"
      type="datetime"
      placeholder="任务开始时间"
      value-format="yyyy-MM-dd HH:mm:ss">
      </el-date-picker>
      <el-date-picker
      v-model="editTask.taskEndTime"
      type="datetime"
      placeholder="任务截止时间"
      value-format="yyyy-MM-dd HH:mm:ss">
      </el-date-picker>
       <el-date-picker
      v-model="editTask.endTime"
      type="datetime"
      placeholder="任务结束时间"
      value-format="yyyy-MM-dd HH:mm:ss"
      clearable>
      </el-date-picker>
      </el-row>
      <el-row>
      <el-select v-model="editTask.taskPriority" placeholder="任务紧急度">
      <el-option
        v-for="item in taskPriority"
        :key="item.value"
        :label="item.value"
        :value="item.value">
      </el-option>
      </el-select>
      </el-row>
      <el-row>
      <el-select v-model="editTask.taskExecutor.userId" placeholder="执行人">
      <el-option
        v-for="item in ExecutorVOs"
        :key="item.userId"
        :label="item.userName"
        :value="item.userId">
      </el-option>
      </el-select>
      </el-row>
      <span slot="footer" class="dialog-footer">
      <el-button @click="editTaskDialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="taskEdit">确 定</el-button>
      </span>
</el-dialog>
    </el-header>
    <!--任务显示-->
    <el-table ref="multipleTable" tooltip-effect="dark" :data="taskVOs.slice((currentPage-1)*pagesize,currentPage*pagesize)"
     style="width: 100%"  height="500px">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="任务ID"><span>{{ props.row.taskId }}</span></el-form-item>
          <el-form-item label="任务名称"><span>{{ props.row.taskName }}</span></el-form-item>
          <el-form-item label="任务详情"><span>{{ props.row.taskRemark }}</span></el-form-item>
          <el-form-item label="任务状态"><span>{{ props.row.taskState }}</span></el-form-item>
          <el-form-item label="任务紧急度"><span>{{ props.row.taskPriority }}</span></el-form-item>
          <el-form-item label="任务执行人"><span>{{ props.row.taskExecutor[userName] }}</span></el-form-item>
          <el-form-item label="任务开始时间"><span>{{ props.row.taskBeginTime }}</span></el-form-item>
          <el-form-item label="任务截止时间"><span>{{ props.row.taskEndTime }}</span></el-form-item>
          <el-form-item label="任务结束时间"><span>{{ props.row.endTime }}</span></el-form-item>
        </el-form>
        </template>
    </el-table-column>
    <el-table-column label="任务ID" prop="taskId"></el-table-column>
    <el-table-column label="任务名称" prop="taskName"></el-table-column>
    <el-table-column label="任务状态" prop="taskState"></el-table-column>
    <el-table-column label="紧急度" prop="taskPriority"></el-table-column>
    <el-table-column label="截止时间" prop="taskEndTime"></el-table-column>
    <el-table-column>
      <template slot-scope="scope">
      <el-button size="mini" @click="editTaskDialog(scope.row)">编辑</el-button>
      <el-button size="mini" type="danger" @click="taskDelete(scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
   <div style="text-align: center;margin-top: 30px;">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="total"
        @current-change="currentChange"
        :current-page="currentPage"
        :page-size="pagesize">
      </el-pagination>
    </div>
    </el-container>
</template>

<style>
  .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
   .el-main {
    background-color: #F5F5F5;
  }
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 100px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>

<script>
import axios from 'axios'
export default {
  name: 'TaskBoardMain',
  mounted () {
    // 初始化界面获得所有任务的数据
    axios({
      url: 'http://47.97.196.50:8886/api/userNameForAll',
      method: 'get',
      params: {
        userName: '张俊杰4'
      }
    }).then(Response => {
      var temdate = []
      Response.data.data.forEach(element => {
        this.teamProjectId = element.teamProjectId
        console.log(this.teamProjectId)
        this.teamProjectName = element.teamProjectName
        console.log(this.teamProjectName)
        this.ExecutorVOs = element.userVOs
        console.log(this.userVOs)
        this.iterationVOs = element.iterationVOs
        console.log(this.iterationVOs)
        element.iterationVOs.forEach(iteration => {
          iteration.taskVOs.forEach(task => {
            temdate.push(task)
          })
        })
        this.taskVOs = temdate
        console.log(this.taskVOs)
        this.total = this.taskVOs.length
      })
    })
  },
  data () {
    return {
      teamProjectId: '',
      teamProjectName: '',
      // 迭代集合
      iterationVOs: [],
      // 执行人集合
      ExecutorVOs: [],
      // 任务集合
      taskVOs: [],
      // 临时存储新任务
      newtask: {
        iterationId: '',
        taskVOs: [{
          taskName: '',
          taskRemark: '',
          taskState: '',
          taskEndTime: '',
          taskBeginTime: '',
          endTime: '',
          taskPriority: '',
          taskExecutor: {
            userId: ''
          }
        }]
      },
      // 编辑任务模板
      editTask: {
        taskId: '',
        taskName: '',
        taskRemark: '',
        taskState: '',
        taskEndTime: '',
        taskBeginTime: '',
        endTime: '',
        taskPriority: '',
        taskExecutor: {
          userId: ''
        }
      },
      // 任务优先级
      taskPriority: [{
        value: '较低'
      }, {
        value: '一般'
      }, {
        value: '紧急'
      }],
      // 任务状态
      taskState: [{
        value: '未开始'
      }, {
        value: '准备中'
      }, {
        value: '执行中'
      }, {
        value: '测试中'
      }, {
        value: '已完成'
      }],
      newTaskDialogVisible: false,
      editTaskDialogVisible: false,
      multipleSelection: [],
      pagesize:6,
      currentPage:1,
      total: 0
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
        var temdate = []
        Response.data.data.forEach(element => {
          this.teamProjectId = element.teamProjectId
          console.log(this.teamProjectId)
          this.teamProjectName = element.teamProjectName
          console.log(this.teamProjectName)
          this.ExecutorVOs = element.userVOs
          console.log(this.userVOs)
          this.iterationVOs = element.iterationVOs
          console.log(this.iterationVOs)
          element.iterationVOs.forEach(iteration => {
            iteration.taskVOs.forEach(task => {
              temdate.push(task)
            })
          })
          this.taskVOs = temdate
          this.total = this.taskVOs.length
          console.log(this.taskVOs)
        })
      })
    },
    // 初始化新建任务窗口
    newTaskDialog () {
      this.newtask.taskVOs[0].taskName = ''
      this.newtask.taskVOs[0].taskRemark = ''
      this.newtask.taskVOs[0].taskState = ''
      this.newtask.taskVOs[0].taskEndTime = ''
      this.newtask.taskVOs[0].taskBeginTime = ''
      this.newtask.taskVOs[0].endTime = ''
      this.newtask.taskVOs[0].taskPriority = ''
      this.newtask.taskVOs[0].taskExecutor.userId = ''
      this.newTaskDialogVisible = true
    },
    newTaskMethod () {
      axios({
        url: 'http://47.97.196.50:8886/rest/task',
        method: 'post',
        data: {
          iterationId: this.newtask.iterationId,
          taskVOs: [{
            taskName: this.newtask.taskVOs[0].taskName,
            taskRemark: this.newtask.taskVOs[0].taskRemark,
            taskState: this.newtask.taskVOs[0].taskState,
            taskEndTime: this.newtask.taskVOs[0].taskEndTime,
            taskBeginTime: this.newtask.taskVOs[0].taskBeginTime,
            endTime: null,
            taskPriority: this.newtask.taskVOs[0].taskPriority,
            taskExecutor: {
              userId: this.newtask.taskVOs[0].taskExecutor.userId
            }
          }]
        }
      }).then(Response => { this.refresh() })
      this.newTaskDialogVisible = false
    },
    editTaskDialog (task) {
      this.editTask.taskId = task.taskId
      this.editTask.taskName = task.taskName
      this.editTask.taskRemark = task.taskRemark
      this.editTask.taskState = task.taskState
      this.editTask.taskEndTime = task.taskEndTime
      this.editTask.taskBeginTime = task.taskBeginTime
      this.editTask.endTime = task.endTime
      this.editTask.taskPriority = task.taskPriority
      this.editTask.taskExecutor.userId = task.taskExecutor.userId
      this.editTaskDialogVisible = true
    },
    taskEdit () {
      axios({
        url: 'http://47.97.196.50:8886/rest/task',
        method: 'put',
        data: {
          taskId: this.editTask.taskId,
          taskName: this.editTask.taskName,
          taskRemark: this.editTask.taskRemark,
          taskState: this.editTask.taskState,
          taskEndTime: this.editTask.taskEndTime,
          taskBeginTime: this.editTask.taskBeginTime,
          endTime: this.editTask.endTime,
          taskPriority: this.editTask.taskPriority,
          taskExecutor: {
            userId: this.editTask.taskExecutor.userId
          }
        }
      }).then(Response => { this.refresh() })
      this.editTaskDialogVisible = false
    },
    taskDelete (task) {
      axios({
        url: 'http://47.97.196.50:8886/rest/task/' + task.taskId,
        method: 'delete'
      }).then(Response => { this.refresh() })
    },
    currentChange:function(currentPage){
        this.currentPage = currentPage;
      }
  }
}
</script>