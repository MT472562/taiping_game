var p = document.getElementById('text');

var textLists = [
    "yamatanoorochi",
    "susanowohainochiwoowarete",
    "izumonokawakaminioritachimasita",
    "sokodekawakaminihitogasunndeirutoomotte",
    "tazunetemirutorououtoroubagahutaridenaiteimasu",
    "sokodeanatahadaredesukato",
    "tazunetemiruto",
    "watashihakonokuninokaminokodeashinazuchitoii",
    "tumanonahatenazuchi",
    "musumenonahakushinadahimetoiimasu",
    "mataanatanonakunohanazedesukatokikuto",
    "watashinomusumehamotohahachininorimashitagasorewo",
    "yamatanorochigamaitoshikitetabeteshimaimasu",
    "imamomatasorenokurujikidesu",
    "tomoushimashita",
    "soshitesusanowoha",
    "moshiwatashigayamatanorochiwooiharaeba",
    "anatanomusumewowatashinikuremasenka",
    "toiimashita",
    "watashihaamaterasuomikaminootoutodesu",
    "suruto",
    "soudeshitaraosoreooikotodesu",
    "musumewosashiagemashou",
    "toiimashita",
    "susanowohayattunotuboni",
    "koisakewoippaiiretemattenasaitoiimashita",
    "matteirutoyamatanorochigayattekite",
    "sakewonomihajimemashita",
    "soshiteyopparatteneteshimaimashita",
    "sokodesusanowohanagaikenwonuite",
    "orochinokubiworyodanshimashita",
    "orochinochigakawanoyoninagaredashimashita",
    "orochiwokirutokennosakigasukoshikoboremashita",
    "korehananikaarutomottekensakidesaitemitara",
    "orochinoharanonakanisurudoitachigaarimashita",
    "susanowohakonotachiwoamaterasuomikaminikenjoushimashita",
    "koregakusanaginoturugidesu",
];
var checkTexts = [];
mono = 0
createText();

function createText() {
    var rnd = mono
    console.log(rnd)
    mono = mono+=1
    p.textContent = '';

    checkTexts = textLists[rnd].split('').map(function(value) {
        var span = document.createElement('span');
        span.textContent = value;
        p.appendChild(span);
        return span;
    });
}
document.addEventListener('keydown', keyDown);

function keyDown(e) {
    if(e.key === checkTexts[0].textContent) {
        checkTexts[0].className = 'add-blue';
        checkTexts.shift();

        if(!checkTexts.length ) createText();
    }
}