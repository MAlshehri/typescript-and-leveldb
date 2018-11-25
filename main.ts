import DbContext from "./database-context";
import Post from "./post";

const dbContext = new DbContext();

(async () => {
    let post1 = new Post(1, "Title 1", "Body 1")
    let post2 = new Post(2, "Title 2", "Body 2")

    await dbContext.addPost(post1)
    await dbContext.addPost(post2)

    let post1_from_leveldb = await dbContext.getPost(1)
    let post2_from_leveldb = await dbContext.getPost(2)

    let post3_from_leveldb = await dbContext.getPost(3) // error 

    console.log(JSON.stringify(post1_from_leveldb))
    console.log(JSON.stringify(post2_from_leveldb))


})();
