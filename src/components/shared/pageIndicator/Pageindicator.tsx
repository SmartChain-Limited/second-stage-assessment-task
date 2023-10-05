import React from "react";
import type PageIndicatorProps from "./PageIndicator.props";

const PageIndicator: React.FC<PageIndicatorProps> = ({
  currentPage,
  totalPage,
  className,
}) => {
  return (
    <div className={`@apply flex items-center gap-2 ${className}`}>
      {new Array(totalPage)
        .fill(" ")
        .map((_, index) => (
          <div
            key={`page-indicator-${index}`}
            className={`mx-2 h-[12px] w-[12px] rounded-full border md:w-[23px] md:h-[23px] text-center text-[#FFF] text-[6px] md:text-[12px] ${
              currentPage >= index + 1
                ? "bg-[#3C6AAC] text-white border-[#3C6AAC]"
                : "bg-[#DBDBDB]"
            }`}
          >
            {index + 1}
          </div>
        ))
        .map((item, index) => {
          return (
            <>
              {index > 0 && index < totalPage && (
                <hr
                  key={`separator-${index}`}
                  className={`w-[69px] h-[3px] mx-[-1rem] border border-[#3C6AAC] bg-[#3C6AAC]  md:w-[190px] ${
                    currentPage >= index + 1
                      ? "border-[#3C6AAC] bg-[#3C6AAC]  "
                      : "border-[#DBDBDB] bg-[#DBDBDB]"
                  }`}
                />
              )}
              {item}
            </>
          );
        })}
    </div>
  );
};

export default PageIndicator;
