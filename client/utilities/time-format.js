import moment from 'moment';

class TimeFormat {
    formatDate_Time = (startDate, startTime) => {
        return moment(moment(startDate).format('YYYY-MM-DD') + ' ' + startTime).format('YYYY-MM-DD HH:mm');
    }
    formatDateTime = (datetime) => {
        return moment(datetime).format('YYYY-MM-DD HH:mm');
    }
}

export default new TimeFormat()