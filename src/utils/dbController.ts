import { open } from 'sqlite';
import sqlite3 from 'sqlite3';
import fs from 'fs';
import { MessagePostType } from '@/types/dataType';

export const inputMessage = async (message: MessagePostType) => {
  try {
    if (!fs.existsSync('src/script/testdb.db')) {
      throw new Error(
        '데이터베이스파일이 없습니다. yarn makedb로 db를 생성해주세요',
      );
    }
    const db = await open({
      filename: 'src/script/testdb.db',
      driver: sqlite3.Database,
    });
    const data = await db.run(
      `INSERT INTO message
      (username, content, like_count, donate_type, nation, latitude, longitude) 
      VALUES (?, ?, 0, 'message', ?, ?, ?)`,
      [
        message.nickname,
        message.content,
        message.nation,
        message.latitude,
        message.longitude,
      ],
    );
    return data;
  } catch (e) {
    throw new Error('message테이블에 데이터가 들어가지 못했습니다.');
  }
};
