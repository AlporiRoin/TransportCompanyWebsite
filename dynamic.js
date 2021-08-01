function Class() {
    $Width = document.documentElement.clientWidth;
    $elemFooter = document.getElementById('footer-container');

    if ( $Width < 768 ) {
        console.log($elemFooter.className);
        $elemFooter.className = 'container';
        console.log($elemFooter.className);
    }
}

function menuOpening() {
    $elemMenu = document.querySelector('.device-menu__shell');

    $elemMenu.style.display = 'block';
}

function menuClosing() {
    $elemMenu = document.querySelector('.device-menu__shell');

    $elemMenu.style.display = 'none';
}

function panelInversion( $number ) {
    
    document.getElementById( 'panel_' + $number ).style.backgroundColor = '#C8A35F';
    document.getElementById('icon_' + $number ).style.backgroundColor = '#FFFFFF';
    document.getElementById('img_' + $number).style.filter = 'invert(1)';

}

function returnState( $number ) {

    document.getElementById( 'panel_' + $number ).style.backgroundColor = '#393F47';
    document.getElementById('icon_' + $number ).style.backgroundColor = '#393F47';
    document.getElementById('img_' + $number).style.filter = 'invert(0)';

}

function scrolling() {

    window.scrollBy(0, 770);

}

function russianLanguage() {

    document.getElementById('menu-service').innerHTML = 'УСЛУГИ';
    document.getElementById('menu-company').innerHTML = 'О КОМПАНИИ';
    document.getElementById('menu-vacancies').innerHTML = 'ВАКАНСИИ';
    document.getElementById('menu-contacts').innerHTML = 'КОНТАКТЫ';
    document.getElementById('menu-address').innerHTML = 'НАШИ ОФИСЫ';

    document.getElementById('address-offices').innerHTML = 'Наши офисы';
    document.getElementById('header-title__text').innerHTML = 'ГРУЗОВЫЕ ПЕРЕВОЗКИ';
    document.getElementById('header-subtitle__text').innerHTML = 'Перевозка крупногабаритных грузов по России и Европе. Полное экспедирование, страхование, упаковка и хранение грузов';

    document.getElementById('slide-title').innerHTML = 'ГРУЗОПЕРЕВОЗКИ ПО ЕВРОПЕ';
    document.getElementById('slide-subtitle').innerHTML = 'Страны Евросоюза, а также Украина, Белоруссия со всеми документами.';
    document.getElementById('slide-button').innerHTML = 'ПОДРОБНЕЕ';

    document.getElementById('button-next').innerHTML = 'СЛЕД';
    document.getElementById('button-back').innerHTML = 'НАЗАД';

    document.getElementById('all-services__title').innerHTML = 'УСЛУГИ';
    document.getElementById('panel-icon__text').innerHTML = 'АВИАПЕРЕВОЗКИ';

    document.getElementById('about-company__title').innerHTML = 'О КОМПАНИИ';

    document.getElementById('officess-title').innerHTML = 'офисов';
    document.getElementById('officess-subtitle').innerHTML = 'В Европе и СНГ';
    document.getElementById('trucks-title').innerHTML = 'грузовик';
    document.getElementById('trucks-subtitle').innerHTML = 'Volvo, Scania';
    document.getElementById('staff-title').innerHTML = 'сотрудников';
    document.getElementById('staff-subtitle').innerHTML = 'профессионалов';

    document.getElementById('russian-language').style.opacity = '1';
    document.getElementById('english-language').style.opacity = '.5';
    document.getElementById('french-language').style.opacity = '.5';

}

