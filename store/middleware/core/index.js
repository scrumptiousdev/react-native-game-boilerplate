import measureMiddleware from './measure.middleware';
import throttleMiddleware from './throttle.middleware';
import debounceMiddleware from './debounce.middleware';

export default [
  measureMiddleware,
  throttleMiddleware,
  debounceMiddleware
]