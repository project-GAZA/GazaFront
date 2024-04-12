import axios from 'axios';
import type { NextApiRequest } from 'next';

interface IpInfoResponse {
  country_code3: string;
  latitude: string;
  longitude: string;
}

export interface IpInfoType {
  nation: string;
  latitude: string;
  longitude: string;
}

const getIpInfo = async (req: NextApiRequest): Promise<IpInfoType> => {
  let ip: string = '';
  if (
    req.headers['x-forwarded-for'] &&
    typeof req.headers['x-forwarded-for'] === 'string'
  ) {
    // x-forwarded-for 헤더가 존재할 경우, 첫 번째 주소를 사용자의 IP로 간주
    [ip] = req.headers['x-forwarded-for'].split(',');
  } else if (req.socket && req.socket.remoteAddress) {
    // req.socket.remoteAddress를 통해 IP 주소를 얻음
    ip = req.socket.remoteAddress;
  }
  const url = `https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.NEXT_PUBLIC_IPGEOAPIKEY}&ip=${ip}`;
  const ipInfo = await axios.get<IpInfoResponse>(url);
  return {
    nation: ipInfo.data.country_code3,
    latitude: ipInfo.data.latitude,
    longitude: ipInfo.data.longitude,
  };
};

export default getIpInfo;