function englishLanguage() {

    document.getElementById('menu-service').innerHTML = 'SERVICES';
    document.getElementById('menu-company').innerHTML = 'ABOUT COMPANY';
    document.getElementById('menu-vacancies').innerHTML = 'VACANCIES';
    document.getElementById('menu-contacts').innerHTML = 'CONTACTS';
    document.getElementById('menu-address').innerHTML = 'OUR OFFICES';

    document.getElementById('address-offices').innerHTML = 'Our offices';
    document.getElementById('header-title__text').innerHTML = 'FREIGHT TRANSPORTATION';
    document.getElementById('header-subtitle__text').innerHTML = 'Transportation of oversized cargo in Russia and Europe. Full forwarding, insurance, packaging and storage of goods';

    document.getElementById('slide-title').innerHTML = 'CARGO TRANSPORTATION IN EUROPE';
    document.getElementById('slide-subtitle').innerHTML = 'EU countries, as well as Ukraine, Belarus with all documents.';
    document.getElementById('slide-button').innerHTML = 'LEARN MORE';

    document.getElementById('button-next').innerHTML = 'NEXT';
    document.getElementById('button-back').innerHTML = 'BACK';

    document.getElementById('all-services__title').innerHTML = 'SERVICES';
    document.getElementById('panel-icon__text').innerHTML = 'AIR TRANSPORTATION';

    document.getElementById('about-company__title').innerHTML = 'ABOUT COMPANY';

    document.getElementById('officess-title').innerHTML = 'offices';
    document.getElementById('officess-subtitle').innerHTML = 'In Europe and the CIS';
    document.getElementById('trucks-title').innerHTML = 'truck';
    document.getElementById('trucks-subtitle').innerHTML = 'Volvo, Scania';
    document.getElementById('staff-title').innerHTML = 'employees';
    document.getElementById('staff-subtitle').innerHTML = 'professionals';

    document.getElementById('russian-language').style.opacity = '.5';
    document.getElementById('english-language').style.opacity = '1';
    document.getElementById('french-language').style.opacity = '.5';

}

function frenchLanguage() {

    document.getElementById('menu-service').innerHTML = 'PRESTATIONS DE SERVICE';
    document.getElementById('menu-company').innerHTML = 'À PROPOS DE LA SOCIÉTÉ';
    document.getElementById('menu-vacancies').innerHTML = 'VACANCES';
    document.getElementById('menu-contacts').innerHTML = 'CONTACTS';
    document.getElementById('menu-address').innerHTML = 'NOS BUREAUX';

    document.getElementById('address-offices').innerHTML = 'Nos bureaux';
    document.getElementById('header-title__text').innerHTML = 'TRANSPORT DE FRET';
    document.getElementById('header-subtitle__text').innerHTML = 'Transport de marchandises surdimensionnées en Russie et en Europe. Expédition complète, assurance, emballage et stockage des marchandises';

    document.getElementById('slide-title').innerHTML = 'TRANSPORT DE MARCHANDISES EN EUROPE';
    document.getElementById('slide-subtitle').innerHTML = 'Pays de l\'UE, ainsi que l\'Ukraine, la Biélorussie avec tous les documents.';
    document.getElementById('slide-button').innerHTML = 'APPRENDRE ENCORE PLUS';

    document.getElementById('button-next').innerHTML = 'SUIVANT';
    document.getElementById('button-back').innerHTML = 'ARRIÈRE';

    document.getElementById('all-services__title').innerHTML = 'PRESTATIONS DE SERVICE';
    document.getElementById('panel-icon__text').innerHTML = 'TRANSPORT AÉRIEN';

    document.getElementById('about-company__title').innerHTML = 'À PROPOS DE LA SOCIÉTÉ';

    document.getElementById('officess-title').innerHTML = 'des bureaux';
    document.getElementById('officess-subtitle').innerHTML = 'En Europe et dans la CEI';
    document.getElementById('trucks-title').innerHTML = 'un camion';
    document.getElementById('trucks-subtitle').innerHTML = 'Volvo, Scania';
    document.getElementById('staff-title').innerHTML = 'employés';
    document.getElementById('staff-subtitle').innerHTML = 'professionnels';

    document.getElementById('russian-language').style.opacity = '.5';
    document.getElementById('english-language').style.opacity = '.5';
    document.getElementById('french-language').style.opacity = '1';

}

// alert(document.documentElement.clientWidth);