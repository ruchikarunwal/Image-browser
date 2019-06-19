//import React from 'react';
import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 184a1104941fa4bc747612400e02378645acdc23cddff2a621bb76d631f4cf87'
  }
});