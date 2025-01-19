import { Typography, Button } from "@material-tailwind/react";

function BannerImages(props) {
  return (
    <div className="bannerImg">
      <div className="relative h-dvh w-full">
        <img
          src={props.bannerImage}
          alt=""
          className="h-dvh w-full"
        />
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-center bg-black/60 p-6 w-64">
          <div className="text-center">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-xl lg:text-lg"
            >
              {props.roomName}
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-6 opacity-80 text-3xl md:text-2xl lg:text-3xl"
            >
              {props.roomnickName}
            </Typography>
            <div className="flex gap-2">
              <Button size="lg" color="white">
                Explore
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerImages;
