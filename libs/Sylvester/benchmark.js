// Sylvester benchmark

/*jslint browser: true, maxerr: 50, maxlen: 79, nomen: true, sloppy: true,
  unparam: true */

/*global TestHelper, Sylvester, Vector, Matrix, Line, Plane, $V, $M, $L, $P,
  pseudoRandom */

window.onload = TestHelper.main;

var tests = (function () {

    function createMatrix(data) {
        return $M(data);
    }


    return {
              'Multiplication': { test:
                  function (count, maxCount, milliSeconds, data) {
                      var m1 = createMatrix(data),
                          m2 = createMatrix(data),
                          m3,
                          start = Date.now(),
                          loopCount = 0,
                          i;
                      while (Date.now() - start < milliSeconds &&
                                 loopCount !== maxCount) {
                          loopCount += 1;
                          for (i = 0; i < count; i += 1) {
                              m3 = m1.multiply(m2);
                          }
                      }
                      return {
                          time: Date.now() - start,
                          loopCount: loopCount,
                          result: m3
                      };
               }
           },
              'Inverse': {test: null},
              'Determinant': {test: null},
              'Trace': {test: null}
    };
}());
