import axiosInstance from '../axiosInstance';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const response = await axiosInstance.post(`api/login`, body);
    if (response.status === 200) {
      return Response.json(response.data);
    }
  } catch (err: any) {
    if (err.response.status === 400) {
      return Response.json(
        { message: err.response.data.message },
        {
          status: 401,
        },
      );
    }
  }
}
