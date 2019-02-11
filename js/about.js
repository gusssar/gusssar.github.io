var chart = AmCharts.makeChart("chartdiv", {
    "type": "serial",
    "theme": "light",
    "rotate": true,
    "marginBottom": 50,
    "dataProvider": [{
        "pos": "1",
        "love": -100,
        "hate": 100
    }, {
        "pos": "2",
        "love": -80,
        "hate": 70
    }, {
        "pos": "3",
        "love": -60,
        "hate": 40
    },{
        "pos": "4",
        "love": -40,
        "hate": 30
    },{
        "pos": "5",
        "love": -20,
        "hate": 10
    },{
        "pos": "6",
        "love": -10,
        "hate": 5
    },{
        "pos": "7",
        "love": -5,
        "hate": 0
    }],
    "startDuration": 1,
    "graphs": [{
        "fillAlphas": 0.8,
        "lineAlpha": 0.2,
        "type": "column",
        "valueField": "love",
        "title": "love",
        "labelText": false,
        "clustered": false
    },
        {
        "fillAlphas": 0.8,
        "lineAlpha": 0.2,
        "type": "column",
        "valueField": "hate",
        "title": "hate",
        "labelText": false,
        "clustered": false
    }],
    "categoryField": "pos",
    "categoryAxis": {
        "gridPosition": "start",
        "gridAlpha": 0,
        "axisAlpha": 0,
        "labelsEnabled" : false
    },
    "valueAxes": [{
        "axisAlpha": 0,
        "gridAlpha": 0,
        "position": "top",
        "ignoreAxisWidth": true,
        "labelsEnabled" : false,
        "guides": [{
            "value": 0,
            "lineAlpha": 0
        }]
    }],
    "balloon": {
        "fixedPosition": true
    },
    "chartCursor": {
        "enabled":false,
        "valueBalloonsEnabled": true
    },
    "export": {
        "enabled": false
    }

});