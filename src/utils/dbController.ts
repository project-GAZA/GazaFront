import { open } from 'sqlite';
import sqlite3 from 'sqlite3';
import fs from 'fs';
import { MessagePostType, MessageType } from '@/types/dataType';

export const inputMessage = async (
  message: MessagePostType,
): Promise<MessageType> => {
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
    const { lastID } = await db.run(
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
    // 최근 삽입된 메시지의 ID 가져오기
    const data = await db.get('SELECT * FROM message WHERE message_id = ?', [
      lastID,
    ]);
    return data;
  } catch (e) {
    throw new Error('message테이블에 데이터가 들어가지 못했습니다.');
  }
};

export const getMessage = async (
  size: number,
  sort: string,
  page: number,
): Promise<MessageType[]> => {
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
    const rows = await db.all(
      `SELECT *
       FROM message
       ORDER BY
         CASE WHEN ? = 'time' THEN created_date END DESC,
         CASE WHEN ? = 'likes' THEN like_count END DESC
       LIMIT ? OFFSET ?;`,
      [sort, sort, size, (page - 1) * size],
    );
    return rows;
  } catch (error) {
    throw new Error('서버에 오류가 났습니다.');
  }
};
