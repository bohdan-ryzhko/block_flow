import { FC } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { useReduxStore } from '../../hooks';
import { Loader, NoData } from '../../components';

export const Home: FC = () => {
  const { auth } = useReduxStore();

  return (
    <>
      {!auth.user && !auth.loading && <NoData />}

      {!auth.user && auth.loading && <Loader fullScreen size="large" />}

      {auth.user && !auth.loading && (
        <SafeAreaView>
          <Text>Name: {auth.user.name}</Text>
          <Text>Last name: {auth.user.lastName}</Text>
          <Text>Phone: {auth.user.phone}</Text>
        </SafeAreaView>
      )}
    </>
  );
};
