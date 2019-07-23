<template>
    <div class="footer">
        <div :class="{baoming:showState === 'baoming',wuzige:showState === 'wuzige',hide:showState === 'hide'}" @click="singUp()">
            <span v-if="showState === 'wuzige'">
                很遺憾，您所在的家族</br>未獲得參戰資格
            </span>
        </div>
        <div v-if="showState === 'goFamily'" class="goFamily" @click="goFamily()">

        </div>
        <div class="paiming" v-if="showState == 'paiming' && activeList == 'FamilyList'" >
            <span class="biaoshi">{{own_family.rank}}</span>
            <img :src="own_family.pic_url" alt="">
            <div class="msg">
                <span>戰力值：{{own_family.total_charm}}</span>
                <span class="msgBt">
                    <span>勝率：{{own_family.win}}</span>
                    <span class="people">參戰人數：{{own_family.joins}}</span>
                </span>
            </div>
        </div>
        <div class="paiming" v-if="activeList == 'EliteList'">
            <span class="biaoshi">{{familyFarm.rank}}</span>
            <img :src="familyFarm.avatar" alt="">
            <div class="msg">
                <span>{{familyFarm.nick}}</span><span>No.  {{familyFarm.rank}}</span>
            </div>
            <span class="fram">{{familyFarm.score}}</span>
        </div>
        <msg-toast :msg="tastMsg" @closeToast="closeToast()" v-show="showT"></msg-toast>
    </div>
</template>

<script>
import {mapState} from "vuex"
import api from "../api/apiConfig.js"
import MsgToast  from "./commonToast.vue"
import App from '../utils/openApp.js'
export default {
    data(){
        return{
            showT:false,
            tastMsg:""
        }
    },
    computed:{
        ...mapState(["step","userState","own_family","familyFarm","activeList","boss","isShare","isFamily","family"]),
        showState(){
            if(this.userState == "at-one-noFamily" || this.userState == "at-one-family-noSingup"){
                return "baoming"
            }else if(this.userState == "at-one-family-singup"){
                return "goFamily"
            }else if(this.userState == "at-two-family-singup-noQualified" || this.userState == "at-two-family-noSingup-noQualified"){
                return "wuzige"
            }else if(this.userState === "at-two-family-Qualified"){
                return "paiming"
            }else if(this.userState === "at-two-nofamily"){
                return "hide"
            }
        }
    },
    methods:{
        singUp(){
            if(this.isShare){
                App()
                return
            }//如果是分享下，打开APP
            var that = this
            if(that.showState === "baoming"){
                if(that.userState == "at-one-family-noSingup"){ // 一阶段家族用户未报名
                    if(that.boss === 1){ //族長才能報名
                        api.singUp().then(function(res){
                            if(res.data.response_status){ //報名成功
                                that.$store.commit('changuserState',"at-one-family-singup")
                                this.tastMsg = "報名成功，趕快集合組員參戰！"
                                this.showT = true
                            }else{
                                console.log(res.data.response_status.console.error)
                            }
                        })
                    }else if(that.boss === 0){ //組員
                        this.tastMsg = "只有族長才能確認報名，趕快告知族長前來報名！"
                        this.showT = true
                    }
                }else if(that.userState == "at-one-noFamily"){
                    //请先加入家族
                    this.tastMsg = "請先加入一個家族！"
                    this.showT = true
                }
            }
        },
        closeToast(){
            this.showT = false
        },
        goFamily(){
            if(this.isFamily === 1){
                let rid = this.family[0].rid
                location.href= `rid:${rid}`
            }
           
        }
    },
    components:{
        MsgToast
    }
}
</script>

<style lang="scss" scoped>
    .baoming{
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
        width: 7.5rem;
        height: 0.96rem;
        overflow: hidden;
        background: url(../assets/img/baoming.png);
        background-size: 100% 100%;
        z-index: 9999;
    }
    .hide{
        display: none;
    }
    .goFamily{
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
        width: 7.5rem;
        height: 0.96rem;
        overflow: hidden;
        background: url(../assets/img/goFamily.png);
        background-size: 100% 100%;
        z-index: 9999;
    }
    .wuzige{
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
        width: 7.5rem;
        height: 1.25rem;
        overflow: hidden;
        background: url(../assets/img/底栏.png);
        background-size: 100% 100%;
        z-index: 9999;
        text-align: center;
        padding-top: .15rem;
        line-height: .48rem;
        span{
            display: inline-block;
        }
    }
    .paiming{
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
        width: 6.2rem;
        height: 1.6rem;
        padding: 0 .66rem 0;
        background: url(../assets/img/底栏.png);
        background-size: 100% 100%;
        z-index: 9999;
        display: flex;
        align-items: center;
        .biaoshi{
            display: inline-block;
            width: 0.42rem;
            height: 0.48rem;
            background: url(../assets/img/biaoshi.png);
            background-size: 100% 100%;
            text-indent: .12rem;
            margin-right: .26rem;
        }
        >img{
            width: 1.2rem;
            height: 1.2rem;
        }
        .msg{
            margin: 0 0 0 .24rem;
            .people{
                margin-left: .4rem;
            }
            >span{
                display: block;
            }
            .msgBt{
                font-size: 80%
            }
        }
        .fram{
            display:block;
            width: 1.33rem;
            height:0.33rem;
            padding-left: .38rem;
            background: url(../assets/img/魅力.png) no-repeat 0.05rem;
            background-size: .22rem .22rem;
            position: absolute;
            right: .2rem;
        }
    }


</style>
