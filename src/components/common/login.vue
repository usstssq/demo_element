<template>
    <div>
        <span @click="centerDialogVisible = true">
            <!-- <i class="el-icon-user-solid"></i> -->
            登录
        </span>
        <el-dialog
            title="提示"
            :visible.sync="centerDialogVisible"
            width="30%"
            center>
            <el-form ref="form" :model="form" label-width="60px">
                <el-form-item label="用户名">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pass">
                    <el-input type="password" v-model="form.pass" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>            
            <span slot="footer" class="dialog-footer">
                <el-button @click="centerDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="loginf">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { Dialog } from 'element-ui';
    import 'element-ui/lib/theme-chalk/index.css';

    Vue.use(Dialog);

    export default {
        name: 'comLogin',
        data() {
            return {
                centerDialogVisible: false,
                form: {
                    name: '',
                    pass: ''
                }
            };
        },
        methods: {
            loginf() {
                getCountryInfo().then((countryInfo) => {
                    this.country_info_content = countryInfo.country_info_content,
                    this.countryin_info_title = countryInfo.title
                })
            }
        }
    };
</script>
<style>
    .el-header, 
    .el-footer {
        background-color: #5284E6;
        color: #fff;
        text-align: center;
        line-height: 60px;
    }
</style>


