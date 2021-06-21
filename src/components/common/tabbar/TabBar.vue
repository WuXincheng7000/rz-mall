<template>
    <div id="tabbar">

        <TabBarItem path='/' activeColor="var(--color-tint)">
            <template v-slot:item-icon>
                <img src="@/assets/img/tabbar/home.png" alt="">
            </template>
            <template v-slot:item-icon_active>
                <img src="@/assets/img/tabbar/home_active.png" alt="">
            </template>
            <template v-slot:item-text>
                    <div>首页</div>
            </template>
        </TabBarItem>

        <TabBarItem path='/category'>
            <template v-slot:item-icon>
                <img src="@/assets/img/tabbar/category.png" alt="">
            </template>
            <template v-slot:item-icon_active>
                <img src="@/assets/img/tabbar/category_active.png" alt="">
            </template>
            <template v-slot:item-text>
                <div>分类</div>
            </template>
        </TabBarItem>

        <TabBarItem path='/shopcart'>
            <template v-slot:item-icon>
                <img src="@/assets/img/tabbar/shopcart.png" alt="">
            </template>
            <template v-slot:item-icon_active>
                <img src="@/assets/img/tabbar/shopcart_active.png" alt="">
            </template>
            <template v-slot:item-text>
                <div>购物车</div>
            </template>
        </TabBarItem>

        <TabBarItem path='/profile'>
            <template v-slot:item-icon>
                <img src="@/assets/img/tabbar/profile.png" alt="">
            </template>
            <template v-slot:item-icon_active>
                <img src="@/assets/img/tabbar/profile_active.png" alt="">
            </template>
            <template v-slot:item-text>
                <div>我的</div>
            </template>
        </TabBarItem>


    </div>
</template>

<script>
import TabBarItem from '@/components/common/tabbar/TabBarItem';

    export default {
        name: 'TabBar',
        components: {
            TabBarItem,
        },
        data() {
            return {

            }
        },
    }
</script>

<style lang="less">
#tabbar {
    display: flex;  
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    background: var(--color-tint-background);
    box-shadow: 0 -1px 4px rgba(100, 100, 100, .2);
    z-index: 99;
}


</style>