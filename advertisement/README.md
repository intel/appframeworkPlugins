# Advertising plugin using jqMobi

###Author: David Karlin (Bachtrack Ltd)

This plugin helps you display advertisements on your page. It permits you to specify an ad either as an image or as a piece of
raw html (useful for Adsense and similar script-based ad providers), and supports a full page mode in which the ad takes over
the screen, permitting the user to close it after a timeout has expired, which is displayed to the user.

```html
<script src="http://maps.google.com/maps/api/js?sensor=true"></script>
```

# Using

To use this, call .advertisement on a jqMobi collection. The available options are documented in the jq.advertisement.js
source file.


```js
$(document).ready(function(){
   $("#placeholder").advertisement({options});
});
```

#Retreiving the Google maps object

To get a google maps object that you can interact with, call the gmaps function with no parameters.  You must create the map before hand.

```js
var myMap=$("#maps").gmaps();
```

#Triggering a resize command

To trigger a resize  command

```js
$("#maps").gmaps('resize');
```

#Using in jqUi

If you are using this in jqUi, you need to trigger a resize when the panel is loaded.

```html
<div id="maps" title="Maps" class="panel" data-load="resizeMap">

</div>
```

```js
function resizeMap(){
    $("#maps").gmaps("resize");
}
```


# Bugs

Please use github to report any bugs found.  Please provide the following

1. Any error messages from the console

2. Line numbers of offending code

3. Test cases

4. Description of the Error

5. Expected result

6. Browser/Device you are testing on


# License

This plugin is licensed under the terms of the MIT License, see the included license.txt file.