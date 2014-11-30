///// <reference path="..\..\..\..\Scripts\jquery-1.10.2.js" />

$(document).ready(function () {
    var responsiveMenuSettings = {
        doesBackgroundChange: false,
        doesPaddingChange: false,
        bgSelector: ".mega-menu-responsive > li > ul, .top-menu > li > .sublist",
        bgInitialColor: $(".menu-title span").css("background-color"),
        red: 40,
        green: 40,
        blue: 40,
        alpha: 0.05,
        paddingSelector: ".header-menu > ul > li",
        paddingValue: 0,
        themeBreakpoint: 1000
    };

    var responsiveAppSettings = {
        isEnabled: true,
        isSearchBoxDetachable: true,
        isHeaderLinksWrapperDetachable: true,
        doesDesktopHeaderMenuStick: false,
        doesScrollAfterFiltration: true,
        doesSublistHasIndent: true,
        displayGoToTop: true,
        hasStickyNav: true,
        selectors: {
            menuTitle: ".menu-title span",
            headerMenu: ".header-menu",
            closeMenu: ".close-menu",
            movedElements: ".admin-header-links, .responsive-nav-wrapper, .logo-wrapper, .slider-wrapper, .master-wrapper-content, .footer",
            sublist: ".header-menu .sublist",
            overlayOffCanvas: ".overlayOffCanvas",
            withSubcategories: ".with-subcategories",
            filtersContainer: ".nopAjaxFilters7Spikes",
            filtersOpener: ".filters-button span",
            searchBoxOpener: ".search-wrap > span",
            searchBox: ".search-box",
            searchBoxBefore: ".search-box-reference",
            navWrapper: ".responsive-nav-wrapper",
            navWrapperParent: ".responsive-nav-wrapper-parent",
            headerLinksOpener: "#header-links-opener span",
            headerLinksWrapper: ".header-links-wrapper",
            shoppingCartLink: ".shopping-cart-link"
        }
    };

    initResponsiveTheme(responsiveMenuSettings, responsiveAppSettings);

    toggleFooterBlocks(responsiveMenuSettings.themeBreakpoint);

    $('.footer-block > .title, .news-list-homepage > .title').on('click', function () {
        if ($.getSpikesViewPort().width < responsiveMenuSettings.themeBreakpoint) {
            $(this).siblings('ul, .news-items').slideToggle();
        }
    });
    $.addSpikesWindowEvent("resize", function () { toggleFooterBlocks(responsiveMenuSettings.themeBreakpoint); });
    $.addSpikesWindowEvent("orientationchange", function () { toggleFooterBlocks(responsiveMenuSettings.themeBreakpoint); });

    $(document).on('nivo-slider-finished-loading', function() {
        var hpfw = $('.home-page-filters-wrapper');
        if ($.getSpikesViewPort().width > responsiveMenuSettings.themeBreakpoint && hpfw.length > 0) {
            hpfw.css('margin-top', -(hpfw.innerHeight() + parseInt($('.slider-wrapper').css('margin-bottom'))));
        }
    });
});

function toggleFooterBlocks(themeBreakpoint) {
    var viewport = $.getSpikesViewPort().width;
    var hpfw = $('.home-page-filters-wrapper');

    if (viewport >= themeBreakpoint) {
        $('.footer-block > ul, .news-list-homepage > .news-items').slideDown();

        if (hpfw.length > 0) {
            hpfw.css('margin-top', -(hpfw.innerHeight() + parseInt($('.slider-wrapper').css('margin-bottom'))));
        }
    }
    else {
        $('.footer-block > ul, .news-list-homepage > .news-items').slideUp();

        if (hpfw.length > 0) {
            hpfw.css('margin-top', '');
        }
    }
}