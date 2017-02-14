import moment from 'moment';

class TimeFormat {
    formatDateTime = (startDate, startTime) => {
        return moment(moment(startDate).format('YYYY-MM-DD') + ' ' + startTime).format('YYYY-MM-DD HH:mm');
    }
}

export default new TimeFormat()