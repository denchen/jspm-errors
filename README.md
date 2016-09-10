## Purpose

Demostration of errors installing [stardust](https://github.com/TechnologyAdvice/stardust) (Official Semantic UI for React) via [JSPM](http://jspm.io).

## Caveat

This package was actually pared down from a repo I'm working on, and this repo was set up by someone else. I don't fully understand the setup or all the parts that make it work. I've tried to remove as much as possible (including 99% of the React code) that is not relevant to this demostration, but there is still a lot left over package-wise that I'm unsure of the purpose of or whether it's safe to remove. I will continue to pare it down while still being able to exhibit the error.

## Setup

    npm install
    jspm install
    grunt serve:dev
    # Open browser to http://localhost:8080

You should something similar to this in the console (Chrome):

    system.src.js:122 Uncaught (in promise)
    Error: (SystemJS) Cannot read property 'now' of undefined(…)
    addToError @ system.src.js:122
    linkSetFailed @ system.src.js:692
    (anonymous function) @ system.src.js:629
    doDynamicExecute @ system.src.js:774
    link @ system.src.js:969
    doLink @ system.src.js:628
    updateLinkSetOnLoad @ system.src.js:674
    (anonymous function) @ system.src.js:490

This error is due to including the line `import 'stardust'` in `web/main.js`. If you comment out that line, you should see the app load properly with "Hello World" in the browser.

This was tested on
* OSX 10.11.6
* Node 4.4.5
* npm 2.15.5
* jspm 0.17.0-beta.28 
