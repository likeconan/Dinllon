import { Translate } from '../utilities'

class EnumModel {
    getActivityType(type) {
        switch (type) {
            case 1:
                return 'AA';
            case 2:
                return Translate.lang.my_treat;
            case 3:
                return Translate.lang.free;
            default:
                return '';
        }
    }
}

export default new EnumModel()