<template>
    <div class="familyCardBox">
        <div class="familycontent">
            <img :src="PKfamilyMsg.pic_url" alt="">
            <p class="name">{{PKfamilyMsg.rname}}</p>
            <p class="id">{{PKfamilyMsg.fid}}</p>
            <div class="setion">
                <div>
                    <span>{{PKfamilyMsg.joins}}</span>
                    <p>叄戰人数</p>
                </div>
                <div>
                    <span>{{PKfamilyMsg.total_charm}}</span>
                    <p>戰力值</p>
                </div>
                <div>
                    <span>{{PKfamilyMsg.win}}</span>
                    <p>勝率</p>
                </div>
            </div>
            <div class="goFamily" @click="goFamily(PKfamilyMsg.rid)">
                前往家族 助力榮耀
            </div>
            <span class="close" @click="closeToast()">

            </span>
        </div>
    </div>

</template>
<script>
    import {mapState} from "vuex"
    import APP from "../utils/openApp.js"
    export default {
        computed:{
            ...mapState(["PKfamilyMsg","isShare"])
        },
        methods:{
            closeToast(){
                this.$emit("hideFamilyCard")
            },
            goFamily(familyID){ // 前往家族
                if(this.isShare){
                    APP()
                    return
                }else{ //跳转家族
                    location.href= `rid:${familyID}`
                }
            }
        }
    }
</script>

<style scoped>
    .familyCardBox{
        position: fixed;
        left: 0;
        top:0;
        right: 0;
        bottom: 0;
        z-index: 10000;
        background: rgb(0,0,0,.8);
    }
    .familycontent{
        width:6rem;
        height: 7.6rem;
        background-color: #6500C9;
        border-radius: .16rem;
        margin: 2rem auto .21rem;
        position: relative;
    }
    .familycontent p{
        text-align: center;
    }
    .familycontent .name{
        font-size: 110%;
        text-align: center;
        margin-bottom: .1rem;
    }
    .familycontent img{
        width: 2rem;
        height: 2rem;
        margin: 0.88rem 2rem 0;
    }
    .familycontent .setion{
        margin-top: .7rem;
        display: flex;
        justify-content:space-between;
        padding: 0 .48rem;
    }
    .familycontent .setion span{
        font-size: 110%;
    }
    .familycontent .setion p{
        margin-top: .1rem;
        font-size: 80%;
    }
    .familycontent div{
        text-align: center
    }
    .familycontent .goFamily{
        width: 3.89rem;
        height: 0.89rem;
        margin: 0.7rem auto;
        background: url(../assets/img/joinFamily.png);
        background-size: 100% 100%;
        line-height: 0.85rem;
    }
    .familycontent .close{
        display: block;
        width: 0.8rem;
        height: 0.8rem;
        background: url(../assets/img/close.png);
        background-size: 100% 100%;
        position:absolute;
        left: 2.6rem;
        bottom: -1.11rem;
    }
    .familycontent::after{
        content: "";
        width: 4.29rem;
        height: 1.13rem;
        position: absolute;
        background:url(../assets/img/familyzhan.png);
        background-size: 100% 100%;
        left: .87rem;
        top: -.58rem;
    }
</style>



<style>

</style>
