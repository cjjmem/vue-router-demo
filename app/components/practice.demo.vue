<template>
    <div>
        <input type="text" v-model="Text" @keyup.enter="additem"/>
        <ul v-for="todo in todos">
            <li>{{ todo.text}}
                <button @click="delitem($index)">del</button>
            </li>
        </ul>

    </div>
</template>

<script>
    export default{
        data(){
            return {
                Text: '',
                todos: [{text: 'chinese'}, {text: 'math'}, {text: 'english'}]
            }
        },
        methods: {
            additem: function () {
                var text = this.Text.trim();
                if (text) {
                    this.todos.push({text: text})
                    this.Text = ''
                }
            },
            delitem: function (index) {
                this.todos.splice(index, 1)
            }
        }

    }
</script>