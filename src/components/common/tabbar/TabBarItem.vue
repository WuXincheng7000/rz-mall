<template>
    <div class="tab-bar-item" @click="itemClick">
        <div v-if="!isActive"><slot name="item-icon"></slot></div>
        <div v-else :style="activeStyle"><slot name="item-icon_active"></slot></div>
        <div :style="activeStyle"><slot name="item-text"></slot></div>
    </div>
</template>

<script>
    export default {
        name: 'TabBarItem',
        data() {
            return {
                // isActive: false,
            }
        },
        props: {
            path: String,
            activeColor: {
                type: String,
                default: 'var(--color-tint)',
            }
        },
        computed: {
            isActive() {
                // console.log(this.$route.path.includes(this.path));
                return this.$route.path.includes(this.path);
            },
            activeStyle() {
                return this.isActive ? {color: this.activeColor} : {}
            }
        },
        methods: {
            itemClick() {
                // this.isActive = !this.isActive;
                this.$router.push(this.path)
            }
        }
    }
</script>

<style lang="less" scoped>
.tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    margin-top: 3.5px;

    img {
        width: 28px;
        height: 28px;
        margin-bottom: 1px;
        
    }
}
</style>