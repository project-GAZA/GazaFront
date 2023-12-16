export const errorToString = (err: unknown): string => {
  let message: string;
  if (err instanceof Error) message = err.message;
  else message = String(err);
  return message;
};
