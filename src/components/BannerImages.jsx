function BannerImages({ bannerImage, roomName, roomNickName }) {
  return (
    <div className="bannerImg flex-shrink-0 w-full">
      <div className="relative h-[calc(100vh-4rem)] w-full">
        {/* Image */}
        <img
          src={bannerImage}
          alt={roomName}
          className="h-full w-full object-cover rounded-lg shadow-lg"
        />

        {/* Overlay Content */}
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-center bg-black/60 p-6 w-full">
          <div className="text-center text-white">
            <h1 className="mb-2 text-3xl font-semibold">{roomName}</h1>
            <p className="mb-4 opacity-80">{roomNickName}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerImages;
