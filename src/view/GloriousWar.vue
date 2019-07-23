<template>
    <div class="war">
        <div class="header">
            <div class="buttonBox">  
                <a href="./index2.html" class="rules" >活动规则&奖励</a>
                <a href="" class="records" @click.prevent="showCordState()">对战记录</a>
            </div>
        </div>
        <a href="" @click.prevent="Refresh()" class="Refresh" :class="{roaet:toaetRefres}" ref="refresh">刷新</a>
        <ativity-rewards></ativity-rewards>

        <ativity-qualifications 
            :family="initData.family" 
            :total_joined="initData.total_joined">
        </ativity-qualifications>
        <BattleRecords v-show="showCords" :pkList="pkList" @closeRecore="closeRecore()"></BattleRecords>
        <war-footer></war-footer>
        <loading></loading>
    </div>
</template>

<script>
import AtivityRewards from "../components/AtivityRewards.vue"  //活动奖励
import AtivityQualifications from "../components/AtivityQualifications.vue" //参战资格
import BattleRecords from "../components/BattleRecords.vue" // 对战记录
import Loading from "../components/Loading.vue"
import WarFooter from "../components/Footer.vue"
import getString from "../utils/getString.js"
import api from "../api/apiConfig.js"
import {mapState} from "vuex"
import App from '../utils/openApp.js'
export default {
    data(){
        return{
            isShare:false,
            initData:{},
            showCords:false,
            pkList:[],
            from:0, //荣耀家族榜当前数量
            eliteFrom: 0 ,// 精英榜当前数量
            moreState:true,
            handRanks:[], // 荣耀家族榜
            step:0,
            eliteData:[], //精英榜
            reState:true,
            toaetRefres:false,
            roateNum:1
        }
    },
    computed:{
        ...mapState(["activeList"]),
        userState(){ //用户当前状态
            let initD = this.initData
            if(initD.step === 0){ //活动未开始
                return "at-start"
            }else if(initD.step === 9 && initD.fa_user ===0){ //活动结束非家族用户
                return "at-end-nofamily"
            }else if(initD.step === 9 && initD.fa_user ===1){ //活动结束家族用户
                return "at-end-family"
            }else if(initD.step == 1 && initD.fa_user ===0){ //一阶段，非家族用户
                return "at-one-noFamily"
            }else if(initD.step == 1 && initD.fa_user ===1 && (initD.family.length === 1 && initD.family[0].joined === 1)){ //一阶段，家族用户已报名
                return "at-one-family-singup"
            }else if(initD.step == 1 && initD.fa_user ===1 && (initD.family.length === 1 && initD.family[0].joined === 0)){ //一阶段，家族用户未报名
                return "at-one-family-noSingup"
            }else if(2<=initD.step<=9 && initD.fa_user ===1 && (initD.family.length === 1 && initD.family[0].permit === 1)){ //2阶段，有资格家族用户
                return "at-two-family-Qualified"
            }else if(2<=initD.step<=9 && initD.fa_user ===1 && (initD.family.length === 1 && initD.family[0].permit === 0) && initD.family[0].joined ===1){ //2阶段，报名无资格家族用户
                return "at-two-family-singup-noQualified"
            }else if(2<=initD.step<=9 && initD.fa_user ===1 && (initD.family.length === 1 && initD.family[0].permit === 0) && initD.family[0].joined ===0){ //2阶段，无报名无资格家族用户
                return "at-two-family-noSingup-noQualified"
            }else if(2<=initD.step<=9 && initD.fa_user ===0 && initD.family.length > 1){ //2阶段，无资格非家族用户
                return "at-two-nofamily"
            }
        }
    },
    watch:{
        userState(value){ // 用户状态
            this.$store.commit('changuserState',this.userState)
        }
    },
    destroyed(){
        window.removeEventListener("scroll",this.onScroll)
    },
    mounted(){
        window.addEventListener("scroll", this.onScroll);
    },
    created(){
        let that = this
        //判断是否为分享环境,请求相应的接口 
        let regstr = getString('token')
        if(regstr){   
            that.isShare = false
        }else{
            that.isShare = true
        }
        that.$store.commit('changShareState',that.isShare) //分享状态
        api.getBaseInfo().then(function(value){
            that.initData = value.data.response_data
            const {step,own_family,boss,min_charm,family,fa_user} = that.initData
            that.step = step
            that.$store.commit('changmyStep',that.step) //活动状态
            that.$store.commit('changeown_family',own_family) //我的家族信息
            that.$store.commit('changBoss',boss) //boss
            that.$store.commit('changemin_charm',min_charm) //家族晋级最小魅力值
            that.$store.commit('changefamily',family)  //家族信息
            that.$store.commit('changeisFamily',fa_user)  //是否家族用戶
            //处理家族榜信息
            if(that.initData.ranks.length > 0){
               that.handRanks = that.HandleRanks(that.initData.ranks)
            }
            that.$store.commit('changmyRanks',that.handRanks) //家族榜
        })
        if(that.isShare)return
        api.getCords().then(function(value){ //对战信息
            that.pkList = value.data.response_data.pklist
        })
        api.getEliteList(that.eliteFrom).then(function(res){
            that.eliteData = res.data.response_data.ranks
            var farm = res.data.response_data.uinfo
            that.$store.commit('changeeliteData',that.eliteData) //精英榜
            that.$store.commit('changfamilyFarm',farm) //家族魅力信息
        })
    },
    methods:{
        showCordState(){
            if(this.isShare){ //分享状态打开APP或下载
                App()
                return
            }
            this.showCords = true
        },
        closeRecore(){
            this.showCords = false
        },
        HandleRanks(arr){ //处理进度条数据
            for(let i=0;i<arr.length;i++){
                if(arr[i].group.length == 1 || arr[i].group[1] == null){
                    arr[i]['tage'] = 80
                    continue
                }
                let redWidth = ((arr[i].group[0].total_charm / (arr[i].group[0].total_charm + arr[i].group[1].total_charm))*100).toFixed(1)
                if(redWidth*1 > 80){
                    arr[i]['tage'] = 80
                }else{
                    arr[i]['tage'] = redWidth*1
                }
            }
            return arr
        },
        onScroll() {
            let visibleHeight = document.documentElement.clientHeight
            let scrollHeight = document.documentElement.scrollHeight
            let scrollTop = document.documentElement.scrollTop
            var that = this
            if ((document.documentElement.scrollTop||document.body.scrollTop) + window.innerHeight >= document.body.scrollHeight - 100) { //不能以等於0的寫法寫
                //加载更多操作
                if(that.moreState){
                    if(that.activeList === "FamilyList" &&　!that.isShare){
                        that.moreState = false
                        that.from = that.handRanks.length
                        api.getMore(that.from).then(function(val){
                            that.moreState = true
                            let newData = val.data.response_data
                            if(!newData){
                                return
                            }
                            let newArr = that.HandleRanks(newData.ranks)
                            that.handRanks = that.handRanks.concat(newArr)
                            that.$store.commit('changmyRanks',that.handRanks) //家族榜
                        })
                    }else if(that.activeList === "EliteList" &&　!that.isShare){
                            that.moreState = false
                            that.eliteFrom = that.eliteData.length
                            api.getEliteList(that.eliteFrom).then(function(val){
                                that.moreState = true
                                let newData = val.data.response_data
                                if(!newData){
                                    return
                                }
                                that.eliteData = that.eliteData.concat(newData.ranks)
                                that.$store.commit('changeeliteData',that.eliteData) //家族榜
                        })
                    }
                }
            }
        },
        Refresh(){//判斷狀態
            this.toaetRefres = true // 旋轉動畫
            setTimeout(() => {
                this.toaetRefres = false
            }, 1000);
            if(this.isShare)return
            window.removeEventListener("scroll",this.onScroll)
            var that =this
            if(that.reState){
                api.getCords().then(function(value){ //对战信息
                    that.pkList = value.data.response_data.pklist
                })
                if(that.activeList == "FamilyList"){ //當前是PK榜激活
                    that.from = 0
                    that.reState = false
                    api.getMore(that.from).then(function(val){
                        let newData = val.data.response_data
                        if(!newData){
                            return
                        }
                        let newArr = that.HandleRanks(newData.ranks)
                        that.handRanks = newArr
                        that.$store.commit('changmyRanks',newArr) //家族榜
                        that.reState = true
                        setTimeout(function(){
                                window.addEventListener("scroll",that.onScroll)
                        },500)
                    })
                }else if(this.activeList == "EliteList"){ //當前是精英榜激活
                    that.eliteFrom = 0
                    that.reState = false
                    api.getEliteList(that.eliteFrom).then(function(val){
                        let newData = val.data.response_data
                        if(!newData){
                            return
                        }
                        that.eliteData = newData.ranks
                        that.$store.commit('changeeliteData',newData.ranks) //家族榜
                        that.reState = true
                        setTimeout(function(){
                             window.addEventListener("scroll",that.onScroll)
                        },500)
                    })
                }
            }    

        }
    },
    components:{
        AtivityRewards,
        AtivityQualifications,
        Loading,
        BattleRecords,
        WarFooter
    }
}
</script>

