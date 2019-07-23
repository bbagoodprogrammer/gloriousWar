<template>
    <div :class="{minBar:state=='min',big:state =='big'}" >
        <span ref="bar" :class="{black:mergeStaet === 'hasBarEnd'&& userState !== 'at-two-family-Qualified'}">
        </span>
        <span class="touming" ref="bg">
        </span>
        <p class="zhi" v-if="state ==='big'">{{charm}}/{{min_charm}}</p>
    </div>
</template>
<script>
import {mapState} from "vuex"
export default {
    props:["width","state","charm","mergeStaet"],
    computed:{
        ...mapState(["min_charm","userState"]),
    },
    mounted(){
        this.$refs.bar.style.width = this.width + "%"
        this.$refs.bg.style.width = this.width + "%"
    }
}
</script>

<style lang="scss">
    .black{
        filter: grayscale(1);
    }
    .minBar{
        width: 1.6rem;
        height: 0.3rem;
        background: #3B2CC2;
        border-radius: .15rem;
        position: relative;
        margin-top: .1rem;
        span{
            position: absolute;
            top:.02rem;
            left: .02rem;
            height: .26rem;
            border-radius: .15rem;
            background:linear-gradient(90deg,rgba(113,183,255,1),rgba(243,77,245,1),rgba(250,186,106,1));
        }
        .touming{
            position: absolute;
            top:.02rem;
            left: .02rem;
            height: .26rem;
            border-radius: .15rem;
            background: url(../assets/img/da.png);
        }
    }
    .big{
        vertical-align: middle;
        width: 4.9rem;
        height: 0.48rem;
        background-color: #3B2CC2;
        border-radius: .24rem;
        margin: -.5rem 0 0 .2rem;
        position: relative;
        span{
            position: absolute;
            top:.02rem;
            left: .02rem;
            width: 85%;
            height: .44rem;
            border-radius: .24rem;
            background:linear-gradient(90deg,rgba(113,183,255,1),rgba(243,77,245,1),rgba(250,186,106,1));
        }
        .touming{
            position: absolute;
            top:.02rem;
            left: .02rem;
            width: 85%;
            height: .44rem;
            border-radius: .24rem;
            background: url(../assets/img/da.png);
        }
        .zhi{
            position: absolute;
            top:0.08rem;
            right: .2rem;
            z-index: 10;
            font-size: 80%;
        }
}

</style>
