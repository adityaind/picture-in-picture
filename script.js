const videoElement = document.getElementById('video');

const button = document.getElementById('button')

// Function to prompt user to select the media to play
async function selectMediaStream() {
    try {
        // using the screen capture API
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        console.log('whooops', error);
    }
    button.addEventListener('click', async () => {
        // disable the button
            button.disabled = true;
            // Start picture in picture
            await videoElement.requestPictureInPicture();
            // Reset Button
            button.disabled = false;
        });
}


// On load
selectMediaStream();