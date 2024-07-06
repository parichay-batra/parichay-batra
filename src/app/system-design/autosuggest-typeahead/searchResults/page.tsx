import DOMPurify from "dompurify";

const SearchResults = ({ searchResults }: any) => {
  return (
    <div>
      {searchResults &&
        searchResults.map((result, index) => {
          const dangerousString = `
          <div>
                <span><strong>${result?._highlightResult?.title?.value}</strong></span>
                <span class="text-slate-500">
                     <strong>(${result?._highlightResult?.url?.value})</strong>
                </span>
          </div>
          
          <div>
            <span class="text-slate-500">Author : ${result?._highlightResult?.author?.value}</span> |
            <span class="text-slate-500">${result?.num_comments}Comments </span> |
           
          </div>`;

          return (
            <div
              key={index}
              className=" m-2"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(dangerousString, {
                  ALLOWED_TAGS: ["em", "strong", "div", "span"],
                  ALLOWED_ATTR: ["class", "className"],
                }),
              }}
            ></div>
          );
        })}
    </div>
  );
};

export default SearchResults;
