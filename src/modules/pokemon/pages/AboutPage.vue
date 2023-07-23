<template>
    <h1>About page</h1>
    <hr>
    <h3>{{ name }}</h3>
    <button @click="onChangeName">
        Cambiar nombre
    </button>
</template>


<script>
export default {
    data(){
        return {
            name: 'Adxell'
        }
    },
    methods: {
        onChangeName(){
            console.log("Se cambiara el nombre a Melissa")
            this.name = "Melissa"
        }
    }, 
    beforeCreate() { 
        console.log('beforeCreate') 
    },
    created(){
        console.log('created')
    },
    beforeMount(){
        console.log('beforeMount')
    },
    mounted(){
        console.log('mounted')
    },
    beforeUpdate(){
        console.log('beforeUpdate')
    }, 
    updated(){
        console.log('updated')
    },
    activated(){
        console.log('activated')
    }, 
    deactivated(){
        console.log('deactivated')
    }, 
    beforeUnmount(){
        console.log('beforeUnmount')
    }, 
    unmounted(){
        console.log('unmounted')
    }, 
    errorCaptured(){
        console.log('errorCaptured')
    },
    renderTracked(){
        console.log('renderTracked')
    }, 
    renderTriggered(){
        console.log('renderTriggered')
    }
}
</script>