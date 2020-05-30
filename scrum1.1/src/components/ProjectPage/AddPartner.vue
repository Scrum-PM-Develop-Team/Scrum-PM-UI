<template>
    <el-row :gutter="20">
        <el-col :span="9">
        <el-input v-model="form.parternerName"></el-input>
        </el-col>
        <el-col :span="8">
        <el-select v-model="form.parternerState" placeholder="参与者角色">
            <el-option label="队长" value="队长"></el-option>
            <el-option label="队员" value="队员"></el-option>
        </el-select>
        </el-col>
        <el-col :span="3">
        <el-button round @click="onSubmit">添加</el-button>
        </el-col>
    </el-row>
</template>