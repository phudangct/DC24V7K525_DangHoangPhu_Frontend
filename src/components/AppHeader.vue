<template>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
        <a href="/" class="navbar-brand">
            Ứng dụng Quản lý danh bạ
        </a>
        <div class="mr-auto navbar-nav">
            <li class="nav-item">
                <router-link :to="{ name: 'contactbook' }" class="nav-link">
                    Danh bạ
                    <i class="fas fa-address-book"></i>
                </router-link>
            </li>
        </div>
        <div class="navbar-nav">
            <li class="nav-item">
                <button class="btn btn-danger btn-sm" @click="logout">
                    Đăng xuất
                    <i class="fas fa-sign-out-alt"></i>
                </button>
            </li>
        </div>
    </nav>
</template>
<script>
export default {
    methods: {
        logout() {
            localStorage.removeItem("user");
            this.$router.push({
                name: "login"
            });
        }
    }
}
</script>