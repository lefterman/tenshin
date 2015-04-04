(function (services) {
    'use strict';
    services.service('newsSrvc', ['$q', function ($q) {
        var news = [
            {
                title: 'Ovikarate tanfolyam nyilvános edzés',
                date: '2015. április 28. kedd, 16:45 óra',
                imgUrl: 'assets/img/ovi_karate_2.jpg',
                imgTitle: 'Ovi Karate nyilvanos edzés',
                text: '<p>Kedves Szülők! A Ten-Shin Karate Dodzsó sok szeretettel várja az OVIKARATE tanfolyam nyilvános edzésére, ahol megtekintheti a gyerekek munkájának eredményét. Megismerheti egyesületünk „KIS-TIGRISEK” csapatát. A záró foglalkozás ünnepélyes keretek között diplomaosztót tartunk.</p><p><i>Az esemény helye:</i> Éltes Mátyás iskola alagsori tornaterme Hajdúszoboszló Dózsa György út 10 - 12.</p>',
                fbUrl: ''
            }, {
                title: 'Randori 50+',
                date: '2015. szeptember 26.',
                imgUrl: 'assets/img/randori_50-plus_200x200.jpg',
                imgTitle: 'Randori 50+',
                text: '<p>\
                        2013. év szeptember 21-én második alkalommal került megrendezésre a RANDORI KEIKO. Az esemény sikerén felbuzdulva, arra döntöttünk tanítványaimmal, hogy 2015. szeptember 26.-án szombaton ismételten, immár harmadik alkalommal kerül megrendezésre ez a különleges találkozó. Az eseménynek ismételten Hajdúszoboszló városa ad majd otthont. Emelve a tétet az 50 ellenfeles RANDORIRA szeretettel hívunk minden karatékát, aki szeretné megismerni teljesítő képessége határait. Az előzőek tapasztalatából kiindulva biztos vagyok benne, hogy mindegyikünk számára ez egy komoly fizikai és mentális erőpróba lesz!\
A KEIKO (gyakorlás) célja baráti kapcsolatok építése a magyarországi és külföldi karate stílusok és stílusszervezetek között. Ezen a szervezetektől független találkozón lehetőség nyílik arra, hogy a különböző iskolák gyakorlói jobban megismerhessék egymást és együtt gyakorolhassák a KARATE-DO küzdelmi elemeit. Az 50 ellenfeles RANDORIRA elsősorban azok jelentkezését várjuk, akik rendelkeznek megfelelő technikai jártassággal és mentálisan kellő önkontrollal bírnak. A szeptemberi viszontlátásra!\
                    </p>',
                fbUrl: 'https://www.facebook.com/events/854078994665194/'
            }, {
                title: 'Ovi-Karate',
                date: 'február 6-tól',
                imgUrl: 'assets/img/ovi_karate_reka_dani_200x200.jpg',
                imgTitle: 'Ovi Karate',
                text: '<p>\
                        Két hónapos karate tanfolyam indul a <strong>Lurkó Óvoda</strong> nagycsoportosai részére. <br />A tanfolyam díját az egyesületünk teljes összegben felajánlotta az óvoda alapítványának.\
                    </p>\
                    <p>\
                        Edzések minden pénteken 15:30-tól.\
                    </p>',
                fbUrl: 'https://hu-hu.facebook.com/events/1518168121806368'
            }, {
                title: 'Masaji Taira Szeminárium',
                date: '2015 április',
                imgUrl: 'assets/img/sensei_taira_200x200.jpg',
                imgTitle: 'Taira Sensei seminar Udine',
                text: '<h2>Itália Udine</h2>\
                <p>részletes információ Kiss László email: tensindo@gmail.com</p>',
                fbUrl: ''
            }
        ];
        this.getNews = function () {
            return $q.when(news);
        };
    }]);
}(angular.module('tenshinApp.services')));