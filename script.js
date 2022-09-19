$( document ).ready(function() {
    if ($('.tabs__link').length) {
        $('.tabs__link').click(function(e){
            e.preventDefault();
            var tabId = $(this).attr('data-tab-id'),
            parent = $(this).closest('.tabs');

            // remove 'is-active' state from tab and content
            parent.find('.is-active').removeClass('is-active');

            // add new 'is-active' state
            $(this).addClass('is-active');
            $('#'+tabId).addClass('is-active');
        })
    }
});