import Polyglot from 'node-polyglot';
import StorageKeys from './SessionKeys';
import StorageService from './StorageServices';
import english from '../../Languages/en.json';
import german from '../../Languages/gr.json';

export let userLanguage = () => StorageService.get(StorageKeys.USERLANGUAGE);
if(!userLanguage) {
    StorageService.set(StorageKeys.USERLANGUAGE, 'en');
    userLanguage='en';
}
const requireObj = userLanguage != 'en' ? 'de' : {};
export const getCurrentLanguage = () => StorageService.get(StorageKeys.USERLANGUAGE) || 'en';
export const setCurrentLanguage = lang => StorageService.get(StorageKeys.USERLANGUAGE, lang);
export const translate = key => requireObj[key] || key;
export const polyglotLoader = (lang) => {
    const currentLanguage = lang || getCurrentLanguage();
    return new Polyglot({phrases: currentLanguage == 'en' ? english : german})
}


