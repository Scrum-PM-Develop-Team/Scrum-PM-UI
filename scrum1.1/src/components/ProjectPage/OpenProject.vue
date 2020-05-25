<template>
    <div>
    <el-table>
        <el-table-column fixed prop="date" label="项目" width="100"></el-table-column>
        <el-table-column prop="name" label="角色" width="100"></el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
            <template>
            <el-button type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
            </template>
        </el-table-column>
    </el-table>
    </div>
</template>

<script>
export default {

}
</script>>