import { open } from 'sqlite';
import sqlite3 from 'sqlite3';
import fs from 'fs';
import { MessagePostType, MessageType, SituationType } from '@/types/dataType';

// about Situation

export const getSituation = async (): Promise<SituationType[]> => {
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
       FROM situation`,
    );
    return rows;
  } catch (e) {
    throw new Error('sitaution테이블에 데이터를 가져오지 못했습니다.');
  }
};

// about Message

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
      (username, content, nation, latitude, longitude,amount) 
      VALUES (?, ?, ?, ?, ?,0)`,
      [
        message.nickname,
        message.content,
        message.nation,
        message.latitude,
        message.longitude,
      ],
    );
    // 최근 삽입된 메시지의 ID 가져오기
    const data = await db.get('SELECT * FROM message WHERE id = ?', [lastID]);
    return data;
  } catch (e) {
    throw new Error('message테이블에 데이터가 들어가지 못했습니다.');
  }
};

export const updateMessage = async (
  id: number,
  username: string,
  content: string,
  amount: number | null,
): Promise<boolean> => {
  try {
    const db = await open({
      filename: 'src/script/testdb.db',
      driver: sqlite3.Database,
    });

    await db.run(
      `UPDATE message
      SET username = '${username}',
      content = '${content}' ${amount ? `, amount = ${amount}` : ''}
      WHERE id = ${id};`,
    );

    return true;
  } catch (e) {
    throw new Error('message테이블에 데이터가 들어가지 못했습니다.');
  }
};

export const getMessage = async (
  size: number,
  sort: string,
  page: number,
  ip: string,
): Promise<MessageType[]> => {
  try {
    const db = await open({
      filename: 'src/script/testdb.db',
      driver: sqlite3.Database,
    });
    const rows = await db.all(
      `
SELECT
    m.id AS message_id,
    m.username,
    m.content,
    m.nation,
    m.latitude,
    m.longitude,
    m.amount,
    m.created_dt,
    m.modified_dt,
    COUNT(l.id) AS like_count,
    CASE 
        WHEN EXISTS (SELECT 1 FROM like l2 WHERE l2.message_id = m.id AND l2.ip = ?) THEN 1
        ELSE 0
    END AS user_liked
FROM
    message m
LEFT JOIN
    like l ON m.id = l.message_id
GROUP BY
    m.id
       ORDER BY
         CASE WHEN ? = 'new' THEN m.created_dt END DESC
       LIMIT ? OFFSET ?;`,
      [ip, sort, size, (page - 1) * size],
    );
    return rows;
  } catch (err) {
    throw new Error('DB를 가져오는데 문제가 발생했습니다.');
  }
};
