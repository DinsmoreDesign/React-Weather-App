// function getTempCallback (location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallback('Philadelphia', function(err, temp){
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
// function getTempPromise (location) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function(){
//       resolve(79);
//       reject('City not found');
//     }, 1000);
//   });
// }
//
// getTempPromise('Philadelphia').then(function(temp) {
//   console.log('Promise success', temp);
// }, function (err) {
//   console.log('Promise error', err);
// });

// Promise challenge
function addPromise (a, b) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      if (typeof a && typeof b === 'number') {
        resolve('!!! SUCCESS !!!' + '\n' + '>>> ' + (a + b));
      }
      reject('!!! ERROR !!!' + '\n' + '>>> ' + 'Both inputs must be integers');
    }, 1000);
  });
}

addPromise(4, 7).then(function(result){
  console.log(result);
}, function (err) {
  console.log(err);
});

addPromise(4, 'things').then(function(result){
  console.log(result);
}, function (err) {
  console.log(err);
});
