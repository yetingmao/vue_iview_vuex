<style lang="less">
@import "../styles/page/login";
</style>

<template>
  <div class="login" @keydown.enter="handleSubmit">
    <div class="login_con">
      <Card :bordered="false">
        <p slot="title">
          <Icon type="log-in"></Icon>欢迎使用
        </p>
        <div class="form_con">
          <Tabs>
            <TabPane label="登录" name="login">
              <Form ref="loginForm" :model="form" :rules="rules">
                <FormItem prop="userName">
                  <Input v-model="form.userName" placeholder="请输入用户名">
                    <span slot="prepend">
                      <Icon :size="16" type="ios-person"></Icon>
                    </span>
                  </Input>
                </FormItem>
                <FormItem prop="password">
                  <Input type="password" v-model="form.password" placeholder="请输入密码">
                    <span slot="prepend">
                      <Icon :size="16" type="ios-lock"></Icon>
                    </span>
                  </Input>
                </FormItem>
                <FormItem>
                  <Button @click="handleSubmit" type="primary" long>登录</Button>
                </FormItem>
              </Form>
            </TabPane>
          </Tabs>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import Cookies from "js-cookie";
import JSEncrypt from "jsencrypt";
import { getRsa, login } from "../api";

export default {
  data() {
    return {
      form: {
        userName: "",
        password: ""
      },
      rules: {
        userName: [
          { required: true, message: "用户名不能为空", trigger: "blur" }
        ],
        password: [{ required: true, message: "密码不能为空", trigger: "blur" }]
      }
    };
  },
  mounted() {},
  methods: {
    handleSubmit() {
      this.$refs.loginForm.validate(async valid => {
        if (valid) {
          const postData = {
            username: this.form.userName,
            password: this.form.password
          };
          const data = await login(postData);
          const { token, user } = data;
          const expireDays = token.expires / 60 / 60 / 24;
          Cookies.set(token.key, token.value, {
            expires: expireDays
          });
          Cookies.set("tag", token.key);
          this.$store.commit("setUserId", user.uid);
          localStorage.setItem("setUserId", user.uid);
          localStorage.setItem("menu", user.menu);
          // this.$router.push({
          //   name: "home_index"
          // });
        }
      });
    }
  }
};
</script>