<style lang="scss">
    body {
        background:linear-gradient(90deg,#A1023A,#5113BB);
    }
    .war{
        min-width: 7.5rem;
        background:url(../assets/img/图层51.png) no-repeat top;
        background-size: 100% auto;
        margin: auto;
        padding-bottom: 1.6rem;
        height: 20rem;
        .header{
            height: 8.54rem;
            position: relative;
            .buttonBox{
                position: absolute;
                right: 0;
                top:.32rem;
                a{
                    display: block;
                    width: 1.85rem;
                    height: 0.64rem;
                    text-indent: -999rem;
                }
                .rules{
                    background:url(../assets/img/rule_tab.png);
                    background-size: 100% 100%;
                    margin-bottom: .09rem;
                }
                .records{
                    background:url(../assets/img/jilu_tab.png);
                    background-size: 100% 100%;
                }
            }
        }
        .Refresh{
            display: block;
            width: 0.59rem;
            height: 0.57rem;
            background: url(../assets/img/Refresh.png);
            background-size: 100% 100%;
            position: fixed;
            right: .26rem;
            bottom: 1.72rem;
            z-index: 10000;
            text-indent: -999rem;
            transition: all 1s;
            transform:rotate(0deg);
        }
        .roaet{
            transform:rotate(360deg);
        }
    }
</style>
