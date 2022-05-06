const moment = require('moment')
moment.locale('vi')

const formatDate = {
    localeFormat: () => {
        return moment("2022-05-06T02:11:02.270Z").format('LL')
    }
}

module.exports = formatDate