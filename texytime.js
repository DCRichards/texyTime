javascript: (function() {
    var parser = document.createElement('a');
    parser.href = window.location.href;
    var refname = prompt('enter the name of your citiation', 'online:'+parser.hostname);
}());