#af.carousel.js


# af.carousel

To use af.carousel you must do the following

1. Create a div with the content inside you want to page between.  You must set the height and width of this div, along with overflow:hidden

``` html
<div id="my_div" style="width:768px;height:400px;overflow:hidden">
   <div style="float:left;width:766px;height:400;border:1px solid white;background:yellow;"></div>
   <div style="float:left;width:766px;height:400;border:1px solid white;background:green;"></div>
</div>
```

2. if you want the dots to show up for paging, create the div

``` html
<div id="carousel_dots" style="text-align: center; margin-left: auto; margin-right: auto; clear: both;position:relative;top:-40px;z-index:200"></div>
```

3. Call the javascript function to create the carousel

``` js
var carousel = $("#my_div").carousel();
```

There are additional configuration options that are passed in as an object parameter

``` js
var options={
   vertical:false, // page up/down
   horizontal:true, // page left/right
   pagingDiv:null, // div to hold the dots for paging
   pagingCssName:"carousel_paging", //classname for the paging dots
   pagingCssNameSelected: "carousel_paging_selected", //classname for the selected page dots
   wrap:true //Creates a continuous carousel
}
var carousel = $("#my_div").carousel(options);
```

There are two functions for adding/removing items
``` js
carousel.addItem(element);
carousel.removeItem(); //remove all items
carousel.removeItem(index); //remove an item by index
```