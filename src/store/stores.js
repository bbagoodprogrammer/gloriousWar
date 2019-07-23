import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const store = new Vuex.Store({
    state:{
        isLoading:0, //loading效果
        isShare:false, //分享
        userState:0, //当前用户状态
        myFamilyMsg:{}, //我的家族信息
        step:0,  //活动状态
        ranks:[],  //家族排行榜
        own_family:{}, //所属家族信息
        eliteData:[],  //精英榜
        activeList:"FamilyList",  //当前那个榜单
        familyFarm:{},  //当前家族魅力信息
        PKfamilyMsg:{},  //PK榜弹窗信息
        boss:0,  //族長
        min_charm:0, //最小数值晋级
        family:[], //當前家族用戶
        isFamily:0 //是否家族用戶
    },
    mutations:{
        isLoaging(state,boolean){
            boolean ? ++state.isLoading : --state.isLoading
        },
        changShareState(state,boolean){
            state.isShare = boolean
        },
        changuserState(state,val){
            state.userState = val
        },
        changmyFamilyMsg(state,val){
            state.myFamilyMsg = val
        },
        changmyStep(state,val){
            state.step = val
        },
        changmyRanks(state,val){
            state.ranks = val
        },
        changeown_family(state,val){
            state.own_family = val
        },
        changeeliteData(state,val){
            state.eliteData = val
        },
        changeActiveList(state,val){
            state.activeList =val
        },
        changfamilyFarm(state,val){
            state.familyFarm = val
        },
        changPKfamilyMsg(state,val){
            state.PKfamilyMsg = val
        },
        changBoss(state,val){
            state.boss = val
        },
        changemin_charm(state,val){
            state.min_charm = val
        },
        changefamily(state,val){
            state.family = val
        },
        changeisFamily(state,val){
            state.isFamily = val
        }
    },
    actions:{
        setloading({commit},boolean){
            commit('isLoaging',boolean)
        }
    },
    getters:{}
}) 
export default store;