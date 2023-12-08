const photoInputEl = document.querySelector('#photo-input-el');
const submitStoryBtn = document.querySelector("#story-button");

function uploadImg(story_id) {
    const file = photoInputEl.files[0];

    const formData = new FormData();
    formData.append('file', file);
    formData.append('story_id', story_id);

    fetch('/api/photo', {
    method: 'POST',
    body: formData
    }).then((res) => {
    return res.json();
    }).then((data) => {
    console.log(data);
    }).catch((err) => {
    console.log(err);
    });
};

const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        // hit route to create story
        const storyData;

        // take story id and pass it to uploadImg
        uploadImg(storyData.id);



    } catch(err) {
        console.log(err);
    }


};


submitStoryBtn.addEventListener('click', handleSubmit);