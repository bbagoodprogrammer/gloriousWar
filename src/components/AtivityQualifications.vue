<template>
    <div class="ativityQualifications">
        <div class="familyMsg" :class="{heightLong:bgHeight === 'bigheight',heightmin:bgHeight === 'minheight'}">
            <a href="" class="wenhao" @click.prevent="showToast()">问号</a>
            <div v-if="mergeStaet === 'hasBar' || mergeStaet=='hasBarEnd'">
                <div class="msgTop" v-for="(item,index) in family" :key="index">
                    <div class="familyName">
                        <img :src="item.pic_url" @click="showFamliy(item)">
                        <span>{{item.rname}}</span>
                        <span>{{item.fid}}</span>
                    </div>
                    <min-bar :width="(item.charm / min_charm)*100" :state="'big'" :charm="item.charm" :mergeStaet="mergeStaet"></min-bar>
                </div>
            </div>
            <div class="msgBtn" v-if="mergeStaet === 'hasBarEnd' || mergeStaet === 'oneBtn'">
                參戰資格獲取已結束
            </div>
            <div class="noFamily" v-if="mergeStaet === 'noFamily'">
                <div class="oneNoSign-up" >
                    <div class="msgBox" v-for="(item,index) in family" :key="index">
                        <img :src="item.pic_url" @click="showFamliy(item)">
                        <span class="msgName">{{item.rname}}</span>
                        <span class="msgId">ID  {{item.fid}}</span>
                        <min-bar v-if="mergeStaet === 'noFamily' && userState !== 'at-two-nofamily'" :width="(item.charm / min_charm)*100" :state="'min'"></min-bar>
                        <p v-if="userState === 'at-two-nofamily' || userState === 'at-end-nofamily'" class="zhanli">戰力值：{{item.total_charm}}</p>
                        <a href="" class="singUp-btm" @click.prevent="goFamily(item.fid)">加入该家族</a>
                    </div>
                    <div class="msgBox" v-for="item in 3-family.length">
                        <img src="../assets/img/default.png">
                    </div>
                </div>
                <div class="noFamilu-toast" v-if="userState=='at-two-nofamily' || userState=='at-two-family-singup-noQualified'">
                    參戰資格獲取已結束</br>您可以加入榜單家族協助作戰
                </div>
            </div>
        </div>
        <p class="jojinMsg">
            已有<span>{{total_joined}}</span>個家族參與活動
        </p>
        <div class="mainTabs">
            <a @click.prevent="changList('FamilyList')" :class="{active:showList == 'FamilyList'}" class="rongyao">荣耀家族榜</a>
            <a @click.prevent="changList('EliteList')" :class="{active2:showList == 'EliteList'}" class="jingying">家族菁英榜</a>
        </div>
        <component :is="showList"></component>
        <family-card v-show="showFamily" @changeShowState="hideFamily()"></family-card>
        <msg-toast :msg="tastMsg" @closeToast="closeToast()" v-show="showT"></msg-toast>
    </div>
</template>

<script>
import EliteList from "./EliteList.vue"
import FamilyList from "./FamilyList.vue"
import MinBar from "./Minbar.vue"
import {mapState} from "vuex"
import FamilyCard from "./FamilyCard.vue"
import MsgToast  from "./commonToast.vue"
import APP from "../utils/openApp.js"
export default {
    data(){
        return {
            showList:"FamilyList",  //默认显示荣耀家族榜
            showFamily:false,
            showT:false,
            tastMsg:"您在家族K房貢獻的魅力值可幫助家族獲得參戰資格哦！"
        }
    },
    props:["family","total_joined"],
    computed:{
      ...mapState(["userState","isShare","min_charm"]),
      mergeStaet(){
          if(this.userState === "at-one-noFamily" || this.userState === "at-two-nofamily" || this.userState == "at-end-nofamily"){
              return "noFamily"
          }else if(this.userState === "at-one-family-singup" || this.userState === "at-one-family-noSingup"){
              return "hasBar"
          }else if(this.userState === "at-two-family-singup-noQualified" || this.userState === "at-two-family-Qualified" || this.userState == "at-end-family"){
              return "hasBarEnd"
          }else if(this.userState === "at-two-family-noSingup-noQualified"){
              return "oneBtn"
          }
        },
        bgHeight(){
            if(this.userState == "at-two-nofamily"){
                return "bigheight"
            }else if(this.userState === "at-one-family-singup" || this.userState === "at-one-family-noSingup" || this.userState === "at-two-family-noSingup-noQualified"){
                 return "minheight"
            }
        }
    },
    methods:{
        changList(data){ //tab荣誉榜切换
            if(data === "EliteList" && this.isShare){
                APP()
                return
            }
            this.showList = data
            this.$store.commit("changeActiveList",data)
        },
        showFamliy(item){ //显示家族名pian
            this.showFamily = true
            this.$store.commit("changmyFamilyMsg",item)
        },
        hideFamily(){
            this.showFamily = false
        },
        showToast(){ //点击问号显示弹窗
            this.showT = true
        },
        closeToast(){
            this.showT = false
        },
        goFamily(familyID){   //加入家族
            if(this.isShare){
                APP()
                return
            }else{ //跳转家族
                location.href= `fid:${familyID}`
            }
        }
    },
    components:{
        EliteList,
        FamilyList,
        MinBar,
        FamilyCard,
        MsgToast
    }
}
</script>

