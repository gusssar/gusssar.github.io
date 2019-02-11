$(function() {
    let ctx = document.getElementById("myChart").getContext('2d');
    let myChart = new Chart(ctx, {
        type: 'polarArea',
        data: {
            labels: ["HTML", "CSS", "JQuery", "Node.js", "JavaScript", "SQL"],
            datasets: [{
                data: [10, 9, 5, 6, 5, 4],
                backgroundColor: [
                    'rgba(0, 0, 0, 0.6)',
                    'rgba(89, 51, 21, 0.6)',
                    'rgba(153, 119, 84, 0.6)',
                    'rgba(83, 55, 122, 0.6)',
                    'rgba(189, 2, 11, 0.6)',
                    'rgba(28, 100, 28, 0.6)'
                ],
                borderColor: [
                    'rgba(0, 0, 0, 1)',
                    'rgba(89, 51, 21, 1)',
                    'rgba(153, 119, 84, 1)',
                    'rgba(83, 55, 122, 1)',
                    'rgba(189, 2, 11, 1)',
                    'rgba(28, 100, 28, 1)'
                ],
                borderWidth: 0

            }]
        },
        options: {
            responsive: true,
            scale:{
                display:false

            },
            legend:{
                display:false,
                position:'top',
                labels:{
                    fontColor: 'black',
                    fontSize: 24,
                    fontFamily: "Gotham-ExtraLight",
                    boxWidth:25
                }
            },
            layout: {
                padding: {
                    left: 0,
                    right: 100,
                    top: 5,
                    bottom: 0
                }
            },
            animation:{
                animateScale: true
            }
        }
    });
});




