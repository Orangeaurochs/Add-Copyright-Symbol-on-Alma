javascript:(function() {
  
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

})();