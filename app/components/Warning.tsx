import React from "react";

const Warning = ({ children }: any) => {
  return (
    <div className="border-b-2 p-4 border-[#e6bd19] rounded-t-lg text-center bg-gradient-to-t from-[#e6bd194f] via-[#e6bd1927] to-[#e6bd1915]">
      {children}
    </div>
  );
};

export default Warning;
