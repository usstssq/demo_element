<template>
    <div>
        <span v-if = "!loginUserNameVisible" @click="centerDialogVisible = true">
            <!-- <i class="el-icon-user-solid"></i> -->
            登录
        </span>
        <span v-if="loginUserNameVisible">{{ruleForm.name}}</span>
        <el-dialog
            title="登录"
            :visible.sync="centerDialogVisible"
            width="30%"
            center>
            <el-form :model="ruleForm" ref="ruleForm" :rules="rules" label-width="60px">
                <el-form-item label="用户名">
                    <el-input v-model="ruleForm.name" placeholder="登录名/手机号/邮箱"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pass">
                    <el-input type="password" v-model="ruleForm.pass" placeholder="密码" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div class="sp-item">
                <a class="find_pwd" href="http://www.baidu.com"> 忘记密码 </a>
                <a class="registe" href="http://www.bing.com"> 没有账号,立即注册> </a>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="centerDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="submitForm('ruleForm')">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { Dialog } from 'element-ui';
    import { login } from '~/api/index.js';
    import 'element-ui/lib/theme-chalk/index.css';
    import { validateStatus } from '~/api/index.js'
    let storage=window.localStorage;
    Vue.use(Dialog);

    export default {
        name: 'comLogin',
        data() {
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.ruleForm.checkPass !== '') {
                        this.$refs.ruleForm.validateField('checkPass');
                    }
                    callback();
                }
            };
            return {
                centerDialogVisible: false,
                loginUserNameVisible: false,
                loginBtnVisible: true,
                ruleForm: {
                    name: '',
                    pass: ''
                },
                rules: {
                    pass: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                }
            };
        },
        created() {
            this._validateStatus()
        },
        methods: {
            _validateStatus(){
                if(storage.token){
                    let url = "api/validateStatus",
                        param = {
                            "token":storage.token
                        }
                    validateStatus(url,param).then((result)=>{
                        if(result.status==0){
                            this.ruleForm.name = storage.username;
                            this.centerDialogVisible = false;
                            this.loginUserNameVisible = true;
                        }
                    })
                }
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        let url = "api/login",
                            user_name = this.ruleForm.name,
                            pwd = this.ruleForm.pass,
                            param = {
                                username: user_name,
                                pwd: pwd
                            };
                        login(url,param).then((loginInfo)=>{
                            storage["token"] = loginInfo.token;
                            storage["username"] = user_name;
                            this.centerDialogVisible = false;
                            this.loginUserNameVisible = true;
                        })
                        // alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            }
        }
    };
</script>
<style>
    .sp-item a{
        font: 14px/18px 'microsoft yahei';
        text-decoration: none;
    }
    .registe{
        color: #409EFF;
        float: right;        
    }
    .registe:hover{
        text-decoration: underline;
    }
    .find_pwd:hover{
        text-decoration: underline;
    }
    .registe a:focus{
        outline: none;
    }
    .find_pwd a:focus{
        outline: none;
    }
    .find_pwd{
        color: #575757;
        float: left;
    }
    .el-header, 
    .el-footer {
        background-color: #5284E6;
        color: #fff;
        text-align: center;
        line-height: 60px;
    }
</style>


