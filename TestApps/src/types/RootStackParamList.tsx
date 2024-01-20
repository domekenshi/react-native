export type RootStackParamList = {
  Home: undefined; // ホーム画面にはパラメータが不要
  Detail: {itemId: number; otherParam: string}; // 詳細画面にはitemIdとotherParamが必要
};
