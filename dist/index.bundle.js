/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/mergeSort2.js":
/*!***********************************!*\
  !*** ./src/modules/mergeSort2.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function merge(left, right) {
    let sortedArr = [] // the sorted items will go here
    while (left.length && right.length) {
    // Insert the smallest item into sortedArr
    if (left[0] < right[0]) {
        sortedArr.push(left.shift())
    } else {
        sortedArr.push(right.shift())
    }
    }
    // Use spread operators to create a new array, combining the three arrays
    return [...sortedArr, ...left, ...right]
}

function mergeSort2(arr) {
    // Base case
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length / 2)
    // Recursive calls
    let left = mergeSort2(arr.slice(0, mid))
    let right = mergeSort2(arr.slice(mid))
    return merge(left, right)
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mergeSort2);

/***/ }),

/***/ "./src/modules/mergesort.js":
/*!**********************************!*\
  !*** ./src/modules/mergesort.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const mergeSort = (arr) => {
    let n = arr.length;
    // Base case
    if (n === 1) return arr;

    // Division step
    let left = n % 2 === 0 ? arr.splice(0, n/2) : arr.splice(0, (n-1)/2);
    let right = arr;

    const leftS = mergeSort(left)
    const rightS = mergeSort(right)

    const sorted = [];
    while (leftS.length && rightS.length) {

        if (leftS[0] < rightS[0]) {
            sorted.push(leftS.shift())
        } else {
            sorted.push(rightS.shift())
        }
    }

    console.log(sorted, leftS, rightS)
    // return sorted
    return [...sorted, ...leftS, ...rightS]

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mergeSort);

/***/ }),

/***/ "./src/modules/recursion-part1.js":
/*!****************************************!*\
  !*** ./src/modules/recursion-part1.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fibs": () => (/* binding */ fibs),
/* harmony export */   "fibsRec": () => (/* binding */ fibsRec)
/* harmony export */ });
const fibs = (num) => {

    const fibArr = [0, 1];
    while(num > fibArr.length) {
        fibArr.push(fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2])
    }

    return fibArr;
}

const fibsRec = (num) => {
    if (num === 1) return [0];
    if (num === 2) return [0, 1];
    let a = fibsRec(num - 1);
    a.push(a[num - 2] + a[num - 3]);
    return a
}





/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_recursion_part1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/recursion-part1 */ "./src/modules/recursion-part1.js");
/* harmony import */ var _modules_mergesort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/mergesort */ "./src/modules/mergesort.js");
/* harmony import */ var _modules_mergeSort2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/mergeSort2 */ "./src/modules/mergeSort2.js");




// console.log(fibs(8))
// console.log(fibsRec(8))


