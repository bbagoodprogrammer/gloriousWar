<template>
    <div class="rewards">
        <h5>活動時間</h5>
        <p class="time">7月16日10:00-7月27日24:00</p>
        <h5>榮耀家族榜獎勵</h5>
        <div class="action">
            <h6>第1名</h6>
            <p>
                1.首頁LIVE推薦3號位（1天）</br>
                2.K房容量提升至200人（30天）</br>
                3.10000金幣+10000金豆</br>
                4.家族權杖禮物50個(99金幣/個）</br>
                5.全員儲值返利5%（1天）</br>
                6.每位族長及副族長獲得赤鷹戰機座駕（30天）和家族權杖禮物20個
            </p>
            <h6>第2名</h6>
            <p>
                1.首頁LIVE推薦3號位（1天）</br>
                2.K房容量提升至200人（30天）</br>
                3.8000金幣+8000金豆</br>
                4.家族戒指禮物50個（50金幣/個）</br>
                5.全員儲值返利4%（1天）</br>
                6.每位族長及副族長獲得赤鷹戰機座駕（30天）和家族戒指禮物20個

            </p>
            <h6>第3名</h6>
            <p>
                1.首頁LIVE推薦3號位（1天）</br>
                2.K房容量提升至200人（30天）</br>
                3.5000金幣+5000金豆</br>
                4.家族鑰匙禮物50個（20金幣/個）</br>
                5.全員儲值返利3%（1天）</br>
                6.每位族長及副族長獲得赤鷹戰機座駕（30天）和家族鑰匙禮物20個
            </p>
            <h6>第4-10名</h6>
            <p>
                1.2000金幣+2000金豆</br>
                2.家族之星禮物50個（10金幣/個）</br>
                3.每位族長及副族長獲得家族之星禮物20個
            </p>
            <p class="especiall">特別說明，禮物發放至背包</p>
        </div>
        <h5 class="elite">家族菁英榜獎勵</h5>
        <div class="eliteWards">
            <div class="action">
                <h6>第1名</h6>
                <p>家族菁英徽章（30天）+赤鷹戰機座駕（7天）+1000金幣+1000金豆</p>
                <h6>第2名</h6>
                <p>家族菁英徽章（30天）+赤鷹戰機座駕（7天）+500金幣+500金豆</p>
                <h6>第3名</h6>
                <p>家族菁英徽章（30天）+赤鷹戰機座駕（7天）+200金幣+200金豆</p>
                <h6>第4-10名</h6>
                <p>家族菁英徽章（30天）+赤鷹戰機座駕（7天）+100金幣+100金豆</p>
            </div>
        </div>
        <h5 class="matters">注意事項</h5>
        <div class="action">
            <p>1、前三名家族獲得的首頁LIVE推薦3號位（1天）獎勵需在活動結束後30天內使用，過期無效，排名靠前優先選擇使用日期。</p>
            <p>2、榮耀家族榜所獎勵的金幣、金豆和家族禮物由族長分配給家族成員，活動結束3日內工作人員會聯絡家族長。</p>
            <p>3、榮耀家族榜前三名家族將獲得全員儲值返利，返利成員名單依據活動截止時計算，返利時間為7月28日-8月26日內任選一天。</p>
        </div>
        <p class="ownership">本活動的最終解釋權歸活動主辦方所有</p>
    </div>
    
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    .rewards{
        padding: 0 .26rem 1.29rem;
        h5{
            color:#FFEFBB;
            line-height: .3rem;
            font-weight: 400;
            margin-top: .3rem;
        }
        .time{
            line-height: 0.3rem;
            font-size: 90%;
            margin-top: .14rem;
        }
        .action{
            padding:0 0 .7rem .64rem;      
            h6{
                color:#19FFE7;
                font-size: 90%;
                margin-top: .3rem;
            }
            h6:first-child{
                margin-top: 0.2rem;
            }
            p{
                font-size: 90%;
                line-height: .44rem;
                margin-top: 0.1rem;
            }
            .especiall{
                color:#19FFE7;
                font-size: 90%;
                margin-top: .5rem;
            }
        }
        .elite .matters{
            margin: 0;
        }
        .ownership{
            font-size: 110%;
            color:#19FFE7;
            text-align: center;
        }
    }
</style>

