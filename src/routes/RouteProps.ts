import {AuthRouteParams} from './RouteParams';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';

export type AuthRouteProps<T extends keyof AuthRouteParams> = {
  navigation: NativeStackNavigationProp<AuthRouteParams, T>;
  route: RouteProp<AuthRouteParams, T>;
};
