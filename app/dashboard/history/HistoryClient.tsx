// app/dashboard/history/HistoryClient.tsx
"use client";

import React from "react";
import Templates from "@/app/(data)/Templates";
import { TEMPLATE } from "../_components/TemplateListSection";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { HISTORY } from "./page";

interface HistoryClientProps {
  historyList: HISTORY[];
}

const HistoryClient: React.FC<HistoryClientProps> = ({ historyList }) => {
  const GetTemplateName = (slug: string) => {
    const template: TEMPLATE | undefined = Templates?.find((item) => item.slug === slug);
    return template;
  };

  return (
    <div className="m-2 md:m-5 p-3 md:p-5 border rounded-lg bg-white overflow-x-auto">
      <h2 className="font-bold text-2xl md:text-3xl">History</h2>
      <p className="text-gray-500 text-sm md:text-base">Search your previously generated prompt</p>
      
      {/* Header Row */}
      <div className="min-w-[768px] grid grid-cols-7 font-bold bg-secondary mt-5 py-2 md:py-3 px-2 md:px-3 text-sm md:text-base">
        <h2 className="col-span-2">TEMPLATE</h2>
        <h2 className="col-span-2">AI RESP</h2>
        <h2>DATE</h2>
        <h2>WORDS</h2>
        <h2>COPY</h2>
      </div>

      {/* List Items */}
      <div className="min-w-[768px]">
        {historyList.map((item: HISTORY, index: number) => (
          <React.Fragment key={index}>
            <div className="grid grid-cols-7 my-3 md:my-5 py-2 md:py-3 px-2 md:px-3 text-sm md:text-base">
              <h2 className="col-span-2 flex gap-2 items-center truncate">
                <Image
                  src={GetTemplateName(item?.templateSlug)?.icon || "/path/to/default/icon.png"}
                  width={20}
                  height={20}
                  alt="template icon"
                  className="md:w-[25px] md:h-[25px]"
                />
                <span className="truncate">
                  {GetTemplateName(item.templateSlug)?.name}
                </span>
              </h2>
              <h2 className="col-span-2 line-clamp-2 md:line-clamp-3 break-words">
                {item?.aiResponse}
              </h2>
              <h2 className="truncate">{item?.createdAt}</h2>
              <h2>{item?.aiResponse.length}</h2>
              <h2>
                <Button
                  variant="ghost"
                  className="text-primary p-1 md:p-2 h-auto"
                  onClick={() => navigator.clipboard.writeText(item.aiResponse)}
                >
                  Copy
                </Button>
              </h2>
            </div>
            <hr />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default HistoryClient;