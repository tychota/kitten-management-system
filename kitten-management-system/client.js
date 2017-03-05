import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { AsyncStorage } from 'react-native';

const networkInterface = createNetworkInterface({
  uri: 'https://api.graph.cool/simple/v1/cizwqvhqw1zev0150djntchc3'
});

networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {};
    }

    AsyncStorage
      .getItem('token')
      .then((token) => {
        console.log(token);
        req.options.headers.authorization = token ? `Bearer ${token}` : null;
        next();
      })
  }
}]);

const client = new ApolloClient({
  networkInterface,
  dataIdFromObject: o => o.id,
})

export default client;
