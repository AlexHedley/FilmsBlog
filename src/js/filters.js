// Filters
myApp.filter("toDate", function () {
    return function (items) {
        return new Date(items);
    };
});

myApp.filter("minutesToDuration", function () {
    return function (minutes) {
        if (!minutes || minutes <= 0) { return ""; }
        var h = Math.floor(minutes / 60);
        var m = minutes % 60;
        if (h === 0) { return m + "m"; }
        if (m === 0) { return h + "h"; }
        return h + "h " + m + "m";
    };
});
