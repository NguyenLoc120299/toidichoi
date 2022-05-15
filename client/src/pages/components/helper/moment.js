import moment from "moment";
import 'moment/locale/vi'
moment.locale('vi')

export const formatTime = (data) => {
    return moment(new Date(data), "YYYYMMDD").fromNow();
}