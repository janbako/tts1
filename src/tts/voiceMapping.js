//NL-Neural, NS-News, S-Studio, P-Polyglot
const voiceMapping = {
    'af-ZA-Standard-A': 'Afrikaans',
    'am-ET-Wavenet-A': 'Estonian1',
    'am-ET-Wavenet-B': 'Estonian2',
    'ar-XA-Wavenet-A': 'Arabic1',
    'ar-XA-Wavenet-B': 'Arabic2',
    'ar-XA-Wavenet-C': 'Arabic3',
    'ar-XA-Wavenet-D': 'Arabic4',
    'bg-BG-Standard-A': 'Bulgarian',
    'bn-IN-Wavenet-A': 'Bengali1 (India)',
    'bn-IN-Wavenet-B': 'Bengali2 (India)',
    'ca-ES-Standard-A': 'Catalan (Spain)',
    'cmn-CN-Wavenet-A': 'Chinese1',
    'cmn-CN-Wavenet-B': 'Chinese2',
    'cmn-CN-Wavenet-C': 'Chinese3',
    'cmn-CN-Wavenet-D': 'Chinese4',
    'cmn-TW-Wavenet-A': 'Chinese5 (Taiwan)',
    'cmn-TW-Wavenet-B': 'Chinese6 (Taiwan)',
    'cmn-TW-Wavenet-C': 'Chinese7 (Taiwan)',
    'cs-CZ-Wavenet-A': 'Czech',
    'da-DK-Wavenet-A': 'Danish1',
    'da-DK-Wavenet-C': 'Danish2',
    'da-DK-Wavenet-D': 'Danish3',
    'da-DK-Wavenet-E': 'Danish4',
    'de-DE-Wavenet-A': 'German1',
    'de-DE-Wavenet-B': 'German2',
    'de-DE-Wavenet-C': 'German3',
    'de-DE-Wavenet-D': 'German4',
    'de-DE-Wavenet-E': 'German5',
    'de-DE-Wavenet-F': 'German6',
    'el-GR-Wavenet-A': 'Greek',
    'en-AU-Wavenet-A': 'English1 (Australia)',
    'en-AU-Wavenet-B': 'English2 (Australia)',
    'en-AU-Wavenet-C': 'English3 (Australia)',
    'en-AU-Wavenet-D': 'English4 (Australia)',
    'en-GB-News-G': 'English5 (Britain) (NS)',
    'en-GB-News-H': 'English6 (Britain) (NS)',
    'en-GB-News-I': 'English7 (Britain) (NS)',
    'en-GB-News-J': 'English8 (Britain) (NS)',
    'en-GB-News-K': 'English9 (Britain) (NS)',
    'en-GB-News-L': 'English10 (Britain) (NS)',
    'en-GB-News-M': 'English11 (Britain) (NS)',
    'en-GB-Wavenet-A': 'English12 (Britain)',
    'en-GB-Wavenet-B': 'English13 (Britain)',
    'en-GB-Wavenet-C': 'English14 (Britain)',
    'en-GB-Wavenet-D': 'English15 (Britain)',
    'en-GB-Wavenet-F': 'English16 (Britain)',
    'en-IN-Wavenet-A': 'English17 (Ireland)',
    'en-IN-Wavenet-B': 'English18 (Ireland)',
    'en-IN-Wavenet-C': 'English19 (Ireland)',
    'en-IN-Wavenet-D': 'English20 (Ireland)',
    'en-US-Neural2-A': 'English21 (America) (NL)',
    'en-US-Neural2-C': 'English22 (America) (NL)',
    'en-US-Neural2-D': 'English23 (America) (NL)',
    'en-US-Neural2-E': 'English24 (America) (NL)',
    'en-US-Neural2-F': 'English25 (America) (NL)',
    'en-US-Neural2-G': 'English26 (America) (NL)',
    'en-US-Neural2-H': 'English27 (America) (NL)',
    'en-US-Neural2-I': 'English28 (America) (NL)',
    'en-US-Neural2-J': 'English29 (America) (NL)',
    'en-US-News-K': 'English30 (America) (NS)',
    'en-US-News-L': 'English31 (America) (NS)',
    'en-US-News-M': 'English32 (America) (NS)',
    'en-US-News-N': 'English33 (America) (NS)',
    'en-US-Polyglot-1': 'English34 (America) (P)',
    'en-US-Studio-O': 'English35 (America) (S)',
    'en-US-Studio-Q': 'English36 (America) (S)',
    'en-US-Wavenet-A': 'English37 (America)',
    'en-US-Wavenet-B': 'English38 (America)',
    'en-US-Wavenet-C': 'English39 (America)',
    'en-US-Wavenet-D': 'English40 (America)',
    'en-US-Wavenet-E': 'English41 (America)',
    'en-US-Wavenet-F': 'English42 (America)',
    'en-US-Wavenet-G': 'English43 (America)',
    'en-US-Wavenet-H': 'English44 (America)',
    'en-US-Wavenet-I': 'English45 (America)',
    'en-US-Wavenet-J': 'English46 (America)',
    'es-ES-Wavenet-B': 'Spanish1',
    'es-ES-Wavenet-C': 'Spanish2',
    'es-ES-Wavenet-D': 'Spanish3',
    'es-US-News-D': 'Spanish4 (America) (NS)',
    'es-US-News-E': 'Spanish5 (America) (NS)',
    'es-US-News-F': 'Spanish6 (America) (NS)',
    'es-US-News-G': 'Spanish7 (America) (NS)',
    'es-US-Wavenet-A': 'Spanish8 (America)',
    'es-US-Wavenet-B': 'Spanish9 (America)',
    'es-US-Wavenet-C': 'Spanish10 (America)',
    'eu-ES-Standard-A': 'Basque1 (Spain)',
    'fi-FI-Wavenet-A': 'Finnish1',
    'fil-PH-Wavenet-A': 'Filipino1',
    'fil-PH-Wavenet-B': 'Filipino2',
    'fil-PH-Wavenet-C': 'Filipino3',
    'fil-PH-Wavenet-D': 'Filipino4',
    'fr-CA-Wavenet-A': 'French1 (Canada)',
    'fr-CA-Wavenet-B': 'French2 (Canada)',
    'fr-CA-Wavenet-C': 'French3 (Canada)',
    'fr-CA-Wavenet-D': 'French4 (Canada)',
    'fr-FR-Wavenet-A': 'French5',
    'fr-FR-Wavenet-B': 'French6',
    'fr-FR-Wavenet-C': 'French7',
    'fr-FR-Wavenet-D': 'French8',
    'fr-FR-Wavenet-E': 'French9',
    'gl-ES-Standard-A': 'Galician (Spain)',
    'gu-IN-Wavenet-A': 'Gujarati1 (India)',
    'gu-IN-Wavenet-B': 'Gujarati2 (India)',
    'he-IL-Wavenet-A': 'Hebrew1',
    'he-IL-Wavenet-B': 'Hebrew2',
    'he-IL-Wavenet-C': 'Hebrew3',
    'he-IL-Wavenet-D': 'Hebrew4',
    'hi-IN-Wavenet-A': 'Hindi1 (India)',
    'hi-IN-Wavenet-B': 'Hindi2 (India)',
    'hi-IN-Wavenet-C': 'Hindi3 (India)',
    'hi-IN-Wavenet-D': 'Hindi4 (India)',
    'hu-HU-Wavenet-A': 'Hungarian1',
    'id-ID-Wavenet-A': 'Indonesian1',
    'id-ID-Wavenet-B': 'Indonesian2',
    'id-ID-Wavenet-C': 'Indonesian3',
    'id-ID-Wavenet-D': 'Indonesian4',
    'is-IS-Standard-A': 'Icelandic1',
    'it-IT-Wavenet-A': 'Italian1',
    'it-IT-Wavenet-B': 'Italian2',
    'it-IT-Wavenet-C': 'Italian3',
    'it-IT-Wavenet-D': 'Italian4',
    'ja-JP-Wavenet-A': 'Japanese1',
    'ja-JP-Wavenet-B': 'Japanese2',
    'ja-JP-Wavenet-C': 'Japanese3',
    'ja-JP-Wavenet-D': 'Japanese4',
    'kn-IN-Wavenet-A': 'Kannada1 (India)',
    'kn-IN-Wavenet-B': 'Kannada2 (India)',
    'ko-KR-Wavenet-A': 'Korean1',
    'ko-KR-Wavenet-B': 'Korean2',
    'ko-KR-Wavenet-C': 'Korean3',
    'ko-KR-Wavenet-D': 'Korean4',
    'lt-LT-Standard-A': 'Lithuanian',
    'lv-LV-Standard-A': 'Latvian',
    'ml-IN-Wavenet-A': 'Malayalam1 (India)',
    'ml-IN-Wavenet-B': 'Malayalam2 (India)',
    'ml-IN-Wavenet-C': 'Malayalam3 (India)',
    'ml-IN-Wavenet-D': 'Malayalam4 (India)',
    'mr-IN-Wavenet-A': 'Marathi1 (India)',
    'mr-IN-Wavenet-B': 'Marathi2 (India)',
    'mr-IN-Wavenet-C': 'Marathi3 (India)',
    'ms-MY-Wavenet-A': 'Malay1 (Malaysia)',
    'ms-MY-Wavenet-B': 'Malay2 (Malaysia)',
    'ms-MY-Wavenet-C': 'Malay3 (Malaysia)',
    'ms-MY-Wavenet-D': 'Malay4 (Malaysia)',
    'nb-NO-Wavenet-A': 'Norwegian1',
    'nb-NO-Wavenet-B': 'Norwegian2',
    'nb-NO-Wavenet-C': 'Norwegian3',
    'nb-NO-Wavenet-D': 'Norwegian4',
    'nb-NO-Wavenet-E': 'Norwegian5',
    'nl-BE-Wavenet-A': 'Dutch1 (Belgium)',
    'nl-BE-Wavenet-B': 'Dutch2 (Belgium)',
    'nl-NL-Wavenet-A': 'Dutch3 (Netherlands)',
    'nl-NL-Wavenet-B': 'Dutch4 (Netherlands)',
    'nl-NL-Wavenet-C': 'Dutch5 (Netherlands)',
    'nl-NL-Wavenet-D': 'Dutch6 (Netherlands)',
    'nl-NL-Wavenet-E': 'Dutch7 (Netherlands)',
    'pa-IN-Wavenet-A': 'Punjabi1 (India)',
    'pa-IN-Wavenet-B': 'Punjabi2 (India)',
    'pa-IN-Wavenet-C': 'Punjabi3 (India)',
    'pa-IN-Wavenet-D': 'Punjabi4 (India)',
    'pl-PL-Wavenet-A': 'Polish1',
    'pl-PL-Wavenet-B': 'Polish2',
    'pl-PL-Wavenet-C': 'Polish3',
    'pl-PL-Wavenet-D': 'Polish4',
    'pl-PL-Wavenet-E': 'Polish5',
    'pt-BR-Wavenet-A': 'Portuguese1 (Brazil)',
    'pt-BR-Wavenet-B': 'Portuguese2 (Brazil)',
    'pt-BR-Wavenet-C': 'Portuguese3 (Brazil)',
    'pt-PT-Wavenet-A': 'Portuguese4',
    'pt-PT-Wavenet-B': 'Portuguese5',
    'pt-PT-Wavenet-C': 'Portuguese6',
    'pt-PT-Wavenet-D': 'Portuguese7',
    'ro-RO-Wavenet-A': 'Romanian1',
    'ru-RU-Wavenet-A': 'Russian1',
    'ru-RU-Wavenet-B': 'Russian2',
    'ru-RU-Wavenet-C': 'Russian3',
    'ru-RU-Wavenet-D': 'Russian4',
    'ru-RU-Wavenet-E': 'Russian5',
    'sk-SK-Wavenet-A': 'Slovak1',
    'sr-RS-Standard-A': 'Serbian',
    'sv-SE-Wavenet-A': 'Swedish1',
    'sv-SE-Wavenet-B': 'Swedish2',
    'sv-SE-Wavenet-C': 'Swedish3',
    'sv-SE-Wavenet-D': 'Swedish4',
    'sv-SE-Wavenet-E': 'Swedish5',
    'ta-IN-Wavenet-A': 'Tamil1 (India)',
    'ta-IN-Wavenet-B': 'Tamil2 (India)',
    'ta-IN-Wavenet-C': 'Tamil3 (India)',
    'ta-IN-Wavenet-D': 'Tamil4 (India)',
    'te-IN-Standard-A': 'Telugu1 (India)',
    'te-IN-Standard-B': 'Telugu2 (India)',
    'th-TH-Standard-A': 'Thai1',
    'tr-TR-Wavenet-A': 'Turkish1',
    'tr-TR-Wavenet-B': 'Turkish2',
    'tr-TR-Wavenet-C': 'Turkish3',
    'tr-TR-Wavenet-D': 'Turkish4',
    'tr-TR-Wavenet-E': 'Turkish5',
    'uk-UA-Wavenet-A': 'Ukrainian',
    'vi-VN-Wavenet-A': 'Vietnamese1',
    'vi-VN-Wavenet-B': 'Vietnamese2',
    'vi-VN-Wavenet-C': 'Vietnamese3',
    'vi-VN-Wavenet-D': 'Vietnamese4',
    'yue-HK-Standard-A': 'Cantonese1 (China)',
    'yue-HK-Standard-B': 'Cantonese2 (China)',
    'yue-HK-Standard-C': 'Cantonese3 (China)',
    'yue-HK-Standard-D': 'Cantonese4 (China)',
  };
  
  module.exports = voiceMapping;
