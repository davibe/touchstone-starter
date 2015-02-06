TouchstoneJS Starter
====================

This fork

- Uses webpack instead of glup
- Adds live editing support using webpack-hot-loader + react hot loader (see.
  https://www.youtube.com/watch?v=pw4fKkyPPg8)
- Adds coffee script + cjsx support (the original src/js/app.js has been
  rewritten to app.cjsx as an example)
- Drops automatic iOS app skeleton generation which was based on glup (we need
  a crossplatform solution anyway)

How to use
----------

Very simple

    cd to-this-repo
    npm install .
    npm start

Open your browser to http://127.0.0.1:3000/

*Hint*

Edit source files and watch UI macigally update with no browser refresh and
without loosing react component state. You can open it on multiple
devices/browser at once.
