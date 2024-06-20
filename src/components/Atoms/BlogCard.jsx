import { BsArrowRight } from "react-icons/bs";
import { LuDot } from "react-icons/lu";

const BlogCard = ({ blogData }) => {
  console.log("blogData", blogData);
  const { blogName, blogImage, blogDesc, blogDate } = blogData;
  return (
    <div className="md:w-[300px] w-[250px] border  hover:shadow duration-300  rounded">
      <a href="">
        <img
          src={blogImage}s
          alt={blogName}
          className="rounded-t w-full h-[150px] object-cover "
        />
      </a>
      <div className="p-4 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <div className="text-slate-600 flex text-[12px] items-center">
            <p className="">{blogDate}</p>
            <LuDot />

            <p>Gourav Sharma</p>
          </div>
          <a href="" className="text-[16px] truncate font-semibold text-theme-color">{blogName}</a>
          <div className="text-slate-500 line-clamp-2 text-[12px]">{blogDesc}</div>
        </div>
        <a href="" className="flex items-center gap-2 justify-start text-[14px] text-theme-color transition-opacity duration-300 hover:opacity-75">
          <div>Read the article</div> <BsArrowRight />

        </a>
      </div>
    </div>
  );
};

export default BlogCard;
