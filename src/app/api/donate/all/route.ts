import axiosInstance from '../../axiosInstance';

export async function GET(req) {
  try {
    const { searchParams } = req.nextUrl;
    const size = searchParams.get('size');
    const sort = searchParams.get('sort');
    const page = searchParams.get('page');
    const response = await axiosInstance.get(
      `api/donate/all?page=${page}&size=${size}&sort=${sort}`,
    );
    if (response.status === 200) {
      return Response.json(response.data);
    }
  } catch (err) {
    return Response.json(err);
  }
}
