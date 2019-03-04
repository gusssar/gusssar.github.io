/**добавление классов для изменения видимости, анимации и появления страниц без javascript'ов*/
$(document).ready(function() {
    $('.content-view').viewportChecker({
        classToAdd: 'visible animated zoomIn',
        classToRemove : 'invisible',
        offset: 100,
        repeat: false
});
});
/**добавление классов для изменения видимости, анимации и появления страниц с javascript'ом*/
$(document).ready(function() {
    $('.content-view-2').viewportChecker({
        classToAdd: 'visible animated zoomIn',
        classToRemove : 'invisible',
        offset: 100,
        repeat: false
    });
});
/**добавление классов для изменения видимости, анимации и появления страниц с javascript'ом*/
$(document).ready(function() {
    $('.content-view-3').viewportChecker({
        classToAdd: 'visible animated zoomIn',
        classToRemove : 'invisible',
        offset: 100,
        repeat: false
    });
});

/**добавление классов для начала анимации при прокрутки до страницы*/
$(document).ready(function() {
    $('.fb').viewportChecker({classToAdd: 'fb-anim'});
    $('.gh').viewportChecker({classToAdd: 'gh-anim'});
    $('.st').viewportChecker({classToAdd: 'st-anim'});
    $('.tw').viewportChecker({classToAdd: 'tw-anim'});
    $('.vk').viewportChecker({classToAdd: 'vk-anim'});
    $('.mail').viewportChecker({classToAdd: 'mail-anim'});
});
//
// $(document).ready(function() {
//     $('.gh').viewportChecker({
//         classToAdd: 'gh-anim',
//         offset: 100,
//         repeat: false
//     });
// });
// $(document).ready(function() {
//     $('.st').viewportChecker({
//         classToAdd: 'st-anim',
//         offset: 100,
//         repeat: false
//     });
// });
// $(document).ready(function() {
//     $('.tw').viewportChecker({
//         classToAdd: 'tw-anim',
//         offset: 100,
//         repeat: false
//     });
// });
//
// $(document).ready(function() {
//     $('.vk').viewportChecker({
//         classToAdd: 'vk-anim',
//         offset: 100,
//         repeat: false
//     });
// });
//
// $(document).ready(function() {
//     $('.mail').viewportChecker({
//         classToAdd: 'mail-anim',
//         offset: 100,
//         repeat: false
//     });
// });