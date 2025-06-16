export const Task1 = () => {
  const photos = [
    {
      albumId: 1,
      id: 1,
      title: "green",
      url: "https://via.placeholder.com/600/92c952",
      thumbnailUrl: "https://via.placeholder.com/150/92c952",
    },
    {
      albumId: 1,
      id: 2,
      title: "purple",
      url: "https://via.placeholder.com/600/771796",
      thumbnailUrl: "https://via.placeholder.com/150/771796",
    },
  ];

  return (
    <ul style={{ listStyle: "none", display: "flex", gap: 20, padding: 0 }}>
      {photos.map((photo) => (
        <li
          key={photo.id}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 10,
            width: 160,
            border: "1px solid #ccc",
            padding: 10,
            borderRadius: 8,
          }}
        >
          <img
            src={photo.thumbnailUrl}
            alt={photo.title}
            style={{
              width: 150,
              height: 150,
              objectFit: "cover",
              borderRadius: 4,
            }}
          />
          <span>AlbumId: {photo.albumId}</span>
          <strong>{photo.title}</strong>
        </li>
      ))}
    </ul>
  );
};
