<template>
    <div class="ativityRewards">
        <ul class="reward">
            <li>
                <img src="../assets/img/reward1.png" alt="">
                <p>首頁Live推薦<br>3號位</p>
            </li>
            <li>
                <img src="../assets/img/reward2.png" alt="">
                <p>家族全員</br>儲值返利</p>
            </li>
            <li>
                <img src="../assets/img/reward3.png" alt="">
                <p>赤鷹戰機座駕</p>
            </li>
            <li>
                <img src="../assets/img/reward4.png" alt="">
                <p>K房人數提升</p>
            </li>
            <li>
                <img src="../assets/img/reward5.png" alt="">
                <p>海量金幣</p>
            </li>
            <li>
                <img src="../assets/img/reward6.png" alt="">
                <p>家族專屬禮物</p>
            </li>
        </ul>
        
    </div>
</template>

<script>
export default {
    data(){
        return{
        }
    },
    created(){
    }
}
</script>

<style lang="scss">
    .ativityRewards{
        width: 7.02rem;
        height: 6rem;
        margin: 0 auto;
        background: url(../assets/img/01.png);
        background-size: 100% 100%;
        position: relative;
        .reward{
            padding-top: .6rem;
            height: 5.4rem;
            text-align: center;
            li{
                float: left;
                margin:0 0 .27rem .4rem; 
                p{
                    height: .65rem;
                    font-size: 85%;
                }
                img{
                    width: 1.8rem;
                    height: 1.8rem;
                }
            }
        }
        
    }
    .ativityRewards::after{
        content: "";
        width: 4.59rem;
        height: 1.13rem;
        position: absolute;
        background:url(../assets/img/活動獎勵標題2.png);
        background-size: 100% 100%;
        left: 1.16rem;
        top: -.55rem;
        right: 0;
    }
</style>
