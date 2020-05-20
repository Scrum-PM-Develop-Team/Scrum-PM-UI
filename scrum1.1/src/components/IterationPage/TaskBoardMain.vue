<template>
<el-container style="height: 500px; border: 1px solid #eee">
    <!--顶栏容器-->
    <el-header style="text-align: font-size: 12px">
    <el-row :gutter="20">
      <el-col :span="14"><div class="grid-content bg-purple">
      <el-button @click="newTaskMethod">增加任务</el-button></div></el-col>
      <el-col :span="10"><div class="grid-content bg-purple">
        <el-dropdown>
          <el-button>排序方式<i class="el-icon-arrow-down el-icon--right"></i></el-button>
          <!--菜单-->
          <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>按照创建时间最早<!--插入排序算法--></el-dropdown-item>
          <el-dropdown-item>按照创建时间最早<!--插入排序算法--></el-dropdown-item>
          <el-dropdown-item>按照开始时间最早<!--插入排序算法--></el-dropdown-item>
          <el-dropdown-item>按照开始时间最晚<!--插入排序算法--></el-dropdown-item>
          <el-dropdown-item>按照截止时间最近<!--插入排序算法--></el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown>
          <el-button>筛选<i class="el-icon-arrow-down el-icon--right"></i></el-button>
          <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>黄金糕</el-dropdown-item>
          <el-dropdown-item>狮子头</el-dropdown-item>
          <el-dropdown-item>螺蛳粉</el-dropdown-item>
          <el-dropdown-item>双皮奶</el-dropdown-item>
          <el-dropdown-item>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown>
          <el-button>表格<i class="el-icon-arrow-down el-icon--right"></i></el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item>双皮奶</el-dropdown-item>
            <el-dropdown-item>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div></el-col>
    </el-row>
    </el-header>
    <!--任务显示-->
    <el-table :data="taskVOs" border="true" style="width: 100%" height="400">
     <el-table-column prop="taskId" label="任务ID"  width="120"></el-table-column>
     <el-table-column prop="taskName" label="任务名称" width="120"></el-table-column>
     <el-table-column prop="taskRemark" label="任务标记"  width="120"></el-table-column>
     <el-table-column prop="taskState"  label="任务状态"  width="300"></el-table-column>
     <el-table-column prop="taskBeginTime"  label="任务开始时间"  width="120"></el-table-column>
     <el-table-column prop="taskEndTime"  label="任务截止时间"  width="120"></el-table-column>
     <el-table-column prop="endTime"  label="任务结束时间"  width="120"></el-table-column>
     <el-table-column prop="taskExecutor[userName]"  label="执行人"  width="120"></el-table-column>
    </el-table>
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
</style>

<script>
import axios from 'axios'
export default {
  name: 'TaskBoardMain',
  mounted () {
    // 初始化界面获得所有任务的数据
    axios({
      url: 'http://47.97.196.50:8886/rest/task',
      method: 'post',
      params: {

      }
    })
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
        this.userVOs = element.userVOs
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
      })
    })
  },
  data () {
    return {
      teamProjectId: '',
      teamProjectName: '',
      // 迭代集合
      iterationVOs: [],
      // 执行集合
      userVOs: [],
      // 任务集合
      taskVOs: [],
      // 临时存储新任务
      newtask: {
        iterationId: '',
        taskVOs: [{
          taskName: '',
          taskRemark: '',
          taskState: '',
          taskEndtime: Date,
          taskBegintime: Date,
          endEndtime: Date,
          taskPriorty: '',
          taskExcutor: {
            userId: ''
          }
        }]
      },
      newTaskDialogVisible: false,
      methods: {
        newTaskMethod () {
        }
      }
    }
  }
}
</script>
