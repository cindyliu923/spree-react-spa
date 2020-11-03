import { useEffect, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { loadProducts } from '../product/api';
import { cartCreated } from '../cart/redux';

const useLoadingProducts = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const loadingProducts = useCallback(async (page) => {
    setIsLoading(true);
    await dispatch(loadProducts(page));
    setIsLoading(false);
  }, [dispatch])

  useEffect(() => {
    const fetchFirstData = async () => {
      const token = localStorage.getItem('token');
      if (token) { 
        dispatch(cartCreated(token)); 
      }
      loadingProducts(1);
    }

    fetchFirstData();
  }, [dispatch, loadingProducts])

  return [isLoading, loadingProducts]
}

export default useLoadingProducts;
