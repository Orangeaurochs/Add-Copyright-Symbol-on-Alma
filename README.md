# Add-Copyright-Symbol-on-Alma
Adds a copyright symbol (©) to a 264 _4 field on Alma in one click using a bookmarklet

It adds copyright symbol (©) to a 264 _4 field on the Alma Metadata Editor. It should also work on other fields if needed

To install the bookmarklet, add the following code into the URL or Location section of a new bookmark:

```javascript:(function() {
  
var getActiveElement = function (element = document.activeElement) {
  var shadowRoot = element.shadowRoot ;
  var contentDocument = element.contentDocument;
  if (shadowRoot && shadowRoot.activeElement) {
    return getActiveElement(shadowRoot.activeElement);
  };
  if (contentDocument && contentDocument.activeElement) {
    return getActiveElement(contentDocument.activeElement);
  };
  return element;
};

  var activeEl=getActiveElement();
  var two64El = activeEl;
  var two64text = two64El.value;
  two64El.value = two64text+"©";
  var event = new Event('change');
  two64El.dispatchEvent(event);

})();```

To use the bookmarklet:

* Click on the 264 _4 field subfield $$c in a record
* Click on the bookmarklet on the your bookmarks toolbar
