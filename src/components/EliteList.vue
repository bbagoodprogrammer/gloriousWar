<template>
    <div class="eliteList" >
        <div class="familyList" :class="{noStart:step ==1}">
            <div class="list">
                <div class="top">
                    <div class="listItem" v-for="(item,index) in top" :key="index">
                        <span :class="'logo'+ index"></span>
                        <div class="charmBox">
                            <img :src="item.avatar" alt="">
                            <div class="name"> 
                                <span class="nick">{{item.nick}}</span><span class="id">ID {{item.uid}}</span>
                            </div>
                            <span class="charm">{{item.score}}</span>
                        </div>
                    </div>
                </div>
                <div class="bottom">
                    <div class="listItem" v-for="(item,index) in bottom" :key="index">
                        <span class="biaoshi">{{item.rank}}</span>
                        <div class="charmBox">
                            <img :src="item.avatar" alt="">
                            <div class="name"> 
                                <span>{{item.nick}}</span><span class="id">ID {{item.uid}}</span>
                            </div>
                            <span class="charm">{{item.score}}</span>
                        </div>
                    </div>
                </div>
                <span class="minloading" v-show="showloading">loading</span>
            </div>
            <!-- <div class="noStartMsg" v-if="step == 1">
                參戰資格獲取階段</br>
                家族戰尚未開始！
            </div>
         -->
        </div>
    </div>
</template>
<script>
import api from "../api/apiConfig.js"
import {mapState} from "vuex"
export default {
    data(){
        return{
            showloading:false
        }
    },
    watch:{
        eliteData(val){
            if(val.length === 0){
                this.showloading = true
            }else{
                this.showloading = false
            }
        }
    },
    computed:{
        ...mapState(["eliteData","step"]),
        top(){
            if(this.eliteData){
                return this.eliteData.slice(0,3)
            }
        },
        bottom(){
            if(this.eliteData){
                return this.eliteData.slice(3)
            }
        }
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
        min-height: 3rem;
        &.noStart{
            height: 3.22rem;
            background: #3f74ec url(../assets/img/noStart.png);
            background-size: 100% 100%;
            padding-bottom: 1.4rem;
        }
        // .noStartMsg{
        //     font-size: 80%;
        //     line-height: .35rem;
        //     text-align: center;
        //     margin-top: 1.2rem;
        // }
        .list{
            width: 6.82rem;
            margin: 0 .1rem;
            position: relative;
            .minloading{
                display: block;
                width: 0.4rem;
                height: 0.4rem;
                background: url(../assets/img/minloading.gif);
                background-size: 100% 100%;
                position: absolute;
                left:3.3rem;
                text-indent: -999rem;
            }
            .top{
                background:linear-gradient(#86009A,#5D19B2);
                border-radius: .16rem .16rem 0 0;
                padding-left: .18rem;
                min-height: 4.2rem;
            }
            .bottom{
                background-color: #5D19B2;
                padding:0 0 1.4rem .18rem;
            }
            .listItem{
                height: 1.39rem;
                display: flex;
                align-items: center;
                position: relative;
                >span{
                    width: 0.56rem;
                    height: 0.62rem;
                    margin-right: .23rem;
                }
                .logo0{
                    background: url(../assets/img/金.png);
                    background-size: 100% 100%;
                }
                .logo1{
                    background: url(../assets/img/銀.png);
                    background-size: 100% 100%;
                }
                .logo2{
                    background: url(../assets/img/銅.png);
                    background-size: 100% 100%;
                }
                .biaoshi{
                    width: 0.42rem;
                    height: 0.48rem;
                    margin:0 .23rem 0 .08rem;
                    background: url(../assets/img/biaoshi.png);
                    background-size: 100% 100%;
                    font-size: 80%;
                    line-height: .38rem;
                    text-align: center;
                }
                .charmBox{
                    flex: 1;
                    height: 1.39rem;
                    border-bottom:.01rem solid rgba(255,255,255,0.4); 
                    display: flex;
                    align-items: center;
                    img{
                        width: 0.88rem;
                        height: 0.88rem;
                        border-radius: 50%;
                    }
                    .name{
                        margin-left: .18rem;
                        span{
                            display: block;
                        }
                        .nick{
                            max-width: 3.4rem;
                            overflow: hidden;
                            text-overflow: ellipsis;      //超出部分以省略号显示
 	                        white-space: nowrap;
                        }
                        .id{
                            font-size: 80%
                        }
                    }
                    .charm{
                        padding-left: .38rem;
                        background: url(../assets/img/魅力.png) no-repeat .05rem;
                        background-size: .22rem .22rem;
                        position: absolute;
                        right: .2rem;
                    }
                }
            }
        }
    }
</style>



