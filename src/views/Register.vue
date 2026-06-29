<template>
    <div class="register-page">
        <div class="register-card">

            <h2 class="text-center mb-4">
                Đăng ký tài khoản
            </h2>

            <div class="form-group">
                <label>Họ và tên</label>
                <input v-model="fullname" type="text" class="form-control" placeholder="Nhập họ và tên" />
            </div>


            <div class="form-group mt-3">
                <label>Username</label>
                <input v-model="username" type="text" class="form-control" placeholder="Nhập username" />
            </div>


            <div class="form-group mt-3">
                <label>Password</label>
                <input v-model="password" type="password" class="form-control" placeholder="Nhập password" />
            </div>


            <button class="btn btn-success w-100 mt-4" @click="register">
                Đăng ký
            </button>


            <p class="text-center mt-3">
                Đã có tài khoản?
                <router-link to="/login">
                    Đăng nhập
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
            fullname: "",
            username: "",
            password: ""
        }
    },


    methods: {

        async register() {

            if (!this.fullname || !this.username || !this.password) {

                alert("Vui lòng nhập đầy đủ thông tin");
                return;

            }


            try {

                await axios.post(
                    "http://localhost:3000/api/users/register",
                    {
                        fullname: this.fullname,
                        username: this.username,
                        password: this.password
                    }
                );


                alert("Đăng ký thành công");

                this.$router.push("/login");


            } catch (error) {

                alert("Username đã tồn tại hoặc đăng ký lỗi");

            }

        }

    }

}
</script>


<style scoped>
.register-page {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f2f4f7;
}

.register-card {
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