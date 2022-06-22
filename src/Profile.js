import "./Profile.css";
const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
  imageWidth: 90,
  imageHeight: 150,
};

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <h2>{user.imageUrl}</h2>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={"Photo of " + user.name}
        style={{
          width: user.imageWidth,
          height: user.imageHeight,
        }}
      />
    </>
  );
}
