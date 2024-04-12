import { createRouter, createWebHistory } from 'vue-router';
import LogIn from "@/components/LogIn";
import SignUp from "@/components/SignUp";
import RecoveryPassword from "@/components/RecoveryPassword";
import PasswordWhatsapp from "@/components/PasswordWhatsapp";

const routes = [
    { path: '/', component: LogIn },
    { path: '/signup', component: SignUp },
    { path: '/recovery-password', component: RecoveryPassword },
    { path: '/password-whatsapp', component: PasswordWhatsapp },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
