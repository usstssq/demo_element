<template>
    <div>
        <v-header></v-header>
        <div class="htmlBody">
            <el-row>
                <el-col :span="8">
                    <el-upload
                        class="upload-demo"
                        ref="upload"
                        action="api/upload_data"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :file-list="fileList"
                        :before-upload="handleUpload"
                        :auto-upload="false">
                        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                        <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
                        <div slot="tip" class="el-upload__tip">只能上传xlsx/xls文件，且不超过5MB</div>
                    </el-upload>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import { Row, Col, } from 'element-ui'
    import vHeader from '~/components/common/header.vue'
    import { getCompanyDetail } from '~/api/index.js'

    Vue.use(Row);
    Vue.use(Col);

    export default {
        name: 'upload_data',
        components: {
            vHeader
        },
        data(){
            return {
                fileList: [
                ]
            }
        },
        methods: {
            submitUpload() {
                this.$refs.upload.submit();
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            },
            handleUpload(file){
                this.fileList.push({
                    name:file.name
                })
                console.log(file)
            }
        }
    }

</script>

<style>
    .htmlBody{
        min-width:576px;
        margin:20px 80px;
    }
</style>






