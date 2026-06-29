<template>
    <div class="login-page">

        <div class="login-card">

            <h2 class="text-center mb-4">
                Đăng nhập
            </h2>


            <div class="form-group">

                <label>
                    Username
                </label>

                <input v-model="username" type="text" class="form-control" placeholder="Nhập username" />

            </div>



            <div class="form-group mt-3">

                <label>
                    Password
                </label>

                <input v-model="password" type="password" class="form-control" placeholder="Nhập password" />

            </div>



            <button class="btn btn-primary w-100 mt-4" @click="login">

                Đăng nhập

            </button>

            <p class="text-center mt-3">

                Chưa có tài khoản?

                <router-link to="/register">
                    Đăng ký ngay
                </router-link>

            </p>

        </div>

    </div>
</template>

<script>
import axios from "axios";

export default {

    data() {

        return {

            username: "",
            password: ""

        }

    },

    methods: {

        async login() {


            if (!this.username || !this.password) {

                alert("Vui lòng nhập đầy đủ thông tin");

                return;

            }

            try {

                const res = await axios.post(

                    "http://localhost:3000/api/users/login",

                    {

                        username: this.username,

                        password: this.password

                    }

                );

                localStorage.setItem(

                    "user",

                    JSON.stringify(res.data.user)

                );



                this.$router.push("/");

            } catch (error) {


                alert(
                    "Sai username hoặc password"
                );

            }

        }

    }   

}

</script>

<style scoped>
.login-page {

    height: 100vh;

    display: flex;

    justify-content: center;

    align-items: center;

    background: #f2f4f7;

}

.login-card {

    width: 400px;

    padding: 35px;

    background: white;

    border-radius: 15px;

    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);

}

label {

    font-weight: 600;

}

input {

    height: 45px;

}

button {

    height: 45px;

    font-size: 16px;

}

a {

    text-decoration: none;

}
</style>