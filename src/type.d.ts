type AppStackParams = {
    drawer:string;
    animeListView: string;
    favoritesView: string;
    detailAnime:string;
  };

type RootStackParamList = {
    drawer: undefined;
    animeListView: undefined;
    favoritesView: undefined;
    detailAnime: {id: number};
};
  
type PropsFromRedux = ConnectedProps<typeof connector>;
