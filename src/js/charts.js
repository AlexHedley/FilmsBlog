// Charts

// Date / Year
getChartData = (data) => {
    var dict = {};
    angular.forEach(data, function (value, key) {
        var year = new Date(value.FilmDate).getFullYear();
        if (dict.hasOwnProperty(year)) {
            dict[year] += 1;
        } else {
            dict[year] = 1;
        }
    });
    // console.log(dict);
    return dict;
};

setupChart = (chartData) => {
    Chart.register(ChartDataLabels);

    const options = {
        plugins: {
            datalabels: {
                color: "#36A2EB",
            },
        },
    };

    const config = {
        type: "bar",
        data: {
            labels: Object.keys(chartData),
            datasets: [
                {
                    label: "Films per year",
                    data: Object.values(chartData),
                    fill: false,
                    borderColor: "rgb(75, 192, 192)",
                    tension: 0.1,
                },
            ],
        },
        options,
    };

    let ctx = $("#chartYear");

    let lineGraph = new Chart(ctx, config);
};

// ----- ----- ----- ----- -----

// Stars
getChartDataStars = (data) => {
    var dict = {};
    angular.forEach(data, function (value, key) {
        var star = value.Stars;
        if (dict.hasOwnProperty(star)) {
            dict[star] += 1;
        } else {
            dict[star] = 1;
        }
    });
    // console.log(dict);
    return dict;
};

setupChartStars = (chartData) => {
    Chart.register(ChartDataLabels);

    const options = {
        plugins: {
            datalabels: {
                color: "#36A2EB",
            },
        },
    };

    const config = {
        type: "bar",
        data: {
            labels: Object.keys(chartData),
            datasets: [
                {
                    label: "Ratings Count",
                    data: Object.values(chartData),
                    fill: false,
                    borderColor: "rgb(75, 192, 192)",
                    tension: 0.1,
                },
            ],
        },
        options,
    };

    let ctx = $("#chartRating");

    let lineGraph = new Chart(ctx, config);
};

// ----- ----- ----- ----- -----

// Certificates

getChartDataCertificates = (data) => {
    var dict = {};
    angular.forEach(data, function (value, key) {
        var certificate = value.Certificate;
        if (dict.hasOwnProperty(certificate)) {
            dict[certificate] += 1;
        } else {
            dict[certificate] = 1;
        }
    });
    return dict;
};

setupChartCertificates = (chartData) => {
    Chart.register(ChartDataLabels);

    const options = {
        plugins: {
            datalabels: {
                color: "#36A2EB",
            },
        },
    };

    const config = {
        type: "bar",
        data: {
            labels: Object.keys(chartData),
            datasets: [
                {
                    label: "Certificates Count",
                    data: Object.values(chartData),
                    fill: false,
                    borderColor: "rgb(75, 192, 192)",
                    tension: 0.1,
                },
            ],
        },
        options,
    };

    let ctx = $("#chartCertificates");

    let lineGraph = new Chart(ctx, config);
};

// ----- ----- ----- ----- -----

// By Cinema
getChartDataCinema = (data) => {
    var dict = {};
    angular.forEach(data, function (value, key) {
        var cinema = value.Cinema;
        if (dict.hasOwnProperty(cinema)) {
            dict[cinema] += 1;
        } else {
            dict[cinema] = 1;
        }
    });
    return dict;
};

setupChartCinema = (chartData) => {
    Chart.register(ChartDataLabels);

    const options = {
        plugins: {
            datalabels: {
                color: "#36A2EB",
            },
        },
    };

    const config = {
        type: "bar",
        data: {
            labels: Object.keys(chartData),
            datasets: [
                {
                    label: "Films per Cinema",
                    data: Object.values(chartData),
                    fill: false,
                    borderColor: "rgb(75, 192, 192)",
                    tension: 0.1,
                },
            ],
        },
        options,
    };

    let ctx = $("#chartCinema");

    let lineGraph = new Chart(ctx, config);
}
