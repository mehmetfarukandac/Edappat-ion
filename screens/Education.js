import * as React from 'react';
import { Wrap } from "@react-native-material/core";
import EducationCard from '../components/EducationCard';
import { ScrollView } from 'react-native';
import HeaderProject from '../components/HeaderProject';

const dersler = [
    {
        title: "Foreign Languages",
        type: "Language",
        url: 'https://img.freepik.com/premium-vector/translator-app-logo-language-translation-icon_349999-1256.jpg?w=2000',
        data: [
            {
                title: "Turkish",
                url: "https://www.olkando.com/wp-content/uploads/2016/09/cropped-tc-bayrak-1.png",
                words: [
                    {
                        key: "able",
                        value: "yapabilen"
                    },
                    {
                        key: "about",
                        value: "hakkında"
                    },
                    {
                        key: "above",
                        value: "üstünde"
                    },
                    {
                        key: "across",
                        value: "karşısında"
                    },
                    {
                        key: "able",
                        value: "hareket, eylem"
                    },
                    {
                        key: "action",
                        value: "Aksiyon"
                    },
                    {
                        key: "actually ",
                        value: "aslında"
                    },
                    {
                        key: "add",
                        value: "eklemek"
                    },
                    {
                        key: "addition",
                        value: "ek olarak"
                    },
                    {
                        key: "addjective",
                        value: "sıfat"
                    },
                ]
            },
            {
                title: "Deutsch",
                url: "https://asset.tureng.com/images/circle-big-german.png",
                words: [
                    {
                        key: "able",
                        value: "fähig"
                    },
                    {
                        key: "about",
                        value: "um"
                    },
                    {
                        key: "above",
                        value: "Oben"
                    },
                    {
                        key: "across",
                        value: "gegen"
                    },
                    {
                        key: "able",
                        value: "Bewegung, Aktion"
                    },
                    {
                        key: "action",
                        value: "Aktion"
                    },
                    {
                        key: "actually ",
                        value: "eigentlich"
                    },
                    {
                        key: "add",
                        value: "hinzufügen"
                    },
                    {
                        key: "addition",
                        value: "Zusatz"
                    },
                    {
                        key: "addjective",
                        value: "Adjektiv"
                    },
                ]
            },
            {
                title: "French",
                url: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png",
                words: [
                    {
                        key: "able",
                        value: "pouvoir"
                    },
                    {
                        key: "about",
                        value: "sur"
                    },
                    {
                        key: "above",
                        value: "au dessus"
                    },
                    {
                        key: "across",
                        value: "contre"
                    },
                    {
                        key: "able",
                        value: "mouvement, action"
                    },
                    {
                        key: "action",
                        value: "action"
                    },
                    {
                        key: "actually ",
                        value: "réellement"
                    },
                    {
                        key: "add",
                        value: "ajouter"
                    },
                    {
                        key: "addition",
                        value: "ajout"
                    },
                    {
                        key: "addjective",
                        value: "adjectif"
                    },
                ]
            },
        ]
    },
    {
        title: "Who is Ali Okatan?",
        name: "Ali Okatan",
        type: "About",
        detail: "",
        url: 'https://i4.hurimg.com/i/hurriyet/75/1200x675/615c267d4e3fe01788cf4366.jpg'
    },
    {
        title: "Football History",
        type: "About",
        url: 'https://bayprofesor.com/wp-content/uploads/2020/08/futbol-tarihi-756x470.jpg'
    },
    {
        title: "Turkish Clubs",
        type: "About",
        url: 'https://upload.wikimedia.org/wikipedia/tr/thumb/8/86/Fenerbah%C3%A7e_SK.png/200px-Fenerbah%C3%A7e_SK.png'
    },
    {
        title: "About Countries",
        type: "About",
        url: 'https://www.mozaweb.com/tr/mozaik3D/FOL/altalanos/vilag_orszagai/960.jpg'
    },
    {
        title: "General Culture",
        url: 'https://i2.hbrcdn.com/haber/2021/02/12/genel-kultur-sorulari-2021-kisa-genel-kultur-13923302_3858_amp.jpg'
    },
    {
        title: "Books",
        type: "About",
        url: 'https://img1-kidega.mncdn.com/UPLOAD/blog/large/dunya-capinda-satis-rekorlari-kirmis-kitaplar.jpg'
    },
    {
        title: "Authors",
        type: "About",
        url: 'https://fikirilegelecek.com/wp-content/uploads/2020/11/Iste-Senin-Hikayen-1024x1024-1-e1609157618804.jpg'
    },
    {
        title: "Who is Mehmet Faruk Andaç?",
        type: "About",
        url: 'https://www.mehmetfarukandac.com/img/FARUK.jpg'
    },
]

function EducationScreen({ navigation }) {
    return (
        <ScrollView>
            <HeaderProject title={"What do you want to learn?"} />
            <Wrap>
                {
                    dersler.map((ders, index) => (
                        <EducationCard
                            navigation={navigation}
                            ders={ders}
                            index={index}
                        />
                    ))
                }
            </Wrap>
        </ScrollView>
    );
}

export default EducationScreen