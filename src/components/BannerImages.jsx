function BannerImages(props) {
  return (
    <div className="bannerImg">
      <div className="relative h-[calc(100vh-4rem)] w-full">
        <img
          src={props.bannerImage}
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-center bg-black/60 p-6 w-full">
          <div className="text-center">
            <h1 className="text-white mb-4 text-3xl md:text-xl lg:text-lg">
              {props.roomName}
            </h1>
            <p className="text-white mb-6 opacity-80 text-3xl md:text-2xl lg:text-3xl">
              {props.roomnickName}
            </p>
            <div className="flex gap-2 justify-center">
              <button className="px-6 py-2 text-lg font-semibold text-black bg-white rounded-full hover:bg-gray-200 transition duration-300">
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerImages;
