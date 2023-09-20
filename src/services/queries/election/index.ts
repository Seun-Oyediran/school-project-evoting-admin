import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import api from '../../api';
import { errorToast, handleErrors, successToast } from '../../helper';
import queryKey from './keys';
import { ElectionResponse, SingleElectionResponse } from './types';

const BASE_URL = '/election';

const create = (options = {}) => {
  const queryClient = useQueryClient();
  const { mutate, ...response } = useMutation(api.post, {
    mutationKey: [queryKey.create],
    ...options,
    onSuccess: () => {
      successToast('Election created successfully');
      queryClient.invalidateQueries([queryKey.read]);
    },
    onError: (err: any) => {
      errorToast(handleErrors(err));
    },
  });
  return {
    mutate: (body: any) => {
      mutate({ url: `${BASE_URL}`, body });
    },
    ...response,
  };
};

const read = (options = {}) => {
  const response = useQuery([queryKey.read], async () => await api.get({ url: `${BASE_URL}` }), {
    ...options,
    onSuccess: () => {},
    onError: () => {},
  });

  const data = response.data as ElectionResponse | null;

  return { ...response, data };
};

const readOne = (options = { id: '' }) => {
  const { id } = options;
  const response = useQuery(
    [queryKey.readOne, id],
    async () => await api.get({ url: `${BASE_URL}/${id}` }),
    {
      ...options,
      enabled: !!id,
      onSuccess: () => {},
      onError: () => {},
    }
  );

  const data = response.data as SingleElectionResponse | null;

  return { ...response, data };
};

const queries = { create, read, readOne };

export default queries;
