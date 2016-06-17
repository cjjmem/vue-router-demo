<template>
    <div id="app">
        <p>{{ title }}</p>
        <ul>
            <li v-for="todo in todos">{{ todo.text }}</li>
        </ul>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                todos : [{
                    text : 'first love vue',
                },{
                    text : 'second love vue-router'
                }] ,
                title :"there is my vue for demo"
            }
        }
    }
</script>