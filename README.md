# Purpose

Demostration of errors installing [stardust](https://github.com/TechnologyAdvice/stardust) (Official Semantic UI for React) via [JSPM](http://jspm.io).

This package was actually pared down from a repo I'm using, and hence there are quite a few packages and functions that are not relevant
to this demostration. I'll continue to try to remove as many elements as possible while still displaying the error.

# Setup

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
    

This was tested on
* OSX 10.11.6
* Node 4.4.5
* npm 2.15.5
* jspm 0.17.0-beta.28 
