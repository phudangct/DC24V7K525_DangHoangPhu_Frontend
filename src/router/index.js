import { createWebHistory, createRouter } from "vue-router";

import ContactBook from "@/views/ContactBook.vue";

const routes = [
  // trang đăng nhập
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login.vue"),
  },

  // trang đăng ký
  {
    path: "/register",
    name: "register",
    component: () => import("@/views/Register.vue"),
  },

  // trang chủ
  {
    path: "/",
    name: "contactbook",
    component: ContactBook,
    meta: {
      requiresAuth: true,
    },
  },

  {
    path: "/contacts/:id",
    name: "contact.edit",
    component: () => import("@/views/ContactEdit.vue"),
    props: true,
    meta: {
      requiresAuth: true,
    },
  },

  {
    path: "/contacts/add",
    name: "contact.add",
    component: () => import("@/views/ContactAdd.vue"),
    meta: {
      requiresAuth: true,
    },
  },

  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: () => import("@/views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes,
});

// kiểm tra đăng nhập

router.beforeEach((to) => {
  const user = localStorage.getItem("user");

  if (to.meta.requiresAuth && !user) {
    return {
      name: "login",
    };
  }

  if ((to.name === "login" || to.name === "register") && user) {
    return {
      name: "contactbook",
    };
  }
});

export default router;
