import { Repository } from 'typeorm';
import { Transactional } from '../../src';
import { Post } from '../entities/Post.entity';

export class PostReaderService {
  constructor(readonly repository: Repository<Post>) {}

  @Transactional({ connectionName: 'dataSource2' })
  async getPostByMessage(message: string): Promise<Post> {
    return this.repository.findOneBy({ message }) as unknown as Post;
  }
}