const testArr = [0, 3, 27, 4, 13, 8, 190, 5];
// console.log(testArr)
console.log((0,_modules_mergesort__WEBPACK_IMPORTED_MODULE_1__["default"])(testArr));
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsVUFBVTs7Ozs7Ozs7Ozs7Ozs7QUN4QnpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLGlFQUFlLFNBQVM7Ozs7Ozs7Ozs7Ozs7OztBQzVCeEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR3VCOzs7Ozs7O1VDbkJ2QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOdUQ7QUFDWDtBQUNFOztBQUU5QztBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsWUFBWSw4REFBUyxXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZWN1cnNpb24vLi9zcmMvbW9kdWxlcy9tZXJnZVNvcnQyLmpzIiwid2VicGFjazovL29kaW4tcmVjdXJzaW9uLy4vc3JjL21vZHVsZXMvbWVyZ2Vzb3J0LmpzIiwid2VicGFjazovL29kaW4tcmVjdXJzaW9uLy4vc3JjL21vZHVsZXMvcmVjdXJzaW9uLXBhcnQxLmpzIiwid2VicGFjazovL29kaW4tcmVjdXJzaW9uL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tcmVjdXJzaW9uL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXJlY3Vyc2lvbi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tcmVjdXJzaW9uL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1yZWN1cnNpb24vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gbWVyZ2UobGVmdCwgcmlnaHQpIHtcbiAgICBsZXQgc29ydGVkQXJyID0gW10gLy8gdGhlIHNvcnRlZCBpdGVtcyB3aWxsIGdvIGhlcmVcbiAgICB3aGlsZSAobGVmdC5sZW5ndGggJiYgcmlnaHQubGVuZ3RoKSB7XG4gICAgLy8gSW5zZXJ0IHRoZSBzbWFsbGVzdCBpdGVtIGludG8gc29ydGVkQXJyXG4gICAgaWYgKGxlZnRbMF0gPCByaWdodFswXSkge1xuICAgICAgICBzb3J0ZWRBcnIucHVzaChsZWZ0LnNoaWZ0KCkpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgc29ydGVkQXJyLnB1c2gocmlnaHQuc2hpZnQoKSlcbiAgICB9XG4gICAgfVxuICAgIC8vIFVzZSBzcHJlYWQgb3BlcmF0b3JzIHRvIGNyZWF0ZSBhIG5ldyBhcnJheSwgY29tYmluaW5nIHRoZSB0aHJlZSBhcnJheXNcbiAgICByZXR1cm4gWy4uLnNvcnRlZEFyciwgLi4ubGVmdCwgLi4ucmlnaHRdXG59XG5cbmZ1bmN0aW9uIG1lcmdlU29ydDIoYXJyKSB7XG4gICAgLy8gQmFzZSBjYXNlXG4gICAgaWYgKGFyci5sZW5ndGggPD0gMSkgcmV0dXJuIGFyclxuICAgIGxldCBtaWQgPSBNYXRoLmZsb29yKGFyci5sZW5ndGggLyAyKVxuICAgIC8vIFJlY3Vyc2l2ZSBjYWxsc1xuICAgIGxldCBsZWZ0ID0gbWVyZ2VTb3J0MihhcnIuc2xpY2UoMCwgbWlkKSlcbiAgICBsZXQgcmlnaHQgPSBtZXJnZVNvcnQyKGFyci5zbGljZShtaWQpKVxuICAgIHJldHVybiBtZXJnZShsZWZ0LCByaWdodClcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVyZ2VTb3J0MjsiLCJjb25zdCBtZXJnZVNvcnQgPSAoYXJyKSA9PiB7XG4gICAgbGV0IG4gPSBhcnIubGVuZ3RoO1xuICAgIC8vIEJhc2UgY2FzZVxuICAgIGlmIChuID09PSAxKSByZXR1cm4gYXJyO1xuXG4gICAgLy8gRGl2aXNpb24gc3RlcFxuICAgIGxldCBsZWZ0ID0gbiAlIDIgPT09IDAgPyBhcnIuc3BsaWNlKDAsIG4vMikgOiBhcnIuc3BsaWNlKDAsIChuLTEpLzIpO1xuICAgIGxldCByaWdodCA9IGFycjtcblxuICAgIGNvbnN0IGxlZnRTID0gbWVyZ2VTb3J0KGxlZnQpXG4gICAgY29uc3QgcmlnaHRTID0gbWVyZ2VTb3J0KHJpZ2h0KVxuXG4gICAgY29uc3Qgc29ydGVkID0gW107XG4gICAgd2hpbGUgKGxlZnRTLmxlbmd0aCAmJiByaWdodFMubGVuZ3RoKSB7XG5cbiAgICAgICAgaWYgKGxlZnRTWzBdIDwgcmlnaHRTWzBdKSB7XG4gICAgICAgICAgICBzb3J0ZWQucHVzaChsZWZ0Uy5zaGlmdCgpKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc29ydGVkLnB1c2gocmlnaHRTLnNoaWZ0KCkpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhzb3J0ZWQsIGxlZnRTLCByaWdodFMpXG4gICAgLy8gcmV0dXJuIHNvcnRlZFxuICAgIHJldHVybiBbLi4uc29ydGVkLCAuLi5sZWZ0UywgLi4ucmlnaHRTXVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lcmdlU29ydDsiLCJjb25zdCBmaWJzID0gKG51bSkgPT4ge1xuXG4gICAgY29uc3QgZmliQXJyID0gWzAsIDFdO1xuICAgIHdoaWxlKG51bSA+IGZpYkFyci5sZW5ndGgpIHtcbiAgICAgICAgZmliQXJyLnB1c2goZmliQXJyW2ZpYkFyci5sZW5ndGggLSAxXSArIGZpYkFycltmaWJBcnIubGVuZ3RoIC0gMl0pXG4gICAgfVxuXG4gICAgcmV0dXJuIGZpYkFycjtcbn1cblxuY29uc3QgZmlic1JlYyA9IChudW0pID0+IHtcbiAgICBpZiAobnVtID09PSAxKSByZXR1cm4gWzBdO1xuICAgIGlmIChudW0gPT09IDIpIHJldHVybiBbMCwgMV07XG4gICAgbGV0IGEgPSBmaWJzUmVjKG51bSAtIDEpO1xuICAgIGEucHVzaChhW251bSAtIDJdICsgYVtudW0gLSAzXSk7XG4gICAgcmV0dXJuIGFcbn1cblxuXG5leHBvcnQge2ZpYnMsIGZpYnNSZWN9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge2ZpYnMsIGZpYnNSZWN9IGZyb20gXCIuL21vZHVsZXMvcmVjdXJzaW9uLXBhcnQxXCJcbmltcG9ydCBtZXJnZVNvcnQgZnJvbSBcIi4vbW9kdWxlcy9tZXJnZXNvcnRcIjtcbmltcG9ydCBtZXJnZVNvcnQyIGZyb20gXCIuL21vZHVsZXMvbWVyZ2VTb3J0MlwiO1xuXG4vLyBjb25zb2xlLmxvZyhmaWJzKDgpKVxuLy8gY29uc29sZS5sb2coZmlic1JlYyg4KSlcblxuXG5jb25zdCB0ZXN0QXJyID0gWzAsIDMsIDI3LCA0LCAxMywgOCwgMTkwLCA1XTtcbi8vIGNvbnNvbGUubG9nKHRlc3RBcnIpXG5jb25zb2xlLmxvZyhtZXJnZVNvcnQodGVzdEFycikpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==