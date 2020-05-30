<template>
    <div>
        <el-dialog
        title="编辑"
        :visible.sync="editProjectDialogVisible"
        width="30%">
        <el-row>
            <el-input placeholder="项目名"  v-model="tempProjectName" clearable></el-input>
        </el-row>
        <span slot="footer" class="dialog-footer">
            <el-button @click="editProjectCancel">取 消</el-button>
            <el-button type="primary" @click="editProjectConfirm">确 定</el-button>
        </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
    
}
</script>>