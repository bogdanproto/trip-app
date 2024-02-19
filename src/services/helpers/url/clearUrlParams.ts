export const clearUrlParams = (params: URLSearchParams) => {
  const paramKeys = Array.from(params.keys());

  paramKeys.forEach(key => {
    params.delete(key);
  });
  const emptyParams = params.toString();

  const updatedUrl = `${window.location.pathname}?${emptyParams}`;

  window.history.replaceState({}, '', updatedUrl);
};
