javascript: (function() {
    // thanks to jlong for this handy tip
    // https://gist.github.com/jlong/2428561
    var parser = document.createElement('a');
    parser.href = window.location.href;
    var refname = prompt('enter the name of your citiation', 'online:'+parser.hostname);
}());