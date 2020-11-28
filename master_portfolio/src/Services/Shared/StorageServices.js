export default {
    get(key) {
        return sessionStorage.getItem(key);
    },
    set(key,value) {
        return sessionStorage.setItem(key,value);
    },
    remove(key) {
        return sessionStorage.removeItem(key);
    }
}