<style lang="scss">
    .familyMsg{
        width: 6.32rem;
        height: 3.7rem;
        margin: .9rem auto 0;
        background: url(../assets/img/02.png);
        background-size: 100% 100%;
        position: relative;
        padding: .8rem .35rem 0;
        &.heightLong{
            height: 5.2rem;
            background: url(../assets/img/01.png);
            background-size: 100% 100%;
        }
        &.heightmin{
            height: 2.3rem;
            padding-top: .6rem;
            background: url(../assets/img/图层55.png);
            background-size: 100% 100%;
        }
        .wenhao{
            display: block;
            width: 0.2rem;
            height: 0.2rem;
            background: url(../assets/img/wenhao.png);
            background-size: 100% 100%;
            position: absolute;
            top: .2rem;
            right: .2rem;
            text-indent: -999rem;
        }
        .msgTop{
            display: flex;
            align-items: center;
            .familyName{
                >img{
                    display: block;
                    width: 1.2rem;
                    height: 1.2rem;
                    margin-bottom: .1rem;
                }
                span{
                    display: block;
                    width: 1.4rem;
                    font-size: 80%;
                    text-align: center;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
                .minBar{
                    width: 1.6rem;
                    height: 0.3rem;
                    border-radius: .15rem;
                    background-color: #3B2CC2;
                    position: relative;
                    .minactive{
                        position: absolute;
                        top:.02rem;
                        left:.02rem;
                        width:50%;
                        border-radius: .15rem;
                        height: .28rem;
                        background:linear-gradient(90deg,rgba(113,183,255,1),rgba(243,77,245,1),rgba(250,186,106,1));
                    }
                }
            }
        }
        .msgBtn{
            width: 3.89rem;
            height: .89rem;
            background: url(../assets/img/黑白.png);
            background-size: 100% 100%;
            margin: .36rem auto 0;
            text-align: center;
            line-height: .8rem;
            font-size: 110%;
        }
        .noFamily{
            .oneNoSign-up{
                display: flex;
                justify-content:space-between;
                .zhanli{
                    font-size: 80%;
                    text-align: center;
                }
                img{
                    width: 1.2rem;
                    height: 1.2rem;
                    border-radius: 50%;
                    display: block;
                    margin: 0 auto;
                }
                span,a{
                    display: block;
                    font-size: 80%;
                    text-align: center;
                }
                .msgName{
                    font-size: 90%;
                    height: .48rem;
                    max-width: 1.65rem;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    margin: 0 auto;
                }
                .msgId{
                    font-size: 80%;
                }
                .singUp-btm{
                    width: 1.6rem;
                    height: 0.48rem;
                    background: url(../assets/img/singUpBtn.png);
                    background-size: 100% 100%;
                    font-size: 80%;
                    line-height: .48rem;
                    margin-top: .1rem;
                }
            }
            .noFamilu-toast{
                width: 4.2rem;
                height: .8rem;
                background: #1F0840;
                opacity:0.49;
                border-radius:.12rem;
                margin: .58rem auto 0;
                text-align: center;
                font-size: 80%;
                font-weight: 400;
                line-height: .34rem;
                vertical-align: middle;
                color:#fff;
                padding-top: .2rem;
            }
        }
        
    }
    .jojinMsg{
        text-align: center;
        font-size: 80%;
        margin: .13rem;
        span{
            color:#F3FF34;
        }
    }
    .familyMsg::after{
        content: "";
        width: 4.59rem;
        height: 1.13rem;
        position: absolute;
        background:url(../assets/img/活動獎勵標題1.png);
        background-size: 100% 100%;
        left: 1.16rem;
        top: -.55rem;
        right: 0;
    }
    .mainTabs{
        width: 7.02rem;
        height: .87rem;
        margin:.5rem auto 0;
        background: url(../assets/img/bangBg.png);
        background-size: 100% 100%;
        position: relative;
        a{
            display: inline-block;
            text-indent: -888rem;
            
        }
        .rongyao{
            width: 49%;
            height: 0.8rem;
            background: url(../assets/img/榮耀家族榜.png);
            background-size: 100% 100%;
            margin: .025rem 0 0 .02rem;
        }
        .jingying{
            width: 49%;
            height: 0.8rem;
            background: url(../assets/img/jiazujingying.png);
            background-size: 100% 100%;
            margin-top: .025rem;
        }
        .active{
            background: url(../assets/img/familyList.png);
            background-size: 100% 100%;
        }
        .active2{
            background: url(../assets/img/jingying.png);
            background-size: 100% 100%;
        }
        
    }
</style>
