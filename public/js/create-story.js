const photoInputEl = document.querySelector('#photo-input-el');
const submitStoryBtn = document.querySelector("#story-button");

async function uploadImg(story_id) {
    try {
        //Get the file selected to upload
        const file = photoInputEl.files[0];

        //Add the file and story id to the payload
        const formData = new FormData();
        formData.append('file', file);
        formData.append('story_id', story_id);

        //Call the api that will upload the image and associate it to the story
        const res = await fetch('/api/photo', {
            method: 'POST',
            body: formData
            });
        const data = await res.json();
        console.log(data);

    } catch(err) {
        console.log(err);
    }
};

const handleSubmit = async (event) => {
    event.preventDefault();

    //The title and content are needed as parameters to create the story.
    const body = {
        title: $('#title').val(),
        content: $('#story').val()
    };

    try {
        // hit route to create story
        const storyData = await fetch('/api/encounters', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: { 'Content-Type': 'application/json' },

        });

        const story = await storyData.json();

        //On run the upload if an image is selected
        if (!photoInputEl.value == "") {
            // take story id and pass it to uploadImg
            uploadImg(story.id);
        }

        //redirect to the encounters page to see the newly posted story
        document.location.replace('/encounter/' + story.id);
    } catch(err) {
        console.log(err);
    }
};

submitStoryBtn.addEventListener('click', handleSubmit);
