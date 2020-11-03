import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loadProducts } from '../product/api';
import { cartCreated } from '../cart/redux';

const useLoadingProducts = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const loadingProducts = async (page) => {
    setIsLoading(true);
    await dispatch(loadProducts(page));
    setIsLoading(false);
  } 

  useEffect(() => {
    const fetchFirstData = async () => {
      const token = localStorage.getItem('token');
      if (token) { 
        dispatch(cartCreated(token)); 
      }
      loadingProducts(1);
    }

    fetchFirstData();
  }, [dispatch])

  return [isLoading, loadingProducts]
}

export default useLoadingProducts;
