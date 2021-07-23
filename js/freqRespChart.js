    

var yData = {
        datasets: [{
            data: [{x:20,y:-91.159}, {x:31.698,y:-88.709},{x:50.238,y:-87.149},{x:79.621,y:-86.328},{x:126.19,y:-85.953},{x:200,y:-85.795},{x:316.98,y:-85.73},{x:502.38,y:-85.704},{x:796.21,y:-85.694},{x:1261.9,y:-85.692},{x:2000,y:-85.695},{x:3169.8,y:-85.707},{x:5023.8,y:-85.736},{x:7962.1,y:-85.806},{x:12619,y:-85.954},{x:20000,y:-86.225}],
            borderColor: "red",
            backgroundColor: "red",
            label: "Capsule",
            fill: false
            },{
            data: [{x:20,y:-41.159},{x:31.698,y:-38.709},{x:50.238,y:-37.149},{x:79.621,y:-36.328},{x:126.19,y:-35.953},{x:200,y:-35.795},{x:316.98,y:-35.73},{x:502.38,y:-35.704},{x:796.21,y:-35.694},{x:1261.9,y:-35.692},{x:2000,y:-35.695},{x:3169.8,y:-35.707},{x:5023.8,y:-35.736},{x:7962.1,y:-35.806},{x:12619,y:-38.954},{x:20000,y:-56.57035}],                    
            borderColor: "green",
            backgroundColor: "green",
            label: "After amplification",
            fill: false
        }]
    };

new Chart("myChart", {
    type: "line",
    data: yData,
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'Frequency Response'
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Frequency (Hz)'
                },
                type: 'logarithmic',
            },
            y: {
                title: {
                    display: true,
                    text: 'Sensityvity (dB)'
                },
                min: -120,
                max: -30,
            }
        }
    },
});
