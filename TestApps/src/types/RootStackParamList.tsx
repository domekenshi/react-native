export type RootStackParamList = {
  Home: undefined; // ホーム画面にはパラメータが不要
  Todo: {itemId: number; otherParam: string}; // 詳細画面にはitemIdとotherParamが必要
  Detail: {itemId: number; otherParam: string}; // 詳細画面にはitemIdとotherParamが必要
  Animation: {itemId: number; otherParam: string}; // 詳細画面にはitemIdとotherParamが必要
};
