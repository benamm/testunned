import axios from 'axios';

import { getCookie } from '../../Helper/cookieManager';
import { apiUrl } from '../../Helper/constants';
import { userDeviceInfo } from '../../Helper/detectBrowser';

export const sessionStart = () => {

  return new Promise((resolve, reject) => {
    if (getCookie('t')) {
      try {
        axios({
          url: apiUrl + 'session/start',
          data: userDeviceInfo,
          method: 'POST'
        }).then(
          response => resolve(response.data.result.services)).catch(err => {
            console.log(err);
          })
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log('n has')

      try {
        axios({
          url: apiUrl + 'session/start',
          data: userDeviceInfo,
          method: 'POST'
        })
          .then(response =>{
            resolve(response.data.result)})
          .catch(err => {
            console.log(err);
          });
      } catch (error) {
        console.log(error)
      }
    }
  })
}
