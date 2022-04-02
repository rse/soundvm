
SoundVM
=======

Sound Voice Message Collection

<p/>
<img src="https://nodei.co/npm/@rse/soundvm.png?downloads=true&stars=true" alt=""/>

<p/>
<img src="https://david-dm.org/rse/soundvm.png" alt=""/>

About
-----

This is a small audio collection and associated tiny JavaScript library
(for use in the Browser in combination with a player library like
[Howler](https://howlerjs.com/)) to play particular sound voice messages
in a HTML5 Single-Page-Application (SPA). 

All sounds were electronically generated with the permissive
[VoiceMaker](https://voicemaker.in) Text-to-Speech (TTS) service. Check
the [soundvm.d/*.txt](./soundvm.d/) files for the particular origin and
license information details for each audio file. To easily give proper
credit and to comply with the licenses SoundVM provides an assembled
form of all origin and license information via its API.

For convenience reasons SoundVM provides
both individual audio files `soundvm.d/*.mp3` and an "all-in-one" audio
sprite `soundvm.data-sprite.mp3`. Both can be directly used with the
[Howler](https://howlerjs.com/) API.

Installation
------------

```shell
$ npm install soundvm
```

Usage
-----

```js
const Howler  = require("howler")
const SoundVM = require("soundvm")

const soundvm = new SoundVM()
const about   = soundvm.attrib()

const vm = new Hower({ ...soundvm.config("time-left-3m-en"), preload: true })
vm.play()

const vm = new Hower({ ...soundvm.config(), preload: true })
vm.play("time-left-3m-en")
```

License
-------

Copyright (c) 2022 Dr. Ralf S. Engelschall (http://engelschall.com/)

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

