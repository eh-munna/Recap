// const commentContainer = document.getElementById('commentContainer');
// const commentPostBtn = document.getElementById('commentPostBtn');
// const commentBox = document.getElementById('commentBox');
// const editCommentBtn = document.getElementById('editCommentBtn');

// let commentId = 0;

// commentPostBtn.addEventListener('click', () => {
//   commentId += 1;
//   const div = document.createElement('div');
//   const commentText = commentBox.value;
//   commentBox.value = '';
//   div.innerHTML = `

//   <div class="comment">

//   <p>${commentText}</p>
//   <button id= ${commentId} class='editCommentBtn'>Edit</button>

//   </div>

//   `;
//   commentContainer.appendChild(div);
// });

// document.addEventListener('click', (e) => {
//   console.log(e.target.id);
// });

// Function to add a new comment
function addComment() {
  const commentInput = document.getElementById('comment-input');
  const commentText = commentInput.value.trim();

  if (commentText !== '') {
    const commentList = document.getElementById('comment-list');
    const newComment = document.createElement('li');
    newComment.textContent = commentText;

    // Add edit button
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', function () {
      editComment(newComment);
    });

    newComment.appendChild(editButton);
    commentList.appendChild(newComment);

    // Clear input field
    commentInput.value = '';
  }
}

// Function to edit a comment
function editComment(commentElement) {
  console.log(commentElement);

  const textArea = document.createElement('textarea');
  textArea.value = commentElement.split(' ');
  document.getElementById('comment-box').appendChild(textArea);
  //   const newText = prompt(
  //     'Edit the comment:',
  //     commentElement.textContent.trim()
  //   );
  //   if (newText !== null && newText.trim() !== '') {
  //     commentElement.textContent = newText;
  //   }
}

// Add event listener for adding comments
const addCommentButton = document.getElementById('add-comment-btn');
addCommentButton.addEventListener('click', addComment);


