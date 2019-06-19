import React from 'react';

import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
class App extends React.Component {
  state = { images: [] };//initializing state property with blank array


  //below is one way withpout creating new api folder and new file
  // onSearchSubmit = async (term) => {
  //   const response = await axios.get('https://api.unsplash.com/search/photos', {
  //     params: { query: term },
  //     headers: {
  //       Authorization: 'Client-ID 184a1104941fa4bc747612400e02378645acdc23cddff2a621bb76d631f4cf87'
  //     }
  //   });
  //   this.setState({ images: response.data.results });
  // }


  //approach with new api folder and new file

  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term },

    });
    this.setState({ images: response.data.results });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
 <ImageList images={this.state.images}/>
      </div >
    );
  }
} 
export default App;