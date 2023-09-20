import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import api from '../../api';
import { errorToast, handleErrors, successToast } from '../../helper';
import queryKey from './keys';
import { CandidateResponse } from './types';

const BASE_URL = '/candidate';

const create = (options = {}) => {
  const queryClient = useQueryClient();
  const { mutate, ...response } = useMutation(api.post, {
    mutationKey: [queryKey.create],
    ...options,
    onSuccess: (data) => {
      successToast('Candidate added successfully');
      queryClient.invalidateQueries([queryKey.read, data?.election?.electionId]);
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

const read = (options = { id: '' }) => {
  const response = useQuery(
    [queryKey.read, options.id],
    async () => await api.get({ url: `${BASE_URL}/election/${options.id}` }),
    {
      ...options,
      enabled: !!options.id,
      onSuccess: () => {},
      onError: () => {},
    }
  );

  const data = response.data as CandidateResponse | null;

  return { ...response, data };
};

const queries = { create, read };

export default queries;
