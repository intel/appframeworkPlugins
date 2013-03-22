/*
 * jq.advertisement.js - Library to display advertising copy in a jqMobi html5 mobile app.
 * (c) 2012 Bachtrack Ltd. All Rights Reserved.
 *
 * Example of usage:
 *     $('#jQUi').advertisement({
 *          mode: 'fullpage',
 *          adtype: 'image',
 *          width: 300,
 *          height: 250,
 *          artwork: "http://yoursite.com/artwork.png",
 *          targeturl: "http://yoursite.com/where-to-go-on-click.html",
 *          class: "my-ad-class"
 *     });
 *
 *
 *
 */
(function($) {
    /**
     *
     * @param {Object} options: Object containing the following possible options:
     *      mode: "fullpage" to show the advertisement a pop-up full page, "append" (default) to show it after the element
     *      width: {Integer} (Optional) A fixed width for the div that will be wrapped around the ad
     *      height: {Integer} (Optional) A fixed height for the div that will be wrapped around the ad
     *      cssclass: {string} Optional - a class to be applied to a div that will be wrapped arund the ad
     *      targeturl: {String} Optional - a full URL to send the user to when he clicks on the ad
     *      htmlid: {String} Optional - an html ID to give to the outer div of the ad - defaults to "advertisement"
     *    Use either rawhtml or artwork:
     *      rawhtml: Raw html, which will be displayed within a div of size given by width and height above
     *      artwork: For an image ad, the URL of the image to be displayed
     */
    $.fn.advertisement = function(options) {
        var elem = this[0];     // The element to which we are attaching the advertisement
        var content;
        if (options.rawhtml !== undefined && options.rawhtml !== null) {
            content = options.rawhtml;
        } else if (options.artwork !== undefined && options.artwork !== null) {
            content = "<image src='" + options.artwork + "'/>";
        } else {
            console.error("jqMobi advertisement: you must specify either raw HTML or artwork");
        }
        if (options.mode === undefined) {
            options.mode = 'append';
        }

        var styles = new Array();
        if (options.width !== undefined) {
            styles.push("width:" + options.width + "px");
        }
        if (options.height !== undefined) {
            styles.push("height:" + options.height + "px");
        }
        if (options.mode == 'fullpage') {
            // For full page ads, centre the ad within its wrapper
            styles.push('margin-left:auto;margin-right:auto');
        }

        // Wrap the advertisement in a link if one has been specified.
        if (options.targeturl !== undefined && options.targeturl !== null) {
            content = "<a onclick='window.open(\"" + options.targeturl + "\");'>" + content + "</a>";
        }
        // Wrap the ad in a div with the desired styles
        var htmlid = options.htmlid == undefined ? 'advertisement' : options.htmlid;
        content = "<div id='" + htmlid + "'"+(options.cssclass === undefined ? '' : " class='" + options.cssclass + "'") +
            "style='" + styles.join(';') + "'>" + content + "</div>";

        if (options.mode == 'fullpage') {
            // Wrap the advertisement in a div that will take up the whole screen, with a close link above the top
            var timeouttext = '';
            if (options.timeout === undefined) {
                // No timeout was requested: display the close link immediately
                closedisplay = 'block';
                countdowndisplay = 'none';
            } else {
                // A timeout was requested: display a seconds timer and set it to count down
                closedisplay = 'none';
                countdowndisplay = 'block';
                timeouttext = options.timeout + (options.timeout > 1 ? ' seconds' : ' second');
                // Set a timer to count down
                setTimeout(function() { $.adclosetimeout(); }, 1000);
            }
            var outer = htmlid + '_outer';
            content = "<div id='" + outer + "' class='ad-fullpage' style='width:" + window.innerWidth + "px;height:" + window.innerHeight + "px'>" +
                "<div class='ad-closewrapper'>" +
                "<a id='ad-closelink' onclick='$(\"#" + outer + "\").remove();' class='icon close small ad-closelink' style='display:" +
                closedisplay + "'>Close ad</a>" +
                "<span id='ad-countdown' class='ad-countdown' style='display:" + countdowndisplay + "'>" + timeouttext + "</span></div>" +
                content + "</div>";
        } else {
            // Make sure we remove any existing displayed ad
            $('#' + htmlid).remove();
        }
        if (options.mode == 'prepend') {
            this[0].innerHTML = content + this[0].innerHTML;
        } else {
            this[0].innerHTML += content;
        }
    };

    /**
     * Come here every second when we have set a timeout which must expire before we display a Close button
     */
    $.adclosetimeout = function() {
        var split = $('#ad-countdown').html().split(' '); // e.g. into "5" and "seconds"
        var time = Number(split[0]) - 1;
        if (time > 0) {
            // Not yet timed out - decrement the time
            $('#ad-countdown').html(time + (time > 1 ? ' seconds' : ' second'));
            setTimeout(function() {
                $.adclosetimeout();
            }, 1000);
        } else {
            // We've timed out: enable the close button'
            $('#ad-closelink').css('display', 'block');
            $('#ad-countdown').css('display', 'none');
        }
    }
})(jq);