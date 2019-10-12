import {ApolloClient} from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {setContext} from 'apollo-link-context';
import {createUploadLink} from 'apollo-upload-client';
import Cookie from 'universal-cookie';

const cookies = new Cookie();

const authLink = setContext((_, {headers}) => {
  const token = cookies.get('jwttoken');
  return {
    headers: {
      ...headers,
      Authorization: token ? `JWT ${token}` : token
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(createUploadLink({
    uri: process.env.REACT_APP_URL_GRAPHQL,
  })),
  cache: new InMemoryCache({
    dataIdFromObject: object => {
      return object.id || object._id
    }
  })
});

export default client;
