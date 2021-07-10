function convertCodeToIframe(code) {
    code = get_video_id(code);

    var template = document.querySelector('#iframetemplate');
    var clone = template.innerHTML;
    clone = clone.replaceAll('CODEVIDEO', code);

    var textarea = document.querySelector('#textarea__content');
    textarea.innerHTML = clone.replace(/</g,"&lt;");
    // textarea.innerHTML = "<pre>" +
    //     clone.replace(/</g,"&lt;") +
    //     "</pre>";

    var apercu = document.querySelector('#apercu');
    apercu.innerHTML  = clone;
}

function get_video_id(input) {
    var regexMatch = input.match(/(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/user\/\S+|\/ytscreeningroom\?v=|\/sandalsResorts#\w\/\w\/.*\/))([^\/&]{10,12})/);
    if (regexMatch) {
        return regexMatch[1];
    } else {
        return input;
    }
}

function cody() {
    /* Get the text field */
    var copyText = document.getElementById('textarea__content');

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    document.execCommand('copy');

    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
}