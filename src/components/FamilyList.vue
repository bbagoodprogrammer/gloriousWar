<template>
    <div class="familyList" :class="{noStart:step ==1}">
        <div class="list" v-if="2<=step &&step<=9">
            <div class="top">
                <div v-for="(item,index) in top" class="bangdan" :key="index"> 
                    <div class="winFamily">
                        <span :class="'act'+index">{{item.rank}}</span>
                        <img v-lazy="item.group[0].pic_url" alt="">
                        <div class="right">
                            <span class="rightT">戰力值：{{item.group[0].total_charm}}</span>
                            <span class="rightB">
                                <span>勝率：{{item.group[0].win}}</span>
                                <span class="join">參戰人數：{{item.group[0].joins}}</span>
                            </span>
                        </div>
                    </div>
                    <pk-bar :item="item"></pk-bar>
                </div>
            </div>
            <div class="bottom">
                <div v-for="(item,index) in bottom" class="bangdan" :key="index"> 
                    <div class="winFamily">
                        <span class="biaoshi">{{item.rank}}</span>
                        <img v-lazy="item.group[0].pic_url" alt="">
                        <div class="right">
                            <span class="rightT">戰力值：{{item.group[0].total_charm}}</span>
                            <span class="rightB">
                                <span>勝率：{{item.group[0].win}}</span>
                                <span>參戰人數：{{item.group[0].joins}}</span>
                            </span>
                        </div>
                    </div>
                    <pk-bar :item="item"></pk-bar>
                </div>
            </div>
        </div>
        <div class="noStartMsg" v-if="step == 1">
            參戰資格獲取階段</br>
            家族戰尚未開始！
        </div>
    </div>
</template>
<script>
import {mapState} from "vuex"
import PkBar from "./PkBar"
export default {
    computed:{
        ...mapState(["step","ranks","userState"]),
        top(){
            if(this.ranks !== []){
                return this.ranks.slice(0,3)
            }      
        },
        bottom(){
            if(this.ranks !== []){
                return this.ranks.slice(3)
            }
        }
    },
    components:{
        PkBar
    }
}
</script>
<style lang="scss" scoped>
    .familyList{
        width: 7.02rem;
        margin:.3rem auto 0;
        background: #3f74ec url(../assets/img/top.png) no-repeat;
        background-size: 100%;
        padding-top: .1rem;
        border-radius: .16rem;
        min-height: 2rem;
        &.noStart{
            height: 3.22rem;
            background: #3f74ec url(../assets/img/noStart.png);
            background-size: 100% 100%;
            padding-bottom: 1.4rem;
        }
        .noStartMsg{
            font-size: 80%;
            line-height: .35rem;
            text-align: center;
            margin-top: 1.2rem;
        }
        .list{
            width: 6.82rem;
            margin: 0 .1rem;
            .top{
                background:linear-gradient(#86009A,#5D19B2);
                border-radius: .16rem .16rem 0 0;
                .winFamily{
                    >span{
                        text-indent: -999rem;
                    }
                }
            }
            .bottom{
                background-color: #5D19B2;
                padding-bottom: 1.4rem;
                .winFamily{
                    .biaoshi{
                        display: inline-block;
                        width: .42rem;
                        height: 0.48rem;
                        background: url(../assets/img/biaoshi.png);
                        background-size: 100% 100%;
                        color:#fff;
                        font-size: 80%;
                        line-height: .38rem;
                        text-align: center;
                    }
                }
            }
            .join{
                margin-left: .2rem;
            }
            .bangdan{
                    height: 3.29rem;
                    margin: 0 .28rem;
                    position: relative;
                    border-bottom:.01rem solid rgba(255,255,255,0.4); 
                    .winFamily{
                        display: flex;
                        padding: .28rem 0;
                        img{
                            width: 1.2rem;
                            height: 1.2rem;
                        }
                        >span{
                            width: 0.56rem;
                            height: 0.62rem;
                            margin:.3rem .23rem 0 0;
                        }
                        .act0{
                            background: url(../assets/img/金.png);
                            background-size: 100% 100%;
                        }
                        .act1{
                            background: url(../assets/img/銀.png);
                            background-size: 100% 100%;
                        }
                        .act2{
                            background: url(../assets/img/銅.png);
                            background-size: 100% 100%;
                        }
                        .right{
                            margin: .2rem 0 0 .2rem;
                            .rightT{

                            }
                            .rightB{
                                font-size: 80%;
                                margin-top: .1rem;
                            }
                            >span{
                                display: block;
                            }
                        }
                    }
                }
        }
    }
</style>
