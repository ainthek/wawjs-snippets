// Observable.create
// wawjs - create custom observable 


const { Observable } = require("rxjs");

Observable.create(observer => {
  // function is called whenever someone subscribe 
  // and it receives an observer 
  // that you can use like a subject, i.e. call next, complete and error
  observer.next(1);
  observer.next(2);
  observer.complete();

  observer.error("the error");

  return function unsubscribe() {
    // can return an unsubscribe function that is called 
    // when the subscriber cancels the subscription. 
    // You can use it to clean up or execute some finishing action.
  }
});