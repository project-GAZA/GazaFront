import axiosInstance from '../axiosInstance';

export async function GET() {
  try {
    const response = await axiosInstance.get(`api/donate`);
    if (response.status === 200) {
      return Response.json(response.data);
    }
  } catch (err) {
    return Response.json(err);
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const response = await axiosInstance.post(`api/donate`, body);
    return Response.json(response.data);
  } catch (err) {
    return Response.json(err);
  }
}
