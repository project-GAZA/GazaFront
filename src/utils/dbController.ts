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
  field: string,
  value: number | string,
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
      `UPDATE message
      SET ${field} = '${value}'
      WHERE id = ${id};`,
    );

    // 최근 삽입된 메시지의 ID 가져오기
    const data = await db.get('SELECT * FROM message WHERE id = ?', [lastID]);
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
         CASE WHEN ? = 'time' THEN created_dt END DESC
       LIMIT ? OFFSET ?;`,
      [sort, size, (page - 1) * size],
    );
    return rows;
  } catch (error) {
    throw new Error('서버에 오류가 났습니다.');
  }
};
