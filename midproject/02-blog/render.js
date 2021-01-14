export function layout(title, content) {
  return `
  <html>
  <head>
    <title>${title}</title>
    <style>

    
    
      body {
        padding: 80px;
        font: 16px Helvetica, Arial;
      }
  
      h1 {
        font-size: 2em;
      }
  
      footer {
        background-color:blue;
        text-align: center;
        color: white;
        heigh:300px;
      }

      h2 {
        font-size: 1.2em;
      }
  
      #posts {
        margin: 0;
        padding: 0;
      }
  
      #posts li {
        margin: 40px 0;
        padding: 0;
        padding-bottom: 20px;
        border-bottom: 1px solid #eee;
        list-style: none;
      }
  
      #posts li:last-child {
        border-bottom: none;
      }
  
      textarea {
        width: 500px;
        height: 300px;
      }
  
      input[type=text],input[type=password],
      textarea {
        border: 1px solid #eee;
        border-radius: 2px;
        padding: 15px;
        font-size: .8em;
      }
  
      input[type=text],input[type=password] {
        width: 500px;
      }

      header{
         background-color:red;
         height:30px;
      }
     
      article{
        background-color:red;
        
        width:300px;
        height:300px;
      }
      
      aside
      {
        background-color:red;
      }
      
    </style>
  </head>
 
  ${content}
 
  </html>
  `
}

export function loginUi() {
  console.log("進入 Login page");
  return layout('Login', `
  <body>
 
  <h1>Login</h1>
  <article>
  <form action="/login" method="post">
    <p><input type="text" placeholder="username"  name="username"></p>
    <img src="./IMG_2014.JPG">
    <p><input type="password" placeholder="password" name="password"></p>
    <p><input type="submit" value="Login"></p>
    <p>New user? <a href="/signup">Create an account</p>
  </form>
  <p>aaa</p>
  </article>



<aside>
<p>hi</p>
</aside>

  <footer>666</footer>
</body>
  `)
}

export function signupUi() {
  return layout('Signup',` 
  <h1>Signup</h1>
  <form action="/signup" method="post">
    <p><input type="text" placeholder="username" name="username"></p>
    <p><input type="password" placeholder="password" name="password"></p>
    <p><input type="text" placeholder="email" name="email"></p>
    <p><input type="submit" value="Signup"></p>
  </form>`
  )
}

export function success() {
  return layout('Success', `
  <h1>Success!</h1>
  You may <a href="/">read all Post</a> again !
  `)
}

export function fail() {
  return layout('Fail', `
  <h1>Fail!</h1>
  You may <a href="/">read all Post</a> or <a href="JavaScript:window.history.back()">go back</a> !
  `)
}

export function list(posts, user) {
  console.log('list: user=', user)
  let list = []
  for (let post of posts) {
    list.push(`
    <li>
      <h2>${ post.title } -- by ${post.username}</h2>
      <p>${post.body}</p>
      <p><a href="/post/${post.id}">Read post</a></p>
    </li>
    `)
  }
  let content = `
  <body>
  
  <header>
  
    <a href="home.html">回首頁</a>
    <a href="子目錄/gameroom/gameroom.html">game room</a>
    <a href="子目錄/classroom/classroom.html">eggwu的小教室</a>
    <a href="子目錄/網頁期末/學以致用.html">學以致用</a>
</header>

  <article>
  <h1>Posts</h1>
  <p>${(user==null)?'<a href="/login">Login</a> to Create a Post!':'Welcome '+user.username+', You may <a href="/post/new">Create a Post</a> or <a href="/logout">Logout</a> !'}</p>
  <p>There are <strong>${posts.length}</strong> posts!</p>
  <ul id="posts">
    ${list.join('\n')}
  </ul>
  </article>
  <footer>
  <p>gg</p>
  </footer>
  </body>
  
  `
  return layout('Posts', content)
}

export function newPost() {
  return layout('New Post', `
  <h1>New Post</h1>
  <p>Create a new post.</p>
  <form action="/post" method="post">
    <p><input type="text" placeholder="Title" name="title"></p>
    <p><textarea placeholder="Contents" name="body"></textarea></p>
    <p><input type="submit" value="Create"></p>
    <p><input type="file"  accept="image/*"/>
  </form>
  `)
}

export function show(post) {
  return layout(post.title, `
  <body>

    <h1>${post.title} -- by ${post.username}</h1>
    <aside>
    <p>${post.body}</p>
    </aside>
    
    <footer><p>aaa</p></footer>
  </body>
  `)
}
