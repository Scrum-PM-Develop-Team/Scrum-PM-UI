<template>
    <el-card >
    <div class="header">
        <div class="left-header">
            <div>
                <el-dropdown @command="handleCommand1">
                    <span class="el-dropdown-link">
                      选择视图<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item command="board" style = "font-size: 18px">看板视图</el-dropdown-item>
                      <el-dropdown-item command="gantt" style = "font-size: 18px" divided>甘特图</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
            </div>
            <div>
                <el-dropdown  @command="handleCommand">
                    <span class="el-dropdown-link">
                      排序<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item command="close" style = "font-size: 18px">截止时间最近</el-dropdown-item>
                      <el-dropdown-item command="far" style = "font-size: 18px">截止时间最远</el-dropdown-item>
                      <el-dropdown-item command="highP" divided style = "font-size: 18px">优先级高</el-dropdown-item>
                      <el-dropdown-item command="lowP" style = "font-size: 18px">优先级低</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
            </div>
        </div>
    </div>

    <div id="body">
    <el-row :gutter="20" class='biggest'>
        <el-col :span="6" ><div class="grid-content bg-purple">
            <div class = 'state-title'>
                <div>
                    准备中
                </div>
                <div>
                    {{readyArray.length+"个"}}
                </div>
            </div>
            <draggable v-model="readyArray"  :move="checkMove" class = "drag1"    @end="end" group="all" :options="{ booleanchosenClass:'choose',animation:150}">
            <div v-for="task in readyArray" :key="task.id" class="card" >
               <el-card v-bind:class="task.taskId" v-bind:id="task.taskExecutor.userId+'in'+task.taskId">
                    <div slot="header" class="clearfix" >
                        <span class='taskName'>{{task.taskRemark}}</span>
                        <span class='userName' type="text">{{task.taskExecutor.userName}}</span>
                    </div>
                    <div class="date">
                        {{task.taskBeginTime.slice(0,10)+" ~ "+task.taskEndTime.slice(0,10)}}
                    </div>
                    <div class = "priority" v-bind:id="task.taskPriority">
                        <span >{{'优先级：'}}</span><span >{{task.taskPriority}}</span>
                    </div>
                </el-card>
            </div>
            </draggable>
            
        </div></el-col>

        <el-col :span="6"><div class="grid-content bg-purple">
            <div class = 'state-title'>
                <div>
                    执行中
                </div>
                <div>
                    {{doningArray.length+"个"}}
                </div>
            </div>
            <draggable v-model="doningArray"  :move="checkMove" class = "drag2"   @end="end" group="all" :options="{ booleanchosenClass:'choose',animation:150}">
            <div v-for="task in doningArray" :key="task.id" class="card" >
               <el-card v-bind:class="task.taskId" v-bind:id="task.taskExecutor.userId+'in'+task.taskId">
                    <div slot="header" class="clearfix" >
                        <span class='taskName'>{{task.taskRemark}}</span>
                        <span class='userName' type="text">{{task.taskExecutor.userName}}</span>
                    </div>
                    <div class="date">
                        {{task.taskBeginTime.slice(0,10)+" ~ "+task.taskEndTime.slice(0,10)}}
                    </div>
                    <div class = "priority" v-bind:id="task.taskPriority">
                        <span >{{'优先级：'}}</span><span >{{task.taskPriority}}</span>
                    </div>
                </el-card>
            </div>
            </draggable>
        </div></el-col>
    
        <el-col :span="6"><div class="grid-content bg-purple">
            <div class = 'state-title'>
                <div>
                    测试中
                </div>
                <div>
                    {{testingArray.length+"个"}}
                </div>
            </div>
             <draggable v-model="testingArray" :move="checkMove" class = "drag3"   @end="end" group="all" :options="{ booleanchosenClass:'choose',animation:150}">
            <div v-for="task in testingArray" :key="task.id" class="card" >
                <el-card v-bind:class="task.taskId" v-bind:id="task.taskExecutor.userId+'in'+task.taskId">
                    <div slot="header" class="clearfix" >
                        <span class='taskName'>{{task.taskRemark}}</span>
                        <span class='userName' type="text">{{task.taskExecutor.userName}}</span>
                    </div>
                    <div class="date">
                        {{task.taskBeginTime.slice(0,10)+" ~ "+task.taskEndTime.slice(0,10)}}
                    </div>
                    <div class = "priority" v-bind:id="task.taskPriority">
                        <span >{{'优先级：'}}</span><span >{{task.taskPriority}}</span>
                    </div>
                </el-card>
            </div>
            </draggable>
        </div></el-col>

        <el-col :span="6"><div class="grid-content bg-purple">
            <div class = 'state-title'>
                <div>
                    已完成
                </div>
                <div>
                    {{doneArray.length+"个"}}
                </div>
            </div>
            <draggable v-model="doneArray"  :move="checkMove" class = "drag4"   @end="end" group="all" :options="{ booleanchosenClass:'choose',animation:150}">
            <div v-for="task in doneArray" :key="task.id"   class="card">
               <el-card v-bind:class="task.taskId" v-bind:id="task.taskExecutor.userId+'in'+task.taskId">
                    <div slot="header" class="clearfix" >
                        <span class='taskName'>{{task.taskRemark}}</span>
                        <span class='userName' type="text">{{task.taskExecutor.userName}}</span>
                    </div>
                    <div class="date">
                        {{task.taskBeginTime.slice(0,10)+" ~ "+task.taskEndTime.slice(0,10)}}
                    </div>
                    <div class = "priority" v-bind:id="task.taskPriority">
                        <span >{{'优先级：'}}</span><span >{{task.taskPriority}}</span>
                    </div>
                </el-card>
            </div>
            </draggable>
        </div></el-col>
    </el-row>      
    </div>
    </el-card>
