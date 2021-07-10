function convertToIframe(form) {
 var thumbnailVideoPlayer = new ThumbnailVideoPlayer;
 var iframe = thumbnailVideoPlayer.convertCodeToIframe(form.code.value);

 var textarea = document.querySelector('#textarea__content');
 textarea.innerHTML = iframe.replace(/</g,"&lt;");
 // textarea.innerHTML = "<pre>" +
 //     clone.replace(/</g,"&lt;") +
 //     "</pre>";

 var apercu = document.querySelector('#apercu');
 apercu.innerHTML  = iframe;
}

function copy() {
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