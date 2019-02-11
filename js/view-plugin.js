$(document).ready(function() {
    $('.content-view').viewportChecker({
        classToAdd: 'visible animated zoomIn',
        classToRemove : 'invisible',
        offset: 100,
        repeat: false
       // invertBottomOffset: true,
        //callbackFunction: function(elem, action){},
        //scrollHorizontal: false
});
});

$(document).ready(function() {
    $('.content-view-2').viewportChecker({
        classToAdd: 'visible animated zoomIn',
        classToRemove : 'invisible',
        offset: 100,
        repeat: false,
        // invertBottomOffset: true,
        callbackFunction: function(elem, action){
             $.getScript("./js/about.js", function(){});
        },
        //scrollHorizontal: false
    });
});

$(document).ready(function() {
    $('.content-view-3').viewportChecker({
        classToAdd: 'visible animated zoomIn',
        classToRemove : 'invisible',
        offset: 100,
        repeat: false,
        // invertBottomOffset: true,
        callbackFunction: function(elem, action){
            $.getScript("./js/skills.js", function(){});
        },
        //scrollHorizontal: false
    });
});

$(document).ready(function() {
    $('.fb').viewportChecker({
        classToAdd: 'fb-anim',
        offset: 100,
        repeat: false
    });
});

$(document).ready(function() {
    $('.gh').viewportChecker({
        classToAdd: 'gh-anim',
        offset: 100,
        repeat: false
    });
});
$(document).ready(function() {
    $('.st').viewportChecker({
        classToAdd: 'st-anim',
        offset: 100,
        repeat: false
    });
});
$(document).ready(function() {
    $('.tw').viewportChecker({
        classToAdd: 'tw-anim',
        offset: 100,
        repeat: false
    });
});

$(document).ready(function() {
    $('.vk').viewportChecker({
        classToAdd: 'vk-anim',
        offset: 100,
        repeat: false
    });
});

$(document).ready(function() {
    $('.mail').viewportChecker({
        classToAdd: 'mail-anim',
        offset: 100,
        repeat: false
    });
});