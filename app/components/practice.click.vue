<template>
    <div id="app">
        <p>{{ msg}}</p>
        <button @click="reset">button</button>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                msg: 'this is my'
            }
        },
        methods: {
            reset: function () {
                this.msg = this.msg.split('').reverse().join('')
            }
        }
    }
</script>