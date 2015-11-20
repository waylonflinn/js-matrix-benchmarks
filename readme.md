Simple benchmarks for testing the speed of general purpose JavaScript matrix libraries.

## Libraries

Library | License
--------|-------
[vectorious](https://github.com/mateogianolio/vectorious) | [MIT](http://www.opensource.org/licenses/mit-license.php)
[Sylvester](https://github.com/jcoglan/sylvester) | [MIT](http://www.opensource.org/licenses/mit-license.php)
[math.js](https://github.com/josdejong/mathjs) | [Apache 2.0](http://www.apache.org/licenses/LICENSE-2.0)

## View Results Online
See the results in your browser here: [Matrix Benchmarks](http://waylonflinn.github.io/js-matrix-benchmarks/matrix_benchmark.html).

## Running Locally

Since each library runs in an iFrame you will need to either:

* Run the benchmarks from a local web server
* Configure the browser to allow local file access

I recommend the simple and fantastic node.js server, [http-server](https://github.com/indexzero/http-server)

Install with [npm](http://npmjs.org) like this,

```npm install -g http-server```

Then, run this in the root of repository,

```http-server```

## Acknowledgments

Adapted from Stephen Bannasch's webgl matrix benchmarks: https://github.com/stepheneb/webgl-matrix-benchmarks

original code was released under the [New BSD license](http://www.opensource.org/licenses/bsd-license.php),
new code retains that license.
