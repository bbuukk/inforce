import Layout from '../Layout';
import LandingProduct from './LandingProduct';
import ListingProducts from './ListingProducts';

const getRouteObjects = () => {
  return [
    {
      element: <Layout />,
      //TODO: introduce better error page
      errorElement: <div>Unexpected ERROR occured!</div>,
      children: [
        {
          path: '/',
          element: <ListingProducts />
        },
        {
          path: '/products/:id',
          element: <LandingProduct />
        }
      ]
    }
  ];
};

export default getRouteObjects;
