<template>
 <a v-if="isExternalLink" 
    target="_blank"
    class="is-normal"
    :href="link.to">{{link.name}}</a>
  <router-link
    v-else
    :to="route"
    v-slot="{isActive}"
      >
  <!-- :href="href" -->
    <a 
        :class="isActive ? 'is-active' : 'is-normal'"
    >{{link.name}}</a>
  </router-link>
</template>

<script>
export default{
    props: {
        link: {
            type: Object, 
            required: true
        }
    }, 
    computed: {
        isExternalLink() {
            return this.link.to.startsWith('http')
        }, 
        route(){
            return this.link.id === undefined ? {name: this.link.to} : { name: this.link.to , params: { id: this.link.id } }
        }
    }
}
</script>

<style scoped>
.is-active{
    color: #0080ff
}

.is-normal{
    color: #c6c5c5
}
</style>