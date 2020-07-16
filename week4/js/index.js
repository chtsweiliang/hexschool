new Vue({
    el: '#app',
    data() {
        return {
            user: {
                email: '',
                password: '',
            },
            isProcessing: false,
        };
    },
    methods: {
        signin() {
            const api = `https://course-ec-api.hexschool.io/api/auth/login`;
            this.isProcessing = true;
            axios.post(api, this.user).then((response) => {
                this.isProcessing = false;
                const token = response.data.token;
                const expired = response.data.expired;
                // 寫入 cookie token
                // expires 設置有效時間
                document.cookie = `token=${token};expires=${new Date(expired * 1000)}; path=/`;
                window.location = 'products.html';
            }).catch((error) => {
                console.log(error);
                this.isProcessing = false;
                Swal.fire({
                    toast: true,
                    text: '帳號、密碼不符',
                    icon: 'error',
                    showConfirmButton: false,
                    timer: 1500,
                    padding: '2em',
                });
            });
        },
    },
})