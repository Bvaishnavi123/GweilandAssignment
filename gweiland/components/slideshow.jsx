import { Typography } from "@mui/material";

export const SildeShow = () => {
  const data = [
    {
      ImgPath: "/slideShow1.jpg",
      title: "bitfins",
    },
    {
      ImgPath : "/slideShow2.jpg",
      title:"future",

    },{
      ImgPath : "/slideShow3.jpg",
      title:"vudu",

    },
    {
      ImgPath : "/slideShow4.jpg",
      title:"pendulun",

    }
  ];
  return (
    <div className="mainContainer flex justify-between p-2 gap-2" style={{'flexWrap':'wrap',flexGrow:'grow'}}>
      {data?.map((ele, index) => {
        return (
          <div
            className="slideShowSingleContainer flex justify-between p-2"
            key={index}
          >
            <img
              src={ele?.ImgPath}
              className="slideShowImg"
              alt={ele?.title}
              key={index}
            ></img>
            <div className="pt-4 text-right" style={{width:"max-content"}}>
              <Typography variant="h4" className="whiteColor">
                {ele?.title}
              </Typography>
              <p className="whiteColor underline underline-offset-1	cur">
                shop now
              </p>
            </div>{" "}
          </div>
        );
      })}
    </div>
  );
};
