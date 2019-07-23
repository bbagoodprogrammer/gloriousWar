<template>
    <div class="battleRecords">
        <div class="pkBg" :class="{showMo:showmoreC}">
            <div class="pkTop">
                <span>時間</span>
                <span>戰力值</span>
                <span>結果</span>
            </div>
            <ul :class="{ulShow:showmoreC}" v-if="hasData == 'has'">
                <li v-for="(item,index) in pkList">
                    <span class="date">{{item.date}}</span>
                    <span class="charm">{{item.charm}}</span>
                    <span class="win" v-if="item.win == 1">勝利</span>
                    <span class="win" v-else>失敗</span>
                </li>
            </ul>
            <p v-else class="nodata">暫無對戰信息</p>
            <span class="showmore" @click="showmore()" :class="{trans:showmoreC}">

            </span>
            <span class="cloasCord" @click="closeRecore()">

            </span>
        </div>
    </div>
</template>

<script>
import api from "../api/apiConfig.js"
export default {
    props:["pkList"],
    computed:{
        hasData(){
            if(this.pkList.length > 0){
                return "has"
            }else{
                return "nohas"
            }
        }
    },
    data(){
        return {
            showmoreC:false
        }
    },
    created(){
       
    },
    methods:{
        showmore(){
            if(this.hasData == "nohas")return
            this.showmoreC = !this.showmoreC
        },
        closeRecore(){
            this.showmoreC == false
            this.$emit('closeRecore')
        }
    }
}
</script>

<style>
    .battleRecords{
        position: fixed;
        left: 0;
        top:0;
        right: 0;
        bottom: 0;
        z-index: 10000;
        background: rgb(0,0,0,.8);
    }
    .nodata{
        text-align: center;
        margin-top: 1rem;
    }
    .pkBg{
        width:6rem;
        height: 6rem;
        background-color: #6500C9;
        border-radius: .16rem;
        margin: 2rem auto .21rem;
        position: relative;
        padding-top: .8rem;
        transition: all .2s linear;
    }
    .pkTop{
        display: flex;
        justify-content:space-between;
        margin: 0 .4rem;
        margin-bottom: .36rem;
    }
    .pkBg ul li{
        display: flex;
        margin: 0 .4rem;
        text-align: center;
        font-size: 80%;
        height: .5rem;
        line-height: .4rem;
    }
    .pkBg ul{
        height: 4rem;
        overflow: hidden;
        transition: all .2s linear;
    }
    .pkBg ul::-webkit-scrollbar {
        display: none; /* Chrome Safari */
    }
    .pkBg ul.showmore{
        max-height: 5rem;
    }
    .pkBg ul li .charm{
        width: 2.4rem;
    }
    .pkBg ul li .win{
        flex:1;
        text-align: right;
    }
    .pkBg .showmore{
        display: block;
        width: .36rem;
        height: .36rem;
        background: url(../assets/img/showmore.png);
        background-size: 100% 100%;
        position: absolute;
        left:2.82rem;
        bottom: .4rem;
    }
    .pkBg .cloasCord{
        display: block;
        width: .4rem;
        height: 0.4rem;
        position: absolute;
        top: -.15rem;
        right: -.15rem;
        background: url(../assets/img/closeCords.png);
        background-size: 100% 100%;
    }
    .pkBg::after{
        content: "";
        width: 4.29rem;
        height: 1.13rem;
        position: absolute;
        background:url(../assets/img/failyRecords.png);
        background-size: 100% 100%;
        left: .87rem;
        top: -.58rem;
    }
    .showMo{
        height: 8rem;
    }
    .pkBg .ulShow{
        height: 6rem;
        overflow: auto;
    }
    .trans{
        transform: rotate(180deg)
    }
</style>

