import { createAction } from 'redux-actions';
import { fetch } from '../../../../utils';
import { API_URL } from '../../../../backend_url';
import { CLUSTER_LIST } from '../constants';

const reset = createAction(CLUSTER_LIST, () => ({
  status: 'initial',
  clusters: [],
}));

const begin = createAction(CLUSTER_LIST, () => ({
  status: 'pending',
  clusters: [],
}));

const success = createAction(CLUSTER_LIST, clusters => ({
  clusters,
  status: 'success',
}));

const fail = createAction(CLUSTER_LIST, error => ({
  status: 'error',
  error,
}));

const get = () =>
  dispatch => {
    dispatch(begin());
    fetch({
      url: `${API_URL}/clusters`,
      method: 'GET',
    })
      .then(clusters => {
        dispatch(success(clusters));
        return clusters;
      })
      .catch(error => {
        dispatch(fail(error.message));
      });
  };

const actions = {
  reset,
  begin,
  success,
  fail,
  get,
};

export default actions;
