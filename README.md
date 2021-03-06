# less-watch-compile
Watch specified directory or file for changes to LESS files, and save the generated CSS where specified

### Installation
Install from the [npm registry](https://www.npmjs.com/)
```sh
npm i less-watch-compile
```

## Usage 
```sh
node node_modules/less-watch-compile -w <dir> -o <dir> -f <path>
```
-o, --outputDir Define what directory to output compiled LESS to [REQUIRED]  
-w, --watchDir Specify what directory to watch [Defaults to '/']  
-f, --file Specify a particular file to watch, rather than watching an entire directory  
-s, --safetyOff Add flag to disable checking for underscore ( _ ) preceding filenames [Defaults to false]  
*Note, if both ---watchDir and --file are used, --watchDir will be ignored*

#### Example Usage
Parent  
|----src  
|--------main.less  
|----public  
|--------styles  
|------------main.css  
In the example directory above, the contents *src/* can be compiled to *public/styles/* using
```sh
node node_modules/less-watch-compile -w src -o public/styles
```
To only watch for *main.less*, use
```sh
node node_modules/less-watch-compile -f src/main.less -o public/styles
```
### Todos
* Set up check to ignore LESS files that are imports of another LESS file

# Bugs
If you find any bugs, please submit an issue. This project is still in a early stage, and any feedback would greatly help! :)

### Version
1.1.8

License
----

MIT
