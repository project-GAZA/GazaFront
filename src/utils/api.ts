export const fetchComments = async (sort, size, page) => {
  const response = await fetch(
    `/api/message?sort=${sort}&page=${page}&size=${size}`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json, text/plain',
        'Content-Type': 'application/json;charset=UTF-8',
      },
    },
  );
  const data = await response.json();
  return data;
};

export const fetchSearchComments = async (username, size, page) => {
  const response = await fetch(
    `/api/home?username=${username}&size=${size}&page=${page}`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json, text/plain',
        'Content-Type': 'application/json;charset=UTF-8',
      },
    },
  );
  const data = await response.json();
  return data;
};
