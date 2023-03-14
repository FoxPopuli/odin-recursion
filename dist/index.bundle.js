/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
    let left, right;
    if (n % 2 === 0) {
        left = arr.splice(0, n/2);
    } else {
        left = arr.splice(0, (n-1)/2);
    }

    // if (left.length === 1) return left;

    right = arr;

    console.log(left, right)

    // Merge step
    // if (mergeSort(left) > mergeSort(right)) {
    //     return mergeSort(left) + mergeSort(right);
    // } else {
    //     return mergeSort(right) + mergeSort(left);
    // }

    const leftSorted = mergeSort(left)
    const rightSorted = mergeSort(right)

    if (leftSorted <= rightSorted) {
        return [...leftSorted, ...rightSorted]
    } else {
        return [...rightSorted, ...leftSorted]
    }

    // if (mergeSort(left) > mergeSort(right)) {
    //     return left.concat(right);
    // } else {
    //     return right.concat(left);
    // }

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




console.log((0,_modules_recursion_part1__WEBPACK_IMPORTED_MODULE_0__.fibs)(8))
console.log((0,_modules_recursion_part1__WEBPACK_IMPORTED_MODULE_0__.fibsRec)(8))


const testArr = [0, 3, 27, 4, 13, 8, 190, 5];
console.log(testArr)
console.log((0,_modules_mergesort__WEBPACK_IMPORTED_MODULE_1__["default"])(testArr));
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQSxpRUFBZSxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7QUM3Q3hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUd1Qjs7Ozs7OztVQ25CdkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOdUQ7QUFDWDs7O0FBRzVDLFlBQVksOERBQUk7QUFDaEIsWUFBWSxpRUFBTzs7O0FBR25CO0FBQ0E7QUFDQSxZQUFZLDhEQUFTLFciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlY3Vyc2lvbi8uL3NyYy9tb2R1bGVzL21lcmdlc29ydC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlY3Vyc2lvbi8uL3NyYy9tb2R1bGVzL3JlY3Vyc2lvbi1wYXJ0MS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlY3Vyc2lvbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXJlY3Vyc2lvbi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZWN1cnNpb24vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXJlY3Vyc2lvbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tcmVjdXJzaW9uLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1lcmdlU29ydCA9IChhcnIpID0+IHtcbiAgICBsZXQgbiA9IGFyci5sZW5ndGg7XG4gICAgLy8gQmFzZSBjYXNlXG4gICAgaWYgKG4gPT09IDEpIHJldHVybiBhcnI7XG5cblxuXG4gICAgLy8gRGl2aXNpb24gc3RlcFxuICAgIGxldCBsZWZ0LCByaWdodDtcbiAgICBpZiAobiAlIDIgPT09IDApIHtcbiAgICAgICAgbGVmdCA9IGFyci5zcGxpY2UoMCwgbi8yKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBsZWZ0ID0gYXJyLnNwbGljZSgwLCAobi0xKS8yKTtcbiAgICB9XG5cbiAgICAvLyBpZiAobGVmdC5sZW5ndGggPT09IDEpIHJldHVybiBsZWZ0O1xuXG4gICAgcmlnaHQgPSBhcnI7XG5cbiAgICBjb25zb2xlLmxvZyhsZWZ0LCByaWdodClcblxuICAgIC8vIE1lcmdlIHN0ZXBcbiAgICAvLyBpZiAobWVyZ2VTb3J0KGxlZnQpID4gbWVyZ2VTb3J0KHJpZ2h0KSkge1xuICAgIC8vICAgICByZXR1cm4gbWVyZ2VTb3J0KGxlZnQpICsgbWVyZ2VTb3J0KHJpZ2h0KTtcbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgICByZXR1cm4gbWVyZ2VTb3J0KHJpZ2h0KSArIG1lcmdlU29ydChsZWZ0KTtcbiAgICAvLyB9XG5cbiAgICBjb25zdCBsZWZ0U29ydGVkID0gbWVyZ2VTb3J0KGxlZnQpXG4gICAgY29uc3QgcmlnaHRTb3J0ZWQgPSBtZXJnZVNvcnQocmlnaHQpXG5cbiAgICBpZiAobGVmdFNvcnRlZCA8PSByaWdodFNvcnRlZCkge1xuICAgICAgICByZXR1cm4gWy4uLmxlZnRTb3J0ZWQsIC4uLnJpZ2h0U29ydGVkXVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBbLi4ucmlnaHRTb3J0ZWQsIC4uLmxlZnRTb3J0ZWRdXG4gICAgfVxuXG4gICAgLy8gaWYgKG1lcmdlU29ydChsZWZ0KSA+IG1lcmdlU29ydChyaWdodCkpIHtcbiAgICAvLyAgICAgcmV0dXJuIGxlZnQuY29uY2F0KHJpZ2h0KTtcbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgICByZXR1cm4gcmlnaHQuY29uY2F0KGxlZnQpO1xuICAgIC8vIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBtZXJnZVNvcnQ7IiwiY29uc3QgZmlicyA9IChudW0pID0+IHtcblxuICAgIGNvbnN0IGZpYkFyciA9IFswLCAxXTtcbiAgICB3aGlsZShudW0gPiBmaWJBcnIubGVuZ3RoKSB7XG4gICAgICAgIGZpYkFyci5wdXNoKGZpYkFycltmaWJBcnIubGVuZ3RoIC0gMV0gKyBmaWJBcnJbZmliQXJyLmxlbmd0aCAtIDJdKVxuICAgIH1cblxuICAgIHJldHVybiBmaWJBcnI7XG59XG5cbmNvbnN0IGZpYnNSZWMgPSAobnVtKSA9PiB7XG4gICAgaWYgKG51bSA9PT0gMSkgcmV0dXJuIFswXTtcbiAgICBpZiAobnVtID09PSAyKSByZXR1cm4gWzAsIDFdO1xuICAgIGxldCBhID0gZmlic1JlYyhudW0gLSAxKTtcbiAgICBhLnB1c2goYVtudW0gLSAyXSArIGFbbnVtIC0gM10pO1xuICAgIHJldHVybiBhXG59XG5cblxuZXhwb3J0IHtmaWJzLCBmaWJzUmVjfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtmaWJzLCBmaWJzUmVjfSBmcm9tIFwiLi9tb2R1bGVzL3JlY3Vyc2lvbi1wYXJ0MVwiXG5pbXBvcnQgbWVyZ2VTb3J0IGZyb20gXCIuL21vZHVsZXMvbWVyZ2Vzb3J0XCI7XG5cblxuY29uc29sZS5sb2coZmlicyg4KSlcbmNvbnNvbGUubG9nKGZpYnNSZWMoOCkpXG5cblxuY29uc3QgdGVzdEFyciA9IFswLCAzLCAyNywgNCwgMTMsIDgsIDE5MCwgNV07XG5jb25zb2xlLmxvZyh0ZXN0QXJyKVxuY29uc29sZS5sb2cobWVyZ2VTb3J0KHRlc3RBcnIpKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=