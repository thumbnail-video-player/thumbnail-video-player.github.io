function ThumbnailVideoPlayer() {

    var _this = this;
    var config = {};
    var templateHTML = `
    <iframe
        srcdoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/CODEVIDEO?autoplay=1><img src=https://img.youtube.com/vi/CODEVIDEO/hqdefault.jpg alt='YouTube video player'><span>▶</span></a>"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/CODEVIDEO"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
    </iframe>`;

    this.convertCodeToIframe = (code) => {
        code = this.get_video_id(code);

        return templateHTML.replaceAll('CODEVIDEO', code);
    }

    this.get_video_id = function(input) {
        var regexMatch = input.match(/(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/user\/\S+|\/ytscreeningroom\?v=|\/sandalsResorts#\w\/\w\/.*\/))([^\/&]{10,12})/);
        if (regexMatch) {
            return regexMatch[1];
        } else {
            return input;
        }
    }
}