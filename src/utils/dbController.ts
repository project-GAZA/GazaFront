import { open } from 'sqlite';
import sqlite3 from 'sqlite3';
import fs from 'fs';
import { MessageType, SituationType } from '@/types/dataType';

export const clickLike = async (message_id: number, ip): Promise<string> => {
  try {
    const db = await open({
      filename: 'src/script/testdb.db',
      driver: sqlite3.Database,
    });
    const rows = await db.all(
      `SELECT *
       FROM like where message_id = ${message_id} and ip = "${ip}"`,
    );
    if (rows.length > 0) {
      await db.all(
        `DELETE 
       FROM like where message_id = ${message_id} and ip = "${ip}"`,
      );
      return `like를 삭제했습니다. message_id:${message_id}, ip:${ip}`;
    }
    await db.all(
      `INSERT INTO like 
       (message_id,ip) values (${message_id},"${ip}")`,
    );
    return `like를 생성했습니다. message_id:${message_id}, ip:${ip}`;
  } catch (e) {
    throw new Error('like 과정에서 오류가 났습니다.');
  }
};

export const deleteSituation = async (id: number): Promise<boolean> => {
  try {
    const db = await open({
      filename: 'src/script/testdb.db',
      driver: sqlite3.Database,
    });
    await db.all(
      `DELETE from situation
  WHERE id =${id} `,
    );
    return true;
  } catch (e) {
    throw new Error('sitaution테이블을 삭제하는데 오류가 났습니다.');
  }
};
// about Situation
export const modifySituation = async ({
  id,
  name,
  value,
}): Promise<boolean> => {
  try {
    const db = await open({
      filename: 'src/script/testdb.db',
      driver: sqlite3.Database,
    });
    await db.all(
      `UPDATE situation
  SET name = "${name}",
  value = ${value}
  WHERE id =${id} `,
    );
    return true;
  } catch (e) {
    throw new Error('sitaution테이블을 수정하는데 오류가 났습니다.');
  }
};

export const getSituation = async (): Promise<SituationType[]> => {
  try {
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

export const inputMessage = async ({
  username,
  content,
  nation,
  longitude,
  latitude,
  amount,
}: {
  username: string;
  content: string;
  nation: string;
  longitude: number;
  latitude: number;
  amount: number;
}): Promise<boolean> => {
  try {
    const db = await open({
      filename: 'src/script/testdb.db',
      driver: sqlite3.Database,
    });
    await db.run(
      `INSERT INTO message
      (username, content, nation, latitude, longitude,amount) 
      VALUES (?, ?, ?, ?, ?,?)`,
      [username, content, nation, latitude, longitude, amount],
    );
    return true;
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

export const deleteMessage = async (id: number): Promise<boolean> => {
  try {
    const db = await open({
      filename: 'src/script/testdb.db',
      driver: sqlite3.Database,
    });

    await db.run(
      `DELETE FROM message
       WHERE id = ${id};`,
    );
    return true;
  } catch (e) {
    throw new Error('message테이블에 데이터가 삭제되지 못했습니다.');
  }
};

export const getMessage = async (
  size: number,
  sort: string,
  page: number,
  ip: string,
): Promise<MessageType[]> => {
  try {
    console.log(`${process.cwd()}/.next/`);
    fs.readdir(`${process.cwd()}/.next/`, function (error, filelist) {
      console.log(filelist);
    });

    console.log(`${process.cwd()}/.next/_next`);
    fs.readdir(`${process.cwd()}/.next/_next`, function (error, filelist) {
      console.log(filelist);
    });

    console.log(__dirname);
    console.log(process.cwd());
    console.log(`${process.cwd()}/.next/_next/static/testdb.db`);
    const db = await open({
      filename: `${process.cwd()}/.next/_next/static/testdb.db`,
      driver: sqlite3.Database,
    });
    console.log('디비를 받아왔습니다. 이로그가 보인다면 SELECT가 문제입니다.');
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
