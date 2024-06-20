// RUNTIME NODE use require
(function () {
  const fs = require('fs');
  const sqlite3 = require('sqlite3').verbose();
  const path = `${process.cwd()}/src/script/testdb.db`;

  // 파일이 존재하면 삭제
  if (fs.existsSync(path)) {
    fs.unlinkSync(path);
    console.log('Database file deleted.');
  }
  console.log('Create DataBase file');

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
      amount INTEGER DEFAULT 0,
      created_dt TIMESTAMP DEFAULT (DATETIME('now', 'localtime', '+9 hours')),
      modified_dt TIMESTAMP DEFAULT (DATETIME('now', 'localtime', '+9 hours'))
    );`,
      err => {
        if (err) {
          console.error(err.message);
        } else {
          console.log('Message table created.');
          // message 테이블에 테스트 데이터 삽입
          const messages = [
            [
              'user1',
              'This is a test message.',
              'South Korea',
              37.5665,
              126.978,
              100,
            ],
            ['user2', 'Another test message.', 'Japan', 35.6895, 139.6917, 200],
            ['user3', 'Hello world!', 'United States', 40.7128, -74.006, 300],
            [
              'user4',
              'Test message with different values.',
              'Germany',
              52.52,
              13.405,
              150,
            ],
            [
              'user5',
              'Last test message.',
              'Australia',
              -33.8688,
              151.2093,
              250,
            ],
          ];

          const insertMessageStmt = db.prepare(
            `INSERT INTO message (username, content, nation, latitude, longitude, amount) VALUES (?, ?, ?, ?, ?, ?)`,
          );
          for (const message of messages) {
            insertMessageStmt.run(...message);
          }
          insertMessageStmt.finalize();

          console.log(
            'message default modified_dt 현재시간으로 수정하는 트리거 추가',
          );
          const createTriggerSQL = `
  CREATE TRIGGER IF NOT EXISTS update_modified_dt
  AFTER UPDATE ON message
  FOR EACH ROW
  BEGIN
    UPDATE message SET modified_dt = DATETIME('now', 'localtime', '+9 hours') WHERE id = OLD.id;
  END;
`;
          db.run(createTriggerSQL, err => {
            if (err) {
              console.error(err.message);
              throw err;
            }
            console.log('Update trigger created or verified.');
          });

          console.log('Message Test Datas created!!!');
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
      FOREIGN KEY (message_id) REFERENCES message (id)
    );`,
      err => {
        if (err) {
          console.error(err.message);
        } else {
          console.log('Like table created.');

          // like 테이블에 테스트 데이터 삽입
          const likes = [
            ['192.168.1.1', 1],
            ['127.0.0.1', 1],
            ['192.168.1.2', 2],
            ['192.168.1.3', 3],
            ['192.168.1.4', 4],
            ['192.168.1.5', 5],
          ];

          const insertLikeStmt = db.prepare(
            `INSERT INTO like (ip, message_id) VALUES (?, ?)`,
          );
          for (const like of likes) {
            insertLikeStmt.run(...like);
          }
          insertLikeStmt.finalize();

          console.log('Like test Datas created!!!');
        }
      },
    );

    // 사망자 현황 테이블
    db.run(
      `
    CREATE TABLE IF NOT EXISTS situation (
      id INTEGER PRIMARY KEY,
      name TEXT NOT NULL,
      value INTEGER
    );`,
      err => {
        if (err) {
          console.error(err.message);
        } else {
          console.log('situation table created.');
          const situations = [
            ['사망자', 12345],
            ['부상자', 22345],
            ['어린이 사망자', 1223],
            ['굶주린 사람', 123],
          ];

          const insertMessageStmt = db.prepare(
            ` INSERT INTO situation
              (name, value) 
              VALUES (?, ?)`,
          );
          for (const situation of situations) {
            insertMessageStmt.run(...situation, err => {
              if (err) {
                console.error(err.message);
              }
            });
          }
          insertMessageStmt.finalize(() => {
            // 모든 메시지 삽입이 완료된 후에 데이터베이스를 닫음
            db.close(err => {
              if (err) {
                console.error(err.message);
                throw err;
              }
              console.log('Database connection closed.');
            });
          });
        }
      },
    );
  });
})();
