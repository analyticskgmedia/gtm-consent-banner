/**
 * KG Media Consent Banner v2.0
 * GDPR-compliant consent banner with Google Consent Mode v2
 * Now with consent logging support for GDPR compliance
 * (c) 2025 KG Media
 */

(function() {
    'use strict';

    // Multi-language translations
    const translations = {
        en: {
            title: "We value your privacy",
            description: "We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. Please choose your cookie preferences below.",
            acceptAll: "Accept All",
            rejectAll: "Reject All",
            details: "Details",
            save: "Save Preferences",
            necessary: "Necessary",
            necessaryDesc: "Essential for the website to function properly",
            analytics: "Analytics",
            analyticsDesc: "Help us understand how visitors use our website",
            marketing: "Marketing",
            marketingDesc: "Used to deliver personalized advertisements",
            functional: "Functional",
            functionalDesc: "Enable enhanced functionality and personalization",
            privacyPolicy: "Privacy Policy",
            cookieSettings: "Cookie Settings",
            poweredBy: "Powered by:"
        },
        de: {
            title: "Wir respektieren Ihre Privatsphäre",
            description: "Wir verwenden Cookies, um Ihr Browsing-Erlebnis zu verbessern, personalisierte Inhalte bereitzustellen und unseren Traffic zu analysieren. Bitte wählen Sie unten Ihre Cookie-Einstellungen.",
            acceptAll: "Alle akzeptieren",
            rejectAll: "Alle ablehnen",
            details: "Details",
            save: "Einstellungen speichern",
            necessary: "Notwendig",
            necessaryDesc: "Wesentlich für das ordnungsgemäße Funktionieren der Website",
            analytics: "Analytik",
            analyticsDesc: "Helfen uns zu verstehen, wie Besucher unsere Website nutzen",
            marketing: "Marketing",
            marketingDesc: "Wird verwendet, um personalisierte Werbung zu liefern",
            functional: "Funktional",
            functionalDesc: "Ermöglichen erweiterte Funktionalität und Personalisierung",
            privacyPolicy: "Datenschutzerklärung",
            cookieSettings: "Cookie-Einstellungen",
            poweredBy: "Bereitgestellt von:"
        },
        fr: {
            title: "Nous respectons votre vie privée",
            description: "Nous utilisons des cookies pour améliorer votre expérience de navigation, fournir du contenu personnalisé et analyser notre trafic. Veuillez choisir vos préférences de cookies ci-dessous.",
            acceptAll: "Tout accepter",
            rejectAll: "Tout refuser",
            details: "Détails",
            save: "Enregistrer les préférences",
            necessary: "Nécessaire",
            necessaryDesc: "Essentiel au bon fonctionnement du site",
            analytics: "Analytique",
            analyticsDesc: "Nous aide à comprendre comment les visiteurs utilisent notre site",
            marketing: "Marketing",
            marketingDesc: "Utilisé pour diffuser des publicités personnalisées",
            functional: "Fonctionnel",
            functionalDesc: "Active des fonctionnalités et une personnalisation améliorées",
            privacyPolicy: "Politique de confidentialité",
            cookieSettings: "Paramètres des cookies",
            poweredBy: "Propulsé par:"
        },
        es: {
            title: "Valoramos tu privacidad",
            description: "Utilizamos cookies para mejorar tu experiencia de navegación, ofrecer contenido personalizado y analizar nuestro tráfico. Por favor, elige tus preferencias de cookies a continuación.",
            acceptAll: "Aceptar todo",
            rejectAll: "Rechazar todo",
            details: "Detalles",
            save: "Guardar preferencias",
            necessary: "Necesarias",
            necessaryDesc: "Esenciales para el funcionamiento del sitio web",
            analytics: "Analíticas",
            analyticsDesc: "Nos ayudan a entender cómo los visitantes usan nuestro sitio",
            marketing: "Marketing",
            marketingDesc: "Se utilizan para ofrecer publicidad personalizada",
            functional: "Funcionales",
            functionalDesc: "Habilitan funcionalidad mejorada y personalización",
            privacyPolicy: "Política de privacidad",
            cookieSettings: "Configuración de cookies",
            poweredBy: "Desarrollado por:"
        },
        it: {
            title: "Rispettiamo la tua privacy",
            description: "Utilizziamo i cookie per migliorare la tua esperienza di navigazione, fornire contenuti personalizzati e analizzare il nostro traffico. Scegli le tue preferenze sui cookie qui sotto.",
            acceptAll: "Accetta tutto",
            rejectAll: "Rifiuta tutto",
            details: "Dettagli",
            save: "Salva preferenze",
            necessary: "Necessari",
            necessaryDesc: "Essenziali per il corretto funzionamento del sito",
            analytics: "Analitici",
            analyticsDesc: "Ci aiutano a capire come i visitatori usano il nostro sito",
            marketing: "Marketing",
            marketingDesc: "Utilizzati per fornire pubblicità personalizzata",
            functional: "Funzionali",
            functionalDesc: "Abilitano funzionalità avanzate e personalizzazione",
            privacyPolicy: "Informativa sulla privacy",
            cookieSettings: "Impostazioni cookie",
            poweredBy: "Fornito da:"
        },
        nl: {
            title: "We respecteren uw privacy",
            description: "We gebruiken cookies om uw browse-ervaring te verbeteren, gepersonaliseerde content te leveren en ons verkeer te analyseren. Kies hieronder uw cookievoorkeuren.",
            acceptAll: "Alles accepteren",
            rejectAll: "Alles weigeren",
            details: "Details",
            save: "Voorkeuren opslaan",
            necessary: "Noodzakelijk",
            necessaryDesc: "Essentieel voor het goed functioneren van de website",
            analytics: "Analytics",
            analyticsDesc: "Helpen ons begrijpen hoe bezoekers onze site gebruiken",
            marketing: "Marketing",
            marketingDesc: "Gebruikt om gepersonaliseerde advertenties te leveren",
            functional: "Functioneel",
            functionalDesc: "Schakelen verbeterde functionaliteit en personalisatie in",
            privacyPolicy: "Privacybeleid",
            cookieSettings: "Cookie-instellingen",
            poweredBy: "Aangedreven door:"
        },
        pl: {
            title: "Szanujemy Twoją prywatność",
            description: "Używamy plików cookie, aby ulepszyć Twoje doświadczenie przeglądania, dostarczać spersonalizowane treści i analizować nasz ruch. Wybierz swoje preferencje dotyczące plików cookie poniżej.",
            acceptAll: "Zaakceptuj wszystko",
            rejectAll: "Odrzuć wszystko",
            details: "Szczegóły",
            save: "Zapisz preferencje",
            necessary: "Niezbędne",
            necessaryDesc: "Niezbędne do prawidłowego funkcjonowania strony",
            analytics: "Analityczne",
            analyticsDesc: "Pomagają nam zrozumieć, jak odwiedzający korzystają z naszej strony",
            marketing: "Marketingowe",
            marketingDesc: "Używane do dostarczania spersonalizowanych reklam",
            functional: "Funkcjonalne",
            functionalDesc: "Umożliwiają ulepszoną funkcjonalność i personalizację",
            privacyPolicy: "Polityka prywatności",
            cookieSettings: "Ustawienia plików cookie",
            poweredBy: "Obsługiwane przez:"
        },
        pt: {
            title: "Respeitamos a sua privacidade",
            description: "Usamos cookies para melhorar sua experiência de navegação, fornecer conteúdo personalizado e analisar nosso tráfego. Por favor, escolha suas preferências de cookies abaixo.",
            acceptAll: "Aceitar tudo",
            rejectAll: "Rejeitar tudo",
            details: "Detalhes",
            save: "Guardar preferências",
            necessary: "Necessários",
            necessaryDesc: "Essenciais para o funcionamento adequado do site",
            analytics: "Analíticos",
            analyticsDesc: "Ajudam-nos a entender como os visitantes usam nosso site",
            marketing: "Marketing",
            marketingDesc: "Usados para fornecer anúncios personalizados",
            functional: "Funcionais",
            functionalDesc: "Permitem funcionalidade aprimorada e personalização",
            privacyPolicy: "Política de privacidade",
            cookieSettings: "Configurações de cookies",
            poweredBy: "Desenvolvido por:"
        },
        hr: {
            title: "Cijenimo vašu privatnost",
            description: "Koristimo kolačiće za poboljšanje vašeg iskustva pregledavanja, pružanje personaliziranog sadržaja i analizu našeg prometa. Molimo odaberite svoje postavke kolačića ispod.",
            acceptAll: "Prihvati sve",
            rejectAll: "Odbaci sve",
            details: "Detalji",
            save: "Spremi postavke",
            necessary: "Nužni",
            necessaryDesc: "Bitni za pravilno funkcioniranje web stranice",
            analytics: "Analitički",
            analyticsDesc: "Pomažu nam razumjeti kako posjetitelji koriste našu stranicu",
            marketing: "Marketinški",
            marketingDesc: "Koriste se za prikazivanje personaliziranih oglasa",
            functional: "Funkcionalni",
            functionalDesc: "Omogućavaju poboljšanu funkcionalnost i personalizaciju",
            privacyPolicy: "Pravila privatnosti",
            cookieSettings: "Postavke kolačića",
            poweredBy: "Omogućeno od:"
        },
        cs: {
            title: "Respektujeme vaše soukromí",
            description: "Používáme cookies ke zlepšení vašeho prohlížení, poskytování personalizovaného obsahu a analýze našeho provozu. Vyberte si prosím své preference cookies níže.",
            acceptAll: "Přijmout vše",
            rejectAll: "Odmítnout vše",
            details: "Podrobnosti",
            save: "Uložit preference",
            necessary: "Nezbytné",
            necessaryDesc: "Nezbytné pro správné fungování webu",
            analytics: "Analytické",
            analyticsDesc: "Pomáhají nám pochopit, jak návštěvníci používají náš web",
            marketing: "Marketingové",
            marketingDesc: "Používají se k zobrazování personalizované reklamy",
            functional: "Funkční",
            functionalDesc: "Umožňují vylepšenou funkčnost a personalizaci",
            privacyPolicy: "Zásady ochrany osobních údajů",
            cookieSettings: "Nastavení cookies",
            poweredBy: "Poskytuje:"
        },
        bg: {
            title: "Ние уважаваме вашата поверителност",
            description: "Използваме бисквитки, за да подобрим вашето сърфиране, да предоставяме персонализирано съдържание и да анализираме нашия трафик. Моля, изберете вашите предпочитания за бисквитки по-долу.",
            acceptAll: "Приемам всички",
            rejectAll: "Отхвърлям всички",
            details: "Подробности",
            save: "Запази предпочитания",
            necessary: "Необходими",
            necessaryDesc: "Съществени за правилното функциониране на уебсайта",
            analytics: "Аналитични",
            analyticsDesc: "Помагат ни да разберем как посетителите използват нашия сайт",
            marketing: "Маркетингови",
            marketingDesc: "Използват се за показване на персонализирани реклами",
            functional: "Функционални",
            functionalDesc: "Позволяват подобрена функционалност и персонализация",
            privacyPolicy: "Политика за поверителност",
            cookieSettings: "Настройки на бисквитките",
            poweredBy: "Предоставено от:"
        },
        da: {
            title: "Vi respekterer dit privatliv",
            description: "Vi bruger cookies til at forbedre din browsing-oplevelse, levere personligt indhold og analysere vores trafik. Vælg venligst dine cookie-præferencer nedenfor.",
            acceptAll: "Accepter alle",
            rejectAll: "Afvis alle",
            details: "Detaljer",
            save: "Gem præferencer",
            necessary: "Nødvendige",
            necessaryDesc: "Essentielle for at hjemmesiden fungerer korrekt",
            analytics: "Analytiske",
            analyticsDesc: "Hjælper os med at forstå, hvordan besøgende bruger vores hjemmeside",
            marketing: "Marketing",
            marketingDesc: "Bruges til at levere personlige annoncer",
            functional: "Funktionelle",
            functionalDesc: "Aktiverer forbedret funktionalitet og personalisering",
            privacyPolicy: "Privatlivspolitik",
            cookieSettings: "Cookie-indstillinger",
            poweredBy: "Leveret af:"
        },
        et: {
            title: "Me austame teie privaatsust",
            description: "Kasutame küpsiseid teie sirvimiskogemuse parandamiseks, isikupärastatud sisu pakkumiseks ja liikluse analüüsimiseks. Palun valige allpool oma küpsiste eelistused.",
            acceptAll: "Nõustu kõigiga",
            rejectAll: "Keeldu kõigist",
            details: "Üksikasjad",
            save: "Salvesta eelistused",
            necessary: "Vajalikud",
            necessaryDesc: "Hädavajalikud veebisaidi korrektseks toimimiseks",
            analytics: "Analüütilised",
            analyticsDesc: "Aitavad meil mõista, kuidas külastajad meie saiti kasutavad",
            marketing: "Turundus",
            marketingDesc: "Kasutatakse isikupärastatud reklaamide kuvamiseks",
            functional: "Funktsionaalsed",
            functionalDesc: "Võimaldavad täiustatud funktsionaalsust ja isikupärastamist",
            privacyPolicy: "Privaatsuspoliitika",
            cookieSettings: "Küpsiste seaded",
            poweredBy: "Pakub:"
        },
        fi: {
            title: "Arvostamme yksityisyyttäsi",
            description: "Käytämme evästeitä parantaaksemme selauskokemustasi, tarjotaksemme personoitua sisältöä ja analysoidaksemme liikennettämme. Valitse evästeasetuksesi alta.",
            acceptAll: "Hyväksy kaikki",
            rejectAll: "Hylkää kaikki",
            details: "Tiedot",
            save: "Tallenna asetukset",
            necessary: "Välttämättömät",
            necessaryDesc: "Välttämättömät verkkosivuston toiminnalle",
            analytics: "Analytiikka",
            analyticsDesc: "Auttavat meitä ymmärtämään, miten kävijät käyttävät sivustoamme",
            marketing: "Markkinointi",
            marketingDesc: "Käytetään personoitujen mainosten näyttämiseen",
            functional: "Toiminnalliset",
            functionalDesc: "Mahdollistavat parannetun toiminnallisuuden ja personoinnin",
            privacyPolicy: "Tietosuojakäytäntö",
            cookieSettings: "Evästeasetukset",
            poweredBy: "Tarjoaa:"
        },
        el: {
            title: "Σεβόμαστε την ιδιωτικότητά σας",
            description: "Χρησιμοποιούμε cookies για να βελτιώσουμε την εμπειρία περιήγησής σας, να παρέχουμε εξατομικευμένο περιεχόμενο και να αναλύσουμε την κίνηση μας. Παρακαλούμε επιλέξτε τις προτιμήσεις σας για cookies παρακάτω.",
            acceptAll: "Αποδοχή όλων",
            rejectAll: "Απόρριψη όλων",
            details: "Λεπτομέρειες",
            save: "Αποθήκευση προτιμήσεων",
            necessary: "Απαραίτητα",
            necessaryDesc: "Απαραίτητα για τη σωστή λειτουργία του ιστότοπου",
            analytics: "Αναλυτικά",
            analyticsDesc: "Μας βοηθούν να κατανοήσουμε πώς οι επισκέπτες χρησιμοποιούν τον ιστότοπό μας",
            marketing: "Μάρκετινγκ",
            marketingDesc: "Χρησιμοποιούνται για την εμφάνιση εξατομικευμένων διαφημίσεων",
            functional: "Λειτουργικά",
            functionalDesc: "Επιτρέπουν βελτιωμένη λειτουργικότητα και εξατομίκευση",
            privacyPolicy: "Πολιτική Απορρήτου",
            cookieSettings: "Ρυθμίσεις cookies",
            poweredBy: "Παρέχεται από:"
        },
        hu: {
            title: "Tiszteletben tartjuk az Ön adatait",
            description: "Cookie-kat használunk a böngészési élmény javítására, személyre szabott tartalom nyújtására és forgalmunk elemzésére. Kérjük, válassza ki cookie-beállításait alább.",
            acceptAll: "Összes elfogadása",
            rejectAll: "Összes elutasítása",
            details: "Részletek",
            save: "Beállítások mentése",
            necessary: "Szükséges",
            necessaryDesc: "Elengedhetetlen a weboldal megfelelő működéséhez",
            analytics: "Analitikai",
            analyticsDesc: "Segítenek megérteni, hogyan használják látogatóink weboldalunkat",
            marketing: "Marketing",
            marketingDesc: "Személyre szabott hirdetések megjelenítésére használatos",
            functional: "Funkcionális",
            functionalDesc: "Fejlett funkcionalitást és személyre szabást tesznek lehetővé",
            privacyPolicy: "Adatvédelmi irányelvek",
            cookieSettings: "Cookie beállítások",
            poweredBy: "Szolgáltató:"
        },
        ga: {
            title: "Tugaimid meas ar do phríobháideacht",
            description: "Úsáidimid fianáin chun d'eispéireas brabhsála a fheabhsú, ábhar pearsantaithe a sholáthar agus ár dtrácht a anailísiú. Roghnaigh do roghanna fianán thíos.",
            acceptAll: "Glac le gach",
            rejectAll: "Diúltaigh gach",
            details: "Sonraí",
            save: "Sábháil roghanna",
            necessary: "Riachtanach",
            necessaryDesc: "Riachtanach don suíomh gréasáin feidhmiú i gceart",
            analytics: "Anailíseach",
            analyticsDesc: "Cabhraíonn siad linn tuiscint a fháil ar conas a úsáideann cuairteoirí ár suíomh",
            marketing: "Margaíocht",
            marketingDesc: "Úsáidtear chun fógraí pearsantaithe a thaispeáint",
            functional: "Feidhmiúil",
            functionalDesc: "Cumasaíonn feidhmiúlacht feabhsaithe agus pearsantú",
            privacyPolicy: "Polasaí Príobháideachais",
            cookieSettings: "Socruithe fianán",
            poweredBy: "Á chumhachtú ag:"
        },
        lv: {
            title: "Mēs respektējam jūsu privātumu",
            description: "Mēs izmantojam sīkfailus, lai uzlabotu jūsu pārlūkošanas pieredzi, sniegtu personalizētu saturu un analizētu mūsu datplūsmu. Lūdzu, izvēlieties savas sīkfailu preferences zemāk.",
            acceptAll: "Pieņemt visus",
            rejectAll: "Noraidīt visus",
            details: "Detaļas",
            save: "Saglabāt preferences",
            necessary: "Nepieciešamie",
            necessaryDesc: "Būtiski vietnes pareizai darbībai",
            analytics: "Analītiskie",
            analyticsDesc: "Palīdz mums saprast, kā apmeklētāji izmanto mūsu vietni",
            marketing: "Mārketinga",
            marketingDesc: "Izmanto personalizētu reklāmu rādīšanai",
            functional: "Funkcionālie",
            functionalDesc: "Iespējo uzlabotu funkcionalitāti un personalizāciju",
            privacyPolicy: "Privātuma politika",
            cookieSettings: "Sīkfailu iestatījumi",
            poweredBy: "Nodrošina:"
        },
        lt: {
            title: "Mes gerbiame jūsų privatumą",
            description: "Naudojame slapukus, kad pagerintume jūsų naršymo patirtį, teiktume suasmenintą turinį ir analizuotume savo srautą. Pasirinkite savo slapukų nuostatas žemiau.",
            acceptAll: "Priimti visus",
            rejectAll: "Atmesti visus",
            details: "Detalės",
            save: "Išsaugoti nuostatas",
            necessary: "Būtini",
            necessaryDesc: "Būtini tinkamos svetainės veikimo",
            analytics: "Analitiniai",
            analyticsDesc: "Padeda mums suprasti, kaip lankytojai naudojasi mūsų svetaine",
            marketing: "Rinkodaros",
            marketingDesc: "Naudojami personalizuotoms reklamoms rodyti",
            functional: "Funkciniai",
            functionalDesc: "Įgalina patobulintą funkcionalumą ir personalizavimą",
            privacyPolicy: "Privatumo politika",
            cookieSettings: "Slapukų nustatymai",
            poweredBy: "Teikia:"
        },
        mt: {
            title: "Aħna nirrispettaw il-privatezza tiegħek",
            description: "Nużaw cookies biex intejbu l-esperjenza tal-browsing tiegħek, nipprovdu kontenut personalizzat u nanalizzaw it-traffiku tagħna. Jekk jogħġbok agħżel il-preferenzi tiegħek tal-cookies hawn taħt.",
            acceptAll: "Aċċetta kollox",
            rejectAll: "Irrifjuta kollox",
            details: "Dettalji",
            save: "Salva l-preferenzi",
            necessary: "Neċessarji",
            necessaryDesc: "Essenzjali biex il-websajt taħdem sew",
            analytics: "Analitiċi",
            analyticsDesc: "Jgħinuna nifhmu kif il-viżitaturi jużaw is-sit tagħna",
            marketing: "Marketing",
            marketingDesc: "Użati biex juru reklami personalizzati",
            functional: "Funzjonali",
            functionalDesc: "Jippermettu funzjonalità mtejba u personalizzazzjoni",
            privacyPolicy: "Politika tal-Privatezza",
            cookieSettings: "Settings tal-cookies",
            poweredBy: "Ipprovdut minn:"
        },
        ro: {
            title: "Respectăm confidențialitatea dvs.",
            description: "Folosim cookie-uri pentru a îmbunătăți experiența dvs. de navigare, pentru a furniza conținut personalizat și pentru a analiza traficul nostru. Vă rugăm să alegeți preferințele dvs. pentru cookie-uri mai jos.",
            acceptAll: "Accept toate",
            rejectAll: "Resping toate",
            details: "Detalii",
            save: "Salvează preferințe",
            necessary: "Necesare",
            necessaryDesc: "Esențiale pentru funcționarea corectă a site-ului",
            analytics: "Analitice",
            analyticsDesc: "Ne ajută să înțelegem cum vizitatorii folosesc site-ul nostru",
            marketing: "Marketing",
            marketingDesc: "Folosite pentru a afișa reclame personalizate",
            functional: "Funcționale",
            functionalDesc: "Permit funcționalitate îmbunătățită și personalizare",
            privacyPolicy: "Politica de confidențialitate",
            cookieSettings: "Setări cookie",
            poweredBy: "Furnizat de:"
        },
        sk: {
            title: "Rešpektujeme vaše súkromie",
            description: "Používame cookies na zlepšenie vášho zážitku z prehliadania, poskytovanie personalizovaného obsahu a analýzu našej návštevnosti. Vyberte si svoje preferencie cookies nižšie.",
            acceptAll: "Prijať všetky",
            rejectAll: "Odmietnuť všetky",
            details: "Podrobnosti",
            save: "Uložiť preferencie",
            necessary: "Nevyhnutné",
            necessaryDesc: "Nevyhnutné pre správne fungovanie webstránky",
            analytics: "Analytické",
            analyticsDesc: "Pomáhajú nám pochopiť, ako návštevníci používajú našu stránku",
            marketing: "Marketingové",
            marketingDesc: "Používajú sa na zobrazovanie personalizovanej reklamy",
            functional: "Funkčné",
            functionalDesc: "Umožňujú vylepšenú funkcionalitu a personalizáciu",
            privacyPolicy: "Zásady ochrany osobných údajov",
            cookieSettings: "Nastavenia cookies",
            poweredBy: "Poskytuje:"
        },
        si: {
            title: "Spoštujemo vašo zasebnost",
            description: "Uporabljamo piškotke za izboljšanje vaše izkušnje brskanja, zagotavljanje prilagojene vsebine in analizo našega prometa. Prosimo, izberite svoje nastavitve piškotkov spodaj.",
            acceptAll: "Sprejmi vse",
            rejectAll: "Zavrni vse",
            details: "Podrobnosti",
            save: "Shrani nastavitve",
            necessary: "Nujni",
            necessaryDesc: "Bistveni za pravilno delovanje spletne strani",
            analytics: "Analitični",
            analyticsDesc: "Pomagajo nam razumeti, kako obiskovalci uporabljajo našo stran",
            marketing: "Trženjski",
            marketingDesc: "Uporabljajo se za prikaz prilagojenih oglasov",
            functional: "Funkcionalni",
            functionalDesc: "Omogočajo izboljšano funkcionalnost in prilagajanje",
            privacyPolicy: "Pravilnik o zasebnosti",
            cookieSettings: "Nastavitve piškotkov",
            poweredBy: "Zagotavlja:"
        },
        sv: {
            title: "Vi respekterar din integritet",
            description: "Vi använder cookies för att förbättra din surfupplevelse, tillhandahålla personligt innehåll och analysera vår trafik. Välj dina cookie-inställningar nedan.",
            acceptAll: "Acceptera alla",
            rejectAll: "Avvisa alla",
            details: "Detaljer",
            save: "Spara inställningar",
            necessary: "Nödvändiga",
            necessaryDesc: "Väsentliga för att webbplatsen ska fungera korrekt",
            analytics: "Analytiska",
            analyticsDesc: "Hjälper oss förstå hur besökare använder vår webbplats",
            marketing: "Marknadsföring",
            marketingDesc: "Används för att visa personliga annonser",
            functional: "Funktionella",
            functionalDesc: "Möjliggör förbättrad funktionalitet och personalisering",
            privacyPolicy: "Integritetspolicy",
            cookieSettings: "Cookie-inställningar",
            poweredBy: "Drivs av:"
        }
    };

    // Banner CSS styles
    const styles = `
        .kg-consent-banner {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 999999;
            animation: slideUp 0.3s ease-out;
        }

        @keyframes slideUp {
            from { transform: translateY(100%); }
            to { transform: translateY(0); }
        }

        .kg-consent-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.5);
            z-index: 999998;
            animation: fadeIn 0.3s ease-out;
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        .kg-consent-container {
            max-width: 500px;
            margin: 20px auto;
            background: var(--kg-bg-color, #ffffff);
            border-radius: 12px;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
            overflow: hidden;
        }

        .kg-consent-content {
            padding: 32px;
        }

        .kg-consent-header {
            display: grid;
            grid-template-columns: minmax(auto, 1fr) auto minmax(auto, 1fr);
            align-items: center;
            gap: 16px;
            margin-bottom: 16px;
        }

        .kg-consent-logo-left {
            justify-self: start;
            height: 40px;
            width: auto;
            max-width: 200px;
            object-fit: contain;
        }

        .kg-consent-title {
            font-size: 24px;
            font-weight: 600;
            color: var(--kg-text-color, #111827);
            margin: 0;
            text-align: center;
            line-height: normal;
            grid-column: 2;
        }

        .kg-consent-description {
            font-size: 16px;
            line-height: 1.6;
            color: var(--kg-text-color, #111827);
            margin: 0 0 24px 0;
            opacity: 0.8;
            text-align: justify;
        }

        .kg-consent-buttons {
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
        }

        .kg-consent-button {
            flex: 1;
            min-width: 120px;
            padding: 10px 16px;
            border: none;
            border-radius: 8px;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s ease;
            text-align: center;
            white-space: nowrap;
        }

        .kg-consent-button.primary {
            background: var(--kg-primary-color, #2563eb);
            color: var(--kg-primary-text, #ffffff);
            flex-basis: 100%;
        }

        .kg-consent-button:hover {
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .kg-consent-button:focus {
            outline: 2px solid var(--kg-primary-color, #2563eb);
            outline-offset: 2px;
        }

        .kg-consent-button.secondary {
            background: var(--kg-secondary-color, #f3f4f6);
            color: var(--kg-secondary-text, #374151);
        }

        .kg-consent-details {
            margin-top: 24px;
            border-top: 1px solid rgba(0, 0, 0, 0.1);
            padding-top: 24px;
            display: none;
        }

        .kg-consent-details.active {
            display: block;
            animation: slideDown 0.3s ease-out;
        }

        @keyframes slideDown {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .kg-consent-category {
            margin-bottom: 20px;
        }

        .kg-consent-category-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 8px;
        }

        .kg-consent-category-title {
            font-size: 18px;
            font-weight: 500;
            color: var(--kg-text-color, #111827);
        }

        .kg-consent-category-description {
            font-size: 14px;
            color: var(--kg-text-color, #111827);
            opacity: 0.7;
            margin: 0 0 12px 0;
        }

        .kg-consent-switch {
            position: relative;
            width: 48px;
            height: 24px;
        }

        .kg-consent-switch input {
            opacity: 0;
            width: 0;
            height: 0;
        }

        .kg-consent-switch-slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #ccc;
            transition: 0.3s;
            border-radius: 24px;
        }

        .kg-consent-switch-slider:before {
            position: absolute;
            content: "";
            height: 18px;
            width: 18px;
            left: 3px;
            bottom: 3px;
            background-color: white;
            transition: 0.3s;
            border-radius: 50%;
        }

        .kg-consent-switch input:checked + .kg-consent-switch-slider {
            background-color: var(--kg-primary-color, #2563eb);
        }

        .kg-consent-switch input:checked + .kg-consent-switch-slider:before {
            transform: translateX(24px);
        }

        .kg-consent-switch input:disabled + .kg-consent-switch-slider {
            opacity: 0.5;
            cursor: not-allowed;
        }

        .kg-consent-footer {
            margin-top: 24px;
            padding-top: 16px;
            border-top: 1px solid rgba(0, 0, 0, 0.1);
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 12px;
            color: var(--kg-text-color, #111827);
            opacity: 0.8;
        }

        .kg-consent-footer a {
            color: var(--kg-primary-color, #2563eb);
            text-decoration: none;
        }

        .kg-consent-footer a:hover {
            text-decoration: underline;
        }

        .kg-consent-footer p {
            margin: 0;
            padding: 0;
            white-space: nowrap;
            font-size: inherit;
            color: inherit;
            opacity: inherit;
        }

        #kg-consent-banner-toggle {
            position: fixed !important;
            bottom: 20px !important;
            left: 20px !important;
            width: 48px !important;
            height: 48px !important;
            background: var(--kg-primary-color, #2563eb) !important;
            color: white !important;
            border: none !important;
            border-radius: 50% !important;
            cursor: pointer !important;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            transition: all 0.2s ease !important;
            z-index: 999997 !important;
            margin: 0 !important;
            padding: 0 !important;
        }

        #kg-consent-banner-toggle:hover {
            transform: scale(1.1) !important;
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2) !important;
        }

        #kg-consent-banner-toggle svg {
            width: 24px !important;
            height: 24px !important;
            margin: 0 !important;
            padding: 0 !important;
        }

        @media (max-width: 600px) {
            .kg-consent-container {
                margin: 0;
                border-radius: 12px 12px 0 0;
                max-width: 100%;
            }

            .kg-consent-header {
                grid-template-columns: auto 1fr;
                gap: 12px;
            }

            .kg-consent-logo-left {
                max-width: 120px;
                height: auto;
                max-height: 40px;
                object-fit: contain;
            }

            .kg-consent-title {
                font-size: 20px;
                text-align: left;
                grid-column: auto;
            }

            .kg-consent-buttons {
                gap: 8px;
            }

            .kg-consent-button {
                padding: 10px 12px;
                font-size: 13px;
                min-width: auto;
                flex: 1 1 calc(33.333% - 8px);
            }
        }
    `;

    // Helper functions
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
        return null;
    }

    function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = `expires=${date.toUTCString()}`;
        document.cookie = `${name}=${value}; ${expires}; path=/; SameSite=Lax`;
    }

    // Generate unique consent ID
    function generateConsentId() {
        const timestamp = Date.now().toString(36);
        const randomPart = Math.random().toString(36).substring(2, 10);
        return `cns_${timestamp}_${randomPart}`;
    }

    // Get or create consent ID
    function getOrCreateConsentId() {
        let consentId = getCookie('kg_consent_id');
        if (!consentId) {
            consentId = generateConsentId();
            setCookie('kg_consent_id', consentId, 365 * 2); // 2 years
        }
        return consentId;
    }

    // Determine consent action type
    function determineConsentAction(consent) {
        const allGranted = consent.ad_storage === 'granted' && 
                          consent.analytics_storage === 'granted' && 
                          consent.functionality_storage === 'granted';
        const allDenied = consent.ad_storage === 'denied' && 
                         consent.analytics_storage === 'denied' && 
                         consent.functionality_storage === 'denied';
        
        if (allGranted) return 'accept_all';
        if (allDenied) return 'reject_all';
        return 'custom';
    }

    // Send consent log to Google Sheets via Apps Script
    function logConsentToSheet(consent, action) {
        const config = window.kgConsentConfig || {};
        
        // Check if consent logging is enabled
        if (!config.enableConsentLogging || !config.consentLogEndpoint) {
            return;
        }

        const consentId = getOrCreateConsentId();
        const timestamp = new Date().toISOString();
        
        const logData = {
            timestamp: timestamp,
            consent_id: consentId,
            action: action,
            analytics_storage: consent.analytics_storage,
            ad_storage: consent.ad_storage,
            ad_user_data: consent.ad_user_data,
            ad_personalization: consent.ad_personalization,
            functionality_storage: consent.functionality_storage,
            personalization_storage: consent.personalization_storage,
            page_url: window.location.href,
            user_agent: navigator.userAgent,
            banner_version: config.bannerVersion || '1.0'
        };

        // Build URL with query parameters for GET request (most reliable for cross-origin)
        const params = new URLSearchParams();
        for (const key in logData) {
            params.append(key, logData[key]);
        }
        
        const url = config.consentLogEndpoint + '?' + params.toString();
        
        // Use Image beacon for reliable cross-origin request
        const img = new Image();
        img.src = url;
    }

    function detectLanguage() {
        const config = window.kgConsentConfig || {};
        
        if (config.autoDetectLanguage) {
            const pathMatch = window.location.pathname.match(/^\/([a-z]{2})\//);
            if (pathMatch && translations[pathMatch[1]]) {
                return pathMatch[1];
            }
            
            const htmlLang = document.documentElement.lang;
            if (htmlLang) {
                const langCode = htmlLang.substring(0, 2).toLowerCase();
                if (translations[langCode]) {
                    return langCode;
                }
            }
        }
        
        return config.defaultLanguage || 'en';
    }

    function getTranslation(key) {
        const lang = detectLanguage();
        return translations[lang][key] || translations.en[key];
    }

    function createBanner() {
        const config = window.kgConsentConfig || {};
        const bannerId = config.bannerId || 'kg-consent-banner';
        
        if (document.getElementById(bannerId)) {
            return;
        }

        const styleSheet = document.createElement('style');
        styleSheet.textContent = styles.replace(/var\(--kg-bg-color, #ffffff\)/g, `var(--kg-bg-color, ${config.appearance?.backgroundColor || '#ffffff'})`)
            .replace(/var\(--kg-text-color, #111827\)/g, `var(--kg-text-color, ${config.appearance?.textColor || '#111827'})`)
            .replace(/var\(--kg-primary-color, #2563eb\)/g, `var(--kg-primary-color, ${config.appearance?.primaryColor || '#2563eb'})`)
            .replace(/var\(--kg-primary-text, #ffffff\)/g, `var(--kg-primary-text, ${config.appearance?.primaryTextColor || '#ffffff'})`)
            .replace(/var\(--kg-secondary-color, #f3f4f6\)/g, `var(--kg-secondary-color, ${config.appearance?.secondaryColor || '#f3f4f6'})`)
            .replace(/var\(--kg-secondary-text, #374151\)/g, `var(--kg-secondary-text, ${config.appearance?.secondaryTextColor || '#374151'})`);
        document.head.appendChild(styleSheet);

        const overlay = document.createElement('div');
        overlay.className = 'kg-consent-overlay';
        overlay.id = `${bannerId}-overlay`;

        const banner = document.createElement('div');
        banner.className = 'kg-consent-banner';
        banner.id = bannerId;
        banner.setAttribute('role', 'dialog');
        banner.setAttribute('aria-labelledby', `${bannerId}-title`);
        banner.setAttribute('aria-modal', 'true');

        const currentLang = detectLanguage();
        const privacyUrl = config.privacyPolicyUrls?.[currentLang] || '#';

        let headerHTML = '<div class="kg-consent-header">';
        if (config.logos?.website) {
            headerHTML += `<img src="${config.logos.website}" alt="Website Logo" class="kg-consent-logo-left">`;
        } else {
            headerHTML += '<div></div>';
        }
        headerHTML += `<h2 class="kg-consent-title" id="${bannerId}-title">${getTranslation('title')}</h2>`;
        headerHTML += '<div></div>';
        headerHTML += '</div>';

        banner.innerHTML = `
            <div class="kg-consent-container">
                <div class="kg-consent-content">
                    ${headerHTML}
                    <p class="kg-consent-description">${getTranslation('description')}</p>
                    
                    <div class="kg-consent-buttons">
                        <button class="kg-consent-button primary" id="${bannerId}-accept-all">
                            ${getTranslation('acceptAll')}
                        </button>
                        <button class="kg-consent-button secondary" id="${bannerId}-details">
                            ${getTranslation('details')}
                        </button>
                        <button class="kg-consent-button secondary" id="${bannerId}-reject-all">
                            ${getTranslation('rejectAll')}
                        </button>
                    </div>

                    <div class="kg-consent-details" id="${bannerId}-details-section">
                        <div class="kg-consent-category">
                            <div class="kg-consent-category-header">
                                <span class="kg-consent-category-title">${getTranslation('necessary')}</span>
                                <label class="kg-consent-switch">
                                    <input type="checkbox" checked disabled data-category="necessary">
                                    <span class="kg-consent-switch-slider"></span>
                                </label>
                            </div>
                            <p class="kg-consent-category-description">${getTranslation('necessaryDesc')}</p>
                        </div>

                        <div class="kg-consent-category">
                            <div class="kg-consent-category-header">
                                <span class="kg-consent-category-title">${getTranslation('analytics')}</span>
                                <label class="kg-consent-switch">
                                    <input type="checkbox" data-category="analytics">
                                    <span class="kg-consent-switch-slider"></span>
                                </label>
                            </div>
                            <p class="kg-consent-category-description">${getTranslation('analyticsDesc')}</p>
                        </div>

                        <div class="kg-consent-category">
                            <div class="kg-consent-category-header">
                                <span class="kg-consent-category-title">${getTranslation('marketing')}</span>
                                <label class="kg-consent-switch">
                                    <input type="checkbox" data-category="marketing">
                                    <span class="kg-consent-switch-slider"></span>
                                </label>
                            </div>
                            <p class="kg-consent-category-description">${getTranslation('marketingDesc')}</p>
                        </div>

                        <div class="kg-consent-category">
                            <div class="kg-consent-category-header">
                                <span class="kg-consent-category-title">${getTranslation('functional')}</span>
                                <label class="kg-consent-switch">
                                    <input type="checkbox" data-category="functional">
                                    <span class="kg-consent-switch-slider"></span>
                                </label>
                            </div>
                            <p class="kg-consent-category-description">${getTranslation('functionalDesc')}</p>
                        </div>

                        <button class="kg-consent-button primary" id="${bannerId}-save" style="width: 100%; margin-top: 16px;">
                            ${getTranslation('save')}
                        </button>
                    </div>

                    <div class="kg-consent-footer">
                        <a href="${privacyUrl}" target="_blank" rel="noopener noreferrer">${getTranslation('privacyPolicy')}</a>
                        <p>${getTranslation('poweredBy')} <a href="https://kg-media.eu/" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: underline;">KG Media</a></p>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(overlay);
        document.body.appendChild(banner);
        setupEventListeners(bannerId);
    }

    function setupEventListeners(bannerId) {
        const config = window.kgConsentConfig || {};
        const banner = document.getElementById(bannerId);
        const detailsSection = document.getElementById(`${bannerId}-details-section`);

        document.getElementById(`${bannerId}-accept-all`).addEventListener('click', function() {
            const consent = {
                ad_storage: 'granted',
                ad_user_data: 'granted',
                ad_personalization: 'granted',
                analytics_storage: 'granted',
                functionality_storage: 'granted',
                personalization_storage: 'granted',
                security_storage: 'granted'
            };
            saveConsent(consent, 'accept_all');
            hideBanner(bannerId);
        });

        document.getElementById(`${bannerId}-reject-all`).addEventListener('click', function() {
            const consent = {
                ad_storage: 'denied',
                ad_user_data: 'denied',
                ad_personalization: 'denied',
                analytics_storage: 'denied',
                functionality_storage: 'denied',
                personalization_storage: 'denied',
                security_storage: 'granted'
            };
            saveConsent(consent, 'reject_all');
            hideBanner(bannerId);
        });

        document.getElementById(`${bannerId}-details`).addEventListener('click', function() {
            detailsSection.classList.add('active');
        });

        document.getElementById(`${bannerId}-save`).addEventListener('click', function() {
            const consent = {
                ad_storage: banner.querySelector('[data-category="marketing"]').checked ? 'granted' : 'denied',
                ad_user_data: banner.querySelector('[data-category="marketing"]').checked ? 'granted' : 'denied',
                ad_personalization: banner.querySelector('[data-category="marketing"]').checked ? 'granted' : 'denied',
                analytics_storage: banner.querySelector('[data-category="analytics"]').checked ? 'granted' : 'denied',
                functionality_storage: banner.querySelector('[data-category="functional"]').checked ? 'granted' : 'denied',
                personalization_storage: banner.querySelector('[data-category="functional"]').checked ? 'granted' : 'denied',
                security_storage: 'granted'
            };
            const action = determineConsentAction(consent);
            saveConsent(consent, action);
            hideBanner(bannerId);
        });

        const focusableElements = banner.querySelectorAll('button, input, a');
        const firstFocusable = focusableElements[0];
        const lastFocusable = focusableElements[focusableElements.length - 1];

        firstFocusable.focus();

        banner.addEventListener('keydown', function(e) {
            if (e.key === 'Tab') {
                if (e.shiftKey) {
                    if (document.activeElement === firstFocusable) {
                        e.preventDefault();
                        lastFocusable.focus();
                    }
                } else {
                    if (document.activeElement === lastFocusable) {
                        e.preventDefault();
                        firstFocusable.focus();
                    }
                }
            }
        });
    }

    function saveConsent(consent, action) {
        const config = window.kgConsentConfig || {};
        const cookieName = config.cookieName || 'kg_consent_preferences';
        const cookieExpiry = config.cookieExpiry || 365;

        setCookie(cookieName, JSON.stringify(consent), cookieExpiry);
        logConsentToSheet(consent, action);

        if (typeof config.onConsentUpdate === 'function') {
            config.onConsentUpdate(consent);
        }
    }

    function hideBanner(bannerId) {
        const banner = document.getElementById(bannerId);
        const overlay = document.getElementById(`${bannerId}-overlay`);
        
        if (banner) banner.remove();
        if (overlay) overlay.remove();
        showToggleButton(bannerId);
    }

    function showToggleButton(bannerId) {
        const config = window.kgConsentConfig || {};
        
        if (config.showFloatingButton === false) {
            return;
        }
        
        const existingToggle = document.getElementById(`${bannerId}-toggle`);
        if (existingToggle) return;

        const toggle = document.createElement('button');
        toggle.id = `${bannerId}-toggle`;
        toggle.setAttribute('aria-label', getTranslation('cookieSettings'));
        toggle.setAttribute('title', getTranslation('cookieSettings'));
        
        const position = config.floatingButtonPosition || 'bottom-left';
        const positions = {
            'bottom-left': { bottom: '20px', left: '20px', right: 'auto', top: 'auto' },
            'bottom-right': { bottom: '20px', right: '20px', left: 'auto', top: 'auto' },
            'top-left': { top: '20px', left: '20px', bottom: 'auto', right: 'auto' },
            'top-right': { top: '20px', right: '20px', bottom: 'auto', left: 'auto' }
        };
        
        const pos = positions[position];
        toggle.style.cssText = `
            position: fixed !important;
            bottom: ${pos.bottom} !important;
            left: ${pos.left} !important;
            right: ${pos.right} !important;
            top: ${pos.top} !important;
            width: 48px !important;
            height: 48px !important;
            background: ${window.kgConsentConfig?.appearance?.primaryColor || '#2563eb'} !important;
            color: white !important;
            border: none !important;
            border-radius: 50% !important;
            cursor: pointer !important;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            z-index: 999997 !important;
            margin: 0 !important;
            padding: 0 !important;
            transition: all 0.2s ease !important;
        `;
        
        toggle.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                <circle cx="7.5" cy="7.5" r="1.5"/>
                <circle cx="7" cy="12" r="1"/>
                <circle cx="10.5" cy="8.5" r="1"/>
                <circle cx="15" cy="9" r="1.5"/>
                <circle cx="11" cy="13" r="1.5"/>
                <circle cx="16" cy="13" r="1"/>
                <circle cx="16.5" cy="16.5" r="1"/>
                <circle cx="13" cy="16" r="1.5"/>
                <circle cx="9" cy="16" r="1"/>
            </svg>
        `;

        toggle.addEventListener('click', function() {
            toggle.remove();
            createBanner();
            loadSavedPreferences();
        });

        toggle.addEventListener('mouseenter', function() {
            toggle.style.transform = 'scale(1.1)';
            toggle.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.2)';
        });

        toggle.addEventListener('mouseleave', function() {
            toggle.style.transform = 'scale(1)';
            toggle.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
        });

        document.body.appendChild(toggle);
    }

    function loadSavedPreferences() {
        const config = window.kgConsentConfig || {};
        const cookieName = config.cookieName || 'kg_consent_preferences';
        const savedConsent = getCookie(cookieName);

        if (savedConsent) {
            const consent = JSON.parse(savedConsent);
            const banner = document.querySelector('.kg-consent-banner');
            
            if (banner && consent && typeof consent === 'object') {
                banner.querySelector('[data-category="analytics"]').checked = consent.analytics_storage === 'granted';
                banner.querySelector('[data-category="marketing"]').checked = consent.ad_storage === 'granted';
                banner.querySelector('[data-category="functional"]').checked = consent.functionality_storage === 'granted';
            }
        }
    }

    window.initKGConsentBanner = function() {
        const config = window.kgConsentConfig || {};
        const cookieName = config.cookieName || 'kg_consent_preferences';
        const savedConsent = getCookie(cookieName);

        if (config.enableConsentLogging) {
            getOrCreateConsentId();
        }

        if (!savedConsent) {
            createBanner();
        } else {
            showToggleButton(config.bannerId || 'kg-consent-banner');
        }
    };

    if (window.kgConsentConfig) {
        window.initKGConsentBanner();
    }
})();
