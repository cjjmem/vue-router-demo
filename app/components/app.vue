<style>

</style>

<template>
    <div>
        <p v-show="authenticating" style="color:red">Authenticating...</p>
        <h1>{{ title  }}</h1>
        <a v-link="{ path: '/inbox/message/123' }">inbox</a>
        <a v-link="{ path: '/about' }">about</a>
        <a v-link="{ path: '/user/user' }">user</a>
        <a v-link="{ path: '/forbidden' }">forbidden</a>
        <router-view class="view" transition="test" transition-mode="out-in" keep-alive></router-view>
    </div>
</template>


<script>
    export default{
        data(){
            return {
                title : 'this is my  frist router-demo'
            }
        }
    }
</script>



