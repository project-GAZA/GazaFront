import axiosInstance from '../../axiosInstance';

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } },
) {
  try {
    const { id } = params; // 'a', 'b', or 'c'
    const { amount } = await req.json();
    const response = await axiosInstance.patch(`api/donate/${id}`, { amount });
    console.log(response);
    return Response.json(response.data);
  } catch (err) {
    return Response.json(err);
  }
}
