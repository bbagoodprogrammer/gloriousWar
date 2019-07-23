<template>
    <div class="rule">
        <h5>活動時間</h5>
        <p class="time">7月16日10:00-7月27日24:00</p>
        <h5>榮耀家族戰活動規則</h5>
        <div class="action">
            <h6>活動報名</h6>
            <p>僅家族長在活動頁面點擊報名有效</p>
            <h6>參戰資格</h6>
            <p>在7月16日10:00:00-7月22日 20:00:00期間，家族K房獲得10萬魅力值</p>
            <h6>匹配對戰</h6>
            <div class="ward">
                <p>1.匹配時間</p>
                <div class="wardAction">
                    <p>7月22日-7月27日</p>
                    <p>每日匹配兩場 </p>
                </div>
                <p> ⑴ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;匹配時間：20:00-20:05</p>
                <p class="ti">PK時間：20:05-20:59</p>
                <p> ⑵ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;匹配時間：21:00-21:05</p>
                <p class="ti">PK時間：21:05-22:00</p>
                <p class="mechanism">2.匹配機制</p>
                <p>獲得參戰資格的家族兩兩匹配，每天進行的兩場匹配對手不可重複。若參戰家族為奇數，則任意一個家族可匹配輪空，輪空家族判定獲勝，一定要抓住好機會哦。</p>
            </div>
            <h6>戰力值規則</h6>
            <p>單場戰鬥戰力值計算方式：</br>
                獲勝家族本場戰力值=魅力值*105%</br>
                失敗家族和平局家族戰力值=魅力值*1
            </p>
            <h6>榮耀家族榜排行規則</h6>
            <p>依據家族累計戰力值排行，前10名家族可獲得對應獎勵。</p>
            <h6>家族菁英榜排行規則</h6>
            <p>家族菁英依據用戶在第一階段報名成功的家族K房與PK時段進入到第二階段的家族K房貢獻的魅力值排行，前10名玩家可獲得對應獎勵。</p>
        </div>
        <h5>注意事項</h5>
        <div class="action">    
            <p>1、還沒有加入家族的玩家可在活動期間加入任意家族參與活動。</br>2、如被發現參賽用戶有任何違規刷分行為，將直接取消用戶參賽資格及獎勵，嚴重者封號處理。</p>
        </div>  
        <p class="ownership">本活動的最終解釋權歸活動主辦方所有</p>
    </div>
</template>
<script>
export default {
    
}
</script>

<style lang="scss">
    .rule{
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
            .ward{
                p{
                    margin: 0;
                }
                .wardAction{
                    text-indent: .4rem;
                    >p{
                        margin: 0;
                    }
                }
                .ti{
                    text-indent: .75rem;
                }
                .mechanism{
                    margin-top: .4rem;
                }
            }
            
        }
         .ownership{
            font-size: 110%;
            color:#19FFE7;
            text-align: center;
        }
    }
</style>
