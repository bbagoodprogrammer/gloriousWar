<template>
    <div class="pkbar">
        <span class="red" ref="red">
            <img v-lazy="item.group[0].pic_url" alt="" @click="showFamilyCard(item.group[0])">
            <span class="rname">{{item.group[0].rname}}</span>
            <span class="zhi">{{item.group[0].pkcharm}}</span>
            <span class="vs"></span>
        </span>
        <span class="blue" ref="bule" v-if="item.group[1]" @click="showFamilyCard(item.group[1])">
            <img v-lazy="item.group[1].pic_url" alt="">
            <span class="rname">{{item.group[1].rname}}</span>
            <span class="zhi">{{item.group[1].pkcharm}}</span>
        </span>
        <span v-else ref="bule" class="blue">
            <img src='../assets/img/default.png' alt="">
            <span class="rname">???</span>
            <span class="zhi"></span>
        </span>
        <span class="bg"></span>
        <p-kfamily-msg v-show="showMsg" @hideFamilyCard="hideFamilyCard()"></p-kfamily-msg>
    </div>
</template>

<script>
import PKfamilyMsg from "./PKfamilyMsg.vue"
export default {
    data(){
        return{
            width:20,
            showMsg:false
        }
    },
    props:['item'],
    mounted(){
        if(this.item.tage < 20 ){
            this.$refs.red.style.width = 20 + "%"
            this.$refs.bule.style.width = 80 + "%"
        }else{
            this.$refs.red.style.width = this.item.tage + "%"
            this.$refs.bule.style.width = (100 - this.item.tage) + "%"
        }
    },
    methods:{
        showFamilyCard(item){
            this.showMsg = true
            this.$store.commit("changPKfamilyMsg",item)
        },
        hideFamilyCard(){
            this.showMsg = false
        }
    },
    components:{
        PKfamilyMsg
    }
}
</script>

<style lang="scss">
    .pkbar{
        width: 6.28rem;
        height: .7rem;
        display: flex;
        position: relative;
        .red{
            display: inline-block;
            width: 50%;
            height: .7rem;
            background:linear-gradient(#F59961,#F1536F);
            position: relative;
            img{
                width: 0.96rem;
                height: 0.96rem;
                position: absolute;
                left: -.2rem;
                top: -.1rem;
                border-radius: 50%;
                z-index: 15;
            }
            .rname{
                position: absolute;
                bottom: -.7rem;
                left: 0;
                white-space:nowrap;
            }
            .zhi{
                margin: .2rem 0 0 .8rem;
                display: inline-block;
                vertical-align: middle;
                position: absolute;
                left: .05rem;
                z-index: 20;
                font-size: 80%;
            }
            .vs{
                width: 1.55rem;
                height: 1.46rem;
                background: url(../assets/img/VS.png);
                background-size: 100% 100%;
                position: absolute;
                right:-.78rem;
                top: -.34rem;
            }
        }
        .blue{
            display: inline-block;
            width: 50%;
            height: .7rem;
            background:linear-gradient(#7A82F0,#7BB8F7);
            img{
                width: 0.96rem;
                height: 0.96rem;
                position: absolute;
                top: -.1rem;
                right: -.2rem;
                border-radius: 50%;
                z-index: 15;
            }
            .zhi{
                margin: .2rem .8rem 0 0;
                display: inline-block;
                vertical-align: middle;
                position: absolute;
                right: .05rem;
                z-index: 20;
                font-size: 80%;
            }
            .rname{
                position: absolute;
                bottom: -.7rem;
                right: 0;
            }
        }
        .bg{
            position: absolute;
            display: block;
            top:0;
            left:0;
            width: 6.28rem;
            height: .7rem;
            background: url(../assets/img/壳1.png);
            background-size: 100% 100%;
        }
    }
</style>
