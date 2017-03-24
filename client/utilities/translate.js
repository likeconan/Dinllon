
class Translate {
    constructor(lang) {
        switch (lang) {
            case 'en':
                this.lang = require('../languages/lang.en.json');
                break;
            case 'cn':
                this.lang = require('../languages/lang.cn.json');
                break;

        }
    }
    instant = (prop) => {
        return this.lang[prop] ? this.lang[prop] : prop;
    }
}

export default new Translate('cn');