<div className="mt-2 flex justify-between items-center border-y-2 border-gray-500 py-2">
        <Link className="flex items-center gap-3">
            <AiTwotoneLike className="text-xl text-blue-400"></AiTwotoneLike>
            <p className="text-gray-200 font-semibold text-base   ">
              Like
            </p>
          </Link>
            <Link className="flex items-center gap-3">
            <FaRegCommentDots className="text-xl text-blue-400"></FaRegCommentDots>
            <p className="text-gray-200 font-semibold text-base   ">
              Comment
            </p>
          </Link>



        <Link to={`/postDetails/${post._id}`} className="flex items-center gap-3">
            <FiSend className="text-xl text-blue-400"></FiSend>
            <p className="text-gray-200 font-semibold text-base   ">
              View Details
            </p>
          </Link>
        </div>