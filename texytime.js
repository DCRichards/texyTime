javascript: (function() {
    var parser = document.createElement('a');
    parser.href = window.location.href;
    var refname = prompt('Enter the name of your citiation', 'online:'+parser.hostname);
    var title = document.title;
    var viewDate = new Date();
    var refString = '@online{' + refname + ',\n'
            + '\tauthor = {},\n'
            + '\ttitle = {{' + title + '}},\n'
            + '\tyear = ' + viewDate.getFullYear() + ',\n'
            + '\turl = {' + parser.href + '},\n'
            + '\turldate = {' + viewDate.toDateString() + '}\n'
            + '}';
    alert(refString);
}());