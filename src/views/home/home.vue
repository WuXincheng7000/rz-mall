<template>
    <div class="main">
        <headerbar></headerbar>

        <swiper></swiper>
        
        <div class="content">
            <h1>home</h1>
        </div>



        
        <navbar></navbar>
    </div>
</template>

<script>
import navbar from 'components/common/NavBar';
import headerbar from 'components/common/HeaderBar';
import swiper from 'components/common/Swiper';


export default {
    name: 'home',
    components:{
        navbar,
        headerbar,
        swiper,
    },
    data() {
        return {
            
        }
    },
}
</script>

<style scoped>

</style>