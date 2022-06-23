var rangeSlider = document.getElementById('timing-slider');
var rangeSliderValueElement = document.getElementById('timing-value');
var rangeSliderValueElementSecond = document.getElementById('timing-value-second');

noUiSlider.create(rangeSlider, {
    start: 5000,
    connect: [true, false],
    tooltips: true,
    step: 1,
    range: {
        'min': [100],
        'max': [10000]
    },
    pips: {
        mode: 'range',
        density: 2
    },
    format: {
        to: function (value) {
            return parseInt(value);
        },
        from: function (value) {
            return parseInt(value);
        }
    }
});

rangeSlider.noUiSlider.on('update', function (values, handle) {
    rangeSliderValueElement.innerHTML = parseInt(values[handle] / 120);

    rangeSliderValueElementSecond.innerHTML = parseInt(values[handle] / 120 + 5);

});