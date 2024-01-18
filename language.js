document.addEventListener('DOMContentLoaded', function () {
    const translations = {
        Eng: {
            button1: 'Language',
            button2: 'Mode',
            button3: 'SOCH PARIWARTAN NEPAL',

            button4: ['First Program',],
            button5: ['2080/10/10',],
            button6: ['Program Will Be Happening In Poush 10 Saturday From Madan Bhandari Park To Golaghat',],
            button7: ['Learn More',],

            button8: ['Second Program',],
            button9: ['2080/10/14',],
            button10: ['Program Will Be Happening In Poush 14 Saturday For A Soch Annual Meeting',],
            button11: ['Learn More',],

            button12: ['Third Program',],
            button13: ['2080/10/25',],
            button14: ['Program Is Not Titled We Will Update You soon',],
            button15: ['Learn More',],

        },
        Nep: {
            button1: 'भाषा',
            button2: 'मोड',
            button3: 'सोच परिवर्तन नेपाल',

            button4: ['पहिलो कार्यक्रम',],
            button5: ['२०८०/१०/१०',],
            button6: ['कार्यक्रम पौष १० शनिबार मदन भण्डारी पार्क देखि गोलाघाट सम्म हुनेछ',],
            button7: ['थप जान्नुहोस्',],

            button8: ['दोस्रो कार्यक्रम',],
            button9: ['२०८०/१०/१४',],
            button10: ['सोच वार्षिक सभाको लागि पौष 14 शनिबार कार्यक्रम हुनेछ',],
            button11: ['थप जान्नुहोस्',],

            button12: ['तेस्रो कार्यक्रम',],
            button13: ['२०८०/१०/२५',],
            button14: ['कार्यक्रमको शीर्षक छैन हामी तपाईंलाई चाँडै अपडेट गर्नेछौं',],
            button15: ['थप जान्नुहोस्',],

        }
    };

    try {
        function changeLanguage(lang) {
            const elementsToTranslate = document.querySelectorAll('.program');


            elementsToTranslate.forEach((element, index) => {
                const key = element.getAttribute('data-translate');
                let translation = '';

                if (translations[lang] && translations[lang][key] || Array.isArray(translations[lang][key])) {
                    // Check if the translation array has the corresponding index
                    if (translations[lang][key][index] !== undefined) {
                        translation = translations[lang][key][index];
                    }
                } else {
                    translation = translations[lang][key];
                }

                element.innerText = translation;
            });
            const elementsToTranslate1 = document.querySelectorAll('[data-translate]');

            elementsToTranslate1.forEach(element => {
                const key = element.getAttribute('data-translate');
                if (translations[lang] && translations[lang][key]) {
                    element.innerText = translations[lang][key];
                }
            });
        }

    } catch (err) {
        console.log(err);
    }


    // Event listeners for language selection
    document.getElementById('Eng').addEventListener('click', () => changeLanguage('Eng'));
    document.getElementById('Nep').addEventListener('click', () => changeLanguage('Nep'));
});