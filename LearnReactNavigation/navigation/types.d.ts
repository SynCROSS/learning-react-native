import type {
  NavigatorScreenParams,
  ParamListBase,
} from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList<T = ParamListBase> =
  | T
  | {
      Home: NavigatorScreenParams<T>;
      Detail: { id: number };
      NotFound: undefined;
    };

export type ScreenProps<
  RouteName extends keyof RootStackParamList,
  NavigatorID extends string | undefined = undefined,
> = NativeStackScreenProps<RootStackParamList, RouteName, NavigatorID>;
