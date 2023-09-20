import { useQuery } from '@tanstack/react-query';
import api from '../../api';
import queryKey from './keys';
import { AgeGroupResponse, GenderResponse } from './types';

const BASE_URL = '/voter';

const read = (options = {}) => {
  const response = useQuery(
    [queryKey.read],
    async () => await api.get({ url: `${BASE_URL}/gender` }),
    {
      ...options,
      onSuccess: () => {},
      onError: () => {},
    }
  );

  const data = response.data as GenderResponse | null;

  return { ...response, data };
};

const readOne = (options = {}) => {
  const response = useQuery(
    [queryKey.readOne],
    async () => await api.get({ url: `${BASE_URL}/ageGroup` }),
    {
      ...options,
      onSuccess: () => {},
      onError: () => {},
    }
  );

  const data = response.data as AgeGroupResponse | null;

  return { ...response, data };
};

const queries = { read, readOne };

export default queries;
