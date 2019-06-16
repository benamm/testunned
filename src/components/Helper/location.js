export const getPosition = function (options) {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
}

// export const screenCenter = () => {
  
//   getPosition() {
//     console.log('asdasdasdas')
//   }

//   // lat: 35.736780800000005,
//   // lng: 51.441663999999996
// }