javascript: (function() {
    var parser = document.createElement('a');
    parser.href = window.location.href;
    var refname = prompt('Enter the name of your citiation', 'online:'+parser.hostname);
    var refString = '@online{' + refname + ',\n}';
    alert(refString);
}());