</template>

<script>
import draggable from 'vuedraggable'
import {mapState,mapGetters} from 'Vuex'
export default {
    name: 'board',
    data () {
      return {
        visible: false,
        allTaskArray:[],
        readyArray:[],
        doningArray:[],
        testingArray:[],
        doneArray:[],
        priorityId:""
      }
    },
    computed:{
        ...mapState('login',['userInfo']),  
         ...mapGetters(['currentProject'])
   },
    components: {
            draggable
        },
    mounted () {
    this.$axios
    .get('/api/userNameForAll?userName='+'张俊杰4')
         .then(response => {
              //console.log(this.userInfo.userName)      
              //console.log(this.currentProject.teamProjectId)      
          let project = response.data.data.filter(a=>a.teamProjectId ==2)
          let iteration = project[0].iterationVOs.filter(function(b){
              return b.iterationState=="执行中"
          })
         console.log( iteration[0])
          this.allTaskArray = iteration[0].taskVOs
          for (let i = 0; i < this.allTaskArray.length; i++) { 
              if(this.allTaskArray[i].taskState=='准备中'){this.readyArray.push(this.allTaskArray[i])}
              if(this.allTaskArray[i].taskState=='执行中'){this.doningArray.push(this.allTaskArray[i])}
              if(this.allTaskArray[i].taskState=='测试中'){this.testingArray.push(this.allTaskArray[i])}
              if(this.allTaskArray[i].taskState=='已完成'){this.doneArray.push(this.allTaskArray[i])}
            }
            //console.log(this.allTaskArray[0].taskEndTime.slice(0,10))
        })
        .catch(function (error) {
        console.log(error)
      })
     },
    methods:{
       
        end(evt){
            //console.log(evt.item.firstElementChild.id)
            let reg =/\d+/g
            let idArray=evt.item.firstElementChild.id.match(reg)
            let tempId = Number(idArray[1])
            console.log("array  "+idArray)
            console.log(idArray[1])
            {let tempState = "准备中"
            if(evt.to.className=="drag1"){ tempState = "准备中"}
            if(evt.to.className=="drag2"){ tempState = "执行中"}
            if(evt.to.className=="drag3"){ tempState = "测试中"}
            if(evt.to.className=="drag4"){ tempState = "已完成"}
            //console.log(evt.to.className)
            //console.log(task)
            this.$axios.put('/api/task',{"taskId":tempId,"taskState":tempState }).then((response) =>{
             console.log(response)})
        }
    },
         highPSort(a,b){
             if(a.taskPriority=='紧急'||(a.taskPriority=='一般'&&b.taskPriority=='较低'))return 1
             else if(b.taskPriority=='紧急'||(b.taskPriority=='一般'&&a.taskPriority=='较低'))return-1
             else if(a.taskPriority==b.taskPriority)return 0
         },
         lowPSort(a,b){
             if(a.taskPriority=='紧急'||(a.taskPriority=='一般'&&b.taskPriority=='较低'))return -1
             else if(b.taskPriority=='紧急'||(b.taskPriority=='一般'&&a.taskPriority=='较低'))return 1
             else if(a.taskPriority==b.taskPriority)return 0
         },
        handleCommand(command) {
         switch(command){
             case 'close':
                this.readyArray.sort(function(a,b){  return new Date(a.taskEndTime) - new Date(b.taskEndTime)})
                this.doningArray.sort(function(a,b){return new Date(a.taskEndTime) - new Date(b.taskEndTime)})
                this.testingArray.sort(function(a,b){return new Date(a.taskEndTime) - new Date(b.taskEndTime)})
                this.doneArray.sort(function(a,b){return new Date(a.taskEndTime) - new Date(b.taskEndTime)})
                break
            case 'far':
                this.readyArray.sort(function(a,b){ return new Date(b.taskEndTime) - new Date(a.taskEndTime)})
                this.doningArray.sort(function(a,b){return new Date(b.taskEndTime) - new Date(a.taskEndTime)})
                this.testingArray.sort(function(a,b){return new Date(b.taskEndTime) - new Date(a.taskEndTime)})
                this.doneArray.sort(function(a,b){return new Date(b.taskEndTime) - new Date(a.taskEndTime)})
                break
            case 'highP':
                this.readyArray.sort((a,b)=>{return this.lowPSort(a,b)})
                this.doningArray.sort((a,b)=>{return this.lowPSort(a,b)})
                this.testingArray.sort( (a,b)=>{return this.lowPSort(a,b)})
                this.doneArray.sort((a,b)=>{return this.lowPSort(a,b)})
                break
             case 'lowP':
                this.readyArray.sort((a,b)=>{return this.highPSort(a,b)})
                this.doningArray.sort((a,b)=>{return this.highPSort(a,b)})
                this.testingArray.sort( (a,b)=>{return this.highPSort(a,b)})
                this.doneArray.sort((a,b)=>{return this.highPSort(a,b)})
                break
         }
      },
      handleCommand1(command){
          switch(command){
              case 'board':
                  this.$router.push('/TaskBoard')
                    break;
              case 'gantt':
                  this.$router.push('/Gantt')
                    break;
          }
      },
        checkMove(evt){
           let reg2 =/\d+/g
           let idArray2=evt.dragged.firstElementChild.id.match(reg2)
           let userId = idArray2[0]
           let bool =userId == this.userInfo.userId
           console.log("aaaaaaa  "+idArray2[0]+"  sdfdfd")
            console.log("dangqian"+this.userInfo.userId)
           if(bool==false){
               console.log(bool)
               this.$alert('注意：只能改变自己负责任务的状态！', {
          confirmButtonText: '确定'})             
           }
           return (bool)
      }
            
  }}
