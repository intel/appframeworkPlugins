# Advertising plugin using jqMobi

###Author: David Karlin (Bachtrack Ltd)

This plugin helps you display advertisements on your page. It permits you to specify an ad either as an image or as a piece of
raw html (useful for Adsense and similar script-based ad providers), and supports a full page mode in which the ad takes over
the screen, permitting the user to close it after a timeout has expired, which is displayed to the user.


# Using

To use this, call .advertisement on a jqMobi collection. The available options are documented in the jq.advertisement.js
source file. Here is an example of creating a simple image ad which is frozen for 4 seconds:


```js
$(document).ready(function(){
    $('#fullpage').advertisement({
        mode: 'fullpage',
        timeout: 4,
        artwork: 'sample.jpg',
        targeturl: 'http://www.example.com'
    });
});
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