import { Injectable, NestMiddleware } from '@nestjs/common';
import * as session from 'express-session';
import RedisStore from 'connect-redis';
import { createClient } from 'redis';

// redis-server
// brew services start redis
// brew services stop redis
// brew services info redis
// redis-cli

@Injectable()
export class SessionMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    const redisClient = createClient();

    redisClient.on('error', (err) => console.error('Redis client error', err));

    redisClient.connect().catch(console.error);

    const store = new RedisStore({
      client: redisClient,
    });

    session({
      store: store,
      secret: 'My-Secret-Key',
      resave: false,
      saveUninitialized: false,
      cookie: { secure: false, httpOnly: true, maxAge: 60000 },
    })(req, res, () => {
      console.log('Session middleware executed.');
      console.log('Session:', req.session);
      next();
    });
  }
}
