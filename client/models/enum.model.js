class EnumModel {
    getActivityType(type) {
        switch (type) {
            case 1:
                return 'AA';
            case 2:
                return 'My Treat';
            case 3:
                return 'Free';
            default:
                return '';
        }
    }
}

export default new EnumModel()