<style>

</style>

<template>
    <button  @click="showModal = true">Show Modal</button>
    <!-- use the modal component, pass in the prop -->
    <modal :show.sync="showModal"></modal>
    <tableshow
            :columns="gridColumns"
            :data="gridData">

    </tableshow
    >


</template>

<script>
    //modal
    import modal from './demo.vue'
    //table
    import tableshow from './demo-table.vue'

    export default {
        data(){
            return {
                showModal: false,

                gridColumns : ['应用名称','消费金额','消费类型','备注'],
                gridData: [
                    { text: 'Chuck Norris', power: Infinity },
                    { text: 'Bruce Lee', power: 9000 },
                    { text: 'Jackie Chan', power: 7000 },
                    { text: 'Jet Li', power: 8000 }
                ]
            }
        },
        components: {
            modal: modal,
            tableshow: tableshow
        }
    }
</script>