</script>

<style scoped>
    #body{
        width: 1300px;
        margin: 20px auto;
    }
    /* .container{
        width: 1500px;
        margin: 0 auto;
    } */
    .biggest{
        padding-right:40px;
    }
    .taskName{        
        font-size: 20px;
        font-family: "Microsoft JhengHei";
        font-weight: bold ;
        
    }
    .priority{
        float:left; 
        padding-top: 0px;
        padding-bottom: 12px;
    }
    #紧急{       
        background-color:rgba(236, 59, 59, 0.4);
        color: rgb(10, 10, 10);
        border-radius: 10px;
        display:inline; height:26px; line-height:25px; padding:4px; margin-bottom: 10px;
    }
    #一般{       
        background-color:rgba(59, 186, 236, 0.4);
        color: rgb(10, 10, 10);
        border-radius: 10px;
        display:inline; height:26px; line-height:25px; padding:4px; margin-bottom: 10px;
    }
    #较低{       
        background-color:rgba(185, 178, 178, 0.4);
        color: rgb(10, 10, 10);
        border-radius: 10px;
        display:inline; height:26px; line-height:25px; padding:4px; margin-bottom: 10px;
    }
    .date{
        float:left; 
        padding-top: 0px;
        padding-bottom: 10px;
    }
    .userName{
        float: right;  
        background: rgb(169, 205, 230) ; 
        color: #777;
        border-radius: 20px;
        display:inline; height:26px; line-height:25px; padding:4px;
    }
    .el-dropdown-link{
        font-size: 20px;
    }
    .header{
        width: 1300px;
        margin: 5px auto;
        height: 40px;
        /* border: 1px solid rgb(29, 10, 46); */
    }
    .left-header{
        width: 240px;
        height: 40px;
        /* border: 6px solid green; */
        float: left;
    }
    .left-header>div:first-child{
        float: left;
        padding: 8px 8px 8px 0px;
    }
    .left-header>div:last-child{
        float: right;
        padding: 8px 8px 8px 0px;
    }
    .card{
        margin: 10px;
        padding-bottom: 20px;
        width: auto;
        height: auto;
    }
    
    .state-title{
        font-size: 20px;
        margin: auto;
        padding: 5px;
        height: 20px;
        width:120px;
    
    }
    .state-title>div:first-child{
        float: left;
    }
    .state-title>div:last-child{
        float: right;
    }
    .el-row {
      margin-bottom: 80px;
     
    }
    .el-col {
      border-radius: 70px;
    }
    .bg-purple-dark {
      background: #99a9bf;
    }
    .bg-purple {
      background: #d3dce6;
    }
    .bg-purple-light {
      background: #e5e9f2;
    }   
    .grid-content {
      border-radius: 20px;
      min-height: 36px;
    }
  </style>