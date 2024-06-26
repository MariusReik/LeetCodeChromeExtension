const fs = require('fs');

const icons = {
    "icon16.png": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAAnUlEQVR4AY2RAQ0AMAwC1fT/TewBhWykJkMAAJamwmIVhQFGR3FMG1sKCkZFbKgnbFQCGryT0pTijISgUckfTEGbq2Et2Oh06F6zXQH+FV3vDny72SCXtv/NLPcIMfTZQ4aGJIkhs60HjaSFiRI8kcMkpUSjYTjzQWcEkMkJM/NkzX3yg9hA8AAAABJRU5ErkJggg==",
    "icon48.png": "iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAQAAACjFJ5aAAAA0UlEQVR42mJsbGxsYmBgYIAAEghAIB7kAyoaUqlgoFsQUHISGhDkoi0GA2LKAlIT2RhKkGpgaWJmaC6KyIQFkAzXgFhNYAAS3o4OhhJjgwYCwozYHqA4nVoKU4BILOCqqiKZQWZhHme1LQeLwdDBgmLA1KLo5rXWBlAdlMXM4AblAjZSGbRbdQIRILJZAk5J6GYPuDPgyHUMMJQVo8gV1iNB3hCCdoWklhMx8gP4WQZEMBJKBfgQHZgC0ZRgFKGktwjH4kMGDsoKEapgoIAAAAASUVORK5CYII=",
    "icon128.png": "iVBORw0KGgoAAAANSUhEUgAAAIwAAACMCAQAAAD2RD0CAAAAiklEQVR42u3RAQ0AAAjDMO5fNCOqHUYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfA1kcAAAAFRTpGIjKDEAAAAASUVORK5CYII="
};

for (const [filename, base64String] of Object.entries(icons)) {
    const buffer = Buffer.from(base64String, 'base64');
    fs.writeFileSync(`icons/${filename}`, buffer);
}

console.log("Icons generated successfully!");
