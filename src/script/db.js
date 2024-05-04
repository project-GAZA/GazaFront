const fs = require('fs');

const sqlite3 = require('sqlite3').verbose();
const path = 'src/script/testdb.db';

if (fs.existsSync(path)) {
  console.error('이미 TestDB를 생성했습니다.');
  return;
} else {
  const db = new sqlite3.Database(
    path,
    sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
    err => {
      if (err) {
        console.error(err.message);
        return;
      }
      console.log('Connected to the SQLite database.');
    },
  );

  db.serialize(() => {
    // 관리자 계정 테이블
    db.run(
      `
    CREATE TABLE IF NOT EXISTS admin (
      id INTEGER PRIMARY KEY,
      admin_name TEXT NOT NULL,
      password TEXT NOT NULL,
      activated BOOLEAN NOT NULL,
      created_date TIMESTAMP DEFAULT (DATETIME('now', 'localtime', '+9 hours')),
      last_modified_date TIMESTAMP DEFAULT (DATETIME('now', 'localtime', '+9 hours'))
    );`,
      err => {
        if (err) {
          console.error(err.message);
        } else {
          console.log('Admin table created.');
        }
      },
    );

    // 메세지 테이블
    db.run(
      `
    CREATE TABLE IF NOT EXISTS message (
      id INTEGER PRIMARY KEY,
      username TEXT NOT NULL,
      content TEXT,
      nation TEXT,
      latitude REAL,
      longitude REAL,
      amount INTEGER,
      created_dt TIMESTAMP DEFAULT (DATETIME('now', 'localtime', '+9 hours')),
      modified_dt TIMESTAMP DEFAULT (DATETIME('now', 'localtime', '+9 hours'))
    );`,
      err => {
        if (err) {
          console.error(err.message);
        } else {
          console.log('Message table created.');
        }
      },
    );

    // 사망자 현황 테이블
    db.run(
      `
    CREATE TABLE IF NOT EXISTS situation (
      id INTEGER PRIMARY KEY,
      title TEXT NOT NULL,
      amount INTEGER
    );`,
      err => {
        if (err) {
          console.error(err.message);
        } else {
          console.log('situation table created.');
        }
      },
    );

    // like한 테이블
    db.run(
      `
    CREATE TABLE IF NOT EXISTS like (
      id INTEGER PRIMARY KEY,
      ip TEXT NOT NULL,
      message_id INTEGER,
      created_dt TIMESTAMP DEFAULT (DATETIME('now', 'localtime', '+9 hours')),
      FOREIGN KEY (message_id) REFERENCES message (id)
    );`,
      err => {
        if (err) {
          console.error(err.message);
        } else {
          console.log('Member IP table created.');
        }

        // Close the database connection after all operations are done
        db.close(err => {
          if (err) {
            console.error(err.message);
          } else {
            console.log('Closed the database connection.');
          }
        });
      },
    );
  });
}
