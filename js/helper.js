const months = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];

function getShortDate() {
    var dt = new Date();
    var time = dt.getFullYear() + "" + dt.getMonth() + "" + dt.getDate();
    return time;
}

function formatHourOnly(dateInput) {
    var dt = new Date(dateInput);
    var time = format_two_digits(dt.getHours()) + ":" + format_two_digits(dt.getMinutes());
    return time;
}

function formatShortDate(dateInput) {
    var dt = new Date(dateInput);
    var time = dt.getDate() + " " + months[dt.getMonth()] + " " + dt.getFullYear();
    return time;
}

function formatLongDate(dateInput) {
    var dt = new Date(dateInput);
    var time = dt.getDate() + " " + months[dt.getMonth()] + " " + dt.getFullYear() + " " + format_two_digits(dt.getHours()) + ":" + format_two_digits(dt.getMinutes());
    return time;
}

function format_two_digits(n) {
    return n < 10 ? '0' + n : n;
}

function getYears(startDate, endDate) {
    var start = new Date(startDate);
    var age = new Date(endDate - start);
    var age_dt = new Date(age);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
}

function getAge(startDate, endDate) {
    var start = new Date(startDate);
    var age = new Date(endDate - start);
    var age_dt = new Date(age);

    var years = Math.abs(age_dt.getUTCFullYear() - 1970);

    var days = age / 1000 / 60 / 60 / 24;
    var ext;
    if (years > 0) {
        ext = parseInt(years) + " tahun";
    } else {
        var months = Math.abs(age_dt.getUTCMonth());
        if (months > 1) {
            ext = parseInt(months) + " bulan";
        } else {
            if (days > 1) {
                ext = parseInt(days) + " hari";
            }
        }
    }
    return [parseInt(days), ext];
}

function isToday(input) {
    var now = new Date()
    now.setHours(23,59,59)
    compare = Math.round(now.getTime()/1000)
    return input < compare
}