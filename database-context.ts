import levelup, { LevelUp } from "levelup";
import leveldown, { LevelDown } from "leveldown";
import Post from "./post";

const connectionStirng = './mydata';

export default class DbContext {
  
  private db: LevelUp<LevelDown>

  constructor() {
    this.db = levelup(leveldown(connectionStirng));
  }

  public async getPost(key: any): Promise<Post | undefined> {
    try {
      let stream = await this.db.get(key);
      let post: Post = JSON.parse(stream.toString());
      return post;
    } catch (error) {
      console.log(error)
    }
  }

  public async addPost(post: Post): Promise<void | undefined> {
    try {
      let json = JSON.stringify(post);
      await this.db.put(post.id.toString(), json);
    } catch (error) {
      console.log(error)
    }
  }


}


