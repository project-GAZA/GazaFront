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

export const fetchLikeCountUp = async messageid => {
  const response = await fetch(`/api/like?messageid=${messageid}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json, text/plain',
      'Content-Type': 'application/json;charset=UTF-8',
    },
  });
  const data = await response.json();
  return data;
};

export const fetchReportCountUp = async messageid => {
  const response = await fetch(`/api/report?messageid=${messageid}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json, text/plain',
      'Content-Type': 'application/json;charset=UTF-8',
    },
  });
  const data = await response.json();
  return data;
};

export const fetchPostCommnet = async (content, username) => {
  const response = await fetch(`/api/message`, {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain',
      'Content-Type': 'application/json;charset=UTF-8',
    },
    body: JSON.stringify({
      content,
      username,
    }),
  });
  return response.status;
};

/* CALL Donate Money */

export const fetchGetDonateMoney = async () => {
  const response = await fetch(`/api/donate`, {
    method: 'GET',
    headers: {
      Accept: 'application/json, text/plain',
      'Content-Type': 'application/json;charset=UTF-8',
    },
  });
  const data = await response.json();

  return data;
};
