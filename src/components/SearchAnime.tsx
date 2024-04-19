import { View, Text } from 'react-native'
import React from 'react'
import { Searchbar } from 'react-native-paper';
import SearchBarIcon from '../assets//WrapperIcons/SearchBarIcon';

const SearchAnime = ({onChangeValueHandler}:{onChangeValueHandler:(val:string)=>void}) => {
    const [searchQuery, setSearchQuery] = React.useState('');

    const searchItem = (val:string) =>{
      setSearchQuery(val);
      onChangeValueHandler(val)
    }
    return (
      <Searchbar
        placeholder="Search"
        onChangeText={(val)=>searchItem(val)}
        value={searchQuery}
        style={{
          backgroundColor:'transparent'
        }}
      />
    );
}

export default SearchAnime