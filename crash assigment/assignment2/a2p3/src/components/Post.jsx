function Post({ title, body, id }) {
  return (
    <div>
      <h1>id: {id}</h1>
      <p>Title : {title}</p>
      <p>Body : {body}</p>
    </div>
  );
}

export default Post;
