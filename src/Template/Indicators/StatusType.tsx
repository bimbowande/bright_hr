export const StatusType = ({ type }: { type: boolean }) => (
  <span
    className={`${
      type ? "bg-[#2B4522]" : "bg-[#a3a19b]"
    } py-1 px-2 text-[#fff] rounded-xl font-semibold text-xs`}
  >
    {type ? "approved" : "disapproved"}
  </span>
);
