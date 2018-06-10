//function called when new proverb button is clicked, and on page load
function newProv(){
    var i = Math.floor(Math.random()*proverb.length);
    
    document.getElementById("text").innerHTML = proverb[i][0];
    document.getElementById("author").innerHTML = proverb[i][1];
    console.log(i);
}

//function called when tweet button is clicked
function tweet(){
    var provEn = document.getElementById("text").innerHTML;//English
    var provCh = document.getElementById("author").innerHTML;//Chinese
//    var twitter = 'https://twitter.com/home?status=' +encodeURIComponent(provEn + " " + provCh);
    var twitter = 'https://twitter.com/intent/tweet?text=' +encodeURIComponent(provEn + " " + provCh);
    
    window.open(twitter, "_blank");   
}

//array where the proverbs are stored. I will add more later...
var proverb = [["It is better to say nothing than nothing of purpose.", "一言中，千言無用。"],
               ["Every dog has his day.", "十年河東轉河西。"],
               ["No bees, no honey; no work, no money.", "天下沒有白吃的午餐。"],
               ["All bread is not baked in one oven.", "人心不同，猶如其面。"],
               ["Easy come, easy go.", "僥倖之財難久留。"],
               ["Two heads are better than one.","三個臭皮匠，一個諸葛亮。"],
               ["Few words are best.", "少說為妙。"],
               ["Circumstances are the rulers of the weak, instrument of the wise.", "弱者困於環境，智者利用環境。"],
               ["An enemy may chance to give good counsel.", "敵人也可能給人好的忠告。"],
               ["A good conscience is a soft pillow.", "行止清白，高枕無憂。"],
               ["Counsel must be followed, not praised.", "忠告一定要遵守，不是要稱讚。"],
               ["All cats love fish but fear to wet their paws.", "想不勞而獲，將-事無成。"],
               ["A constant guest is never welcome.", "常客難受歡迎。"],
               ["All are not thieves that dogs bark at.", "狗所吠者，末必皆賊。"],
               ["When the cat's away, the mice will play.", "閻王不在，小鬼做怪。"]];

//loads random proberb on page load
window.onload = newProv();

//executes when proverb button is clicked
document.getElementById("new-quote").onclick = function(){
    newProv();
}

//executes when tweet button is clicked
document.getElementById("tweet-quote").onclick = function(){
    tweet();
}