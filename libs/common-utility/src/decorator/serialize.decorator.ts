import { UseInterceptors } from '@nestjs/common';
import { SerializeInterceptor } from '../interceptor/serialize.interceptor';

interface ClassConstructor {
  new (...args: any[]): object;
}

export function Serialize(dto: ClassConstructor) {
  return UseInterceptors(new SerializeInterceptor(dto));
}
