import {View, Text} from 'react-native';
import React from 'react';
import {Searchbar, shadow} from 'react-native-paper';
import SearchBarIcon from '../assets//WrapperIcons/SearchBarIcon';
import CrossIcon from '../assets/WrapperIcons/CrossIcon';

const SearchAnime = ({
  onChangeValueHandler,
}: {
  onChangeValueHandler: (val: string) => void;
}) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const searchItem = (val: string) => {
    setSearchQuery(val);
    onChangeValueHandler(val);
  };
  return (
    <Searchbar
      placeholder="Search"
      onChangeText={val => searchItem(val)}
      value={searchQuery}
      style={{
        backgroundColor: '#fffdf4',
        shadowRadius: 5,
        borderRadius: 5,
        borderColor: 'black',
      }}
      icon={({color,size})=><SearchBarIcon/>}
      clearIcon={()=><CrossIcon/>}
      
    />
  );
};

export default SearchAnime;
