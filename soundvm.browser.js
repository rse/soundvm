!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).SoundVM=t()}(this,(function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var i={src:["soundvm.data-sprite.mp3"],sprite:{"hint-message-de":[0,1776.0090702947846],"hint-message-en":[3e3,1679.9999999999998],"speed-faster-de":[6e3,1104.0136054421764],"speed-faster-en":[9e3,1224.0136054421775],"speed-slower-de":[12e3,1224.0136054421775],"speed-slower-en":[15e3,1199.9999999999993],"time-at-33p-de":[18e3,2399.9999999999986],"time-at-33p-en":[22e3,2064.0136054421773],"time-at-66p-de":[26e3,2448.0045351473905],"time-at-66p-en":[3e4,2208.0045351473955],"time-left-0m-de":[34e3,2736.0090702947846],"time-left-0m-en":[38e3,2376.009070294785],"time-left-1m-de":[42e3,2544.013605442174],"time-left-1m-en":[46e3,3e3],"time-left-2m-de":[5e4,2039.999999999999],"time-left-2m-en":[54e3,1992.0181405895719],"time-left-3m-de":[57e3,1776.0090702947834],"time-left-3m-en":[6e4,1752.0181405895698],"time-left-4m-de":[63e3,1752.0181405895698],"time-left-4m-en":[66e3,1704.013605442171],"time-left-5m-de":[69e3,1799.9999999999973],"time-left-5m-en":[72e3,1752.0181405895698]}},n=function(){function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e(this,n),this.options=Object.assign({basedir:"."},t)}var a,o,r;return a=n,(o=[{key:"config",value:function(e){return void 0!==e?{src:["".concat(this.options.basedir,"/soundvm.d/").concat(e,".mp3")]}:{src:["".concat(this.options.basedir,"/soundvm.data-sprite.mp3")],sprite:i.sprite}}},{key:"attrib",value:function(){return'This software uses the <a href="https://npmjs.com/@rse/soundvm">SoundVM</a> Sound Voice Message Collection.\nSoundVM is based on the following <a href="https://voicemaker.in/">Voicemaker ("Voicemaker allows you to redistribute your generated audio files", "The converted audio files can be shared worldwide on any platform.")</a> licensed sound effects:\n<b>hint-message-de</b> from <a href="https://voicemaker.in/ ("Bitte beachte die Meldungen!")">Voicemaker (2022)</a>,\n<b>hint-message-en</b> from <a href="https://voicemaker.in/ ("Please note the messages!")">Voicemaker (2022)</a>,\n<b>speed-faster-de</b> from <a href="https://voicemaker.in/ ("Schneller bitte!")">Voicemaker (2022)</a>,\n<b>speed-faster-en</b> from <a href="https://voicemaker.in/ ("Faster please!")">Voicemaker (2022)</a>,\n<b>speed-slower-de</b> from <a href="https://voicemaker.in/ ("Langsamer bitte!")">Voicemaker (2022)</a>,\n<b>speed-slower-en</b> from <a href="https://voicemaker.in/ ("Slower please!")">Voicemaker (2022)</a>,\n<b>time-at-33p-de</b> from <a href="https://voicemaker.in/ ("Du bist nun bei einem Drittel deiner Zeit.")">Voicemaker (2022)</a>,\n<b>time-at-33p-en</b> from <a href="https://voicemaker.in/ ("You are now at a third of your time.")">Voicemaker (2022)</a>,\n<b>time-at-66p-de</b> from <a href="https://voicemaker.in/ ("Du bist nun bei zwei Drittel deiner Zeit.")">Voicemaker (2022)</a>,\n<b>time-at-66p-en</b> from <a href="https://voicemaker.in/ ("You are now at two thirds of your time.")">Voicemaker (2022)</a>,\n<b>time-left-0m-de</b> from <a href="https://voicemaker.in/ ("Achtung, deine Zeit ist nun abgelaufen.")">Voicemaker (2022)</a>,\n<b>time-left-0m-en</b> from <a href="https://voicemaker.in/ ("Attention, your time is up now.")">Voicemaker (2022)</a>,\n<b>time-left-1m-de</b> from <a href="https://voicemaker.in/ ("Achtung, du hast nur noch 1 Minute.")">Voicemaker (2022)</a>,\n<b>time-left-1m-en</b> from <a href="https://voicemaker.in/ ("Attention, you only have 1 minute left.")">Voicemaker (2022)</a>,\n<b>time-left-2m-de</b> from <a href="https://voicemaker.in/ ("Du hast nur noch 2 Minuten.")">Voicemaker (2022)</a>,\n<b>time-left-2m-en</b> from <a href="https://voicemaker.in/ ("You only have 2 minutes left.")">Voicemaker (2022)</a>,\n<b>time-left-3m-de</b> from <a href="https://voicemaker.in/ ("Du hast noch 3 Minuten.")">Voicemaker (2022)</a>,\n<b>time-left-3m-en</b> from <a href="https://voicemaker.in/ ("You have 3 minutes left.")">Voicemaker (2022)</a>,\n<b>time-left-4m-de</b> from <a href="https://voicemaker.in/ ("Du hast noch 4 Minuten.")">Voicemaker (2022)</a>,\n<b>time-left-4m-en</b> from <a href="https://voicemaker.in/ ("You have 4 minutes left.")">Voicemaker (2022)</a>,\n<b>time-left-5m-de</b> from <a href="https://voicemaker.in/ ("Du hast noch 5 Minuten.")">Voicemaker (2022)</a>,\n<b>time-left-5m-en</b> from <a href="https://voicemaker.in/ ("You have 5 minutes left.")">Voicemaker (2022)</a>.\n'}}])&&t(a.prototype,o),r&&t(a,r),Object.defineProperty(a,"prototype",{writable:!1}),n}();return n}));
