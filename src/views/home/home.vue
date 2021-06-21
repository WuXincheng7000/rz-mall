<template>
    <div>
        <h1>首页</h1>
        <TabBar></TabBar>

        <router-view></router-view>
    </div>
</template>

<script>
import TabBar from '@/components/common/tabbar/TabBar'


export default {
    name: 'Home',
    components:{
        TabBar,
    },
    data() {
        return {
            
        }
    },
}
</script>

<style scoped>

</style>