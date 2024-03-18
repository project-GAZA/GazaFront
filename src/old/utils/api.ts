export const fetchComments = async (
  username: string,
  sort: string,
  size: number,
  page: number,
) => {
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

export const fetchLikeCountUp = async (messageid: number) => {
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

export const fetchReportCountUp = async (messageid: number) => {
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

export const fetchPostCommnet = async (content: string, username: string) => {
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
  const data = await response.json();
  if (response.status === 200) {
    return data;
  }
  throw Error(data.error);
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

export const fetchPostDonate = async (
  phonenumber: string,
  toss: string,
  username: string,
  content: string,
) => {
  const response = await fetch(`/api/donate`, {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain',
      'Content-Type': 'application/json;charset=UTF-8',
    },
    body: JSON.stringify({
      telNumber: phonenumber,
      tossid: toss,
      username,
      content,
    }),
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

export const fetchAdminLogin = async (adminName: string, password: string) => {
  const response = await fetch(`/api/login`, {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain',
      'Content-Type': 'application/json;charset=UTF-8',
    },
    body: JSON.stringify({
      adminName,
      password,
    }),
  });
  const data = await response.json();
  if (response.status === 200) {
    localStorage.setItem('token', data.token);
    return data;
  }

  throw new Error(data.message);
};

export const fetchGetDonateList = async (
  sort: string,
  size: number,
  page: number,
) => {
  const response = await fetch(
    `/api/donate/all?sort=${sort}&page=${page}&size=${size}`,
    {
      method: 'GET',
      headers: {
        Authorization: `${localStorage.getItem('token')}`,
        Accept: 'application/json, text/plain',
        'Content-Type': 'application/json;charset=UTF-8',
      },
    },
  );
  const data = await response.json();
  if (response.status === 200) {
    return { data, status: response.status };
  }
  throw new Error(data.message);
};

export const fetchPatchDonate = async (donate_id, amount) => {
  const response = await fetch(`/api/donate/${donate_id}`, {
    method: 'PATCH',
    headers: {
      Authorization: `${localStorage.getItem('token')}`,
      Accept: 'application/json, text/plain',
      'Content-Type': 'application/json;charset=UTF-8',
    },
    body: JSON.stringify({
      amount,
    }),
  });
  const data = await response.json();
  if (response.status === 200) {
    return { data, status: response.status };
  }
  throw new Error(response.statusText);
};

export const fetchGetMessage = async id => {
  const response = await fetch(`/api/message/${id}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json, text/plain',
      'Content-Type': 'application/json;charset=UTF-8',
    },
  });
  const data = await response.json();
  if (response.status === 200) {
    return { data, status: response.status };
  }
  throw new Error(response.statusText);
};

export const fetchPatchMessageType = async (id, type) => {
  const response = await fetch(`/api/message/type/${id}`, {
    method: 'PATCH',
    headers: {
      Authorization: `${localStorage.getItem('token')}`,
      Accept: 'application/json, text/plain',
      'Content-Type': 'application/json;charset=UTF-8',
    },
    body: JSON.stringify({
      type,
    }),
  });
  const data = await response.json();
  if (response.status === 200) {
    return { data, status: response.status };
  }
  throw new Error(response.statusText);
};
