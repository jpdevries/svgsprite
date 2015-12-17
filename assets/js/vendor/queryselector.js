if (!document.querySelectorAll) { // https://twitter.com/bjankord/status/289443041872318464
    document.querySelectorAll = function(selector) {
        var doc = document,
            head = doc.documentElement.firstChild,
            styleTag = doc.createElement('STYLE');
        head.appendChild(styleTag);
        doc.__qsaels = [];

        styleTag.styleSheet.cssText = selector + "{x:expression(document.__qsaels.push(this))}";
        window.scrollBy(0, 0);

        return doc.__qsaels;
    }
}