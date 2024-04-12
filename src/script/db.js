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
    db.run(
      `
    CREATE TABLE IF NOT EXISTS admin (
      admin_id INTEGER PRIMARY KEY,
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

    db.run(
      `
    CREATE TABLE IF NOT EXISTS message (
      message_id INTEGER PRIMARY KEY,
      username TEXT NOT NULL,
      content TEXT,
      like_count INTEGER,
      donate_type TEXT,
      nation TEXT,
      latitude REAL,
      longitude REAL,
      created_date TIMESTAMP DEFAULT (DATETIME('now', 'localtime', '+9 hours')),
      last_modified_date TIMESTAMP DEFAULT (DATETIME('now', 'localtime', '+9 hours'))
    );`,
      err => {
        if (err) {
          console.error(err.message);
        } else {
          console.log('Message table created.');
        }
      },
    );

    db.run(
      `
    CREATE TABLE IF NOT EXISTS donate (
      donate_id INTEGER PRIMARY KEY,
      amount INTEGER NOT NULL,
      message_id INTEGER,
      donate_dt TIMESTAMP,
      created_date TIMESTAMP DEFAULT (DATETIME('now', 'localtime', '+9 hours')),
      last_modified_date TIMESTAMP DEFAULT (DATETIME('now', 'localtime', '+9 hours')),
      FOREIGN KEY (message_id) REFERENCES message (message_id)
    );`,
      err => {
        if (err) {
          console.error(err.message);
        } else {
          console.log('Donate table created.');
        }
      },
    );

    db.run(
      `
    CREATE TABLE IF NOT EXISTS member_ip (
      ip_id INTEGER PRIMARY KEY,
      ip TEXT NOT NULL,
      type TEXT NOT NULL,
      message_id INTEGER,
      FOREIGN KEY (message_id) REFERENCES message (message_id)
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
