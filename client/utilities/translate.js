
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

        return prop && this.lang[prop.toLowerCase()] ? this.lang[prop.toLowerCase()] : prop;
    }
}

export default new Translate('cn');