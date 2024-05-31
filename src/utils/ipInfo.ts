import axios from 'axios';
import { NextRequest } from 'next/server';

interface IpInfoResponse {
  country_code3: string;
  latitude: string;
  longitude: string;
}

export interface IpInfoType {
  nation: string;
  latitude: string;
  longitude: string;
  ip: string | null;
}

const getIpInfo = async (req: NextRequest): Promise<IpInfoType> => {
  try {
    let ip: any = req.headers.get('x-forwarded-for');
    if (ip) {
      [ip] = ip.split(',');
    }
    if (ip === '::1') {
      ip = '';
    }
    const url = `https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.NEXT_PUBLIC_IPGEOAPIKEY}&ip=${ip}`;
    console.log(url);
    const ipInfo = await axios.get<IpInfoResponse>(url);
    console.log(ipInfo);
    return {
      nation: ipInfo.data.country_code3,
      latitude: ipInfo.data.latitude,
      longitude: ipInfo.data.longitude,
      ip: ip === '' ? '127.0.0.1' : ip,
    };
  } catch (err) {
    throw Error('IP정보를 얻는과정에서 에러가 났습니다.');
  }
};

export default getIpInfo;
