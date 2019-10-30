import i18n from 'react-native-i18n';

import en from '../languages/en';

import zh from '../languages/zh';

i18n.defaultLocale = 'en';

i18n.fallbacks = true;

i18n.translations = {
  en,
  zh,
};

export {i18n};
