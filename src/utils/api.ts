export const fetchComments = async (username, sort, size, page) => {
  const response = await fetch(
    `/api/message?sort=${sort}&page=${page}&size=${size}&username=${username}`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json, text/plain',
        'Content-Type': 'application/json;charset=UTF-8',
      },
    },
  );
  if (response.status === 200) {
    const data = await response.json();
    return data;
  }
  throw new Error(response.statusText);
};

export const fetchLikeCountUp = async messageid => {
  const response = await fetch(`/api/like?messageid=${messageid}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json, text/plain',
      'Content-Type': 'application/json;charset=UTF-8',
    },
  });
  if (response.status === 200) {
    const data = await response.json();
    return data;
  }
  throw new Error(response.statusText);
};

export const fetchReportCountUp = async messageid => {
  const response = await fetch(`/api/report?messageid=${messageid}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json, text/plain',
      'Content-Type': 'application/json;charset=UTF-8',
    },
  });
  if (response.status === 200) {
    const data = await response.json();
    return data;
  }
  throw new Error(response.statusText);
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
  if (response.status === 200) {
    const data = await response.json();
    return data;
  }
  throw new Error(response.statusText);
};

export const fetchPostDonateMoney = async () => {
  const response = await fetch(`/api/donate`, {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain',
      'Content-Type': 'application/json;charset=UTF-8',
    },
  });
  if (response.status === 200) {
    const data = await response.json();
    return data;
  }
  throw new Error(response.statusText);
};

export const fetchGetMessageCount = async () => {
  const response = await fetch(`/api/message/count`, {
    method: 'GET',
    headers: {
      Accept: 'application/json, text/plain',
      'Content-Type': 'application/json;charset=UTF-8',
    },
  });
  if (response.status === 200) {
    const data = await response.json();
    return data;
  }
  throw new Error(response.statusText);
};
