import { open, Database } from 'sqlite';
import sqlite3, { Statement } from 'sqlite3';
import { MessageType, SituationType } from '@/types/dataType';

type SQDBType = Database<sqlite3.Database, sqlite3.Statement>;

class DB_Instance {
  private static db: SQDBType | undefined;

  public static async getDatabase(): Promise<SQDBType> {
    try {
      if (!DB_Instance.db) {
        DB_Instance.db = await open<sqlite3.Database, sqlite3.Statement>({
          filename: `${process.cwd()}/src/script/testdb.db`,
          driver: sqlite3.Database,
        });
      }
      return DB_Instance.db;
    } catch (err: any) {
      throw Error(`DB를 불러오는데 에러가 났습니다. ${err.message}`);
    }
  }
}

export const clickLike = async (
  message_id: number,
  ip: string,
): Promise<string> => {
  try {
    const db = await DB_Instance.getDatabase();
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
  } catch (e: any) {
    throw new Error(`like클릭 과정에서 에러가 났습니다. Message: ${e.message}`);
  }
};

export const deleteSituation = async (id: number): Promise<boolean> => {
  try {
    const db = await DB_Instance.getDatabase();
    await db.all(
      `DELETE from situation
  WHERE id =${id} `,
    );
    return true;
  } catch (e: any) {
    throw new Error(
      `Situation을 지우는 과정에서 에러가 났습니다. Message: ${e.message}`,
    );
  }
};
// about Situation
export const modifySituation = async ({
  id,
  name,
  value,
}): Promise<boolean> => {
  try {
    const db = await DB_Instance.getDatabase();
    await db.all(
      `UPDATE situation
  SET name = "${name}",
  value = ${value}
  WHERE id =${id} `,
    );
    return true;
  } catch (e: any) {
    throw new Error(
      `Situation을 수정하는데 에러가 났습니다. Message: ${e.message}`,
    );
  }
};

export const getSituation = async (): Promise<SituationType[]> => {
  try {
    const db = await DB_Instance.getDatabase();
    const rows = await db.all(
      `SELECT *
       FROM situation`,
    );
    return rows;
  } catch (e: any) {
    throw new Error(
      `Situation을 받아오는데 에러가 났습니다. Message: ${e.message}`,
    );
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
    const db = await DB_Instance.getDatabase();
    await db.run(
      `INSERT INTO message
      (username, content, nation, latitude, longitude,amount) 
      VALUES (?, ?, ?, ?, ?,?)`,
      [username, content, nation, latitude, longitude, amount],
    );
    return true;
  } catch (e: any) {
    throw new Error(`메세지 입력에 실패했습니다. Message: ${e.message}`);
  }
};

export const updateMessage = async (
  id: number,
  username: string,
  content: string,
  amount: number | null,
): Promise<boolean> => {
  try {
    const db = await DB_Instance.getDatabase();

    await db.run(
      `UPDATE message
      SET username = '${username}',
      content = '${content}' ${amount ? `, amount = ${amount}` : ''}
      WHERE id = ${id};`,
    );

    return true;
  } catch (e: any) {
    throw new Error(`메세지 Update에 실패했습니다. Message: ${e.message}`);
  }
};

export const deleteMessage = async (id: number): Promise<boolean> => {
  try {
    const db = await DB_Instance.getDatabase();

    await db.run(
      `DELETE FROM message
       WHERE id = ${id};`,
    );
    return true;
  } catch (e: any) {
    throw new Error(`메세지 삭제에 실패했습니다. Message: ${e.message}`);
  }
};

export const getAllAmount = async (): Promise<number> => {
  try {
    const db = await DB_Instance.getDatabase();
    const rows = await db.all(`select sum(amount) as total from message`);
    const totalAmount = rows[0].total;

    if (totalAmount === undefined) {
      throw new Error('Data is undefined');
    }
    return totalAmount;
  } catch (e: any) {
    throw new Error(`모든 금액을 받아오는데 실패했습니다.${e.message}`);
  }
};

export const getMessage = async (
  size: number,
  sort: string,
  page: number,
  ip: string,
): Promise<MessageType[]> => {
  try {
    const db = await DB_Instance.getDatabase();
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
  } catch (e: any) {
    throw new Error(
      `메세지를 받아오는데에 실패했습니다. Message: ${e.message}`,
    );
  }
};
