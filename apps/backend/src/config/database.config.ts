import { registerAs } from '@nestjs/config';

export default registerAs('database', () => {
  const host = process.env.DATABASE_HOST;
  const port = process.env.DATABASE_PORT;
  const database = process.env.DATABASE_DB;
  const user = process.env.DATABASE_USER;
  const password = process.env.DATABASE_PASSWORD;

  if (!host || !port || !database || !user || !password) {
    throw new Error(
      'DATABASE_HOST, DATABASE_PORT, DATABASE_DB, DATABASE_USER, and DATABASE_PASSWORD are required',
    );
  }

  return {
    url: `postgresql://${encodeURIComponent(user)}:${encodeURIComponent(password)}@${host}:${port}/${encodeURIComponent(database)}`,
  };
});
