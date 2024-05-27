function replaceProfilePictures() {
  const profilePics = document.querySelectorAll("img.EntityPhoto-circle-3");
  const profilePics0 = document.querySelectorAll("img.EntityPhoto-circle-0");
  const profilePics1 = document.querySelectorAll("img.EntityPhoto-circle-1");
  const profilePics2 = document.querySelectorAll("img.EntityPhoto-circle-2");

  const newProfilePic =
    "https://media.licdn.com/dms/image/D5603AQE6ITl3rZMQAw/profile-displayphoto-shrink_400_400/0/1677669286202?e=1722470400&v=beta&t=MFH8FWvCC27LMMd4QmfuSyVgWaSf9EEUCkxpS066SYI";

  profilePics.forEach((img) => {
    img.src = newProfilePic;
  });
  profilePics0.forEach((img) => {
    img.src = newProfilePic;
  });

  profilePics1.forEach((img) => {
    img.src = newProfilePic;
  });

  profilePics2.forEach((img) => {
    img.src = newProfilePic;
  });
}

replaceProfilePictures();

// MutationObserver : monitor changes in the feed and replace profile pictures dynamically
const observer = new MutationObserver(replaceProfilePictures);
observer.observe(document.body, { childList: true, subtree: true });
