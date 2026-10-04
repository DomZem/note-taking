import { ZenStackClient } from '@zenstackhq/orm';
import { Pool } from 'pg';
import { PostgresDialect } from '@zenstackhq/orm/dialects/postgres';
import { ConfigService } from '@nestjs/config';
import { schema, SchemaType } from '../../zenstack/schema.js';

export class DbService extends ZenStackClient<SchemaType> {
  constructor(private readonly configService: ConfigService) {
    super(schema, {
      dialect: new PostgresDialect({
        pool: new Pool({
          connectionString: configService.getOrThrow<string>('database.url'),
        }),
      }),
    });
  }
}
